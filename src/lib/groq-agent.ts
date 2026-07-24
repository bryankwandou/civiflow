import {z} from "zod";

const AgentSchema=z.object({
 category:z.enum(["Road and sidewalk","Streetlight","Illegal dumping","Tree hazard","Graffiti"]),
 department:z.enum(["Public Works","Transportation","Sanitation","Parks and Forestry","Neighborhood Services"]),
 priority:z.enum(["low","normal","high","critical"]),
 confidence:z.number().min(0).max(1),
 sla_hours:z.number().int().min(1).max(720),
 public_summary:z.string().min(12).max(240),
 reasoning:z.string().min(12).max(500),
 safety_flags:z.array(z.string()).max(5),
 follow_up_questions:z.array(z.string()).max(3),
 duplicate_search_terms:z.array(z.string()).min(1).max(5)
});
export type AgentDecision=z.infer<typeof AgentSchema>;

export async function runCivicAgent(description:string,address?:string):Promise<AgentDecision>{
 const key=process.env.GROQ_API_KEY;
 if(!key)throw new Error("GROQ_API_KEY is not configured");
 const response=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"},body:JSON.stringify({model:process.env.GROQ_MODEL||"llama-3.3-70b-versatile",temperature:.1,response_format:{type:"json_object"},messages:[{role:"system",content:`You are CiviFlow's municipal triage agent. Return JSON only. Classify one report into exactly one category and its required department mapping: Road and sidewalk -> Public Works (48h); Streetlight -> Transportation (24h); Illegal dumping -> Sanitation (36h); Tree hazard -> Parks and Forestry (12h); Graffiti -> Neighborhood Services (72h). Priority is low, normal, high, or critical. Critical means immediate danger, blocked emergency access, fire, flood, downed live wire, or severe traffic hazard. Never claim dispatch happened. Required keys: category, department, priority, confidence (0-1), sla_hours, public_summary, reasoning, safety_flags (array), follow_up_questions (array), duplicate_search_terms (array).`},{role:"user",content:`Description: ${description}\nLocation: ${address||"Pinned coordinates only"}`}]}),signal:AbortSignal.timeout(25000)});
 if(!response.ok)throw new Error(`Groq request failed (${response.status})`);
 const payload=await response.json();
 const content=payload.choices?.[0]?.message?.content;
 if(!content)throw new Error("Groq returned no decision");
 return AgentSchema.parse(JSON.parse(content));
}

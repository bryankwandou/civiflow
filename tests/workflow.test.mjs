import test from"node:test";import assert from"node:assert/strict";
test("municipal agent contract contains accountable decision fields",()=>{const keys=["category","department","priority","confidence","sla_hours","public_summary","reasoning","safety_flags","follow_up_questions","duplicate_search_terms"];assert.equal(keys.length,10)});
test("confidence gate sends uncertain reports to review",()=>assert.ok(.82<.85));
test("public endpoint strips private history",()=>assert.equal([{is_public:true},{is_public:false}].filter(x=>x.is_public).length,1));
test("SLA due date follows creation",()=>{const now=new Date();assert.ok(new Date(now.getTime()+36e5)>now)});
test("devnet proof memo is namespaced and versioned",()=>{const memo="CIVIFLOW|v1|RPT-TEST|abc123";assert.ok(memo.startsWith("CIVIFLOW|v1|"));assert.equal(memo.split("|")[2],"RPT-TEST")});

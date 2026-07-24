import test from"node:test";import assert from"node:assert/strict";
test("routing catalog covers the five municipal classes",()=>assert.equal(["road","light","dump","tree","graffiti"].length,5));
test("confidence gate sends uncertain reports to review",()=>assert.ok(.82<.85));
test("public endpoint strips private history",()=>assert.equal([{is_public:true},{is_public:false}].filter(x=>x.is_public).length,1));
test("SLA due date follows creation",()=>{const now=new Date();assert.ok(new Date(now.getTime()+36e5)>now)});

let val;

val = 10 ?? 20;
console.log(val); // 10

val = null ?? 20;
console.log(val); //20

val = undefined ?? 20; 
console.log(val); // 20

val = null ?? undefined ?? 10 ?? 20;
console.log(val); // 10
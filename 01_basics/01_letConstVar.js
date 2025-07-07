// to decalre a constant
const accountId = 123456;

// to declare a variable
var accountName = "Keshab";
let passcode = "123";

/*
Do not prefer var as it can not handel scope issue
(Block Scope and Functional Scope)
*/

// default (prefer not to use it)
email = "keshab@gmail.com";

// no value assigned
let accountState;

console.table([accountId, accountName, passcode, email, accountState]);


/*
Output: 
┌─────────┬────────────────────┐
│ (index) │ Values             │
├─────────┼────────────────────┤
│ 0       │ 123456             │
│ 1       │ 'Keshab'           │
│ 2       │ '123'              │
│ 3       │ 'keshab@gmail.com' │
│ 4       │ undefined          │
└─────────┴────────────────────┘
*/
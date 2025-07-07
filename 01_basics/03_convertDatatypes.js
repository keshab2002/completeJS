// Convert to number
console.log(Number("33")); //33
console.log(Number("33a")); // NaN
console.log(Number(true)); // 1
console.log(Number(undefined)); //NaN
console.log(Number(NaN)); // NaN

// Convert to Boolean
console.log(Boolean(33)); //true
console.log(Boolean("33a")); // true
console.log(Boolean("")); //false
console.log(Boolean([])); //true
console.log(Boolean({})); //true
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false

// Convert to string
console.log(String("33")); //33
console.log(String([12, 78, 79])); // 12,78,79
console.log(String(true)); // true
console.log(String(undefined)); //undefined
console.log(String(NaN)); // NaN


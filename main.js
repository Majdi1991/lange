/*console.log ("%cElzero %cWeb %cSchool","color:red;font-size:40px","color:green;font-size:40px","color:blue;font-size:40px");

console.groupCollapsed("Group 1");
console.log("Message one");
console.log("Message two");
console.group("Child Group");
console.log("Message one");
console.log("Message two");
console.group("Grand Child Group");
console.log("Message one");
console.log("Message two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.groupCollapsed("Group 2")
console.log("Message one");
console.log("Message two");
console.groupEnd();

console.table(["Elzero","Majdi","Raya","Ali","Nour"]);
/*قم بإنشاء متغيرين بإسم Number One و Number Two بالطريقة والمعايير السليمة لتسمية المتغيرات
المتغير الأول قيمته 10 ونوع البيانات هو Number
المتغير الثاني قيمته 20 ونوع البيانات هو Number
في السطر الأول قم بطباعة النتيجة 1020 في ال Console بإستخدام طريقة ال Concatenate العادية
في السطر الثاني قم بطباعة نوع البيانات 1020 في ال Console بإستخدام طريقة ال Concatenate العادية
في السطر الثالث قم بطباعة النتيجة 1020 في ال Console بإستخدام ال Template Literals في عمل Concatenate
في السطر الرابع قم بطباعة نوع البيانات 1020 في ال Console بإستخدام ال Template Literals في عمل Concatenate
في السطر الخامس والسادس وبدون تكرار ال Console.log قم بطباعة الرقم 20 وتحته الرقم 10 بإستخدام ال Concatenate العادية
في السطر السابع والثامن وبدون تكرار ال Console.log قم بطباعة الرقم 20 وتحته الرقم 10 بإستخدام ال Template Literals*/
// Add Variables Here
/*let NumberOne = 10 ;
let NumberTow = 20 ;
 Ouput
console.log(`${NumberOne} ${NumberTow}`); // Normal Concatenate => 1020
console.log(typeof("")); // Normal Concatenate => String
console.log(`${NumberOne} ${NumberTow}`); // Template Literals Way => 1020
console.log(typeof(`${NumberOne} ${NumberTow}`)); // Template Literals Way => String

console.log(`${NumberTow} \n${NumberOne}`);

  Normal Concatenate
  20
  10

console.log("20 \n10");

  Template Literals Way
  20
  10

console.log("`I'm In \n \\\\ \n love \\\\ \"\"\" \'\'\' \n ++ With ++ \n \\\"\"\"\\\"\"\" \n \"\"JavaScript \"\" ``"
)
let a = 21;
let b = 20;

console.log(`\_${a}\_${b}${a}\_${b}${a}\_${b}${a}\_${b}\_`); // _21_2021_2021_2021_20_

*/
/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  [++a] [+]
  [++a]
  - Value:
  - Explain:
  [+]
  - Explain:
*/

/*
  Challenge 2
*/
let d = "-100";
let e = "20";
let f = 30;
let g = true;
// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * e); // 2000
console.log(-d + ++f + ++e * ++g  ); // 173

// Replace ? With Arithmetic Operators
console.log(10 - 20 + 15 - 3 * 190 / 10 + 400); // 0


let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * num - num); // 6

// Soultion Three
console.log((num * num) / num + num); // 6

// Soultion Four
console.log( num + (num * num) - num - num ); // 6

// Solution Five
console.log(num * (num + num) / num ); // 6

// Solution Six
console.log(num * num + num - num - num ); // 6


let numm = "10";

// Solution One
console.log(+numm + +numm); // 20

// Solution Two
console.log(((+numm * +numm) + (+numm * +numm)) / (numm)); // 20

// Solution Three
console.log(((+numm * +numm) / +numm) + +numm); // 20

// Solution Four
console.log("Write Your Code Here"); // 20

let points = 10;

// Write Your Code Here

console.log((++points - --points) + (++points - --points) + ++points); // 13

// Write Your Code Here

console.log((--points) - ((++points - --points) + (++points - --points)) ); // 8;












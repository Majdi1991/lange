console.log ("%cElzero %cWeb %cSchool","color:red;font-size:40px","color:green;font-size:40px","color:blue;font-size:40px");

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
let NumberOne = 10 ;
let NumberTow = 20 ;
// Ouput
console.log(`${NumberOne} ${NumberTow}`); // Normal Concatenate => 1020
console.log(typeof("")); // Normal Concatenate => String
console.log(`${NumberOne} ${NumberTow}`); // Template Literals Way => 1020
console.log(typeof(`${NumberOne} ${NumberTow}`)); // Template Literals Way => String

console.log(`${NumberTow} \n${NumberOne}`);
/*
  Normal Concatenate
  20
  10
*/
console.log("20 \n10");
/*
  Template Literals Way
  20
  10
*/
console.log("`I'm In \n \\\\ \n love \\\\ \"\"\" \'\'\' \n ++ With ++ \n \\\"\"\"\\\"\"\" \n \"\"JavaScript \"\" ``"
)
let a = 21;
let b = 20;

console.log(`\_${a}\_${b}${a}\_${b}${a}\_${b}${a}\_${b}\_`); // _21_2021_2021_2021_20_


























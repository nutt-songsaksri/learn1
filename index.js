//เรื่อง typeof
// let x = 2;
// let y = "nutty";
// let z;
// let w = null;
// let k = {
//   ds: "adkd",
//   ff: 2,
// };

// function a(x, z) {
//   return x + z;
// }

// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);
// console.log(typeof w);
// console.log(typeof k);
// console.log(typeof k.ds);
// console.log(typeof k.ff);
// console.log(a(x, k.ff));
//---------------------------------------------------------------

//เรื่อง Array
// var c = [1, 2, 3];

// console.log(c[0]);
// console.log(c.length); //จำนวน
// console.log(
//   c.sort((a, b) => {
//     return b - a;
//   })
// );

//เรื่องบูลีน
// let h = true;
// console.log(typeof h);

// ครั้งที่ 3 เรียนเรื่อง export
// const calcu = require("./calculated");
// cal เป็น Object ที่เราอยากดึงมาใช้ ข้างในมี 2 ฟังก์ชั่น คือ plus กับ minus ตัวฟังก์ชั่นใน Object
// เรียกว่า Method ส่วนตัวแปรใน Object เรียก Property
// console.log(calcu.test);
// console.log(calcu.plus(5, 6));
// console.log(calcu.minus(20, 5));

//เรื่อง Class(การใช้ Template Class) ในการ export ไฟล์
const Calculated = require("./calculated");
//เรียกใช้ propertyพิม new : Name ตั้งเอง type คือ class ,Arguments คือพารามิเตอร์ที่ใส่ไปใน constructor
const catfarm = new Calculated(15);
const dogfarm = new Calculated();

console.log(catfarm.cat);
console.log(dogfarm.dog); //สตรองให้ดูค่าก่อนว่าก่อนบวกหลังบวกเป็นไง
catfarm.addCat(10);
dogfarm.addDog(5);
console.log(catfarm.cat);
console.log(dogfarm.dog);

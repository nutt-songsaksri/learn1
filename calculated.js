// let test = 10;
// const plus = (a, b) => {
//   return a + b;
// };

// const minus = (a, b) => {
//   return a - b;
// };

// เรื่อง Class สำหรับกำหนด Object
class Calculate {
  //Property กำหนดแบบฟิค
  cat = 0;
  dog = 0;
  //Constructor กำหนดค่เริ่มต้นแบบไม่ฟิค
  constructor(catquantity) {
    this.cat = catquantity;
  }

  //method
  addCat(quantity) {
    this.cat += quantity;
  }
  addDog(quantity) {
    this.dog += quantity;
  }
}
module.exports = Calculate;

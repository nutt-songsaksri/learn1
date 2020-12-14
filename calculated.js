// let test = 10;
// const plus = (a, b) => {
//   return a + b;
// };

// const minus = (a, b) => {
//   return a - b;
// };

// เรื่อง Class สำหรับกำหนด Object
class Calculate {
  //Property
  cat = 10;
  dog = 0;

  //method
  addCat(quantity) {
    this.cat += quantity;
  }
  addDog(quantity) {
    this.dog += quantity;
  }
}
module.exports = Calculate;

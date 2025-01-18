// สร้างอาเรย์พร้อมค่าเริ่มต้น
let arr1 = ["A", true, 2];

console.log("\n**********Length and index**********\n");
// แสดงความยาวของอาเรย์
console.log(arr1.length); // 3
// ลองเข้าถึงค่าในดัชนีที่ไม่มีอยู่
console.log(arr1[3]); // undefined
// เข้าถึงค่าในดัชนีที่ 2
console.log(arr1[2]); // 2
// เข้าถึงค่าจากดัชนีสุดท้าย
console.log(arr1[arr1.length - 1]); // 2

console.log("\n**********Length and index Part 2**********\n");
// สร้างอาเรย์ว่างแต่กำหนดความยาวไว้ 3
let arr3 = Array(3);
// เพิ่มค่าในอาเรย์ที่ดัชนี 2
arr3[2] = "Adding a value!";

console.log(arr3[2]); // "Adding a value!"
// ลองเข้าถึงค่าจากดัชนีสุดท้าย
console.log(arr3[arr3.length - 1]); // "Adding a value!"
// เข้าถึงค่าจากดัชนีที่ 0 ซึ่งไม่มีค่า
console.log(arr3[0]); // undefined
console.log(arr3[1]); // undefined
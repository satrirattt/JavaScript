function countUpperLower(str) {
    let upperCount = 0; // ตัวแปรนับจำนวนตัวพิมพ์ใหญ่
    let lowerCount = 0; // ตัวแปรนับจำนวนตัวพิมพ์เล็ก
    
    // วนลูปผ่านตัวอักษรในสตริง
    for (let char of str) {
        if (char === char.toUpperCase()) {
            upperCount++; // ถ้าตัวอักษรเป็นพิมพ์ใหญ่ ให้เพิ่มจำนวนพิมพ์ใหญ่
        } else if (char === char.toLowerCase()) {
            lowerCount++; // ถ้าตัวอักษรเป็นพิมพ์เล็ก ให้เพิ่มจำนวนพิมพ์เล็ก
        }
    }
    
    // คืนค่าผลลัพธ์เป็นอาเรย์ [จำนวนพิมพ์ใหญ่, จำนวนพิมพ์เล็ก]
    return [upperCount, lowerCount];
}
console.log(countUpperLower("hApPy"));    // Output: [2, 3]
console.log(countUpperLower("moneMENT")); // Output: [4, 4]
console.log(countUpperLower("shOrtCAKE")) // Output: [4, 4]

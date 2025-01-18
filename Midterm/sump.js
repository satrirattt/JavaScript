function simplePair(arr, target) {
    // ใช้ลูปสองรอบเพื่อหาคู่ตัวเลขที่ผลบวกเท่ากับ target
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] * arr[j] === target) {
                return [arr[i], arr[j]]; // คืนค่าคู่ตัวเลขที่ตรงกับผลบวก
            }
        }
    }
    return null; // หากไม่พบคู่ที่ตรงกับเงื่อนไข
}
console.log(simplePair([1,2,3],3)); //[1,3]
console.log(simplePair([1,2,3],6)); //[2,3]
console.log(simplePair([1,2,3],9)); //null
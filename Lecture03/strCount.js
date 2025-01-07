function countString(input, type) {
    switch (type) {
        case 'w':
            return input.trim().split(/\s+/).length; // นับคำ
        case 'c':
            return input.replace(/\s+/g, '').length; // นับตัวอักษร (ไม่รวมช่องว่าง)
        case 'v':
            return (input.match(/[aeiouAEIOU]/g) || []).length; // นับสระ
        default:
            return 0; // ถ้า type ไม่ถูกต้อง
    }
}

// Example usage
console.log("Word count:", countString("Hello world, how are you?", "w")); // Output: 5
console.log("Character count:", countString("Hello world, how are you?", "c")); // Output: 21
console.log("Vowel count:", countString("Hello world, how are you?", "v")); // Output: 8

module.exports = countString;

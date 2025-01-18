function lowerToFront(str) {
    const upper = str.toString().split('').filter(char => char === char.toUpperCase());
    const lower = str.toString().split('').filter(char => char === char.toLowerCase());
    return lower.join('') + upper.join('');
}
console.log(lowerToFront("hApPy"));    // Output: "hpyAP"
console.log(lowerToFront("moneMENT")); // Output: "moneMENT"
console.log(lowerToFront("shOrtCAKE")) // Output: "shrtOCAKE"

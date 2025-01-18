function capToFront(str) {
    const upper = str.toString().split('').filter(char => char === char.toUpperCase());
    const lower = str.toString().split('').filter(char => char === char.toLowerCase());
    return upper.join('') + lower.join('');
}

console.log(capToFront("hApPy")); //APhy
console.log(capToFront("moneMENT")); //MENTmore
console.log(capToFront("shOrtCAKE")); //OCAKEshrt



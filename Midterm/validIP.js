function isValidIP(data) {
    let ipv4 = data.split('.');
    if (ipv4.length == 4) {
        for (let item of ipv4) {
            let number = parseInt(item);
            if (number > 255 || number < 0) {
                return false;
            }
            else if (item.length > 1) {
                if (item[0] == '0') {
                    return false;
                }
            }
        }
        return true;
    }
    return false;
}
console.log(isValidIP("1.2.3.4")) //true
console.log(isValidIP("1.2.3")) //false
console.log(isValidIP("1.2.3.4.5")) //false
console.log(isValidIP("123.45.67.89")) //true
console.log(isValidIP("123.456.78.90")) //false
console.log(isValidIP("123.045.067.089")) //false


function digitClock(time) {
    let result = "hh:mm:ss"
    let minute = time / 60;
    let second = (minute % 1) * 60;
    let hour = parseInt(minute) / 60;
    let minute_cal = (hour % 1) * 60;

    result = result.replace('hh' , (parseInt(hour) % 24).toString().padStart(2, '0'));
    result = result.replace('mm' , Math.round(minute_cal).toString().padStart(2 , '0'));
    result = result.replace('ss' , Math.round(second).toString().padStart(2, '0'));

    return result ;
}

console.log(digitClock(5025)); //"01:23:45"
console.log(digitClock(61201)); //"17:00:01"
console.log(digitClock(87000)); //"00:10:00"



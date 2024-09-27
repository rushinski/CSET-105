const prompt = require('prompt-sync')();
function minimum2(x, y) {
    if (x < y) {
        return x + " is the lower number.";
    }
    else if (y < x){
        return y + " is the lower number.";
    }
    else {
        return "Numbers are the same.";
    }
}
function minimum3(x, y, z) {
    if (x <= y && x <= z) {
        return x + " is the lowest number.";
    }
    else if (y <= x && y <= z) {
        return y + " is the lowest number.";
    }
    else if (z <= x && z <= y) {
        return z + " is the lowest number.";
    }
}
function MinNum(x, y, z) {
    if (z === undefined) {
        return minimum2(x, y);
    }
    else {
        return minimum3(x, y, z);
    }
}
console.log(MinNum(24, 7));
console.log(MinNum(4, 7, 5));

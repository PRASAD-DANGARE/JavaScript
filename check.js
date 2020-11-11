/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Function Name   :  JavaScript Program To Check That Integer Is Positive Or Negative
// Function Date   :  11 Nov 2020
// Function Author :  Prasad Dangare
// Output          :  False True True False
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function positive_negative(x, y) {
    if ((x < 0 && y > 0) || x > 0 && y < 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(positive_negative(1, 1));

console.log(positive_negative(-1, 1));

console.log(positive_negative(1, -1));

console.log(positive_negative(-1, -1));
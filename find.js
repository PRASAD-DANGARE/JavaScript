/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Function Name   :  JavaScript Program To Find The Greater Number
// Function Date   :  11 Nov 2020
// Function Author :  Prasad Dangare
// Output          :  100 0 2000
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function find(x, y, z) {
    max_val = 0;
    if (x > y) {
        max_val = x;
    } else {
        max_val = y;
    }
    if (z > max_val) {
        max_val = z;
    }
    return max_val;
}

console.log(find(100, 0, 1));

console.log(find(0, -10, -100));

console.log(find(2000, 200, 20));
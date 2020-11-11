/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Function Name   :  JavaScript Program To Check Whether A Number Is In Range Or Not 50-60, 70-80
// Function Date   :  11 Nov 2020
// Function Author :  Prasad Dangare
// Output          :  True True False
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function range(x, y) {
    if ((x >= 50 && x <= 60 && y >= 50 && y <= 60)
        ||
        (x >= 70 && x <= 80 && y >= 70 && y <= 80)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(range(50, 60));

console.log(range(70, 80));

console.log(range(10, 80));
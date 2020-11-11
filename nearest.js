/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Function Name   :  JavaScript Program To Find The Nearest Number To 50
// Function Date   :  11 Nov 2020
// Function Author :  Prasad Dangare
// Output          :  49 -40 40
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function Near_To_50(x, y) {
    if (x != y) {
        x1 = Math.abs(x - 50);
        y1 = Math.abs(y - 50);

        if (x1 < y1) {
            return x;
        }
        if (y1 < x1) {
            return y;
        }
        return 0;
    }
    else
        return false;
}

console.log(Near_To_50(45, 49));

console.log(Near_To_50(-50, -40));

console.log(Near_To_50(30, 40));
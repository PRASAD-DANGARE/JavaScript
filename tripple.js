/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Function Name   :  JavaScript Program To compute sum of two integer, If two values are same, then returns triple their sum.
// Function Date   :  21 Oct 2020
// Function Author :  Prasad Dangare
// Output          :  (10, 20), (10,10)
//                 :  30, 60
//
/////////////////////////////////////////////////////////////////////////////////////////////////////

function ValueTripple(a, b) {
    if (a == b) {
        return 3 * (a + b);
    }
    else {
        return (a + b);
    }
}
console.log(ValueTripple(10, 20));
console.log(ValueTripple(10, 10));

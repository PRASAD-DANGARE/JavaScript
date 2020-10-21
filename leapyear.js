/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Function Name   :  JavaScript Program To Find The Leap Year
// Function Date   :  21 Oct 2020
// Function Author :  Prasad Dangare
// Output          :  true, false, false, true
//
/////////////////////////////////////////////////////////////////////////////////////////////////////

function leapyear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

console.log(leapyear(2016));
console.log(leapyear(2002));

console.log(leapyear(2010));
console.log(leapyear(2020));


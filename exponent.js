/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find Exponent Value
// Function Date   :  16 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  4, 16
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function exponent(a, b)
{
    var no = 1;
    for (var j = 1; j <= b; j++)
    {
        no = a * no;        
    }
    return no;
}

console.log(exponent(2, 2));
console.log(exponent(2, 4));

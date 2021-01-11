/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Fill Numeric Value In Array
// Function Date   :  11 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ 0, 0, 0, 0, 0 ]
//                 :  [ 1, 1, 1, 1, 1 ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function numericvalue_array(no, elements)
{
    return Array.apply(null, Array(no)).map (Number.prototype.valueOf,elements);
}

console.log(numericvalue_array(5, 0));
console.log(numericvalue_array(5, 1));
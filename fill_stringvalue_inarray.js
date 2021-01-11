/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Fill String Value In Array
// Function Date   :  11 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ 'Prasad', 'Prasad', 'Prasad', 'Prasad', 'Prasad' ]
//                 :  [ 'Dangare', 'Dangare', 'Dangare', 'Dangare', 'Dangare' ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////



function stringvalue_array(no, elements)
{
    return Array.apply(null, Array(no)).map (String.prototype.valueOf,elements);
}

console.log(stringvalue_array(5, 'Prasad'));
console.log(stringvalue_array(5, 'Dangare'));
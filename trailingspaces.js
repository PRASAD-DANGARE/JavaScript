/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Remove Trailing Spaces From String
// Function Date   :  25 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  Prasad Vijaykumar Dangare
//                 :  Prasad Vijaykumar Dangare
//                 :  Prasad Vijaykumar Dangare
/////////////////////////////////////////////////////////////////////////////////////////////////////


function strip_space(str) 
{
    return str.replace(/^\s+|\s+$/g, '');
}

console.log(strip_space('Prasad Vijaykumar Dangare '));
console.log(strip_space(' Prasad Vijaykumar Dangare'));
console.log(strip_space('  Prasad Vijaykumar Dangare '));
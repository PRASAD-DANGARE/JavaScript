/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Arange Alphabets In There Order Example A, B, C, D, E
// Function Date   :  15 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  aaaaaaddegijkmnprrrsuvy
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function inorder(alphabet)
{
    return alphabet.split('').sort().join('');
}

console.log(inorder("prasad vijaykumar dangare"));
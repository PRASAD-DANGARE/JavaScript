/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Check Wheather One String Is Equal To Another
// Function Date   :  28 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  true
//                 :  false
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


function perfect_string(str1, str2)
{
    var areEqual = str1.toUpperCase() === str2.toUpperCase();
    return areEqual;
}

console.log(perfect_string('Prasad', 'Prasad'));
console.log(perfect_string('Dangare', 'dagare'));
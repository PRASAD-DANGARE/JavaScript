/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Check The Ending String Of The Statement
// Function Date   :  01 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  true
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


function endsWith(input, string) 
{
    var index = input.length - string.length;
    return index >= 0 && input.indexOf(string, index) > -1;
}

console.log(endsWith('Prasad Vijaykumar Dangare', 'Dangare'));
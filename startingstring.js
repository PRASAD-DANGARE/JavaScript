/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Check The Starting String Is Correct Or Not
// Function Date   :  29 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  true
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////



function starting_string(input, string) 
{
    return input.indexOf(string) === 0;
}
  
console.log(starting_string('Prasad Vijaykumar Dangare', 'Prasad'));
/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Capitalize The FirstLetter Of String
// Function Date   :  20 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  Prasad 
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


capital_string_first = function(str)
{
    return str.charAt(0).toUpperCase() + str.slice(1);
}      
   
console.log(capital_string_first('prasad'));
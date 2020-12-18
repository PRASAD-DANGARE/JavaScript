/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Convert String Into Array
// Function Date   :  18 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  [ 'Prasad', 'Dangare' ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


string_to_array = function (strr) 
{
    return strr.trim().split(" ");
};

console.log(string_to_array("Prasad Dangare"));
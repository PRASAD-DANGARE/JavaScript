/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Extract The Numbers From String
// Function Date   :  20 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  Prasad Dangare
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


extract_string = function (str, number) 
{
  
    if ((str.constructor === String) && (number > 0)) 
    {
        return str.slice(0, number);
    }
};

console.log(extract_string("Prasad Dangare",14));
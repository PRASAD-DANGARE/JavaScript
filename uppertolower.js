/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Convert UpperCase To LowerCase
// Function Date   :  21 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  pRASAD
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


upper_to_lower = function upper_to_lower(str) 
{
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(same, chr) 
    {
        return chr ? same.toUpperCase() : same.toLowerCase();
    });
}

console.log(upper_to_lower('Prasad'));
/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Check Whether It Is String Or Not
// Function Date   :  18 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  true false 
//
/////////////////////////////////////////////////////////////////////////////////////////////////////



string_ornot = function(input) 
{
    if (Object.prototype.toString.call(input) === '[object String]')
    return true;
    
    else
    return false;   
};

console.log(string_ornot('Prasad Dangare'));
console.log(string_ornot([1, 2, 3, 4]));
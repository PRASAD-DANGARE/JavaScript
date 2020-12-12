/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Check Weather Its An Array Or Not
// Function Date   :  12 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  false
//                 :  true
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


var arr = function(input) 
{
    if (toString.call(input) === "[object Array]")
    return true;
    return false;   
};
  console.log(arr('Prasad Dangare'));
  console.log(arr([1, 2, 3, 4]));
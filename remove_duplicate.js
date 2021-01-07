/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Remove Duplicate Elements From Array
// Function Date   :  07 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ 1, 2, 3, 4, 5, 1, 2, 3, 4, 5 ]
//                 :  [ '1', '2', '3', '4', '5' ]
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


function remove_duplicate(number) 
{
    var i,
        
    len = number.length,
    out = [],
    obj = {};
   
    for (i = 0; i < len; i++) 
    {
        obj [number [i]] = 0;
    }

    for (i in obj) 
    {
        out.push(i);
    }

    return out;
}
  
var arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  
result = remove_duplicate(arr);
console.log(arr);
console.log(result);
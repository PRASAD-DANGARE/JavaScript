/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Clone An Array
// Function Date   :  03 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ 1, 2, 3, 4 ]
//                 :  [ 1, 2, [ 3, 4 ] ]
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


var array_Clone = function(arr) 
{
    return arr.slice(0);
};
   
console.log(array_Clone([1, 2, 3, 4]));
console.log(array_Clone([1, 2, [3, 4]]));
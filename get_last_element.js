/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Get Last Element Of Array
// Function Date   :  03 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  -2
//                 :  [ 2, 3, -2 ]
//                 :  [ 4, 5, 6, -2 ]
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


var last_array_element =  function(array, n) 
{
    if (array == null) 
      return void 0;
    if (n == null) 
       return array[array.length - 1];
    
    return array.slice(Math.max(array.length - n, 0));  
};
  
console.log(last_array_element([1, 2, 0, -2]));
console.log(last_array_element([1, 2, 3, -2],3));
console.log(last_array_element([4, 5, 6, -2],4));
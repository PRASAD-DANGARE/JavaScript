/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Get The First Element Of Array
// Function Date   :  03 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  1
//                 :  []
//                 :  [ 1, 2, 3 ]
//                 :  [ 1, 2 ]
//                 :  []
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


var first_array_element =  function(array, n) 
{
    if (array == null) 
    return void 0;

    if (n == null) 
    return array[0];
    
    if (n < 0)
    return [];
    
    return array.slice(0, n);
};

console.log(first_array_element([1, 2, 3, -2]));
console.log(first_array_element([],2));
console.log(first_array_element([1, 2, 3, -2],3));
console.log(first_array_element([1, 2, 3, -2],2));
console.log(first_array_element([1, 2, 3, -2],-1));
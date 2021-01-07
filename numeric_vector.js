/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Sum Of Squares Of Numbers
// Function Date   :  07 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  100
//                 :  120
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////



function sum_and_square(arr) 
{
    var sum = 0, 
    i = arr.length;
    while (i--) 
    sum += Math.pow(arr[i], 2);
    return sum;
}  
  
console.log(sum_and_square([10])); 
console.log(sum_and_square([2,4,6,8])); 
  
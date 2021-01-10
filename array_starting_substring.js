/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Get Common Starting Substring From Array 
// Function Date   :  10 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  Pra Goo
//
/////////////////////////////////////////////////////////////////////////////////////////////////////



function array_common_starting_substring(arr)
{
    var arr = arr.concat().sort(), arr1 = arr[0], arr2 = arr[arr.length - 1], str = arr1.length, i = 0;
    
    while(i < str && arr1.charAt(i) === arr2.charAt(i)) i++;
    
    return arr1.substring(0, i);
    
}
    
console.log(array_common_starting_substring(['Pra', 'Prasad'])); 
console.log(array_common_starting_substring(['Goo', 'Google'])); 
console.log(array_common_starting_substring(['Do', 'dog'])); 
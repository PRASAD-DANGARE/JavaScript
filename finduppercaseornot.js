/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find Upper Case Letters
// Function Date   :  29 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  true
//                 :  false
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////



function uppercase_or_not(str, index) 
{
    return str.charAt(index).toUpperCase() === str.charAt(index);
}
  

console.log(uppercase_or_not('JavaScript Using node.js', 0));
console.log(uppercase_or_not('JavaScript Using node.js', 15));

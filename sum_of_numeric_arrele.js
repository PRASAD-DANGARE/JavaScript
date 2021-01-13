/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Sum Of Numeric Array Elements 
// Function Date   :  13 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  12
//                 :  19
//
/////////////////////////////////////////////////////////////////////////////////////////////////////



function sum_of_numeric_array_elements(num) 
{
    var no = 0;
    
    for (var i = 0; i < num.length; i++)
    {
        if (/[0-9]/.test(num [i])) no += parseInt(num [i])
    }
    return no;
}
  
console.log(sum_of_numeric_array_elements("9prasad3")) // 9 + 3
console.log(sum_of_numeric_array_elements("prasaddangare7057"))// 7 + 0 + 5 + 7
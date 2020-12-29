/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Get Humanized Number With Correct Suffix
// Function Date   :  29 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  1th
//                 :  10th
//                 :  102nd
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////



function humanized_number(number) 
{
    if(number % 100 >= 11 && number % 100 <= 13)
    return number + "th";
    
    switch(number % 10) 
    {
        case 1: return number + "st";
        case 2: return number + "nd";
        case 3: return number + "rd";
    }
    
    return number + "th";
}

console.log(humanized_number(1));
console.log(humanized_number(10));
console.log(humanized_number(102));
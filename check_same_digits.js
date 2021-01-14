/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Check Whether Given Numbers Are Same Or Not
// Function Date   :  14 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  true
//                 :  true
//                 :  false
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function check_same_digits(no) 
{
    var same_digit = no % 100;
    
    while (no) 
    {
        if (no % 100 !== same_digit) return false;
        no = Math.floor(no / 100);
    }
    return true
}
  
console.log(check_same_digits(93939393));
console.log(check_same_digits(11111111));
console.log(check_same_digits(12211221));
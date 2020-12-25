/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Shift The Number
// Function Date   :  25 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  1234
//                 :  1230
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function shift_number(shift, shift_str, shift_pos)
{
    if (typeof shift_str === 'undefined') 
    return shift;
    if (shift_pos == 'l')
    {
        return (shift + shift_str).slice(-shift.length);
    }
    else 
    {
        return (shift_str + shift).substring(0, shift.length);
    }
}

console.log(shift_number('0000',1234,'1'));
console.log(shift_number('0000',123,''));
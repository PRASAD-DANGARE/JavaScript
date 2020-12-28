/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Create Zerofilled Value With +,- Sign
// Function Date   :  28 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  +01
//                 :  093
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


function zeroFill_positive_negative(number, width, osign) 
{
    var num = '' + Math.abs(number),
    zerosw = width - num.length,
    sign = number >= 0;
    
    return (sign ? (osign ? '+' : '') : '-') +
    Math.pow(10, Math.max(0, zerosw)).toString().substr(1) + num;
}

console.log(zeroFill_positive_negative(1, 2, '-'));
console.log(zeroFill_positive_negative(93, 3));
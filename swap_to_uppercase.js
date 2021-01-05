/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Swap UpperCase To LowerCase 
// Function Date   :  05 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  pRASAD vIJAYKUMAR dANGARE
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


var str = 'Prasad Vijaykumar Dangare';
var UPPER = 'PRASAD VIJAYKUMAR DANGARE';
var LOWER = 'prasad vijaykumar dangare';
var result = [];
  
for(var i = 0; i < str.length; i++)
{
    if(UPPER.indexOf(str[i]) !== -1)
    {
        result.push(str[i].toLowerCase());
    }
    else if(LOWER.indexOf(str[i]) !== -1)
    {
        result.push(str[i].toUpperCase());
    }
    else 
    {
        result.push(str[i]);
    }
}

console.log(result.join(''));
/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find Ending Word From The Given Statement
// Function Date   :  26 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  true
//                 :  false
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


function find_string_endswith(str, suffix) 
{
 
    if (((str === null) || (str === '')) || ((suffix === null) || (suffix === '')))
    {
        return false;
    }
    else
    {     
        str = str.toString();
        suffix = suffix.toString();
    }
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

console.log(find_string_endswith('Prasad Dangare','Dangare'));
console.log(find_string_endswith('Prasad Vijaykumar Dangare',''));
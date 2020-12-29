/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Un-Capitalize All Letters
// Function Date   :  29 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  prasad vijaykumar dangare
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////



function unCapitalize_all_Words(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.substr(0).toLowerCase();});
}

console.log(unCapitalize_all_Words('PRASAD VIJAYKUMAR DANGARE'));
/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Capitalize All Letters
// Function Date   :  29 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  PRASAD VIJAYKUMAR DANGARE
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


function capitalize_all_Words(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.substr(0).toUpperCase();});
}

console.log(capitalize_all_Words('prasad vijaykumar dangare'));
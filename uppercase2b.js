/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Capitalize All First Letter Of String
// Function Date   :  20 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  Prasad Vijaykumar Dangare
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function capital_all_String_first_letter(str)
{
    return str.replace(/\w\S*/g, function(txt)
    {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
console.log(capital_all_String_first_letter('prasad vijaykumar dangare'));
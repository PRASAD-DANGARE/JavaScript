/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Parameterize A String
// Function Date   :  20 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  prasad_vijaykumar_dangare
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


parameterize_string = function (str) 
{
    return str.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "_");
};

console.log(parameterize_string("Prasad Vijaykumar Dangare"));
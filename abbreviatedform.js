/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Convert String In Abbreviated Form
// Function Date   :  20 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  Prasad D.
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


abbrev_name = function (str) 
{
    var split_name = str.trim().split(" ");
    if (split_name.length > 1) 
    {
        return (split_name[0] + " " + split_name[1].charAt(0) + ".");
    }
    return split_name[0];
};

console.log(abbrev_name("Prasad Dangare"));
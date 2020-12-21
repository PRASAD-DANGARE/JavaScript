/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program Using UnCamel Case
// Function Date   :  21 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  -prasad-vijay-kumar-dangare
//                 :  _prasad_vijay_kumar_dangare
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function uncamel_case(str, Blank_space) 
{
    if(typeof(Blank_space) == "undefined") 
    {
        Blank_space = " ";
    }
    // Replace All Capital Letters By Blank Space Followed By LowerCase 

    var str = str.replace(/[A-Z]/g, function (words) 
    {
      return Blank_space + words.toLowerCase();
    });
    // Remove first separator
    return str.replace("/^" + Blank_space + "/", '');
}

console.log(uncamel_case('PrasadVijayKumarDangare','-'));
console.log(uncamel_case('PrasadVijayKumarDangare','_'));
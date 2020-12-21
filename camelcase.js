/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program Using Camel Case
// Function Date   :  21 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  PrasadVijaykumarDangare
//                 :  PrasadDangare
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


camel_case = function camel_case(str) 
{
    return str.replace(/\W+(.)/g, function(same, chr)
    {
        return chr.toUpperCase();
    });
}

console.log(camel_case("Prasad Vijaykumar Dangare"));
console.log(camel_case("PrasadDangare"));
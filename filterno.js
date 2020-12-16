/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Filter Numbers Less,Equal To 10  
// Function Date   :  16 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  [ 10, 20, 30, 40 ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function filter_elements(no)
{
    return function(noval, index, array)
    {
         return (noval >= no);
    };
}

var result = [10, 5, 20, 2, 30, 3, 40, 4]. filter(filter_elements(10));
console.log(result);
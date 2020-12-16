/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find Greater,Lower Number From Middle Of The Array Elements 
// Function Date   :  16 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  6, 8
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function find_second_greater_Lower_number(arrno)
{
    arrno.sort(function(a, b)
    {
        return a - b;
    });
    var no = [arrno [0]];
    var result = [];
  
    for(var j = 1; j < arrno.length; j++)
    {
        if(arrno [j-1] !== arrno [j])
        {
            no.push(arrno [j]);
        }
    }
    result.push(no [1], no [no.length-2]);
    return result.join(',');
}

console.log(find_second_greater_Lower_number([5,6,7,8,9]));
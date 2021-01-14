/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find Round Numbers From Index In Array Elements
// Function Date   :  14 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  3
//                 :  2
//                 :  1
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function find_round_number_in_array(no) 
{
    var arr = 0;
    
    for (var i = 0; i < no.length; i++)
    {
        if (no[i] % 10 === 0) 
        {
            arr = i;
        }
    }
    return arr;
}
  
console.log(find_round_number_in_array([1, 2, 3, 40]));
console.log(find_round_number_in_array([1, 2, 0, 4, 5]));
console.log(find_round_number_in_array([1, 200, 3, 4]));
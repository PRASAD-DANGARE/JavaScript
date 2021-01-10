/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Add Two Elements Equal To Sum Using Index No 
// Function Date   :  10 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ 0, 2 ]
//                 :  [ 0, 1 ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////



function Sum_of_two_elements(no, total_of_two_sum) 
{
    var value = [];
    var sum = [];
    
    for (var i = 0; i < no.length; i++)
    {
        if (value [no [i]] != null)
        {
            var elements = value [no [i]];
            sum [0] = elements;
            sum [1] = i;
        break;
        }
        
        else
        {
            value [total_of_two_sum - no [i]] = i;
        }
    }
    return sum;
}
  
console.log(Sum_of_two_elements([1, 2, 4, 5], 5));
console.log(Sum_of_two_elements([1, 1, 2, 3, 4, 5], 2));

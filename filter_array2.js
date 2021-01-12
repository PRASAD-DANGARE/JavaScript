/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Filter Array Values
// Function Date   :  12 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ 93, 'Prasad', true, 'Dangare' ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function filter_array_values(arr) 
{
    arr = arr.filter(numbers);
    return arr;
}
function numbers(value) 
{
    if(value !== false || value !== null || value !== 0 || value !== "") 
    {
      return value;
    }
}
  
console.log(filter_array_values([93, '', 'Prasad', true, null, "Dangare", false, 0]));
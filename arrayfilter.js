/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Filter The Elements
// Function Date   :  12 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  [ 93, 'prasad', true ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function arr(arr) 
{
    arr = arr.filter(filterarr);
    return arr;
}
  
function filterarr(value) 
{
    if(value !== false || value !== null || value !== 0 || value !== "") 
    {
      return value;
    }
}
  
console.log(arr([93, '', 'prasad', true, false, null, 0]));
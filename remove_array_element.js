/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Remove Array Element From Specific Position
// Function Date   :  10 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ 1, 2, 3, 4 ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////



function remove_array_element(arr, no)
{
   var elements = arr.indexOf(no);
   if (elements > -1) 
   {
        arr.splice(elements, 1);
   }
   
   return arr;
}

console.log(remove_array_element([1, 2, 3, 4, 5], 5));

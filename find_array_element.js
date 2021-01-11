/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find The Array Elements Are Exist Or Not
// Function Date   :  11 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  true
//                 :  false
//
/////////////////////////////////////////////////////////////////////////////////////////////////////



function find_array_elements(arr, no) 
{
    for (var i = 0; i < arr.length; i++) 
    {
        if (arr[i] === no) 
        {
            return true;
        }
    }
    return false;
}

arr = [1, 2, 3, 4, 5];
console.log(find_array_elements(arr, 3));
console.log(find_array_elements(arr, 6));

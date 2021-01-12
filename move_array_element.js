/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Move Array Elements
// Function Date   :  12 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ 50, 40, 30, 20, 10 ]
//                 :  [ 10, 20, 30, 40, 50 ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function move_array_elements(arr, old_array, new_array) 
{
    while (old_array < 0) 
    {
        old_array += arr.length;
    }

    while (new_array< 0) 
    {
        new_array += arr.length;
    }

    if (new_array >= arr.length) 
    {
        var k = new_array - arr.length;
        while ((k--) + 1) 
        {
            arr.push(undefined);
        }
    }
    arr.splice(new_array, 0, arr.splice(old_array, 1)[0]);  
    return arr;
}

console.log(move_array_elements([40, 30, 20, 10, 50], 4, 0));
console.log(move_array_elements([10, 20, 30, 40, 50], 4, -1));
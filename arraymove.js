/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Move The Elements 
// Function Date   :  12 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  [ 20, 30, 40, 50, 10 ]
//                 :  [ 10, 50, 20, 30, 40 ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function move(arr, old_index, new_index) 
{
    while (old_index < 0) 
    {
        old_index += arr.length;
    }
    while (new_index < 0) 
    {
        new_index += arr.length;
    }
    if (new_index >= arr.length) 
    {
        var k = new_index - arr.length;
        while ((k--) + 1) 
        {
            arr.push(undefined);
        }
    }
      arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);  
      return arr;
}

console.log(move([10, 20, 30, 40, 50], 0, 4));

console.log(move([10, 20, 30, 40, 50], -1, -4));
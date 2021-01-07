/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Shuffel The Array Elements
// Function Date   :  07 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ 'A', 2, 'A', 'S', 3,
//                      'P', 'D', 'R', 1, 4 
//                 :  ]
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


function shuffle_array(arr) 
{
    var arrr = arr.length, no, element;

// While there are elements in the array
    while (arrr > 0) 
    {
    // Pick a random index
        element = Math.floor(Math.random() * arrr);
    // Decrease ctr by 1
        arrr--;
    // And swap the last element with it
        no = arr[arrr];
        arr[arrr] = arr[element];
        arr[element] = no;
    }
    return arr;
}

var arr_elements = [1, 2, 3, 4, "P", "R", "A", "S", "A", "D"];
console.log(shuffle_array(arr_elements));
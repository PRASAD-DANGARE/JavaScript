/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Remove Non-Repeated Array Elements
// Function Date   :  08 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ 4, 5, 6 ]
//                 :  [ 7, 8, 9 ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////



function remove_nonrepeated_array (arr1, arr2) 
{
    var no = [];
    arr1 = arr1.toString().split(',').map(Number);
    arr2 = arr2.toString().split(',').map(Number);
    
    for (var i in arr1) 
    {
        if(arr2.indexOf(arr1 [i]) === -1) no.push(arr1 [i]);
    }

    for(i in arr2) 
    {
        if(arr1.indexOf(arr2 [i]) === -1) no.push(arr2 [i]);
    }

    return no.sort((a, b) => a - b);
}
    
console.log(remove_nonrepeated_array([1, 2, 3], [1, 2, 3, 4, 5, 6]));
console.log(remove_nonrepeated_array( [1, 2, 3, 4, 5], [1, [2], [3, [4], [5, 7, 8, 9] ]] ));
/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Add Two Array Elements
// Function Date   :  08 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ 6, 8, 10, 12 ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function Add_two_array(arr1, arr2) 
{
    var ans = [];
    var no = 0;
    var sum = 0;

    if (arr1.length === 0) 
    return "Array1 Is Empty!!";

    if (arr2.length === 0) 
    return "Array2 Is Empty!!";   

    while (no < arr1.length && no < arr2.length) 
    {
        ans.push(arr1[no] + arr2[no]);
        no++;
    }

    if (no === arr1.length) 
    {
        for (sum = no; sum < arr2.length; sum++)   
        {
            ans.push(arr2[sum]);
        }
    }  
    else
    {
        for (sum = no; sum < arr1.length; sum++) 
        {
            ans.push(arr1[sum]);
        }
    }
    return ans;
}

console.log(Add_two_array([1,2,3,4], [5,6,7,8]));
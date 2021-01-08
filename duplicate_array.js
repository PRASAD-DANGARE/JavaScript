/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Remove Repeated Array Elements
// Function Date   :  08 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ '2', '3' ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function duplicate_array(arr) 
{
    var no = {};
    var ans = [];

    arr.forEach(function (element) 
    {
        if(!no[element])
        no[element] = 0;
        no[element] += 1;
    })

    for (var num in no) 
    {
       if(no[num] >= 2) 
       {
           ans.push(num);
       }
    }

    return ans;
}

console.log(duplicate_array([1, 2, 3, -1, 2, 3, 4, 5]));
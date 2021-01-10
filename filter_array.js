/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Remove false, NaN etc From Array Elements
// Function Date   :  10 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ 1, 2, 3, 4, 5, 6 ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function filter_array(arr) 
{
    var elements = -1,
    arr_no = arr ? arr.length : 0, no = -1, ans = [];

    while (++ elements < arr_no) 
    {
        var value = arr[elements];
        if (value) 
        {
            ans [++ no] = value;
        }
    }

    return ans;
}

console.log(filter_array([false, 1, 0, 2, NaN, 3, '', 4, null, 5, 6, undefined]));
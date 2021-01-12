/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Create Array In Between Range
// Function Date   :  12 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ 1, 2, 3, 4, 5 ]
//                 :  [ -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5 ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function create_array_in_between_range(arr, end) 
{
    if (arr > end) 
    {
		var no = new Array(arr - end + 1);
        for (var i = 0; i < no.length; i++, arr--) 
        {
			ans[i] = arr;
		}
		return no;
	} 
    else 
    {
		var no = new Array(end - arr + 1);
        for (var j = 0; j < no.length; j++, arr++) 
        {
			no[j] = arr;
		}
      	return no;
	}
}

console.log(create_array_in_between_range(1, 5));
console.log(create_array_in_between_range(-5, 5));
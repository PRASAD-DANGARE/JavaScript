/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Create Array With Range In It
// Function Date   :  12 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ 1, 2, 3, 4, 5 ]
//                 :  [ -5, -4, -3, -2, -1 ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function create_array_range(arr, range) 
{
	var no = new Array(range);
	for (var i = 0; i < range; i++, arr++) 
    {
		no[i] = arr;
	}
    return no;
}

console.log(create_array_range(1, 5));
console.log(create_array_range(-5, 5));
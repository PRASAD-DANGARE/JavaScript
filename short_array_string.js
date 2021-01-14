/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Short Array Elements By Its String Length
// Function Date   :  14 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [
//                      'p',       'pr',
//                      'pra',     'pras',
//                      'prasa',   'prasad',
//                      'prasad@', 'prasad@93'
//                    ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function sort_arrelement_by_string_length(arr) 
{
    for (var i = 0; i < arr.length; i++) 
    {
        for (var j = i + 1; j < arr.length; j++) 
        {
            if (arr[i].length > arr[j].length) 
            {
				var no = arr[i];
				arr[i] = arr[j];
				arr[j] = no;
			}
		}
	}
	return arr;
}

console.log(sort_arrelement_by_string_length(["pra","p","pr","pras","prasa","prasad", "prasad@","prasad@93"]));
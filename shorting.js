/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Short The Array Elements
// Function Date   :  20 Oct 2020
// Function Author :  Prasad Dangare
// Output          :  Array Before Shorted : 5,4,3,2,1,0,6
//                 :  Array After Shorted : 0,1,2,3,4,5,6
//
/////////////////////////////////////////////////////////////////////////////////////////////////////

function Sortarr(arr) 
{
    if (arr.length <= 1) 
    { 
		return arr;
    } 
    else 
    {

		var left = [];
		var right = [];
		var newarr = [];
        
        var pivot = arr.pop();
        
        var length = arr.length;

        for (var i = 0; i < length; i++) 
        {
            if (arr[i] <= pivot) 
            {
				left.push(arr[i]);
            } 
            else 
            {
				right.push(arr[i]);
			}
		}

		return newarr.concat(Sortarr(left), pivot, Sortarr(right));
	}
}

var myarr = [5, 4, 3, 2, 1, 0, 6];

console.log("Array Before Shorted : " + myarr);
var sortedarr = Sortarr(myarr);

console.log("Array After Shorted : " + sortedarr);
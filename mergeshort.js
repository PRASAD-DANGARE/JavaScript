/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Shorting The Elements Using Merge Short
// Function Date   :  10 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  [ 1, 2, 2, 3, 4, 5 ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////

function mergesorting(firstleft,secondright) 
{
	var a = 0;
	var b = 0;
	var results = [];

    while (a < firstleft.length || b < secondright.length) 
    {
        if (a === firstleft.length) 
        {
		
			results.push(secondright[b]);
			b++;
		} 
        else if (b === secondright.length || firstleft[a] <= secondright[b]) 
        {
			results.push(firstleft[a]);
			a++;
        } 
        else 
        {
			results.push(secondright[b]);
			b++;
		}
	}
	return results;
}

console.log(mergesorting([1,2,3], [2,4,5]));

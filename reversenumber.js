/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Reverse The Number 
// Function Date   :  15 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  54321
//                 :  12345
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function reversenumber(no)
{
	no = no + "";
	return no.split("").reverse().join("");
}
console.log(reversenumber(12345));
console.log(reversenumber(54321));
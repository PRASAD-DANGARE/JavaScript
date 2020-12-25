/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Convert ASCII To Hexadecimal Number
// Function Date   :  25 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  3933
//                 :  3339
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


function ASCII_To_Hexa(str)
{
	var arr = [];
	for (var i = 0, l = str.length; i < l; i++) 
    {
		var Hexa = Number(str.charCodeAt(i)).toString(16);
		arr.push(Hexa);
    }

	return arr.join('');
}

console.log(ASCII_To_Hexa('93'));
console.log(ASCII_To_Hexa('39'));
/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Convert Hexadecimal Number To ASCII
// Function Date   :  25 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  93
//                 :  39
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


function Hexa_To_ASCII(str)
{
	var Hexa  = str.toString();
	var str = '';
    
    for (var i = 0; i < Hexa.length; i += 2) 
    {
		str += String.fromCharCode(parseInt(Hexa.substr(i, 2), 16));
	}
    
    return str;
}

console.log(Hexa_To_ASCII('3933'));
console.log(Hexa_To_ASCII('3339'));
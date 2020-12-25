/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Remove Given Word From The Statement
// Function Date   :  25 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  Prasad Vijaykumar Dangare
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////



function remove_word(str, search_word)       
{
	var index = str.indexOf(search_word);
    if (index === -1) 
    {
		return str;
	}
    
    return str.slice(0, index) + str.slice(index + search_word.length);
}

console.log(remove_word("Prasad prasadVijaykumar Dangare", 'prasad'));
/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Create Case-Insensitive Search
// Function Date   :  28 Dec 2020
// Function Author :  Matched
// Output          :  Not Matched
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


function perfect_search(str, search_str)
{
    var result = str.search(new RegExp(search_str, "i"));
  
    if (result > 0)
    return 'Matched';
    
    else
    return 'Not Matched';  
}

console.log(perfect_search('JavaScript Using Nodejs', 'Nodejs'));
console.log(perfect_search('Prasad Dangare', 'Vijaykumar'));
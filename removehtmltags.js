/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Remove HTML Tags
// Function Date   :  28 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  Prasad Vijaykumar Dangare
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


function remove_html_tags(str)
{
    if ((str === null) || (str === ''))
    return false;
   
    else
    str = str.toString();
    
    return str.replace(/<[^>]*>/g, '');
}

console.log(remove_html_tags('<p><strong>Prasad Vijaykumar Dangare</p></strong>'));
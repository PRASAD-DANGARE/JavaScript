/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Escape Character Use In HTML
// Function Date   :  26 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  JavaScript -and- Node.js
//                 :  9 -greaterthan- 3
//                 :  3 -lessthan- 9
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


function escape_html_char(str) 
{
  
    if ((str === null) || (str === ''))
    return false;
    
    else
    str = str.toString();
    var map = {
                '&': '-and-',
                '<': '-lessthan-',
                '>': '-greaterthan-',
                '"': '-singlequot-',
                "'": '-doublequot-'
              };
   
    return str.replace(/[&<>"']/g, function(m) 
    { 
        return map[m]; 
    });
}
   
console.log(escape_html_char('JavaScript & Node.js'));
console.log(escape_html_char('9 > 3'));
console.log(escape_html_char('3 < 9'));

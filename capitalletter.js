/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Convert First Letter In Capital Letter
// Function Date   :  26 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  Java Script Using Node.js
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////



function upper_case (str) 
{
    if ((str === null) || (str === ''))
    return false;
    
    else
    str = str.toString();
  
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
  
console.log(upper_case(' java script using node.js'));
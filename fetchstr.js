/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Fetch The Given Character From String
// Function Date   :  25 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  Prasad Dangare
//                 :  ame: Prasad Vijaykumar Dangare
//
/////////////////////////////////////////////////////////////////////////////////////////////////////



function fetch_str(str, str2, pos)
{
    if(pos == 'b')
    return str.substring(str.indexOf(str2) + 1);
    
    else if(pos == 'a') 
    return str.substring(0, str.indexOf(str2));
    
    else
    return str;  
}

console.log(fetch_str('name: Prasad Dangare', ':','b'));
console.log(fetch_str('Name: Prasad Vijaykumar Dangare', 'N','b'));
/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Remove Non-Printable ASCII Character 
// Function Date   :  26 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  Prasad Vijaykumar Dangare
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////



function remove_nonprintable_ascii_value(str) 
{
  
    if ((str === null) || (str === ''))
    return false;
    
    else
    str = str.toString();
    
    return str.replace(/[^\x20-\x7E]/g, '');
}
  
console.log(remove_nonprintable_ascii_value('äÄçÇéÉêPrasad Vijaykumar DangareöÖÐþúÚ'));
/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Break The String Into N Words
// Function Date   :  25 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  Hello Im Prasad
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


function truncate_string(str, break_str) 
{
    return str.split(" ").splice(0, break_str).join(" ");
}

console.log(truncate_string('Hello Im Prasad Dangare', 3));
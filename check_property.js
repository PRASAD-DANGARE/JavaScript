/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Check Whether An Object Contains Given Property
// Function Date   :  03 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  true
//                 :  false
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


function check_property(obj, key) 
{
    return obj != null && hasOwnProperty.call(obj, key);  
}

console.log(check_property({one: "1", two: "2", three: "3"}, "one"));
console.log(check_property({one: "1", two: "2", three: "3"}, "four"));

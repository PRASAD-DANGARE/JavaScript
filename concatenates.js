/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Concatenate Given String Into n Times
// Function Date   :  21 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  Hello
//                 :  Hello Hello
//                 :  Hello Hello Hello
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


repeation = function repeation(str, count) 
{
    if(typeof(count) == "undefined") 
    {
        count =1;
    }
    return count < 1 ? '' : new Array(count + 1).join(str);
}

console.log(repeation(' Hello'));
console.log(repeation(' Hello', 2));
console.log(repeation(' Hello', 3));
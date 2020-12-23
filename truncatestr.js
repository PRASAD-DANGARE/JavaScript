/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Truncate The String
// Function Date   :  23 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  Prasad Vijaykumar Dangare
//                 :  Prasad Vijaykumar...
//                 :  Prasad----
//
/////////////////////////////////////////////////////////////////////////////////////////////////////



truncate_string = function(str, length, ending) 
{
    if (length == null) 
    {
        length = 100;
    }
    if (ending == null) 
    {
        ending = '...';
    }
    if (str.length > length) 
    {
        return str.substring(0, length - ending.length) + ending;
    } 
    else 
    {
        return str;
    }
};

console.log(truncate_string('Prasad Vijaykumar Dangare'))
console.log(truncate_string('Prasad Vijaykumar Dangare',20))
console.log(truncate_string('Prasad Vijaykumar Dangare',10,'----'))
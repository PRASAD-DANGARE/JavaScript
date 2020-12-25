/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Repeat The String 
// Function Date   :  25 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  Error In String Or Arguments...
//                 :  Error In String Or Arguments...
//                 :  Prasad Dangare Prasad Dangare 
//                 :  Error In String Or Arguments... 
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function repeat_string(string, count) 
{
    if ((string == null) || (count < 0) || (count === Infinity) || (count == null))
    {
        return('Error In String Or Arguments...');
    }

    count = count | 0; // Floor count.
    return new Array(count + 1).join(string);
}

console.log(repeat_string('Prasad Dangare', Infinity));
console.log(repeat_string('Prasad Vijaykumar Dangare'));
console.log(repeat_string('Prasad Dangare ', 2));
console.log(repeat_string('Prasad Dangare', -2));

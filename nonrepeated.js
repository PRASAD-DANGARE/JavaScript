/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find The Non-Repeated Alphabet
// Function Date   :  17 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  D P
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function find_nonrepeated(alpha) 
{
    var arr = alpha.split('');
    var result = '';
    var charr = 0;
   
    for (var a = 0; a < arr.length; a++) 
    {
      charr = 0;
   
        for (var b = 0; b < arr.length; b++) 
        {
            if (arr[a] === arr[b]) 
            {
                charr+= 1;
            }
        }
   
        if (charr < 2) 
        {
            result = arr[a];
            break;
        }
    }
    return result;
}

console.log(find_nonrepeated('AABBCCD'));
console.log(find_nonrepeated('prasad')); // get the first Which Come First
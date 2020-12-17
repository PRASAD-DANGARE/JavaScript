/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find The Given Alphabet From The String
// Function Date   :  17 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  4
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function alphabet_count(alpha, letter) 
{
    var letter_Count = 0;
    for (var position = 0; position < alpha.length; position++) 
    {
        if (alpha.charAt(position) == letter) 
        {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

console.log(alphabet_count('Prasad Dangare', 'a'));
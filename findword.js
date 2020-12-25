/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find Number Of Words Repeated 
// Function Date   :  25 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  'Prasad' Was Found 1 Time...
//                 :  'Shubham' Was Found 2 Time...
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


function find_word(str, word)
{
    var a = 0, b = 0;
   
    for (i = 0; i< str.length; i++)
    {
        if(str[i] == word[0])
        {
            for(j = i; j < i + word.length; j++)
            {
                if(str[j] == word [j - i])
                {
                    b++;
                }
                
                if (b == word.length)
                {
                    a++;
                }
            }
            b = 0;
        }
    }

   return "'"+word+"' Was Found "+a+" Time...";
}

console.log(find_word('Prasad Vijaykumar Dangare', 'Prasad'));
console.log(find_word('Shubham, Vijaykumar, Dangare, Prasad, Shubham', 'Shubham'));
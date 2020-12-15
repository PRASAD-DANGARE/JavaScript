/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find The Palindrome Number 
// Function Date   :  15 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  The String Is Palindrome..
//                 :  The String Is Palindrome..
//                 :  String Is Not Palindrome..
//
/////////////////////////////////////////////////////////////////////////////////////////////////////



function Palindrome_word(sequence)
{
    // Change string into lower case and remove all non-alphanumeric characters
       var changestr = sequence.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var changecount = 0;

    // Check string is empty or not
        if(changestr==="") 
        {
            console.log("String Nothing Found...");
            return false;
        }
    
    // Check length of the string is even or odd 
        if ((changestr.length) % 2 === 0) 
        {
            changecount = (changestr.length) / 2;
        } 
        else 
        {
    // If the length of string is 1 then it becomes a palindrome
            if (changestr.length === 1) 
            {
                console.log("String Is Palindrome..");
                return true;
            } 
            else 
            {
    // If the length of string is odd ignore middle character
                changecount = (changestr.length - 1) / 2;
            }
        }
    // Loop to check the first character to last character and move next
        for (var x = 0; x < changecount; x++) 
        {
    // Compare characters and drop them if they not match 
            if (changestr[x] != changestr.slice(-1-x)[0]) 
            {
                console.log("String Is Not Palindrome..");
                return false;
            }
        }
        console.log("The String Is Palindrome..");
        return true;
}

Palindrome_word('reder');
Palindrome_word('racecar');
Palindrome_word('coding');
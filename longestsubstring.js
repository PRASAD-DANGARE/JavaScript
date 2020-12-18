/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find Longest Substring Without Repeating Characters
// Function Date   :  18 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  gle.com, ft.com
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function longest_substring_without_repeating_characters(input) 
{
    var charr = input.split('');
    var current_char;
    var str = "";
    var longest_string = "";
    var sub = {};
    
    for (var a = 0; a < charr.length; a++) 
    {
        current_char = charr [a];
        if (!sub [charr [a]]) 
        { 
            str += current_char; 
            sub [charr [a]] = {index:a};
        }
        else 
        {
            if(longest_string.length <= str.length)
            {
                longest_string = str;
            }
            var prev_dupeIndex = sub[current_char].index;
            var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, a);
            str = str_FromPrevDupe + current_char;
            sub = {};
    
            for (var b = prev_dupeIndex + 1; b <= a; b++) 
            {
                sub [input.charAt (b)] = {index:b};
            }
        }
    
    }
    return longest_string.length > str.length ? longest_string : str;
}
    
console.log(longest_substring_without_repeating_characters("google.com")); 
console.log(longest_substring_without_repeating_characters("microsoft.com")); 
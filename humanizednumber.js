/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program TO Formats Number to Human-Readable String
// Function Date   :  23 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  1St
//                 :  7Th
//                 :  201St
//                 :  302Nd
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


humanize_number_format = function humanize_number_format(number) 
{
    if(typeof(number) == "undefined") return;
    if(number % 100 >= 11 && number % 100 <= 13)
    
    return number + "Th";
    
    switch(number % 10) 
    {
        case 1: return number + "St";
        case 2: return number + "Nd";
        case 3: return number + "Rd";
    }
    return number + "Th";
}
 console.log(humanize_number_format());  
 console.log(humanize_number_format(1));  
 console.log(humanize_number_format(7));  
 console.log(humanize_number_format(201));  
 console.log(humanize_number_format(302)); 
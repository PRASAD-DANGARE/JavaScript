/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Insert The String 
// Function Date   :  21 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  Hello 
//                 :  Hello Im Prasad
//                 :  Hello Im Prasad VijayKumar Dangare
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


insertion = function insertion(main_string, insertion_string, pos) 
{
    if(typeof(pos) == "undefined") 
    {
        pos = 0;
    }

    if(typeof(insertion_string) == "undefined") 
    {
        insertion_string = '';
    }
    return main_string.slice(0, pos) + insertion_string + main_string.slice(pos);
}

 console.log(insertion('Hello '));
 console.log(insertion('Prasad','Hello Im '));
 console.log(insertion('Hello Im Prasad Dangare',' VijayKumar',15));
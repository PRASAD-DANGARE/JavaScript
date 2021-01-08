/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program Using Array Binary Search
// Function Date   :  08 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  0
//                 :  2
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


function binary_search(no, value)
{
    var firstno  = 0,
    lastno   = no.length - 1,
    middleno = Math.floor((lastno + firstno)/2);

    while(no[middleno] != value && firstno < lastno)
    {
        if (value < no[middleno])
        {
            lastno = middleno - 1;
        } 
        else if (value > no[middleno])
        {
            firstno = middleno + 1;
        }
        middleno = Math.floor((lastno + firstno)/2);
    }

    return (no[middleno] != value) ? -1 : middleno;
}

var no = [1, 2, 3, 4, 5];

console.log(binary_search(no, 1));   
console.log(binary_search(no, 3));
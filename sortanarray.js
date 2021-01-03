/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Sort An Array Of Objects
// Function Date   :  03 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [
//                      { Title: 'Programming In C', Author: 'Ajay Mittal', LibraryID: 11 },
//                      { Title: 'Thinking In C++', Author: 'Bruce Eckel', LibraryID: 22 },
//                      { Title: 'Core Python', Author: 'Nageswara Rao', LibraryID: 33 }
//                    ]
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


var library_Books = 
[ 
    {
        Title : 'Programming In C',
        Author : 'Ajay Mittal',
        LibraryID : 11
    },

    {
        Title : 'Thinking In C++',
        Author : 'Bruce Eckel',
        LibraryID : 22
    },

    {
        Title : 'Core Python',
        Author : 'Nageswara Rao',
        LibraryID : 33
    }
];
 
var sort_by = function(book_name, sort_arr, initial)
{
    var key = initial ?
    function(i)
    {
        return initial(i [book_name]);
    } :
    
    function(j) 
    {
        return j [book_name];
    };
 
    sort_arr = ! sort_arr ? 1 : -1;
 
    return function (i, j) 
    {
        return i = key(i), j = key(j), sort_arr * ((i > j) - (j > i));
    } ;
};
 
 
var arrobj = library_Books.sort(sort_by('libraryID', true, parseInt)); 
console.log(arrobj);
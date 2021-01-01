/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Check Status Of Book Library
// Function Date   :  01 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  Already read 'Core Python' by Nageswara Rao.
//                 :  Already read 'Programming In C' by Ajay Mittal.
//                 :  Not Yet Read But I Can Read It Soon 
//                   'Hands-On Machine Learning With Scikit-Learn And Tensor flow' by Aurelien Geron.
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////



var library = 
[ 
    {
        title: 'Core Python',
        author: 'Nageswara Rao',
        readingStatus: true
    },
    
    {
        title: 'Programming In C',
        author: 'Ajay Mittal',
        readingStatus: true
    },
    
    {
        title: 'Hands-On Machine Learning With Scikit-Learn And Tensor flow',
        author: 'Aurelien Geron',
        readingStatus: false
    }
];

for (var i = 0; i < library.length; i++) 
{
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) 
    {
        console.log("Already read " + book);
    } 
    else
    {
        console.log("Not Yet Read But I Can Read It Soon " + book);
    }
}
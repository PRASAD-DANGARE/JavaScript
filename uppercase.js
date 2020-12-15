/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Display First Letter In Upper Case
// Function Date   :  15 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  Prasad VijayKumar Dangare
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function uppercase(str)
{
    var arr = str.split(' ');
    var str = [];
    
    for(var x = 0; x < arr.length; x++)
    {
        str.push(arr [x].charAt (0).toUpperCase ()+arr [x].slice(1));
    }
    return str.join(' ');
}

console.log(uppercase("prasad vijayKumar dangare"));
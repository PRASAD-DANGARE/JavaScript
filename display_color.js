/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Display Color In Sequence
// Function Date   :  07 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  1st Color Is Orange 
//                 :  2nd Color Is Red
//                 :  3rd Color Is Pink
//                 :  4th Color Is Black
//                 :  5th Color Is Yellow
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


var color = ["Orange ", "Red", "Pink", "Black", "Yellow"];
function sequence_color(c)
{
    var j = ["th","st","nd","rd"],
    i = c % 100;
    return i + (j [(i - 20) % 10] || j [i] || j [0]);
}

for(a = 0; a < color.length; a++)
{
    var five_color = a + 1;
    var output = (sequence_color(five_color) + " Color Is " + color[a]);

    console.log(output);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find Repeated Array Elements
// Function Date   :  05 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  P ( 4 times )
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


var arr = ['P', 'P', 'P', 1, 2, 3, 'P', 3, 2, 4, 5, 6];
var repeat = 1;
var ele = 0;
var item;
for (var i = 0; i < arr.length; i++)
{
        for (var j = i; j < arr.length; j++)
        {
                if (arr[i] == arr[j])
                 ele++;
                if (repeat < ele)
                {
                  repeat = ele; 
                  item = arr[i];
                }
        }
        ele = 0;
}
console.log(item +" ( " + repeat +" times ) ") ;
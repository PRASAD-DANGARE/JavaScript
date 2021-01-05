/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Sort The Array Elements
// Function Date   :  05 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ -2, -1, 0, 2, 3, 4, 5 ]
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


var arr = [-1,-2,0,4,3,5,2];
var arrr = [];
var min = arr[0];
var pos;
var max = arr[0];
for (i = 0; i < arr.length; i++)
{
        if (max < arr[i]) max = arr[i];
}

for (var i = 0;i < arr.length; i++)
{
        for (var j = 0; j < arr.length; j++)
        {
                if (arr[j] != "x")
                {
                        if (min > arr[j]) 
                        {
                                min = arr[j];
                                pos = j;
                        }
                }
        }
        arrr[i] = min;
        arr[pos] = "x";
        min = max;
}
console.log(arrr);
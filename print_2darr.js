/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Print 2-D Array
// Function Date   :  05 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  row 0 
//                 :  1 2 3
//                 :  row 1
//                 :  P R A S A D
//                 :  row 2
//                 :  4 5 6
//                 :  row 3
//                 :  D A N G A R E
//                 :  row 4
//                 :  7 8 9
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


var v = [[1,2,3], ["P","R","A","S","A","D"], [4,5,6], ["D","A","N","G","A","R","E"], [7,8,9]];
 
for (var a in v) 
{
   console.log("row " + a);
   for (var r in v[a]) 
    {
      console.log(" " + v[a] [r]);
    }
}
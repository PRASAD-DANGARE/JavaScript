/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Short The Elements Using Selection Short
// Function Date   :  11 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  [ -1, 0, 1, 2, 3, 4, 5, 6 ]
//                 :  [ 6, 5, 4, 3, 2, 1, 0 ]
/////////////////////////////////////////////////////////////////////////////////////////////////////

function Selection_Sort(arr, comparision) 
{

    function compare(a, b) 
    {
        return a - b;
    } 
    var min = 0;
    var index = 0;
    var temp = 0;
  
    comparision = comparision || compare;
  
    for (var i = 0; i < arr.length; i += 1) 
    {
      index = i;
      min = arr[i];
  
      for (var j = i + 1; j < arr.length; j += 1) 
      {
        if (comparision(min, arr[j]) > 0) 
        {
          min = arr[j];
          index = j;
        }
      }
  
      temp = arr[i];
      arr[i] = min;
      arr[index] = temp;
    }
    return arr;
}
  
console.log(Selection_Sort([3, 0, 2, 5, -1, 4, 1, 6])), function(a, b)
{ 
    return a - b; 
};  
console.log(Selection_Sort([6, 3, 2, 4, 5, 1, 0], function(a, b) { return b - a; }));
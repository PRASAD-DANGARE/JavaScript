/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Create Subset Of Array Elements
// Function Date   :  17 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  [ [ 20, 10 ], 
//                 :    [ 30, 10 ], 
//                 :    [ 30, 20 ], 
//                 :    [ 30, 20, 10 ] 
//                 :  ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function subset(arr, array_size)
{
    var sub_set = [], 
    result;

    for(var x = 0; x < Math.pow(2, arr.length); x++)
    {
        result = [];
        i = arr.length - 1; 
      do
      {
        if( (x & (1 << i)) !== 0)
        {
            result.push(arr[i]);
        }
      } while(i--);

      if( result.length >= array_size)
      {
         sub_set.push(result);
      }
    }
    return sub_set; 
}

console.log(subset([10, 20, 30], 2));
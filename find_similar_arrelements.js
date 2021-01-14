/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find Similar Elements Of Two Array
// Function Date   :  14 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  5
//                 :  3
//                 :  0
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function find_similar_array_elements(arr1, arr2) 
{
    var similar_elements = 0;
    
    for(var i = 0; i < arr1.length; i++) 
    {
        for(var j = 0; j < arr2.length; j++)
        {
            if(arr1[i] === arr2[j])
            {
                similar_elements++;
            }
        }
    }
    return similar_elements;
}
  
console.log(find_similar_array_elements([1,2,3,4,5], [1,2,3,4,5]));
console.log(find_similar_array_elements([10,20,30,40], [10,20,30,50]));
console.log(find_similar_array_elements([100,200,300,400], [10,20,30,40]));
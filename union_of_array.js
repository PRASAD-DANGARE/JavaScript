/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Get Union Of Two Array  
// Function Date   :  08 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ 1, 2, 3, 4, 5 ]
//                 :  [ 'A', 'U', 'B' ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function union_of_two_array(arr1, arr2) 
{
  
    if ((arr1 == null) || (arr2 == null)) 
    return void 0;
    
    var no = {};
   
    for (var i = arr1.length - 1; i >= 0; --i)
    no[arr1 [i]] = arr1 [i];
   
    for (var i = arr2.length - 1; i >= 0; --i)
    no[arr2 [i]] = arr2 [i];
   
    var ans = [];
   
    for (var uni in no)
    {
    
      if (no.hasOwnProperty(uni)) 
        ans.push(no [uni]);
    }
   
    return ans;
}
  
console.log(union_of_two_array([1, 2, 3], [1, 2, 3, 4, 5]));
console.log(union_of_two_array(["B", "U", "A"], ["B", "U", "A"]));

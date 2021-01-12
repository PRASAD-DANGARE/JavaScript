/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find Unique Array Elements From Given Numbers
// Function Date   :  12 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ '1', '2', '3', '4', '5' ]
//                 :  [ '6', '7', '8', '9', '10' ]
//                 :  [ '11', '12', '13', '14', '15' ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function unique_array_element(arr1, arr2) 
{
    var no1 = values(arr1, true);
    var no2 = values(arr2, true);
    var ans = [], unique = [];
    
    for(var i = 0; i < no1.length; i++)
    ans[no1 [i]] = false;
    
    for(i = 0; i < no2.length; i++)
    
    if(ans[no2 [i]] === true) 
    { 
        delete ans[no2 [i]];
    }
    
    else ans[no2 [i]] = true;
    
    for(var ret in ans)
    unique.push(ret);
    
    return unique;   
}
  
    var values = function(ans, element, ret)
    {
        if(!ret)
        { 
            ret = [];
        }
        
        if (element) 
        {
            return ret.concat.apply(ret, ans);
        }  
        
        for(i = 0; i< ans.length; i++)
        {
            if(ans [i].constructor == Array)
            {
                values(ans [i], element, ret);
            }
            else
            {
                ret.push(ans [i]);
            }
        }
        return ret;
    };
  
console.log(unique_array_element( [1, 2, 3], [1, 2, 3, 4, 5] ));

console.log(unique_array_element( [6, 7, 8, 9, 10], [ [6], [7, [ [8] ] ], [9, 10]] ));

console.log(unique_array_element( [11, 12, 13], [11, 12, 13, 14, 15]));
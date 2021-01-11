/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find Nth Largest Array Elements
// Function Date   :  11 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  5
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function nth_largest_array_elements(arr, largest)
{
    var a = 0, b = 0, c = 0, no = 0, num = arr.length, val = false, ans = false; 

    while(a < num)
    {
        b = a + 1; 
        
        if(b < num)
        {
            for(c = b; c < num; c++)
            {
                if(arr [a] < arr [c])
                {
                    no = arr [c];
                    arr [c] = arr [a];
                    arr [a] = no;
                    val = true; 
                }
                else
                {
                    continue;
                }	
            }					
        }
        
        if (val)
        {
            val = false;
        }
        else
        {
            a++; 
            if(a === largest)
            { 
                ans = true;
            }	
        }
        if (ans)
        {
            break;
        }
    }
    return (arr[ (largest - 1) ]);	
}

console.log(nth_largest_array_elements([ 1, 2, 3, 4, 5 ], 1)); 
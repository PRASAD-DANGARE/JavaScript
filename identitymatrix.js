/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Returns Rows,Columns In Identity Matrix
// Function Date   :  15 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  1 0 0
//                 :  0 1 0
//                 :  0 0 1
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function identitymatrix(rc) 
{
    var a;
    var b;

    for (a = 0; a < rc; a++)
    {
        for (b = 0; b < rc; b++)
        {
            if (a === b)
            {        
                 console.log(' 1 ');
            }      
            else 
            {
                 console.log(' 0 ');
            }
        }
    console.log('==========');
    }
}

identitymatrix(3);
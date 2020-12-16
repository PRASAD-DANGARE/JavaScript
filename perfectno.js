/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find A Perfect Number
// Function Date   :  16 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  Yes It's An Perfect Number
//                 :  1 + 2 + 3 = 6
//                 :  (1 + 2 + 3) / 2 = 6
//
/////////////////////////////////////////////////////////////////////////////////////////////////////



function find_perfect_number(no)
{
    var no1 = 0;
    for(var i = 1; i <= no / 2; i++)
    {
        if(no % i === 0)
        {
            no1 += i;
        }
    }
   
    if(no1 === no && no1 !== 0)
    {
       console.log("Yes It's An Perfect Number");
    } 
    else
    {
       console.log("No It's Not A Perfect Number");
    }   
}

find_perfect_number(6);
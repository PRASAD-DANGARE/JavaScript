/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find Sum Of Cubes 
// Function Date   :  13 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  8
//                 :  27
//
/////////////////////////////////////////////////////////////////////////////////////////////////////



function sum_Of_Cubes(no) 
{
    var sum = 0;
    var i = 0;

    while(i <= no)
    {
        sum = i*i*i;
        i++;
    }
    return sum;
}

console.log(sum_Of_Cubes(2));
console.log(sum_Of_Cubes(3));
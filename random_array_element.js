/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Get Random Array Elements
// Function Date   :  11 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  500
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function random_array_element(no)
{
    return no[Math.floor(Math.random()*no.length)]; 
}

var no = [100, 200, 300, 400, 500];
console.log(random_array_element(no));
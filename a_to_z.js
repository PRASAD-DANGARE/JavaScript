/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Convert String Into Alphabetized A_To_Z
// Function Date   :  25 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  DPaaaadegnrrs
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


function Count_A_To_Z(str) 
{	    
    return str.split('').sort().join('').trim();
}

console.log(Count_A_To_Z('Prasad Dangare'));
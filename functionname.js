/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Get Function Name
// Function Date   :  18 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  Prasad 
//
/////////////////////////////////////////////////////////////////////////////////////////////////////



function Prasad() 
{
    console.log( arguments.callee.name );
}

Prasad();
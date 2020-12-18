/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Pass JS Function As Parameter
// Function Date   :  18 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  Prasad Dangare
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function jsfunction_as_parameter(str, parameter)
{
    parameter();  
}

function function_parameter() 
{
    console.log('Prasad Dangare');
}

jsfunction_as_parameter(1, function_parameter);
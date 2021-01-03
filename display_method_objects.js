/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Function To Display All Methods In Object
// Function Date   :  02 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ 'abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh', 'atan2',
//                      'ceil', 'cbrt', 'expm1', 'clz32', 'cos', 'cosh', 'exp', 'floor',
//                      'fround', 'hypot', 'imul', 'log', 'log1p', 'log2', 'log10', 'max',
//                      'min', 'pow', 'random', 'round', 'sign', 'sin', 'sinh', 'sqrt',
//                      'tan', 'tanh', 'trunc' ]
//  
//                    [ 'isArray', 'from', 'of' ]
//
//                    [ 'abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh', 'atan2',
//                      'ceil','cbrt', 'expm1', 'clz32', 'cos', 'cosh', 'exp', 'floor',
//                      'fround', 'hypot', 'imul', 'log', 'log1p', 'log2', 'log10', 'max',
//                      'min', 'pow', 'random', 'round', 'sign', 'sin', 'sinh', 'sqrt',
//                      'tan', 'tanh', 'trunc', 'E', 'LN10', 'LN2', 'LOG10E', 'LOG2E',
//                      'PI','SQRT1_2', 'SQRT2' ]
//
//                    [ 'length', 'name', 'prototype', 'isArray', 'from', 'of' ]
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////



function display_all_Methods_objects(methodobj) 
{
    return Object.getOwnPropertyNames(methodobj).filter(function(properties) 
    {
        return typeof methodobj[properties] == "function";
    });
} // Find Methods 

 console.log(display_all_Methods_objects(Math));
 console.log(display_all_Methods_objects(Array));
 function all_properties(methodobj) 
 {
    return Object.getOwnPropertyNames(methodobj);
 } // Find Properties & Methods

 console.log(all_properties(Math));
 console.log(all_properties(Array));
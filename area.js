/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Function Name   :  JavaScript Program To Display Area Of Triangle
// Function Date   :  20 Oct 2020
// Function Author :  Prasad Dangare
// Output          :  72.61843774138907
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


var angle1 = 10;
var angle2 = 15;
var angle3 = 20;

var s = (angle1 + angle2 + angle3) / 2;
var areaoftriangle = Math.sqrt(s * ((s - angle1) * (s - angle2) * (s - angle3)));

console.log(areaoftriangle);

/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find Area & Perimeter Of Circle
// Function Date   :  02 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  Area = 50.265
//                 :  Perimeter = 25.13
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////



function area_of_parimeter_circle(radius)
{
    this.radius = radius;
    // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
    // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}

var c = new area_of_parimeter_circle(4);
console.log('Area =', c.area().toFixed(3));
console.log('Perimeter =', c.perimeter().toFixed(2));
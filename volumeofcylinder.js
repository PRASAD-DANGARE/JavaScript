/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find The Volume Of Cylinder
// Function Date   :  02 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  Volume Of Cylinder = 37.699
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////




function volume_of_Cylinder(cyl_height, cyl_diameter) 
{
    this.cyl_height = cyl_height;
    this.cyl_diameter = cyl_diameter;
}
  
  
volume_of_Cylinder.prototype.Volume = function () 
{
    var radius = this.cyl_diameter / 2;
    return this.cyl_height * Math.PI * radius * radius;
  
};
  
  
var cyl = new volume_of_Cylinder(3, 4);
console.log('Volume Of Cylinder =', cyl.Volume().toFixed(3)); // Volume Of Cylinder With Three Decimal Places
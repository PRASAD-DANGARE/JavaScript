/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Get Length Of Object
// Function Date   :  01 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  Size Of Current Object : 3
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////



Object.objsize = function(obj_length) 
{
    var obj_size = 0, key;
    for (key in obj_length) 
    {
        if (obj_length.hasOwnProperty(key)) obj_size++;
    }
    return obj_size;
};

var Student_Info = 
{ 
    Name : "Prasad Dangare", 
    Class : "SYBCA",   
    Rollno : 38 
};

var objsize = Object.objsize(Student_Info);
console.log('Size Of Current Object : '+objsize);
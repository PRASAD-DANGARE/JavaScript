/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Retrieve All Names Of Objects Own & Inherited Properties
// Function Date   :  03 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ 'Name', 'Rollno' ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function student(obj) 
{
    if (!isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    return keys;
}
function isObject(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
}

function Student(Name) 
{
    this.Name = Name;
}

Student.prototype.Rollno = true;
console.log(student(new Student("Prasad Dangare")));
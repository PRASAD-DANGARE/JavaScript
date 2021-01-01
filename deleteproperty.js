/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Delete A Property  
// Function Date   :  01 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  { Name: 'Prasad Dangare', Class: 'VI', Rollno: 12 }
//                 :  { Name: 'Prasad Dangare', Class: 'VI' }
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////



var Student_Info =  
{ 
    Name : "Prasad Dangare", 
    Class : "VI", 
    Rollno : 12  };
    console.log(Student_Info);
    
    delete Student_Info.Rollno;
    console.log(Student_Info);

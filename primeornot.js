/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find Number Is Prime Or Not
// Function Date   :  15 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  True Flase
//
/////////////////////////////////////////////////////////////////////////////////////////////////////



function prime_ornot(pri)
{

  if (pri === 1)
  {
    return false;
  }
  else if(pri === 2)
  {
    return true;
  }
  else
  {
    for(var x = 2; x < pri; x++)
    {
      if(pri % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(prime_ornot(2));
console.log(prime_ornot(4));

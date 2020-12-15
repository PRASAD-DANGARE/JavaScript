/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find Number Of Vowels 
// Function Date   :  15 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  7
//
/////////////////////////////////////////////////////////////////////////////////////////////////////



function Find_vowel(vol)
{
  var vowel_are = 'AEIOUaeiou';
  var volfind = 0;
  
  for(var x = 0; x < vol.length ; x++)
  {
    if (vowel_are.indexOf(vol[x]) !== -1)
    {
      volfind += 1;
    }
  
  }
  return volfind;
}
console.log(Find_vowel("Marvellous Infosystems"));
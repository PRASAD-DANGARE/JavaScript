/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Swap Adjacent Array Elements 
// Function Date   :  13 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  39
//                 :  2143
//                 :  false
//                 :  false 
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function swap_adjacent_array_elements(no)
{
   if (no.toString().length % 2 != 0)
   {
        return false;
   }
   var ans = 0,
   i = 1;
    
   while (no != 0) 
   {
		var dg1 = no % 10,
		dg2 = ((no - dg1) / 10) % 10;
		ans += i * (10 * dg1 + dg2);
		no = Math.floor(no / 100);
		i *= 100;
   }
   return ans;
}

console.log(swap_adjacent_array_elements(93));
console.log(swap_adjacent_array_elements(1234));
console.log(swap_adjacent_array_elements("p", "R", "A", "S", "A", "D"));
console.log(swap_adjacent_array_elements(12345));
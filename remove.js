/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Function Name   :  JavaScript Program To Remove An Element From Specific Position
// Function Date   :  11 Nov 2020
// Function Author :  Prasad Dangare
// Output          :  pyton ython pyhon
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function remove_character(str, char_pos) {
    part1 = str.substring(0, char_pos);
    part2 = str.substring(char_pos + 1, str.length);
    return (part1 + part2);
}

console.log(remove_character("Python", 3));

console.log(remove_character("Python", 0));

console.log(remove_character("Python", 2));
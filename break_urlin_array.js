/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Break Url Address Into An Array 
// Function Date   :  13 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ 'https', 'github', '/PRASAD-DANGARE/JavaScript/' ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////



function break_url_in_array(url_address) 
{
    var url = url_address.split("://")
    var protocol = url[0];

    url = url[1].split(".com");
    var domain = url[0];

    if(url[1])
    {
        return [protocol, domain, url[1]]
    }

    return [protocol, domain]
}

var url_address = "https://github.com/PRASAD-DANGARE/JavaScript/"

console.log("Original URL : "+url_address)
console.log(break_url_in_array(url_address))
/*< !DOCTYPE html >
    <html>
        <head>
            <title>JavaScript Moving Left To Right</title>
            <script type="text/javascript">
            </script>
        </head> <body onload="rotate_string('target')"
  <pre id="target">Prasad Dangare</pre>
  </body > 
  </html >
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Function Name   :  JavaScript Program To Move String From Left To Right
// Function Date   :  20 Oct 2020
// Function Author :  Prasad Dangare
// Output          :  Prasad Dangare-Dangare Prasad
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function rotate_string(id) {
    var element = document.getElementById(id);
    var textNode = element.childNodes[0];
    var text = textNode.data;

    setInterval(function () {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
}
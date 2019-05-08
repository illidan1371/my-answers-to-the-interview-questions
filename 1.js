//var a is  equal to the value of the first text field which is defined in the HTML file.
//var b is  equal to the value of the second text field which is defined in the HTML file.
// initially a and b are returned as strings so a+b will retuen another string.
//so i had to use the parseFloat function to change the strings to numbers so they could be added as numbers
function submit1(){
                 var a = document.getElementById("number1").value;
              var b = document.getElementById("number2").value;
                var c = parseFloat(a) + parseFloat(b);

            document.getElementById("screen1").innerHTML = c;
              }

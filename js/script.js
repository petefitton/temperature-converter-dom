var form = document.querySelector("form");
var div = document.querySelector("#tempResult");

form.addEventListener("submit", function(e) {
    //prevent form from automatic refresh on submit
    e.preventDefault();

    // get user submitted value
    var tempToConvert = form.elements["input"].value;

    // check for celsius or fahrenheit
    if (form.elements["fahrenheit"].checked === true) {
        var convertedTemp = (tempToConvert - 32) * (5/9);
        div.innerText = convertedTemp;
        if (convertedTemp < 33) {
            div.style.backgroundColor = "blue";
        } else {
            div.style.backgroundColor = "red";
        }
    } else {
        var convertedTempCel = tempToConvert * (9/5) + 32;
        div.innerText = convertedTempCel;
    }

    // var fahrenheit = form.elements["fahrenheit"].value;
    // console.log(fahrenheit);
    
    // var cel = form.elements["celsius"].value;
    // console.log(cel);
});

form.elements["clear"].addEventListener("click", function(e) {
    form.elements["input"].value = "";
});

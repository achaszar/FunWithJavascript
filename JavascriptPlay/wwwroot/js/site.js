function myFunction() {
    document.getElementById("demo").innerHTML = "New York Yankees";
}

function openGithub() {
    window.open("https://github.com/achaszar");
}

function findSquare(formId) {
    var inputNum = formId.textin.value;
    var result;
    if (inputNum >= 1 && inputNum <= 10) {
        result = inputNum * inputNum;
    }
    else {
        result = "Invalid number!"
    }
    document.getElementById("textout").innerHTML = result;
}


function findWaterState(waterTemp) {
    var inputText = waterTemp.theWaterTemp.value
    var boilTemp = 100;
    var freezeTemp = 32;
    var result;
    if (inputText >= boilTemp) {
        result = "Steaming";
    }
    else if (inputText <= freezeTemp) {
        result = "Ice";
    }
    else {
        result = "Liquid";
    }
    document.getElementById("water").innerHTML = result;
}

function multiplyFunction(thisId) {
    var inputNum = thisId.numberin.value;
    var result;
   
    result = inputNum * 2;

    document.getElementById("numberout").innerHTML = result;
}

function changeTemp(temperature) {
    var inputTemp = temperature.ftemp.value;
    var result;

    var firstStep = inputTemp - 32;
    var secondStep = firstStep * 5;
    var thirdStep = secondStep / 9;
    var roundNumber = Math.round(thirdStep);
    result = roundNumber;

    document.getElementById("ctemp").innerHTML = result;
}
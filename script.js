function clearCalculator() {
    document.getElementById("output").innerHTML = "0";
}

function removeZero() {
    var value = document.getElementById("output").innerHTML;
    if (value == "0") {
        value = " "
        document.getElementById("output").innerHTML = value;
    }
}

function persen() {
    var value = document.getElementById("output").innerHTML;
    value = value / 100;
    document.getElementById("output").innerHTML = value;
}

function seeValue(value) {
    removeZero()
    document.getElementById("output").innerHTML += value;
}

function solve() {
    removeZero()
    var result = document.getElementById("output").innerHTML;
    var solved = eval(result);
    document.getElementById("output").innerHTML = solved;
}


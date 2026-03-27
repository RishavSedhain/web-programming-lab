function findSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

function calculateSI() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var time = parseFloat(document.getElementById("time").value);

    var simpleInterest = findSimpleInterest(principal, rate, time);

    document.getElementById("result").innerHTML =
        "Simple Interest: " + simpleInterest.toFixed(2);
}

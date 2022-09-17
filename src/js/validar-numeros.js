

function verifyNumber(firstNumber, secondNumber) {
    if(firstNumber === secondNumber){
        alert("They are equal");
    }else if(firstNumber>= secondNumber){
        alert("First is bigger than second");
    }else {
        alert("second is bigger than first");
    }
}

module.exports = verifyNumber;
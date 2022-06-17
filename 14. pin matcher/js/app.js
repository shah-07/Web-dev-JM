//Generate pin
function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4) {
        return pin;
    } else {
        //console.log('got 3 digit and calling again', pin);
        return getPin();
    }
}

//display it
function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

//27-6 Use event bubble to create calculator and clear
document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');    
    if(isNaN(number)){
        //clear
        if(number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

//27-7 Verify match and use function to reduce duplicate
function varifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    //Verify match
    if(pin == typedNumbers) {    
        //reduce duplicate    
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {        
        failError.style.display = 'block';
        successMessage.style.display = 'none';
    }
}
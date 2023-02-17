function getPin(){
    const pin = generatePin() ;
    const pinString = pin + '' ;
    if(pinString.length === 4){
        return pin ;
    }
    else{
        
        return getPin() ;
    }
}
function generatePin(){
    const random = Math.round(Math.random()*10000) ;
    return random ;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin() ;
    // display pin

    const displayPinField = document.getElementById("display-pin") ;
    displayPinField.value = pin ;

})
document.getElementById("calculator").addEventListener('click', function(event){
    const number = event.target.innerText ;
    const typedNumberField = document.getElementById("typed-numbers");
    const previousTypeNUmber = typedNumberField.value ;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypeNUmber.split('');
            digits.pop();
            const remainingDigits = digits.join('') ;
            typedNumberField.value = remainingDigits ;
        }
    }
    else{
        
        const newTypeNumber = previousTypeNUmber + number ; 
        typedNumberField.value = newTypeNumber ;
    }
    
})

document.getElementById("verify-pin").addEventListener('click', function(){
    const displayPinField = document.getElementById("display-pin") ;
    const currentPin = displayPinField.value ;

    const typeNumberField = document.getElementById("typed-numbers") ;
    const typeNumber = typeNumberField.value ;

    if(typeNumber === currentPin){
        const pinSuccesMessage = document.getElementById("pin-success") ;
        pinSuccesMessage.style.display = 'block' ;
    }
    else{
        console.log('incorrectpin')
    }
})

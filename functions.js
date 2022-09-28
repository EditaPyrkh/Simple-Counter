var p = document.querySelector('p')
    let input = document.querySelector('input');
    paragraph.textContent = input.value;

   
    function alerted(){
      if(/[a-zа-яё]/i.test(input.value)){
        alert(`Confirmed! Thank you, ${input.value}.`);
      } else {
        alert ('Please, enter your name.')
      }
    } 

var counterVal = 0
function incrementClick() {
    updateDisplay(++counterVal);
}

function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}

function updateDisplay(val) {
    document.getElementById("guests").innerHTML = val;
}
      
    
    
    
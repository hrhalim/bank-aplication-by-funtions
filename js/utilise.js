function getDepositValueId(deposiField){
    const deposiFieldVal = document.getElementById(deposiField);
    const deposiFieldStr = deposiFieldVal.value;
    const newDepositAmount = parseFloat(deposiFieldStr); 
    deposiFieldVal.value = "";
    return newDepositAmount;
}

function depositElement(depositNumber){
    const depositElementVal = document.getElementById(depositNumber);
    const depositTextStr = depositElementVal.innerText;
    const previousDepositAmount = parseFloat(depositTextStr);
    return previousDepositAmount;
     
}


function setTextElementValueId(textElementId, textNewValue){
    const TextElementVal = document.getElementById(textElementId);
    TextElementVal.innerText = textNewValue;

}
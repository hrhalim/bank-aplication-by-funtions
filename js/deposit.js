
document.getElementById('btn-deposit').addEventListener('click', function(){

    const newDepositTotalAmount = getDepositValueId('deposit-field');
    console.log(typeof newDepositTotalAmount);
     
    const previousTotalDepositAmount = depositElement('deposit-amount');

    const totalDepositAmount = previousTotalDepositAmount + newDepositTotalAmount;
    
    //Set deopsit number
    const totalBlance = setTextElementValueId('deposit-amount', totalDepositAmount )

     //Set total blance
    const previousTotalBlance = depositElement('total-blance');
    const newTotalBlance = previousTotalBlance + newDepositTotalAmount;
    setTextElementValueId('total-blance', newTotalBlance)
    


});
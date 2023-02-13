document.getElementById('btn-widthdraw').addEventListener('click', function(){
   
 const newWidthdrawAmount = getDepositValueId('widthdraw-field');
 const previousWidthdrawAmout =  depositElement('widthdraw-amount');
 
 const totalWidtdrawBlance = previousWidthdrawAmout + newWidthdrawAmount;
 
 // remaining widthdraw blance
 const priviousWidthdrawBlance = depositElement('total-blance'); 
 if(newWidthdrawAmount > priviousWidthdrawBlance){
  alert('Sorry!! you have not aviable your blance')
  return;
 }else {
   const remainingBlance = priviousWidthdrawBlance - newWidthdrawAmount;
   setTextElementValueId('total-blance', remainingBlance) 
 }
 //set ammount widthdraw blance
  setTextElementValueId('widthdraw-amount', totalWidtdrawBlance)

  
 

});
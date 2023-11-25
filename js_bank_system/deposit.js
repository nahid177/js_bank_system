 
 /*
 1 add document.getElementById
 2 add addEventListener
 3 get deposite amount from the deposit field
 4 
 */
 
 document.getElementById('btn-deposit').addEventListener('click', function(){

    const depositeField = document.getElementById('deposit-field');
    //input data store
    const newDepositAmountString = depositeField.value;
    // convert string deposit amount to a number type
    const convertAmount = parseFloat(newDepositAmountString);
 

    //input field clear
    depositeField.value = ''; 

     const depositTotalEle = document.getElementById('deposit-total') ;
     //previous value dispaly 
     const preDopositTotalString = depositTotalEle.innerHTML;
     // convert string deposit amount to a number type
     const convertpreDopositTotal = parseFloat(preDopositTotalString);
    //sum of input value and dispaly value
     const totalDepositAmount = convertpreDopositTotal + convertAmount;

     //display value
     depositTotalEle.innerHTML = totalDepositAmount;


    //work Balance 
     const totalBalancedisplay = document.getElementById('dalance-total');
     totalBalancedisplay.innerText = totalDepositAmount;

 })
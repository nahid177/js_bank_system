
 /*
 1 add document.getElementById
 2 add addEventListener
 3 get withdraw amount from the withdraw field
 4 
 */
//  utilities funtion call

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdraw  = getInputFieldValueById('withdraw-field');
   
    const prenewWithdrawEle = getTextValueById('withdraw-total');

    const totalWithdrawAmount = newWithdraw  + prenewWithdrawEle;

    setTextEleValuebyID('withdraw-total',totalWithdrawAmount);

    const totalBalancedisplay = getTextValueById('dalance-total');
    //total display - withdraw 

    const newtotalBalancedisplay = totalBalancedisplay - newWithdraw;
    setTextEleValuebyID('dalance-total',newtotalBalancedisplay);




})
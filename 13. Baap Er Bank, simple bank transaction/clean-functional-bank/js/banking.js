//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear the deposit input field
    depositInput.value = '';
});

//handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function(){
    //get the amount withdraw
    const withdrawInput = document.getElementById('withdraw-input');
    const newwithdrawAmountText = withdrawInput.value;
    const newwithdrawAmount = parseFloat(newwithdrawAmountText);

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawAmount + newwithdrawAmount;

    

    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newwithdrawAmount;
    

    if(newwithdrawAmount <= previousBalanceTotal) {
        withdrawTotal.innerText = newWithdrawTotal;
        balanceTotal.innerText = newBalanceTotal;
        withdrawInput.value = '';
    }

    //clear the deposit input field
    
});
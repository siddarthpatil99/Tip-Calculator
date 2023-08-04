function calculateTip() {

    // get the input type values
    const billAmount = parseFloat(document.getElementById("bill-amount").value);
    const tipPercentage = parseFloat(document.getElementById("tip-percentage").value);

    // calculate the Tip and Total Amount
    const tipAmount = billAmount * (tipPercentage/100);
    const totalAmount = tipAmount + billAmount;

    // display the results
    document.getElementById("tip-amount").textContent = '$' + tipAmount.toFixed(2);
    document.getElementById("total-amount").textContent = '$' + totalAmount.toFixed(2);
}
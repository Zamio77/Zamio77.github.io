function calculateTip() {
  // Collect the html elements
  let billAmt = document.getElementById("billamt").value;
  let tipPercent = document.getElementById("myNumber").value;

  // Convert the billAmt and tipPercent to int for calculations
  let billAmtNum = parseInt(billAmt);
  let tipPercentNum = parseInt(tipPercent);

  // Calculate the tip
  tipPercentNum = tipPercentNum / 100;
  let tip = billAmtNum * tipPercentNum;
  console.log(tip);
  // Rounding to the second decimal point
  let tipAmt = Math.round(tip * 100) / 100;
  console.log(tipAmt);
  let total = tipAmt + billAmtNum;
  // Rounding to the second decimal point
  totalAmt = Math.round(total * 100) / 100;
  console.log(total);

  document.getElementById("results").style.display = "block";

  document.getElementById("tipAmount").innerHTML = tipAmt;
  document.getElementById("totalBillWithTip").innerHTML = totalAmt;
}

// Add the range slider and calculate using VUE
console.clear();

var app = new Vue({
  el: "#app",
  data: {
    myNumber: 0
  }
});

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();
};

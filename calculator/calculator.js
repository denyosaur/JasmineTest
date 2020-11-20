window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}


// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment

function setupIntialValues() {
const loanAmount = document.querySelector('#loan-amount');
const loanYears = document.querySelector('#loan-years');
const loanRate = document.querySelector('#loan-rate');
const defaultValues = { amount : 200000, years: 5, rate : 5 }
loanAmount.value = defaultValues.amount;
loanYears.value = defaultValues.years;
loanRate.value = defaultValues.rate;
update()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentUiValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUiValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let i = (values['rate']/12)/100;
  let n = Math.floor(values['years']*12);
  return ((values['amount'] * i) / (1-Math.pow((1+i),-n))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.querySelector('#monthly-payment');
  monthlyPayment.innerText = `$${monthly}`;
}


  var loanAmount, interestRate, years, loanType;

  document.getElementById('calculateBtn').addEventListener('click', function() {
      // Retrieve input values
      loanAmount = parseFloat(document.getElementById('loanAmount').value);
      interestRate = parseFloat(document.getElementById('interestRate').value);
      years = parseInt(document.getElementById('years').value);
      loanType = document.getElementById('loanType').value;
  
      // Display error messages if any
      displayErrorMessage();
  
    
  });
  
  function displayErrorMessage() {
      var errorMessage = '';
  
      // Check if any input field is empty
      if (loanAmount <= 0 || isNaN(loanAmount) || loanAmount > 2000000) {
          errorMessage += 'Please enter a valid loan amount.\n';
      }
      if (interestRate <= 0 || isNaN(interestRate) || interestRate < 7.5) {
          errorMessage += 'Please enter a valid interest rate (at least 7.5%).\n';
      }
      if (years <= 0 || isNaN(years)) {
          errorMessage += 'Please enter a valid number of years (Above 0).\n';
      }
  
      // Set the error message
      document.getElementById('error').innerHTML = `<p>${errorMessage}</p>`;

        // Proceed with loan calculation if no errors
        if (errorMessage === '') {
            calculateLoan();
        }
  }
  
  function calculateLoan() {
      // Perform loan calculation
      var monthlyInterestRate = interestRate / 100 / 12;
      var months = years * 12;
      var numerator = loanAmount * monthlyInterestRate;
      var denominator = 1 - Math.pow(1 + monthlyInterestRate, -months);
      var monthlyPayment = numerator / denominator;
      document.getElementById('monthlyPayment').innerText = 'R' + monthlyPayment.toFixed(2);
     
      var totalPayment = monthlyPayment * months;
      var totalInterest = totalPayment - loanAmount;
      document.getElementById('totalInterest').innerText = 'R' + totalInterest.toFixed(2);
     
      var totalAmount = loanAmount + totalInterest;
      document.getElementById('totalAmount').innerText = 'R' + totalAmount.toFixed(2);
     
      var message = '';
      if (loanType === 'student' && totalAmount > 1000000) {
          message = 'You may consider a lower loan amount for a student loan.';
      } else if (loanType === 'personal' && totalAmount > 500000) {
          message = 'You may consider a lower loan amount for a personal loan.';
      } else if (loanType === 'business' && totalAmount > 2000000) {
          message = 'You may consider a lower loan amount for a business loan.';
      } else if (loanType === 'vehicle' && totalAmount > 400000) {
          message = 'You may consider a lower loan amount for a vehicle loan.';
      }

      document.getElementById('message').innerText = message;
     
      // Show results and display pie chart
      document.getElementById('resultsContainer').style.display = 'block';
      displayPieChart(loanAmount, totalInterest);
  }
  
  function displayPieChart(loanAmount, totalInterest) {
    var ctx = document.getElementById('pieChart').getContext('2d');
    var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Loan Amount', 'Total Interest'],
        datasets: [{
          data: [loanAmount, totalInterest],
          backgroundColor: ['red','blue']
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Loan Breakdown'
        }
      }
    });
  }
  document.getElementById('exitBtn').addEventListener('click', function() {
    exitCalculation();
  });
  
  document.getElementById('exitBtn').addEventListener('click', function() {
      exitCalculation();
  });
  
  function exitCalculation() {
      // Clear input fields
      document.getElementById('loanAmount').value = '';
      document.getElementById('interestRate').value = '';
      document.getElementById('years').value = '';
      document.getElementById('loanType').value = '';
     
      // Clear result display
      document.getElementById('resultsContainer').style.display = 'none';
      document.getElementById('monthlyPayment').innerText = '';
      document.getElementById('totalInterest').innerText = '';
      document.getElementById('totalAmount').innerText = '';
      document.getElementById('message').innerText = '';
     
      // Hide pie chart
      document.getElementById('pieChart').style.display = 'none';
  }
  
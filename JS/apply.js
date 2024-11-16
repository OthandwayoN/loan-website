

const nextButton = document.querySelector('.btn-next');

      const prevButton = document.querySelector('.btn-prev');
      const steps = document.querySelectorAll('.step');
      const form_steps = document.querySelectorAll('.form-step');
      const formInputs = document.querySelectorAll("form .form-one input");
      const formInputs2 = document.querySelectorAll("form .form-two input");
      
      
      let active = 1;

   
      function validateForm1() {
        const nameInput = document.querySelector(".form-one input[type='text'][placeholder='e.g Lufuno']");
        const dateInput = document.querySelector(".form-one input[type='date']");
        const IDInput = document.querySelector(".form-one input[type='number'][id='national-id-input'][placeholder='National ID']");
        
       
        let valid = true;
   
        if (!nameInput.value.trim()) {
            valid = false;
            nameInput.classList.add("err");
        } else {
            nameInput.classList.remove("err");
        }
    
        
        if (!dateInput.value.trim()) {
            valid = false;
            dateInput.classList.add("err");
        } else {
           dateInput.classList.remove("err");
        }
    
       
        if (!IDInput.value.trim()) {
            valid = false;
            IDInput.classList.add("err");
        } else {
            IDInput.classList.remove("err");
        }
       
       if (IDInput.value.length !==13){
        valid = false;
        document.getElementById("error-message-id").style.display = "block";
      
       }else{
        document.getElementById("error-message-id").style.display = "none";
       }
      
       var genZ=document.forms["ourForm"]["gender"]; 
  if (IDInput.value.length ===13 && genZ[0].checked==false&&genZ[1].checked==false){
    valid = false;
    document.getElementById("error-message").style.display = "block";
  }else{
    document.getElementById("error-message").style.display = "none";
  }

  var dob = dateInput.valueAsDate;
    var dobFormatted = dob.getFullYear().toString().substr(2) + ("0" + (dob.getMonth() + 1)).slice(-2) + ("0" + dob.getDate()).slice(-2);
    var idNumber = IDInput.value;
    if (IDInput.value.length ===13 && idNumber.substr(0, 6) !== dobFormatted) {
        valid = false;
        document.getElementById("error-message-format").style.display = "block";
    } else {
        document.getElementById("error-message-format").style.display = "none";
    }

    var genderRadio = document.querySelector('input[name="gender"]:checked');
    var gender = (genderRadio && genderRadio.value === "female") ? "female" : "male";
    var citizenship = idNumber.charAt(10);
    var checksum = idNumber.charAt(12);

    if (IDInput.value.length ===13 && (gender === "female" && parseInt(idNumber.substr(6, 4)) > 4999) || (gender === "male" && parseInt(idNumber.substr(6, 4)) < 5000)){
        valid = false; 
        document.getElementById("error-message-gender").style.display = "block";
    }else{
        document.getElementById("error-message-gender").style.display = "none";
    }
    if (IDInput.value.length ===13 && citizenship !== "0" && citizenship !== "1") {
        valid = false;
        document.getElementById("error-message-citizen").style.display = "block";
    }
    else{
        document.getElementById("error-message-citizen").style.display = "none";
    }
    var sum = 0;
    for (let i = idNumber.length - 1; i >= 0; i--)  {
      var digit = parseInt(idNumber.charAt(i));
      if ((idNumber.length - i) % 2 === 0) {
        digit *= 2;
        if (digit > 9) {
            digit = digit.toString();
            digit = parseInt(digit[0]) + parseInt(digit[1]);
        }
      }
      sum += digit;
    }
    var checksumCalculated = sum % 10;
    if (IDInput.value.length ===13 &&  checksumCalculated !== 0){
        valid = false;
        document.getElementById("error-message-invalid").style.display = "block";
    }
    else{
        document.getElementById("error-message-invalid").style.display = "none";
    }
    
        return valid;
      }
      

//validate form 3
      
function validateFormThree() {
    const employerInput = document.getElementById("employerInput");
    const yearsEmployedInput = document.getElementById("yearsEmployedInput");
    const provinceInput = document.getElementById("provinceInput");
    const cityInput = document.getElementById("cityInput");
    const zipCodeInput = document.getElementById("zipCodeInput");

    let valid = true;

    // Validate employer
    if (!employerInput.value.trim()) {
        valid = false;
        employerInput.classList.add("err");
    } else {
     employerInput.classList.remove("err");
    }

    // Validate number of years employed
    if (!yearsEmployedInput.value.trim()) {
        valid = false;
        yearsEmployedInput.classList.add("err");
    } else {
        yearsEmployedInput.classList.remove("err");
    }

    // Validate province
    if (!provinceInput.value.trim()) {
        valid = false;
        provinceInput.classList.add("err");
    } else {
        provinceInput.classList.remove("err");
    }

    // Validate city
    if (!cityInput.value.trim()) {
        valid = false;
        cityInput.classList.add("err");
    } else {
        cityInput.classList.remove("err");
    }

    // Validate zip code
    if (!zipCodeInput.value.trim()) {
        valid = false;
        zipCodeInput.classList.add("err");
    } else {
        zipCodeInput.classList.remove("err");
    }
    console.log(valid);
    return valid;
    
}

//valide form two
function validateEmail() {
    let valid = true;
    const input = document.getElementById("email");
    const emailIcon = document.querySelector(".email-icon");
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (input.value === "") {
        valid = false;
        input.classList.add("err");
        emailIcon.classList.replace("uil-check-circle", "uil-envelope");
        emailIcon.style.color = "#b4b4b4";
    } else if (input.value.match(pattern)) {
        valid = true;
        emailIcon.classList.replace("uil-envelope", "uil-check-circle");
        emailIcon.style.color = "#4bb543";
    } else {
        valid = false;
        input.classList.add("err");
        emailIcon.classList.replace("uil-check-circle", "uil-envelope");
        emailIcon.style.color = "#de0611";
    }

    return valid;
}


function validateFormTwo() {
    const phoneInput = document.querySelector(".form-two input[type='number']");
    const emailInput = document.getElementById("email");
    const provinceSelect = document.getElementById("provinceSelect");
    const citySelect = document.getElementById("citySelect");
    const postalCodeSelect = document.getElementById("postalCodeSelect");

    let valid = true;

    // Validate phone number
    if (!phoneInput.value.trim()) {
        valid = false;
        phoneInput.classList.add("err");
    } else {
        phoneInput.classList.remove("err");
    }

    // Validate street address
    if (!validateEmail()) {
        valid = false;
        emailInput.classList.add("err");
    } else {
       emailInput.classList.remove("err");
    }

    // Validate province
    if (provinceSelect.selectedIndex === 0) {
        valid = false;
        provinceSelect.classList.add("err");
    } else {
        provinceSelect.classList.remove("err");
    }

    
     if (citySelect.selectedIndex === 0) {
         valid = false;
         citySelect.classList.add("err");
     } else {
         citySelect.classList.remove("err");
     }

  
     if (postalCodeSelect.selectedIndex === 0) {
         valid = false;
         postalCodeSelect.classList.add("err");
     } else {
         postalCodeSelect.classList.remove("err");
     }

    return valid;
}

function validateFormFour() {
    const incomeFrequencySelect = document.querySelector(".form-four select[name='income']");
    const loanType = document.querySelector(".form-four select[name='loanType']");
    const grossIncomeInput = document.querySelector(".form-four input[placeholder='income before deductions']");
    const netIncomeInput = document.querySelector(".form-four input[placeholder='income after deductions']");
    const otherIncomeInput = document.querySelector(".form-four input[placeholder='other income']");
    const rentInput = document.querySelector(".form-four input[placeholder='0']");
    const waterElectricityInput = document.querySelector(".form-four input[placeholder='500']");
    const groceriesInput = document.querySelector(".form-four input[placeholder='600']");
    const transportInput = document.querySelector(".form-four input[placeholder='700']");
    const medicalInput = document.querySelector(".form-four input[placeholder='800']");
    const schoolFeesInput = document.querySelector(".form-four input[placeholder='900']");
    const entertainmentInput = document.querySelector(".form-four input[placeholder='1000']");
    const otherCommitmentsInput = document.querySelector(".form-four input[placeholder='1100']");
    const repaymentTerm = document.getElementById("repay");
    const loanAmount = document.getElementById("loanAmount");


    let valid = true;

    if (!loanType.value.trim()) {
        valid = false;
        loanType.classList.add("err");
    } else {
        loanType.classList.remove("err");
    }

    if (!repaymentTerm.value.trim()) {
        valid = false;
        repaymentTerm.classList.add("err");
    } else {
        repaymentTerm.classList.remove("err");
    }

    if (!loanAmount.value.trim()) {
        valid = false;
        loanAmount.classList.add("err");
    } else {
        loanAmount.classList.remove("err");
    }


    // Validate income frequency
    if (!incomeFrequencySelect.value.trim()) {
        valid = false;
        incomeFrequencySelect.classList.add("err");
    } else {
        incomeFrequencySelect.classList.remove("err");
    }

    // Validate gross income
    if (!grossIncomeInput.value.trim()) {
        valid = false;
        grossIncomeInput.classList.add("err");
    } else {
        grossIncomeInput.classList.remove("err");
    }

    // Validate net income
    if (!netIncomeInput.value.trim()) {
        valid = false;
        netIncomeInput.classList.add("err");
    } else {
        netIncomeInput.classList.remove("err");
    }

    // Validate other income
    if (!otherIncomeInput.value.trim()) {
        valid = false;
        otherIncomeInput.classList.add("err");
    } else {
        otherIncomeInput.classList.remove("err");
    }

    // Validate expenses
    const expensesInputs = [rentInput, waterElectricityInput, groceriesInput, transportInput, medicalInput, schoolFeesInput, entertainmentInput, otherCommitmentsInput];
    expensesInputs.forEach(input => {
        if (!input.value.trim()) {
            valid = false;
            input.classList.add("err");
        } else {
            input.classList.remove("err");
        }
    });

    return valid;
}

function validateFormFive() {
    const accountNumberInput = document.querySelector(".form-five input[placeholder='Account number']");
    const bankSelect = document.getElementById("bank");
    const accountTypeSelect = document.querySelector(".form-five select[name='type']");
    const accountHolderInput = document.querySelector(".form-five input[placeholder='Account holder']");

    let valid = true;

    // Validate account number
    if (!accountNumberInput.value.trim()) {
        valid = false;
        accountNumberInput.classList.add("err");
    } else {
        accountNumberInput.classList.remove("err");
    }

    // Validate bank select
    if (!bankSelect.value.trim()) {
        valid = false;
        bankSelect.classList.add("err");
    } else {
        bankSelect.classList.remove("err");
    }

    // Validate account type select
    if (!accountTypeSelect.value.trim()) {
        valid = false;
        accountTypeSelect.classList.add("err");
    } else {
        accountTypeSelect.classList.remove("err");
    }

    // Validate account holder
    if (!accountHolderInput.value.trim()) {
        valid = false;
        accountHolderInput.classList.add("err");
    } else {
        accountHolderInput.classList.remove("err");
    }

    return valid;
}


 function validateFormSix(){

    let valid = false;
    if (idUploaded && bankStatementUploaded && recentPayslipUploaded) {
        valid = true;
    } else{
        document.getElementById("error-message-document").style.display = "block";
    }
    return valid;
 }

nextButton.addEventListener('click', (e) => {
var move = validateForm1();
if (active == 1 && move){
  active++;
}
else if (active == 2 && validateFormTwo()){
   active++;
}else if (active == 3 && validateFormThree()){
  active++;
}else if (active == 4 && validateFormFour()){
  active++;
}else if (active == 5 && validateFormFive()){
  active++;
}
else if(active==6 && validateFormSix()){
    active++;
}

   

  if(active > steps.length){
    active = steps.length;
  }
  updateProgress();
})


prevButton.addEventListener('click', () => {
  active--;
  if (active < 1){
    active = 1;
  }
  updateProgress();
})

const updateProgress = () =>{
  console.log('steps.length =>' + steps.length);
  console.log('active =>' + active);

  steps.forEach((step, i) => {
    if (i == (active-1)){
      step.classList.add('active');
      form_steps[i].classList.add('active');
      console.log('1 =>' +1);
    }
    else {
      step.classList.remove('active');
      form_steps[i].classList.remove('active');
    }
  });

  if (active === 1){
    prevButton.disabled =true;

  }
  else if (active === steps.length){
    nextButton.disabled = true;
  } else{
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
}


// function confirmApplication() {
//       const name = document.getElementById('name').value;
//        const loanType = document.getElementById("loanType").value;
//       const email = document.getElementById('email').value;
      
 
        
//         const message = `Dear ${name} \n\nWe have received your ${loanType} loan application. Thank you for choosing All Inclusive Lends for your financial needs.\n\nWe understand the importance of your application and assure you that it is currently being reviewed by our team. We will carefully assess all the information provided and get back to you as soon as possible.\n\nIn the meantime, if you have any questions or need further assistance, please feel free to reach out to us at support@allinclusive.com.\n\n Thank you for considering All Inclusive Lends. We appreciate the opportunity to assist you with your financial goals.
//         \n`;

//         // Send email using EmailJS
//         emailjs.send("default_service", "template_cplbaeg", {
//             to_email: email, // Set recipient email dynamically
//             from_name: "All Inclusive Lends",
//             loan_type: loanType,
//             message: message
//         }).then(function(response) {
//             console.log('Email sent successfully', response);
          
//         }).catch(function(error) {
//             console.error('Error sending email:', error);
//         });
//     }


function newApplication(){
    const name = document.getElementById('name').value;
    const loanType = document.getElementById("loanType").value;
   const email = document.getElementById('email').value;
   const cell = document.getElementById('cell').value;
   const loanAmount = document.getElementById('loanAmount').value;
   const loanTerm = document.getElementById('repay').value;
   const gross = document.getElementById('gross').value;
   const net = document.getElementById('net').value;
   const other = document.getElementById('other').value;
   const rent = document.getElementById('rent').value;
   const Water = document.getElementById('water').value;
   const Groceries = document.getElementById('groceries').value;
   const Transport = document.getElementById('transport').value;
   const Medical = document.getElementById('medical').value;
   const School = document.getElementById('school').value;
   const Entertainment = document.getElementById('ent').value;
   const Commitments = document.getElementById('commit').value;
   const incomeFrequencySelect = document.getElementById('incomeFrequency').value;

   const total = parseFloat(rent+Water+Groceries+Transport+Medical+School+Entertainment+Commitments);

   
   const message = `Dear ALL INCLUSIVE LENDS\nA new application has bee submitted on your website.\n\nApplicant Details\nName:${name}\nEmail: ${email}\nCell: ${cell}\n\nLoan Parameters\nLoan Type:${loanType}\nLoan Amount: ${loanAmount}\nLoan Term: ${loanTerm}\n\nIncome & Expenses\nIncome Frequency: ${incomeFrequencySelect}\nGross Income: ${gross}\nNet Income: ${net}\nOther Income ${other}\nTotal Expenses: R${total}
   \n`;

    // Send email using EmailJS
    emailjs.send("default_service", "template_6avzxbf", {
        from_name: name,
        message: message
    }).then(function(response) {
        console.log('Email sent successfully', response);
      
    }).catch(function(error) {
        console.error('Error sending email:', error);
    });
}
  

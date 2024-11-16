let selectedDate;
let selectedTime;

function checkAvailability() {
  selectedDate = document.getElementById('date').value;
  selectedTime = document.getElementById('time').value;

  document.getElementById('form1').style.display = 'none';
  document.getElementById('form2').style.display = 'block';
}

function confirmDetails() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Update summary
  const summary = `Date: ${selectedDate}<br>Time: ${selectedTime}<br>Name: ${name}<br>Email: ${email}<br>Phone: ${phone}`;
  document.getElementById('summary').innerHTML = summary;

  // Show confirmation form
  document.getElementById('form2').style.display = 'none';
  document.getElementById('form3').style.display = 'block';
}

function confirmAppointment() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Prepare data for sending email
  const subject = 'Appointment Confirmation';
  const message = `Hi ${name},\n\nYour appointment on ${selectedDate} at ${selectedTime} has been confirmed.\n\nThank you.`;

  // Make HTTP request to server to send email
  fetch('/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      recipient: email,
      subject: subject,
      text: message
    })
  })  
  .then(response => {
    if (response.ok) {
      console.log('Email sent successfully');
      // Show confirmation message
      document.getElementById('form3').style.display = 'none';
      document.getElementById('form4').style.display = 'block';
    } else {
      console.error('Failed to send email');
    }
  })
  .catch(error => {
    console.error('Error sending email:', error);
  });
}

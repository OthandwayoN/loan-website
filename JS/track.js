document.addEventListener("DOMContentLoaded", function() {
    const trackingForm = document.getElementById("trackingForm");
    const statusDiv = document.getElementById("status");
 
    trackingForm.addEventListener("submit", function(event) {
        event.preventDefault();
 
        let applicationRef;
        do {
            applicationRef = generateRandomApplicationRef();
        } while (!validateApplicationRef(applicationRef));
 
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;
 
        if (!validateEmail(email)) {
            displayStatus("Please enter a valid email address.");
            return;
        }
 
        if (!validateMobile(mobile)) {
            displayStatus("Please enter a valid mobile number.");
            return;
        }
 
        displayStatus("Fetching Application status...");
 
        simulateStatusFetching(applicationRef);
    });
 
    function generateRandomApplicationRef() {
        // Generate a random number between 10000000 and 99999999
        return Math.floor(Math.random() * 90000000) + 10000000;
    }
 
    function validateApplicationRef(applicationRef) {
        const regex = /^\d{8}$/; // Ensure exactly 8 digits
        return regex.test(applicationRef.toString());
    }
 
    function simulateStatusFetching(applicationRef) {
        setTimeout(function() {
            let status;
            if (applicationRef % 2 === 0) {
                status = "Approved";
                sendEmailResponse(applicationRef);
                sendMobileNotification(applicationRef);
                status += "\n(Note: Mobile response may take time. Thank you for understanding!)";
            } else if (applicationRef % 2 !== 0) {
                status = "Pending";
                status += "\n(Note: Mobile response may take time. Thank you for understanding!)";
            } else {
                status = "Not found";
            }
            displayStatus("Application status: " + status);
        }, 2000);
    }
 
    function displayStatus(status) {
        statusDiv.textContent = status;
    }
 
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
 
    function validateMobile(mobile) {
        const regex = /^\d{10}$/; // Assuming a 10-digit phone number
        return regex.test(mobile);
    }
 
    function sendEmailResponse(applicationRef) {
        const userEmail = document.getElementById("email").value;
        console.log("Email sent to", userEmail, "with application reference number:", applicationRef);
    }
 
    function sendMobileNotification(applicationRef) {
        const userMobile = document.getElementById("mobile").value;
        console.log("Mobile notification sent to", userMobile, "with application reference number:", applicationRef);
    }
});
 
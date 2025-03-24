// Go Back Functionality
function goBack() {
    window.history.back();
}

// Verify OTP and Navigate
document.getElementById("verifyOtpBtn").addEventListener("click", function() {
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const otpInputs = document.querySelectorAll(".otp-input");
    let otp = "";

    // Validate phone number
    if (!phoneNumber || phoneNumber.length < 10) {
        alert("Please enter a valid phone number.");
        return;
    }

    // Dynamically Collect OTP
    otpInputs.forEach(input => {
        otp += input.value;
    });

    // Validate OTP
    if (otp.length !== 4 || isNaN(otp)) {
        alert("Please enter a valid 4-digit passcode.");
        return;
    }

    // Navigate to another page (Example: dashboard.html)
    alert("Login Successful! Redirecting to Dashboard...");
    window.location.href = "openlocker.html"; // Replace with your actual URL
});

// Cancel Button Functionality
document.getElementById("cancelBtn").addEventListener("click", function() {
    const confirmCancel = confirm("Are you sure you want to cancel?");
    if (confirmCancel) {
        window.location.href = "index.html"; // Navigate to home or index page
    }
});

// OTP Focus - Auto Move to Next Input
const otpInputs = document.querySelectorAll(".otp-input");
otpInputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        // Allow only numbers
        if (!/^\d$/.test(e.target.value)) {
            e.target.value = "";
            return;
        }

        // Move to next input if available
        if (e.target.value && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }
    });

    // Handle backspace to focus on previous input
    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
            otpInputs[index - 1].focus();
        }
    });
});

// Forgot Passcode Functionality
document.getElementById("forgotPasscode").addEventListener("click", function() {
    alert("Redirecting to Forgot Passcode page...");
    window.location.href = "forgot-passcode.html"; // Replace with actual URL
});

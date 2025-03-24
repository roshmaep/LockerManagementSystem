function goBack() {
    window.history.back();
  }
document.addEventListener("DOMContentLoaded", function () {
    const phoneNumberInput = document.getElementById("phoneNumber");
    const getOtpBtn = document.getElementById("getOtpBtn");
    const errorMessage = document.getElementById("errorMessage");

    getOtpBtn.addEventListener("click", function () {
        const phoneNumber = phoneNumberInput.value.trim();

        if (validatePhoneNumber(phoneNumber)) {
            console.log(`Sending OTP to: ${phoneNumber}`);
            window.location.href = "otp.html";
        } else {
            errorMessage.textContent = "Please enter a valid phone number";
        }
    });

    function validatePhoneNumber(phone) {
        const phoneRegex = /^[0-9]{10}$/; // Simple 10-digit number validation
        return phoneRegex.test(phone);
    }
});


function goBack() {
    window.history.back();
  }
document.addEventListener("DOMContentLoaded", function () {
    const otpInputs = document.querySelectorAll(".otp-input");
    const verifyOtpBtn = document.getElementById("verifyOtpBtn");
    const timerDisplay = document.getElementById("timer");
    const resendOtpText = document.querySelector(".resend-text");
    const changeNumberLink = document.getElementById("changeNumber");

    let otpCode = generateOtp(); // Generate a new OTP
    let countdown = 16;
    let timerInterval;

    function generateOtp() {
        return Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit OTP
    }

    otpInputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            if (e.target.value.length === 1 && index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && index > 0 && e.target.value.length === 0) {
                otpInputs[index - 1].focus();
            }
        });
    });

    verifyOtpBtn.addEventListener("click", function () {
        let enteredOtp = Array.from(otpInputs).map(input => input.value).join("");

        if (enteredOtp === otpCode) {
            alert("✅ OTP Verified! Redirecting...");
            window.location.href = "success.html"; // Redirect to next page
        } else {
            alert("❌ Incorrect OTP! Try again.");

            // 🔹 Clear all OTP input fields
            otpInputs.forEach(input => {
                input.value = "";
            });

            // 🔹 Focus back on the first OTP input field
            otpInputs[0].focus();
        }
    });

    function startTimer() {
        countdown = 16;
        timerDisplay.textContent = countdown;
        resendOtpText.innerHTML = `Resend code in <span id="timer">${countdown}</span> seconds`;

        timerInterval = setInterval(() => {
            countdown--;
            timerDisplay.textContent = countdown;

            if (countdown <= 0) {
                clearInterval(timerInterval);
                resendOtpText.innerHTML = `<a href="#" id="resendOtpBtn">Resend OTP</a>`;
                enableResendOtp();
            }
        }, 1000);
    }

    function enableResendOtp() {
        document.getElementById("resendOtpBtn").addEventListener("click", function (event) {
            event.preventDefault();
            otpCode = generateOtp(); // Generate a new OTP
            alert(`📩 New OTP Sent: ${otpCode}`); // Simulate OTP sent (Replace with API call)
            startTimer();
        });
    }

    changeNumberLink.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "third.html"; // Redirect to phone number entry page
    });

    startTimer();
});

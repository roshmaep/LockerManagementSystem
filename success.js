function goBack() {
    window.history.back();
  }

document.addEventListener("DOMContentLoaded", function () {
    const agreeCheckbox = document.getElementById("agreeCheckbox");
    const continueBtn = document.getElementById("continueBtn");
    const profilePicture = document.getElementById("profilePicture");
    const fileNameDisplay = document.querySelector(".file-name");
    const userForm = document.getElementById("userForm");
    const inputs = document.querySelectorAll(".input-group input");
    const icons = document.querySelectorAll(".input-icon");

    // Hide icons when typing
    inputs.forEach((input, index) => {
        input.addEventListener("input", function () {
            icons[index].style.display = this.value ? "none" : "block";
        });
    });

    // Update file name when a file is chosen
    profilePicture.addEventListener("change", function () {
        fileNameDisplay.textContent = profilePicture.files.length > 0 
            ? profilePicture.files[0].name 
            : "No file chosen";
    });

    // Enable button only when checkbox is checked
    agreeCheckbox.addEventListener("change", function () {
        continueBtn.disabled = !agreeCheckbox.checked;
    });

    // Form submission logic with validation
    userForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        const fullName = document.getElementById("fullName").value.trim();
        const age = document.getElementById("age").value.trim();
        const address = document.getElementById("address").value.trim();
        const gender = document.querySelector('input[name="gender"]:checked')?.value || "";
        
        if (!fullName || !age || !address || !gender) {
            alert("Please fill out all required fields before continuing.");
            return;
        }

        if (!agreeCheckbox.checked) {
            alert("Please agree to the terms & conditions.");
            return;
        }

        // Store user details in console
        const userDetails = {
            fullName,
            age,
            gender,
            address,
            profilePicture: profilePicture.files.length > 0 ? profilePicture.files[0].name : "No file uploaded"
        };
        console.log("User Details:", userDetails);

        // Clear form fields after submission
        userForm.reset();
        fileNameDisplay.textContent = "No file chosen";
        icons.forEach(icon => icon.style.display = "block");

        // Redirect to next page after a short delay
        setTimeout(() => {
            window.location.href = "lockers.html";
        }, 500); // Short delay for better UX
    });
});

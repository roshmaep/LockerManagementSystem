document.addEventListener("DOMContentLoaded", function () {
    const storeItemsBtn = document.getElementById("storeItemsBtn");
    const retrieveItemsBtn = document.getElementById("retrieveItemsBtn");

    if (storeItemsBtn) {
        storeItemsBtn.addEventListener("click", function () {
            console.log("Navigating to store items page...");
            window.location.href = "third.html"; // Redirect to store page
        });
    }

    if (retrieveItemsBtn) {
        retrieveItemsBtn.addEventListener("click", function () {
            console.log("Navigating to retrieve items page...");
            window.location.href = "retrieve.html"; // Redirect to retrieve page
        });
    }

    // Log city name (but don’t display it)
    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get("city");

    if (city) {
        console.log(`City on second page: ${city}`); // ✅ Log city
    }
});

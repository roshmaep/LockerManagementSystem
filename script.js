document.addEventListener("DOMContentLoaded", function () {
    const useMyLocationBtn = document.getElementById("useMyLocationBtn");
    const enterLocationManuallyBtn = document.getElementById("enterLocationManuallyBtn");

    if (useMyLocationBtn) {
        useMyLocationBtn.addEventListener("click", getLocationAndRedirect);
    }
    if (enterLocationManuallyBtn) {
        enterLocationManuallyBtn.addEventListener("click", function () {
            window.location.href = "second.html";
        });
    }

    function getLocationAndRedirect() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`); // ✅ Display in console

                    // Get city name using BigDataCloud API
                    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
                        .then(response => response.json())
                        .then(data => {
                            const city = data.city || "Unknown Location";
                            console.log(`Detected City: ${city}`); // ✅ Display city in console
                            window.location.href = `second.html?city=${encodeURIComponent(city)}`;
                        })
                        .catch(error => {
                            console.error("Error fetching city name:", error);
                            window.location.href = `second.html?lat=${latitude}&lng=${longitude}`;
                        });
                },
                function (error) {
                    console.error("Error getting location:", error);
                    alert("Unable to retrieve location. Please enter manually.");
                    window.location.href = "second.html";
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }
});

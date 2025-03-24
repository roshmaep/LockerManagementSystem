function goBack() {
    window.history.back();
  }

document.addEventListener('DOMContentLoaded', function() {
    // Select S2 and L2 lockers using their IDs
    const s2Locker = document.getElementById('S2');
    const l2Locker = document.getElementById('L2');

    // Function to navigate and change background color
    function navigateToUnavailablePage(locker) {
        // Change background color to #A7C7E7
        locker.style.backgroundColor = '#A7C7E7';

        // Navigate to locker-unavailable.html after a short delay (optional)
        setTimeout(() => {
            window.location.href = 'locker-unavailable.html';
        }, 300); // 300ms delay for effect
    }

    // Add click event listeners
    if (s2Locker) {
        s2Locker.addEventListener('click', function() {
            navigateToUnavailablePage(s2Locker);
        });
    }

    if (l2Locker) {
        l2Locker.addEventListener('click', function() {
            navigateToUnavailablePage(l2Locker);
        });
    }
});

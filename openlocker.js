// Go Back Functionality
/*function goBack() {
    window.history.back();
  }*/
  
  // Open Locker Button
  document.getElementById("openLockerBtn").addEventListener("click", function() {
    alert("Temporary Access Granted. Please proceed to your locker.");
  });
  
  // Retrieve Items Button
  document.getElementById("retrieveItemsBtn").addEventListener("click", function() {
    alert("Items Retrieved. Locker Released.");
    window.location.href = "retrieve.html"; // Navigate back to a page or homepage
  });
  
  // Cancel Button
  document.getElementById("cancelBtn").addEventListener("click", function() {
    const confirmCancel = confirm("Are you sure you want to cancel?");
    if (confirmCancel) {
      window.location.href = "index.html"; // Redirect to home
    }
  });
  
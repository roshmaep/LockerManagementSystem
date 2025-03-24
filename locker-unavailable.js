// Go back to previous page
function goBack() {
  window.history.back();
}

// Notify user (placeholder function)
function notifyUser() {
  alert('You will be notified when the locker becomes available!');
}

// Locker Access Time Data
const lockerAccessTimes = {
  "S2": "2 hours, 15 minutes",
  "L2": "1 hour, 45 minutes",
  "L3": "3 hours, 30 minutes"
};

function showAccessTime(lockerId) {
  const accessTimeElement = document.getElementById("accessTime");

  if (lockerAccessTimes[lockerId]) {
    accessTimeElement.textContent = `Accessed Time: ${lockerAccessTimes[lockerId]}`;
    accessTimeElement.style.display = "block";
  } else {
    accessTimeElement.style.display = "none";
  }
}

// Example Click Handling (You can expand this)
document.querySelectorAll(".locker").forEach(locker => {
  locker.addEventListener("click", function () {
    const lockerId = this.id;
    showAccessTime(lockerId);
  });
});

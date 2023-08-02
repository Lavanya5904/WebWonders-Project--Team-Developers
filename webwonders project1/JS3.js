document.addEventListener("DOMContentLoaded", function () {
    // Set the target date and time (adjust as needed)
    const targetDate = new Date("2023-09-01T23:59:59").getTime();
  
    // Update the countdown every second
    const countdown = setInterval(function () {
      // Get the current date and time
      const now = new Date().getTime();
  
      // Calculate the time remaining between now and the target date
      const timeRemaining = targetDate - now;
  
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      // Update the countdown timer on the webpage
      document.getElementById("days").innerText = days < 10 ? "0" + days : days;
      document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
      document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
      document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
  
      // If the countdown is over, display a message or take any desired action
      if (timeRemaining < 0) {
        clearInterval(countdown);
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        alert("Countdown is over!");
      }
    }, 1000); // Update the countdown every 1 second (1000 milliseconds)
  });
  
function printNumbersSetInterval(from, to, interval) {
  let current = from;
  let timerId = setInterval(() => {
    console.log(current);
    if (current === to) {
      clearInterval(timerId); 
    }
    current++;
  }, interval);
}
//printNumbersSetInterval(1, 5, 1000);

function printNumbersRecursiveTimeout(from, to, interval) {
  let current = from;

  function tick() {
    console.log(current);
    current++;

    if (current <= to) {
      setTimeout(tick, interval);
    }
  }

  tick(); 
}
// printNumbersRecursiveTimeout(10, 15, 500);

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("link-container");
  
  const targetUrl = "https://uk.javascript.info/settimeout-setinterval";
  const linkText = "Перейти до статті про setTimeout/SetInterval";
  let timeLeft = 65; 

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;    
    
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    
    return `${minutes}:${formattedSeconds}`;
  }

  function updateCountdown() {
    if (timeLeft <= 0) {
      clearInterval(timerId);
      container.innerHTML = `<a href="${targetUrl}">${linkText}</a>`;
      return;
    }
    container.textContent = `Зачекайте ${formatTime(timeLeft)}`;
    timeLeft--; 
  }

  updateCountdown(); 
  const timerId = setInterval(updateCountdown, 1000);
});
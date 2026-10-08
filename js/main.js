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
printNumbersSetInterval(1, 5, 1000);
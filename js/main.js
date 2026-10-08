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


printNumbersRecursiveTimeout(10, 15, 500);
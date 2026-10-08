const imgEl = document.getElementById('dogImage');
const btnEl = document.getElementById('fetchButton');

btnEl.onclick = () => {
  btnEl.textContent = 'Завантаження...';
  btnEl.disabled = true;
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Помилка HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      imgEl.src = data.message;
      
      imgEl.onload = () => {
        btnEl.textContent = 'Завантажити нового песика';
        btnEl.disabled = false;
      };
    })
    .catch((err) => {
      console.log("err", err);
    });
};


btnEl.onclick();
let count = 1;
document.getElementById("radio-1").checked = true;

let interval = setInterval(nextImage, 3300);

function nextImage(){
  count++;
  if (count > 5){
    count = 1;
  }
  document.getElementById("radio-" + count).checked = true;
}

// Atualizar o count quando clicar nos botões manuais
const radios = document.querySelectorAll('input[name="radio-btn"]');
radios.forEach((radio, index) => {
  radio.addEventListener('click', () => {
    count = index + 1;
    clearInterval(interval);
    interval = setInterval(nextImage, 3300); // reinicia o intervalo após clique manual
  });
});

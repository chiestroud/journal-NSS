const buttonJan4 = document.querySelector('#jan4');
const buttonJan5 = document.querySelector('#jan5');
const hiddenText = document.querySelector('.hiddenText')
const jan5Card = document.querySelector('#jan5Card');



const randomText = [
  'Why did you click me?',
  'Again?',
  'What is wrong with you?',
  'Are you sure it is ok to click this?',
]

buttonJan4.addEventListener('click', function() {
  const randomTextGenerator = randomText[Math.floor(Math.random() * randomText.length)];
  hiddenText.innerHTML = `${randomTextGenerator}`;
})

buttonJan5.addEventListener('click', function() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() *256);
  const z = Math.floor(Math.random() * 256);
  const backColor = `rgb(${x}, ${y}, ${z})`;
  jan5Card.style.backgroundColor = backColor;
})

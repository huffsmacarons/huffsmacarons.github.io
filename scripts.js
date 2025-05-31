const FORECASTS = [
  'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/1.png',
  'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/2.png',
  'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/3.png',
  'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/4.png',
  'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/5.png',
  'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/6.png',
  'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/7.png',
  'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/8.png',
  'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/9.png',
  'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/10.png',
  'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/11.png',
  'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/12.png',
'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/13.png',
'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/14.png',
'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/15.png',
'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/16.png',
'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/17.png',
'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/18.png',
'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/19.png',
'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/20.png',
'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/21.png',
'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/22.png',
'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/23.png'
]

let shownIndices = [];

const getRandomIndex = () => Math.floor(Math.random() * FORECASTS.length);

const handleClick = () => {
  const forecastNode = document.querySelector('.forecast');
  
  if (!forecastNode) {
    return;
  }
  
  if (shownIndices.length === FORECASTS.length) {
    shownIndices = [shownIndices[shownIndices.length - 1]];
  }
  
  let randomIndex = getRandomIndex();
  
  while(shownIndices.includes(randomIndex)) {
    randomIndex = getRandomIndex();
  }

  const randomForecast = FORECASTS[randomIndex];
  shownIndices.push(randomIndex);
  
  forecastNode.textContent = randomForecast;
}

const button = document.querySelector('.button');

if (button) {
  button.addEventListener('click', handleClick)
}

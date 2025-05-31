const FORECASTS = [
  '<img src="https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/1.png">',
  '<img src="https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/2.png">',
  '<img src="https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/3.png">',
  '<img src="https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/4.png">',
  '<img src="https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/5.png">',
  '<img src="https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/6.png">',
  '<img src="https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/7.png">',
  '<img src="https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/8.png">',
  '<img src="https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/9.png">',
  '<img src="https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/10.png">',
  '<img src="https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/11.png">',
  '<img src="https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/12.png">',
'<img src="https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/13.png">',
'<img src="https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/14.png">',
'<img src="https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/15.png">',
'<img src="https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/16.png">',
'<img src="https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/17.png">',
'<img src="https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/18.png">',
'<img src="https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/19.png">',
'<img src="https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/20.png">',
'<img src="https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/21.png">',
'<img src="https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/22.png">',
'<img src="https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/23.png">'
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

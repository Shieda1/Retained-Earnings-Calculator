// https://taprun.com/calculators/retained-earnings

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const endingretainedearningsRadio = document.getElementById('endingretainedearningsRadio');
const startingretainedearningsRadio = document.getElementById('startingretainedearningsRadio');
const netincomeRadio = document.getElementById('netincomeRadio');
const dividendsRadio = document.getElementById('dividendsRadio');

let endingretainedearnings;
let startingretainedearnings = v1;
let netincome = v2;
let dividends = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

endingretainedearningsRadio.addEventListener('click', function() {
  variable1.textContent = 'Starting retained earnings';
  variable2.textContent = 'Net income';
  variable3.textContent = 'Dividends';
  startingretainedearnings = v1;
  netincome = v2;
  dividends = v3;
  result.textContent = '';
});

startingretainedearningsRadio.addEventListener('click', function() {
  variable1.textContent = 'Ending retained earnings';
  variable2.textContent = 'Net income';
  variable3.textContent = 'Dividends';
  endingretainedearnings = v1;
  netincome = v2;
  dividends = v3;
  result.textContent = '';
});

netincomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Ending retained earnings';
  variable2.textContent = 'Starting retained earnings';
  variable3.textContent = 'Dividends';
  endingretainedearnings = v1;
  startingretainedearnings = v2;
  dividends = v3;
  result.textContent = '';
});

dividendsRadio.addEventListener('click', function() {
  variable1.textContent = 'Ending retained earnings';
  variable2.textContent = 'Starting retained earnings';
  variable3.textContent = 'Net income';
  endingretainedearnings = v1;
  startingretainedearnings = v2;
  netincome = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(endingretainedearningsRadio.checked)
    result.textContent = `Ending retained earnings = ${computeendingretainedearnings().toFixed(2)}`;

  else if(startingretainedearningsRadio.checked)
    result.textContent = `Starting retained earnings = ${computestartingretainedearnings().toFixed(2)}`;

  else if(netincomeRadio.checked)
    result.textContent = `Net income = ${computenetincome().toFixed(2)}`;

  else if(dividendsRadio.checked)
    result.textContent = `Dividends = ${computedividends().toFixed(2)}`;
})

// calculation

function computeendingretainedearnings() {
  return Number(startingretainedearnings.value) + Number(netincome.value) - Number(dividends.value);
}

function computestartingretainedearnings() {
  return Number(endingretainedearnings.value) - Number(netincome.value) + Number(dividends.value);
}

function computenetincome() {
  return Number(endingretainedearnings.value) - Number(startingretainedearnings.value) + Number(dividends.value);
}

function computedividends() {
  return Number(startingretainedearnings.value) + Number(netincome.value) - Number(endingretainedearnings.value);
}
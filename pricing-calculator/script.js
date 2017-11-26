const priceInput = document.querySelector('[name=price]');
const quantityInput = document.querySelector('[name=quantity]');
const total = document.querySelector('.total');
const label = document.querySelector('.quantity-label');

function calculateCost(){
    const totalCost = priceInput.value * quantityInput.value;
    total.innerText = '$' + totalCost.toFixed(2);
}

calculateCost();

function updateLabel(){
    label.innerText = quantityInput.value;
}

priceInput.addEventListener('input', calculateCost);
quantityInput.addEventListener('input', calculateCost);
quantityInput.addEventListener('input', updateLabel);
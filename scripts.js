const convertButton = document.querySelector('.convert-button');
const inputAmount = document.querySelector('#amount');
const fromValue = document.querySelector('#from-value');
const toValue = document.querySelector('#to-value');
const toCurrency = document.querySelector('#to-currency');
const toName = document.querySelector('#to-name');
const toImage = document.querySelector('.moeda-dolares');

// taxas fixas (exemplo)
const dolar = 5.0;
const euro = 5.4;

function convertValues() {
    const value = Number(inputAmount.value);

    if (!value || value <= 0) {
        fromValue.innerHTML = 'R$ 0,00';
        toValue.innerHTML = 'US$ 0,00';
        return;
    }

    // valor em reais
    fromValue.innerHTML = value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    // dólar
    if (toCurrency.value === 'USD') {
        const converted = value / dolar;
        toName.innerHTML = 'Dólar';
        toImage.src = './assets/dola.png';
        toImage.alt = 'Bandeira dos Estados Unidos';
        toValue.innerHTML = converted.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'USD'
        });
    }

    // euro
    if (toCurrency.value === 'EUR') {
        const converted = value / euro;
        toName.innerHTML = 'Euro';
        toImage.src = './assets/euro.jpg';
        toImage.alt = 'Bandeira da União Europeia';
        toValue.innerHTML = converted.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'EUR'
        });
    }
}

convertButton.addEventListener('click', convertValues);

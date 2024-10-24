const exchangeRates = {
    USD: { EUR: 0.85, BRL: 5.25, USD: 1 },
    EUR: { USD: 1.18, BRL: 6.18, EUR: 1 },
    BRL: { USD: 0.19, EUR: 0.16, BRL: 1 },
};

document.getElementById('convertButton').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').textContent = "Por favor, insira um valor válido.";
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);
    document.getElementById('result').textContent = `${amount} ${fromCurrency} é igual a ${convertedAmount} ${toCurrency}.`;
});

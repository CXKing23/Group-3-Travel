import ".env"
async function fetchExchangeRate(targetCurrency) {
    try {
        const apiKey = FREECURRENCYAPI_KEY; // Replace with your actual API key
        const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&base_currency=USD`);
        const data = await response.json();

        if (data && data.data && data.data[targetCurrency]) {
            return data.data[targetCurrency]; // Correctly accessing exchange rates
        } else {
            throw new Error("Invalid currency data received");
        }
    } catch (error) {
        console.error("Error fetching exchange rate:", error);
        return null;
    }
}

async function calculateTotal() {
    const accommodationCost = parseFloat(document.getElementById('accommodation').value) || 0;
    const transportationCost = parseFloat(document.getElementById('transportation').value) || 0;
    const mealsCost = parseFloat(document.getElementById('meals').value) || 0;
    const miscellaneousCost = parseFloat(document.getElementById('miscellaneous').value) || 0;

    const totalCost = accommodationCost + transportationCost + mealsCost + miscellaneousCost;
    document.getElementById('totalCost').textContent = totalCost.toFixed(2);

    const targetCurrency = document.getElementById('currency').value;
    const exchangeRate = await fetchExchangeRate(targetCurrency);

    if (exchangeRate) {
        const convertedCost = totalCost * exchangeRate;
        document.getElementById('convertedCost').textContent = convertedCost.toFixed(2);
        document.getElementById('currencyCode').textContent = targetCurrency;
    } else {
        document.getElementById('convertedCost').textContent = "Error fetching rate";
    }
}

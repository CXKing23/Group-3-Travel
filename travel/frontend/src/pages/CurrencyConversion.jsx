import React, { useState } from "react";

const CurrencyConversion = () => {
    const [accommodation, setAccommodation] = useState(0);
    const [transportation, setTransportation] = useState(0);
    const [meals, setMeals] = useState(0);
    const [miscellaneous, setMiscellaneous] = useState(0);
    const [currency, setCurrency] = useState("EUR");
    const [totalCost, setTotalCost] = useState(0);
    const [convertedCost, setConvertedCost] = useState(0);

    const fetchExchangeRate = async (targetCurrency) => {
        try {
            const apiKey = process.env.REACT_APP_FREECURRENCYAPI_KEY;
            const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&base_currency=USD`);
            const data = await response.json();
            return data?.data?.[targetCurrency] || null;
        } catch (error) {
            console.error("Error fetching exchange rate:", error);
            return null;
        }
    };

    const calculateTotal = async () => {
        const total = accommodation + transportation + meals + miscellaneous;
        setTotalCost(total);
        
        const exchangeRate = await fetchExchangeRate(currency);
        if (exchangeRate) {
            setConvertedCost((total * exchangeRate).toFixed(2));
        } else {
            setConvertedCost("Error fetching rate");
        }
    };

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label>Accommodation:</label>
                <input type="number" value={accommodation} onChange={(e) => setAccommodation(parseFloat(e.target.value) || 0)} required />

                <label>Transportation:</label>
                <input type="number" value={transportation} onChange={(e) => setTransportation(parseFloat(e.target.value) || 0)} required />

                <label>Meals:</label>
                <input type="number" value={meals} onChange={(e) => setMeals(parseFloat(e.target.value) || 0)} required />

                <label>Miscellaneous:</label>
                <input type="number" value={miscellaneous} onChange={(e) => setMiscellaneous(parseFloat(e.target.value) || 0)} required />

                <label>Convert to:</label>
                <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                <option value="AUD">Australian Dollar (AUD)</option>
                    <option value="BGN">Bulgarian Lev (BGN)</option>
                    <option value="BRL">Brazilian Real (BRL)</option>
                    <option value="CAD">Canadian Dollar (CAD)</option>
                    <option value="CHF">Swiss Franc (CHF)</option>
                    <option value="CNY">Chinese Yuan (CNY)</option>
                    <option value="CZK">Czech Koruna (CZK)</option>
                    <option value="DKK">Danish Krone (DKK)</option>
                    <option value="EUR">Euro (EUR)</option>
                    <option value="GBP">British Pound (GBP)</option>
                    <option value="HKD">Hong Kong Dollar (HKD)</option>
                    <option value="HRK">Croatian Kuna (HRK)</option>
                    <option value="HUF">Hungarian Forint (HUF)</option>
                    <option value="IDR">Indonesian Rupiah (IDR)</option>
                    <option value="ILS">Israeli Shekel (ILS)</option>
                    <option value="INR">Indian Rupee (INR)</option>
                    <option value="ISK">Icelandic Króna (ISK)</option>
                    <option value="JPY">Japanese Yen (JPY)</option>
                    <option value="KRW">South Korean Won (KRW)</option>
                    <option value="MXN">Mexican Peso (MXN)</option>
                    <option value="MYR">Malaysian Ringgit (MYR)</option>
                    <option value="NOK">Norwegian Krone (NOK)</option>
                    <option value="NZD">New Zealand Dollar (NZD)</option>
                    <option value="PHP">Philippine Peso (PHP)</option>
                    <option value="PLN">Polish Złoty (PLN)</option>
                    <option value="RON">Romanian Leu (RON)</option>
                    <option value="RUB">Russian Ruble (RUB)</option>
                    <option value="SEK">Swedish Krona (SEK)</option>
                    <option value="SGD">Singapore Dollar (SGD)</option>
                    <option value="THB">Thai Baht (THB)</option>
                    <option value="TRY">Turkish Lira (TRY)</option>
                    <option value="USD">US Dollar (USD)</option>
                    <option value="ZAR">South African Rand (ZAR)</option>
                </select>

                <button type="button" onClick={calculateTotal}>Calculate Total</button>
            </form>

            <h2>Total Estimated Cost: ${totalCost.toFixed(2)}</h2>
            <h2>Converted Cost: {convertedCost} {currency}</h2>
        </div>
    );
};

export default CurrencyConversion;

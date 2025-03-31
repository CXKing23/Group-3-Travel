function filterCountries() {
    let input = document.getElementById("searchInputCountries").value.toLowerCase();
    let countries = document.querySelectorAll("#country-list div");

    countries.forEach(country => {
        let text = country.textContent.toLowerCase();
        country.style.display = text.includes(input) ? "block" : "none";
    });
}
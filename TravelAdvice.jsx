import React, { useState } from 'react';

const countries = [
  { name: 'Afghanistan', season: 'Spring (March to May) and Fall (September to November)' },
  { name: 'Albania', season: 'Spring (April to June) and Fall (September to October)' },
  { name: 'Algeria', season: 'Spring (March to May) and Fall (October to November)' },
  { name: 'Andorra', season: 'Late Spring to Early Fall (May to September)' },
  { name: 'Angola', season: 'Dry Season (May to October)' },
  { name: 'Antigua and Barbuda', season: 'Late Fall to Early Spring (December to April)' },
  { name: 'Argentina', season: 'Spring (September to November) and Fall (March to May)' },
  { name: 'Armenia', season: 'Spring (April to June) and Fall (September to November)' },
  { name: 'Australia', season: 'Spring (September to November) and Fall (March to May)' },
  { name: 'Austria', season: 'Late Spring to Early Fall (May to September)' },
  { name: "Azerbaijan", season: "Spring (April to June) and Fall (September to November)" },
  { name: "Bahamas", season: "Late Fall to Early Spring (December to April)" },
  { name: "Bahrain", season: "Fall (October to December) and Spring (March to May)" },
  { name: "Bangladesh", season: "Winter (November to February) and Fall (October to November)" },
  { name: "Barbados", season: "Late Fall to Early Spring (December to April)" },
  { name: "Belarus", season: "Late Spring to Early Fall (May to September)" },
  { name: "Belgium", season: "Late Spring to Early Fall (May to September)" },
  { name: "Belize", season: "Late Fall to Early Spring (November to April)" },
  { name: "Benin", season: "Dry Season (November to April)" },
  { name: "Bhutan", season: "Spring (March to May) and Fall (September to November)" },
  { name: "Bolivia", season: "Dry Season (May to October)" },
  { name: "Bosnia and Herzegovina", season: "Late Spring to Early Fall (May to September)" },
  { name: "Botswana", season: "Dry Season (May to October)" },
  { name: "Brazil", season: "Depends on the Region - Generally Late Fall to Early Spring (May to September) for many areas" },
  { name: "Brunei", season: "Late Fall to Early Spring (December to February)" },
  { name: "Bulgaria", season: "Late Spring to Early Fall (May to September)" },
  { name: "Burkina Faso", season: "Dry Season (November to April)" },
  { name: "Burundi", season: "Dry Season (June to September) and Short Dry Season (December to January)" },
  { name: "Cabo Verde", season: "Late Fall to Early Spring (December to April)" },
  { name: "Cambodia", season: "Dry Season (November to April)" },
  { name: "Cameroon", season: "Dry Season (November to February)" },
  { name: "Canada", season: "Late Spring to Early Fall (June to September)" },
  { name: "Central African Republic", season: "Dry Season (December to March)" },
  { name: "Chad", season: "Dry Season (November to April)" },
  { name: "Chile", season: "Depends on the Region – Generally Late Fall to Early Spring (October to April)" },
  { name: "China", season: "Depends on the Region – Generally Spring (April to June) and Fall (September to November)" },
  { name: "Colombia", season: "Dry Season (December to March) and Second Dry Season (July to August)" },
  { name: "Comoros", season: "Dry Season (May to October)" },
  { name: "Democratic Republic of the Congo", season: "Dry Season (June to September)" },
  { name: "Republic of the Congo", season: "Dry Season (June to September)" },
  { name: "Costa Rica", season: "Dry Season (December to April)" },
  { name: "Croatia", season: "Late Spring to Early Fall (May to September)" },
  { name: "Cuba", season: "Late Fall to Early Spring (November to April)" },
  { name: "Cyprus", season: "Late Spring to Early Fall (May to September)" },
  { name: "Czech Republic", season: "Late Spring to Early Fall (May to September)" },
  { name: "Denmark", season: "Late Spring to Early Fall (May to September)" },
  { name: "Djibouti", season: "Late Fall to Early Spring (October to April)" },
  { name: "Dominica", season: "Late Fall to Early Spring (November to April)" },
  { name: "Dominican Republic", season: "Late Fall to Early Spring (December to April)" },
  { name: "East Timor (Timor-Leste)", season: "Dry Season (June to October)" },
  { name: "Ecuador", season: "Depends on the Region – Generally Late Fall to Early Spring (June to September)" },
  { name: "Egypt", season: "Spring (March to May) and Fall (September to November)" },
  { name: "El Salvador", season: "Dry Season (November to April)" },
  { name: "Equatorial Guinea", season: "Dry Season (December to February)" },
  { name: "Eritrea", season: "Late Fall to Early Spring (November to April)" },
  { name: "Estonia", season: "Late Spring to Early Fall (June to September)" },
  { name: "Eswatini", season: "Late Fall to Early Spring (May to August)" },
  { name: "Ethiopia", season: "Depends on the Region – Generally Late Fall to Early Spring (October to April)" },
  { name: "Fiji", season: "Late Fall to Early Spring (May to October)" },
  { name: "Finland", season: "Late Spring to Early Fall (June to September)" },
  { name: "France", season: "Late Spring to Early Fall (May to September)" },
  { name: "Gabon", season: "Dry Season (June to September)" },
  { name: "The Gambia", season: "Dry Season (November to June)" },
  { name: "Georgia", season: "Late Spring to Early Fall (May to September)" },
  { name: "Germany", season: "Late Spring to Early Fall (May to September)" },
  { name: "Ghana", season: "Dry Season (November to March)" },
  { name: "Greece", season: "Late Spring to Early Fall (May to September)" },
  { name: "Grenada", season: "Late Fall to Early Spring (December to April)" },
  { name: "Guatemala", season: "Dry Season (November to April)" },
  { name: "Guinea", season: "Dry Season (November to March)" },
  { name: "Guinea-Bissau", season: "Dry Season (November to April)" },
  { name: "Guyana", season: "Dry Season (September to November)" },
  { name: "Haiti", season: "Late Fall to Early Spring (November to April)" },
  { name: "Honduras", season: "Dry Season (November to April)" },
  { name: "Hungary", season: "Late Spring to Early Fall (May to September)" },
  { name: "Iceland", season: "Late Spring to Early Fall (June to September)" },
  { name: "India", season: "Depends on the Region – Generally Late Fall to Early Spring (October to March)" },
  { name: "Indonesia", season: "Depends on the Region – Generally Late Fall to Early Spring (May to September)" },
  { name: "Iran", season: "Depends on the Region – Generally Spring (March to May) and Fall (September to November)" },
  { name: "Iraq", season: "Fall (October to December) and Spring (March to May)" },
  { name: "Ireland", season: "Late Spring to Early Fall (May to September)" },
  { name: "Israel", season: "Late Fall to Early Spring (October to April)" },
  { name: "Italy", season: "Late Spring to Early Fall (May to September)" },
  { name: "Ivory Coast", season: "Dry Season (December to April)" },
  { name: "Jamaica", season: "Late Fall to Early Spring (November to December)" },
  { name: "Japan", season: "Late Spring to Early Fall (March to November)" },
  { name: "Jordan", season: "Late Fall to Early Spring (October to April)" },
  { name: "Kazakhstan", season: "Late Spring to Early Fall (May to September)" },
  { name: "Kenya", season: "Dry Season (June to October) and Short Dry Season (December to March)" },
  { name: "Kiribati", season: "Depends on the Atoll - Generally Late Fall to Early Spring (November to March) for many areas" },
  { name: "North Korea", season: "Late Spring to Early Fall (April to October)" },
  { name: "South Korea", season: "Late Spring to Early Fall (April to October)" },
  { name: "Kosovo", season: "Late Spring to Early Fall (May to September)" },
  { name: "Kuwait", season: "Fall (October to November) and Spring (March to April)" },
  { name: "Kyrgyzstan", season: "Late Spring to Early Fall (May to September)" },
  { name: "Laos", season: "Dry Season (November to March)" },
  { name: "Latvia", season: "Late Spring to Early Fall (June to September)" },
  { name: "Lebanon", season: "Late Spring to Early Fall (April to October)" },
  { name: "Lesotho", season: "Late Spring to Early Fall (September to April)" },
  { name: "Liberia", season: "Dry Season (November to April)" },
  { name: "Libya", season: "Spring (March to May) and Fall (September to November)" },
  { name: "Liechtenstein", season: "Late Spring to Early Fall (May to September)" },
  { name: "Lithuania", season: "Late Spring to Early Fall (June to September)" },
  { name: "Luxembourg", season: "Late Spring to Early Fall (May to September)" },
  { name: "Madagascar", season: "Dry Season (May to October)" },
  { name: "Malawi", season: "Dry Season (May to October)" },
  { name: "Malaysia", season: "Dry Season (June to September) for West Coast and Borneo" },
  { name: "Maldives", season: "Dry Season (December to April)" },
  { name: "Mali", season: "Dry Season (November to April)" },
  { name: "Malta", season: "Late Spring to Early Fall (April to October)" },
  { name: "Marshall Islands", season: "Late Fall to Early Spring (November to April)" },
  { name: "Mauritania", season: "Dry Season (November to April)" },
  { name: "Mauritius", season: "Late Fall to Early Spring (May to December)" },
  { name: "Mexico", season: "Depends on the Region - Generally Late Fall to Early Spring (November to April) for many areas" },
  { name: "Micronesia", season: "Dry Season (December to April)" },
  { name: "Moldova", season: "Late Spring to Early Fall (May to September)" },
  { name: "Monaco", season: "Late Spring to Early Fall (May to September)" },
  { name: "Mongolia", season: "Late Spring to Early Fall (May to September)" },
  { name: "Montenegro", season: "Late Spring to Early Fall (May to September)" },
  { name: "Morocco", season: "Late Fall to Early Spring (October to April)" },
  { name: "Mozambique", season: "Dry Season (May to October)" },
  { name: "Myanmar (Burma)", season: "Dry Season (November to February)" },
  { name: "Namibia", season: "Dry Season (May to October)" },
  { name: "Nauru", season: "Late Fall to Early Spring (November to April)" },
  { name: "Nepal", season: "Depends on the Region - Generally Late Fall to Early Spring (October to March) for many areas" },
  { name: "Netherlands", season: "Late Spring to Early Fall (May to September)" },
  { name: "New Zealand", season: "Late Spring to Early Fall (October to April)" },
  { name: "Nicaragua", season: "Dry Season (November to April)" },
  { name: "Niger", season: "Dry Season (November to April)" },
  { name: "Nigeria", season: "Dry Season (November to March)" },
  { name: "North Macedonia (formerly Macedonia)", season: "Late Spring to Early Fall (May to September)" },
  { name: "Norway", season: "Late Spring to Early Fall (June to September)" },
  { name: "Oman", season: "Late Fall to Early Spring (November to March)" },
  { name: "Pakistan", season: "Depends on the Region - Generally Late Fall to Early Spring (October to March) for many areas" },
  { name: "Palau", season: "Late Fall to Early Spring (November to April)" },
  { name: "Panama", season: "Late Fall to Early Spring (December to April)" },
  { name: "Papua New Guinea", season: "Dry Season (May to October)" },
  { name: "Paraguay", season: "Late Fall to Early Spring (April to October)" },
  { name: "Peru", season: "Depends on the Region - Generally Late Fall to Early Spring (May to September) for many areas" },
  { name: "Philippines", season: "Dry Season (November to April)" },
  { name: "Poland", season: "Late Spring to Early Fall (May to September)" },
  { name: "Portugal", season: "Late Spring to Early Fall (May to September)" },
  { name: "Qatar", season: "Fall (October to February)" },
  { name: "Romania", season: "Late Spring to Early Fall (May to September)" },
  { name: "Russia", season: "Depends on the Region - Generally Late Spring to Early Fall (May to September) for many areas" },
  { name: "Rwanda", season: "Dry Season (June to September)" },
  { name: "Saint Kitts and Nevis", season: "Late Fall to Early Spring (December to April)" },
    { name: "Saint Lucia", season: "Late Fall to Early Spring (December to April)" },
    { name: "Saint Vincent and the Grenadines", season: "Late Fall to Early Spring (December to April)" },
    { name: "Samoa", season: "Late Fall to Early Spring (May to October)" },
    { name: "San Marino", season: "Late Spring to Early Fall (May to September)" },
    { name: "Sao Tome and Principe", season: "Late Fall to Early Spring (May to September)" },
    { name: "Saudi Arabia", season: "Fall (October to March)" },
    { name: "Senegal", season: "Dry Season (November to April)" },
    { name: "Serbia", season: "Late Spring to Early Fall (May to September)" },
    { name: "Seychelles", season: "Late Fall to Early Spring (November to April)" },
    { name: "Sierra Leone", season: "Dry Season (November to April)" },
    { name: "Singapore", season: "Late Fall to Early Spring (December to February)" },
    { name: "Slovakia", season: "Late Spring to Early Fall (May to September)" },
    { name: "Slovenia", season: "Late Spring to Early Fall (May to September)" },
    { name: "Solomon Islands", season: "Late Fall to Early Spring (May to October)" },
    { name: "Somalia", season: "Late Fall to Early Spring (December to April)" },
    { name: "South Africa", season: "Depends on the Region - Generally Late Fall to Early Spring (May to September) for many areas" },
    { name: "South Sudan", season: "Dry Season (December to March)" },
    { name: "Spain", season: "Spring (April - June) and Fall (September - November)" },
    { name: "Sri Lanka", season: "Winter (December - March) and Summer (April - September)" },
    { name: "Sudan", season: "Winter (November - February)" },
    { name: "Suriname", season: "Dry Season (February - August)" },
    { name: "Sweden", season: "Summer (June - August)" },
    { name: "Switzerland", season: "Summer (June - August) and Winter (December - February) for skiing" },
    { name: "Syria", season: "Spring (April - June) and Fall (September - November)" },
    { name: "Taiwan", season: "Fall (September - November)" },
    { name: "Tajikistan", season: "Spring (April - June) and Fall (September - November)" },
    { name: "Tanzania", season: "Dry Season (June - October)" },
    { name: "Thailand", season: "Cool and Dry Season (November - February)" },
    { name: "Togo", season: "Fall (November - February)" },
    { name: "Tonga", season: "May to October is generally good" },
    { name: "Trinidad and Tobago", season: "Dry Season (January - May)" },
    { name: "Tunisia", season: "Spring (March - May) and Fall (September - November)" },
    { name: "Turkey", season: "Spring (April - June) and Fall (September - November)" },
    { name: "Turkmenistan", season: "Spring (April - June) and Fall (September - November)" },
    { name: "Tuvalu", season: "April to October is generally good" },
    { name: "Uganda", season: "Dry Season (December - February and June - August)" },
    { name: "Ukraine", season: "May to September is generally good" },
    { name: "United Arab Emirates", season: "Winter (November - March) and Fall (September - November)" },
    { name: "United Kingdom", season: "Summer (June - August)" },
    { name: "United States", season: "Varies by region - Summer (June - August) for many areas" },
    { name: "Uruguay", season: "Spring (September - November)" },
    { name: "Uzbekistan", season: "Spring (April - June) and Fall (September - November)" },
    { name: "Vanuatu", season: "April to October is generally good" },
    { name: "Vatican City (Holy See)", season: "Spring (April - June) and Fall (September - November)" },
    { name: "Venezuela", season: "December to April is generally good" },
    { name: "Vietnam", season: "North: Fall (September - November), Central: Winter (December - February), South: Winter (December - April)" },
    { name: "Yemen", season: "October to March is generally good" },
    { name: "Zambia", season: "Dry Season (May - October)" },
    { name: "Zimbabwe", season: "Dry Season (May - October)" }
  // Add more countries here as needed...
];

const TravelAdventure = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <header className="p-4 bg-blue-500 text-white text-xl font-bold">
        <a href="/">Travel Adventure</a>
      </header>

      <main className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Countries</h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search for a Country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>

        <p className="mb-2 font-medium">Best Season to Travel</p>

        <div id="country-list" className="space-y-1">
          {filteredCountries.map((country, index) => (
            <div key={index}>
              {country.name} - {country.season}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TravelAdventure;
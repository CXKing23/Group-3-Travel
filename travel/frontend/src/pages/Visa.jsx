import React, { useState } from "react";

import styles  from "../styles/Visa.css"

const countryVisaData = {
  Argentina: `
 <strong>Tourist Visa Requirements for Argentina</strong><br><br>
                        Tourist visa applications may be submitted to any Consular Office of the Argentine Republic. The authorized stay period for this type of visa is a maximum of 90 (ninety) days. Applications are personal and the applicant must submit the following documents (an original and a copy) at the Consular Office:<br><br>
                        <strong>Requirements:</strong><br>
                        - Passport valid for at least six (6) months at the time of entering Argentina, with at least two (2) blank pages.<br>
                        - Two (2) current 4 x 4 cm photographs, facing the camera, printed in colour, on a white background.<br>
                        - <a href="https://cancilleria.gob.ar/userfiles/servicios/fsv_2022_ing_editable.pdf" target="_blank">Complete the visa application form here</a> (preferably in electronic format) and signed by the applicant.<br>
                        - Proof of income (for example, at least three pay slips or last bank statement).<br>
                        - Round trip reservation (Recommendation: do not purchase tickets before obtaining the visa).<br>
                        - Hotel reservation and itinerary.<br>
                        - If no hotel reservation has been made and an individual has extended an invitation, <a href="https://cancilleria.gob.ar/userfiles/servicios/modelo_carta_de_invitacion_a_un_turista_1.docx" download> a letter of invitation </a><br>
                        - Payment of consular fee: 150 US dollars or euros, depending on the Consular Office where the application is filed. The fee must be paid in the local currency of the Representation.<br>
                        - Consular interview.<br><br>`,
  Barbados: `
    <strong>Visitor Visa Requirements for Barbados</strong><br><br>
                    An ENTRY VISA is required to seek entry into Barbados but does not guarantee entry. Permission to enter is granted by the immigration officer at the port of entry.<br><br>
                    <strong>Documents to Submit:</strong><br>
                    - Completed and signed application form (one form per applicant).<br>
                    - One passport-size photograph.<br>
                    - Copies of the outer cover and biometric page of your passport.<br>
                    - <a href="https://immigration.gov.bb/documents/visa_applictaion_online.pdf" target="_blank">Complete the visa application form here</a>.<br>
                    - Proof of income (e.g., pay slips, bank statements).<br>
                    - Round trip reservation (do not purchase tickets before obtaining the visa).<br>
                    - Hotel reservation or letter of invitation. Here is a <a href="https://visainvitationletter.com/sample-visa-invitation-letter-to-invite-a-friend-and-his-family/?countryp=Barbados&nationalityp=Barbadian&aan=a&invitee=friend-and-his-family"  target="_blank">sample</a>  letter of invitation.<br>
              
                    - Banker’s draft: Single Entry US$107.00 / Multiple Entry US$211.00.<br><br>
        
                    <strong>Observations:</strong><br>
                    - The consulate may request additional documents.<br>
                    - Visa approval is at the discretion of the consulate.<br><br>
          
                    For visa inquiries, please contact the nearest Barbadian consulate or embassy.<br><br>
                    <em>Note: Many nationalities are visa-exempt for short stays.</em><br><br>`,

  Canada: `
    <strong>Visitor Visa Requirements for Canada</strong><br><br>
                    To apply for a visitor visa to Canada, you need to submit the following documents and apply through the official website.<br><br>
                    <strong>Requirements:</strong><br>
                    - Valid passport with at least one blank page.<br>
                    - Completed and signed visa application form.<br>
                    - Two passport-size photographs meeting the Canada visa photo requirements.<br>
                    - Proof of financial support (bank statements, pay slips, etc.).<br>
                    - Round trip reservation (do not purchase tickets before obtaining the visa).<br>
                    - A <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/letter-invitation.html"  target="_blank">letter of invitation</a>
               from a family member or friend in Canada (if applicable).<br>
                    - Proof of ties to your home country (e.g., employment letter, property ownership).<br><br>
        
                    <strong>Visa Fee:</strong><br>
                    The fee for a visitor visa to Canada is CAD $100. Additional fees may apply depending on your application.<br><br>
        
                    <strong>Processing Time:</strong><br>
                    Processing typically takes 2-4 weeks, but this may vary depending on the country and time of year.<br><br>
        
                    <strong>How to Apply Online:</strong><br>
                    You can apply online through the official Canadian government website. For the full application process, visit: <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/apply-visitor-visa.html" target="_blank">Canada Visa Application</a>.<br><br>
        
                    <em>Note: Ensure you check if you need a visa based on your nationality. Many countries are eligible for visa exemptions.</em><br><br>
                  `,
  Norway: `
     <strong>Visitor Visa Requirements for Norway</strong><br><br>
                    A visitor's visa allows you to stay in Norway or other countries in the Schengen area for up to 90 days over a period of 180 days.<br><br>
                    <strong>Important Information:</strong><br>
                    - If visiting multiple Schengen countries, apply to the embassy or consulate of your main destination (longest stay).<br>
                    - If no main destination, apply at the embassy of your first point of entry.<br><br>
        
                    <strong>Documents to Submit:</strong><br>
                    - Completed and signed visa application form.<br>
                    - Passport-size photographs that meet Schengen standards.<br>
                    - Valid passport with at least 2 blank pages.<br>
                    - Proof of accommodation (hotel reservation or <a href="https://www.udi.no/en/word-definitions/invitation-for-a-visitors-visa-/#link-10678">invitation letter</a>).<br>
                    - Proof of financial support (bank statements, pay slips).<br>
                    - Round trip reservation (do not book tickets before obtaining visa).<br>
                    - Visa fee payment: EUR 90 for adults, EUR 45 for children aged 6-12.<br><br>
        
                    <strong>How to Apply Online:</strong><br>
                    Begin your application online and submit the required documents through the Norwegian visa portal.  <a href="https://www.udi.no/en/want-to-apply/visit-and-holiday/?resetguide=1"  target="_blank"> [ Apply Here ]</a>.<br><br>
        
                    <strong>Processing Time:</strong><br>
                    The processing time can take up to 45 days from the time your application is received by the embassy.<br><br>
                    <em>Note: Always apply well in advance of your planned travel date.</em><br><br>
                  `,
  Pakistan: `
   <strong>Tourist/Visit Visa Requirements for Pakistan</strong><br><br>
<strong>Application Types:</strong><br>
- <strong>Entry Visa</strong>: Apply if you do not have a valid Pakistan visa.<br>
- <strong>Extension Visa</strong>: Apply if you possess a valid Pakistan visa and are residing in Pakistan.<br><br>

<strong>Eligibility:</strong><br>
- Citizens of specific countries can apply for a Tourist/Visit Visa.<br>
- Citizens of GCC countries do not require a visa to enter Pakistan.<br>
- Citizens of countries listed on the application portal are eligible for a Tourist Visa.<br><br>

<strong>Required Documents:</strong><br>
- Photograph<br>
- Passport<br>
- Hotel booking details<br><br>

<strong>Visa Duration:</strong><br>
- Single Entry Visa: Up to 3 months.<br>
- Extension Visa: Up to 6 months or more, depending on eligibility.<br><br>

<strong>Processing Time:</strong><br>
- Entry Visa: 7-10 working days.<br>
- Extension Visa: 7-10 working days (up to 6 months), 4 weeks (more than 6 months).<br><br>

<strong>How to Apply:</strong><br>
To apply, visit the official Pakistan visa portal and complete the application online.<br>
<a href="https://visa.nadra.gov.pk/e-visa/" target="_blank">Apply Online for Pakistan Visa</a><br><br>

<em>Note: Ensure that all required documents are submitted to avoid delays in processing.</em><br><br>

<strong>Visa Fee:</strong><br>
- **Single Entry Visa** (up to 3 months): USD 60 (approximately).<br>
- **Multiple Entry Visa** (up to 6 months): USD 100 (approximately).<br>
- **Visa Extension Fee**: Similar to the initial application fee, depending on the duration of extension.<br><br>

  `
};

const VisaInfo = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [lastOpenedVisa, setLastOpenedVisa] = useState(null);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const toggleVisaDescription = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (lastOpenedVisa && lastOpenedVisa !== id) {
      document.getElementById(lastOpenedVisa).style.display = "none";
    }
    el.style.display = el.style.display === "block" ? "none" : "block";
    setLastOpenedVisa(id);
  };

  return (
    <div className="container">
      <h1>Travel Visa Requirements</h1>

      <label htmlFor="country">Select a Country:</label>
      <select id="country" onChange={handleCountryChange}>
        <option value="">--Select a Country--</option>
        {Object.keys(countryVisaData).map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      {selectedCountry && countryVisaData[selectedCountry] && (
  <div className="visa-info-box">
    <h2>Visa Requirements for {selectedCountry}</h2>
    <div
      className="visa-details"
      dangerouslySetInnerHTML={{ __html: countryVisaData[selectedCountry] }}
    ></div>
  </div>
)}


      <div className="info-section">
        <h2>Visa Information</h2>
        <p>A visa is a travel document that allows you to enter a foreign country for a specific period...</p>
        <p>In some cases, visas are issued as separate documents and are not attached to your passport...</p>
      </div>

      <div className="info-section">
        <h2>Visa Types by Purpose</h2>
        <div className="visa-type-boxes">
          {[
            "tourist", "transit", "workingHoliday", "student", "work",
            "familyReunion", "investment", "official", "refugee",
            "digitalNomad", "retirement", "pilgrimage"
          ].map((type) => (
            <div key={type} className="visa-type-box" onClick={() => toggleVisaDescription(type)}>
              {type.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())} visas
            </div>
          ))}
        </div>

        {/* Example Description Sections (Repeat and fill content as needed) */}
        <div id="tourist" className="visa-description" style={{ display: "none" }}>
          <p>Tourist visas are typically granted for a short stay in a country for tourism purposes. These visas allow individuals to explore the country for a limited time, usually up to 90 days.</p>
        </div>
        <div id="transit" className="visa-description" style={{ display: "none" }}>
          <p>Transit visas are issued to travelers who need to pass through a country on their way to another destination. They are typically short-term and for people staying only a few hours to a couple of days.</p>
        </div>
         <div id="workingHoliday" className="visa-description" style={{ display: "none" }}>
            <p>Working holiday visas allow young travelers to work and travel in a foreign country for a set period, usually 6 months to a year. These are common for people between 18-30 years old.</p>
        </div>
        <div id="student" className="visa-description" style={{ display: "none" }}>
            <p>Student visas are issued to individuals who wish to study in a foreign country. These visas are often granted for the duration of the academic program and may allow part-time work.</p>
        </div>
        <div id="work" className="visa-description" style={{ display: "none" }}>
            <p>Work visas are issued to individuals who have secured employment in a foreign country. These visas are usually long-term and may lead to permanent residency in some countries.</p>
        </div>
        <div id="familyReunion" className="visa-description" style={{ display: "none" }}>
            <p>Family reunification visas allow individuals to join family members who are legally residing in a country. These visas are commonly used by spouses and children of citizens or permanent residents.</p>
        </div>
        <div id="investment" className="visa-description" style={{ display: "none" }}>
            <p>Investment visas are granted to individuals who make a substantial financial investment in a country. This visa may provide a pathway to permanent residency or citizenship.</p>
        </div>
        <div id="official" className="visa-description" style={{ display: "none" }}>
            <p>Official visas are issued to individuals who are traveling for diplomatic or government-related purposes. These are often granted to government employees or representatives of international organizations.</p>
        </div>
        <div id="refugee"className="visa-description" style={{ display: "none" }}>
            <p>Refuge or asylum visas are granted to individuals fleeing persecution in their home country. These visas provide protection and refuge in another country.</p>
        </div>
        <div id="digitalNomad" className="visa-description" style={{ display: "none" }}>
            <p>Digital nomad visas are designed for remote workers who wish to live in a country while continuing to work for their home-based company. These visas allow digital workers to stay for longer periods.</p>
        </div>
        <div id="retirement" className="visa-description" style={{ display: "none" }}>
            <p>Retirement visas are for individuals who are retired and wish to live in a foreign country. Many countries offer these visas to attract retirees with stable income sources.</p>
        </div>
        <div id="pilgrimage" className="visa-description" style={{ display: "none" }}>
            <p>Pilgrimage visas are granted to individuals traveling to a foreign country for religious or spiritual purposes, such as a pilgrimage to Mecca or other sacred locations.</p>
            </div> </div> </div>
  );
};

export default VisaInfo;

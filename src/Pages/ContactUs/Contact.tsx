import style from "./ContactUs.module.css" ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight , faXmark} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Contact = () => {

    const [errname , setErrname] = useState<boolean>(false);
    const [erremail , setErremail] = useState<boolean>(false);
    const [errboth , setErrboth ] = useState<boolean>(false);
    

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;     
    
    const validName = /^[a-zA-ZÀ-ÿ'.\- ]{2,50}$/;


const [namee , setNamee] = useState<string>("");
const [emaile , setEmaile] = useState<string>("");
const [city , setCity] = useState<string>("");
const [message , setMessage] = useState<string>("");




    const SendContactMessage = () => {
        fetch("https://sendmail-api-docs.vercel.app/api/send", {
            method: "POST",
            body: JSON.stringify({
                to: "ahmedessaam124@gmail.com",
                subject: `New Message from Prtofleo`,
                message: `<p>User Name : ${namee}</p>
                          <p> User Email : ${emaile}</p>
                          <p>User From : ${city}</p>
                          <p>The Message : ${message}</p>
                          <h3></h3>`,
            }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };


const sendMessage = () => {
if (namee.match(validName) && emaile.match(validEmail)) {
console.log("Ok")
SendContactMessage();
setNamee(""); 
setCity("");
setMessage("");
setEmaile("");
}else if (!namee.match(validName) && emaile.match(validEmail)) {
    setErrname(true);

}else if (namee.match(validName) && !emaile.match(validEmail)) {
    setErremail(true);

}else {
    setErrboth(true);
}

}

const resetMessage = () => {
    setNamee(""); 
    setCity("");
    setMessage("");
setEmaile("");
}

const NotAlertName = () => {
setErrname(false);
}
const NotAlertEmail = () => {
    setErremail(false);
}
const NotAlertBoth = () => {
    setErrboth(false);
}




    return (
        <>



{errname ? (
    <div className={style.nameOverAlert}>
    <div className={style.nameCardAlert}>
        <div className={style.closediv}><FontAwesomeIcon onClick={NotAlertName} icon={faXmark} /></div>
        <div className={style.nameBodyOfAlert}>
            <h3>Enter Correct Name</h3>
        </div>
        <div className={style.nameBtnAlert}>
            <button onClick={NotAlertName}>Cancel</button>
        </div>
    </div>
</div>
) : (
null
)}


{erremail ? (
    <div className={style.emailOverAlert}>
    <div className={style.emailCardAlert}>
        <div className={style.closediv}><FontAwesomeIcon onClick={NotAlertEmail} icon={faXmark} /></div>
        <div className={style.emailBodyOfAlert}>
        <h3>Enter Correct Email</h3>
        </div>
        <div className={style.emailBtnAlert}>
            <button onClick={NotAlertEmail}>Cancel</button>
        </div>
    </div>
</div>
) : (
 null   
)}




{errboth ? (
    <div className={style.bothOverAlert}>
    <div className={style.bothCardAlert}>
        <div className={style.closediv}><FontAwesomeIcon onClick={NotAlertBoth} icon={faXmark} /></div>
        <div className={style.bothBodyOfAlert}>
        <h3>Email or Name is not Correct</h3>
        </div>
        <div className={style.bothBtnAlert}>
            <button onClick={NotAlertBoth}>Cancel</button>
        </div>
    </div>
</div>
) : (
 null   
)}



<section className={style.bageContact}>
    <h1>Contact With Me</h1>

<div className={style.continueContct}>

<div className={style.nameFraction}>
    <input type="text" name="name" value={namee} onChange={(e) => setNamee(e.target.value)} placeholder="Your Name" required/>
</div>

<div className={style.emailFraction}>
    <input type="email" name="email" value={emaile} onChange={(e) => setEmaile(e.target.value)} placeholder="Email" required/>
</div>

<div className={style.cityFraction}>
<select id="country" name="city" title="Select your country" value={city} onChange={(e) => setCity(e.target.value)} >
    <option value="" disabled selected >Country</option>
    <option value="Afghanistan">Afghanistan</option>
    <option value="Albania">Albania</option>
    <option value="Algeria">Algeria</option>
    <option value="Andorra">Andorra</option>
    <option value="Angola">Angola</option>
    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
    <option value="Argentina">Argentina</option>
    <option value="Armenia">Armenia</option>
    <option value="Australia">Australia</option>
    <option value="Austria">Austria</option>
    <option value="Azerbaijan">Azerbaijan</option>
    <option value="Bahamas">Bahamas</option>
    <option value="Bahrain">Bahrain</option>
    <option value="Bangladesh">Bangladesh</option>
    <option value="Barbados">Barbados</option>
    <option value="Belarus">Belarus</option>
    <option value="Belgium">Belgium</option>
    <option value="Belize">Belize</option>
    <option value="Benin">Benin</option>
    <option value="Bhutan">Bhutan</option>
    <option value="Bolivia">Bolivia</option>
    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
    <option value="Botswana">Botswana</option>
    <option value="Brazil">Brazil</option>
    <option value="Brunei">Brunei</option>
    <option value="Bulgaria">Bulgaria</option>
    <option value="Burkina Faso">Burkina Faso</option>
    <option value="Burundi">Burundi</option>
    <option value="Cabo Verde">Cabo Verde</option>
    <option value="Cambodia">Cambodia</option>
    <option value="Cameroon">Cameroon</option>
    <option value="Canada">Canada</option>
    <option value="Central African Republic">Central African Republic</option>
    <option value="Chad">Chad</option>
    <option value="Chile">Chile</option>
    <option value="China">China</option>
    <option value="Colombia">Colombia</option>
    <option value="Comoros">Comoros</option>
    <option value="Congo (Congo-Brazzaville)">Congo (Congo-Brazzaville)</option>
    <option value="Costa Rica">Costa Rica</option>
    <option value="Croatia">Croatia</option>
    <option value="Cuba">Cuba</option>
    <option value="Cyprus">Cyprus</option>
    <option value="Czechia (Czech Republic)">Czechia (Czech Republic)</option>
    <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
    <option value="Denmark">Denmark</option>
    <option value="Djibouti">Djibouti</option>
    <option value="Dominica">Dominica</option>
    <option value="Dominican Republic">Dominican Republic</option>
    <option value="Ecuador">Ecuador</option>
    <option value="Egypt">Egypt</option>
    <option value="El Salvador">El Salvador</option>
    <option value="Equatorial Guinea">Equatorial Guinea</option>
    <option value="Eritrea">Eritrea</option>
    <option value="Estonia">Estonia</option>
    <option value="Eswatini (fmr. 'Swaziland')">Eswatini (fmr. 'Swaziland')</option>
    <option value="Ethiopia">Ethiopia</option>
    <option value="Fiji">Fiji</option>
    <option value="Finland">Finland</option>
    <option value="France">France</option>
    <option value="Gabon">Gabon</option>
    <option value="Gambia">Gambia</option>
    <option value="Georgia">Georgia</option>
    <option value="Germany">Germany</option>
    <option value="Ghana">Ghana</option>
    <option value="Greece">Greece</option>
    <option value="Grenada">Grenada</option>
    <option value="Guatemala">Guatemala</option>
    <option value="Guinea">Guinea</option>
    <option value="Guinea-Bissau">Guinea-Bissau</option>
    <option value="Guyana">Guyana</option>
    <option value="Haiti">Haiti</option>
    <option value="Holy See">Holy See</option>
    <option value="Honduras">Honduras</option>
    <option value="Hungary">Hungary</option>
    <option value="Iceland">Iceland</option>
    <option value="India">India</option>
    <option value="Indonesia">Indonesia</option>
    <option value="Iran">Iran</option>
    <option value="Iraq">Iraq</option>
    <option value="Ireland">Ireland</option>
    <option value="Israel">Israel</option>
    <option value="Italy">Italy</option>
    <option value="Jamaica">Jamaica</option>
    <option value="Japan">Japan</option>
    <option value="Jordan">Jordan</option>
    <option value="Kazakhstan">Kazakhstan</option>
    <option value="Kenya">Kenya</option>
    <option value="Kiribati">Kiribati</option>
    <option value="Kuwait">Kuwait</option>
    <option value="Kyrgyzstan">Kyrgyzstan</option>
    <option value="Laos">Laos</option>
    <option value="Latvia">Latvia</option>
    <option value="Lebanon">Lebanon</option>
    <option value="Lesotho">Lesotho</option>
    <option value="Liberia">Liberia</option>
    <option value="Libya">Libya</option>
    <option value="Liechtenstein">Liechtenstein</option>
    <option value="Lithuania">Lithuania</option>
    <option value="Luxembourg">Luxembourg</option>
    <option value="Madagascar">Madagascar</option>
    <option value="Malawi">Malawi</option>
    <option value="Malaysia">Malaysia</option>
    <option value="Maldives">Maldives</option>
    <option value="Mali">Mali</option>
    <option value="Malta">Malta</option>
    <option value="Marshall Islands">Marshall Islands</option>
    <option value="Mauritania">Mauritania</option>
    <option value="Mauritius">Mauritius</option>
    <option value="Mexico">Mexico</option>
    <option value="Micronesia">Micronesia</option>
    <option value="Moldova">Moldova</option>
    <option value="Monaco">Monaco</option>
    <option value="Mongolia">Mongolia</option>
    <option value="Montenegro">Montenegro</option>
    <option value="Morocco">Morocco</option>
    <option value="Mozambique">Mozambique</option>
    <option value="Myanmar (formerly Burma)">Myanmar (formerly Burma)</option>
    <option value="Namibia">Namibia</option>
    <option value="Nauru">Nauru</option>
    <option value="Nepal">Nepal</option>
    <option value="Netherlands">Netherlands</option>
    <option value="New Zealand">New Zealand</option>
    <option value="Nicaragua">Nicaragua</option>
    <option value="Niger">Niger</option>
    <option value="Nigeria">Nigeria</option>
    <option value="North Korea">North Korea</option>
    <option value="North Macedonia">North Macedonia</option>
    <option value="Norway">Norway</option>
    <option value="Oman">Oman</option>
    <option value="Pakistan">Pakistan</option>
    <option value="Palau">Palau</option>
    <option value="Palestine State">Palestine State</option>
    <option value="Panama">Panama</option>
    <option value="Papua New Guinea">Papua New Guinea</option>
    <option value="Paraguay">Paraguay</option>
    <option value="Peru">Peru</option>
    <option value="Philippines">Philippines</option>
    <option value="Poland">Poland</option>
    <option value="Portugal">Portugal</option>
    <option value="Qatar">Qatar</option>
    <option value="Romania">Romania</option>
    <option value="Russia">Russia</option>
    <option value="Rwanda">Rwanda</option>
    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
    <option value="Saint Lucia">Saint Lucia</option>
    <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
    <option value="Samoa">Samoa</option>
    <option value="San Marino">San Marino</option>
    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
    <option value="Saudi Arabia">Saudi Arabia</option>
    <option value="Senegal">Senegal</option>
    <option value="Serbia">Serbia</option>
    <option value="Seychelles">Seychelles</option>
    <option value="Sierra Leone">Sierra Leone</option>
    <option value="Singapore">Singapore</option>
    <option value="Slovakia">Slovakia</option>
    <option value="Slovenia">Slovenia</option>
    <option value="Solomon Islands">Solomon Islands</option>
    <option value="Somalia">Somalia</option>
    <option value="South Africa">South Africa</option>
    <option value="South Korea">South Korea</option>
    <option value="South Sudan">South Sudan</option>
    <option value="Spain">Spain</option>
    <option value="Sri Lanka">Sri Lanka</option>
    <option value="Sudan">Sudan</option>
    <option value="Suriname">Suriname</option>
    <option value="Sweden">Sweden</option>
    <option value="Switzerland">Switzerland</option>
    <option value="Syria">Syria</option>
    <option value="Tajikistan">Tajikistan</option>
    <option value="Tanzania">Tanzania</option>
    <option value="Thailand">Thailand</option>
    <option value="Timor-Leste">Timor-Leste</option>
    <option value="Togo">Togo</option>
    <option value="Tonga">Tonga</option>
    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
    <option value="Tunisia">Tunisia</option>
    <option value="Turkey">Turkey</option>
    <option value="Turkmenistan">Turkmenistan</option>
    <option value="Tuvalu">Tuvalu</option>
    <option value="Uganda">Uganda</option>
    <option value="Ukraine">Ukraine</option>
    <option value="United Arab Emirates">United Arab Emirates</option>
    <option value="United Kingdom">United Kingdom</option>
    <option value="United States">United States</option>
    <option value="Uruguay">Uruguay</option>
    <option value="Uzbekistan">Uzbekistan</option>
    <option value="Vanuatu">Vanuatu</option>
    <option value="Venezuela">Venezuela</option>
    <option value="Vietnam">Vietnam</option>
    <option value="Yemen">Yemen</option>
    <option value="Zambia">Zambia</option>
    <option value="Zimbabwe">Zimbabwe</option>
  </select>
</div>

<div className={style.messageFraction}>
    <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" required />
</div>

<div className={style.sendingButton}>
    <button onClick={resetMessage} className={style.deleteBtn}>Delete</button>
    <button onClick={sendMessage} className={style.sendBtn}>Send</button>
</div>


<div className={style.anotherWay}>
<a href="mailto:your-ahmedessaam124@gmail.com?subject=Hello&body=I%20want%20to%20reach%20out" target="_blank" className={style.googleAc}>Contact by
Google 
  Account
  <span><FontAwesomeIcon className={style.arroIcon} icon={faArrowRight} /></span>
  </a>
<a href="https://api.whatsapp.com/send?phone=+201094461846&text=Hi" target="_blank" rel="noopener noreferrer" className={style.whatsAcc}>WhatsApp</a>
</div>
</div>


</section>








        </>
    );
};
export default Contact ;
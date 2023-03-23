import React, { useState } from "react";
import "./index.css";
import {
  symbols,
  numbers,
  lowerCaseCharact,
  upperCaseCharact,
} from "./characters";

const Generator = () => {
  const [passwordLength, SetPasswordLength] = useState(20);
  const [password, setPassword] = useState("");
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeDigitNumber, setIncludeDigitNumber] = useState(false);
  const [includeDigitSymbols, setIncludeDigitSymbols] = useState(false);
  const [Copy, setCopy] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(
    "Please, generate a password"
  );

  const handleGeneratePassword = (e) => {
    let characters = "";

    if (includeDigitNumber) {
      characters = characters + numbers;
    }
    if (includeUpperCase) {
      characters = characters + upperCaseCharact;
    }
    if (includeLowerCase) {
      characters = characters + lowerCaseCharact;
    }
    if (includeDigitSymbols) {
      characters = characters + symbols;
    }

    setPassword(creatPassword(characters));
    setCopy(false)
  };

  const creatPassword = (characters) => {
    let password = "";
    const characterLength = characters.length;

    const passwordAvailableCheck = () => {
      if (
        !includeLowerCase &&
        !includeUpperCase &&
        !includeDigitNumber &&
        !includeDigitSymbols
      ) {
        setDisplayMessage("You have not checked any option ");
      } else {
        setDisplayMessage("Password Generated!");
      }
    };

    passwordAvailableCheck();

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterLength);
      password += characters.charAt(characterIndex);
    }
    return password;
  };

  const handleCopyPassword = () => {
    if (password.length > 0) {
      navigator.clipboard.writeText(password);
      setCopy(true);
      ;
      setInterval(() => {
        setCopy(false);
      }, 2000);
    } else {
      setDisplayMessage("Nothing to copy");
    }
  };

  //  const myDisplay = setTimeout(() => { setDisplayCopy("Copied"), 1000 })

  return (
    <div className="passwordGenerator">
      <div className="titleAndMessage">
        <h2>Password Generator</h2>

        <p>{displayMessage}</p>
      </div>

      <div className="password generalStyle">
        <h3>{password}</h3>
        <button className="passwordCopy" onClick={handleCopyPassword}>
          {Copy ? "Copied!" : "Copy"}
        </button>
      </div>

      <div className="passwordLenght generalStyle">
        <label>Password Length</label>
        <input
          defaultValue={passwordLength}
          type={"number"}
          name={"passwordLenght"}
          id={"passwordLenght"}
          max={20}
          min={1}
          onChange={(e) => SetPasswordLength(e.target.value)}
        />
      </div>

      <div className="upperCase generalStyle">
        <label>Include UpperCase Letters</label>
        <input
          type="checkbox"
          className="upperCaseInput"
          name={"UpperCase"}
          id={"UpperCase"}
          checked={includeUpperCase}
          onChange={(e) => setIncludeUpperCase(!includeUpperCase)}
        />
      </div>

      <div className="lowerCase generalStyle">
        <label>Include LowerCase Letters</label>
        <input
          type="checkbox"
          name={"lowerCase"}
          id={"lowerCase"}
          checked={includeLowerCase}
          onChange={(e) => setIncludeLowerCase(e.target.checked)}
        />
      </div>

      <div className="Numbers generalStyle">
        <label>Include Numbers</label>
        <input
          type="checkbox"
          name={"Numbers"}
          id={"Numbers"}
          checked={includeDigitNumber}
          onChange={(e) => setIncludeDigitNumber(e.target.checked)}
        />
      </div>

      <div className="Numbers generalStyle">
        <label>Include Symbols</label>
        <input
          type="checkbox"
          name={"Symbols"}
          id={"Symbols"}
          checked={includeDigitSymbols}
          onChange={(e) => setIncludeDigitSymbols(e.target.checked)}
        />
      </div>

      <div className="generate">
        <button className="genaratebutton" onClick={handleGeneratePassword}>
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default Generator;

import "./form.css";
import { useState } from "react";
const Form = () => {
  
  const upper = "ABCDEFGFIJKLMNOPQRSTUVWXYZ";
  const lower = upper.toLowerCase();
  const symbol = "!@#$%^&*~<>/?";
  const num = "123456789";
  //different usestate to for checkbox-----------------
  const [upperCheck, setupperCheck] = useState(true);
  const [lowerCheck, setlowerCheck] = useState(true);
  const [numCheck, setnumCheck] = useState(true);
  const [symbolCheck, setsymbolCheck] = useState(true);

  
  function generate_string() {
    if (
      upperCheck === false &&
      lowerCheck === false &&
      numCheck === false &&
      symbolCheck === false
    ) {
      alert("--All checks are empty--");
    } else {
      var res = "";
      if (upperCheck) {
        res += upper;
      }
      if (lowerCheck) {
        res += lower;
      }
      if (numCheck) {
        res += num;
      }
      if (symbolCheck) {
        res += symbol;
      }
      generate_password(res);
    }
  }

  
  function generate_password(str) {
    const inputLength = document.getElementById("input_length").value;
    if (inputLength < 8 || inputLength > 50) {
      alert("Length out of mentioned range");
    } else {
      var final_password = "";
      for (let index = 0; index < inputLength; index++) {
        let char_index = Math.floor(Math.random() * str.length);
        final_password += str.charAt(char_index);
      }
      setPassword(final_password);
    }
  }

  
  function setPassword(generated_password) {
    document.getElementById("password-field").value = generated_password;
  }

  function copyToClipboard() {
    const mypassword = document.getElementById("password-field").value;
    if (mypassword === "") {
      alert("Please generate a new password then try again");
    } else {
      navigator.clipboard.writeText(mypassword);
      alert("copied");
    }
  }

  return (
    <>
      <div className="form_div div1">
        <input type="text" disabled value="" id="password-field" />
        <button onClick={copyToClipboard}>
          <img
            src="https://www.freeiconspng.com/thumbs/copy-icon/copy-icon-25.png"
            alt="copy_im.png"
          />
        </button>
      </div>
      <div className="form_div div2">
        <label>
          Select Password length<strong>(**8-50 characters**)</strong>
        </label>
        <input type="number" defaultValue="8" id="input_length" />
      </div>
      <div className="form_div div3">
        <input
          type="checkbox"
          checked={upperCheck}
          onChange={(e) => setupperCheck(e.target.checked)}
        />
        <label>Include upper case</label>
        <br />
        <input
          type="checkbox"
          checked={lowerCheck}
          onChange={(e) => setlowerCheck(e.target.checked)}
        />
        <label>Include lower case</label>
        <br />
        <input
          type="checkbox"
          checked={numCheck}
          onChange={(e) => setnumCheck(e.target.checked)}
        />
        <label>Include numbers</label>
        <br />
        <input
          type="checkbox"
          checked={symbolCheck}
          onChange={(e) => setsymbolCheck(e.target.checked)}
        />
        <label>Include symbols</label>
        <br />
        <button onClick={generate_string}>Generate Password</button>
      </div>
    </>
  );
};
export default Form;

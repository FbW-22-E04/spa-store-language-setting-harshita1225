import React, { useContext } from "react";
import { Context } from "./Context";

const Header = () => {
  const [language, setLanguage] = useContext(Context);
  return (
    <div className="header">
      <h5>Please choose your language</h5>
      <select name={language} onChange={(e) => setLanguage(e.target.value)}>
        Please choose your language
        <option value="DE"> German</option>
        <option value="US">English</option>
        <option value="TR">Turkish</option>
        <option value="IR">Persian</option>
        <option value="FR">French</option>
        <option value="SP">Spanish</option>
        <option value="DU">Dutch</option>
      </select>
    </div>
  );
};

export default Header;

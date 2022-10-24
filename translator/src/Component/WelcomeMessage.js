import { data } from "../data";
import { Context } from "./Context";
import { useContext } from "react";

const WelcomeMessage = () => {
  const [language] = useContext(Context);
  return (
    <div className="msg">
      <h3>{data[language]}</h3>
    </div>
  );
};

export default WelcomeMessage;

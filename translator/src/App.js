import "./App.css";
import { useState } from "react";
import Header from "./Component/Header";
import Content from "./Component/Content";
import { Context } from "./Component/Context";

function App() {
  const [language, setLanguage] = useState("DE");

  return (
    <Context.Provider value={[language, setLanguage]}>
      <div className="App">
        <Header />
        <Content />
      </div>
    </Context.Provider>
  );
}

export default App;

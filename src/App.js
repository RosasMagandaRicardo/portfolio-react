import React from "react";
import Navbar from "./components/Navbar";
import TextWithImage from "./components/TextWithImage";
import CenteredText from "./components/CenteredText";
import "./styles/index.css";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <CenteredText />
      <TextWithImage textToTheRight={false}/>
      <TextWithImage textToTheRight={true}/>
    </div>
  );
};

/*textToTheRight={false}*/

export default App;

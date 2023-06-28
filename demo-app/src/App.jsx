import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [className, setClassName] = useState(true);

  const handleClick = () => {
    setClassName(!className);
  };
  return (
    <>
      <div>
        <div class="rectangle" onClick={handleClick}>
          <div class={className === true ? "circle" : "circle tRight"}></div>
        </div>
      </div>
    </>
  );
}

export default App;

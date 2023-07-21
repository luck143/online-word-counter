import TextForm1 from "./components/TextForm1";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/About";

export default function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    //console.log("Reached toggleMode");
    //console.log(mode);
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#042743";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("dark mode disabled", "warning");
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      {
        <NavBar
          mode={mode}
          heading="MySite"
          about="About"
          toggleMode={toggleMode}
        />
      }
      <Alert alert={alert} />
      {<TextForm1 showAlert={showAlert} heading="Enter Text" />}
      {/* <About /> */}
    </>
  );
}

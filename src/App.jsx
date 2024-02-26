import { useState } from "react";
import "./App.css";
import SignatureCanvas from "react-signature-canvas";
import DownloadImage from "./components/DownloadImage";
function App() {
  const [sign, setSign] = useState();
  const [url, setUrl] = useState();

  const handleClick = () => {
    sign.clear();
  };

  const handleGenerate = () => {
    setUrl(sign.getTrimmedCanvas().toDataURL("image/png"));
  };

  console.log(sign);
  return (
    <>
      <div>
        <h1>Signature</h1>
        <div style={{ border: "2px solid black", width: 500, height: 200 }}>
          <SignatureCanvas
            canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
            ref={(data) => setSign(data)}
          />
        </div>
        <button onClick={handleClick}>Clear</button>
        <button onClick={handleGenerate}>Save</button>

        <br />
        <br />
        <img src={url} alt="" />
        <DownloadImage url={url} />
      </div>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Res from "./Res.tsx";
import Portfolio from "./Portfolio";
import Seller from "./Seller";
import Scroll from "./Scroll";
import Pro from "./Pro";

function App() {
  return(
    <>
    <Scroll/>
    <Routes>
      <Route path="/" element={<Portfolio/>} />
      <Route path="/res" element={<Res/>} />
      <Route path="/pro" element={<Pro/>} />
      <Route path="/sel" element={<Seller/>} />
    </Routes>
    </>
  );
}

export default App;

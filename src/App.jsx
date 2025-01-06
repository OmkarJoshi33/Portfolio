import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/PortFolio/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

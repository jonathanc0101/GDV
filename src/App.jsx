import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import WhoAreWeScreen from "./screens/WhoAreWeScreen";


import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/MyNavBar";
import Projects from "./components/Projects";

function App() {
  return (
    <BrowserRouter>
      <MyNavBar />
      <Routes>
        <Route path="/gdv" element={<HomeScreen />}></Route>
        <Route path="/who-are-we" element={<WhoAreWeScreen />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        {/* <Route path="/eventos" element={<Events />}></Route> */}
        <Route path="/contact-section" element={<ContactScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

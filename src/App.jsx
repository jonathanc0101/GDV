import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import WhoAmIScreen from "./screens/WhoAmIScreen";


import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/MyNavBar";
import Projects from "./components/Projects";

function App() {
  return (
    <BrowserRouter>
      <MyNavBar />
      <Routes>
        <Route path="/welcome-section" element={<HomeScreen />}></Route>
        <Route path="/gdv" element={<HomeScreen />}></Route>
        <Route path="/who-am-i" element={<WhoAmIScreen />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        {/* <Route path="/eventos" element={<Events />}></Route> */}
        <Route path="/contact-section" element={<ContactScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

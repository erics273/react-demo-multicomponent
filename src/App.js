//import the components and libraries we want to use
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import Welcome from "./components/welcome/Welcome";

import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Welcome name="eric" />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

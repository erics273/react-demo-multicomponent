//import the components and libraries we want to use
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Jeopardy from "./components/jeopardy/Jeopardy";
import Navigation from "./components/navigation/Navigation";
import NoMatch from "./components/noMatch/NoMatch";
import Welcome from "./components/welcome/Welcome";

import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Welcome name="eric" />} />
        <Route path="/welcome/:name" element={<Welcome />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jeopardy" element={<Jeopardy />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Song from "./pages/sliceExample/Song";
import UiElements from "./pages/UiElements";
import AccordonsPage from "./pages/uiElements/AccordonsPage";
import DropdownPage from "./pages/uiElements/DropdownPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/ui-elements' element={<UiElements />} />
        <Route path='/slice-example' element={<Song />} />
      </Routes>
    </Router>
  );
};

export default App;

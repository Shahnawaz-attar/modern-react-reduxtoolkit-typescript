import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ReduxForm from "./pages/reduxForm/ReduxForm";
import ReduxQuery from "./pages/reduxQuery/ReduxQuery";
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
        <Route path='/redux-form-example' element={<ReduxForm />} />
        <Route path='/redux-query-example' element={<ReduxQuery />} />
      </Routes>
    </Router>
  );
};

export default App;

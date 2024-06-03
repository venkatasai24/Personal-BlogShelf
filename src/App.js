import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import Bookshelf from "./components/Bookshelf";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/bookshelf" element={<Bookshelf />} />
      </Routes>
    </Router>
  );
};

export default App;

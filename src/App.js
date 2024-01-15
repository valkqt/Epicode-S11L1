import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNav from "./components/CustomNav";
import { Container } from "react-bootstrap";
import Favourites from "./components/Favourites";

function App() {
  return (
    <BrowserRouter>
      <CustomNav />
      <Container>
        <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/:companyName" element={<CompanySearchResults />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

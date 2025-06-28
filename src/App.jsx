import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./context/MovieContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <MovieProvider>
      <NavBar></NavBar>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;

import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleDrink from "./pages/SingleDrink";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/home/cocktail/:id" element={<SingleDrink />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;

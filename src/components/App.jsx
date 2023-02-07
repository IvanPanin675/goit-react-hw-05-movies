import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Movies } from "pages/Movies";
import { Container, Header, Logo, Link } from "./App.styled";


export const App = () => {
  return (
    <div>
      <nav><Link to="/movies">Movies</Link></nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};

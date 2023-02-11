import { Routes, Route} from 'react-router-dom';
import Navbar from 'modules/Navbar/Navbar';
import { Home } from '../pages/Home';
import { Movies } from 'pages/Movies';
import { NotFound } from 'pages/NotFound';

export const App = () => {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

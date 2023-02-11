import { Routes, Route } from 'react-router-dom';

import Navbar from 'modules/Navbar/Navbar';
import { Home } from '../pages/Home';
import { Movies } from 'pages/Movies';
import { NotFound } from 'pages/NotFound';
import { SinglMovie } from 'pages/SinglMovie';

export const App = () => {



  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<SinglMovie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

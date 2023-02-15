import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from 'modules/Navbar/Navbar';
import Loader from 'modules/Loader/Loader';
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const NotFound = lazy(() => import('../pages/NotFound'));
const SinglMovie = lazy(() => import('../pages/SinglMovie'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));

export const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={Loader}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<SinglMovie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

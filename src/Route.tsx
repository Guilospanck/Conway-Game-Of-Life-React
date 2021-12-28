import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Game } from './pages/Game';

export const AppRoute = () => {

  const BASENAME = process.env.NODE_ENV === 'development' ? '/' : '/Conway-Game-Of-Life-React'; // because of github pages

  return (
    <BrowserRouter basename={BASENAME}>
      <Routes>
        <Route path="/" element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}
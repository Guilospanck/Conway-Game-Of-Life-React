import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Game } from './pages/Game'

export const AppRoute = () =>
  <BrowserRouter basename={process.env.BASENAME}>
    <Routes>
      <Route path="/" element={<Game />} />
    </Routes>
  </BrowserRouter>

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route  } from "react-router";
import './index.css'
import App from './App.tsx'
import { Tape } from './pages/tape.tsx';
import { Fiber } from './pages/fiber.tsx';
import { OT } from './pages/ot.tsx';
import { Poly } from './pages/poly.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="post/project_tape" element={<Tape/>}></Route>
        <Route path='post/steam_fiber' element={<Fiber/>}></Route>
        <Route path='post/ot' element={<OT/>}></Route>
        <Route path='post/poly_gen' element={<Poly/>}></Route>
      </Routes> 
    </BrowserRouter>
  </StrictMode>,
)

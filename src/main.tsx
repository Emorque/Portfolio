import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route  } from "react-router";
import './index.css'
import App from './App.tsx'
import { Blog } from './pages/blog.tsx';
import { Tape } from './pages/tape.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="post/project_tape" element={<Tape/>}>
          {/* <Route path='project_tape' element={<Tape/>}/> */}
        </Route>
      </Routes> 
    </BrowserRouter>
  </StrictMode>,
)

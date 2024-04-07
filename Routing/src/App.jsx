import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

// Lazy loading components
const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/Landing'));

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavigationButtons />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

function NavigationButtons() {
  const navigate = useNavigate();

  return (
    <div className="navigation-buttons">
      <button onClick={() => navigate('/')}>Landing Page</button>
      <button onClick={() => navigate('/Dashboard')}>Dashboard Page</button>
    </div>
  );
}

export default App;

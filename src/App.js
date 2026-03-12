import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css'
import Navbar from './components/Navbar'
import Bot from './components/Bot';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Hireme from './components/Hireme';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Projects from './components/Projects';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }
  
  return isAuthenticated ? children : <Navigate to="/admin/login" />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="">
          <Navbar />
          <Bot />
          <Hero/>
          <About/>
          <Skills/>
          <Projects/>
          <Hireme/>
          <Testimonials/>
          <Contact/>
          <Footer/>
        </div>
      } />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;

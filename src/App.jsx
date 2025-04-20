import { useEffect, useState } from 'react';
import { apiService } from './services/api';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Layout from './components/Layout';
import Footer from './components/Footer';
import Skills from './pages/Skills';
import Contacts from './components/ContactInfo';
import './App.css'; // Import your CSS file here

export default function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Test API connection on app load
    const testConnection = async () => {
      try {
        await apiService.getMyInfo();
      } catch (err) {
        setError('Failed to connect to API server');
        console.error('API connection error:', err);
      } finally {
        setLoading(false);
      }
    };
    testConnection();
  }, []);

  if (loading) return <div className="loading">Connecting to server...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
          <Route path="contact" element={<Contacts />} />
        </Route>
      </Routes>
              <Footer />

    </BrowserRouter>
  );
}
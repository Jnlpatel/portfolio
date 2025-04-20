import { useEffect, useState } from 'react';
import { apiService } from '../services/api';
import './Home.css';
import defaultProfile from '../assets/me.jpeg';

export default function Home() {
  const [myInfo, setMyInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const info = await apiService.getMyInfo();
        setMyInfo(info);
      } catch (err) {
        console.error('Failed to load data:', err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <p>Loading portfolio...</p>
    </div>
  );

  if (!myInfo) return (
    <div className="error-message">
      <h2>Oops!</h2>
      <p>Couldn't load portfolio data. Please try again later.</p>
    </div>
  );

  return (
    <div className="portfolio-home">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">{myInfo.name}</span>
          </h1>
          
          <h2 className="hero-subtitle">{myInfo.role}</h2>
          <h3 className="hero-tagline">
            {myInfo.tagline || "Crafting beautiful and functional web applications."} 
          </h3>
         
          <div className="hero-actions">
            <a href="/skills" className="cta-button">
              <i className="fas fa-code"></i> View Skills
            </a>
            <a href="/projects" className="cta-button secondary">
              <i className="fas fa-project-diagram"></i> View Projects
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-frame">
            <img 
              src={myInfo.image || defaultProfile} 
              alt={myInfo.name}
              className="profile-photo" 
            />
            <div className="image-overlay"></div>
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section className="about-section" id="about">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="intro-text">{myInfo.bio || "I'm passionate about creating beautiful, functional web applications that solve real problems."}</p>
          </div>
          
          <div className="about-highlights">
            <div className="highlight-card">
              <i className="fas fa-medal"></i>
              <h3>Experience</h3>
              <p>{myInfo.experienceYears || '2+'} years in web development</p>
            </div>
            
            
          </div>
        </div>
      </section>
    </div>
  );
}
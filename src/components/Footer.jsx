import { useEffect, useState } from 'react';
import { apiService } from '../services/api';
import './Footer.css'; // Assuming you have a CSS file for styling

export default function Footer() {
  const [myInfo, setMyInfo] = useState(null);

  useEffect(() => {
    apiService.getMyInfo().then(setMyInfo);
  }, []);

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-about">
          <h3>{myInfo?.name || 'My Portfolio'}</h3>
          <p>{myInfo?.role || 'Web Developer'}</p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/experience">Experience</a></li>
          </ul>
        </div>
        
        <div className="footer-social">
          <h4>Contact Me</h4>
          <div className="social-icons">
            {myInfo?.github && (
              <a href={myInfo.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            )}
            {myInfo?.linkedin && (
              <a href={myInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            )}
            {myInfo?.email && (
              <a href={`mailto:${myInfo.email}`}>
                <i className="fas fa-envelope"></i>
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {myInfo?.name || 'My Portfolio'}. All rights reserved.</p>
      </div>
    </footer>
  );
}
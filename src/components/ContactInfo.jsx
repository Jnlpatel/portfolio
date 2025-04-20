import { useEffect, useState } from 'react';
import { apiService } from '../services/api';
import './ContactInfo.css';

export default function ContactInfo() {
  const [myInfo, setMyInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const info = await apiService.getMyInfo();
        setMyInfo(info);
      } catch (err) {
        console.error('Failed to load contact info:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchContactInfo();
  }, []);

  if (isLoading) return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading contact information...</p>
    </div>
  );

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">Feel free to reach out through any of these channels</p>
        <div className="divider"></div>
      </div>

      <div className="contact-grid">
        {/* Email Card */}
        {myInfo?.email && (
          <div className="contact-card email-card">
            <div className="card-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email Me</h3>
            <a href={`mailto:${myInfo.email}`} className="contact-link">
              {myInfo.email}
            </a>
          </div>
        )}

        {/* Phone Card */}
        {myInfo?.phone && (
          <div className="contact-card phone-card">
            <div className="card-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3>Call Me</h3>
            <a href={`tel:${myInfo.phone}`} className="contact-link">
              {myInfo.phone}
            </a>
          </div>
        )}

        {/* Location Card */}
        {myInfo?.location && (
          <div className="contact-card location-card">
            <div className="card-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>My Location</h3>
            <p>{myInfo.location}</p>
          </div>
        )}

        {/* Social Media Section */}
        <div className="social-section">
          <h3 className="social-title">Follow Me</h3>
          <div className="social-icons">
            {myInfo?.github && (
              <a href={myInfo.github} target="_blank" rel="noopener noreferrer" className="social-icon github">
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>
            )}
            {myInfo?.linkedin && (
              <a href={myInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                <i className="fab fa-linkedin-in"></i>
                <span>LinkedIn</span>
              </a>
            )}
           
          </div>
        </div>
      </div>
    </section>
  );
}
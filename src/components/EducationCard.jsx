import { format } from 'date-fns';
import './EducationCard.css';

export default function EducationCard({ degree, institution, location, startDate, endDate, description }) {
  const formatDate = (date) => {
    return date ? format(new Date(date), 'MMM yyyy') : 'Present';
  };

  return (
    <div className="education-card">
      <div className="academic-ribbon"></div>
      
      <div className="card-content">
        <div className="degree-icon">
          <i className="fas fa-graduation-cap"></i>
        </div>
        
        <h3 className="degree-title">{degree}</h3>
        
        <div className="education-meta">
          <span className="institution">
            <i className="fas fa-university"></i> {institution}
          </span>
          {location && (
            <span className="location">
              <i className="fas fa-map-marker-alt"></i> {location}
            </span>
          )}
        </div>
        
        <div className="education-dates">
          <span className="date-badge">
            <i className="far fa-calendar"></i> {formatDate(startDate)} - {endDate ? formatDate(endDate) : 'Present'}
          </span>
        </div>
        
        {description && (
          <div className="education-description">
            <div className="description-icon">
              <i className="fas fa-quote-left"></i>
            </div>
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
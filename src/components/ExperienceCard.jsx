import { format } from 'date-fns';
import './ExperienceCard.css';

export default function ExperienceCard({ title, company, location, startDate, endDate, description, isCurrent }) {
  const formatDate = (date) => {
    return date ? format(new Date(date), 'MMM yyyy') : 'Present';
  };

  return (
    <div className="experience-card">
      {/* Timeline element */}
      <div className="timeline">
        <div className="timeline-dot"></div>
        {!isCurrent && <div className="timeline-line"></div>}
      </div>
      
      <div className="card-content">
        <div className="experience-header">
          <h3 className="job-title">{title}</h3>
          <div className="experience-meta">
            <span className="company">
              <i className="fas fa-building"></i> {company}
            </span>
            {location && (
              <span className="location">
                <i className="fas fa-map-marker-alt"></i> {location}
              </span>
            )}
          </div>
        </div>
        
        <div className="experience-dates">
          <span className="date-badge">
            <i className="far fa-calendar-alt"></i> {formatDate(startDate)} - {isCurrent ? 'Present' : formatDate(endDate)}
          </span>
          {isCurrent && (
            <span className="current-badge">
              <i className="fas fa-circle"></i> Current
            </span>
          )}
        </div>
        
        {description && (
          <div className="experience-description">
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
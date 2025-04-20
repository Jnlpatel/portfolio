import { useEffect, useState } from 'react';
import { apiService } from '../services/api';
import ExperienceCard from '../components/ExperienceCard';
// import './Experience.css';

export default function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadExperiences = async () => {
      try {
        const data = await apiService.getExperiences();
        setExperiences(data);
      } catch (err) {
        console.error('Failed to load experiences:', err);
      } finally {
        setLoading(false);
      }
    };
    loadExperiences();
  }, []);

  if (loading) return <div>Loading experiences...</div>;

  return (
    <div className="experience-page">
      <h1>Work Experience</h1>
      <div className="experience-list">
        {experiences.filter(exp => exp.type === 'work').map(experience => (
          <ExperienceCard 
            key={experience._id}
            title={experience.title}
            company={experience.company}
            location={experience.location}
            startDate={experience.startDate}
            endDate={experience.endDate}
            description={experience.description}
            isCurrent={experience.isCurrent}
          />
        ))}
      </div>
    </div>
  );
}
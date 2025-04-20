import { useEffect, useState } from 'react';
import { apiService } from '../services/api';
import EducationCard from '../components/EducationCard';
// import './Education.css';

export default function Education() {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEducation = async () => {
      try {
        const data = await apiService.getEducation();
        setEducation(data);
      } catch (err) {
        console.error('Failed to load education:', err);
      } finally {
        setLoading(false);
      }
    };
    loadEducation();
  }, []);

  if (loading) return <div>Loading education...</div>;

  return (
    <div className="education-page">
      <h1>Education</h1>
      <div className="education-list">
        {education.map((edu, index) => (
          <EducationCard 
            key={index}
            degree={edu.degree}
            institution={edu.institution}
            location={edu.location}
            startDate={edu.startDate}
            endDate={edu.endDate}
            description={edu.description}
          />
        ))}
      </div>
    </div>
  );
}
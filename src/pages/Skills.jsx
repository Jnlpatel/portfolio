import { useEffect, useState } from 'react';
import { apiService } from '../services/api';
import SkillCard from '../components/SkillCard';
import './Skills.css';

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const skillsData = await apiService.getSkills();
        setSkills(skillsData);
      } catch (err) {
        console.error('Failed to load skills:', err);
      } finally {
        setLoading(false);
      }
    };
    loadSkills();
  }, []);

  if (loading) return <div className="loading">Loading skills...</div>;

  return (
    <div className="skills-page" id="skills">
      <h1 className="page-title">My Skills</h1>
      <div className="skills-grid">
        {skills.map(skill => (
          <SkillCard 
            key={skill._id} 
            name={skill.name}
            proficiency={skill.proficiency}
            years={skill.yearsOfExperience}
            category={skill.category}
          />
        ))}
      </div>
    </div>
  );
}
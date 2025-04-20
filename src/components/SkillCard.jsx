import './SkillCard.css';

export default function SkillCard({ name, proficiency, years, category }) {
  const proficiencyToPercentage = () => {
    const levels = {
      'Beginner': 30,
      'Intermediate': 65,
      'Advanced': 85,
      'Expert': 95
    };
    return levels[proficiency] || 50;
  };

  const getProficiencyColor = () => {
    const percentage = proficiencyToPercentage();
    if (percentage >= 80) return '#4CAF50'; // Green for advanced
    if (percentage >= 50) return '#2196F3'; // Blue for intermediate
    return '#FF9800'; // Orange for beginner
  };

  return (
    <div className="skill-card" data-category={category}>
      <div className="skill-header">
        <h3 className="skill-name">{name}</h3>
        <div className="skill-meta">
          <span className="proficiency-badge">{proficiency}</span>
        </div>
      </div>
      
      <div className="skill-visualization">
        <div className="skill-bar">
          <div 
            className="skill-progress"
            style={{
              width: `${proficiencyToPercentage()}%`,
              backgroundColor: getProficiencyColor()
            }}
            aria-valuenow={proficiencyToPercentage()}
            aria-valuemin="0"
            aria-valuemax="100"
          >
          </div>
        </div>
        <div className="skill-level-markers">
          <span>Beginner</span>
          <span>Intermediate</span>
          <span>Advanced</span>
        </div>
      </div>
    </div>
  );
}
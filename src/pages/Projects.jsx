import { useEffect, useState } from 'react';
import { apiService } from '../services/api';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const loadProjects = async () => {
      const data = await apiService.getProjects();
      setProjects(data);
    };
    loadProjects();
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <div className="projects-page">
      <h1 className="page-title">My Projects</h1>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <ProjectCard 
            key={project._id}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  );
}
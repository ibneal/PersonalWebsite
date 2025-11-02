import React, { useState } from 'react';
import './Projects.css';
import gmiProjectImage from '../assets/gmi-project-preview.png';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  // Neal's actual projects
  const projects = [
    {
      id: 1,
      title: "GMI Project Dashboard",
      description: "A comprehensive financial dashboard displaying market status, GMI readings, and daily market data with interactive trend analysis. Features real-time market indicators and multi-day rule tracking for investment decision support.",
      technologies: ["Python", "Flask", "PostgreSQL", "Financial APIs", "Data Visualization"],
      liveUrl: "https://cultural-lacy-drwishgmi-fda43104.koyeb.app/",
      githubUrl: "https://github.com/ibneal",
      iframeUrl: "https://cultural-lacy-drwishgmi-fda43104.koyeb.app/",
      image: gmiProjectImage
    },
    {
      id: 2,
      title: "TensorTradeGMI",
      description: "A sophisticated reinforcement learning system for GMI-based trading on TQQQ/SQQQ. Uses dual-ticker approach with RL agents (PPO, DQN, A2C) to learn optimal entry, exit, pyramiding, and position management strategies. Features backtest optimization, comprehensive performance metrics, and integration with PostgreSQL GMI database and Polygon.io market data.",
      technologies: ["Python", "Reinforcement Learning", "Stable-Baselines3", "Gymnasium", "PostgreSQL", "Polygon.io API", "PyTorch"],
      liveUrl: "https://github.com/ibneal/TensorTradeGMI",
      githubUrl: "https://github.com/ibneal/TensorTradeGMI",
      iframeUrl: "https://github.com/ibneal/TensorTradeGMI/blob/main/README.md",
      image: gmiProjectImage
    }
  ];

  const handleProjectClick = (index) => {
    setActiveProject(index);
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects. Click on any project to see it in action!
        </p>
        
        <div className="projects-content">
          <div className="projects-list">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-item ${activeProject === index ? 'active' : ''}`}
                onClick={() => handleProjectClick(index)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-overlay-content">
                      <h4>{project.title}</h4>
                      <p>{project.description}</p>
                      <div className="project-tech">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                      </svg>
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="project-preview">
            <div className="preview-header">
              <h3>{projects[activeProject].title}</h3>
              <div className="preview-controls">
                <button 
                  className="preview-btn"
                  onClick={() => window.open(projects[activeProject].liveUrl, '_blank')}
                >
                  Open in New Tab
                </button>
              </div>
            </div>
            <div className="iframe-container">
              <iframe
                src={projects[activeProject].iframeUrl}
                title={projects[activeProject].title}
                frameBorder="0"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="preview-info">
              <p>{projects[activeProject].description}</p>
              <div className="preview-tech">
                {projects[activeProject].technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

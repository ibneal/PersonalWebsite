import React from 'react';
import './About.css';
import headshot from '../assets/nealbhalodia-headshot.jpg';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML/CSS', 'Flask'] },
    { category: 'Backend', items: ['Node.js', 'Python', '.NET', 'Django', 'REST APIs'] },
    { category: 'Database', items: ['SQL', 'PostgreSQL', 'MongoDB', 'GraphQL'] },
    { category: 'DevOps', items: ['Azure DevOps', 'AWS', 'Git', 'Docker'] },
    { category: 'Tools & Others', items: ['ServiceNow', 'Jira', 'Figma', 'Agile/Scrum'] }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={headshot} alt="Neal Bhalodia" className="profile-image" />
          </div>
          <div className="about-text">
            <div className="about-intro">
              <h3>Hello! I'm Neal Bhalodia</h3>
              <p>
                I'm an Engineer and Release Manager with expertise in backend systems, 
                automation, and enterprise-scale application delivery. I specialize in 
                leading cross-functional teams and shaping technical strategy to deliver 
                measurable business outcomes.
              </p>
              <p>
                My experience spans building tools that streamline workflows and 
                accelerate developer productivity. I'm passionate about creating 
                innovative solutions that solve complex problems at scale and 
                drive efficiency across organizations.
              </p>
              <p>
                When I'm not working on enterprise solutions, you can find me 
                exploring new technologies, contributing to open-source projects, 
                or working on personal projects that challenge me to learn 
                something new.
              </p>
            </div>
            
            <div className="experience">
              <h4>What I Do</h4>
              <div className="experience-grid">
                <div className="experience-item">
                  <div className="experience-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h5>Release Management</h5>
                  <p>Leading cross-functional teams and managing enterprise application delivery</p>
                </div>
                <div className="experience-item">
                  <div className="experience-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                    </svg>
                  </div>
                  <h5>Backend Systems</h5>
                  <p>Building robust backend systems and enterprise-scale applications</p>
                </div>
                <div className="experience-item">
                  <div className="experience-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h5>Automation & Tools</h5>
                  <p>Creating tools that streamline workflows and accelerate developer productivity</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="skills-section">
            <h4>Skills & Technologies</h4>
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-category">
                  <h5>{skillGroup.category}</h5>
                  <div className="skill-items">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-item">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

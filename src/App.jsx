import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './App.css';
import MatrixBackground from './MatrixBackground';


function App() {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const projects = [
    {
      title: 'NBA Player Performance Projections',
      description: 'An automated Machine Learning pipeline that forecasts daily NBA player statistics. Uses Random Forest algorithms to analyze historical trends, injury reports, and matchup data to generate predictive performance metrics.',
      tech: ['Python', 'React', 'HoopR API'],
      link: 'https://github.com/badreddinechrifialaoui/NBA-Player-Projections',
      color: '#00ff41'
    },
    {
      title: 'Financial Forcasting with Python for Excel',
      description: 'An automated time-series forecasting tool designed for corporate finance that combines multiple statistical models (ARIMA, Prophet, ETS) for higher accuracy.',
      tech: ['Python', 'Times-Series Analysis', 'Corporate Finance', 'Excel'],
      link: 'https://github.com/badreddinechrifialaoui/Financial-Forcasting',
      color: '#00d4ff'
    },
    {
      title: 'Determinants of Fintech Adoption',
      description: 'An econometric research framework investigating whether European fintech growth is driven by organic market demand or regulatory subsidies. This is my master thesis for the academic year 2025/2026',
      tech: ['R', 'Econometrics', 'Policy Analysis', 'Financial Analysis'],
      link: '',
      color: '#ff006e'
    }
  ];

  return (
    <div className="App">
      <MatrixBackground />

      {/* Enhanced Navigation */}
      <nav className="navbar">
        <div className="nav-logo">BA</div>
        <div className="nav-links">
          {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`nav-link ${activeSection === section ? 'active' : ''}`}
            >
              <span className="nav-number">0{['home', 'about', 'experience', 'projects', 'contact'].indexOf(section)}.</span>
              {section.toUpperCase()}
            </a>
          ))}
        </div>
      </nav>

      {/* Scroll Progress Indicator */}
      <motion.div 
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="app-content">
        
        {/* Hero Section - Enhanced */}
        <motion.section 
          id="home" 
          className="hero-section"
          style={{ opacity, scale }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="hero-label"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              PORTFOLIO 2026
            </motion.div>
            
            <motion.h1 
              className="hero-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              BADR
              <span className="hero-name-accent"> ALAOUI</span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Financial Data Analyst and Process Automation Specialist
            </motion.p>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Merging Corporate Finance with Automation, Data Analysis, and Design.
            </motion.p>

            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <a href="#projects" className="cta-button primary">
                View Projects
                <span className="cta-arrow">→</span>
              </a>
              <a href="#contact" className="cta-button secondary">
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="scroll-line" />
            <span>Scroll</span>
          </motion.div>
        </motion.section>

        {/* About Section - Enhanced */}
        <motion.section 
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-number">01.</span>
            <h2>About Me</h2>
            <div className="section-line" />
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-photo" variants={itemVariants}>
              <div className="photo-container">
                <img src="/profile.png" alt="Badr Alaoui" className="profile-image" />
              </div>
            </motion.div>

            <motion.div className="about-content" variants={itemVariants}>
              <p className="about-text-large">
                I am a final-year student in the <span className="highlight">Master of Science in Corporate Finance</span> at <span className="highlight">ICN Business School</span>.
              </p>
              <p>
                My main focus is on integrating traditional finance with technology, 
                progressing from dashboard automation in Power BI to advanced programmatic automation using Python.
              </p>
            </motion.div>

            <motion.div className="about-stats" variants={itemVariants}>
              <div className="stat-item">
                <div className="stat-number">April 2026</div>
                <div className="stat-label">Internship strating</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Active Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">∞</div>
                <div className="stat-label">Lines of Code</div>
              </div>
            </motion.div>
          </div>

          <motion.div className="skills-section" variants={itemVariants}>
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {['Python', 'R Studio', 'Financial Modeling', 'Data Analysis', 'Econometrics', 'Automation', 'Motion Design', 'Power BI', 'SQL', 'DAX', 'VBA', 'SAP / ERP'].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Experience Section - Enhanced */}
        <motion.section 
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-number">02.</span>
            <h2>Experience</h2>
            <div className="section-line" />
          </motion.div>

          <motion.div className="experience-timeline" variants={itemVariants}>
            <div className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-date">2024 - Present</div>
                <h3>Audit Intern</h3>
                <h4>BDO Audit Tax & Advisory</h4>
                <p>Executed IFRS and French GAAP audits for international subsidiaries, conducted internal control testing using IDEA/APT, and drafted successful public tender proposals.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-date">Add Your Role</div>
                <h3>Management Control Intern</h3>
                <h4>SFC Solutions Morocco</h4>
                <p>Automated financial reporting via Power BI to reduce manual processing by 40 monthly hours and analyzed industrial KPIs to support corrective production actions.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-date">Add Your Role</div>
                <h3>Accounting Intern</h3>
                <h4>Boura Conseils</h4>
                <p>Managed national standard bookkeeping and tax declarations while providing administrative support for corporate incorporations and social security affiliations.</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-number">03.</span>
            <h2>Featured Projects</h2>
            <div className="section-line" />
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                style={{ '--accent-color': project.color }}
              >
                <div className="project-number">0{index + 1}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
                {project.link && (
                   <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                      View Project
                     <span className="link-arrow">↗</span>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section - Enhanced */}
        <motion.section 
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-number">04.</span>
            <h2>Get In Touch</h2>
            <div className="section-line" />
          </motion.div>

          <motion.div className="contact-content" variants={itemVariants}>
            <p className="contact-text">
              I am currently open to opportunities in Finance and Data Analysis.
              starting april 2026.
            </p>

            <div className="contact-links">
              <motion.a 
                href="mailto:badreddinechrifialaoui@gmail.com" 
                className="contact-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="contact-icon">✉</span>
                Email Me
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/badr-alaoui/" 
                target="_blank" 
                rel="noreferrer"
                className="contact-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="contact-icon">in</span>
                LinkedIn
              </motion.a>
              <motion.a 
                href="https://github.com/badreddinechrifialaoui" 
                target="_blank" 
                rel="noreferrer"
                className="contact-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="contact-icon">{ }</span>
                GitHub
              </motion.a>
            </div>
          </motion.div>

          <motion.footer className="footer" variants={itemVariants}>
            <p>Designed & Built by Badr Alaoui</p>
            <p className="footer-year">2026</p>
          </motion.footer>
        </motion.section>

      </div>
    </div>
  );
}

export default App;
"use client"

import { useState } from "react"
import { Github, ExternalLink, Eye } from "lucide-react"
import styles from "./Projects.module.css"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React frontend and Node.js backend",
      fullDescription:
        "A comprehensive e-commerce platform built with modern web technologies. Features include user authentication, product catalog, shopping cart, payment integration, order management, and admin dashboard. The frontend is built with React and styled with CSS modules, while the backend uses Node.js with Express and MongoDB.",
      stack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=300&width=400",
      screenshots: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates",
      fullDescription:
        "A modern task management application that allows teams to collaborate effectively. Features include project creation, task assignment, progress tracking, real-time notifications, file attachments, and team chat. Built with React for the frontend and Firebase for backend services including real-time database and authentication.",
      stack: ["React", "Firebase", "Material-UI", "Socket.io"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=300&width=400",
      screenshots: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts",
      fullDescription:
        "A comprehensive weather dashboard that provides current weather conditions and forecasts for multiple locations. Features include geolocation support, weather maps, historical data, weather alerts, and customizable widgets. The app uses OpenWeatherMap API for weather data and includes data visualization with charts and graphs.",
      stack: ["JavaScript", "Chart.js", "OpenWeather API", "CSS3"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=300&width=400",
      screenshots: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website with modern design and animations",
      fullDescription:
        "A modern, responsive portfolio website showcasing projects, skills, and experience. Features include smooth animations, dark/light theme toggle, contact form, blog section, and optimized performance. Built with Next.js for server-side rendering and enhanced SEO, styled with CSS modules following Fluent Design principles.",
      stack: ["Next.js", "TypeScript", "CSS Modules", "Framer Motion"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=300&width=400",
      screenshots: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with group messaging and file sharing",
      fullDescription:
        "A feature-rich real-time chat application supporting one-on-one and group conversations. Includes message encryption, file sharing, emoji reactions, message search, user presence indicators, and push notifications. Built with React for the frontend and Socket.io for real-time communication, with MongoDB for message storage.",
      stack: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=300&width=400",
      screenshots: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      title: "Expense Tracker",
      description: "Personal finance management app with budget tracking and analytics",
      fullDescription:
        "A comprehensive expense tracking application that helps users manage their personal finances. Features include expense categorization, budget setting, financial goals, spending analytics, receipt scanning, and financial reports. The app uses machine learning for automatic expense categorization and provides insights through interactive charts and graphs.",
      stack: ["React Native", "Python", "TensorFlow", "SQLite", "Chart.js"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=300&width=400",
      screenshots: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
  ]

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>

        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className={styles.projectOverlay}>
                  <button className={styles.viewButton} onClick={() => setSelectedProject(index)}>
                    <Eye size={16} />
                    View Details
                  </button>
                </div>
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.projectStack}>
                  {project.stack.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.projectActions}>
                  <a href={project.github} className={styles.actionButton}>
                    <Github size={16} />
                    Code
                  </a>
                  <a href={project.demo} className={styles.actionButton}>
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject !== null && (
          <div className={styles.modal} onClick={() => setSelectedProject(null)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={() => setSelectedProject(null)}>
                ×
              </button>

              <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>{projects[selectedProject].title}</h3>
                <div className={styles.modalActions}>
                  <a href={projects[selectedProject].github} className={styles.modalActionButton}>
                    <Github size={16} />
                    GitHub
                  </a>
                  <a href={projects[selectedProject].demo} className={styles.modalActionButton}>
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>

              <div className={styles.modalBody}>
                <div className={styles.modalDescription}>
                  <p>{projects[selectedProject].fullDescription}</p>
                </div>

                <div className={styles.modalStack}>
                  <h4>Technologies Used:</h4>
                  <div className={styles.stackList}>
                    {projects[selectedProject].stack.map((tech, index) => (
                      <span key={index} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.modalScreenshots}>
                  <h4>Screenshots:</h4>
                  <div className={styles.screenshotGrid}>
                    {projects[selectedProject].screenshots.map((screenshot, index) => (
                      <img
                        key={index}
                        src={screenshot || "/placeholder.svg"}
                        alt={`${projects[selectedProject].title} screenshot ${index + 1}`}
                        className={styles.screenshot}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Award, ExternalLink, Calendar, Building } from "lucide-react"
import styles from "./Certifications.module.css"

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null)

  const certifications = [
    {
      title: "Java Programming Fundamentals",
      platform: "Coursera",
      date: "2023",
      description: "Comprehensive course covering Java basics, OOP concepts, and advanced programming techniques.",
      skills: ["Java", "Object-Oriented Programming", "Data Structures", "Algorithms"],
      link: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Full Stack Web Development",
      platform: "IBM",
      date: "2023",
      description: "Complete full-stack development course covering frontend and backend technologies.",
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB"],
      link: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Cloud Computing Fundamentals",
      platform: "AWS",
      date: "2022",
      description: "Introduction to cloud computing concepts and AWS services.",
      skills: ["AWS", "Cloud Computing", "EC2", "S3", "Lambda"],
      link: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Python for Data Science",
      platform: "Coursera",
      date: "2022",
      description: "Data science fundamentals using Python programming language.",
      skills: ["Python", "Data Analysis", "Pandas", "NumPy", "Matplotlib"],
      link: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "React Development",
      platform: "Meta",
      date: "2023",
      description: "Advanced React development concepts and best practices.",
      skills: ["React", "Redux", "Hooks", "Context API", "Testing"],
      link: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Database Design",
      platform: "Oracle",
      date: "2022",
      description: "Database design principles and SQL optimization techniques.",
      skills: ["SQL", "Database Design", "Normalization", "Indexing", "Performance"],
      link: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section id="certifications" className={styles.certifications}>
      <div className={styles.container}>
        <h2 className={styles.title}>Certifications</h2>

        <div className={styles.certGrid}>
          {certifications.map((cert, index) => (
            <div key={index} className={styles.certCard}>
              <div className={styles.certImage}>
                <img src={cert.image || "/placeholder.svg"} alt={cert.title} />
                <div className={styles.certOverlay}>
                  <button className={styles.viewButton} onClick={() => setSelectedCert(index)}>
                    View Details
                  </button>
                </div>
              </div>

              <div className={styles.certContent}>
                <div className={styles.certHeader}>
                  <Award className={styles.certIcon} size={20} />
                  <span className={styles.certPlatform}>{cert.platform}</span>
                </div>

                <h3 className={styles.certTitle}>{cert.title}</h3>

                <div className={styles.certMeta}>
                  <div className={styles.certDate}>
                    <Calendar size={16} />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <div className={styles.certSkills}>
                  {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span key={skillIndex} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && <span className={styles.skillTag}>+{cert.skills.length - 3}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCert !== null && (
          <div className={styles.modal} onClick={() => setSelectedCert(null)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={() => setSelectedCert(null)}>
                ×
              </button>

              <div className={styles.modalHeader}>
                <img
                  src={certifications[selectedCert].image || "/placeholder.svg"}
                  alt={certifications[selectedCert].title}
                  className={styles.modalImage}
                />
                <div className={styles.modalInfo}>
                  <h3 className={styles.modalTitle}>{certifications[selectedCert].title}</h3>
                  <div className={styles.modalMeta}>
                    <div className={styles.modalPlatform}>
                      <Building size={16} />
                      <span>{certifications[selectedCert].platform}</span>
                    </div>
                    <div className={styles.modalDate}>
                      <Calendar size={16} />
                      <span>{certifications[selectedCert].date}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.modalBody}>
                <p className={styles.modalDescription}>{certifications[selectedCert].description}</p>

                <div className={styles.modalSkills}>
                  <h4>Skills Gained:</h4>
                  <div className={styles.skillsList}>
                    {certifications[selectedCert].skills.map((skill, index) => (
                      <span key={index} className={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={certifications[selectedCert].link}
                  className={styles.certLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} />
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

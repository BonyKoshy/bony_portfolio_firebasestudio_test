"use client"

import { useState } from "react"
import { Calendar, MapPin, Briefcase, GraduationCap, Clock } from "lucide-react"
import styles from "./About.module.css"

export default function About() {
  const [activeTab, setActiveTab] = useState(0)

  const funFacts = [
    {
      icon: <Calendar size={24} />,
      label: "Birthday",
      value: "March 15, 1999",
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Kerala, India",
    },
    {
      icon: <Briefcase size={24} />,
      label: "Role",
      value: "Full Stack Developer",
    },
    {
      icon: <GraduationCap size={24} />,
      label: "Degree",
      value: "B.Tech Computer Science",
    },
    {
      icon: <Clock size={24} />,
      label: "Status",
      value: "Offer from Accenture - Awaiting Onboarding",
    },
  ]

  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "Java", level: 85 },
    { name: "C#", level: 80 },
    { name: "React", level: 88 },
    { name: "Python", level: 75 },
    { name: ".NET", level: 82 },
    { name: "SQL", level: 78 },
  ]

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>

        <div className={styles.content}>
          <div className={styles.intro}>
            <div className={styles.card}>
              <p className={styles.description}>
                I'm a passionate software developer with a strong foundation in full-stack development. Currently
                holding an offer from Accenture and awaiting onboarding, I love creating innovative solutions and
                learning new technologies. My journey in programming started during my B.Tech in Computer Science, and
                I've been building exciting projects ever since.
              </p>
            </div>
          </div>

          <div className={styles.funFacts}>
            <h3 className={styles.sectionTitle}>Fun Facts</h3>
            <div className={styles.factTabs}>
              {funFacts.map((fact, index) => (
                <button
                  key={index}
                  className={`${styles.factTab} ${activeTab === index ? styles.active : ""}`}
                  onClick={() => setActiveTab(index)}
                >
                  {fact.icon}
                  <span>{fact.label}</span>
                </button>
              ))}
            </div>
            <div className={styles.factContent}>
              <div className={styles.factCard}>
                <div className={styles.factIcon}>{funFacts[activeTab].icon}</div>
                <div>
                  <h4>{funFacts[activeTab].label}</h4>
                  <p>{funFacts[activeTab].value}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.skills}>
            <h3 className={styles.sectionTitle}>Skills</h3>
            <div className={styles.skillGrid}>
              {skills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={styles.skillHeader}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillLevel}>{skill.level}%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div className={styles.skillProgress} style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

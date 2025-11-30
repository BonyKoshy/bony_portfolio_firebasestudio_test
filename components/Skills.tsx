"use client"

import { useState } from "react"
import { Code, Wrench, Users } from "lucide-react"
import styles from "./Skills.module.css"

export default function Skills() {
  const [activeTab, setActiveTab] = useState("languages")

  const skillCategories = {
    languages: {
      icon: <Code size={24} />,
      title: "Languages",
      skills: [
        { name: "Java", icon: "☕", level: "Advanced" },
        { name: "Python", icon: "🐍", level: "Intermediate" },
        { name: "C#", icon: "🔷", level: "Advanced" },
        { name: "JavaScript", icon: "🟨", level: "Advanced" },
        { name: "TypeScript", icon: "🔷", level: "Intermediate" },
        { name: "SQL", icon: "🗃️", level: "Intermediate" },
      ],
    },
    frameworks: {
      icon: <Wrench size={24} />,
      title: "Frameworks",
      skills: [
        { name: "React", icon: "⚛️", level: "Advanced" },
        { name: ".NET MAUI", icon: "🔷", level: "Intermediate" },
        { name: "Node.js", icon: "🟢", level: "Intermediate" },
        { name: "Express.js", icon: "🚀", level: "Intermediate" },
        { name: "Next.js", icon: "▲", level: "Intermediate" },
        { name: "Spring Boot", icon: "🍃", level: "Beginner" },
      ],
    },
    tools: {
      icon: <Wrench size={24} />,
      title: "Tools",
      skills: [
        { name: "VS Code", icon: "💙", level: "Expert" },
        { name: "Git", icon: "🔀", level: "Advanced" },
        { name: "Blender", icon: "🟠", level: "Intermediate" },
        { name: "Figma", icon: "🎨", level: "Intermediate" },
        { name: "Docker", icon: "🐳", level: "Beginner" },
        { name: "Postman", icon: "📮", level: "Intermediate" },
      ],
    },
    soft: {
      icon: <Users size={24} />,
      title: "Soft Skills",
      skills: [
        { name: "Communication", icon: "💬", level: "Expert" },
        { name: "Teamwork", icon: "🤝", level: "Advanced" },
        { name: "Problem Solving", icon: "🧩", level: "Advanced" },
        { name: "Leadership", icon: "👑", level: "Intermediate" },
        { name: "Time Management", icon: "⏰", level: "Advanced" },
        { name: "Adaptability", icon: "🔄", level: "Advanced" },
      ],
    },
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "#22c55e"
      case "Advanced":
        return "#3b82f6"
      case "Intermediate":
        return "#f59e0b"
      case "Beginner":
        return "#ef4444"
      default:
        return "#6b7280"
    }
  }

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills & Tools</h2>

        <div className={styles.tabContainer}>
          <div className={styles.tabs}>
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                className={`${styles.tab} ${activeTab === key ? styles.active : ""}`}
                onClick={() => setActiveTab(key)}
              >
                {category.icon}
                <span>{category.title}</span>
              </button>
            ))}
          </div>

          <div className={styles.tabContent}>
            <div className={styles.skillGrid}>
              {skillCategories[activeTab as keyof typeof skillCategories].skills.map((skill, index) => (
                <div key={index} className={styles.skillCard}>
                  <div className={styles.skillIcon}>
                    <span className={styles.emoji}>{skill.icon}</span>
                  </div>
                  <div className={styles.skillInfo}>
                    <h3 className={styles.skillName}>{skill.name}</h3>
                    <span className={styles.skillLevel} style={{ color: getLevelColor(skill.level) }}>
                      {skill.level}
                    </span>
                  </div>
                  <div className={styles.skillIndicator} style={{ backgroundColor: getLevelColor(skill.level) }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

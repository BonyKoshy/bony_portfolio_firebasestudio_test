"use client"

import { useState, useEffect } from "react"
import { Download, Eye, Github, Linkedin } from "lucide-react"
import styles from "./Hero.module.css"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = "A passionate developer building the future one line of code at a time"

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.gradient1}></div>
        <div className={styles.gradient2}></div>
        <div className={styles.gradient3}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.avatar}>
            <img src="/placeholder.svg?height=150&width=150" alt="Bony Koshy" className={styles.avatarImage} />
          </div>

          <h1 className={styles.name}>
            Hi, I'm <span className={styles.highlight}>Bony Koshy</span>
          </h1>

          <div className={styles.tagline}>
            <span className={styles.typewriter}>
              {displayText}
              <span className={styles.cursor}>|</span>
            </span>
          </div>

          <div className={styles.actions}>
            <button className={`${styles.button} ${styles.primary}`}>
              <Download size={20} />
              Download Resume
            </button>
            <button className={`${styles.button} ${styles.secondary}`}>
              <Eye size={20} />
              View Projects
            </button>
          </div>

          <div className={styles.social}>
            <a href="#" className={styles.socialLink}>
              <Github size={24} />
            </a>
            <a href="#" className={styles.socialLink}>
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

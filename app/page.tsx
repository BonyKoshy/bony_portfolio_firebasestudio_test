"use client"

import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Certifications from "@/components/Certifications"
import Projects from "@/components/Projects"
import SystemSetup from "@/components/SystemSetup"
import WhatsInMyBag from "@/components/WhatsInMyBag"
import Resume from "@/components/Resume"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import BackToTop from "@/components/BackToTop"
import ThemeToggle from "@/components/ThemeToggle"
import styles from "./page.module.css"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "certifications", "projects", "system", "bag", "resume", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light")
  }, [darkMode])

  return (
    <div className={styles.portfolio}>
      <Header activeSection={activeSection} />
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <SystemSetup />
        <WhatsInMyBag />
        <Resume />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}

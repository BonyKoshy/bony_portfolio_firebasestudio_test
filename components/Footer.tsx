"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import styles from "./Footer.module.css"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/bonykoshy",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/bonykoshy",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:bony.koshy@email.com",
      label: "Email",
    },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.logo}>
              <span className={styles.logoText}>Bony Koshy</span>
            </div>
            <p className={styles.description}>
              Passionate software developer building innovative solutions and creating meaningful digital experiences.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={styles.footerLink}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Get In Touch</h3>
            <div className={styles.contactInfo}>
              <p>Kerala, India</p>
              <p>bony.koshy@email.com</p>
              <p>+91 98765 43210</p>
            </div>
            <div className={styles.availability}>
              <div className={styles.statusDot}></div>
              <span>Available for opportunities</span>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>
              © {currentYear} Bony Koshy. Made with <Heart size={16} className={styles.heart} /> using React & CSS
              Modules
            </p>
          </div>
          <div className={styles.credits}>
            <p>Designed with Fluent Design principles</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

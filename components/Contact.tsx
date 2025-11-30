"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from "lucide-react"
import styles from "./Contact.module.css"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })

    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "bony.koshy@email.com",
      link: "mailto:bony.koshy@email.com",
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Kerala, India",
      link: "#",
    },
  ]

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: "GitHub",
      link: "https://github.com/bonykoshy",
      color: "#333",
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/bonykoshy",
      color: "#0077b5",
    },
    {
      icon: <MessageSquare size={24} />,
      label: "WhatsApp",
      link: "https://wa.me/919876543210",
      color: "#25d366",
    },
  ]

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.subtitle}>
          Let's discuss opportunities, collaborations, or just have a chat about technology!
        </p>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h3 className={styles.sectionTitle}>Contact Information</h3>

            <div className={styles.infoList}>
              {contactInfo.map((info, index) => (
                <a key={index} href={info.link} className={styles.infoItem}>
                  <div className={styles.infoIcon}>{info.icon}</div>
                  <div className={styles.infoDetails}>
                    <span className={styles.infoLabel}>{info.label}</span>
                    <span className={styles.infoValue}>{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className={styles.socialSection}>
              <h4 className={styles.socialTitle}>Connect with me</h4>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={styles.socialLink}
                    style={{ "--social-color": social.color } as React.CSSProperties}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.availability}>
              <div className={styles.statusIndicator}>
                <div className={styles.statusDot}></div>
                <span>Available for opportunities</span>
              </div>
              <p className={styles.statusText}>
                Currently awaiting onboarding at Accenture. Open to discussing future opportunities and collaborations.
              </p>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h3 className={styles.sectionTitle}>Send me a message</h3>

            {submitted ? (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>✓</div>
                <h4>Message sent successfully!</h4>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Your full name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={styles.textarea}
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                    rows={5}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ""}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className={styles.spinner}></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

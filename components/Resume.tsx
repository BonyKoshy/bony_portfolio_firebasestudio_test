"use client"

import { useState } from "react"
import { Download, Eye, QrCode, Copy, Check } from "lucide-react"
import styles from "./Resume.module.css"

export default function Resume() {
  const [copied, setCopied] = useState(false)
  const [showQR, setShowQR] = useState(false)

  const resumeLink = "https://drive.google.com/file/d/your-resume-id/view"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(resumeLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <section id="resume" className={styles.resume}>
      <div className={styles.container}>
        <h2 className={styles.title}>Resume</h2>

        <div className={styles.resumeContent}>
          <div className={styles.resumeCard}>
            <div className={styles.resumePreview}>
              <img src="/placeholder.svg?height=400&width=300" alt="Resume Preview" className={styles.resumeImage} />
              <div className={styles.resumeOverlay}>
                <button className={styles.previewButton}>
                  <Eye size={20} />
                  Preview
                </button>
              </div>
            </div>

            <div className={styles.resumeInfo}>
              <h3 className={styles.resumeTitle}>Bony Koshy - Software Developer</h3>
              <p className={styles.resumeDescription}>
                Comprehensive resume showcasing my skills, experience, projects, and achievements in software
                development. Updated regularly with latest accomplishments.
              </p>

              <div className={styles.resumeStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>2+</span>
                  <span className={styles.statLabel}>Years Experience</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>15+</span>
                  <span className={styles.statLabel}>Projects</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>8+</span>
                  <span className={styles.statLabel}>Technologies</span>
                </div>
              </div>

              <div className={styles.resumeActions}>
                <a href={resumeLink} className={styles.actionButton} target="_blank" rel="noopener noreferrer">
                  <Download size={20} />
                  Download PDF
                </a>
                <a
                  href={resumeLink}
                  className={`${styles.actionButton} ${styles.secondary}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Eye size={20} />
                  View Online
                </a>
              </div>
            </div>
          </div>

          <div className={styles.qrSection}>
            <div className={styles.qrCard}>
              <div className={styles.qrHeader}>
                <QrCode size={24} className={styles.qrIcon} />
                <h3>Quick Access</h3>
              </div>

              <div className={styles.qrContainer}>
                <div className={styles.qrCode} onClick={() => setShowQR(!showQR)}>
                  {showQR ? (
                    <img src="/placeholder.svg?height=200&width=200" alt="Resume QR Code" className={styles.qrImage} />
                  ) : (
                    <div className={styles.qrPlaceholder}>
                      <QrCode size={48} />
                      <p>Click to reveal QR code</p>
                    </div>
                  )}
                </div>

                {showQR && (
                  <div className={styles.scanAnimation}>
                    <div className={styles.scanLine}></div>
                    <p className={styles.scanText}>Scan me!</p>
                  </div>
                )}
              </div>

              <div className={styles.qrActions}>
                <button className={styles.copyButton} onClick={copyToClipboard}>
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? "Copied!" : "Copy Link"}
                </button>
              </div>

              <div className={styles.qrInstructions}>
                <p>Scan the QR code with your phone camera to quickly access my resume</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.resumeHighlights}>
          <h3 className={styles.highlightsTitle}>Resume Highlights</h3>
          <div className={styles.highlightsGrid}>
            <div className={styles.highlight}>
              <div className={styles.highlightIcon}>🎓</div>
              <h4>Education</h4>
              <p>B.Tech in Computer Science with strong academic performance</p>
            </div>
            <div className={styles.highlight}>
              <div className={styles.highlightIcon}>💼</div>
              <h4>Experience</h4>
              <p>Offer from Accenture - Awaiting onboarding as Software Developer</p>
            </div>
            <div className={styles.highlight}>
              <div className={styles.highlightIcon}>🏆</div>
              <h4>Certifications</h4>
              <p>Multiple certifications from Coursera, IBM, and other platforms</p>
            </div>
            <div className={styles.highlight}>
              <div className={styles.highlightIcon}>🚀</div>
              <h4>Projects</h4>
              <p>Full-stack applications showcasing diverse technical skills</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

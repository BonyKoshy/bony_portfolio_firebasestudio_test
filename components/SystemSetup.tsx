"use client"

import { useState } from "react"
import { Laptop, Smartphone, Headphones, Monitor, Keyboard, Mouse } from "lucide-react"
import styles from "./SystemSetup.module.css"

export default function SystemSetup() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const setupItems = [
    {
      icon: <Laptop size={32} />,
      title: "Laptop",
      brand: "Dell XPS 15",
      specs: ["Intel Core i7-11800H", "32GB DDR4 RAM", "1TB NVMe SSD", "NVIDIA RTX 3050 Ti", '15.6" 4K OLED Display'],
      image: "/placeholder.svg?height=200&width=300",
      description: "My primary development machine. Perfect for coding, design work, and running multiple VMs.",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Phone",
      brand: "iPhone 14 Pro",
      specs: ["A16 Bionic Chip", "256GB Storage", '6.1" Super Retina XDR', "Pro Camera System", "5G Connectivity"],
      image: "/placeholder.svg?height=200&width=300",
      description: "Essential for testing mobile apps, staying connected, and capturing moments.",
    },
    {
      icon: <Headphones size={32} />,
      title: "Headphones",
      brand: "Sony WH-1000XM4",
      specs: ["Active Noise Cancellation", "30-hour Battery Life", "Hi-Res Audio", "Touch Controls", "Quick Charge"],
      image: "/placeholder.svg?height=200&width=300",
      description: "Perfect for focused coding sessions and virtual meetings with crystal clear audio.",
    },
    {
      icon: <Monitor size={32} />,
      title: "External Monitor",
      brand: "LG 27UK850-W",
      specs: ['27" 4K UHD Display', "USB-C Connectivity", "HDR10 Support", "99% sRGB Coverage", "Height Adjustable"],
      image: "/placeholder.svg?height=200&width=300",
      description: "Extended screen real estate for multitasking and better productivity.",
    },
    {
      icon: <Keyboard size={32} />,
      title: "Keyboard",
      brand: "Logitech MX Keys",
      specs: ["Backlit Keys", "Multi-device Pairing", "USB-C Rechargeable", "Tactile Typing", "Smart Illumination"],
      image: "/placeholder.svg?height=200&width=300",
      description: "Comfortable typing experience for long coding sessions with smart backlighting.",
    },
    {
      icon: <Mouse size={32} />,
      title: "Mouse",
      brand: "Logitech MX Master 3",
      specs: ["Darkfield Sensor", "Multi-device Control", "Customizable Buttons", "Fast Scrolling", "70-day Battery"],
      image: "/placeholder.svg?height=200&width=300",
      description: "Precision control with customizable buttons for enhanced workflow efficiency.",
    },
  ]

  const devTools = [
    { name: "VS Code", description: "Primary code editor with extensions", icon: "💙" },
    { name: "Git", description: "Version control system", icon: "🔀" },
    { name: "Node.js", description: "JavaScript runtime environment", icon: "🟢" },
    { name: "Docker", description: "Containerization platform", icon: "🐳" },
    { name: "Postman", description: "API testing tool", icon: "📮" },
    { name: "Figma", description: "UI/UX design tool", icon: "🎨" },
    { name: "Chrome DevTools", description: "Web development tools", icon: "🔧" },
    { name: "Terminal", description: "Command line interface", icon: "⚡" },
  ]

  return (
    <section id="system" className={styles.systemSetup}>
      <div className={styles.container}>
        <h2 className={styles.title}>My System Setup</h2>

        <div className={styles.setupGrid}>
          {setupItems.map((item, index) => (
            <div key={index} className={`${styles.setupCard} ${expandedCard === index ? styles.expanded : ""}`}>
              <div className={styles.cardHeader} onClick={() => setExpandedCard(expandedCard === index ? null : index)}>
                <div className={styles.cardIcon}>{item.icon}</div>
                <div className={styles.cardInfo}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardBrand}>{item.brand}</p>
                </div>
                <button className={styles.expandButton}>{expandedCard === index ? "−" : "+"}</button>
              </div>

              {expandedCard === index && (
                <div className={styles.cardContent}>
                  <div className={styles.cardImage}>
                    <img src={item.image || "/placeholder.svg"} alt={item.brand} />
                  </div>
                  <div className={styles.cardDetails}>
                    <p className={styles.cardDescription}>{item.description}</p>
                    <div className={styles.specs}>
                      <h4>Specifications:</h4>
                      <ul>
                        {item.specs.map((spec, specIndex) => (
                          <li key={specIndex}>{spec}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.devToolsSection}>
          <h3 className={styles.sectionTitle}>Development Tools</h3>
          <div className={styles.toolsGrid}>
            {devTools.map((tool, index) => (
              <div key={index} className={styles.toolCard}>
                <div className={styles.toolIcon}>{tool.icon}</div>
                <div className={styles.toolInfo}>
                  <h4 className={styles.toolName}>{tool.name}</h4>
                  <p className={styles.toolDescription}>{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

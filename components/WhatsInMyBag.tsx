"use client"

import { useState } from "react"
import { Wallet, Key, Headphones, Usb, Smartphone, CreditCard } from "lucide-react"
import styles from "./WhatsInMyBag.module.css"

export default function WhatsInMyBag() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const bagItems = [
    {
      icon: <Wallet size={32} />,
      name: "Wallet",
      description: "Leather wallet with cards and cash",
      details:
        "A minimalist leather wallet containing essential cards, some cash, and my driver's license. Keeps everything organized and secure.",
      color: "#8B4513",
      position: { top: "20%", left: "15%" },
    },
    {
      icon: <Key size={32} />,
      name: "Keys",
      description: "House and car keys with keychain",
      details:
        "My key set including house keys, car keys, and a small flashlight keychain. Essential for daily mobility and security.",
      color: "#C0C0C0",
      position: { top: "35%", left: "45%" },
    },
    {
      icon: <Headphones size={32} />,
      name: "Earbuds",
      description: "Wireless earbuds for music and calls",
      details:
        "Apple AirPods Pro for listening to music, podcasts, and taking calls on the go. Great noise cancellation for focus.",
      color: "#FFFFFF",
      position: { top: "15%", right: "20%" },
    },
    {
      icon: <Usb size={32} />,
      name: "USB Drive",
      description: "32GB USB drive for file transfers",
      details:
        "A reliable 32GB USB 3.0 drive for quick file transfers, backups, and sharing code between devices. Always handy for developers.",
      color: "#4169E1",
      position: { top: "60%", left: "25%" },
    },
    {
      icon: <Smartphone size={32} />,
      name: "Power Bank",
      description: "10000mAh portable charger",
      details:
        "Anker PowerCore 10000mAh power bank to keep devices charged throughout the day. Essential for long coding sessions away from outlets.",
      color: "#000000",
      position: { top: "45%", right: "15%" },
    },
    {
      icon: <CreditCard size={32} />,
      name: "Business Cards",
      description: "Professional networking cards",
      details:
        "A small stack of business cards for networking events and professional meetings. Clean design with contact information.",
      color: "#FFD700",
      position: { bottom: "25%", left: "35%" },
    },
  ]

  return (
    <section id="bag" className={styles.whatsInMyBag}>
      <div className={styles.container}>
        <h2 className={styles.title}>What's in My Bag</h2>
        <p className={styles.subtitle}>Hover over the items to discover what I carry daily</p>

        <div className={styles.bagContainer}>
          <div className={styles.bag}>
            <img src="/placeholder.svg?height=400&width=600" alt="My bag interior" className={styles.bagImage} />

            {bagItems.map((item, index) => (
              <div
                key={index}
                className={styles.bagItem}
                style={{
                  ...item.position,
                  backgroundColor: item.color,
                  transform: hoveredItem === index ? "scale(1.2)" : "scale(1)",
                  zIndex: hoveredItem === index ? 10 : 1,
                }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => setSelectedItem(index)}
              >
                <div className={styles.itemIcon}>{item.icon}</div>

                {hoveredItem === index && (
                  <div className={styles.itemTooltip}>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.itemsList}>
            <h3 className={styles.listTitle}>Items in my bag:</h3>
            <div className={styles.itemsGrid}>
              {bagItems.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.itemCard} ${hoveredItem === index ? styles.highlighted : ""}`}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => setSelectedItem(index)}
                >
                  <div className={styles.itemCardIcon} style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <div className={styles.itemCardInfo}>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Item Detail Modal */}
        {selectedItem !== null && (
          <div className={styles.modal} onClick={() => setSelectedItem(null)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={() => setSelectedItem(null)}>
                ×
              </button>

              <div className={styles.modalHeader}>
                <div className={styles.modalIcon} style={{ color: bagItems[selectedItem].color }}>
                  {bagItems[selectedItem].icon}
                </div>
                <h3 className={styles.modalTitle}>{bagItems[selectedItem].name}</h3>
              </div>

              <div className={styles.modalBody}>
                <p className={styles.modalDescription}>{bagItems[selectedItem].details}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

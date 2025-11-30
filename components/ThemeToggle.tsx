"use client"

import { Sun, Moon } from "lucide-react"
import styles from "./ThemeToggle.module.css"

interface ThemeToggleProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

export default function ThemeToggle({ darkMode, setDarkMode }: ThemeToggleProps) {
  return (
    <button className={styles.toggle} onClick={() => setDarkMode(!darkMode)} aria-label="Toggle theme">
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}

# Project Fixes & Improvements

## 🚨 Critical Fixes

- [ ] **Fix Theme Implementation**:
  - Remove `darkMode` state and `useEffect` from `app/page.tsx`.
  - Wrap children in `app/layout.tsx` with the `ThemeProvider`.
  - Update `ThemeToggle.tsx` to use the `useTheme` hook from `next-themes`.
- [ ] **Refactor Scroll Logic**:
  - Remove `window.addEventListener('scroll', ...)` from `app/page.tsx`.
  - Implement `IntersectionObserver` hook to detect which section is active without constant re-renders.

## ⚡ Optimization

- [ ] **Migrate Images**:
  - Replace `<img>` tags with `<Image />` from `next/image` in `Hero.tsx`, `Projects.tsx`, `Certifications.tsx`, etc.
  - Add `width` and `height` props or use `fill` for responsiveness.
- [ ] **Clean Up CSS**:
  - (Optional) Migrate custom `.module.css` styles to Tailwind utility classes to reduce CSS file size.

## 🛠 Functionality

- [ ] **Implement Contact Form**:
  - Connect the form in `Contact.tsx` to a service (e.g., Formspree) or create a Server Action to send emails.
- [ ] **Update Content**:
  - Replace the placeholder Resume URL in `Resume.tsx`.
  - Add actual project screenshots and descriptions.
  - Update `metadata` in `app/layout.tsx` with real SEO title and description.

## 📂 Code Structure

- [ ] **Extract Data**:
  - Move hardcoded arrays (e.g., `projects`, `skills`, `certifications`) out of components and into a separate `lib/data.ts` file for easier management.

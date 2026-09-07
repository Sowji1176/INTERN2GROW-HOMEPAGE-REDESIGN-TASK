# Intern2Grow Homepage Redesign

A professional UI/UX redesign of the Intern2Grow homepage, created as part of the UI/UX Designer internship task.

The redesign focuses on improving the homepage layout, visual hierarchy, navigation, responsiveness, usability, and overall user experience while preserving the core Intern2Grow information, programs, and branding.

## 🌐 Visit the Live Website

👉 Visit the Live Website: 

## 📌 Project Overview

This project is a homepage redesign for **Intern2Grow**, a virtual internship platform that provides free, remote virtual internships with real tasks.

The goal of the redesign was to create a cleaner, more structured, responsive, and user-friendly homepage that helps students and learners quickly understand the platform and discover relevant internship opportunities.

The redesign keeps the original Intern2Grow identity and core information while improving the way the content is organized and presented.

## 🎯 Design Goals

The main goals of the redesign were:

- Improve the overall homepage layout
- Create a clearer visual hierarchy
- Make important information easier to discover
- Improve navigation and content organization
- Present internship programs in an easy-to-scan format
- Make the page responsive across desktop, tablet, and mobile devices
- Provide a consistent light and dark mode experience
- Improve accessibility and keyboard interaction
- Create clear calls-to-action for users
- Make the homepage feel professional and suitable for students and job seekers

## ✨ Key Features

### 🏠 Homepage Hero

The hero section introduces Intern2Grow with:

- Free, remote, real-task messaging
- Main value proposition
- Internship exploration CTA
- Program exploration CTA
- Learner count
- Remote and free highlights
- Supporting program and certificate visual cards

### 📊 Trust & Highlights Section

A dedicated information strip highlights:

- 7,374+ learners
- Free participation
- Remote access
- Real tasks
- Flexible start
- Certificate on completion

### 💡 Why Intern2Grow

The homepage presents six key benefits:

- Real Tasks
- Fully Remote
- Flexible Start
- Completely Free
- Skill Development
- Certificate on Completion

Each benefit is presented through a dedicated content card for easier scanning.

### 💼 Internship Programs

The redesigned homepage dynamically displays internship programs using JavaScript.

Current programs include:

- UI/UX Designer
- Data Analyst
- UI Developer
- JavaScript Frontend Developer
- React.js Developer
- Graphic Designer
- AI Engineer
- Backend Developer
- ML Engineer

Each program card includes:

- Program name
- Description
- Relevant skills/tags
- Link to the corresponding Intern2Grow program

### 🔄 How It Works

The homepage explains the internship process through five steps:

1. Explore Programs
2. Choose an Internship
3. Complete Tasks
4. Submit Your Work
5. Receive Your Certificate

### 📚 Learning Ecosystem

The redesign also provides access to additional Intern2Grow resources:

- Courses
- Frontend Challenges
- Skill Tests
- Certificate Courses
- Blog

This helps users discover learning opportunities beyond internships.

### 💬 Testimonial Section

A community testimonial section provides social proof and presents an internship experience from a frontend developer.

### ℹ️ About Intern2Grow

The About section briefly explains Intern2Grow as a virtual internship programs provider offering free, remote virtual internships with real tasks.

### ❓ FAQ Accordion

The homepage includes an interactive FAQ section.

Users can expand questions to view answers.

The FAQ uses a single-open accordion behavior so that only one answer is expanded at a time.

### 🚀 Final Call-to-Action

A dedicated CTA section encourages users to:

- Explore Internships
- Explore Programs

### 🌙 Light & Dark Mode

The website supports both:

- Light Mode
- Dark Mode

Theme selection is stored using `localStorage`, allowing the selected theme to persist between visits.

If no preference has previously been saved, the website checks the user's system color preference.

### 📱 Responsive Design

The homepage is designed to adapt to:

- Desktop
- Laptop
- Tablet
- Mobile
- Small mobile screens

The layout adjusts navigation, grids, cards, spacing, typography, and footer columns according to screen size.

### 📱 Mobile Navigation

A dedicated mobile navigation menu is included with:

- Hamburger menu
- Slide-in navigation
- Overlay
- Programs links
- Resources links
- About
- FAQs
- Theme switcher
- Contact CTA
- Get Started CTA

### ♿ Accessibility & Interaction

The project includes several accessibility-focused interactions:

- Semantic navigation structure
- ARIA labels
- `aria-expanded` for dropdown navigation
- `aria-pressed` for theme controls
- Keyboard-accessible dropdown behavior
- Visible focus states
- Reduced-motion support
- Accessible button labels

### ✨ Scroll Reveal Animations

Content elements use lightweight scroll-reveal animations as they enter the viewport.

The implementation uses `IntersectionObserver` rather than continuously running scroll calculations.

### ⬆️ Back to Top

A floating back-to-top button appears after the user scrolls down the page.

Clicking the button smoothly returns the user to the top of the homepage.

## 🎨 UI/UX Design System

### Color Palette

The redesign uses a warm, professional visual palette.

#### Light Mode

| Purpose | Color |
|---|---|
| Background | `#FAF8F3` |
| Surface | `#FFFFFF` |
| Primary Plum | `#321A3D` |
| Coral Accent | `#E86A5B` |
| Lavender | `#E9DDF2` |
| Text | `#241C27` |
| Secondary Text | `#6F6573` |
| Border | `#E5DDE7` |

#### Dark Mode

| Purpose | Color |
|---|---|
| Background | `#120D16` |
| Surface | `#1D1423` |
| Primary Text | `#F8F4F9` |
| Coral Accent | `#F07B6D` |
| Lavender | `#BFA5D2` |
| Secondary Text | `#B8AEBB` |
| Border | `#392A40` |

## 🔤 Typography

The project uses two Google Fonts:

### Sora

Used primarily for:

- Headings
- Section titles
- Program titles
- Important numerical highlights

### Inter

Used primarily for:

- Body text
- Navigation
- Buttons
- Descriptions
- Supporting UI text

## 🧭 Navigation Structure

The desktop navigation includes:

- Home
- Programs
  - Basic Programs
  - Professional Programs
- Resources
  - Frontend Challenges
  - External Courses
  - Certificate Courses
  - Test Your Skills
  - Blog Articles
  - Open Positions
- About
- FAQs
- Theme Toggle
- Contact
- Get Started

The navigation links connect users to the appropriate Intern2Grow pages.

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- CSS Grid
- CSS Flexbox
- CSS Custom Properties
- Responsive Media Queries
- Google Fonts
- Intersection Observer API
- LocalStorage API
- Semantic HTML
- ARIA accessibility attributes

## 📁 Project Structure

INTERN2GROW-HOMEPAGE-REDESIGN/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
   └── images.jpg


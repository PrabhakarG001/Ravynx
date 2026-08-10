<div align="center">

# 🦅 Ravynx - Frontend

**AI-Powered Underwriting & Document Fraud Detection Platform**

Built for banks, NBFCs, and financial institutions demanding zero-error document verification.

[Live Demo](#) · [Report Bug](https://github.com/PrabhakarG001/Ravynx/issues) · [Request Feature](https://github.com/PrabhakarG001/Ravynx/issues)

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.1-38B2AC?style=for-the-badge&logo=tailwind-css)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript)

</div>

---

## 🚀 What is Ravynx Frontend?

The **Ravynx Frontend** is a modern, high-performance web interface built with React 18, Vite 6, and Tailwind CSS v4. It delivers real-time document analysis, risk scoring visualization, interactive PDF document viewing, and team management dashboards.

---

## 🛠️ Tech Stack & Dependencies

| Layer | Technology / Library | Purpose |
|---|---|---|
| **Core Framework** | React 18.3, Vite 6.3 | UI Framework & High-performance bundler |
| **Routing** | React Router v7 (`react-router`) | Client-side routing & navigation |
| **Styling & CSS** | Tailwind CSS v4, PostCSS, Emotion (`@emotion/react`, `@emotion/styled`) | Utility-first & component styling |
| **UI Primitives** | Radix UI (Accordion, Dialog, Dropdown, Tabs, Tooltip, Select, Switch, Slider) | Accessible unstyled UI primitives |
| **Icons & Design** | Lucide React, MUI Icons (`@mui/icons-material`), React Icons | Comprehensive icon libraries |
| **Animations** | Motion (Framer Motion 12), GSAP 3, tw-animate-css, Canvas Confetti | Smooth physics animations & micro-interactions |
| **Charts & Data** | Recharts 2 | Analytics & fraud detection charts |
| **PDF Handling** | PDF.js (`pdfjs-dist`), React PDF (`react-pdf`), React Dropzone | In-browser PDF viewing & upload handling |
| **Form & Inputs** | React Hook Form, Input OTP, date-fns | Form validation, date picking, OTP input |
| **Utilities** | Axios, clsx, tailwind-merge, class-variance-authority (`cva`) | HTTP client, class utility helpers |

---

## 📁 Frontend Directory Structure

```
Frontend/
├── public/                     # Public assets & favicons
├── src/
│   ├── assets/                 # Images & Figma assets
│   ├── components/
│   │   ├── CardNav/            # Navigation bar components
│   │   ├── Logo/               # Ravynx logo components
│   │   ├── cards/              # Metric & dashboard card widgets
│   │   ├── common/             # Badges, pills, indicators
│   │   ├── layout/             # Sidebar, Navbar, DashboardLayout
│   │   └── ui/                 # Buttons, Inputs, Neural Network visualizer
│   ├── context/                # React Context (Auth, Theme, App states)
│   ├── pages/                  # Page views & route targets
│   │   ├── Analysis/           # Document risk analysis page
│   │   ├── Analytics/          # Analytics & fraud metrics dashboard
│   │   ├── Audit/              # Audit trail log viewer
│   │   ├── Dashboard/          # Core summary dashboard
│   │   ├── Help/               # Help center & guides
│   │   ├── Landing/            # Marketing landing page
│   │   ├── Login/              # Authentication page
│   │   ├── Processing/         # Active document processing pipeline
│   │   ├── Profile/            # User settings & profile management
│   │   ├── Report/             # Report generation view
│   │   ├── Settings/           # Application & security settings
│   │   ├── Teams/              # Team member management
│   │   ├── Upload/             # Drag-and-drop document upload view
│   │   └── Viewer/             # Interactive document inspector
│   ├── services/               # API service definitions (`api.js`)
│   ├── styles/                 # Theme tokens, font imports & global CSS
│   ├── utils/                  # Helper functions & mock datasets
│   ├── App.jsx                 # Main routing component
│   └── main.jsx                # Application entry point
├── index.html                  # HTML template
├── package.json                # Dependencies and npm scripts
├── postcss.config.mjs          # PostCSS configuration
└── vite.config.js              # Vite config (path aliases `@` -> `src`)
```

---

## ⚡ Quick Start for Developers

### Prerequisites
- **Node.js** >= 18.x
- **npm** >= 9.x (or **pnpm** / **yarn**)

### Setup Instructions

1. **Navigate to Frontend Directory**
   ```bash
   cd Frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file inside `Frontend/`:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   Access the dev server at: `http://localhost:5173`

5. **Build for Production**
   ```bash
   npm run build
   ```

---

## 🤝 Collaborator Guide

- **Branching:** Use `feature/<name>` or `fix/<name>`.
- **Path Aliases:** Use `@/` to reference `src/` directory.
- **Component Standard:** Keep component `.jsx` and component-specific styles co-located in dedicated folders within `src/components/` or `src/pages/`.
- **API Services:** Define all network calls inside `src/services/api.js`.

---

## 📄 License

Proprietary Software. All rights reserved by **Ravynx Team**.
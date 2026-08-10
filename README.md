<div align="center">

# 🦅 Ravynx

**AI-Powered Underwriting & Document Fraud Detection Platform**

Built for banks, NBFCs, and financial institutions demanding zero-error document verification, 1-click multi-language support, and automated risk assessment.

[Live Demo](#) · [Report Bug](https://github.com/PrabhakarG001/Ravynx/issues) · [Request Feature](https://github.com/PrabhakarG001/Ravynx/issues)

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.1-38B2AC?style=for-the-badge&logo=tailwind-css)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript)
![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture & Structure](#-project-architecture--structure)
- [Getting Started for Developers](#-getting-started-for-developers)
  - [Prerequisites](#prerequisites)
  - [Installation & Setup](#installation--setup)
  - [Available Scripts](#available-scripts)
- [API & Backend Integration](#-api--backend-integration)
- [Collaborator & Contribution Guidelines](#-collaborator--contribution-guidelines)
- [License](#-license)

---

## 🚀 Overview

**Ravynx** is an enterprise-grade document verification and fraud detection platform. It leverages AI to instantly extract data, detect tampered or forged financial/legal documents, and produce transparent, explainable risk scores — allowing underwriters to make faster and safer lending decisions.

### 🎯 The Challenge
Manual verification of loan applications, bank statements, tax filings, and identity documents is slow, costly, and prone to oversight. Sophisticated document alterations often bypass manual inspection.

### 💡 The Ravynx Solution
- **Automated Extraction & Verification:** Instant AI analysis cross-referencing document fields.
- **Multi-Layer Anomaly Detection:** Pattern recognition catches micro-editing, font anomalies, and image manipulation.
- **Explainable AI Risk Scores:** Full transparency behind approval/rejection recommendations.
- **1-Click Multi-Language Support:** Instant 100% full-site translation between English and Hindi.
- **Zero-Trust Security Standard:** Isolated document processing pipeline designed for regulatory compliance.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🔍 **Smart Document Analysis** | Automated field extraction, validation, and data cross-referencing for financial records. |
| 🛡️ **AI Fraud Engine** | Multi-layered forgery detection pinpointing pixel-level modifications and layout inconsistencies. |
| 🌐 **1-Click Full-Site Multi-Language** | Toggle between **English** and **Hindi (हिंदी)** in 1-click across all pages, navbars, and footers via Google Translate DOM engine. |
| 🔑 **Dual Authentication Modes** | Dedicated `/login` and `/signup` routes with registration form (Full Name, Work Email, Phone Number, Company). |
| 📜 **Interactive Legal Modals** | Animated glassmorphism popups for Privacy Policy & Institutional Terms of Service. |
| 📊 **Explainable Risk Scoring** | Transparent confidence metrics and risk breakdown per uploaded document. |
| 📄 **Embedded PDF Viewer** | Interactive in-browser document viewer with zoom, page navigation, and highlight tools. |
| 🤖 **OpenRouter AI Copilot** | AI assistant for real-time document querying and interactive compliance checks. |
| 📈 **Analytics & Audit Trails** | Immutable activity logs, audit records, and operational analytics dashboard. |
| 👥 **Team Management** | Role-based collaboration, invite management, and access controls. |

---

## 🛠️ Tech Stack

### Frontend Core & Build Tooling
- **Framework:** [React 18](https://react.dev/) (Functional components, Hooks, Custom Contexts)
- **Build Tool:** [Vite 6](https://vitejs.dev/) (Lightning-fast HMR and optimized production bundler)
- **Routing:** [React Router v7](https://reactrouter.com/) (`react-router`)
- **Internationalization (i18n):** `LanguageContext.jsx` + Integrated Google Translate DOM Engine

### UI Components & Design System
- **Primitive Components:** [Radix UI](https://www.radix-ui.com/)
- **Material UI Icons & Components:** `@mui/material`, `@mui/icons-material`
- **Icon Sets:** Lucide React, React Icons
- **Notifications:** Sonner Toast system

### Styling & Utility Architecture
- **CSS Framework:** Tailwind CSS v4
- **Animations:** Motion (Framer Motion v12), GSAP 3
- **Data Visualization:** Recharts 2

---

## 📁 Project Architecture & Structure

```
Ravynx/
└── Frontend/
    ├── public/                   # Static assets (favicons, images, public media)
    ├── src/
    │   ├── components/           # Reusable UI primitives and layouts
    │   │   ├── CardNav/          # Mobile navigation island
    │   │   ├── LanguageSelector/ # Reusable 1-click English/Hindi dropdown
    │   │   ├── Logo/             # Brand logo & graphics
    │   │   ├── cards/            # Reusable card containers
    │   │   ├── layout/           # Sidebar, Navbar, DashboardLayout wrappers
    │   │   └── ui/               # Radix UI primitives, buttons, inputs
    │   ├── context/              # Global React Context providers (Auth, Language, Theme)
    │   ├── pages/                # Main application views & sub-routes
    │   │   ├── Analysis/         # Document analysis & risk breakdown
    │   │   ├── Analytics/        # Fraud statistics & performance dashboard
    │   │   ├── Audit/            # Immutable audit trail viewer
    │   │   ├── Dashboard/        # Main overview dashboard
    │   │   ├── Help/             # Knowledge base & documentation
    │   │   ├── Landing/          # Marketing & onboarding landing page
    │   │   ├── Login/            # User login & registration (/login & /signup)
    │   │   ├── Profile/          # User profile & credentials settings
    │   │   ├── Report/           # Underwriting report generator
    │   │   ├── Settings/         # Platform & API settings
    │   │   ├── Teams/            # Team collaboration & invite manager
    │   │   ├── Upload/           # Drag-and-drop document upload page
    │   │   └── Viewer/           # Interactive document inspector & viewer
    │   ├── services/             # API layer & HTTP Client requests (`api.js`)
    │   ├── styles/               # Global design tokens & CSS entry points
    │   ├── App.jsx               # Router & global provider layout
    │   └── main.jsx              # React DOM render entry point
    ├── index.html                # HTML entry template with Google Translate Engine initializer
    ├── package.json              # Project dependencies & scripts
    └── vite.config.js            # Vite bundler configuration
```

---

## 💻 Getting Started for Developers

### Prerequisites
- **Node.js:** `v18.x` or higher
- **npm:** `v9.x` or higher

### Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/PrabhakarG001/Ravynx.git
   cd Ravynx
   ```

2. **Navigate to the Frontend Directory**
   ```bash
   cd Frontend
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` to view the application.

---

## 👥 Authors & Team

Created by **Team DataMineX**:
- **Prabhakar Gupta** — Frontend Lead
- **Saksham Varshney** — Backend Lead

---

## 📄 License

This project is proprietary. All rights reserved by **Ravynx Team**.

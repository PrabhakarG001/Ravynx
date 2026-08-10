<div align="center">

# 🦅 Ravynx

**AI-Powered Underwriting & Document Fraud Detection Platform**

Built for banks, NBFCs, and financial institutions demanding zero-error document verification and automated risk assessment.

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
  - [Environment Variables](#environment-variables)
  - [Available Scripts](#available-scripts)
- [API & Backend Integration](#-api--backend-integration)
- [Collaborator & Contribution Guidelines](#-collaborator--contribution-guidelines)
  - [Git Workflow](#git-workflow)
  - [Code Conventions](#code-conventions)
- [Future Roadmap](#-future-roadmap)
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
- **Zero-Trust Security Standard:** Isolated document processing pipeline designed for regulatory compliance.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🔍 **Smart Document Analysis** | Automated field extraction, validation, and data cross-referencing for financial records. |
| 🛡️ **AI Fraud Engine** | Multi-layered forgery detection pinpointing pixel-level modifications and layout inconsistencies. |
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
- **Language:** JavaScript (ES6+ Modules)

### UI Components & Design System
- **Primitive Components:** [Radix UI](https://www.radix-ui.com/) (Accordion, Dialog, Dropdown Menu, Popover, Select, Tabs, Tooltip, Switch, Slider)
- **Material UI Icons & Components:** [@mui/material](https://mui.com/), `@mui/icons-material`
- **Icon Sets:** [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Drawers & Overlays:** [Vaul](https://vaul.emilkowal.ski/), [CMDK](https://cmdk.pacer.wit.ai/)
- **Notifications:** [Sonner](https://sonner.emilkowal.ski/) (Toast system)
- **Carousels & Splitters:** [Embla Carousel](https://www.embla-carousel.com/), `react-resizable-panels`

### Styling & Utility Architecture
- **CSS Framework:** [Tailwind CSS v4](https://tailwindcss.com/)
- **CSS Engine:** Custom CSS Modules & PostCSS (`postcss.config.mjs`)
- **CSS-in-JS Engine:** Emotion (`@emotion/react`, `@emotion/styled`)
- **Class Utilities:** `clsx`, `tailwind-merge`, `class-variance-authority` (`cva`)

### Animations & Graphics
- **Motion & Physics:** [Motion (Framer Motion v12)](https://motion.dev/)
- **GSAP:** [GreenSock Animation Platform 3](https://gsap.com/)
- **Effects:** Canvas Confetti, `tw-animate-css`

### Data Visualization & Document Processing
- **Analytics Charts:** [Recharts 2](https://recharts.org/)
- **PDF Rendering:** [PDF.js](https://mozilla.github.io/pdf.js/) (`pdfjs-dist`), [React PDF](https://react-pdf.org/)
- **Drag & Drop:** `react-dropzone`, `react-dnd` (HTML5 Backend)
- **Form Management:** `react-hook-form`, `input-otp`, `date-fns`

---

## 📁 Project Architecture & Structure

The repository organizes code into modular components and page views inside the `Frontend` package directory.

```
Ravynx/
└── Frontend/
    ├── public/                   # Static assets (favicons, images, public media)
    ├── src/
    │   ├── assets/               # Figma & component media assets
    │   ├── components/           # Reusable UI primitives and layouts
    │   │   ├── CardNav/          # Navigation components
    │   │   ├── Logo/             # Brand logo & graphics
    │   │   ├── cards/            # Reusable card containers
    │   │   ├── common/           # Common badges, status pills, indicators
    │   │   ├── layout/           # Sidebar, Navbar, DashboardLayout wrappers
    │   │   └── ui/               # Radix UI primitives, buttons, inputs, neural overlays
    │   ├── context/              # Global React Context providers (Auth, Theme, App state)
    │   ├── pages/                # Main application views & sub-routes
    │   │   ├── Analysis/         # Document analysis & risk breakdown page
    │   │   ├── Analytics/        # Fraud statistics & performance dashboard
    │   │   ├── Audit/            # Immutable audit trail viewer
    │   │   ├── Dashboard/        # Main overview dashboard
    │   │   ├── Help/             # Knowledge base & platform documentation
    │   │   ├── Landing/          # Marketing & onboarding landing page
    │   │   ├── Login/            # User authentication & registration
    │   │   ├── Processing/       # Document processing pipeline view
    │   │   ├── Profile/          # User profile & credentials settings
    │   │   ├── Report/           # Underwriting report generator
    │   │   ├── Settings/         # Platform & API settings
    │   │   ├── Teams/            # Team collaboration & invite manager
    │   │   ├── Upload/           # Drag-and-drop document upload page
    │   │   └── Viewer/           # Interactive document inspector & viewer
    │   ├── services/             # API layer & HTTP Client requests (`api.js`)
    │   ├── styles/               # Global design tokens, typography & CSS entry points
    │   │   ├── fonts.css
    │   │   ├── globals.css
    │   │   ├── index.css
    │   │   ├── tailwind.css
    │   │   └── theme.css
    │   ├── utils/                # Helper utilities, formatters, and mock fallbacks
    │   ├── App.jsx               # Main router & app layout container
    │   └── main.jsx              # React DOM render entry point
    ├── index.html                # HTML template entry
    ├── package.json              # Project dependencies & scripts
    ├── postcss.config.mjs        # PostCSS configuration
    └── vite.config.js            # Vite bundler configuration (includes `@/` alias)
```

> **Note on Path Aliasing:** Vite is pre-configured with the `@` alias pointing directly to `src/`. For example, `import { loginApi } from '@/services/api'` resolves to `src/services/api.js`.

---

## 💻 Getting Started for Developers

Follow these steps to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed on your development environment:
- **Node.js:** `v18.x` or higher (Download from [nodejs.org](https://nodejs.org/))
- **npm:** `v9.x` or higher (comes bundled with Node.js) or **pnpm** / **yarn**

Verify installation:
```bash
node -v
npm -v
```

### Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/PrabhakarG001/Ravynx.git
   cd Ravynx
   ```

2. **Navigate to the Frontend Directory**
   > ⚠️ **Important:** All application dependencies and source code reside within the `Frontend/` folder.
   ```bash
   cd Frontend
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Set Up Environment Variables**
   Create a `.env` file in the `Frontend/` directory:
   ```env
   # API Base URL (defaults to http://localhost:5000/api if omitted)
   VITE_API_URL=http://localhost:5000/api
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` to view the running application.

---

### Available Scripts

Inside `Frontend/`, you can execute:

| Command | Action |
|---|---|
| `npm run dev` | Launches Vite local development server with Hot Module Replacement (HMR). |
| `npm run build` | Bundles and optimizes the production build output into `Frontend/dist`. |

---

## 🔌 API & Backend Integration

The frontend communicates with backend APIs via `Frontend/src/services/api.js`.

### Authentication Flow
- Auth endpoints (`/auth/login`, `/auth/register`, `/auth/me`) interact with the backend API.
- Upon successful login, JWT tokens are stored in `localStorage` under the key `ravynx_token`.
- Every outgoing request automatically attaches the Bearer header: `Authorization: Bearer <ravynx_token>`.

### Primary API Endpoints Covered
- **Auth:** `loginApi`, `registerApi`, `getMeApi`, `updateProfileApi`
- **Documents:** `getDocumentsApi`, `uploadDocumentApi`, `analyzeDocumentApi`, `updateDocumentStatusApi`, `deleteDocumentApi`
- **AI Copilot:** `askAiAssistantApi` (connects to OpenRouter AI services)
- **Analytics & Audit:** `getKpisApi`, `getAuditLogsApi`
- **Teams & Settings:** `getTeamMembersApi`, `inviteTeamMemberApi`, `getSettingsApi`, `updateSettingsApi`

---

## 👥 Collaborator & Contribution Guidelines

We welcome contributions from developers and collaborators! Please follow these conventions to maintain clean code and smooth collaboration.

### Git Workflow

1. **Fork or Branch from `main`**
   Always create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/document-comparison
   # or for bug fixes:
   git checkout -b fix/pdf-viewer-rendering
   ```

2. **Commit Message Format**
   Keep commit messages descriptive and structured:
   - `feat: add document comparison view in viewer`
   - `fix: resolve responsive table overflow on analytics page`
   - `docs: update API integration guide in README`

3. **Submitting a Pull Request (PR)**
   - Push your branch to GitHub: `git push origin feature/your-feature-name`
   - Open a Pull Request targeting the `main` branch.
   - Provide a clear description of the changes and link any relevant issue numbers.

### Code Conventions

- **Component Organization:** Each page/feature component should be housed in its own folder inside `src/pages/` or `src/components/`, accompanied by relevant `.jsx` and component-specific styles if applicable.
- **Import Alias:** Use `@/` for cleaner relative imports (e.g., `import { Button } from '@/components/ui/Button'`).
- **Styling Standards:** Leverage Tailwind utility classes alongside clean custom CSS tokens defined in `src/styles/`.
- **Linting & Code Cleanliness:** Remove unused imports, console log statements, and ensure error handling for all API requests.

---

## 🔮 Future Roadmap

- [ ] Complete Node.js / Python FastAPI ML backend service integration
- [ ] Real-time document processing updates using WebSockets / Server-Sent Events (SSE)
- [ ] Multi-language document parsing & OCR (Optical Character Recognition)
- [ ] Advanced forgery detection ML model for handwriting analysis
- [ ] Role-Based Access Control (RBAC) with Enterprise Single Sign-On (SSO)
- [ ] Exportable audit reports (PDF & CSV formats)

---

## 📄 License

This project is proprietary. All rights reserved by **Ravynx Team**.

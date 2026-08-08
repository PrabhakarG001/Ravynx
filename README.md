<div align="center">

# Ravynx

**AI-Powered Underwriting & Document Fraud Detection Platform**

Built for banks, NBFCs, and financial institutions that demand zero-error document verification.

[Live Demo](#) · [Report Bug](https://github.com/PrabhakarG001/Ravynx/issues) · [Request Feature](https://github.com/PrabhakarG001/Ravynx/issues)

</div>

---

## 🚀 What is Ravynx?

Ravynx is an intelligent document verification and fraud detection platform designed for the financial sector. It uses AI to instantly analyze financial and legal documents, detect fraud patterns, and generate explainable risk scores — enabling faster, safer lending decisions.

### The Problem
Traditional document verification is manual, slow, and error-prone. Fraudulent documents slip through human review, costing institutions millions.

### Our Solution
Ravynx automates the entire underwriting pipeline with:
- **AI-powered document analysis** that catches what humans miss
- **Real-time fraud detection** with explainable risk scoring
- **Zero data retention** architecture for regulatory compliance

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🔍 **Smart Document Analysis** | AI extracts, validates, and cross-references data from financial documents |
| 🛡️ **Fraud Detection Engine** | Multi-layer anomaly detection with pattern recognition |
| 📊 **Explainable Risk Scores** | Transparent scoring with clear reasoning for every decision |
| 🏛️ **Enterprise Grade Security** | Zero data retention, isolated processing, tamper-evident audit logs |
| 📈 **Analytics Dashboard** | Real-time insights into processing volumes, fraud rates, and team performance |
| 👥 **Team Collaboration** | Role-based access with audit trails for compliance |
| 📋 **Audit Trail** | Complete, tamper-proof history of every document processed |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, Vite 6 |
| **Styling** | Tailwind CSS v4, Custom CSS |
| **Animations** | Framer Motion, GSAP |
| **Charts** | Recharts |
| **UI Components** | Radix UI, Lucide Icons |
| **Routing** | React Router v7 |
| **PDF Handling** | PDF.js, React PDF |

---

## 📁 Project Structure

```
ravynx/
├── public/                     # Static assets
│   ├── assets/                 # Images and media
│   └── favicon.jpg
├── src/
│   ├── components/
│   │   ├── CardNav/            # Mobile navigation component
│   │   ├── Logo/               # Brand logo component
│   │   ├── cards/              # Reusable card components
│   │   ├── common/             # Shared UI primitives (Badge, etc.)
│   │   ├── layout/             # Layout components (Sidebar, Navbar, DashboardLayout)
│   │   └── ui/                 # UI primitives (Buttons, Inputs, NeuralNetwork)
│   ├── pages/
│   │   ├── Analysis/           # Document analysis results
│   │   ├── Analytics/          # Platform analytics dashboard
│   │   ├── Audit/              # Audit trail viewer
│   │   ├── Dashboard/          # Main dashboard
│   │   ├── Help/               # Help & documentation
│   │   ├── Landing/            # Marketing landing page
│   │   ├── Login/              # Authentication
│   │   ├── Processing/         # Document processing view
│   │   ├── Profile/            # User profile management
│   │   ├── Report/             # Report generation
│   │   ├── Settings/           # App settings
│   │   ├── Teams/              # Team management
│   │   ├── Upload/             # Document upload
│   │   └── Viewer/             # Document viewer
│   ├── services/               # API service layer
│   ├── styles/                 # Global styles & theme
│   │   ├── fonts.css
│   │   ├── globals.css
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   └── theme.css
│   ├── utils/                  # Utility functions & mock data
│   ├── App.jsx                 # Root application component
│   └── main.jsx                # Entry point
├── index.html
├── package.json
├── postcss.config.mjs
└── vite.config.js
```

> Every page has its own folder with a dedicated `.jsx` and `.css` file.
> Every component follows the same convention.

---

## ⚡ Quick Start

### Prerequisites
- **Node.js** >= 18.x
- **npm** >= 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/PrabhakarG001/Ravynx.git
cd Ravynx

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────┐
│              Landing Page               │
│         (Marketing / Onboarding)        │
└──────────────┬──────────────────────────┘
               │ Login
┌──────────────▼──────────────────────────┐
│           Dashboard Layout              │
│  ┌──────────┐  ┌──────────────────────┐ │
│  │ Sidebar  │  │    Page Content      │ │
│  │          │  │  ┌────────────────┐  │ │
│  │ • Dash   │  │  │   Upload →     │  │ │
│  │ • Upload │  │  │   Processing → │  │ │
│  │ • Viewer │  │  │   Analysis →   │  │ │
│  │ • Audit  │  │  │   Report       │  │ │
│  │ • Teams  │  │  └────────────────┘  │ │
│  └──────────┘  └──────────────────────┘ │
└─────────────────────────────────────────┘
```

---

## 🔮 Future Scope

- [ ] Backend API integration (Node.js / Python ML pipeline)
- [ ] Real-time document processing with WebSockets
- [ ] Multi-language document support
- [ ] Advanced ML model for handwriting fraud detection
- [ ] Role-based access control (RBAC) with SSO
- [ ] Mobile-responsive PWA
- [ ] Webhook integrations for third-party systems

---

## 👥 Team

Built with ❤️ by the Ravynx team for smarter, safer financial document processing.

---

## 📄 License

This project is proprietary. All rights reserved.
# 🚓 KSP दृष्टि AI (KSP Drishti AI)
### Intelligent Conversational AI & Crime Analytics Platform for Karnataka State Police

[![React](https://img.shields.io/badge/React-19.2.7-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.1.1-646CFF?style=for-the-badge&logo=vite)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.3-38BDF8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Leaflet](https://img.shields.io/badge/Leaflet_GIS-1.9.4-199900?style=for-the-badge&logo=leaflet)](https://leafletjs.com/)
[![Oxlint](https://img.shields.io/badge/Oxlint-1.71.0-FFC107?style=for-the-badge)](https://oxc.rs/)
[![Compliance](https://img.shields.io/badge/Compliance-DPDP_Act_2023-emerald?style=for-the-badge)](https://meity.gov.in/)

---

## 📋 Table of Contents
- [Executive Overview](#-executive-overview)
- [Key Modules & Features](#-key-modules--features)
- [Bilingual Support (English & Kannada)](#-bilingual-support-english--kannada)
- [Role-Based Access Control (RBAC)](#-role-based-access-control-rbac)
- [Technology Stack](#-technology-stack)
- [Project Architecture & Directory Structure](#-project-architecture--directory-structure)
- [Prerequisites](#-prerequisites)
- [Setup & Execution Instructions](#-setup--execution-instructions)
  - [1. Clone / Navigate to Directory](#1-clone--navigate-to-directory)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Start Development Server](#3-start-development-server)
  - [4. Production Build](#4-production-build)
  - [5. Preview Production Build](#5-preview-production-build)
  - [6. Code Quality & Linting](#6-code-quality--linting)
- [NPM Scripts Reference](#-npm-scripts-reference)
- [Security & Governance (DPDP Act 2023)](#-security--governance-dpdp-act-2023)
- [License & Support](#-license--support)

---

## 🚔 Executive Overview

**KSP Drishti AI** (ಕರ್ನಾಟಕ ರಾಜ್ಯ ಪೊಲೀಸ್ - ಕೆ.ಎಸ್.ಪಿ ದೃಷ್ಟಿ ಎಐ) is an enterprise decision support and intelligence web platform engineered for law enforcement agencies, crime analysts, police superintendents, and policymakers in Karnataka. 

Integrated directly with **ICJS 2.0 (Inter-operable Criminal Justice System)** and **MCCTNS (Modernized Crime and Criminal Tracking Network & Systems)**, KSP Drishti AI indexing over **1.42 Million FIR records (2018–2026)** to deliver real-time RAG (Retrieval-Augmented Generation) query matching, criminal network visualization, geospatial crime hotspot analytics, legal section mapping under Bharatiya Nyaya Sanhita (BNS), and strict audit logging compliant with the **DPDP (Digital Personal Data Protection) Act 2023**.

---

## 🌟 Key Modules & Features

### 1. 🤖 AI Copilot & Conversational RAG (`CopilotModule.jsx`)
- **Natural Language MO Search**: Query crime patterns, modus operandi (MO), suspect descriptions, and vehicle signatures across millions of FIRs.
- **BNS Section Recommendation**: Automated legal mapping to **Bharatiya Nyaya Sanhita (BNS)** clauses (e.g., BNS Sec 304 Snatching, Sec 310(2) Dacoity) with confidence scores.
- **Auto SQL & Vector Provenance**: Transparency via generated SQL queries and vector database (FAISS/Cosine similarity) retrieval stats with cryptographic CCTNS hashes.
- **Actionable Tactical Leads**: AI-recommended investigative next steps (IMEI tower dump subpoenas, pawn shop checks, court bail condition verifications).

### 2. 🕸️ Crime Network Graph Visualizer (`NetworkGraphModule.jsx`)
- **Neo4j-Powered Graph Analytics**: Interactive visual node-link network mapping relationships between habitual suspects, crime syndicates, linked FIRs, modus operandi, and financial mule bank accounts.
- **Node Filtering & Risk Metrics**: Real-time filtering by node categories (`SUSPECT`, `FIR`, `MULE_BANK_ACC`, `VEHICLE`) with embedded risk scores.

### 3. 🗺️ GIS Map & Spatial Hotspot Analytics (`GISMapModule.jsx`)
- **Interactive Leaflet Mapping**: Geospatial crime clustering across Karnataka police divisions (Indiranagar, Jayanagar, Whitefield, Mysuru, Hubballi, etc.).
- **Hotspot Heatmaps & Forecasting**: Visual indicators for crime density, patrol route recommendations, and temporal surge predictions (e.g., Mysuru Dasara festival burglary risk).

### 4. 👤 Offender Profiling & Dossiers (`OffenderProfileModule.jsx`)
- **Habitual Offender Intelligence**: Deep dossiers for known offenders (e.g., *Ramesh @ Bullet Ramesh*), tracking criminological risk scores, MO history, gang affiliations, and active bail conditions at 1st ACMM Court.

### 5. 📁 Investigator Workspace (`InvestigatorWorkspaceModule.jsx`)
- **Digital Case Binder**: Case management interface for Sub-Inspectors and Inspectors to assemble FIR details, organize witness statements, tag evidence hashes, and export comprehensive investigation briefs.

### 6. 🔒 Audit & DPDP Governance (`AuditGovernanceModule.jsx`)
- **Compliance Dashboard**: Full compliance with the **DPDP Act 2023** and Karnataka State Police data access protocols.
- **Audit Logs & Hash Lineage**: Immutable logging of all user queries, prompt history, data access levels, role escalations, and SHA-256 evidence integrity hashes.

---

## 🌐 Bilingual Support (English & Kannada)

KSP Drishti AI features seamless state-wide localization support:
- **English (`en`)**: Full professional law enforcement interface.
- **Kannada (`kn` - ಕನ್ನಡ)**: Native support with custom typography using Google Fonts (`Noto Sans Kannada`), covering navigation, query prompts, summaries, and legal terminology.

---

## 🛡️ Role-Based Access Control (RBAC)

The platform enforces 4 strict operational security hierarchy levels:

| Role ID | Title / Rank | Access Level | Permissions & View Scopes |
| :--- | :--- | :---: | :--- |
| `INVESTIGATOR` | Sub-Inspector / Inspector | **Level 1** | Local station FIR search, suspect interrogation notes, active case binder |
| `ANALYST` | Crime Analyst | **Level 2** | Cross-station network graphs, MO pattern matching, trend analytics |
| `SUPERVISOR` | Superintendent of Police (SP) | **Level 3** | District-wide GIS heatmaps, squad deployment, bail violation alerts |
| `POLICYMAKER` | Joint Secretary (Home Dept) | **Level 4** | State-level crime metrics, policy recommendations, DPDP audit overview |

---

## 🛠️ Technology Stack

- **Frontend Core**: React 19 (`react`, `react-dom`)
- **Build System**: Vite 8 (`vite`, `@vitejs/plugin-react`)
- **Styling & Layout**: Tailwind CSS v4 (`@tailwindcss/vite`, `tailwindcss`)
- **Geospatial Mapping**: Leaflet v1.9.4 (`leaflet`)
- **Charts & Data Visualization**: Recharts v3.10.0 (`recharts`)
- **Icons**: Lucide React (`lucide-react`)
- **Code Quality & Linter**: Oxlint v1.71.0 (`oxlint`)
- **Typography**: Google Fonts (*Outfit*, *Plus Jakarta Sans*, *Noto Sans Kannada*, *JetBrains Mono*)

---

## 📁 Project Architecture & Directory Structure

```
c:/Datathon Zoho/
├── .gitignore                # Git ignore configuration
├── .oxlintrc.json            # Oxlint code quality rules
├── index.html                # Main HTML template with Google Fonts & Leaflet CSS
├── package.json              # Project dependencies and script definitions
├── package-lock.json         # Locked dependency versions
├── vite.config.js            # Vite build configuration with React & Tailwind plugins
├── public/                   # Public static assets
└── src/
    ├── App.jsx               # Main application container & tab routing logic
    ├── App.css               # Application custom styles
    ├── index.css             # Tailwind v4 directives & root font declarations
    ├── main.jsx              # React application entry point
    ├── components/           # UI Modules & Navigation
    │   ├── TopNavbar.jsx     # Header bar with language, role switcher & tab navigation
    │   ├── Header.jsx        # Platform system status banner
    │   ├── Sidebar.jsx       # Side navigation bar
    │   ├── CopilotModule.jsx # Conversational RAG AI Copilot
    │   ├── NetworkGraphModule.jsx # Neo4j crime network visualizer
    │   ├── GISMapModule.jsx  # Leaflet spatial map & hotspot analytics
    │   ├── OffenderProfileModule.jsx # Criminal dossier & risk score module
    │   ├── InvestigatorWorkspaceModule.jsx # Case binder management
    │   └── AuditGovernanceModule.jsx # DPDP Act 2023 audit & governance logs
    └── data/
        └── mockData.js       # System schemas, preset RAG queries, graph nodes, GIS hotspots & audit records
```

---

## 💻 Prerequisites

Before running this project, make sure you have the following installed on your machine:

1. **Node.js**: `v18.0.0` or higher (Recommended: `v20.x` or `v22.x LTS`)
   - Check version: `node -v`
2. **npm**: `v9.0.0` or higher (comes bundled with Node.js)
   - Check version: `npm -v`
3. **Web Browser**: Modern browser supporting WebGL and ES Modules (Google Chrome, Microsoft Edge, Mozilla Firefox, or Brave).

---

## ⚙️ Setup & Execution Instructions

Follow these step-by-step instructions to setup, run, build, and maintain the project locally:

### 1. Clone / Navigate to Directory
Open your terminal (PowerShell, Command Prompt, or Bash) and navigate to the project directory:
```bash
cd "c:\Datathon Zoho"
```

### 2. Install Dependencies
Run `npm install` to download and install all required Node.js packages (`react`, `vite`, `leaflet`, `recharts`, `lucide-react`, `tailwindcss`, etc.):
```bash
npm install
```

### 3. Start Development Server
To launch the interactive local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
- **Local Access URL**: `http://localhost:5173` (or the port specified in terminal output).
- The web app will open in development mode with active live-reloading upon file modifications.

### 4. Production Build
To compile and bundle the project into optimized static production assets:
```bash
npm run build
```
- The built production distribution will be generated in the `./dist` folder.
- Bundles include HTML, CSS, JavaScript chunks, and optimized assets ready for web server deployment (Nginx, IIS, Vercel, Netlify, AWS S3).

### 5. Preview Production Build
To locally test and verify the output of the production build:
```bash
npm run preview
```
- **Preview Access URL**: `http://localhost:4173`

### 6. Code Quality & Linting
To run the high-speed Oxlint linter across all React and JavaScript source files:
```bash
npm run lint
```

---

## 📜 NPM Scripts Reference

| Script Command | Description |
| :--- | :--- |
| `npm run dev` | Launches Vite local development server at `http://localhost:5173` |
| `npm run build` | Compiles production assets into `./dist` directory |
| `npm run preview` | Starts local preview server for built `./dist` assets |
| `npm run lint` | Runs `oxlint` static code analysis for code quality & unused variables |

---

## 🔐 Security & Governance (DPDP Act 2023)

- **Data Anonymization**: PII (Personally Identifiable Information) such as Aadhaar numbers and exact residential addresses are masked at levels below Level 3 (Supervisor).
- **Cryptographic Provenance**: Every AI recommendation carries a verifiable SHA-256/CCTNS data hash timestamped against ICJS 2.0 servers.
- **Audit Lineage**: Non-repudiable audit logs capture query history, role context, and IP signatures in accordance with Indian Cyber Law standards.

---

## 🤝 Support & Governance

- **System Administrator**: Karnataka State Police IT & Crime Analytics Cell (KSP Tech Wing)
- **Integration**: ICJS 2.0 / CCTNS Live API Gateway
- **Portal Version**: Version 5.0 Light Enterprise

---
*Developed for Karnataka State Police Decision Support & Intelligence Operations.*
#   D a t a t h o n  
 g i t  
 i n i t  
 g i t  
 a d d  
 .  
 . m d  
 g i t  
 c o m m i t  
 - m  
 f i r s t   c o m m i t  
 g i t  
 b r a n c h  
 - M  
 m a i n  
 g i t  
 r e m o t e  
 a d d  
 o r i g i n  
 h t t p s : / / g i t h u b . c o m / a r u l p e r i y a n n a g o u n d e r - c o l l a b / D a t a t h o n . g i t  
 g i t  
 p u s h  
 - u  
 o r i g i n  
 m a i n  
 #   D a t a t h o n  
 
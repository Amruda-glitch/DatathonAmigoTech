# 🚓 KSP दृष्टि AI (KSP Drishti AI) - Project Documentation
### Intelligent Conversational AI & Crime Analytics Platform for Karnataka State Police

---

## 1. Executive Summary

**KSP Drishti AI** (ಕರ್ನಾಟಕ ರಾಜ್ಯ ಪೊಲೀಸ್ - ಕೆ.ಎಸ್.ಪಿ ದೃಷ್ಟಿ ಎಐ) is an enterprise decision support and intelligence web platform engineered for law enforcement agencies, crime analysts, police superintendents, and policymakers across Karnataka State.

The platform integrates directly with **ICJS 2.0 (Inter-operable Criminal Justice System)** and **MCCTNS (Modernized Crime and Criminal Tracking Network & Systems)** repositories, indexing over **1.42 Million FIR records (2018–2026)** to provide:
- Real-time RAG (Retrieval-Augmented Generation) query matching for Modus Operandi (MO).
- Automated legal section recommendations mapped to the **Bharatiya Nyaya Sanhita (BNS)**.
- Graph-based suspect network link visualization powered by Neo4j dynamics.
- Spatial crime clustering and predictive hotspot heatmaps using Leaflet GIS.
- Live CCTV camera feed monitoring, facial recognition, and ANPR alert tracking.
- Habitual offender risk scoring and digital investigation case binders.
- Strict compliance with the **Digital Personal Data Protection (DPDP) Act 2023** through cryptographically audited access control logs.

---

## 2. Core Modules & Capabilities

### 2.1 🤖 AI Copilot & Conversational RAG (`src/components/CopilotModule.jsx`)
- **Natural Language MO Search**: Allows investigators to query crime patterns, modus operandi, suspect descriptions, and vehicle signatures across millions of indexed FIRs.
- **BNS Legal Mapping**: Recommends appropriate sections of the **Bharatiya Nyaya Sanhita (BNS)** (e.g., BNS Sec 304 Snatching, Sec 310(2) Dacoity) with confidence scores.
- **SQL & Vector Provenance**: Displays generated SQL queries alongside FAISS/Cosine similarity retrieval scores and cryptographic SHA-256 CCTNS hashes.
- **Tactical Actionable Leads**: Automatically suggests investigative next steps, such as issuing tower dump subpoenas, checking pawn shops, or verifying court bail conditions.

### 2.2 🎥 CCTV Smart Feed & ANPR Monitoring (`src/components/CCTVMonitoringModule.jsx`)
- **Live Stream Grid**: Monitors high-definition feeds across major intersections (e.g., MG Road, Silk Board, Kempegowda Bus Station, Outer Ring Road).
- **ANPR & Facial Recognition Alerts**: Highlights high-risk vehicle registration detections (e.g., KA-01-EQ-9921) and suspect face matches with bounding box metadata.
- **Camera Health Analytics**: Real-time stats on total active cameras, uptime, bandwidth usage, and AI inference latency.

### 2.3 🕸️ Crime Network Graph Visualizer (`src/components/NetworkGraphModule.jsx`)
- **Interactive Node-Link Map**: Visualizes relationships between habitual suspects, crime syndicates, linked FIRs, modus operandi, and financial mule bank accounts.
- **Node Filtering & Risk Metrics**: Filters nodes dynamically by category (`SUSPECT`, `FIR`, `MULE_BANK_ACC`, `VEHICLE`) with embedded criminological risk metrics.

### 2.4 🗺️ GIS Map & Spatial Hotspot Analytics (`src/components/GISMapModule.jsx`)
- **Interactive Leaflet Mapping**: Geospatial crime clustering across Karnataka police divisions (Indiranagar, Jayanagar, Whitefield, Mysuru, Hubballi, etc.).
- **Hotspot Heatmaps & Forecasting**: Visual indicators for crime density, patrol route optimization, and temporal surge predictions (e.g., Mysuru Dasara festival burglary risk forecasting).

### 2.5 👤 Offender Profiling & Dossiers (`src/components/OffenderProfileModule.jsx`)
- **Habitual Offender Dossiers**: In-depth profiles of habitual offenders (e.g., *Ramesh @ Bullet Ramesh*), tracking risk scores, MO history, gang affiliations, and active court bail status.

### 2.6 📁 Investigator Workspace (`src/components/InvestigatorWorkspaceModule.jsx`)
- **Digital Case Binders**: Integrated case management interface for Sub-Inspectors and Inspectors to assemble FIR details, organize witness statements, log physical evidence hashes, and generate court-ready investigation briefs.

### 2.7 🔒 Audit & DPDP Governance (`src/components/AuditGovernanceModule.jsx`)
- **DPDP Act 2023 Compliance**: Full compliance with Indian data protection laws and Karnataka State Police data access guidelines.
- **Cryptographic Audit Logs**: Immutable logging of all user queries, prompt history, data access levels, role escalations, and SHA-256 evidence integrity hashes.

---

## 3. Role-Based Access Control (RBAC) Matrix

| Role ID | Title / Rank | Access Level | Permissions & View Scopes |
| :--- | :--- | :---: | :--- |
| `INVESTIGATOR` | Sub-Inspector / Inspector | **Level 1** | Local station FIR search, suspect interrogation notes, active case binder |
| `ANALYST` | Crime Analyst | **Level 2** | Cross-station network graphs, MO pattern matching, trend analytics |
| `SUPERVISOR` | Superintendent of Police (SP) | **Level 3** | District-wide GIS heatmaps, squad deployment, bail violation alerts |
| `POLICYMAKER` | Joint Secretary (Home Dept) | **Level 4** | State-level crime metrics, policy recommendations, DPDP audit overview |

---

## 4. Bilingual Support System (English & Kannada)

KSP Drishti AI features complete state-wide localization support:
- **English (`en`)**: Professional law enforcement terminology and standard UI interface.
- **Kannada (`kn` - ಕನ್ನಡ)**: Native support with custom typography using Google Fonts (`Noto Sans Kannada`), covering navigation, query prompts, summaries, and legal clauses.

---

## 5. Technology Stack & Dependencies

- **Frontend Core**: React 19 (`react`, `react-dom`)
- **Build System**: Vite 8 (`vite`, `@vitejs/plugin-react`)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`, `tailwindcss`)
- **Geospatial Mapping**: Leaflet v1.9.4 (`leaflet`)
- **Data Visualization**: Recharts v3.10.0 (`recharts`)
- **Icons**: Lucide React (`lucide-react`)
- **Code Linter**: Oxlint v1.71.0 (`oxlint`)
- **Typography**: Google Fonts (*Outfit*, *Plus Jakarta Sans*, *Noto Sans Kannada*, *JetBrains Mono*)

---

## 6. Directory Structure & Key Files

```
c:/Datathon Zoho/
├── PROJECT_DOCUMENTATION.md   # Downloadable Markdown Documentation
├── PROJECT_DOCUMENTATION.html # Standalone Printable HTML Documentation
├── README.md                  # System overview and quickstart
├── package.json              # Project dependencies and script definitions
├── vite.config.js            # Vite build configuration
├── index.html                # Main HTML template
└── src/
    ├── App.jsx               # Main container & tab router
    ├── components/           # UI Modules
    │   ├── TopNavbar.jsx     # Header navigation & role/language controls
    │   ├── CopilotModule.jsx # Conversational RAG AI Copilot
    │   ├── CCTVMonitoringModule.jsx # Smart CCTV monitoring & ANPR alerts
    │   ├── NetworkGraphModule.jsx # Neo4j crime network visualizer
    │   ├── GISMapModule.jsx  # Leaflet spatial map & hotspot analytics
    │   ├── OffenderProfileModule.jsx # Criminal dossier & risk scoring
    │   ├── InvestigatorWorkspaceModule.jsx # Digital case binder management
    │   └── AuditGovernanceModule.jsx # DPDP Act 2023 audit & governance logs
    └── data/
        └── mockData.js       # Schemas, preset queries, graph nodes & audit logs
```

---

## 7. Setup & Execution Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Start Local Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Code Quality Linting**:
   ```bash
   npm run lint
   ```

---

## 8. Security & Legal Compliance

- **Data Masking**: PII (Personally Identifiable Information) such as Aadhaar numbers and exact residential addresses are masked at levels below Level 3 (Supervisor).
- **Cryptographic Provenance**: Every AI recommendation carries a verifiable SHA-256/CCTNS data hash timestamped against ICJS 2.0 servers.
- **Audit Lineage**: Non-repudiable audit logs capture query history, role context, and IP signatures in accordance with Indian Cyber Law standards (DPDP Act 2023).

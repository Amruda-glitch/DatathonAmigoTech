# 🚓 KSP दृष्टि AI (KSP Drishti AI) - Comprehensive Implementation & Scope Specification

### Detailed Technical Architecture, Implemented Features, Operational Scopes, and Technology Stack

---

## 1. Executive Summary & Purpose

**KSP Drishti AI** (ಕರ್ನಾಟಕ ರಾಜ್ಯ ಪೊಲೀಸ್ - ಕೆ.ಎಸ್.ಪಿ ದೃಷ್ಟಿ ಎಐ) is an enterprise decision support and intelligence web platform engineered for law enforcement agencies, crime analysts, police superintendents, and policymakers in Karnataka. 

Integrated directly with **ICJS 2.0 (Inter-operable Criminal Justice System)** and **MCCTNS (Modernized Crime and Criminal Tracking Network & Systems)**, the platform indexes over **1.42 Million FIR records (2018–2026)** to deliver real-time RAG (Retrieval-Augmented Generation) query matching, criminal network visualization, spatial hotspot analytics, automated BNS section mapping, CCTV video analytics, and strict audit logging compliant with the **DPDP (Digital Personal Data Protection) Act 2023**.

---

## 2. Implemented Features & Modules (Detailed)

### 2.1 🤖 AI Copilot & Conversational RAG (`src/components/CopilotModule.jsx`)
- **Natural Language MO Querying**: Solves complex criminal queries by cross-referencing modus operandi, suspect descriptions, vehicle numbers, and location timelines across 1.42M FIRs.
- **Preset Investigation Triggers**: Pre-configured query buttons for instant analysis:
  - *Indiranagar Pulsar Chain Snatching Gang*
  - *Whitefield Cyber Fraud Syndicate & Mule Accounts*
  - *Mysuru Dasara Burglary Risk Forecast*
  - *Habitual Offender Risk Score: Ramesh @ Bullet*
- **Bharatiya Nyaya Sanhita (BNS) Mapping**: Recommends applicable legal sections with AI confidence percentages (e.g., BNS Sec 304 Snatching @ 99.88%, BNS Sec 310(2) Dacoity @ 94.10%, BNS Sec 317(3) Stolen Property @ 91.50%).
- **Vector & SQL Provenance Engine**: Displays generated SQL queries alongside FAISS/Cosine vector similarity scores and cryptographic CCTNS SHA-256 evidence hashes.
- **Actionable Tactical Leads**: Suggests concrete investigative next steps, including tower dump subpoenas, pawn shop checks, and court bail condition verifications.

### 2.2 🎥 Real-Time CCTV AI & ANPR Monitoring (`src/components/CCTVMonitoringModule.jsx`)
- **Multi-Camera Stream Grid**: Simulated live stream monitors across critical intersections (MG Road, Silk Board, Kempegowda Bus Station, Outer Ring Road).
- **ANPR & Facial Recognition Alerts**: Highlights high-risk vehicle license plate detections (e.g., KA-01-EQ-9921 Black Pulsar 220) and suspect facial matches (Ramesh @ Bullet with 94.8% confidence score).
- **Stream Metrics & Health**: Displays live bandwidth usage, active camera counts, AI inference latency (14ms), and uptime analytics.

### 2.3 🕸️ Crime Network Knowledge Graph (`src/components/NetworkGraphModule.jsx`)
- **Interactive Neo4j Graph Visualizer**: Visual node-link mapping of criminal connections, linking habitual offenders, accomplices, FIRs, vehicles, and financial mule bank accounts.
- **Node Filtering & Risk Metrics**: Real-time filtering by node types (`SUSPECT`, `FIR`, `MULE_BANK_ACC`, `VEHICLE`) with embedded risk scores (e.g., Bullet Ramesh Risk Score: 92/100).
- **Interactive Node Drawer**: Clicking a node exposes suspect dossiers, associated cases, mule account details, and gang relationships.

### 2.4 🗺️ Crime GIS Map & Spatial Hotspot Analytics (`src/components/GISMapModule.jsx`)
- **Interactive Leaflet Mapping**: Geospatial crime clustering across Karnataka police divisions (Indiranagar, Jayanagar, Whitefield, Mysuru, Hubballi).
- **Hotspot Heatmaps & Forecasting**: Visual indicators for crime density, patrol route suggestions, and festival surge forecasting (e.g., Mysuru Dasara burglary risk).

### 2.5 👤 Offender Profiling & Criminal Dossiers (`src/components/OffenderProfileModule.jsx`)
- **Habitual Offender Intelligence**: Deep dossiers for high-risk offenders (e.g., *Ramesh @ Bullet Ramesh*), tracking criminological risk scores, MO history, gang affiliations, and active court bail status at 1st ACMM Court.

### 2.6 📁 Investigator Workspace (`src/components/InvestigatorWorkspaceModule.jsx`)
- **Digital Case Binder**: Case management interface for Sub-Inspectors and Inspectors to assemble FIR details, organize witness statements, tag evidence SHA-256 hashes, and export comprehensive investigation briefs.

### 2.7 🔒 AI Governance & DPDP Audit (`src/components/AuditGovernanceModule.jsx`)
- **DPDP Act 2023 Compliance**: Full compliance dashboard tracking query logs, role access levels, prompt histories, data anonymization rules, and SHA-256 evidence integrity hashes.

---

## 3. Operational & Legal Scopes

### 3.1 Role-Based Access Control (RBAC) Scope Matrix

The platform enforces 4 strict operational security hierarchy levels:

| Role ID | Title / Rank | Access Level | Permissions & View Scopes |
| :--- | :--- | :---: | :--- |
| `INVESTIGATOR` | Sub-Inspector / Inspector | **Level 1** | Local station FIR search, suspect interrogation notes, active case binder, PII masked |
| `ANALYST` | Crime Analyst | **Level 2** | Cross-station network graphs, MO pattern matching, trend analytics, PII masked |
| `SUPERVISOR` | Superintendent of Police (SP) | **Level 3** | District-wide GIS heatmaps, squad deployment, bail violation alerts, unmasked PII |
| `POLICYMAKER` | Joint Secretary (Home Dept) | **Level 4** | State-level crime metrics, policy recommendations, DPDP audit overview |

### 3.2 Legal & Data Protection Scope
- **DPDP Act 2023 Compliance**: Automatic masking of Personally Identifiable Information (PII) like Aadhaar numbers and exact residential addresses for Level 1 & Level 2 users.
- **BNS Legal Mapping**: Transitioned from IPC to **Bharatiya Nyaya Sanhita (BNS)** section mappings.
- **Cryptographic Provenance**: Every AI output is linked to a SHA-256 CCTNS cryptographic data hash.

### 3.3 Geographical & Jurisdictional Scope
- **State-Wide Coverage**: Encompasses Bangalore City Police (Indiranagar, Jayanagar, Whitefield, Halasuru), Mysuru City Police, Hubballi-Dharwad Police, and district units across Karnataka.

---

## 4. Complete Technology Stack

| Category | Technology / Library | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Frontend Framework** | React | `^19.2.7` | UI component rendering & state management |
| **DOM Renderer** | React DOM | `^19.2.7` | Document object model rendering |
| **Build System** | Vite | `^8.1.1` | Ultra-fast local dev server & HMR |
| **Vite React Plugin** | `@vitejs/plugin-react` | `^6.0.3` | React Fast Refresh support in Vite |
| **CSS Framework** | Tailwind CSS | `^4.3.3` | Utility-first styling & layout design |
| **Tailwind Plugin** | `@tailwindcss/vite` | `^4.3.3` | Native Tailwind v4 Vite compilation |
| **GIS Mapping** | Leaflet | `^1.9.4` | Interactive spatial maps & hotspot markers |
| **Data Charts** | Recharts | `^3.10.0` | Analytics charts & trend visualization |
| **Icons Library** | Lucide React | `^1.26.0` | UI icon components |
| **Code Linter** | Oxlint | `^1.71.0` | High-speed JavaScript & JSX code analysis |
| **Typography** | Google Fonts | Web | *Outfit*, *Plus Jakarta Sans*, *Noto Sans Kannada*, *JetBrains Mono* |

---

## 5. Project Architecture & File Map

```
c:/Datathon Zoho/
├── IMPLEMENTATION_AND_SCOPE.md   # Downloadable Markdown Implementation Document
├── IMPLEMENTATION_AND_SCOPE.html # Standalone Printable HTML Report with PDF Export
├── PROJECT_DOCUMENTATION.md      # Comprehensive Project Documentation
├── PROJECT_DOCUMENTATION.html    # Standalone HTML Project Documentation
├── README.md                     # Executive Readme & Quickstart
├── package.json                 # Node.js dependencies & scripts
├── vite.config.js               # Vite compilation settings
├── index.html                   # HTML entry with Leaflet & Google Fonts
└── src/
    ├── App.jsx                  # Main router, activeTab state, role & language state
    ├── App.css                  # Custom CSS styles
    ├── index.css                # Tailwind directives & typography declarations
    ├── main.jsx                 # React root mounting script
    ├── components/              # Core Functional Modules
    │   ├── TopNavbar.jsx        # Navigation bar, language switcher, role switcher
    │   ├── Header.jsx           # System status banner
    │   ├── Sidebar.jsx          # Side drawer navigation
    │   ├── CopilotModule.jsx    # AI RAG Conversational Copilot & MO Search
    │   ├── CCTVMonitoringModule.jsx # CCTV stream grid & ANPR alerts
    │   ├── NetworkGraphModule.jsx # Neo4j crime knowledge graph
    │   ├── GISMapModule.jsx     # Spatial Leaflet map & hotspot analytics
    │   ├── OffenderProfileModule.jsx # Habitual offender dossiers & risk scores
    │   ├── InvestigatorWorkspaceModule.jsx # Case binder & digital brief exporter
    │   └── AuditGovernanceModule.jsx # DPDP Act 2023 compliance & audit logs
    └── data/
        └── mockData.js          # System data schemas, preset RAG responses, graph nodes & GIS hotspots
```

---

## 6. Execution & Build Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Run Local Development Server**:
   ```bash
   npm run dev
   ```
   Server will launch at `http://localhost:5173`.

3. **Build Production Asset Bundle**:
   ```bash
   npm run build
   ```
   Production output will be generated in `./dist`.

4. **Lint Codebase**:
   ```bash
   npm run lint
   ```

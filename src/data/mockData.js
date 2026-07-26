// Karnataka State Police (KSP Drishti AI) - Comprehensive Mock Database & Schema

export const SYSTEM_INFO = {
  platformName: "KSP दृष्टि AI",
  platformSubTitle: "Intelligent Conversational AI & Crime Analytics Platform",
  agency: "Karnataka State Police (ಕರ್ನಾಟಕ ರಾಜ್ಯ ಪೊಲೀಸ್)",
  icjsVersion: "ICJS 2.0 / CCTNS Live",
  lastSync: "2026-07-24 20:04:12 IST",
  dataRecords: "1.42M FIRs Indexed (2018-2026)",
};

export const ROLES = {
  INVESTIGATOR: { id: "investigator", title: "Investigator (SI / Inspector)", rank: "Sub-Inspector", badge: "KSP-8821", level: 1 },
  ANALYST: { id: "analyst", title: "Crime Analyst", rank: "Senior Analyst", badge: "KSP-A902", level: 2 },
  SUPERVISOR: { id: "supervisor", title: "District Supervisor (SP / DGP)", rank: "Superintendent of Police", badge: "KSP-SP04", level: 3 },
  POLICYMAKER: { id: "policymaker", title: "Policymaker (Home Dept)", rank: "Joint Secretary (Home)", badge: "GOK-H101", level: 4 },
};

export const SAMPLE_QUERIES = [
  {
    id: "q1",
    labelEn: "Indiranagar Pulsar Chain Snatching Gang",
    labelKn: "ಇಂದಿರಾನಗರ ಪಲ್ಸರ್ ಸರಗಳ್ಳತನ ಗ್ಯಾಂಗ್",
    textEn: "Find all chain snatching cases in Indiranagar and Jayanagar involving Pulsar-borne suspects matching MO in FIR #204/2025.",
    textKn: "ಇಂದಿರಾನಗರ ಮತ್ತು ಜಯನಗರ ಪೊಲೀಸ್ ಠಾಣಾ ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಪಲ್ಸರ್ ಬೈಕ್ ಬಳಸಿ ಸರಗಳ್ಳತನ ಮಾಡಿದ ಪ್ರಕರಣಗಳ ವಿವರ ನೀಡಿ.",
    category: "MO Search",
  },
  {
    id: "q2",
    labelEn: "Whitefield Cyber Fraud Syndicate & Mule Accounts",
    labelKn: "ವೈಟ್‌ಫೀಲ್ಡ್ ಸೈಬರ್ ವಂಚನೆ ಮತ್ತು ಬ್ಯಾಂಕ್ ಖಾತೆಗಳ ಜಾಲ",
    textEn: "Generate network link analysis for cyber fraud syndicate operating near Whitefield and list linked mule bank accounts.",
    textKn: "ವೈಟ್‌ಫೀಲ್ಡ್ ಭಾಗದ ಸೈಬರ್ ಅಪರಾಧ ಜಾಲದ ಕೊಂಡಿ ಮತ್ತು ಮೂಲ ಬ್ಯಾಂಕ್ ಖಾತೆಗಳ ವಿವರ ವಿಶ್ಲೇಷಿಸಿ.",
    category: "Financial Crime",
  },
  {
    id: "q3",
    labelEn: "Mysuru Dasara Burglary Risk Forecast",
    labelKn: "ಮೈಸೂರು ದಸರಾ ಮನೆಗಳ್ಳತನ ಅಪಾಯದ ಮುನ್ಸೂಚನೆ",
    textEn: "Predict high-risk burglaries for Mysuru city during upcoming festival season based on past 5 years MO history.",
    textKn: "ಕಳೆದ ೫ ವರ್ಷಗಳ ಅಪರಾಧ ಮಾದರಿ ಆಧಾರಿಸಿ ಮುಂಬರುವ ಮೈಸೂರು ದಸರಾ ವೇಳೆಯ ಮನೆಗಳ್ಳತನ ಮುನ್ಸೂಚನೆ ನೀಡಿ.",
    category: "Predictive",
  },
  {
    id: "q4",
    labelEn: "Habitual Offender Risk Score: Ramesh @ Bullet",
    labelKn: "ಅಭ್ಯಾಸಬಲ ಅಪರಾಧಿ ಅಪಾಯದ ಅಂಕ: ರಮೇಶ್ @ ಬುಲೆಟ್",
    textEn: "Show criminological risk score, gang associates, and bail violation report for habitual offender Ramesh alias Bullet Ramesh.",
    textKn: "ರಮೇಶ್ ಅಲಿಯಾಸ್ ಬುಲೆಟ್ ರಮೇಶ್ ಎಂಬ ಅಪರಾಧಿಯ ಕ್ರಿಮಿನಲ್ ನೆಟ್‌ವರ್ಕ್ ಮತ್ತು ಜಾಮೀನು ಉಲ್ಲಂಘನೆ ವರದಿ ನೀಡಿ.",
    category: "Offender Profile",
  },
];

export const PRESET_RESPONSES = {
  q1: {
    queryEn: "Find all chain snatching cases in Indiranagar and Jayanagar involving Pulsar-borne suspects matching MO in FIR #204/2025.",
    queryKn: "ಇಂದಿರಾನಗರ ಮತ್ತು ಜಯನಗರ ಪೊಲೀಸ್ ಠಾಣಾ ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಪಲ್ಸರ್ ಬೈಕ್ ಬಳಸಿ ಸರಗಳ್ಳತನ ಮಾಡಿದ ಪ್ರಕರಣಗಳ ವಿವರ ನೀಡಿ.",
    summaryEn: `AI RAG search retrieved 4 highly correlated FIRs across Indiranagar & Jayanagar stations. Suspects Ramesh @ Bullet Ramesh and Sharp Manja were identified using IMEI tower dumps and MO similarity matching (94.2%). Vehicle KA-01-EQ-9921 (Black Bajaj Pulsar 220) is common across 3 crime scenes.`,
    summaryKn: `ಆರ್.ಎ.ಜಿ (RAG) ಶೋಧನೆಯಲ್ಲಿ ಇಂದಿರಾನಗರ ಮತ್ತು ಜಯನಗರದಲ್ಲಿ ೪ ಸಂಬಂಧಿತ ಎಫ್.ಐ.ಆರ್ ಪತ್ತೆಯಾಗಿವೆ. ರಮೇಶ್ @ ಬುಲೆಟ್ ರಮೇಶ್ ಮತ್ತು ಶಾರ್ಪ್ ಮಂಜ ಎಂಬುವರು ಪಲ್ಸರ್ ಬೈಕ್ (KA-01-EQ-9921) ಬಳಸಿ ಈ ಕೃತ್ಯ ಎಸಗಿರುವುದು ಐ.ಎಂ.ಇ.ಐ ಟವರ್ ಡಂಪ್ ಮತ್ತು ಎಂ.ಒ ಹೋಲಿಕೆಯಿಂದ ದೃಢಪಟ್ಟಿದೆ.`,
    firsMatched: [
      { firNo: "FIR #204/2025", station: "Indiranagar PS", date: "2025-06-12", victim: "Smt. Kamala Bai (62 yrs)", goldWeight: "48 grams", similarity: "100% (Anchor)", status: "Under Investigation" },
      { firNo: "FIR #189/2025", station: "Jayanagar 4th Block PS", date: "2025-05-28", victim: "Smt. Sunitha R. (45 yrs)", goldWeight: "60 grams", similarity: "94.2%", status: "Investigating" },
      { firNo: "FIR #112/2025", station: "Indiranagar PS", date: "2025-04-10", victim: "Smt. Meenakshi S. (58 yrs)", goldWeight: "35 grams", similarity: "89.6%", status: "Charge Sheeted" },
      { firNo: "FIR #088/2024", station: "Halasuru PS", date: "2024-11-19", victim: "Smt. Rekha Sharma (51 yrs)", goldWeight: "52 grams", similarity: "87.1%", status: "Open Lead" },
    ],
    sqlGenerated: `SELECT f.fir_no, f.ps_name, f.incident_date, s.suspect_alias, v.reg_no, f.mo_description 
FROM mcctns_fir f 
JOIN mcctns_suspects s ON f.fir_id = s.fir_id 
JOIN mcctns_vehicles v ON f.fir_id = v.fir_id 
WHERE f.ps_name IN ('Indiranagar PS', 'Jayanagar 4th Block PS') 
  AND f.crime_category = 'CHAIN_SNATCHING' 
  AND v.make_model LIKE '%Pulsar%' 
ORDER BY f.incident_date DESC LIMIT 10;`,
    bnsSections: [
      { code: "BNS Sec 304", title: "Snatching (ಸರಗಳ್ಳತನ)", confidence: "99.88%" },
      { code: "BNS Sec 310(2)", title: "Dacoity / Gang Robbery with Violence", confidence: "94.10%" },
      { code: "BNS Sec 317(3)", title: "Stolen Property Possession", confidence: "91.50%" },
    ],
    evidenceProvenance: {
      cctnsHash: "0x8f7a912b4e5c6d7e8f0a1b2c3d4e5f6a",
      retrievedChunks: 18,
      faissCosineScore: 0.942,
      modelUsed: "KSP-Llama3-8B-CrimeFineTuned + Neo4j Graph Attention",
    },
    actionLeads: [
      "Subpoena IMEI #3589210984510... active at Silk Board junction 02:15 AM - 02:40 AM.",
      "Dispatch patrol unit to pawn shops near Avenue Road for stolen gold liquidation check.",
      "Verify bail conditions of Ramesh @ Bullet Ramesh at 1st ACMM Court.",
    ]
  },
};

// Neo4j Knowledge Graph Data
export const GRAPH_DATA = {
  nodes: [
    { id: "SUS_1", label: "Bullet Ramesh", category: "SUSPECT", sub: "Habitual Offender", risk: 92, avatar: "👤", color: "#FF3B30", x: 250, y: 180 },
    { id: "SUS_2", label: "Sharp Manja", category: "SUSPECT", sub: "Pillion Rider / Assault", risk: 78, avatar: "👤", color: "#FF9500", x: 420, y: 150 },
    { id: "SUS_3", label: "Cyber Imran", category: "SUSPECT", sub: "Mule Account Handler", risk: 87, avatar: "👤", color: "#FF3B30", x: 620, y: 320 },
    { id: "FIR_1", label: "FIR #204/2025", category: "FIR", sub: "Indiranagar - Snatching", risk: 0, avatar: "📜", color: "#007AFF", x: 180, y: 340 },
    { id: "FIR_2", label: "FIR #189/2025", category: "FIR", sub: "Jayanagar - Snatching", risk: 0, avatar: "📜", color: "#007AFF", x: 380, y: 320 },
    { id: "VEH_1", label: "KA-01-EQ-9921", category: "VEHICLE", sub: "Bajaj Pulsar 220 (Black)", risk: 0, avatar: "🏍️", color: "#AF52DE", x: 300, y: 460 },
    { id: "IMEI_1", label: "35892109845109", category: "IMEI", sub: "Tower Dump Match", risk: 0, avatar: "📱", color: "#5856D6", x: 500, y: 460 },
    { id: "BANK_1", label: "Axis Bank #912048", category: "BANK_ACCOUNT", sub: "Mule Account (₹42 Lakhs)", risk: 0, avatar: "🏦", color: "#34C759", x: 740, y: 220 },
    { id: "MO_1", label: "MO: Two-Wheeler Snatch", category: "MODUS_OPERANDI", sub: "Morning Walkers Target", risk: 0, avatar: "⚡", color: "#FFCC00", x: 120, y: 200 },
    { id: "GNN_PRED_1", label: "Predicted Shell Co: Apex Traders", category: "GNN_PREDICTED", sub: "91% Laundering Link", risk: 85, avatar: "🔮", color: "#00E5FF", x: 780, y: 420 },
  ],
  links: [
    { source: "SUS_1", target: "FIR_1", label: "Named Accused", type: "ACCUSED" },
    { source: "SUS_1", target: "FIR_2", label: "Primary Suspect", type: "ACCUSED" },
    { source: "SUS_2", target: "FIR_1", label: "Co-Accused", type: "ACCUSED" },
    { source: "SUS_1", target: "VEH_1", label: "Registered Owner", type: "ASSET" },
    { source: "SUS_2", target: "IMEI_1", label: "Active SIM Ping", type: "TELECOM" },
    { source: "SUS_1", target: "MO_1", label: "Matches Pattern", type: "MO" },
    { source: "SUS_3", target: "BANK_1", label: "Account Controller", type: "FINANCIAL" },
    { source: "SUS_1", target: "SUS_3", label: "Call History (42 calls)", type: "ASSOCIATE" },
    // GNN Predicted Edge
    { source: "BANK_1", target: "GNN_PRED_1", label: "GNN Predicted Fund Trail (91%)", type: "GNN_PREDICTED", isGnn: true },
    { source: "SUS_3", target: "GNN_PRED_1", label: "GNN Predicted Director Link (88%)", type: "GNN_PREDICTED", isGnn: true },
  ]
};

// GIS Crime Hotspots (Karnataka Jurisdiction)
export const GIS_HOTSPOTS = [
  {
    id: "h1",
    district: "Bengaluru Urban",
    ps: "Indiranagar & Jayanagar Cluster",
    lat: 12.9784,
    lng: 77.6408,
    crimeType: "Chain Snatching & Robbery",
    incidents: 42,
    riskLevel: "CRITICAL",
    peakHours: "05:30 AM - 08:00 AM",
    moPattern: "Morning walk targets, Pulsar bike getaway, 2 helmeted riders",
    predictiveAlert: "High risk window predicted for tomorrow 05:45 AM along 100ft Road.",
  },
  {
    id: "h2",
    district: "Bengaluru Urban",
    ps: "Whitefield & Electronic City",
    lat: 12.9698,
    lng: 77.7500,
    crimeType: "Cyber Fraud & Mule Operations",
    incidents: 128,
    riskLevel: "HIGH",
    peakHours: "10:00 AM - 04:00 PM",
    moPattern: "Part-time job APK scams, FedEx courier call spoofing",
    predictiveAlert: "Spike detected in fake electricity bill SMS dispatch from Jamtara-linked SIMs.",
  },
  {
    id: "h3",
    district: "Mysuru City",
    ps: "Devaraja & Nazarbad PS",
    lat: 12.3052,
    lng: 76.6552,
    crimeType: "House Burglary (Night)",
    incidents: 19,
    riskLevel: "MODERATE",
    peakHours: "01:00 AM - 04:30 AM",
    moPattern: "Locked house lock-cutting, rear window grill tampering",
    predictiveAlert: "Seasonal vulnerability high during upcoming festive weekend.",
  },
  {
    id: "h4",
    district: "Mangaluru City",
    ps: "Panambur & North PS",
    lat: 12.9141,
    lng: 74.8560,
    crimeType: "Contraband & Narcotics Transit",
    incidents: 31,
    riskLevel: "HIGH",
    peakHours: "11:00 PM - 03:00 AM",
    moPattern: "Interstate coastal highway drops, encrypted chat coordinates",
    predictiveAlert: "Predictive checkpoint advisory issued for NH-66 bypass.",
  },
  {
    id: "h5",
    district: "Hubballi-Dharwad",
    ps: "Suburban PS & Dharwad Town",
    lat: 15.3647,
    lng: 75.1240,
    crimeType: "Two-Wheeler Theft",
    incidents: 27,
    riskLevel: "MODERATE",
    peakHours: "02:00 PM - 07:00 PM",
    moPattern: "Public parking handle lock breakdown without key",
    predictiveAlert: "Bus stand parking lot flagged for targeted CCTV monitoring.",
  },
];

// Offender Profiler Data
export const OFFENDERS = [
  {
    id: "off_1",
    name: "Ramesh alias 'Bullet Ramesh'",
    alias: "ಬುಲೆಟ್ ರಮೇಶ್",
    age: 34,
    district: "Bengaluru City (East Zone)",
    riskScore: 92,
    category: "Habitual Offender - Category A",
    status: "Out on Bail (Under Surveillance)",
    historyCount: 14,
    convictions: 3,
    activeAssociates: 5,
    radarMetrics: [
      { subject: "Recency Score", A: 95, fullMark: 100 },
      { subject: "MO Violence", A: 85, fullMark: 100 },
      { subject: "Financial Reach", A: 70, fullMark: 100 },
      { subject: "Gang Density", A: 90, fullMark: 100 },
      { subject: "OSINT/Tech Footprint", A: 60, fullMark: 100 },
      { subject: "Bail Risk", A: 98, fullMark: 100 },
    ],
    timeline: [
      { date: "2025-06-12", event: "Named prime suspect in FIR #204/2025 (Indiranagar)", type: "FIR" },
      { date: "2025-01-15", event: "Released on conditional bail by 1st ACMM Court", type: "COURT" },
      { date: "2024-08-04", event: "Arrested with 400g stolen gold by CCB Special Wing", type: "ARREST" },
      { date: "2023-03-20", event: "Convicted in FIR #112/2021 (2 years imprisonment)", type: "CONVICTION" },
    ],
    associates: ["Sharp Manja (Co-accused)", "Kulla Kumar (Receiver)", "Cyber Imran (Financial Handler)"]
  },
  {
    id: "off_2",
    name: "Imran Khan alias 'Cyber Imran'",
    alias: "ಸೈಬರ್ ಇಮ್ರಾನ್",
    age: 29,
    district: "Bengaluru & Ramanagara",
    riskScore: 87,
    category: "Cyber Financial Syndicate Head",
    status: "Fleeing / NBW Issued",
    historyCount: 9,
    convictions: 1,
    activeAssociates: 12,
    radarMetrics: [
      { subject: "Recency Score", A: 90, fullMark: 100 },
      { subject: "MO Violence", A: 20, fullMark: 100 },
      { subject: "Financial Reach", A: 98, fullMark: 100 },
      { subject: "Gang Density", A: 85, fullMark: 100 },
      { subject: "OSINT/Tech Footprint", A: 95, fullMark: 100 },
      { subject: "Bail Risk", A: 75, fullMark: 100 },
    ],
    timeline: [
      { date: "2025-05-19", event: "Frozen 14 mule bank accounts with ₹42 Lakhs balance", type: "FINANCIAL" },
      { date: "2025-03-02", event: "Non-Bailable Warrant (NBW) issued by Cyber Crime Court", type: "WARRANT" },
    ],
    associates: ["Bullet Ramesh", "Apex Traders Shell Co", "Wasim @ OTP King"]
  }
];

// Audit Ledger Data
export const AUDIT_LOGS = [
  { id: "AUD-9912", timestamp: "2026-07-24 20:02:11", badge: "KSP-8821", officer: "SI Suresh Kumar", action: "NL-to-SQL Query", target: "mcctns_fir", queryHash: "0x4e8a...11a2", status: "VERIFIED_COMPLIANT" },
  { id: "AUD-9911", timestamp: "2026-07-24 19:54:05", badge: "KSP-A902", officer: "Analyst Deepa M.", action: "Graph Link Prediction Run", target: "Neo4j Criminal Net", queryHash: "0x9c3d...88f1", status: "VERIFIED_COMPLIANT" },
  { id: "AUD-9910", timestamp: "2026-07-24 19:42:30", badge: "KSP-SP04", officer: "SP K. V. Ananth", action: "Hotspot Patrol Override", target: "Bengaluru East GIS", queryHash: "0x1b7e...33c9", status: "VERIFIED_COMPLIANT" },
  { id: "AUD-9909", timestamp: "2026-07-24 18:30:19", badge: "GOK-H101", officer: "Joint Secy R. Sharma", action: "Policy Crime Rate Audit", target: "Karnataka State Analytics", queryHash: "0x7f2a...9902", status: "VERIFIED_COMPLIANT" },
];

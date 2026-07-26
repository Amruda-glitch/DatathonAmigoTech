import React from 'react';
import { FolderKanban, Clock, Search, Sparkles, ShieldCheck } from 'lucide-react';

export default function InvestigatorWorkspaceModule({ language }) {
  const caseDetails = {
    caseId: "KSP-2025-IND-088",
    titleEn: "Indiranagar Serial Chain Snatching Gang",
    titleKn: "ಇಂದಿರಾನಗರ ಸರಣಿ ಸರಗಳ್ಳತನ ಪ್ರಕರಣ ಜಾಲ",
    io: "SI Suresh Kumar (Badge KSP-8821)",
    ps: "Indiranagar PS",
    registeredDate: "2025-06-12",
    status: "Active Lead Generation",
    timelineEvents: [
      { date: "2025-06-12 06:15 AM", title: "Incident Occurred at 100ft Road, Indiranagar", detail: "Smt. Kamala Bai (62) targeted by 2 Pulsar-borne assailants.", status: "COMPLETED" },
      { date: "2025-06-12 08:30 AM", title: "FIR #204/2025 Registered", detail: "BNS Sec 304 Snatching & Sec 310 Dacoity invoked.", status: "COMPLETED" },
      { date: "2025-06-12 02:00 PM", title: "CCTV Footage Extracted", detail: "Black Bajaj Pulsar 220 (KA-01-EQ-9921) spotted near Silk Board.", status: "COMPLETED" },
      { date: "2025-06-13 11:00 AM", title: "Telecom Tower Dump Triangulation", detail: "IMEI 35892109845109 matched with Bullet Ramesh & Sharp Manja.", status: "IN_PROGRESS" },
    ],
    similarCases: [
      { fir: "FIR #189/2025", station: "Jayanagar 4th Block PS", matchScore: "94.2%", date: "2025-05-28", mo: "Morning walk target, 2 Pulsar riders, yellow gold chain" },
      { fir: "FIR #088/2024", station: "Halasuru PS", matchScore: "87.1%", date: "2024-11-19", mo: "Rear approach, helmeted getaway, avenue road pawn fence" },
      { fir: "FIR #401/2024", station: "Mysuru Devaraja PS", matchScore: "82.5%", date: "2024-09-04", mo: "Pulsar 220 getaway, co-accused Sharp Manja" },
    ],
    aiLeads: [
      { priority: "CRITICAL", lead: "Subpoena IMEI #35892109845109 active at Silk Board junction between 02:15 AM - 02:40 AM.", target: "Telecom Nodal Officer" },
      { priority: "HIGH", lead: "Inspect pawn shops around Avenue Road for 48 grams 22K gold chain liquidation without bill.", target: "CCB Crime Branch" },
      { priority: "MEDIUM", lead: "Cross-verify bail compliance of Bullet Ramesh at 1st ACMM Court.", target: "Legal Advisor" },
    ]
  };

  // Zia OCR Simulation state
  const [isScanningOcr, setIsScanningOcr] = React.useState(false);
  const [ocrExtracted, setOcrExtracted] = React.useState(false);

  const handleSimulateOcr = () => {
    setIsScanningOcr(true);
    setTimeout(() => {
      setIsScanningOcr(false);
      setOcrExtracted(true);
    }, 1200);
  };

  return (
    <div className="max-w-[1750px] mx-auto space-y-6">
      {/* Top Banner */}
      <div className="light-card p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center">
            <FolderKanban className="w-5 h-5 text-amber-700" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              {language === 'kn' ? 'ತನಿಖಾಧಿಕಾರಿ ಕಾರ್ಯಸ್ಥಳ ಮತ್ತು ಲೀಡ್ಸ್ ಜನರೇಟರ್' : 'Investigator Workspace & AI Lead Generator'}
              <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold">{caseDetails.caseId}</span>
            </h2>
            <p className="text-xs text-slate-600">
              IO: <strong className="text-slate-900">{caseDetails.io}</strong> | PS: <strong>{caseDetails.ps}</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-800 border border-blue-200 text-xs font-bold">FAISS Vector Search Active</span>
        </div>
      </div>

      {/* FIR Document Intelligence & Zia OCR Extractor Section */}
      <div className="light-card p-5 space-y-4">
        <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <FolderKanban className="w-4 h-4 text-blue-700" />
              {language === 'kn' ? 'ಎಫ್.ಐ.ಆರ್ ದಾಖಲೆ ಎಐ ಮತ್ತು ಜಿಯಾ ಒ.ಸಿ.ಆರ್ ಎಕ್ಸ್‌ಟ್ರಾಕ್ಟರ್' : 'FIR Document Intelligence & Zia OCR Extractor'}
            </h3>
            <p className="text-xs text-slate-500">
              Automated Kannada & English FIR document OCR to structured case creation workflow
            </p>
          </div>
          <span className="px-2.5 py-1 rounded bg-indigo-50 text-indigo-900 border border-indigo-200 text-xs font-bold">
            Zia Vision OCR 98.4%
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          {/* Upload Drop Area */}
          <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center space-y-4 bg-slate-50/50 hover:border-amber-500 transition-all flex flex-col items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
              <FolderKanban className="w-7 h-7" />
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900">Upload Scanned FIR PDF / Image</h4>
              <p className="text-xs text-slate-500 max-w-xs mt-1">
                Drag & drop Kannada/English FIR documents for instant Zia OCR entity extraction.
              </p>
            </div>

            <button
              onClick={handleSimulateOcr}
              disabled={isScanningOcr}
              className="btn-light-primary text-xs px-5 py-2.5 font-bold shadow-md"
            >
              {isScanningOcr ? (
                <span className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Scanning & Extracting Entities...
                </span>
              ) : (
                'Simulate FIR OCR Scan'
              )}
            </button>
          </div>

          {/* Extracted Entities Result Box */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block font-mono">
              ZIA OCR EXTRACTED ENTITIES
            </span>

            {ocrExtracted ? (
              <div className="space-y-3 animate-in fade-in duration-300">
                <div className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200 font-mono text-[11px]">
                  <span className="text-slate-500">Document Classification:</span>
                  <span className="font-bold text-emerald-700">Karnataka Police Form #1 (KSP FIR)</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-slate-800">
                  <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                    <span className="text-slate-400 text-[10px] block">FIR Number</span>
                    <strong className="font-mono text-xs text-blue-900">FIR #204/2025</strong>
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                    <span className="text-slate-400 text-[10px] block">Station Jurisdiction</span>
                    <strong className="text-xs text-slate-900">Indiranagar PS</strong>
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                    <span className="text-slate-400 text-[10px] block">Complainant Name</span>
                    <strong className="text-xs text-slate-900">Smt. Kamala Bai (62 yrs)</strong>
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                    <span className="text-slate-400 text-[10px] block">Stolen Property</span>
                    <strong className="text-xs text-amber-800">48g 22K Gold Chain</strong>
                  </div>
                </div>

                <div className="p-2.5 bg-white rounded-lg border border-slate-200 space-y-1">
                  <span className="text-slate-400 text-[10px] block font-mono">Suspect MO & Vehicle Mentioned</span>
                  <p className="text-slate-800 text-xs font-semibold">
                    2 helmeted riders on Black Bajaj Pulsar 220 (KA-01-EQ-9921). Rear getaway towards Halasuru.
                  </p>
                </div>

                <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 text-xs font-bold flex items-center justify-between">
                  <span>Sections Inferred: BNS 304, BNS 310(2)</span>
                  <span className="text-emerald-700">Matched to Knowledge Graph ✓</span>
                </div>
              </div>
            ) : (
              <div className="h-44 flex flex-col items-center justify-center text-slate-400 text-center space-y-2">
                <FolderKanban className="w-8 h-8 text-slate-300" />
                <p>Upload an FIR document or click 'Simulate FIR OCR Scan' to preview AI-extracted entities.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Timeline */}
        <div className="light-card p-5 space-y-4">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-700" />
              {language === 'kn' ? 'ಪ್ರಕರಣದ ಘಟನಾವಳಿ ಟೈಮ್‌ಲೈನ್' : 'Case Incident Timeline'}
            </h3>
            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300 text-[10px] font-bold">CCTNS Sync</span>
          </div>

          <div className="space-y-4 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 text-xs">
            {caseDetails.timelineEvents.map((evt, idx) => (
              <div key={idx} className="relative pl-7 space-y-1">
                <span className={`absolute left-1.5 top-1 w-3 h-3 rounded-full border-2 border-white ${
                  evt.status === 'COMPLETED' ? 'bg-emerald-600' : 'bg-amber-600 animate-pulse'
                }`}></span>
                <span className="font-mono text-[10px] text-slate-500 font-semibold block">{evt.date}</span>
                <h4 className="font-bold text-slate-900 text-xs">{evt.title}</h4>
                <p className="text-slate-700 text-[11px] leading-relaxed font-medium">{evt.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Similar Cases */}
        <div className="light-card p-5 space-y-4">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Search className="w-4 h-4 text-blue-700" />
              {language === 'kn' ? 'ಸಮಾನ ಅಪರಾಧ ಮಾದರಿ ಶೋಧನೆ (Vector Match)' : 'Similar Case Matcher (ChromaDB / FAISS)'}
            </h3>
            <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200 text-[10px] font-bold">Vector MO Search</span>
          </div>

          <div className="space-y-3 text-xs">
            {caseDetails.similarCases.map((sim, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-blue-900 font-mono">{sim.fir}</span>
                  <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-300 font-mono text-[11px] font-bold">
                    {sim.matchScore} Similarity
                  </span>
                </div>
                <div className="flex justify-between text-slate-600 text-[11px] font-medium">
                  <span>{sim.station}</span>
                  <span className="font-mono">{sim.date}</span>
                </div>
                <p className="text-[11px] text-slate-800 bg-white p-2 rounded border border-slate-200 italic font-medium">
                  MO: {sim.mo}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Actionable Leads */}
        <div className="light-card p-5 space-y-4">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-700" />
              {language === 'kn' ? 'ಎಐ ತನಿಖಾ ಮಾರ್ಗದರ್ಶಿ (Investigative Leads)' : 'AI Actionable Leads Generator'}
            </h3>
            <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-bold">Priority Ranked</span>
          </div>

          <div className="space-y-3 text-xs">
            {caseDetails.aiLeads.map((lead, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${lead.priority === 'CRITICAL' ? 'bg-rose-100 text-rose-900 border border-rose-300' : 'bg-amber-100 text-amber-900 border border-amber-300'}`}>
                    {lead.priority} PRIORITY
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">Target: {lead.target}</span>
                </div>
                <p className="text-slate-800 font-semibold leading-relaxed">
                  {lead.lead}
                </p>
                <button className="btn-light-secondary w-full text-[11px] py-1.5 flex items-center justify-center gap-1.5 mt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                  <span>Assign Lead & Issue Notice</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

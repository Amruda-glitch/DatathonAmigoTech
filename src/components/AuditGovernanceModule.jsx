import React from 'react';
import { ShieldCheck, FileText, CheckCircle2, Cpu } from 'lucide-react';
import { AUDIT_LOGS } from '../data/mockData';

export default function AuditGovernanceModule({ language, currentRole }) {
  return (
    <div className="max-w-[1750px] mx-auto space-y-6">
      <div className="light-card p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-emerald-700" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              {language === 'kn' ? 'ಎಐ ಆಡಿಟ್, ಪಾರದರ್ಶಕತೆ ಮತ್ತು ದತ್ತಾಂಶ ರಕ್ಷಣೆ' : 'Explainable AI (XAI) & Audit Governance'}
            </h2>
            <p className="text-xs text-slate-600">
              {language === 'kn' 
                ? 'ಪ್ರತಿಯೊಂದು ಎಐ ಸಾರಾಂಶ, ಎಸ್‌ಕ್ಯೂಎಲ್ ಪ್ರಶ್ನೆ ಮತ್ತು ಬಳಕೆದಾರರ ಚಟುವಟಿಕೆಯ ಡಿಜಿಟಲ್ ಆಡಿಟ್ ದಾಖಲೆ.' 
                : 'Every response backed by cryptographic evidence trails, TranscrimeNet attention weights, and DPDP-compliant audit logging.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold">RBAC Level {currentRole.level}: {currentRole.title}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* XAI Reasoning */}
        <div className="light-card p-5 space-y-4">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-purple-700" />
              {language === 'kn' ? 'ಎಐ ತಾರ್ಕಿಕ ಸರಣಿ (XAI Attention Chain)' : 'Model Attention & Reasoning Chain'}
            </h3>
            <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-900 border border-purple-300 text-[10px] font-bold">RAG-HGAT</span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-amber-800 font-bold block">1. Vector Retrieval Phase (FAISS)</span>
              <p className="text-slate-700 leading-relaxed font-medium">
                Indexed 1,420,000 FIR records using 1536-dim embeddings. Top-k=4 FIRs retrieved with similarity &gt; 0.85.
              </p>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-amber-600 h-full w-[94%]"></div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-purple-800 font-bold block">2. Graph Neural Attention (HGAT)</span>
              <p className="text-slate-700 leading-relaxed font-medium">
                Graph Attention Layer computed multi-hop weights between Ramesh (Accused) → Pulsar KA-01-EQ-9921 → Mule Account #912048.
              </p>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-purple-600 h-full w-[91%]"></div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-emerald-800 font-bold block">3. Legal Section BNS Verification</span>
              <p className="text-slate-700 leading-relaxed font-medium">
                BNS Section 304 Snatching mapped with 99.88% confidence based on High Court precedent embeddings.
              </p>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-600 h-full w-[99%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Immutable Audit Ledger */}
        <div className="lg:col-span-2 light-card p-5 space-y-4">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-emerald-700" />
              {language === 'kn' ? 'ಬದಲಾವಣೆಯಿಲ್ಲದ ಸಿಸ್ಟಮ್ ಆಡಿಟ್ ಲೆಡ್ಜರ್' : 'Immutable Access Audit Ledger'}
            </h3>
            <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300 text-[10px] font-bold">Cryptographic Audit Active</span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">Audit ID</th>
                  <th className="p-3">Timestamp</th>
                  <th className="p-3">Officer & Badge</th>
                  <th className="p-3">Action Performed</th>
                  <th className="p-3">Target Table</th>
                  <th className="p-3">Query SHA-256 Hash</th>
                  <th className="p-3">Compliance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800 bg-white">
                {AUDIT_LOGS.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-50 transition-colors font-mono text-[11px]">
                    <td className="p-3 font-bold text-amber-900">{log.id}</td>
                    <td className="p-3 text-slate-600">{log.timestamp}</td>
                    <td className="p-3 text-slate-900 font-bold">{log.officer} ({log.badge})</td>
                    <td className="p-3 text-blue-900 font-sans font-semibold">{log.action}</td>
                    <td className="p-3 text-slate-600">{log.target}</td>
                    <td className="p-3 text-slate-600 font-mono text-[10px]">{log.queryHash}</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300 text-[10px] font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

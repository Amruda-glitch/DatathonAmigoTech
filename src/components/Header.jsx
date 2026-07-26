import React, { useState, useEffect } from 'react';
import { Shield, Radio, Globe, UserCheck, Cpu, Network, MapPin, UserX, FolderKanban, ShieldCheck, Activity, Clock as ClockIcon, Zap, AlertTriangle } from 'lucide-react';
import { SYSTEM_INFO, ROLES } from '../data/mockData';

export default function Header({ 
  currentRole, 
  setCurrentRole, 
  language, 
  setLanguage, 
  activeTab, 
  setActiveTab 
}) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const tabs = [
    { id: 'copilot', labelEn: 'AI Police Copilot', labelKn: 'ಎಐ ಪೊಲೀಸ್ ಸಹಾಯಕ', icon: Cpu, badge: 'RAG + Voice' },
    { id: 'graph', labelEn: 'Knowledge Graph', labelKn: 'ಅಪರಾಧ ಜಾಲ ನಕ್ಷೆ', icon: Network, badge: 'Neo4j + GNN' },
    { id: 'gis', labelEn: 'Crime Hotspots & GIS', labelKn: 'ಅಪರಾಧ ವಲಯ ನಕ್ಷೆ', icon: MapPin, badge: 'GIS Predictive' },
    { id: 'offenders', labelEn: 'Offender Profiler', labelKn: 'ಅಪರಾಧಿ ಪ್ರೊಫೈಲ್', icon: UserX, badge: 'Risk Score' },
    { id: 'workspace', labelEn: 'Case Workspace', labelKn: 'ಪ್ರಕರಣಗಳ ಕಾರ್ಯಸ್ಥಳ', icon: FolderKanban, badge: 'Leads AI' },
    { id: 'audit', labelEn: 'XAI Governance', labelKn: 'ಎಐ ಆಡಿಟ್ ಮತ್ತು ನೀತಿ', icon: ShieldCheck, badge: 'DPDP Audit' },
  ];

  return (
    <header className="w-full border-b border-slate-800/80 bg-[#02050E]/95 backdrop-blur-xl sticky top-0 z-50 shadow-2xl">
      {/* Top Command Center Status Bar */}
      <div className="bg-gradient-to-r from-[#010D26] via-[#081838] to-[#010D26] px-6 py-2 border-b border-blue-900/40 flex flex-wrap items-center justify-between text-xs text-slate-300">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-emerald-400 font-bold tracking-wide">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block"></span>
            ICJS 2.0 & MCCTNS LIVE
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300 font-medium">
            System Sync: <strong className="text-amber-400 font-mono">99.8% OPERATIONAL</strong>
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-cyan-400 font-mono flex items-center gap-1.5 font-semibold">
            <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            1.42M FIRs Index (FAISS VectorDB)
          </span>
        </div>

        <div className="flex items-center gap-5">
          <span className="text-slate-400 font-mono text-[11px] flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800">
            <ClockIcon className="w-3.5 h-3.5 text-amber-400" />
            {time.toLocaleTimeString()} IST (24-Hour Broadcast)
          </span>
          <span className="text-amber-400 font-bold font-title text-xs tracking-wider">
            {language === 'kn' ? 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಪೊಲೀಸ್ ನಿಯಂತ್ರಣ ಕೊಠಡಿ' : 'KARNATAKA STATE POLICE COMMAND CENTER'}
          </span>
        </div>
      </div>

      {/* Main Branding & Tactical Switchers */}
      <div className="max-w-[1750px] mx-auto px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
        {/* KSP Emblem Badge */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-600 to-yellow-700 p-0.5 shadow-xl shadow-amber-500/25 flex items-center justify-center">
              <div className="w-full h-full bg-[#050B1E] rounded-[14px] flex items-center justify-center p-2">
                <Shield className="w-7 h-7 text-amber-400" />
              </div>
            </div>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-600 rounded-full border-2 border-[#02050E] flex items-center justify-center text-[9px] font-bold text-white">
              !
            </span>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-title">
                {SYSTEM_INFO.platformName}
              </h1>
              <span className="badge-tactical badge-gold">MHA ICJS 2.0 AI</span>
              <span className="badge-tactical badge-cyan">KSP Police Mitra</span>
            </div>
            <p className="text-xs text-slate-300 font-medium mt-0.5">
              {language === 'kn' 
                ? 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಪೊಲೀಸ್ - ದ್ವಿಭಾಷಾ ಅಪರಾಧ ಜಾಲ ಮತ್ತು ಧ್ವನಿ ತನಿಖಾ ವ್ಯವಸ್ಥೆ' 
                : 'Intelligent Multilingual Conversational AI & Crime Analytics Platform for Law Enforcement'}
            </p>
          </div>
        </div>

        {/* Tactical Controls: Language & Role Switcher */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'kn' : 'en')}
            className="btn-tactical text-xs font-bold border border-slate-700 hover:border-amber-400/60 shadow-lg"
          >
            <Globe className="w-4 h-4 text-amber-400" />
            <span>{language === 'en' ? 'ಕನ್ನಡ Interface' : 'English Interface'}</span>
          </button>

          {/* Role Switcher */}
          <div className="flex items-center gap-2 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-slate-700/80 shadow-inner">
            <UserCheck className="w-4 h-4 text-cyan-400" />
            <select
              value={currentRole.id}
              onChange={(e) => {
                const selected = Object.values(ROLES).find(r => r.id === e.target.value);
                if (selected) setCurrentRole(selected);
              }}
              className="bg-transparent text-xs font-bold text-slate-100 focus:outline-none cursor-pointer pr-2"
            >
              {Object.values(ROLES).map((role) => (
                <option key={role.id} value={role.id} className="bg-slate-950 text-slate-100 font-sans">
                  {role.title} [{role.badge}]
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Module Navigation Tabs */}
      <div className="max-w-[1750px] mx-auto px-6 flex items-center gap-2 overflow-x-auto border-t border-slate-800/80 pt-2.5 pb-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-amber-500/20 via-blue-950/80 to-cyan-950/50 text-amber-300 border border-amber-400/60 shadow-lg shadow-amber-500/10'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900/60 border border-transparent'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400 animate-pulse' : 'text-slate-500'}`} />
              <span>{language === 'kn' ? tab.labelKn : tab.labelEn}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                isActive ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40' : 'bg-slate-800/80 text-slate-400'
              }`}>
                {tab.badge}
              </span>
            </button>
          );
        })}
      </div>
    </header>
  );
}

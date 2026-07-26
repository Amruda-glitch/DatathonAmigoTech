import React from 'react';
import { Shield, Globe, UserCheck } from 'lucide-react';
import { ROLES, SYSTEM_INFO } from '../data/mockData';

export default function TopNavbar({ 
  activeTab = 'copilot', 
  setActiveTab, 
  language = 'en', 
  setLanguage, 
  currentRole = ROLES.INVESTIGATOR, 
  setCurrentRole 
}) {
  const navItems = [
    { id: 'copilot', labelEn: 'AI Copilot', labelKn: 'ಎಐ ಸಹಾಯಕ' },
    { id: 'cctv', labelEn: 'Real-Time CCTV AI', labelKn: 'ಸಿಸಿಟಿವಿ ಎಐ ಕಾವಲು' },
    { id: 'graph', labelEn: 'Knowledge Graph', labelKn: 'ಅಪರಾಧ ಜಾಲ' },
    { id: 'gis', labelEn: 'Crime GIS Map', labelKn: 'ಅಪರಾಧ ವಲಯ' },
    { id: 'offenders', labelEn: 'Offender Profiler', labelKn: 'ಅಪರಾಧಿ ಪ್ರೊಫೈಲ್' },
    { id: 'workspace', labelEn: 'Case Workspace', labelKn: 'ಕಾರ್ಯಸ್ಥಳ' },
    { id: 'audit', labelEn: 'Governance & Audit', labelKn: 'ಎಐ ಆಡಿಟ್' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      {/* Top Utility Status Bar */}
      <div className="bg-[#0F172A] text-slate-300 px-6 py-1.5 flex items-center justify-between text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            ICJS 2.0 & MCCTNS Connected
          </span>
          <span className="text-slate-700">|</span>
          <span className="text-slate-300">Database: <strong className="text-white font-mono font-semibold">1.42M Indexed FIR Records</strong></span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-amber-400 font-medium">
            {language === 'kn' ? 'ಕರ್ನಾಟಕ ಸರ್ಕಾರ | ಗೃಹ ಇಲಾಖೆ' : 'Government of Karnataka | Home Department'}
          </span>
        </div>
      </div>

      {/* Main Corporate Header Bar */}
      <div className="max-w-[1750px] mx-auto px-6 py-3 flex items-center justify-between gap-6">
        {/* Left Logo Branding */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab && setActiveTab('copilot')}>
          <div className="w-10 h-10 rounded-lg bg-[#0F172A] border border-amber-500/40 flex items-center justify-center shrink-0">
            <Shield className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-slate-900 tracking-tight">
                {SYSTEM_INFO.platformName}
              </h1>
              <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-bold">
                KSP Portal
              </span>
            </div>
            <p className="text-xs text-slate-500">
              {language === 'kn' ? 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಪೊಲೀಸ್ ತನಿಖಾ ಪೋರ್ಟಲ್' : 'Karnataka State Police Decision Support Platform'}
            </p>
          </div>
        </div>

        {/* Center Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab && setActiveTab(item.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-white text-blue-900 border border-slate-200 shadow-sm font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {language === 'kn' ? item.labelKn : item.labelEn}
              </button>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <button
            onClick={() => setLanguage && setLanguage(language === 'en' ? 'kn' : 'en')}
            className="btn-light-secondary text-xs flex items-center gap-1.5 px-3 py-1.5"
          >
            <Globe className="w-3.5 h-3.5 text-amber-700" />
            <span>{language === 'en' ? 'ಕನ್ನಡ' : 'English'}</span>
          </button>

          {/* Role Profile Switcher */}
          <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 text-xs">
            <UserCheck className="w-3.5 h-3.5 text-blue-700" />
            <select
              value={currentRole?.id || 'investigator'}
              onChange={(e) => {
                const selected = Object.values(ROLES).find(r => r.id === e.target.value);
                if (selected && setCurrentRole) setCurrentRole(selected);
              }}
              className="bg-transparent text-xs font-bold text-slate-800 focus:outline-none cursor-pointer pr-1"
            >
              {Object.values(ROLES).map((role) => (
                <option key={role.id} value={role.id} className="bg-white text-slate-800">
                  {role.rank} ({role.badge})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}

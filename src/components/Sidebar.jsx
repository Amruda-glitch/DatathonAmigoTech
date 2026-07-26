import React from 'react';
import { Shield, Cpu, Network, MapPin, UserX, FolderKanban, ShieldCheck, UserCheck, ChevronRight } from 'lucide-react';
import { ROLES, SYSTEM_INFO } from '../data/mockData';

export default function Sidebar({ activeTab, setActiveTab, language, currentRole, setCurrentRole }) {
  const menuItems = [
    { id: 'copilot', labelEn: 'AI Police Copilot', labelKn: 'ಎಐ ಪೊಲೀಸ್ ಸಹಾಯಕ', icon: Cpu, badge: 'RAG' },
    { id: 'graph', labelEn: 'Knowledge Graph', labelKn: 'ಅಪರಾಧ ಜಾಲ ನಕ್ಷೆ', icon: Network, badge: 'Neo4j' },
    { id: 'gis', labelEn: 'GIS Crime Hotspots', labelKn: 'ಅಪರಾಧ ವಲಯ ನಕ್ಷೆ', icon: MapPin, badge: 'GIS' },
    { id: 'offenders', labelEn: 'Offender Profiler', labelKn: 'ಅಪರಾಧಿ ಪ್ರೊಫೈಲ್', icon: UserX, badge: 'Scores' },
    { id: 'workspace', labelEn: 'Case Workspace', labelKn: 'ಪ್ರಕರಣಗಳ ಕಾರ್ಯಸ್ಥಳ', icon: FolderKanban, badge: 'Leads' },
    { id: 'audit', labelEn: 'XAI Governance', labelKn: 'ಎಐ ಆಡಿಟ್ ಮತ್ತು ನೀತಿ', icon: ShieldCheck, badge: 'Audit' },
  ];

  return (
    <aside className="w-64 bg-[#050D1E] border-r border-[rgba(212,175,55,0.2)] flex flex-col justify-between h-screen sticky top-0 z-40 shrink-0 select-none shadow-2xl">
      {/* Top Section: KSP Logo & Platform Title */}
      <div className="p-4 space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-md flex items-center justify-center shrink-0">
            <div className="w-full h-full bg-[#071126] rounded-[10px] flex items-center justify-center">
              <Shield className="w-6 h-6 text-amber-400" />
            </div>
          </div>
          <div>
            <h1 className="text-base font-extrabold text-amber-300 tracking-tight font-serif">
              {SYSTEM_INFO.platformName}
            </h1>
            <p className="text-[11px] text-slate-400 font-semibold">
              Karnataka State Police
            </p>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="space-y-1.5">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-3 block mb-2">
            Main Intelligence Modules
          </span>

          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500/20 via-blue-900/40 to-slate-900 text-amber-300 border border-amber-500/40 shadow-lg shadow-amber-500/10'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                  <span className="truncate">{language === 'kn' ? item.labelKn : item.labelEn}</span>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${
                  isActive ? 'bg-amber-400/20 text-amber-300' : 'bg-slate-800 text-slate-500'
                }`}>
                  {item.badge}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Profile & Role Switcher */}
      <div className="p-4 border-t border-slate-800 bg-[#030915] space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-xs font-bold text-amber-400">
            👮
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-xs font-bold text-slate-200 block truncate">{currentRole.rank}</span>
            <span className="text-[10px] text-slate-400 block font-mono">Badge: {currentRole.badge}</span>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Switch RBAC Role:</label>
          <select
            value={currentRole.id}
            onChange={(e) => {
              const selected = Object.values(ROLES).find(r => r.id === e.target.value);
              if (selected) setCurrentRole(selected);
            }}
            className="w-full bg-slate-900 text-slate-300 text-xs font-semibold border border-slate-800 rounded-lg p-2 focus:outline-none cursor-pointer"
          >
            {Object.values(ROLES).map((role) => (
              <option key={role.id} value={role.id}>
                {role.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    </aside>
  );
}

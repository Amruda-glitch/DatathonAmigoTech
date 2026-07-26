import React, { useState } from 'react';
import TopNavbar from './components/TopNavbar';
import CopilotModule from './components/CopilotModule';
import CCTVMonitoringModule from './components/CCTVMonitoringModule';
import NetworkGraphModule from './components/NetworkGraphModule';
import GISMapModule from './components/GISMapModule';
import OffenderProfileModule from './components/OffenderProfileModule';
import InvestigatorWorkspaceModule from './components/InvestigatorWorkspaceModule';
import AuditGovernanceModule from './components/AuditGovernanceModule';
import { ROLES } from './data/mockData';

export default function App() {
  const [currentRole, setCurrentRole] = useState(ROLES.INVESTIGATOR);
  const [language, setLanguage] = useState('en');
  const [activeTab, setActiveTab] = useState('copilot');

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans flex flex-col selection:bg-amber-100 selection:text-amber-900">
      {/* Light Theme Top Navigation Bar */}
      <TopNavbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        language={language}
        setLanguage={setLanguage}
        currentRole={currentRole}
        setCurrentRole={setCurrentRole}
      />

      {/* Main Module Content Container */}
      <main className="flex-1 max-w-[1750px] w-full mx-auto px-6 py-6">
        {activeTab === 'copilot' && (
          <CopilotModule
            language={language}
            currentRole={currentRole}
            setActiveTab={setActiveTab}
          />
        )}
        {activeTab === 'cctv' && (
          <CCTVMonitoringModule
            language={language}
            currentRole={currentRole}
            setActiveTab={setActiveTab}
          />
        )}
        {activeTab === 'graph' && (
          <NetworkGraphModule language={language} currentRole={currentRole} />
        )}
        {activeTab === 'gis' && (
          <GISMapModule language={language} currentRole={currentRole} />
        )}
        {activeTab === 'offenders' && (
          <OffenderProfileModule language={language} currentRole={currentRole} />
        )}
        {activeTab === 'workspace' && (
          <InvestigatorWorkspaceModule language={language} currentRole={currentRole} />
        )}
        {activeTab === 'audit' && (
          <AuditGovernanceModule language={language} currentRole={currentRole} />
        )}
      </main>

      {/* Light Theme Professional Enterprise Footer */}
      <footer className="w-full border-t border-slate-200 bg-white py-4 px-6 text-xs text-slate-600 mt-auto">
        <div className="max-w-[1750px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="font-bold text-slate-900">
              {language === 'kn' ? 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಪೊಲೀಸ್ - ಕೆ.ಎಸ್.ಪಿ ದೃಷ್ಟಿ ಎಐ ವೆಬ್ ಪೋರ್ಟಲ್' : 'Karnataka State Police - KSP Drishti AI Decision Support Platform'}
            </span>
          </div>

          <div className="flex items-center gap-6 text-slate-600 font-mono text-[11px]">
            <span>ICJS 2.0 & MCCTNS Direct Line</span>
            <span>DPDP Act 2023 Audit Compliant</span>
            <span className="text-amber-800 font-bold">Version 5.0 Light Enterprise</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

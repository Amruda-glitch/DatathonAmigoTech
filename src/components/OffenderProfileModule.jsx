import React, { useState } from 'react';
import { UserX, Users, Calendar, Award, ChevronRight } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { OFFENDERS } from '../data/mockData';

export default function OffenderProfileModule({ language }) {
  const [selectedOffender, setSelectedOffender] = useState(OFFENDERS[0]);

  return (
    <div className="max-w-[1750px] mx-auto space-y-6">
      <div className="light-card p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center">
            <UserX className="w-5 h-5 text-rose-700" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              {language === 'kn' ? 'ಅಭ್ಯಾಸಬಲ ಅಪರಾಧಿ ಅಪಾಯದ ಅಂಕ ಮತ್ತು ಪ್ರೊಫೈಲ್' : 'Offender Risk Profiling & Behavioral Criminology'}
            </h2>
            <p className="text-xs text-slate-600">
              {language === 'kn' 
                ? 'ಪುನರಾವರ್ತಿತ ಅಪರಾಧಿಗಳ ಅಪಾಯ ಸೂಚ್ಯಂಕ, ಗ್ಯಾಂಗ್ ನೆಟ್‌ವರ್ಕ್ ಮತ್ತು ಜಾಮೀನು ನಿಯಮ ಉಲ್ಲಂಘನೆ ಪರಿಶೀಲಿಸಿ.' 
                : 'Scoring repeat offenders using behavioral metrics, violent escalation index, and gang density for prioritization.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold">
          <span className="text-slate-600">Select Offender Profile:</span>
          <select
            value={selectedOffender.id}
            onChange={(e) => {
              const off = OFFENDERS.find(o => o.id === e.target.value);
              if (off) setSelectedOffender(off);
            }}
            className="bg-white text-xs font-bold text-slate-900 border border-slate-300 rounded-lg px-3 py-1.5 focus:outline-none cursor-pointer shadow-sm"
          >
            {OFFENDERS.map(o => (
              <option key={o.id} value={o.id}>
                {o.name} [Risk Score: {o.riskScore}/100]
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Offender Profile */}
        <div className="light-card p-5 space-y-5">
          <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-amber-600 p-0.5 shadow-md flex items-center justify-center text-2xl font-bold text-white">
              👤
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">{selectedOffender.name}</h3>
              <p className="text-xs text-slate-600 font-medium kn-text">{selectedOffender.alias}</p>
              <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-900 border border-rose-300 text-[10px] font-bold mt-1 inline-block">
                {selectedOffender.category}
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-slate-700">Criminological Risk Score:</span>
              <strong className="text-rose-700 font-mono text-base">{selectedOffender.riskScore} / 100</strong>
            </div>
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden p-0.5 border border-slate-300">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-red-600 transition-all duration-500"
                style={{ width: `${selectedOffender.riskScore}%` }}
              ></div>
            </div>
            <p className="text-[11px] text-slate-600 font-medium">
              Status: <strong className="text-slate-900">{selectedOffender.status}</strong>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-500 block text-[11px]">Total FIRs Named</span>
              <strong className="text-slate-900 font-bold text-sm">{selectedOffender.historyCount} Cases</strong>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-500 block text-[11px]">Court Convictions</span>
              <strong className="text-slate-900 font-bold text-sm">{selectedOffender.convictions} Times</strong>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-amber-700" />
              Known Gang Associates ({selectedOffender.associates.length})
            </h4>
            <div className="space-y-1.5">
              {selectedOffender.associates.map((assoc, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 flex items-center justify-between shadow-sm font-medium">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                    {assoc}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center: Radar Chart */}
        <div className="light-card p-5 space-y-4 flex flex-col justify-between">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-700" />
              {language === 'kn' ? 'ಅಪರಾಧ ಆಯಾಮಗಳ ರೇಡಾರ್ ವಿಶ್ಲೇಷಣೆ' : 'Behavioral Risk Dimensions (Radar Chart)'}
            </h3>
            <span className="px-2.5 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200 text-[10px] font-bold">TransCrimeNet</span>
          </div>

          <div className="w-full h-[320px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={selectedOffender.radarMetrics}>
                <PolarGrid stroke="rgba(100, 116, 139, 0.2)" />
                <PolarAngleAxis dataKey="subject" stroke="#334155" tick={{ fill: '#334155', fontSize: 11, fontWeight: 'bold' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="rgba(100, 116, 139, 0.3)" />
                <Radar
                  name={selectedOffender.name}
                  dataKey="A"
                  stroke="#E11D48"
                  fill="#E11D48"
                  fillOpacity={0.35}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 space-y-1">
            <span className="font-bold text-amber-900 block">AI Risk Assessment Summary:</span>
            <p className="text-[11px] text-slate-700 leading-relaxed font-medium">
              High score in <strong>Bail Risk (98/100)</strong> & <strong>Recency (95/100)</strong> indicates immediate potential for repeat offenses. Surveillance advisory issued.
            </p>
          </div>
        </div>

        {/* Right Side: Timeline */}
        <div className="light-card p-5 space-y-4">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-700" />
              {language === 'kn' ? 'ಕ್ರಿಮಿನಲ್ ಹಿಸ್ಟರಿ ಟೈಮ್‌ಲೈನ್' : 'Criminal History Timeline'}
            </h3>
            <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-300 text-[10px] font-bold">CCTNS Verified</span>
          </div>

          <div className="space-y-4 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 text-xs">
            {selectedOffender.timeline.map((item, idx) => (
              <div key={idx} className="relative pl-7 space-y-1">
                <span className={`absolute left-1.5 top-1 w-3 h-3 rounded-full border-2 border-white ${
                  item.type === 'FIR' ? 'bg-amber-600' :
                  item.type === 'COURT' ? 'bg-purple-600' :
                  item.type === 'ARREST' ? 'bg-rose-600' : 'bg-emerald-600'
                }`}></span>
                <span className="font-mono text-[11px] text-slate-500 font-semibold block">{item.date}</span>
                <p className="text-slate-800 font-semibold leading-normal">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

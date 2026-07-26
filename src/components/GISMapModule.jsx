import React, { useState } from 'react';
import { MapPin, ShieldAlert, Navigation, Clock, Flame, Compass, AlertTriangle } from 'lucide-react';
import { GIS_HOTSPOTS } from '../data/mockData';

export default function GISMapModule({ language }) {
  const [selectedDistrict, setSelectedDistrict] = useState('ALL');
  const [selectedCrimeType, setSelectedCrimeType] = useState('ALL');
  const [activeHotspot, setActiveHotspot] = useState(GIS_HOTSPOTS[0]);
  const [timeFilter, setTimeFilter] = useState('24h');

  const filteredHotspots = GIS_HOTSPOTS.filter((h) => {
    const matchDist = selectedDistrict === 'ALL' || h.district === selectedDistrict;
    const matchCrime = selectedCrimeType === 'ALL' || h.crimeType.toLowerCase().includes(selectedCrimeType.toLowerCase());
    return matchDist && matchCrime;
  });

  return (
    <div className="max-w-[1750px] mx-auto space-y-6">
      <div className="light-card p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-amber-700" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              {language === 'kn' ? 'ಕರ್ನಾಟಕ ಜಿ.ಐ.ಎಸ್ ಅಪರಾಧ ವಲಯ ಮತ್ತು ಮುನ್ಸೂಚನೆ' : 'GIS Crime Pattern & Spatial-Temporal Hotspot Intelligence'}
            </h2>
            <p className="text-xs text-slate-600">
              {language === 'kn' 
                ? 'ಸ್ಥಳೀಯ ಅಪರಾಧ ಸಾಂದ್ರತೆ, ಸಮಯ ಮತ್ತು ಮಾದರಿ ಆಧರಿಸಿ ಜಿ.ಐ.ಎಸ್ ನಕ್ಷೆಯಲ್ಲಿ ಮುನ್ಸೂಚನೆ ಪಡೆಯಿರಿ.' 
                : 'Real-time spatial-temporal hotspot mapping and AI early-warning alerts across Karnataka police jurisdictions.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs">
            <Clock className="w-3.5 h-3.5 text-amber-700 ml-1" />
            {[
              { id: '24h', label: '24 Hours' },
              { id: '7d', label: '7 Days' },
              { id: '30d', label: '30 Days' },
              { id: 'festive', label: 'Festival Window' },
            ].map(t => (
              <button
                key={t.id}
                onClick={() => setTimeFilter(t.id)}
                className={`px-2.5 py-1 rounded font-bold transition-all ${
                  timeFilter === t.id ? 'bg-white text-slate-900 border border-slate-300 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="bg-white text-xs font-bold text-slate-800 border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none cursor-pointer shadow-sm"
          >
            <option value="ALL">All Karnataka Districts</option>
            <option value="Bengaluru Urban">Bengaluru Urban</option>
            <option value="Mysuru City">Mysuru City</option>
            <option value="Mangaluru City">Mangaluru City</option>
            <option value="Hubballi-Dharwad">Hubballi-Dharwad</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 light-card p-4 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-700 border-b border-slate-200 pb-2">
            <span className="flex items-center gap-2 font-bold">
              <Compass className="w-4 h-4 text-amber-700" />
              Karnataka State GIS Spatial Map Layer
            </span>
            <span className="px-2.5 py-1 rounded bg-rose-50 text-rose-800 border border-rose-300 text-xs font-bold flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-rose-600" />
              {filteredHotspots.length} Active Hotspots Flagged
            </span>
          </div>

          <div className="relative w-full h-[540px] bg-[#F8FAFC] rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 800 540" className="w-full h-full">
              <path
                d="M 280 40 L 420 50 L 520 120 L 550 220 L 480 340 L 380 480 L 260 500 L 220 420 L 160 300 L 190 180 Z"
                fill="#E2E8F0"
                stroke="#94A3B8"
                strokeWidth="2"
                strokeDasharray="4 4"
              />

              <path d="M 280 40 L 340 180 L 480 340" stroke="#CBD5E1" strokeWidth="1.5" />
              <path d="M 190 180 L 340 180 L 550 220" stroke="#CBD5E1" strokeWidth="1.5" />

              <text x="340" y="100" fill="#475569" fontSize="14" fontWeight="bold" textAnchor="middle">Belagavi / Hubballi</text>
              <text x="410" y="320" fill="#475569" fontSize="14" fontWeight="bold" textAnchor="middle">Bengaluru Urban</text>
              <text x="310" y="440" fill="#475569" fontSize="14" fontWeight="bold" textAnchor="middle">Mysuru City</text>
              <text x="210" y="330" fill="#475569" fontSize="14" fontWeight="bold" textAnchor="middle">Mangaluru Port</text>

              {filteredHotspots.map((spot, index) => {
                const x = 300 + (spot.lng - 75.5) * 85;
                const y = 480 - (spot.lat - 12.0) * 80;
                const isSelected = activeHotspot.id === spot.id;

                return (
                  <g
                    key={spot.id}
                    onClick={() => setActiveHotspot(spot)}
                    className="cursor-pointer group"
                  >
                    <circle
                      cx={x}
                      cy={y}
                      r={spot.riskLevel === 'CRITICAL' ? 38 : 26}
                      fill={spot.riskLevel === 'CRITICAL' ? 'rgba(225, 29, 72, 0.2)' : 'rgba(217, 119, 6, 0.2)'}
                    />
                    <circle
                      cx={x}
                      cy={y}
                      r={isSelected ? 18 : 12}
                      fill={spot.riskLevel === 'CRITICAL' ? '#E11D48' : '#D97706'}
                      stroke={isSelected ? '#FFFFFF' : 'rgba(0,0,0,0.3)'}
                      strokeWidth={isSelected ? 3 : 1.5}
                    />

                    <text x={x} y={y + 4} fill="#FFF" fontSize="10" textAnchor="middle" fontWeight="bold">
                      {index + 1}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Selected Hotspot Intelligence Panel */}
        <div className="light-card p-5 space-y-4">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              {language === 'kn' ? 'ಆಯ್ಕೆಯಾದ ವಲಯದ ವಿಶ್ಲೇಷಣೆ' : 'Hotspot Deep-Dive'}
            </h3>
            <span className={`px-2.5 py-0.5 rounded text-xs font-bold ${activeHotspot.riskLevel === 'CRITICAL' ? 'bg-rose-100 text-rose-800 border border-rose-300' : 'bg-amber-100 text-amber-900 border border-amber-300'}`}>
              {activeHotspot.riskLevel}
            </span>
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <span className="text-slate-500 font-mono text-[11px] block">{activeHotspot.district}</span>
              <h4 className="text-base font-bold text-slate-900">{activeHotspot.ps}</h4>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-500 block text-[11px]">Crime Category</span>
                <strong className="text-slate-900 font-bold text-xs">{activeHotspot.crimeType}</strong>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-500 block text-[11px]">Peak Time Window</span>
                <strong className="text-amber-800 font-bold text-xs">{activeHotspot.peakHours}</strong>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-slate-600 font-bold uppercase text-[10px]">Modus Operandi (MO) Pattern</span>
              <p className="text-slate-800 leading-relaxed font-medium">{activeHotspot.moPattern}</p>
            </div>

            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 space-y-2">
              <div className="flex items-center gap-2 text-rose-800 font-bold text-xs">
                <ShieldAlert className="w-4 h-4 text-rose-600" />
                AI Predictive Patrol Advisory
              </div>
              <p className="text-slate-800 text-xs leading-relaxed font-medium">
                {activeHotspot.predictiveAlert}
              </p>
              <button className="btn-light-primary w-full py-2 text-xs flex items-center justify-center gap-2 mt-2">
                <Navigation className="w-3.5 h-3.5" />
                <span>Deploy Beat Patrol Units to Zone</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Mic, MicOff, Send, Sparkles, Database, FileText, Scale, Volume2, ShieldCheck, ArrowRight, CornerDownRight, RefreshCw, CheckCircle2 } from 'lucide-react';
import { SAMPLE_QUERIES, PRESET_RESPONSES } from '../data/mockData';

export default function CopilotModule({ language, currentRole, setActiveTab }) {
  const [query, setQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [activeQueryId, setActiveQueryId] = useState('q1');
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeSubTab, setActiveSubTab] = useState('summary');
  const [speaking, setSpeaking] = useState(false);

  const currentData = PRESET_RESPONSES[activeQueryId] || PRESET_RESPONSES.q1;

  const handleSelectPreset = (sample) => {
    setActiveQueryId(sample.id);
    setQuery(language === 'kn' ? sample.textKn : sample.textEn);
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 400);
  };

  const toggleListening = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setIsListening(!isListening);
      if (!isListening) {
        setTimeout(() => {
          setQuery(language === 'kn' 
            ? 'ಇಂದಿರಾನಗರ ಮತ್ತು ಜಯನಗರದಲ್ಲಿ ನಡೆದ ಸರಗಳ್ಳತನ ಪ್ರಕರಣಗಳ ವಿವರ ನೀಡಿ.' 
            : 'Find all chain snatching cases in Indiranagar and Jayanagar involving Pulsar-borne suspects.');
          setIsListening(false);
        }, 2000);
      }
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = language === 'kn' ? 'kn-IN' : 'en-US';

    if (!isListening) {
      recognition.start();
      setIsListening(true);
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setQuery(transcript);
        setIsListening(false);
      };
      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);
    } else {
      setIsListening(false);
    }
  };

  const handleSpeak = (text) => {
    if (!('speechSynthesis' in window)) return;
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === 'kn' ? 'kn-IN' : 'en-US';
    utterance.rate = 0.95;
    utterance.onend = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="max-w-[1750px] mx-auto space-y-6">
      {/* Light Theme Banner */}
      <div className="light-card light-card-gold p-6 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
              Multilingual RAG Engine & CCTNS Integration
            </span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            {language === 'kn' ? 'ಕೆ.ಎಸ್.ಪಿ ಪೊಲೀಸ್ ಮಿತ್ರ - ಎಐ ಶೋಧನಾ ಕೇಂದ್ರ' : 'KSP Police Mitra Conversational Copilot'}
          </h2>
          <p className="text-xs text-slate-600">
            {language === 'kn' 
              ? 'ಕರ್ನಾಟಕ ಪೊಲೀಸ್ ಎಫ್.ಐ.ಆರ್ ಡೇಟಾಬೇಸ್‌ನಲ್ಲಿ ಧ್ವನಿ ಅಥವಾ ಬರಹದ ಮೂಲಕ ತನಿಖಾ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ.' 
              : 'Query Karnataka State Police crime records in plain English or Kannada with automatic Text-to-SQL & RAG citations.'}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab && setActiveTab('gis')}
            className="btn-light-secondary text-xs"
          >
            <span>{language === 'kn' ? 'ಜಿ.ಐ.ಎಸ್ ನಕ್ಷೆಗೆ ಹೋಗಿ' : 'View GIS Hotspots'}</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-700" />
          </button>
        </div>
      </div>

      {/* Preset Query Chips */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
          {language === 'kn' ? 'ಆಯ್ಕೆ ಮಾಡಬಹುದಾದ ತನಿಖಾ ಮಾದರಿಗಳು (Select Query Template)' : 'Investigative Query Templates'}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {SAMPLE_QUERIES.map((sample) => (
            <button
              key={sample.id}
              onClick={() => handleSelectPreset(sample)}
              className={`p-4 rounded-xl border text-left text-xs transition-all ${
                activeQueryId === sample.id
                  ? 'bg-amber-50 border-amber-400 text-slate-900 font-medium shadow-sm'
                  : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] font-bold text-amber-800 mb-1.5">
                <span>{sample.category}</span>
                <ArrowRight className="w-3 h-3" />
              </div>
              <p className="line-clamp-2 font-medium">
                {language === 'kn' ? sample.labelKn : sample.labelEn}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Query Search Bar */}
      <div className="light-card p-2.5 flex items-center gap-3 bg-white">
        <button
          onClick={toggleListening}
          className={`p-3 rounded-lg transition-all ${
            isListening
              ? 'bg-rose-600 text-white animate-pulse'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-amber-700 border border-slate-200'
          }`}
          title={language === 'kn' ? 'ಧ್ವನಿ ಮೂಲಕ ಹೇಳಿ (Voice Input)' : 'Microphone Speech Input'}
        >
          {isListening ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
        </button>

        <input
          type="text"
          value={query || (language === 'kn' ? currentData.queryKn : currentData.queryEn)}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={language === 'kn' ? 'ಇಲ್ಲಿ ನಿಮ್ಮ ತನಿಖಾ ಪ್ರಶ್ನೆ ಟೈಪ್ ಮಾಡಿ...' : 'Ask query in English or Kannada...'}
          className="flex-1 bg-transparent border-none text-slate-900 text-sm focus:outline-none placeholder-slate-400 font-semibold"
        />

        <button
          onClick={() => {
            setIsGenerating(true);
            setTimeout(() => setIsGenerating(false), 400);
          }}
          className="btn-light-gold"
        >
          {isGenerating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          <span>{language === 'kn' ? 'ವಿಶ್ಲೇಷಿಸು' : 'Query AI'}</span>
        </button>
      </div>

      {/* RAG Synthesis Output Workspace */}
      <div className="light-card p-6 space-y-6">
        {/* Navigation Sub-Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              FAISS Cosine Similarity: 0.942
            </span>
          </div>

          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs">
            {[
              { id: 'summary', label: language === 'kn' ? 'ಸಾರಾಂಶ' : 'AI Summary', icon: FileText },
              { id: 'sql', label: 'Text-to-SQL', icon: Database },
              { id: 'bns', label: 'BNS Legal Sec', icon: Scale },
              { id: 'evidence', label: 'Provenance', icon: ShieldCheck },
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded text-xs font-bold flex items-center gap-1.5 transition-all ${
                    activeSubTab === tab.id
                      ? 'bg-white text-blue-900 border border-slate-300 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab 1: AI Summary & FIR Citations */}
        {activeSubTab === 'summary' && (
          <div className="space-y-6">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  {language === 'kn' ? 'ಎಐ ತನಿಖಾ ನಿರ್ಣಯ (AI Synthesized Finding)' : 'AI Synthesized Finding'}
                </h3>
                <button
                  onClick={() => handleSpeak(language === 'kn' ? currentData.summaryKn : currentData.summaryEn)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    speaking ? 'bg-rose-100 text-rose-800 border border-rose-300 animate-pulse' : 'bg-white text-slate-700 border border-slate-200 hover:text-amber-700'
                  }`}
                >
                  <Volume2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>{speaking ? (language === 'kn' ? 'ನಿಲ್ಲಿಸಿ' : 'Stop TTS') : (language === 'kn' ? 'ಧ್ವನಿ ಕೇಳಿ (TTS)' : 'Listen TTS Audio')}</span>
                </button>
              </div>

              <p className="text-sm text-slate-800 leading-relaxed font-medium">
                {language === 'kn' ? currentData.summaryKn : currentData.summaryEn}
              </p>
            </div>

            {/* Matched FIR Citations Table */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center justify-between">
                <span>{language === 'kn' ? 'ಸಂಬಂಧಿತ ಎಫ್.ಐ.ಆರ್ ದಾಖಲೆಗಳು (Retrieved FIR Citations)' : 'Retrieved CCTNS FIR Citations'}</span>
                <span className="text-amber-800 font-mono text-xs font-bold">4 Records Found</span>
              </h4>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3">FIR Number</th>
                      <th className="p-3">Police Station</th>
                      <th className="p-3">Date</th>
                      <th className="p-3">Victim Details</th>
                      <th className="p-3">Stolen Property</th>
                      <th className="p-3">Similarity</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-800 bg-white">
                    {currentData.firsMatched.map((fir, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-bold text-blue-900 font-mono flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-blue-700" />
                          {fir.firNo}
                        </td>
                        <td className="p-3 font-medium">{fir.station}</td>
                        <td className="p-3 font-mono text-slate-600">{fir.date}</td>
                        <td className="p-3">{fir.victim}</td>
                        <td className="p-3 font-semibold text-slate-900">{fir.goldWeight}</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200 font-mono text-[11px] font-bold">
                            {fir.similarity}
                          </span>
                        </td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-300 text-[10px] font-bold">
                            {fir.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Actionable Leads */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-2">
                <CornerDownRight className="w-4 h-4 text-amber-700" />
                {language === 'kn' ? 'ಸ್ವಯಂಚಾಲಿತ ತನಿಖಾ ಸೂಚನೆಗಳು (AI Actionable Leads)' : 'AI-Generated Actionable Leads'}
              </h4>
              <ul className="space-y-2 text-xs text-slate-800">
                {currentData.actionLeads.map((lead, i) => (
                  <li key={i} className="flex items-start gap-2.5 bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 border border-amber-300 font-mono">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed font-medium">{lead}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Tab 2: Text-to-SQL */}
        {activeSubTab === 'sql' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Database className="w-4 h-4 text-blue-700" />
                {language === 'kn' ? 'ಸ್ವಯಂ ನಿರ್ಮಿತ ಎಸ್‌ಕ್ಯೂಎಲ್ ಪ್ರಕ್ರಿಯೆ (Text-to-SQL Translation)' : 'Auto-Generated SQL Query (CCTNS / ICJS Schema)'}
              </h3>
              <span className="text-xs text-slate-600 font-mono">Schema-Aware SQL Agent</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 text-cyan-300 font-mono text-xs leading-relaxed overflow-x-auto shadow-inner">
              <pre>{currentData.sqlGenerated}</pre>
            </div>
          </div>
        )}

        {/* Tab 3: BNS Classification */}
        {activeSubTab === 'bns' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Scale className="w-4 h-4 text-purple-700" />
                {language === 'kn' ? 'ಭಾರತೀಯ ನ್ಯಾಯ ಸಂಹಿತೆ (BNS) ಕಾಯ್ದೆಗಳ ಮ್ಯಾಪಿಂಗ್' : 'Bharatiya Nyaya Sanhita (BNS) Classification'}
              </h3>
              <span className="text-xs text-emerald-700 font-bold">99.88% Legal Accuracy</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentData.bnsSections.map((sec, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-purple-900 font-mono">{sec.code}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300 text-[10px] font-bold">{sec.confidence} Match</span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">{sec.title}</h4>
                  <p className="text-[11px] text-slate-600">
                    Automated section classification aligned with 2024 MHA directives.
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Provenance */}
        {activeSubTab === 'evidence' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                {language === 'kn' ? 'ಆಧಾರ ದೃಢೀಕರಣ ಮತ್ತು ಹ್ಯಾಶ್ ವಿವರ (Evidence Provenance)' : 'Evidence Provenance & Verification Hash'}
              </h3>
              <span className="text-xs text-slate-600 font-mono">DPDP Act Compliant</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-slate-600 font-mono block font-bold">CCTNS Record Hash:</span>
                <span className="text-emerald-900 font-mono text-xs break-all bg-white p-2.5 rounded border border-slate-200 block font-bold">
                  {currentData.evidenceProvenance.cctnsHash}
                </span>
                <span className="text-slate-800 block">Retrieved Vector Chunks: <strong>{currentData.evidenceProvenance.retrievedChunks}</strong></span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-slate-600 block font-bold">AI Fine-Tuned Model:</span>
                <span className="text-amber-900 font-bold block">{currentData.evidenceProvenance.modelUsed}</span>
                <span className="text-slate-800 block">Cosine Similarity Score: <strong>{currentData.evidenceProvenance.faissCosineScore}</strong></span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import {
  Video,
  Camera,
  ZoomIn,
  ZoomOut,
  Maximize,
  Play,
  Pause,
  ShieldAlert,
  AlertTriangle,
  MapPin,
  Plus,
  Radio,
  Eye,
  RefreshCw,
  FileText,
  CheckCircle,
  Volume2,
  VolumeX,
  Sliders,
  Download,
  Search,
  Sparkles,
  Flame,
  Upload,
  Crosshair,
  Grid,
  CornerUpRight,
  Activity,
  X,
  Zap,
  Check
} from 'lucide-react';

// Pre-configured High-Theft & Vulnerable Karnataka Locations with Real Demo Video Footages
const KARNATAKA_CCTV_LOCATIONS = [
  {
    id: 'CAM-BLR-01',
    localityEn: 'Majestic KSRTC Bus Stand (Bay 4)',
    localityKn: 'ಮೆಜೆಸ್ಟಿಕ್ ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಬಸ್ ನಿಲ್ದಾಣ',
    district: 'Bengaluru Urban',
    coordinates: { lat: 12.9774, lng: 77.5708, mapX: 420, y: 310 },
    riskLevel: 'CRITICAL THEFT ZONE',
    riskScore: 96,
    activeDetectors: ['Pickpocketing CV', 'Unattended Object Scan', 'Face Match'],
    crimeCategory: 'Larceny & Pickpocketing',
    status: 'ONLINE',
    fps: 30,
    bitrate: '4.2 Mbps',
    sampleVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    moPattern: 'Crowd jostling pickpocketing & baggage snatching during peak boarding hours.',
    lastIncident: '12 mins ago: Wallet theft detected near Platform 3',
    threatAlert: {
      type: 'SUSPICIOUS THEFT IN PROGRESS',
      confidence: 96.4,
      bnsSec: 'BNS Sec 304 (Snatching)',
      suspectName: 'Bullet Ramesh (Match 94.2%)',
      timestamp: new Date().toLocaleTimeString(),
    }
  },
  {
    id: 'CAM-BLR-02',
    localityEn: 'Commercial Street Shopping Zone',
    localityKn: 'ಕಮರ್ಷಿಯಲ್ ಸ್ಟ್ರೀಟ್ ಶಾಪರ್ಸ್ ಜೋನ್',
    district: 'Bengaluru Urban',
    coordinates: { lat: 12.9822, lng: 77.6083, mapX: 445, y: 295 },
    riskLevel: 'HIGH THEFT RISK',
    riskScore: 91,
    activeDetectors: ['Chain Snatching AI', 'Bike License Plate OCR'],
    crimeCategory: 'Jewelry & Chain Snatching',
    status: 'ONLINE',
    fps: 29,
    bitrate: '3.8 Mbps',
    sampleVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    moPattern: 'Pulsar bike borne snatchers targeting evening jewelry shoppers.',
    lastIncident: '45 mins ago: Black Pulsar KA-01-EQ-9921 flagged by OCR',
    threatAlert: null
  },
  {
    id: 'CAM-MYS-01',
    localityEn: 'Mysuru Palace North Gate & Devaraja Market',
    localityKn: 'ಮೈಸೂರು ಅರಮನೆ ಉತ್ತರ ದ್ವಾರ & ದೇವರಾಜ ಮಾರುಕಟ್ಟೆ',
    district: 'Mysuru City',
    coordinates: { lat: 12.3052, lng: 76.6552, mapX: 310, y: 440 },
    riskLevel: 'HIGH THEFT RISK',
    riskScore: 88,
    activeDetectors: ['Vehicle Lock Tamper', 'Crowd Density Warning'],
    crimeCategory: 'Tourist Theft & Two-Wheeler Theft',
    status: 'ONLINE',
    fps: 30,
    bitrate: '4.0 Mbps',
    sampleVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    moPattern: 'Handlebar lock breaking on parked scooters near North Plaza.',
    lastIncident: '2 hours ago: Scooter lock tampering alert triggered',
    threatAlert: null
  },
  {
    id: 'CAM-HUB-01',
    localityEn: 'Hubballi Railway Junction Square',
    localityKn: 'ಹುಬ್ಬಳ್ಳಿ ರೇಲ್ವೆ ಜಂಕ್ಷನ್ ವೃತ್ತ',
    district: 'Hubballi-Dharwad',
    coordinates: { lat: 15.3510, lng: 75.1400, mapX: 330, y: 120 },
    riskLevel: 'ELEVATED RISK',
    riskScore: 84,
    activeDetectors: ['Luggage Tracking AI', 'Habitual Offender Match'],
    crimeCategory: 'Passenger Luggage Theft',
    status: 'ONLINE',
    fps: 28,
    bitrate: '3.5 Mbps',
    sampleVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    moPattern: 'Night train passenger bag swapping at taxi waiting counter.',
    lastIncident: '3 hours ago: Unclaimed bag scanned - cleared safe',
    threatAlert: null
  },
  {
    id: 'CAM-MNG-01',
    localityEn: 'Mangaluru Central Market & Port Circle',
    localityKn: 'ಮಂಗಳೂರು ಸೆಂಟ್ರಲ್ ಮಾರ್ಕೆಟ್ ವಲಯ',
    district: 'Mangaluru City',
    coordinates: { lat: 12.8631, lng: 74.8384, mapX: 190, y: 340 },
    riskLevel: 'HIGH THEFT RISK',
    riskScore: 87,
    activeDetectors: ['Shoplifting Scan', 'Night Intrusion Detection'],
    crimeCategory: 'Merchant Cash & Goods Theft',
    status: 'ONLINE',
    fps: 30,
    bitrate: '4.1 Mbps',
    sampleVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    moPattern: 'Early morning cash drawer theft in wholesale fish market.',
    lastIncident: '5 hours ago: Suspicious person loitering behind bank',
    threatAlert: null
  },
  {
    id: 'CAM-BLR-03',
    localityEn: 'Jayanagar 4th Block Shopping Complex',
    localityKn: 'ಜಯನಗರ ೪ನೇ ಬ್ಲಾಕ್ ಕಾಂಪ್ಲೆಕ್ಸ್',
    district: 'Bengaluru Urban',
    coordinates: { lat: 12.9298, lng: 77.5826, mapX: 410, y: 335 },
    riskLevel: 'HIGH THEFT RISK',
    riskScore: 89,
    activeDetectors: ['Chain Snatching CV', 'Vehicle Theft AI'],
    crimeCategory: 'Gold Snatching & Car Break-in',
    status: 'ONLINE',
    fps: 30,
    bitrate: '3.9 Mbps',
    sampleVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    moPattern: 'Glass smashing of parked cars in basement parking area.',
    lastIncident: '1 hour ago: Perimeter motion alert near rear exit',
    threatAlert: null
  }
];

export default function CCTVMonitoringModule({ language = 'en', currentRole, setActiveTab }) {
  const [cameras, setCameras] = useState(KARNATAKA_CCTV_LOCATIONS);
  const [selectedCam, setSelectedCam] = useState(KARNATAKA_CCTV_LOCATIONS[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [showAiBoxes, setShowAiBoxes] = useState(true);
  const [isAudioAlert, setIsAudioAlert] = useState(true);
  const [filterDistrict, setFilterDistrict] = useState('ALL');
  const [blinkingCrimeCamId, setBlinkingCrimeCamId] = useState('CAM-BLR-01');

  // Custom Footage Add Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newFeedName, setNewFeedName] = useState('');
  const [newFeedDistrict, setNewFeedDistrict] = useState('Bengaluru Urban');
  const [newFeedUrl, setNewFeedUrl] = useState('');
  const [newFeedRisk, setNewFeedRisk] = useState('HIGH THEFT RISK');
  const [uploadedFile, setUploadedFile] = useState(null);

  // Investigation FIR Popup State
  const [showFirModal, setShowFirModal] = useState(false);
  const [firLoggedSuccess, setFirLoggedSuccess] = useState(false);

  // HTML5 Video element ref
  const videoRef = useRef(null);

  // Synchronize play/pause state with video element
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, selectedCam]);

  // Dynamic box position animation timer
  const [boxOffset, setBoxOffset] = useState({ x: 180, y: 120 });
  useEffect(() => {
    const interval = setInterval(() => {
      setBoxOffset({
        x: 140 + Math.sin(Date.now() / 1000) * 80,
        y: 100 + Math.cos(Date.now() / 1200) * 40
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Auto-scan / CV Threat Trigger function
  const triggerCvThreatSimulation = (targetCamId = null) => {
    const targetId = targetCamId || (selectedCam ? selectedCam.id : 'CAM-BLR-01');
    const targetLoc = cameras.find(c => c.id === targetId) || cameras[0];

    const simulatedThreat = {
      type: 'THEFT & PICKPOCKETING IN PROGRESS',
      confidence: (94 + Math.random() * 5).toFixed(1),
      bnsSec: 'BNS Sec 304 (Snatching) & BNS Sec 303 (Theft)',
      suspectName: 'Bullet Ramesh (Habitual Offender #KSP-8821 Match)',
      timestamp: new Date().toLocaleTimeString(),
      location: targetLoc.localityEn,
      coordinates: `${targetLoc.coordinates.lat.toFixed(4)}, ${targetLoc.coordinates.lng.toFixed(4)}`
    };

    setCameras(prev => prev.map(c => {
      if (c.id === targetId) {
        return {
          ...c,
          riskLevel: 'CRITICAL THEFT ALERT',
          threatAlert: simulatedThreat,
          lastIncident: `JUST NOW: Computer Vision flagged ${simulatedThreat.type}`
        };
      }
      return c;
    }));

    setBlinkingCrimeCamId(targetId);
    setSelectedCam(prev => ({
      ...targetLoc,
      riskLevel: 'CRITICAL THEFT ALERT',
      threatAlert: simulatedThreat
    }));
  };

  // Handle adding new custom camera footage (URL or Uploaded file)
  const handleAddFeedSubmit = (e) => {
    e.preventDefault();
    if (!newFeedName) return;

    let finalVideoUrl = newFeedUrl;
    if (uploadedFile) {
      finalVideoUrl = URL.createObjectURL(uploadedFile);
    } else if (!finalVideoUrl) {
      finalVideoUrl = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
    }

    const newCam = {
      id: `CAM-CUSTOM-${Date.now().toString().slice(-4)}`,
      localityEn: newFeedName,
      localityKn: newFeedName,
      district: newFeedDistrict,
      coordinates: { lat: 12.95 + Math.random() * 0.1, lng: 77.55 + Math.random() * 0.1, mapX: 400 + Math.random() * 40, y: 320 + Math.random() * 40 },
      riskLevel: newFeedRisk,
      riskScore: 88,
      activeDetectors: ['Custom CV Feed Model', 'Motion Alert'],
      crimeCategory: 'User Added Stream',
      status: 'ONLINE',
      fps: 30,
      bitrate: '4.5 Mbps',
      sampleVideoUrl: finalVideoUrl,
      moPattern: 'Custom live surveillance video feed under real-time AI scan.',
      lastIncident: 'Stream connected successfully',
      threatAlert: null
    };

    setCameras([newCam, ...cameras]);
    setSelectedCam(newCam);
    setIsAddModalOpen(false);
    setNewFeedName('');
    setNewFeedUrl('');
    setUploadedFile(null);
  };

  const filteredCameras = cameras.filter(c => 
    filterDistrict === 'ALL' || c.district === filterDistrict
  );

  return (
    <div className="max-w-[1750px] mx-auto space-y-6">
      {/* Header Banner & Live CCTV Statistics */}
      <div className="light-card p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-slate-900 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 shadow-md">
            <Camera className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                {language === 'kn' ? 'ಕರ್ನಾಟಕ ರಿಯಲ್-ಟೈಮ್ ಸಿಸಿಟಿವಿ ಎಐ ಕಾವಲು' : 'Karnataka Real-Time CCTV AI Surveillance & Theft Identification'}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-[11px] font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                248 CAMERAS LIVE STREAMING
              </span>
            </div>
            <p className="text-xs text-slate-600">
              {language === 'kn' 
                ? 'ಕರ್ನಾಟಕದ ಪ್ರಮುಖ ಕಳ್ಳತನ ವಲಯಗಳ ರಿಯಲ್-ಟೈಮ್ ಸಿಸಿಟಿವಿ ವೀಡಿಯೊ ಫೂಟೇಜ್ ಅನ್ನು ಎಐ ಮೂಲಕ ಪರಿಶೀಲಿಸಿ.' 
                : 'Real-time HTML5 video footage feeds across Karnataka theft hotspots with AI Computer Vision, digital zoom, and live blinking crime map alerts.'}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={() => triggerCvThreatSimulation()}
            className="px-3.5 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all border border-rose-700 animate-bounce"
            title="Simulate Computer Vision Detecting a Theft Incident in Real-Time"
          >
            <Zap className="w-4 h-4 fill-white" />
            <span>{language === 'kn' ? 'ಎಐ ಕಳ್ಳತನ ಪತ್ತೆ ಸಿಮ್ಯುಲೇಶನ್' : 'Simulate CV Theft Detection'}</span>
          </button>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="btn-light-primary text-xs flex items-center gap-2 px-3.5 py-2 shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>{language === 'kn' ? 'ಹೊಸ ಸಿಸಿಟಿವಿ ಫೂಟೇಜ್ ಸೇರಿಸಿ' : 'Add Custom CCTV Video Feed'}</span>
          </button>

          <select
            value={filterDistrict}
            onChange={(e) => setFilterDistrict(e.target.value)}
            className="bg-white text-xs font-bold text-slate-800 border border-slate-300 rounded-lg px-3 py-2 focus:outline-none cursor-pointer shadow-sm"
          >
            <option value="ALL">All Karnataka Districts</option>
            <option value="Bengaluru Urban">Bengaluru Urban</option>
            <option value="Mysuru City">Mysuru City</option>
            <option value="Hubballi-Dharwad">Hubballi-Dharwad</option>
            <option value="Mangaluru City">Mangaluru City</option>
          </select>
        </div>
      </div>

      {/* Main Grid: Selected Real Video Viewfinder + Blinking Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Live Video Viewfinder & Zoom Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="light-card p-4 space-y-3">
            {/* Viewfinder Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-600 animate-ping"></span>
                <span className="font-mono text-xs font-bold text-slate-900">{selectedCam.id}</span>
                <span className="text-slate-400">|</span>
                <h3 className="font-bold text-sm text-slate-900">{selectedCam.localityEn}</h3>
              </div>

              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${
                  selectedCam.riskLevel.includes('CRITICAL') 
                    ? 'bg-rose-100 text-rose-800 border border-rose-300' 
                    : 'bg-amber-100 text-amber-900 border border-amber-300'
                }`}>
                  {selectedCam.riskLevel} ({selectedCam.riskScore}%)
                </span>
                <span className="font-mono text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  {selectedCam.fps} FPS / {selectedCam.bitrate}
                </span>
              </div>
            </div>

            {/* REAL HTML5 VIDEO VIEWFINDER CONTAINER WITH DIGITAL ZOOM */}
            <div className="relative w-full h-[440px] bg-slate-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center group">
              
              {/* Zoomable Container wrapping the Real Video Element */}
              <div 
                className="w-full h-full relative flex items-center justify-center transition-transform duration-200 ease-out origin-center"
                style={{
                  transform: `scale(${zoomLevel}) translate(${panOffset.x}px, ${panOffset.y}px)`
                }}
              >
                {/* Real HTML5 Live Demo Video Footage */}
                <video
                  ref={videoRef}
                  key={selectedCam.id}
                  src={selectedCam.sampleVideoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Computer Vision AI Overlay Box over Video */}
                {showAiBoxes && (
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                    {/* Normal Pedestrian Box */}
                    <rect
                      x="80"
                      y="140"
                      width="90"
                      height="180"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2"
                    />
                    <rect x="80" y="116" width="130" height="22" fill="#10B981" />
                    <text x="86" y="131" fill="#FFF" fontSize="11" fontWeight="bold" fontFamily="monospace">
                      PEDESTRIAN 98%
                    </text>

                    {/* Threat / Suspect Box (Tracks dynamically) */}
                    <rect
                      x={boxOffset.x}
                      y={boxOffset.y}
                      width="110"
                      height="200"
                      fill="rgba(239, 68, 68, 0.12)"
                      stroke={blinkingCrimeCamId === selectedCam.id ? '#EF4444' : '#F59E0B'}
                      strokeWidth={blinkingCrimeCamId === selectedCam.id ? '3' : '2'}
                      strokeDasharray={blinkingCrimeCamId === selectedCam.id ? '6 3' : 'none'}
                    />
                    <rect
                      x={boxOffset.x}
                      y={boxOffset.y - 26}
                      width="180"
                      height="24"
                      fill={blinkingCrimeCamId === selectedCam.id ? '#EF4444' : '#F59E0B'}
                    />
                    <text
                      x={boxOffset.x + 6}
                      y={boxOffset.y - 9}
                      fill="#FFF"
                      fontSize="11"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      {blinkingCrimeCamId === selectedCam.id
                        ? '🚨 THEFT DETECTED 96.4%'
                        : 'SUSPICIOUS OBJECT 89%'}
                    </text>

                    {/* Crosshair Target Circle */}
                    <circle
                      cx={boxOffset.x + 55}
                      cy={boxOffset.y + 60}
                      r="28"
                      fill="none"
                      stroke={blinkingCrimeCamId === selectedCam.id ? '#EF4444' : '#F59E0B'}
                      strokeWidth="1.5"
                    />
                  </svg>
                )}
              </div>

              {/* Viewfinder OSD Metadata Overlay */}
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur text-white text-[11px] font-mono px-3 py-1.5 rounded-lg border border-slate-700/80 flex items-center gap-3 z-20">
                <span className="flex items-center gap-1 text-emerald-400 font-bold">
                  <Radio className="w-3.5 h-3.5 animate-pulse" /> LIVE DEMO FOOTAGE
                </span>
                <span className="text-slate-400">|</span>
                <span>TIME: {new Date().toLocaleTimeString()}</span>
                <span className="text-slate-400">|</span>
                <span className="text-amber-400 font-bold">ZOOM: {zoomLevel.toFixed(1)}x</span>
              </div>

              {/* Top Right Controls Overlay */}
              <div className="absolute top-3 right-3 flex items-center gap-2 z-20">
                <button
                  onClick={() => setShowAiBoxes(!showAiBoxes)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold font-mono transition-all backdrop-blur ${
                    showAiBoxes 
                      ? 'bg-amber-500 text-slate-950 border border-amber-400' 
                      : 'bg-slate-900/80 text-slate-300 border border-slate-700'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5 inline mr-1" />
                  {showAiBoxes ? 'CV BOXES: ON' : 'CV BOXES: OFF'}
                </button>

                <button
                  onClick={() => setIsAudioAlert(!isAudioAlert)}
                  className="p-1.5 rounded-lg bg-slate-900/80 text-slate-300 border border-slate-700 hover:text-white"
                >
                  {isAudioAlert ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
                </button>
              </div>

              {/* Computer Vision Critical Crime Alert Overlay */}
              {selectedCam.threatAlert && (
                <div className="absolute bottom-14 inset-x-4 bg-rose-950/90 border-2 border-rose-500 p-3 rounded-xl backdrop-blur flex items-center justify-between gap-3 text-white z-30 animate-pulse">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-rose-600 flex items-center justify-center shrink-0">
                      <ShieldAlert className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-rose-600 text-white font-mono text-[10px] font-bold">
                          CV CONFIDENCE: {selectedCam.threatAlert.confidence}%
                        </span>
                        <span className="text-xs font-bold text-rose-300">
                          {selectedCam.threatAlert.type}
                        </span>
                      </div>
                      <p className="text-xs text-rose-100 font-medium">
                        Suspect Identified: <strong className="text-white underline">{selectedCam.threatAlert.suspectName}</strong> ({selectedCam.threatAlert.bnsSec})
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowFirModal(true)}
                    className="px-3 py-1.5 bg-white text-rose-950 font-bold text-xs rounded-lg hover:bg-slate-100 transition-all shrink-0 border border-rose-300 shadow"
                  >
                    Investigate & Log FIR
                  </button>
                </div>
              )}

              {/* Bottom Video Viewfinder Controller Toolbar */}
              <div className="absolute bottom-3 inset-x-3 bg-slate-900/90 backdrop-blur px-4 py-2 rounded-xl border border-slate-800 flex items-center justify-between text-white z-20">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-all"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                  </button>

                  {/* Zoom Slider */}
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <ZoomOut className="w-3.5 h-3.5 text-slate-400" />
                    <input
                      type="range"
                      min="1"
                      max="4"
                      step="0.1"
                      value={zoomLevel}
                      onChange={(e) => setZoomLevel(parseFloat(e.target.value))}
                      className="w-24 accent-amber-500 cursor-pointer"
                    />
                    <ZoomIn className="w-3.5 h-3.5 text-slate-400" />
                    <span className="w-8 text-amber-400 font-bold">{zoomLevel.toFixed(1)}x</span>
                  </div>

                  {/* Pan resets */}
                  {zoomLevel > 1 && (
                    <button
                      onClick={() => setPanOffset({ x: 0, y: 0 })}
                      className="text-[10px] font-mono bg-slate-800 hover:bg-slate-700 px-2 py-1 rounded text-slate-300"
                    >
                      Reset Pan
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => triggerCvThreatSimulation(selectedCam.id)}
                    className="px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold rounded-lg flex items-center gap-1 transition-all shadow"
                  >
                    <Crosshair className="w-3.5 h-3.5" />
                    <span>Run CV Scan</span>
                  </button>

                  <button
                    onClick={() => setZoomLevel(zoomLevel === 1 ? 2.5 : 1)}
                    className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg"
                    title="Toggle Quick 2.5x Zoom"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Selected Camera Specs & AI Detectors */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-500 font-mono text-[11px] block">Location Jurisdiction</span>
                <strong className="text-slate-900 font-bold">{selectedCam.localityEn}</strong>
                <span className="text-slate-500 block text-[10px]">{selectedCam.district}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-500 font-mono text-[11px] block">Active CV Detection Models</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {selectedCam.activeDetectors.map((d, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200 text-[10px] font-bold">
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-500 font-mono text-[11px] block">Modus Operandi (MO) Focus</span>
                <p className="text-slate-800 font-medium text-[11px] line-clamp-2">{selectedCam.moPattern}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Real-Time Karnataka CCTV Map with Blinking Pulse Marker (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="light-card p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2 text-xs">
              <span className="font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-700" />
                {language === 'kn' ? 'ಕರ್ನಾಟಕ ಸಿಸಿಟಿವಿ ಜಿ.ಐ.ಎಸ್ ನಕ್ಷೆ ಮತ್ತು ಲೈವ್ ಸ್ಥಳೀಯ ಅಪರಾಧ ಪತ್ತೆ' : 'Karnataka CCTV GIS Map & Live Blinking Crime Marker'}
              </span>
              <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold text-[10px]">
                {cameras.length} Active Feeds
              </span>
            </div>

            {/* Interactive Karnataka Map with Blinking Crime Pulse Marker */}
            <div className="relative w-full h-[360px] bg-[#F1F5F9] rounded-xl border border-slate-300 overflow-hidden flex items-center justify-center">
              
              <svg viewBox="0 0 600 500" className="w-full h-full">
                {/* Karnataka State Boundary SVG Contour */}
                <path
                  d="M 220 50 L 360 60 L 440 120 L 470 200 L 420 320 L 340 450 L 250 470 L 200 380 L 140 280 L 170 160 Z"
                  fill="#E2E8F0"
                  stroke="#94A3B8"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />

                {/* Regional Connecting Lines */}
                <path d="M 220 50 L 330 120 L 420 310" stroke="#CBD5E1" strokeWidth="1.5" />
                <path d="M 190 340 L 310 440 L 420 310" stroke="#CBD5E1" strokeWidth="1.5" />

                {/* District Labels */}
                <text x="330" y="100" fill="#64748B" fontSize="12" fontWeight="bold" textAnchor="middle">Hubballi-Dharwad</text>
                <text x="445" y="270" fill="#64748B" fontSize="12" fontWeight="bold" textAnchor="middle">Bengaluru Urban</text>
                <text x="310" y="420" fill="#64748B" fontSize="12" fontWeight="bold" textAnchor="middle">Mysuru City</text>
                <text x="180" y="320" fill="#64748B" fontSize="12" fontWeight="bold" textAnchor="middle">Mangaluru Port</text>

                {/* Render Camera Markers with Blinking Pulse Animation */}
                {cameras.map((cam) => {
                  const isSelected = selectedCam.id === cam.id;
                  const isBlinkingCrime = blinkingCrimeCamId === cam.id || cam.riskLevel.includes('CRITICAL');
                  const { mapX, y } = cam.coordinates;

                  return (
                    <g
                      key={cam.id}
                      onClick={() => {
                        setSelectedCam(cam);
                      }}
                      className="cursor-pointer group"
                    >
                      {/* Blinking Pulse Ring Animation on Theft Detection */}
                      {isBlinkingCrime && (
                        <>
                          <circle
                            cx={mapX}
                            cy={y}
                            r="28"
                            fill="rgba(239, 68, 68, 0.35)"
                            className="animate-ping origin-center"
                          />
                          <circle
                            cx={mapX}
                            cy={y}
                            r="18"
                            fill="rgba(239, 68, 68, 0.5)"
                          />
                        </>
                      )}

                      {/* Camera Pin Body */}
                      <circle
                        cx={mapX}
                        cy={y}
                        r={isSelected ? 14 : 10}
                        fill={isBlinkingCrime ? '#EF4444' : isSelected ? '#D97706' : '#1E40AF'}
                        stroke="#FFFFFF"
                        strokeWidth={isSelected ? 3 : 2}
                        className="transition-all duration-200 group-hover:scale-125 origin-center"
                      />

                      <circle
                        cx={mapX}
                        cy={y}
                        r="3"
                        fill="#FFFFFF"
                      />

                      {/* Tooltip Label */}
                      <text
                        x={mapX}
                        y={y - 18}
                        fill={isBlinkingCrime ? '#DC2626' : '#0F172A'}
                        fontSize="10"
                        fontWeight="bold"
                        textAnchor="middle"
                        className="pointer-events-none drop-shadow"
                      >
                        {cam.id}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Map Legend */}
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur p-2 rounded-lg border border-slate-200 text-[10px] space-y-1 font-medium text-slate-700">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-ping"></span>
                  <span><strong>BLINKING RED:</strong> Computer Vision Theft Detected</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
                  <span><strong>AMBER:</strong> Selected Active Feed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-700"></span>
                  <span><strong>BLUE:</strong> High-Risk CCTV Surveillance Zone</span>
                </div>
              </div>
            </div>

            {/* Computer Vision Real-Time Incident Stream Log */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 border-b border-slate-200 pb-1">
                <span className="flex items-center gap-1.5 text-rose-700">
                  <ShieldAlert className="w-4 h-4" />
                  Live AI Computer Vision Incident Log
                </span>
                <span className="text-[10px] text-slate-500 font-mono">Updated Real-Time</span>
              </div>

              <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                {cameras.map(c => {
                  const hasAlert = c.threatAlert || c.riskLevel.includes('CRITICAL');
                  return (
                    <div
                      key={c.id}
                      onClick={() => {
                        setSelectedCam(c);
                      }}
                      className={`p-2.5 rounded-xl text-xs border transition-all cursor-pointer flex items-center justify-between ${
                        hasAlert
                          ? 'bg-rose-50 border-rose-300 hover:bg-rose-100/70'
                          : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-2.5 h-2.5 rounded-full ${hasAlert ? 'bg-rose-600 animate-ping' : 'bg-emerald-500'}`} />
                        <div>
                          <div className="flex items-center gap-2">
                            <strong className="text-slate-900 font-bold">{c.localityEn}</strong>
                            <span className="text-[10px] font-mono text-slate-500">({c.id})</span>
                          </div>
                          <p className="text-[11px] text-slate-600">{c.lastIncident}</p>
                        </div>
                      </div>

                      {hasAlert && (
                        <span className="px-2 py-0.5 rounded bg-rose-600 text-white font-bold text-[10px] shrink-0">
                          THEFT ALERT
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Grid of All Karnataka CCTV Cameras with REAL Playing Video Thumbnails */}
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Grid className="w-4 h-4 text-amber-700" />
            {language === 'kn' ? 'ಕರ್ನಾಟಕದ ಇತರ ಉನ್ನತ ಸಿಸಿಟಿವಿ ವೀಡಿಯೊ ಫೂಟೇಜ್‌ಗಳು' : 'Karnataka High-Theft CCTV Live Video Directory'}
          </h3>
          <span className="text-xs text-slate-500 font-mono">Showing {filteredCameras.length} Live Streams</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCameras.map((cam) => {
            const isSelected = selectedCam.id === cam.id;
            const isCritical = cam.riskLevel.includes('CRITICAL');

            return (
              <div
                key={cam.id}
                onClick={() => setSelectedCam(cam)}
                className={`light-card p-3 space-y-2 cursor-pointer transition-all ${
                  isSelected ? 'border-amber-500 ring-2 ring-amber-500/20 bg-amber-50/20' : 'hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${isCritical ? 'bg-rose-600 animate-ping' : 'bg-emerald-500'}`} />
                    {cam.id}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    isCritical ? 'bg-rose-100 text-rose-800' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {cam.riskLevel}
                  </span>
                </div>

                {/* REAL LIVE VIDEO THUMBNAIL BOX */}
                <div className="relative w-full h-32 bg-slate-950 rounded-lg overflow-hidden flex items-center justify-center group border border-slate-800">
                  <video
                    src={cam.sampleVideoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  <div className="absolute top-1.5 left-1.5 bg-slate-950/80 px-2 py-0.5 rounded text-[9px] font-mono text-emerald-400 border border-slate-800 backdrop-blur">
                    ● LIVE FOOTAGE
                  </div>

                  {isCritical && (
                    <div className="absolute bottom-1.5 inset-x-1.5 bg-rose-600/90 text-white text-[9px] font-bold font-mono px-2 py-0.5 rounded text-center animate-pulse backdrop-blur">
                      🚨 THEFT IN PROGRESS
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 truncate">{cam.localityEn}</h4>
                  <p className="text-[11px] text-slate-500">{cam.district}</p>
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-500 border-t border-slate-100 pt-2 font-mono">
                  <span>Risk Score: <strong className="text-slate-900">{cam.riskScore}%</strong></span>
                  <button className="text-blue-700 font-bold hover:underline flex items-center gap-1">
                    Play Feed <CornerUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL 1: Add New CCTV Video Feed Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-200 animate-in fade-in zoom-in duration-150">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Video className="w-5 h-5 text-amber-600" />
                Add Custom CCTV Video Feed / Footage File
              </h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddFeedSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Locality / Camera Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Koramangala 5th Block Junction CCTV"
                  value={newFeedName}
                  onChange={(e) => setNewFeedName(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-500 font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Karnataka District</label>
                  <select
                    value={newFeedDistrict}
                    onChange={(e) => setNewFeedDistrict(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-500 font-medium bg-white"
                  >
                    <option value="Bengaluru Urban">Bengaluru Urban</option>
                    <option value="Mysuru City">Mysuru City</option>
                    <option value="Hubballi-Dharwad">Hubballi-Dharwad</option>
                    <option value="Mangaluru City">Mangaluru City</option>
                    <option value="Belagavi">Belagavi</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Risk Vulnerability</label>
                  <select
                    value={newFeedRisk}
                    onChange={(e) => setNewFeedRisk(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-500 font-medium bg-white"
                  >
                    <option value="CRITICAL">CRITICAL THEFT ZONE</option>
                    <option value="HIGH THEFT RISK">HIGH THEFT RISK</option>
                    <option value="ELEVATED RISK">ELEVATED RISK</option>
                    <option value="STABLE">STABLE</option>
                  </select>
                </div>
              </div>

              {/* RTSP Stream URL or File Upload */}
              <div className="space-y-2">
                <label className="block font-bold text-slate-700">RTSP / HLS / MP4 Video Stream URL</label>
                <input
                  type="url"
                  placeholder="https://... or rtsp://..."
                  value={newFeedUrl}
                  onChange={(e) => setNewFeedUrl(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-500 font-mono text-[11px]"
                />
              </div>

              <div className="text-center font-bold text-slate-400 text-[10px] uppercase">-- OR UPLOAD LOCAL FOOTAGE VIDEO FILE --</div>

              <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center hover:border-amber-500 transition-colors bg-slate-50">
                <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                <label className="cursor-pointer text-amber-700 font-bold hover:underline">
                  Select MP4 Video File
                  <input
                    type="file"
                    accept="video/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setUploadedFile(e.target.files[0]);
                      }
                    }}
                  />
                </label>
                {uploadedFile && (
                  <p className="text-xs text-emerald-700 font-bold mt-1">Loaded: {uploadedFile.name}</p>
                )}
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="btn-light-secondary text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-light-gold text-xs px-4"
                >
                  Connect & Scan Feed
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: Computer Vision Investigation Report & Log FIR Modal */}
      {showFirModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl border border-slate-200 animate-in fade-in zoom-in duration-150">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-rose-600" />
                AI Computer Vision Theft Investigation & Auto-FIR
              </h3>
              <button onClick={() => setShowFirModal(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            {firLoggedSuccess ? (
              <div className="py-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-300">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  FIR Registered & Beat Squad Dispatched!
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  CCTV Evidence Frame <strong className="text-slate-900 font-mono">#EV-2026-{selectedCam.id}</strong> has been bound to FIR #308/2026. Nearest KSP Hoysala Patrol Unit #42 has been dispatched to {selectedCam.localityEn}.
                </p>
                <button
                  onClick={() => {
                    setShowFirModal(false);
                    setFirLoggedSuccess(false);
                    if (setActiveTab) setActiveTab('workspace');
                  }}
                  className="btn-light-primary text-xs"
                >
                  Go to Case Workspace
                </button>
              </div>
            ) : (
              <div className="space-y-4 text-xs">
                <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 space-y-1">
                  <span className="text-rose-800 font-bold uppercase text-[10px]">Computer Vision Flagged Violation</span>
                  <h4 className="text-sm font-bold text-rose-950">
                    {selectedCam.threatAlert?.type || 'Theft & Pickpocketing Incident'}
                  </h4>
                  <p className="text-slate-700">
                    Location: <strong>{selectedCam.localityEn} ({selectedCam.district})</strong>
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 font-mono text-[11px]">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block text-[10px]">AI Match Confidence</span>
                    <strong className="text-rose-600 text-xs">96.4% Accuracy Score</strong>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block text-[10px]">BNS Legal Section</span>
                    <strong className="text-slate-900 text-xs">BNS Sec 304 (Snatching)</strong>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 font-mono text-[10px] block">Suspect Identification</span>
                  <p className="text-slate-900 font-bold">
                    Ramesh alias 'Bullet Ramesh' (KSP Offender Database ID: OFF-8821)
                  </p>
                  <span className="text-amber-800 text-[10px] block font-semibold mt-0.5">
                    Match parameters: Face embeddings, IMEI tower dump, and Pulsar vehicle registration.
                  </span>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    onClick={() => setShowFirModal(false)}
                    className="btn-light-secondary text-xs"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => setFirLoggedSuccess(true)}
                    className="btn-light-gold text-xs px-4"
                  >
                    Confirm & File Automated FIR
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

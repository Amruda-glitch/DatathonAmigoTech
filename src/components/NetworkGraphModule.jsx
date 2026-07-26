import React, { useRef, useEffect, useState } from 'react';
import { Network, Sparkles, Filter, ZoomIn, ZoomOut, Info } from 'lucide-react';
import { GRAPH_DATA } from '../data/mockData';

export default function NetworkGraphModule({ language }) {
  const canvasRef = useRef(null);
  const [nodes, setNodes] = useState(GRAPH_DATA.nodes);
  const [links, setLinks] = useState(GRAPH_DATA.links);
  const [selectedNode, setSelectedNode] = useState(GRAPH_DATA.nodes[0]);
  const [showGnnPredictions, setShowGnnPredictions] = useState(true);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('ALL');
  const [draggedNode, setDraggedNode] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Canvas Render Loop for Light Theme
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Light background grid lines
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 40 * zoomLevel;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      const visibleLinks = links.filter(l => showGnnPredictions || !l.isGnn);

      // Draw Links
      visibleLinks.forEach((link) => {
        const sourceNode = nodes.find(n => n.id === link.source);
        const targetNode = nodes.find(n => n.id === link.target);

        if (sourceNode && targetNode) {
          ctx.beginPath();
          ctx.moveTo(sourceNode.x, sourceNode.y);
          ctx.lineTo(targetNode.x, targetNode.y);

          if (link.isGnn) {
            ctx.strokeStyle = '#0284C7';
            ctx.lineWidth = 2.5;
            ctx.setLineDash([6, 6]);
          } else {
            ctx.strokeStyle = 'rgba(100, 116, 139, 0.4)';
            ctx.lineWidth = 1.5;
            ctx.setLineDash([]);
          }
          ctx.stroke();
          ctx.setLineDash([]);

          // Link Labels
          const midX = (sourceNode.x + targetNode.x) / 2;
          const midY = (sourceNode.y + targetNode.y) / 2;
          ctx.font = 'bold 10px sans-serif';
          ctx.fillStyle = link.isGnn ? '#0284C7' : 'rgba(71, 85, 105, 0.9)';
          ctx.fillText(link.label, midX - 20, midY - 6);
        }
      });

      // Draw Nodes
      nodes.forEach((node) => {
        if (activeCategoryFilter !== 'ALL' && node.category !== activeCategoryFilter && node.category !== 'GNN_PREDICTED') {
          return;
        }

        const isSelected = selectedNode && selectedNode.id === node.id;
        const radius = node.category === 'SUSPECT' ? 24 : 20;

        // Selection Halo Ring
        if (isSelected || node.category === 'GNN_PREDICTED') {
          ctx.beginPath();
          ctx.arc(node.x, node.y, radius + 8, 0, 2 * Math.PI);
          ctx.fillStyle = node.category === 'GNN_PREDICTED' ? 'rgba(2, 132, 199, 0.15)' : 'rgba(217, 119, 6, 0.15)';
          ctx.fill();
          ctx.strokeStyle = node.category === 'GNN_PREDICTED' ? '#0284C7' : '#D97706';
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        // Node Circle Body
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = node.color || '#475569';
        ctx.fill();
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Node Emoji
        ctx.font = '16px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.avatar || '📌', node.x, node.y);

        // Node Text Labels
        ctx.font = 'bold 11px sans-serif';
        ctx.fillStyle = '#0F172A';
        ctx.fillText(node.label, node.x, node.y + radius + 14);

        ctx.font = '10px sans-serif';
        ctx.fillStyle = node.category === 'GNN_PREDICTED' ? '#0284C7' : '#64748B';
        ctx.fillText(node.sub || node.category, node.x, node.y + radius + 26);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [nodes, links, selectedNode, showGnnPredictions, activeCategoryFilter, zoomLevel]);

  const handleMouseDown = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const clicked = nodes.find(n => {
      const dist = Math.hypot(n.x - mouseX, n.y - mouseY);
      return dist <= 28;
    });

    if (clicked) {
      setSelectedNode(clicked);
      setDraggedNode(clicked.id);
    }
  };

  const handleMouseMove = (e) => {
    if (!draggedNode) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setNodes(prev => prev.map(n => n.id === draggedNode ? { ...n, x: mouseX, y: mouseY } : n));
  };

  const handleMouseUp = () => setDraggedNode(null);

  return (
    <div className="max-w-[1750px] mx-auto space-y-6">
      <div className="light-card p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center">
            <Network className="w-5 h-5 text-blue-700" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              {language === 'kn' ? 'ನಿಯೋ4ಜೆ ಕ್ರಿಮಿನಲ್ ನೆಟ್‌ವರ್ಕ್ ಮತ್ತು ಜಿ.ಎನ್.ಎನ್ ಕೊಂಡಿ ಭವಿಷ್ಯ' : 'Neo4j Knowledge Graph & GNN Link Prediction'}
            </h2>
            <p className="text-xs text-slate-600">
              {language === 'kn' 
                ? 'ಸಂದೇಹಿತರು, ಎಫ್.ಐ.ಆರ್, ವಾಹನಗಳು ಮತ್ತು ಹಣಕಾಸು ಖಾತೆಗಳ ನಡುವಿನ ರಹಸ್ಯ ಕೊಂಡಿಗಳನ್ನು ಗ್ರ್ಯಾಫ್ ಎಐ ಮೂಲಕ ವಿಶ್ಲೇಷಿಸಿ.' 
                : 'Explore multi-relational links across Accused, FIRs, IMEIs, Bank Mule Accounts, and GNN-predicted money laundering networks.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={() => setShowGnnPredictions(!showGnnPredictions)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 border transition-all ${
              showGnnPredictions
                ? 'bg-blue-50 text-blue-900 border-blue-300'
                : 'bg-white text-slate-600 border-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            <span>{language === 'kn' ? 'ಜಿ.ಎನ್.ಎನ್ ಗುಪ್ತ ಕೊಂಡಿ ಸಕ್ರಿಯ' : 'GNN Link Predictions (AI)'}</span>
          </button>

          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-bold">
            <Filter className="w-3.5 h-3.5 text-slate-600 ml-1" />
            {['ALL', 'SUSPECT', 'FIR', 'VEHICLE', 'BANK_ACCOUNT'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategoryFilter(cat)}
                className={`px-2 py-1 rounded transition-all ${
                  activeCategoryFilter === cat ? 'bg-white text-slate-900 border border-slate-200 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 light-card p-4 space-y-3 relative">
          <div className="flex items-center justify-between text-xs text-slate-600 border-b border-slate-200 pb-2 font-medium">
            <span>Interactive Graph Canvas (Drag nodes to re-arrange)</span>
            <div className="flex items-center gap-2">
              <button onClick={() => setZoomLevel(prev => Math.min(prev + 0.15, 1.5))} className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200">
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => setZoomLevel(prev => Math.max(prev - 0.15, 0.7))} className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200">
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="w-full h-[520px] bg-[#F8FAFC] rounded-xl border border-slate-200 overflow-hidden cursor-grab active:cursor-grabbing relative">
            <canvas
              ref={canvasRef}
              width={900}
              height={520}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              className="w-full h-full block"
            />
          </div>
        </div>

        {/* Selected Node Drawer */}
        <div className="light-card p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Info className="w-4 h-4 text-blue-700" />
              {language === 'kn' ? 'ನೋಡ್ ವಿವರ ಮತ್ತು ವಿಶ್ಲೇಷಣೆ' : 'Node Inspector & Analytics'}
            </h3>
            {selectedNode && (
              <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-300 font-mono text-[10px] font-bold">
                {selectedNode.category}
              </span>
            )}
          </div>

          {selectedNode ? (
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selectedNode.avatar}</span>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{selectedNode.label}</h4>
                    <p className="text-slate-600 font-medium">{selectedNode.sub}</p>
                  </div>
                </div>

                {selectedNode.risk > 0 && (
                  <div className="space-y-1 pt-2 border-t border-slate-200">
                    <div className="flex justify-between text-slate-700 font-semibold">
                      <span>Habitual Offender Risk:</span>
                      <span className={selectedNode.risk > 85 ? 'text-rose-700 font-bold' : 'text-amber-700 font-bold'}>{selectedNode.risk}/100</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${selectedNode.risk > 85 ? 'bg-rose-600' : 'bg-amber-600'}`}
                        style={{ width: `${selectedNode.risk}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <h5 className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">
                  Direct Relationships ({links.filter(l => l.source === selectedNode.id || l.target === selectedNode.id).length})
                </h5>
                <div className="space-y-2">
                  {links
                    .filter(l => l.source === selectedNode.id || l.target === selectedNode.id)
                    .map((link, idx) => {
                      const otherId = link.source === selectedNode.id ? link.target : link.source;
                      const otherNode = nodes.find(n => n.id === otherId);
                      return (
                        <div key={idx} className="p-2.5 rounded-lg bg-white border border-slate-200 flex items-center justify-between shadow-sm">
                          <div className="space-y-0.5">
                            <span className="text-slate-900 font-bold block">{otherNode?.label || otherId}</span>
                            <span className="text-[10px] text-slate-500 font-medium">{link.label}</span>
                          </div>
                          {link.isGnn && (
                            <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200 text-[9px] font-bold">GNN Predict</span>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          ) : (
            <p className="text-xs text-slate-500 italic">Click on any node on the graph canvas to inspect details.</p>
          )}
        </div>
      </div>
    </div>
  );
}

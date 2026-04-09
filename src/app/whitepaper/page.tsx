"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MASSIVE_DOSSIER_CONTENT } from "@/data/MassiveDossierGenerator";
import { jsPDF } from "jspdf";

export default function WhitepaperPage() {
  const [lang, setLang] = useState<"pt" | "es" | "en">("pt");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [unlockCode, setUnlockCode] = useState("");
  const [error, setError] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);

  const content = MASSIVE_DOSSIER_CONTENT[lang];

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (unlockCode.toUpperCase() === "SOVEREIGN-2026") {
      setIsUnlocked(true);
      setError("");
    } else {
      setError("Código de Governança Inválido");
    }
  };

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    // Simple intentional timeout to allow UI to show "Gerando PDF Massivo..."
    await new Promise(r => setTimeout(r, 100));

    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      
      doc.setFontSize(22);
      doc.setTextColor(40, 40, 40);
      doc.text(content.title, 20, 30, { maxWidth: pageWidth - 40 });
      doc.setFontSize(14);
      doc.setTextColor(100, 100, 100);
      doc.text(content.subtitle, 20, 50, { maxWidth: pageWidth - 40 });
      
      let y = 70;
      doc.setFontSize(11);
      doc.setTextColor(60, 60, 60);

      content.sections.forEach((s: any) => {
        if (y > pageHeight - 40) {
          doc.addPage();
          y = 20;
        }

        doc.setFontSize(16);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(20, 20, 20);
        doc.text(s.title, 20, y);
        y += 12;
        
        doc.setFontSize(9);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(50, 50, 50);

        // Split text gracefully
        const lines = doc.splitTextToSize(s.content, pageWidth - 40);
        
        for (let i = 0; i < lines.length; i++) {
          if (y > pageHeight - 20) {
            doc.addPage();
            y = 20;
          }
          doc.text(lines[i], 20, y);
          y += 5;
        }
        y += 15; // spacing between sections
      });

      // Add page numbers at the end
      const totalPages = doc.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(150);
        doc.text(`Página ${i} de ${totalPages} - Certus Engine / Educatech AI`, pageWidth / 2, pageHeight - 10, { align: "center" });
      }

      doc.save(`Dossie-Oficial-EducatechAI-${lang}.pdf`);
    } catch (e) {
      console.error(e);
    } finally {
      setIsDownloading(false);
    }
  };

  if (!isUnlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="glass-bright p-10 rounded-3xl border border-indigo-500/20 max-w-md w-full relative z-10 text-center animate-in zoom-in duration-500">
          <div className="w-16 h-16 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-indigo-500/20">
            <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          </div>
          <h2 className="text-2xl font-black text-white mb-2">Acesso Restrito</h2>
          <p className="text-slate-400 text-sm mb-8">Este dossiê contém informações críticas de infraestrutura e é restrito a administradores governamentais/institucionais.</p>
          
          <form onSubmit={handleUnlock} className="space-y-4">
            <input 
              type="text" 
              placeholder="CÓDIGO DE ACESSO"
              value={unlockCode}
              onChange={(e) => setUnlockCode(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-center text-white font-mono tracking-widest focus:outline-none focus:border-indigo-500 transition-all uppercase"
            />
            {error && <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest">{error}</p>}
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl shadow-lg transition-all">
              Validar Credenciais →
            </button>
          </form>
          
          <Link href="/" className="inline-block mt-8 text-slate-500 text-xs hover:text-slate-300 transition-colors">← Voltar para Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-slate-800/60 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-black text-white tracking-tighter">CERTUS<span className="text-indigo-500">ENGINE</span></Link>
            <span className="h-6 w-px bg-slate-800 hidden sm:block" />
            <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest animate-pulse">Institutional Access Active</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex bg-slate-900 rounded-lg p-1 border border-slate-800">
              {(['pt', 'es', 'en'] as const).map((l) => (
                <button 
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-md text-xs font-bold uppercase transition-all ${lang === l ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button 
              onClick={handleDownloadPDF}
              className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg flex items-center gap-2 transition-all shadow-lg"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Download PDF
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-indigo-600/5 rounded-full blur-[120px]" />
        <div className="max-w-4xl mx-auto relative text-center">
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-[0.5em] mb-4">Official Technical Documentation</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">{content.title}</h1>
          <div className="flex flex-wrap justify-center gap-4">
             <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase font-mono">v2.1.1</span>
             <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase font-mono">Tier A+ Certified</span>
             <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase font-mono">PII-Zero Compliance</span>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <main className="max-w-4xl mx-auto px-6 space-y-24">
        {content.sections.map((section: any, idx: number) => (
          <section key={section.id} className="scroll-mt-32">
            <h2 className="text-2xl font-black text-white mb-8 flex items-baseline gap-4">
              {section.title}
              <div className="h-px flex-1 bg-slate-800" />
            </h2>
            <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed space-y-6">
              {section.content.split('\n\n').map((para: string, idx: number) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
            
            {/* Visual Specs for each section */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-bright p-6 rounded-2xl border border-slate-800">
                <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-4">Arquitetura Técnica</p>
                <div className="space-y-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">Sub-Protocolo CERTUS-{i}0{idx}</span>
                      <span className="text-emerald-400 font-mono">SECURE</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-bright p-6 rounded-2xl border border-slate-800">
                <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-4">Validação de Integridade</p>
                <code className="text-[9px] text-slate-600 block break-all font-mono leading-tight">
                  ROOT_HASH: 596726b98bb948b1868d3724caf5f651cd3150c0f
                </code>
              </div>
            </div>
          </section>
        ))}
        
        {/* Verification Footer */}
        <section className="pt-24 mt-24 border-t border-slate-800 text-center">
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto mb-12" />
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.5em] mb-4">Certus Engine Sovereign Treaty</p>
          <p className="text-sm text-slate-400 mb-8 max-w-lg mx-auto italic">"Este documento prova a soberania técnica do ecossistema Educatech AI. A conformidade Tier A+ garante a perpetuidade das instituições no ambiente digital."</p>
          <div className="flex justify-center gap-12 grayscale opacity-40">
             <div className="text-2xl font-black">CERTUS</div>
             <div className="text-2xl font-black">CIVITAS</div>
             <div className="text-2xl font-black">ZK-ID</div>
          </div>
        </section>
      </main>
    </div>
  );
}

import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0E15] text-[#e3e1ec] font-['Space_Grotesk']">
      <nav className="fixed w-full z-50 bg-[#0D0E15]/90 border-b border-[#3b494b]/30 h-20 flex items-center px-10 justify-between">
        <div className="text-xl font-bold text-[#00F0FF] tracking-widest uppercase">dex_APP</div>
        <button className="px-6 py-2 border border-[#00F0FF] text-[#00F0FF] text-sm uppercase font-bold tracking-widest hover:bg-[#00F0FF] hover:text-[#0D0E15]">Access</button>
      </nav>

      <section className="pt-40 pb-32 px-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 leading-tight">
          INITIALIZE <br/><span className="text-[#FF003C]">dex trading terminal</span>
        </h1>
        <p className="text-xl text-[#b9cacb] max-w-2xl mx-auto mb-12 font-sans">
          
        </p>
        <button className="px-12 py-5 bg-[#00F0FF] text-[#0D0E15] uppercase tracking-widest font-bold hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all">
          Deploy Module
        </button>
      </section>

      <section className="py-20 bg-[#000000] border-y border-[#3b494b]/30">
        <div className="max-w-6xl mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
           {[1,2,3].map(i => (
             <div key={i} className="border border-[#3b494b]/50 p-8 bg-[#0D0E15]">
               <div className="text-3xl text-[#00F0FF] mb-4">0{i}</div>
               <h3 className="text-xl uppercase tracking-widest mb-2">Core Feature</h3>
               <p className="text-[#b9cacb] text-sm font-sans">Cyberpunk aesthetic. Dark backgrounds (#0D0E15). Neon accents. High-contrast typography.</p>
             </div>
           ))}
        </div>
      </section>

      <section className="py-32 px-10 text-center">
        <h2 className="text-4xl font-bold uppercase tracking-widest text-[#e3e1ec] mb-16">Node Pricing</h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 justify-center">
           <div className="w-80 border border-[#3b494b] p-8 text-left bg-[#1a1b22]">
             <h3 className="text-xl text-[#b9cacb] mb-2 uppercase tracking-widest">Base</h3>
             <div className="text-4xl text-[#e3e1ec] mb-8 font-bold">Free</div>
             <button className="w-full py-3 border border-[#b9cacb] text-[#b9cacb] uppercase text-sm tracking-widest hover:bg-[#b9cacb] hover:text-[#0D0E15]">Select</button>
           </div>
           <div className="w-80 border-2 border-[#FF003C] p-8 text-left bg-[#1a1b22] relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(255,0,60,0.1)]">
             <div className="absolute top-0 right-0 bg-[#FF003C] text-white text-xs px-3 py-1 uppercase tracking-widest">Active</div>
             <h3 className="text-xl text-[#FF003C] mb-2 uppercase tracking-widest">Pro</h3>
             <div className="text-4xl text-[#e3e1ec] mb-8 font-bold">9<span className="text-sm">/mo</span></div>
             <button className="w-full py-3 bg-[#FF003C] text-white uppercase font-bold text-sm tracking-widest hover:shadow-[0_0_20px_rgba(255,0,60,0.4)]">Go Pro</button>
           </div>
        </div>
      </section>

      <footer className="py-10 text-center border-t border-[#3b494b]/30">
        <p className="text-xs text-[#b9cacb] tracking-widest uppercase">END OF FILE // © 2024</p>
      </footer>
    </main>
  );
}

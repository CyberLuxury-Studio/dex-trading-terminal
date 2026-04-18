import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#e5e2e1] font-inter flex flex-col overflow-hidden">
      
      {/* Top Header */}
      <header className="h-14 border-b border-[#3b4b37]/30 flex items-center justify-between px-4 shrink-0 bg-[#0e0e0e]">
        <div className="flex items-center gap-6">
          <div className="font-space-grotesk font-bold text-xl tracking-tighter">
            DEX<span className="text-[#00FF41]">_TRM</span>
          </div>
          <div className="h-6 w-px bg-[#3b4b37]/30"></div>
          <div className="flex items-center gap-2">
            <span className="font-space-grotesk text-lg">SOL / USDC</span>
            <span className="font-mono text-sm text-[#00FF41]">+4.2%</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-xs text-[#84967e] font-mono">
            <div><span className="text-[#3b4b37] uppercase tracking-widest mr-2 text-[10px]">24h Vol</span>$4.2B</div>
            <div><span className="text-[#3b4b37] uppercase tracking-widest mr-2 text-[10px]">24h High</span>145.20</div>
            <div><span className="text-[#3b4b37] uppercase tracking-widest mr-2 text-[10px]">24h Low</span>132.80</div>
          </div>
        </div>
        <div>
          <button className="px-4 py-1.5 bg-[#1c1b1b] hover:bg-[#201f1f] text-[#00FF41] font-mono text-xs border border-[#00FF41]/30 transition-colors">
            0x...F32a
          </button>
        </div>
      </header>

      {/* Main Terminal Grid */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Sidebar: Markets */}
        <aside className="w-64 border-r border-[#3b4b37]/30 flex flex-col bg-[#0e0e0e] shrink-0">
          <div className="p-3 border-b border-[#3b4b37]/30">
            <input 
              type="text" 
              placeholder="Search markets..." 
              className="w-full bg-[#131313] border border-[#3b4b37]/50 text-xs font-mono p-2 focus:border-[#00FF41] outline-none text-[#e5e2e1]"
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            <table className="w-full text-xs font-mono">
              <thead className="text-[#84967e] bg-[#131313] sticky top-0">
                <tr>
                  <th className="font-normal text-left py-2 px-3">Pair</th>
                  <th className="font-normal text-right py-2 px-3">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#1c1b1b] cursor-pointer group">
                  <td className="py-2 px-3 group-hover:text-[#00FF41]">SOL/USDC</td>
                  <td className="py-2 px-3 text-right text-[#00FF41]">142.50</td>
                </tr>
                <tr className="hover:bg-[#1c1b1b] cursor-pointer">
                  <td className="py-2 px-3">JUP/USDC</td>
                  <td className="py-2 px-3 text-right text-[#FF003C]">1.24</td>
                </tr>
                <tr className="hover:bg-[#1c1b1b] cursor-pointer">
                  <td className="py-2 px-3">PYTH/USDC</td>
                  <td className="py-2 px-3 text-right text-[#00FF41]">0.85</td>
                </tr>
                <tr className="hover:bg-[#1c1b1b] cursor-pointer">
                  <td className="py-2 px-3">DRIFT/USDC</td>
                  <td className="py-2 px-3 text-right text-[#00FF41]">1.12</td>
                </tr>
              </tbody>
            </table>
          </div>
        </aside>

        {/* Center: Chart */}
        <section className="flex-1 flex flex-col min-w-0 bg-[#050505]">
           <div className="p-2 border-b border-[#3b4b37]/30 flex gap-2">
             {['1m', '5m', '15m', '1H', '4H', '1D'].map(tf => (
               <button key={tf} className="px-2 py-1 text-xs font-mono text-[#84967e] hover:text-[#e5e2e1] hover:bg-[#1c1b1b]">
                 {tf}
               </button>
             ))}
           </div>
           {/* Chart Placeholder */}
           <div className="flex-1 relative flex items-center justify-center border-b border-[#3b4b37]/30">
              {/* Simulated Grid Lines */}
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#3b4b37 1px, transparent 1px), linear-gradient(90deg, #3b4b37 1px, transparent 1px)', backgroundSize: '50px 50px', opacity: 0.1 }}></div>
              <div className="text-[#3b4b37] font-space-grotesk tracking-widest text-sm uppercase">[ CANDLESTICK CHART MOUNT POINT ]</div>
           </div>
        </section>

        {/* Right Sidebar: Order Book & Execution */}
        <aside className="w-80 border-l border-[#3b4b37]/30 flex flex-col bg-[#0e0e0e] shrink-0">
          
          {/* Order Book Panel */}
          <div className="h-1/2 flex flex-col border-b border-[#3b4b37]/30">
             <div className="p-2 border-b border-[#3b4b37]/30 flex justify-between items-center bg-[#131313]">
               <span className="font-space-grotesk text-xs uppercase tracking-widest text-[#84967e]">Order Book</span>
               <div className="flex gap-1">
                 <div className="w-3 h-3 bg-[#FF003C]/20 border border-[#FF003C]"></div>
                 <div className="w-3 h-3 bg-[#00FF41]/20 border border-[#00FF41]"></div>
               </div>
             </div>
             
             <div className="flex-1 overflow-hidden flex flex-col text-[11px] font-mono leading-tight">
                {/* Asks (Red) */}
                <div className="flex-1 overflow-hidden flex flex-col-reverse p-1">
                  {[...Array(8)].map((_, i) => (
                    <div key={`ask-${i}`} className="flex justify-between hover:bg-[#201f1f] px-2 py-0.5 relative">
                      <div className="absolute right-0 top-0 h-full bg-[#FF003C]/10" style={{ width: `${Math.random() * 80 + 10}%`}}></div>
                      <span className="text-[#FF003C] relative z-10">142.{55 + i}</span>
                      <span className="text-[#e5e2e1] relative z-10">{(Math.random() * 50).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                {/* Current Price */}
                <div className="py-2 text-center border-y border-[#3b4b37]/30 bg-[#131313]">
                  <span className="text-lg font-bold text-[#00FF41]">142.50</span>
                  <span className="text-xs text-[#84967e] ml-2">$142.50</span>
                </div>

                {/* Bids (Green) */}
                <div className="flex-1 overflow-hidden p-1">
                  {[...Array(8)].map((_, i) => (
                    <div key={`bid-${i}`} className="flex justify-between hover:bg-[#201f1f] px-2 py-0.5 relative">
                      <div className="absolute right-0 top-0 h-full bg-[#00FF41]/10" style={{ width: `${Math.random() * 80 + 10}%`}}></div>
                      <span className="text-[#00FF41] relative z-10">142.{49 - i}</span>
                      <span className="text-[#e5e2e1] relative z-10">{(Math.random() * 50).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>

          {/* Trade Execution Panel */}
          <div className="flex-1 flex flex-col bg-[#0e0e0e] p-4">
            {/* Buy / Sell Tabs */}
            <div className="flex mb-4 border-b border-[#3b4b37]/50">
              <button className="flex-1 py-2 text-xs font-space-grotesk tracking-widest text-[#00FF41] border-b-2 border-[#00FF41] bg-[#00FF41]/10">BUY</button>
              <button className="flex-1 py-2 text-xs font-space-grotesk tracking-widest text-[#84967e] hover:text-[#FF003C] transition-colors">SELL</button>
            </div>

            {/* Order Type */}
            <div className="flex gap-2 mb-4">
              <button className="px-3 py-1 bg-[#201f1f] text-[#e5e2e1] text-xs font-mono border border-[#3b4b37]/50">Limit</button>
              <button className="px-3 py-1 text-[#84967e] text-xs font-mono border border-transparent hover:border-[#3b4b37]/50">Market</button>
            </div>

            {/* Inputs */}
            <div className="space-y-3 mb-6">
              <div className="bg-[#131313] border border-[#3b4b37]/50 p-2 flex justify-between focus-within:border-[#00FF41]">
                <span className="text-[#84967e] text-xs font-mono pt-0.5">Price</span>
                <input type="text" className="bg-transparent text-right outline-none text-sm font-mono text-[#e5e2e1] w-24" defaultValue="142.50" />
                <span className="text-xs font-mono pt-0.5 ml-2">USDC</span>
              </div>
              <div className="bg-[#131313] border border-[#3b4b37]/50 p-2 flex justify-between focus-within:border-[#00FF41]">
                <span className="text-[#84967e] text-xs font-mono pt-0.5">Size</span>
                <input type="text" className="bg-transparent text-right outline-none text-sm font-mono text-[#e5e2e1] w-24" placeholder="0.00" />
                <span className="text-xs font-mono pt-0.5 ml-2">SOL</span>
              </div>
            </div>

            {/* Slippage */}
            <div className="mb-6 flex justify-between items-center">
              <span className="text-[#84967e] text-[10px] font-space-grotesk uppercase tracking-widest">Slippage Tolerance</span>
              <div className="flex gap-1">
                {['0.1%', '0.5%', '1.0%'].map(slip => (
                  <button key={slip} className="px-2 py-0.5 bg-[#131313] text-[#84967e] text-[10px] font-mono hover:bg-[#201f1f] border border-[#3b4b37]/30">{slip}</button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button className="w-full py-3 mt-auto bg-[#00FF41] text-[#003907] font-space-grotesk tracking-widest text-sm font-bold uppercase hover:bg-[#72ff70] hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] transition-all">
              PLACE BUY ORDER
            </button>
          </div>
        </aside>

      </div>
    </main>
  );
}

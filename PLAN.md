# Project Plan: DEX Trading Terminal (dex-trading-terminal)

## Overview
A high-performance Decentralized Exchange (DEX) UI tailored for pro traders. Features a dark-mode candlestick chart area, dense order book tables, and slippage tolerance sliders. Designed with a strict cyberpunk, data-heavy aesthetic for UI8.

## Deliverables

### 1. Project Structure (Next.js App Router)
```text
/
├── app/
│   ├── layout.tsx         
│   ├── page.tsx           # Main terminal layout
│   └── globals.css        
├── components/
│   ├── terminal/          
│   │   ├── ChartArea.tsx  # TradingView lightweight chart wrapper
│   │   ├── OrderBook.tsx  # Dense data table (bids/asks)
│   │   ├── TradePanel.tsx # Buy/Sell execution widget
│   │   └── TradeHistory.tsx
│   ├── layout/            # Top bar (Pairs, 24h vol) and Sidebar
│   └── 3d/                
├── lib/                   
├── public/                
└── tailwind.config.ts     
```

### 2. Section-by-Section Breakdown
- **Top Header Bar:** 
  - Content: Current Pair (e.g., SOL/USDC), 24h Change, 24h High/Low, 24h Volume.
  - Styling: Borderless, separated by subtle background color shifts.
- **Main Terminal Layout (CSS Grid/Flexbox split):**
  - Left Panel (15%): Markets list.
  - Center Panel (60%): Large Candlestick Chart taking up most vertical space.
  - Right Panel (25%): Order Book (top half) and Trade Execution Panel (bottom half).
- **Trade Execution Panel:**
  - Content: Buy/Sell toggle, Limit/Market order types, input fields, and slippage slider.
  - Styling: High contrast buttons (Neon Green for Buy, Neon Red for Sell).

### 3. Design System
- **Colors:**
  - Background: Terminal Black `#050505`
  - Positive (Buy): Matrix Green `#00FF41`
  - Negative (Sell): Warning Red `#FF003C`
  - Accent: Muted Blue/Grey `#5A6B7C` for borders and non-active text.
- **Typography:** `JetBrains Mono` or `Space Mono` for all numbers and data grids. `Inter` for standard UI labels.
- **Spacing:** Extremely dense. Use `p-2` or `p-3` maximum to fit as much data on screen as possible.

### 4. Animation Plan (Framer Motion)
- **Minimal animations.** Trading terminals need to feel instantaneous. 
- Only use animations for row-insertion in the order book (a quick flash of green or red background fading to transparent).

### 5. Spline Integration Plan
- Given this is a pro trading terminal, 3D elements should be minimal or absent to prioritize performance. 
- *Optional:* A subtle, slow-moving 3D wireframe mesh in the absolute background behind the panels, at 5% opacity.

### 6. Component Architecture
- `OrderBook`: Requires highly optimized rendering (e.g., React.memo) as it updates frequently.
- `ChartWrapper`: Lazy-loads the heavy charting library.

### 7. Performance Strategy
- Implement virtualized lists (`react-window`) for the Order Book and Trade History.
- Strict code-splitting for the charting library.

### 8. UI8 Packaging Checklist
- Ensure the layout is responsive (stacks vertically on mobile, though primarily a desktop experience).
- Include sample JSON data for the order book to ensure the demo looks active.

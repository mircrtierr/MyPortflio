const fs = require('fs');

const ppWoff = fs.readFileSync('fonts/public-pixel.woff').toString('base64');
const chillWoff = fs.readFileSync('fonts/chill.woff').toString('base64');

const html = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
  <title>Muhammad Mirza Aqmal Raziq | Software & IT Systems Portfolio</title>
  <meta
    name="description"
    content="Muhammad Mirza Aqmal Raziq bin Mirza Affzard – Final Year Diploma Teknologi Komputeran at Kolej Vokasional Perdagangan JB (KVPJB). Academic CGPA 3.98/4.00, SKM Level 3 Certified (S103882102). Seeking 5-Month OJT Internship (Feb–June 2027)."
  />
  <meta name="author" content="Muhammad Mirza Aqmal Raziq" />
  <meta name="theme-color" content="#080b11" />
  <link rel="icon" type="image/x-icon" href="./images/mirza-title.png" />

  <!-- Open Graph -->
  <meta property="og:title" content="Muhammad Mirza Aqmal Raziq – 3D Portfolio & Timeline" />
  <meta property="og:description" content="Final year Diploma Teknologi Komputeran at KVPJB (CGPA 3.98 • SKM Level 3 S103882102). Seeking 5-Month IT Internship (Feb–June 2027)." />
  <meta property="og:image" content="./images/mirza-title.png" />
  <meta property="og:type" content="website" />

  <!-- Webfonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- 3D WebGL Workstation Bundle (Ambient Persistent Engine) -->
  <script type="module" crossorigin src="./assets/index-D1c0b_CX.js"></script>

  <style>
    /* ============================================================ */
    /* CUSTOM WEBFONTS (Base64 embedded for instant offline access)  */
    /* ============================================================ */
    @font-face {
      font-family: 'public-pixel';
      src: url('data:font/woff;charset=utf-8;base64,${ppWoff}') format('woff'),
           url('./fonts/public-pixel.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'chill';
      src: url('data:font/woff;charset=utf-8;base64,${chillWoff}') format('woff'),
           url('./fonts/chill.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }

    /* ============================================================ */
    /* DESIGN SYSTEM: CYBER OBSIDIAN, NEON CYAN & PHOSPHOR AMBER    */
    /* ============================================================ */
    :root {
      --bg-base: #06090e;
      --bg-surface: #0c121d;
      --bg-card: rgba(12, 18, 30, 0.88);
      --bg-card-hover: rgba(18, 27, 46, 0.95);
      --border-subtle: rgba(148, 163, 184, 0.16);
      --border-accent: rgba(245, 158, 11, 0.38);
      --border-accent-strong: rgba(245, 158, 11, 0.75);
      --border-cyan: rgba(56, 189, 248, 0.35);
      
      --amber: #f59e0b;
      --amber-light: #fbbf24;
      --amber-glow: rgba(245, 158, 11, 0.28);
      --emerald: #10b981;
      --emerald-glow: rgba(16, 185, 129, 0.28);
      --cyan: #38bdf8;
      --cyan-glow: rgba(56, 189, 248, 0.28);
      --slate-200: #e2e8f0;
      --slate-300: #cbd5e1;
      --slate-400: #94a3b8;
      --slate-500: #64748b;
      
      --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
      --font-pixel: 'public-pixel', monospace;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
      background-color: var(--bg-base);
    }

    body {
      background-color: var(--bg-base);
      background-image: 
        radial-gradient(circle at 50% 0%, rgba(245, 158, 11, 0.12) 0%, transparent 60%),
        radial-gradient(circle at 85% 35%, rgba(56, 189, 248, 0.08) 0%, transparent 45%),
        linear-gradient(rgba(255, 255, 255, 0.018) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.018) 1px, transparent 1px);
      background-size: 100% 100%, 100% 100%, 40px 40px, 40px 40px;
      color: #f8fafc;
      font-family: var(--font-sans);
      font-size: 16px;
      line-height: 1.65;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }

    ::selection {
      background: var(--amber);
      color: #000;
    }

    /* Ambient Cyber 3D Canvas Background */
    #bg-cyber-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 0;
      opacity: 0.65;
    }

    /* 3D WebGL Retro Workstation Canvas */
    canvas.webgl {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100vw;
      height: 100vh;
      outline: none;
      z-index: 1;
      pointer-events: all;
      transition: opacity 0.5s ease-out;
    }
    canvas.webgl:active {
      cursor: grabbing;
    }

    #textarea {
      position: fixed;
      top: 0;
      right: 0;
      outline: none;
      z-index: -1;
      opacity: 0;
    }

    /* Bootloader Screen */
    #loading {
      color: #f8fafc;
      background: #06090e;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 10vw;
      z-index: 100;
      transition: opacity 0.4s ease-out;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
    }
    .boot-box {
      max-width: 620px;
      width: 100%;
      background: #0c121d;
      border: 1px solid var(--border-accent);
      box-shadow: 0 0 35px rgba(245, 158, 11, 0.2);
      border-radius: 8px;
      padding: 24px;
    }
    #loading h2 {
      font-family: var(--font-mono);
      font-size: 1.3em;
      color: var(--amber);
      margin-bottom: 8px;
    }
    #loading-items {
      height: 32px;
      font-family: var(--font-mono);
      font-size: 13px;
      color: var(--slate-400);
      overflow: hidden;
      text-overflow: ellipsis;
    }
    #loading-bar {
      position: relative;
      width: 100%;
      height: 28px;
      background: #04060a;
      border: 1px solid var(--border-accent);
      border-radius: 4px;
      overflow: hidden;
      margin: 12px 0;
    }
    #loading-bar-progress {
      position: absolute;
      top: 0; bottom: 0; left: 0; right: 0;
      background: linear-gradient(90deg, #d97706, #fbbf24, #38bdf8);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.2s;
    }

    /* ============================================================ */
    /* TOP HUD COMMAND BAR                                          */
    /* ============================================================ */
    nav.hud-navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 60;
      padding: 14px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(6, 9, 14, 0.85);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(148, 163, 184, 0.14);
    }
    .brand-hud {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
    }
    .brand-avatar {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      border: 1px solid var(--border-accent);
      background: #1e293b;
      overflow: hidden;
    }
    .brand-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      image-rendering: pixelated;
    }
    .brand-info {
      display: flex;
      flex-direction: column;
    }
    .brand-title {
      font-family: var(--font-mono);
      font-size: 13.5px;
      font-weight: 700;
      color: #fff;
      letter-spacing: 0.5px;
    }
    .brand-status {
      font-family: var(--font-mono);
      font-size: 11px;
      color: var(--emerald);
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .status-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--emerald);
      box-shadow: 0 0 8px var(--emerald);
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.85); }
    }

    .nav-links {
      display: flex;
      gap: 10px;
      align-items: center;
    }
    .nav-btn {
      font-family: var(--font-mono);
      font-size: 12px;
      color: var(--slate-300);
      background: rgba(15, 23, 42, 0.7);
      border: 1px solid var(--border-subtle);
      padding: 7px 14px;
      border-radius: 6px;
      text-decoration: none;
      transition: all 0.2s ease;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
    }
    .nav-btn:hover {
      color: #fff;
      border-color: var(--amber);
      background: rgba(245, 158, 11, 0.12);
      box-shadow: 0 0 12px rgba(245, 158, 11, 0.2);
    }
    .nav-btn.primary {
      color: #000;
      background: linear-gradient(135deg, #fbbf24, #f59e0b);
      border-color: #f59e0b;
      font-weight: 600;
      box-shadow: 0 0 15px rgba(245, 158, 11, 0.35);
    }
    .nav-btn.primary:hover {
      background: linear-gradient(135deg, #fcd34d, #fbbf24);
      box-shadow: 0 0 20px rgba(245, 158, 11, 0.55);
      color: #000;
    }

    /* Floating Navigation Rail (Right Side Quick Jump) */
    .nav-rail {
      position: fixed;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 70;
      display: flex;
      flex-direction: column;
      gap: 12px;
      background: rgba(8, 13, 22, 0.82);
      padding: 14px 10px;
      border-radius: 30px;
      border: 1px solid rgba(148, 163, 184, 0.16);
      backdrop-filter: blur(14px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }
    .rail-dot {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: rgba(148, 163, 184, 0.25);
      border: 1px solid rgba(148, 163, 184, 0.4);
      cursor: pointer;
      position: relative;
      transition: all 0.25s ease;
    }
    .rail-dot:hover {
      background: var(--cyan);
      box-shadow: 0 0 10px var(--cyan);
      transform: scale(1.2);
    }
    .rail-dot.active {
      background: var(--amber);
      border-color: var(--amber-light);
      box-shadow: 0 0 14px var(--amber);
      transform: scale(1.3);
    }
    .rail-tooltip {
      position: absolute;
      right: 26px;
      top: 50%;
      transform: translateY(-50%);
      background: #0f172a;
      border: 1px solid var(--border-accent);
      color: #fff;
      font-family: var(--font-mono);
      font-size: 11px;
      padding: 4px 10px;
      border-radius: 4px;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s ease, transform 0.2s ease;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    }
    .rail-dot:hover .rail-tooltip {
      opacity: 1;
      transform: translateY(-50%) translateX(-4px);
    }

    /* ============================================================ */
    /* 3D HERO SECTION (STAGE 01)                                   */
    /* ============================================================ */
    #hero-stage {
      height: 100vh;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      padding-bottom: 45px;
      z-index: 5;
      text-align: center;
    }
    .hero-hud-card {
      background: rgba(10, 16, 28, 0.85);
      border: 1px solid var(--border-accent);
      box-shadow: 0 0 35px rgba(245, 158, 11, 0.18), 0 20px 40px rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(14px);
      border-radius: 12px;
      padding: 20px 32px;
      max-width: 660px;
      width: calc(100% - 32px);
      animation: floatHero 4s ease-in-out infinite;
    }
    @keyframes floatHero {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-6px); }
    }
    .hero-badge-tag {
      font-family: var(--font-mono);
      font-size: 11.5px;
      color: var(--amber);
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .hero-name-title {
      font-size: 2rem;
      font-weight: 800;
      letter-spacing: -0.5px;
      color: #fff;
      margin-bottom: 4px;
      background: linear-gradient(135deg, #fff 40%, #cbd5e1 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero-sub-text {
      font-family: var(--font-mono);
      font-size: 13px;
      color: var(--slate-300);
      margin-bottom: 14px;
    }
    .hero-actions {
      display: flex;
      gap: 10px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .scroll-guide-pill {
      margin-top: 16px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-family: var(--font-mono);
      font-size: 11px;
      color: var(--cyan);
      text-transform: uppercase;
      letter-spacing: 1px;
      animation: bouncePulse 2s infinite;
      cursor: pointer;
    }
    @keyframes bouncePulse {
      0%, 100% { transform: translateY(0); opacity: 0.8; }
      50% { transform: translateY(5px); opacity: 1; }
    }

    /* Offline hero backup fallback */
    #hero-backup {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
      display: none;
    }

    /* ============================================================ */
    /* THE 3D TIMELINE & SECTION-BY-SECTION ARCHITECTURE             */
    /* ============================================================ */
    #timeline-container {
      position: relative;
      max-width: 1060px;
      margin: 0 auto;
      padding: 0 24px 100px 90px;
      z-index: 10;
    }

    /* Vertical 3D Spine Track */
    .timeline-spine {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 42px;
      width: 4px;
      background: rgba(148, 163, 184, 0.14);
      border-radius: 999px;
      z-index: 2;
    }
    .timeline-glow-line {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0%;
      background: linear-gradient(180deg, #38bdf8 0%, #f59e0b 50%, #10b981 100%);
      box-shadow: 0 0 15px rgba(56, 189, 248, 0.85), 0 0 30px rgba(245, 158, 11, 0.45);
      border-radius: 999px;
      transition: height 0.15s ease-out;
    }
    .timeline-spark {
      position: absolute;
      top: 0;
      left: -5px;
      width: 14px;
      height: 70px;
      background: linear-gradient(180deg, transparent, #fff, #38bdf8, transparent);
      border-radius: 999px;
      filter: blur(1px);
      animation: sparkTravel 4s infinite linear;
    }
    @keyframes sparkTravel {
      0% { top: 0%; opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { top: 98%; opacity: 0; }
    }

    /* Dedicated Viewport Section Stage */
    .section-stage {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 70px 0;
      position: relative;
      scroll-margin-top: 75px;
    }

    /* 3D Node on the Spine */
    .spine-node {
      position: absolute;
      left: -69px;
      top: 50%;
      transform: translateY(-50%);
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: #080d17;
      border: 2px solid rgba(56, 189, 248, 0.35);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 700;
      color: var(--slate-400);
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.8);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      z-index: 5;
      cursor: pointer;
    }
    .spine-node::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1px solid var(--cyan);
      opacity: 0;
      transform: scale(1);
      transition: all 0.3s ease;
    }
    .section-stage.active-stage .spine-node,
    .spine-node:hover {
      border-color: var(--amber);
      color: #fff;
      background: #141c2d;
      box-shadow: 0 0 22px rgba(245, 158, 11, 0.6), 0 0 45px rgba(245, 158, 11, 0.3);
      transform: translateY(-50%) scale(1.18);
    }
    .section-stage.active-stage .spine-node::after {
      animation: nodePulse 2s infinite;
    }
    @keyframes nodePulse {
      0% { transform: scale(1); opacity: 0.8; }
      100% { transform: scale(1.7); opacity: 0; }
    }

    /* Section Header */
    .stage-header {
      margin-bottom: 24px;
    }
    .stage-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-family: var(--font-mono);
      font-size: 12px;
      font-weight: 600;
      color: var(--amber);
      background: rgba(245, 158, 11, 0.1);
      border: 1px solid rgba(245, 158, 11, 0.3);
      padding: 5px 12px;
      border-radius: 6px;
      margin-bottom: 10px;
      letter-spacing: 0.5px;
    }
    .stage-badge .badge-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--amber);
      box-shadow: 0 0 8px var(--amber);
    }
    .stage-title {
      font-size: 1.95rem;
      font-weight: 800;
      color: #fff;
      letter-spacing: -0.5px;
      margin-bottom: 6px;
    }
    .stage-desc {
      font-size: 14.5px;
      color: var(--slate-400);
      max-width: 680px;
    }

    /* 3D Glassmorphic Container Card */
    .stage-card {
      background: var(--bg-card);
      border: 1px solid var(--border-cyan);
      box-shadow: 0 20px 45px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.08);
      border-radius: 14px;
      padding: 30px;
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
    }
    .stage-card:hover {
      border-color: var(--border-accent);
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.75), 0 0 25px rgba(245, 158, 11, 0.16);
      transform: translateY(-3px);
    }

    /* ============================================================ */
    /* SECTION 02: CANDIDATE DOSSIER DETAILS                        */
    /* ============================================================ */
    .dossier-grid {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 28px;
      align-items: start;
    }
    .dossier-photo-card {
      background: #090e18;
      border: 1px solid var(--border-subtle);
      border-radius: 10px;
      padding: 16px;
      text-align: center;
    }
    .photo-frame {
      width: 100%;
      aspect-ratio: 1/1;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid var(--border-accent);
      position: relative;
      background: #000;
      margin-bottom: 14px;
    }
    .photo-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .photo-scanline {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.35) 50%);
      background-size: 100% 4px;
      pointer-events: none;
    }
    .credential-chip {
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.35);
      color: var(--emerald);
      font-family: var(--font-mono);
      font-size: 11.5px;
      padding: 6px 10px;
      border-radius: 6px;
      margin-bottom: 12px;
      display: block;
    }

    /* KPI Highlights */
    .kpi-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 12px;
      margin: 18px 0;
    }
    .kpi-box {
      background: rgba(15, 23, 42, 0.65);
      border: 1px solid var(--border-subtle);
      border-radius: 8px;
      padding: 12px 14px;
      transition: all 0.2s ease;
    }
    .kpi-box:hover {
      border-color: var(--amber);
      background: rgba(245, 158, 11, 0.08);
    }
    .kpi-num {
      font-family: var(--font-mono);
      font-size: 1.55rem;
      font-weight: 800;
      color: var(--amber);
      line-height: 1.1;
    }
    .kpi-label {
      font-size: 11.5px;
      color: var(--slate-400);
      margin-top: 3px;
      font-weight: 500;
    }

    /* ============================================================ */
    /* SECTION 03: ENGINEERED PROJECTS SHOWCASE                     */
    /* ============================================================ */
    .projects-stack {
      display: flex;
      flex-direction: column;
      gap: 22px;
    }
    .project-card {
      background: rgba(10, 16, 27, 0.9);
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      padding: 22px;
      transition: all 0.25s ease;
      display: grid;
      grid-template-columns: 240px 1fr;
      gap: 22px;
      align-items: center;
    }
    .project-card:hover {
      border-color: var(--cyan);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 18px rgba(56, 189, 248, 0.18);
      transform: translateX(4px);
    }
    .project-media {
      width: 100%;
      height: 160px;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid rgba(148, 163, 184, 0.18);
      background: #000;
    }
    .project-media img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    .project-card:hover .project-media img {
      transform: scale(1.05);
    }
    .project-content h3 {
      font-size: 1.25rem;
      color: #fff;
      font-weight: 700;
      margin-bottom: 4px;
    }
    .project-tagline {
      font-family: var(--font-mono);
      font-size: 12px;
      color: var(--amber);
      margin-bottom: 8px;
    }
    .project-desc {
      font-size: 13.5px;
      color: var(--slate-300);
      margin-bottom: 12px;
      line-height: 1.55;
    }
    .tech-pill-list {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 12px;
    }
    .tech-pill {
      font-family: var(--font-mono);
      font-size: 11px;
      padding: 3px 9px;
      background: rgba(30, 41, 59, 0.8);
      border: 1px solid rgba(148, 163, 184, 0.2);
      border-radius: 4px;
      color: var(--cyan);
    }
    .metrics-bar {
      display: flex;
      gap: 16px;
      font-family: var(--font-mono);
      font-size: 11.5px;
      color: var(--emerald);
      padding-top: 10px;
      border-top: 1px solid rgba(148, 163, 184, 0.12);
    }

    /* ============================================================ */
    /* SECTION 04: TECHNICAL CAPABILITIES MATRIX                    */
    /* ============================================================ */
    .skills-quad {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
    }
    .skill-card {
      background: rgba(10, 15, 26, 0.85);
      border: 1px solid var(--border-subtle);
      border-radius: 10px;
      padding: 18px;
      transition: all 0.2s ease;
    }
    .skill-card:hover {
      border-color: var(--amber);
      background: rgba(16, 24, 40, 0.95);
      transform: translateY(-3px);
    }
    .skill-icon {
      font-size: 1.6rem;
      margin-bottom: 8px;
    }
    .skill-card h4 {
      font-size: 1rem;
      color: #fff;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .skill-list {
      list-style: none;
      font-size: 13px;
      color: var(--slate-300);
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .skill-list li {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .skill-list li::before {
      content: "▹";
      color: var(--amber);
      font-family: var(--font-mono);
    }

    /* ============================================================ */
    /* SECTION 05: PODIUM HONORS & RECOGNITIONS                     */
    /* ============================================================ */
    .honors-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 18px;
    }
    .honor-card {
      background: rgba(10, 16, 27, 0.9);
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      overflow: hidden;
      transition: all 0.25s ease;
      display: flex;
      flex-direction: column;
    }
    .honor-card:hover {
      border-color: var(--amber);
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6), 0 0 16px rgba(245, 158, 11, 0.2);
    }
    .honor-media {
      width: 100%;
      height: 150px;
      overflow: hidden;
      background: #000;
      border-bottom: 1px solid rgba(148, 163, 184, 0.15);
    }
    .honor-media img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .honor-body {
      padding: 16px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    .honor-trophy-tag {
      font-family: var(--font-mono);
      font-size: 11.5px;
      font-weight: 700;
      color: var(--amber);
      margin-bottom: 6px;
    }
    .honor-card h4 {
      font-size: 1.05rem;
      color: #fff;
      font-weight: 700;
      margin-bottom: 6px;
    }
    .honor-meta {
      font-family: var(--font-mono);
      font-size: 11.5px;
      color: var(--slate-400);
      margin-top: auto;
      padding-top: 8px;
    }

    /* ============================================================ */
    /* SECTION 06: INTERACTIVE TERMINAL CONSOLE                     */
    /* ============================================================ */
    .terminal-box {
      background: #04070d;
      border: 1px solid var(--border-accent);
      border-radius: 10px;
      box-shadow: 0 0 35px rgba(0, 0, 0, 0.8), inset 0 0 40px rgba(245, 158, 11, 0.05);
      overflow: hidden;
      font-family: var(--font-mono);
    }
    .terminal-titlebar {
      background: #0c1320;
      padding: 10px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(148, 163, 184, 0.15);
    }
    .term-dots {
      display: flex;
      gap: 6px;
    }
    .term-dot {
      width: 11px;
      height: 11px;
      border-radius: 50%;
    }
    .term-dot.r { background: #ef4444; }
    .term-dot.y { background: #f59e0b; }
    .term-dot.g { background: #10b981; }
    .term-title {
      font-size: 12px;
      color: var(--slate-400);
    }
    .terminal-screen {
      padding: 18px;
      height: 280px;
      overflow-y: auto;
      font-size: 13px;
      color: #cbd5e1;
      line-height: 1.6;
    }
    .term-quick-bar {
      padding: 10px 16px;
      background: #080d16;
      border-top: 1px solid rgba(148, 163, 184, 0.12);
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    .quick-chip {
      background: rgba(30, 41, 59, 0.8);
      border: 1px solid rgba(148, 163, 184, 0.25);
      color: var(--amber);
      font-size: 11.5px;
      padding: 4px 10px;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.15s ease;
    }
    .quick-chip:hover {
      background: var(--amber);
      color: #000;
      box-shadow: 0 0 10px var(--amber);
    }
    .term-input-row {
      display: flex;
      align-items: center;
      padding: 10px 16px;
      background: #060a12;
      border-top: 1px solid rgba(148, 163, 184, 0.12);
      gap: 8px;
    }
    .term-prompt {
      color: var(--amber);
      font-weight: 700;
      font-size: 13px;
    }
    #shell-input {
      background: transparent;
      border: none;
      outline: none;
      color: #fff;
      font-family: var(--font-mono);
      font-size: 13px;
      flex-grow: 1;
    }

    /* ============================================================ */
    /* SECTION 07: TRANSMISSION DISPATCH & CONTACT                  */
    /* ============================================================ */
    .dispatch-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
    }
    .dispatch-card {
      background: rgba(10, 16, 27, 0.85);
      border: 1px solid var(--border-subtle);
      border-radius: 10px;
      padding: 18px;
      text-decoration: none;
      color: inherit;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .dispatch-card:hover {
      border-color: var(--cyan);
      background: rgba(16, 25, 42, 0.95);
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(56, 189, 248, 0.15);
    }
    .dispatch-icon {
      font-size: 1.5rem;
      margin-bottom: 6px;
    }
    .dispatch-label {
      font-family: var(--font-mono);
      font-size: 11px;
      color: var(--slate-400);
      margin-bottom: 4px;
    }
    .dispatch-val {
      font-weight: 700;
      font-size: 14.5px;
      color: #fff;
    }

    /* Toast */
    #toast {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #0f172a;
      border: 1px solid var(--emerald);
      color: var(--emerald);
      font-family: var(--font-mono);
      font-size: 12.5px;
      padding: 10px 18px;
      border-radius: 6px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
      z-index: 1000;
      opacity: 0;
      transform: translateY(10px);
      transition: all 0.25s ease;
      pointer-events: none;
    }
    #toast.show {
      opacity: 1;
      transform: translateY(0);
    }

    /* Footer */
    footer {
      border-top: 1px solid rgba(148, 163, 184, 0.12);
      padding: 40px 24px;
      text-align: center;
      font-size: 13px;
      color: var(--slate-500);
      position: relative;
      z-index: 10;
      background: rgba(6, 9, 14, 0.9);
    }

    /* Responsive adjustments */
    @media (max-width: 860px) {
      #timeline-container {
        padding-left: 60px;
        padding-right: 16px;
      }
      .timeline-spine {
        left: 24px;
      }
      .spine-node {
        left: -52px;
        width: 34px;
        height: 34px;
        font-size: 10px;
      }
      .dossier-grid {
        grid-template-columns: 1fr;
      }
      .project-card {
        grid-template-columns: 1fr;
      }
      .project-media {
        height: 180px;
      }
      .nav-rail {
        display: none;
      }
    }
  </style>
</head>
<body>
  <!-- Ambient Cyber Canvas (Subtle 3D Grid & Particle Lines) -->
  <canvas id="bg-cyber-canvas"></canvas>

  <!-- 3D Retro Commodore PET 8296 Workstation Canvas -->
  <canvas class="webgl"></canvas>

  <!-- Offline Hero Fallback -->
  <div id="hero-backup">
    <div class="hero-hud-card">
      <div class="hero-badge-tag">[ SYSTEM ACTIVE • OJT READY ]</div>
      <h1 class="hero-name-title">Muhammad Mirza Aqmal Raziq</h1>
      <div class="hero-sub-text">Diploma Teknologi Komputeran • KVPJB (CGPA 3.98 • SKM Level 3)</div>
      <div class="hero-actions">
        <a class="nav-btn primary" href="#about">Enter Candidate Dossier ↓</a>
        <a class="nav-btn" href="./sijil_skm3_jpk_official.pdf" target="_blank">📄 Official SKM 3 PDF</a>
      </div>
    </div>
  </div>

  <!-- Top HUD Command Bar -->
  <nav class="hud-navbar">
    <a href="#workstation" class="brand-hud">
      <div class="brand-avatar">
        <img src="./images/mirza-title.png" alt="Mirza" />
      </div>
      <div class="brand-info">
        <span class="brand-title">MIRZA // 3D OS</span>
        <span class="brand-status"><span class="status-dot"></span> 5-MONTH OJT READY (FEB 2027)</span>
      </div>
    </a>

    <div class="nav-links">
      <button class="nav-btn" onclick="toggleAudio()" id="sound-btn" title="Toggle Tactile Audio">
        🔊 Sound: ON
      </button>
      <a class="nav-btn" href="https://www.linkedin.com/in/aqmal-raziq-3975b0346/" target="_blank">
        LinkedIn
      </a>
      <a class="nav-btn" href="https://github.com/mircrtierr" target="_blank">
        GitHub
      </a>
      <a class="nav-btn primary" href="./sijil_skm3_jpk_official.pdf" target="_blank">
        📄 Verified SKM 3 PDF
      </a>
    </div>
  </nav>

  <!-- Floating Right-Side Navigation Rail -->
  <div class="nav-rail">
    <div class="rail-dot active" onclick="glideTo('workstation')" data-section="workstation">
      <span class="rail-tooltip">01 // 3D Workstation</span>
    </div>
    <div class="rail-dot" onclick="glideTo('about')" data-section="about">
      <span class="rail-tooltip">02 // Candidate Dossier</span>
    </div>
    <div class="rail-dot" onclick="glideTo('projects')" data-section="projects">
      <span class="rail-tooltip">03 // Engineered Projects</span>
    </div>
    <div class="rail-dot" onclick="glideTo('skills')" data-section="skills">
      <span class="rail-tooltip">04 // Technical Matrix</span>
    </div>
    <div class="rail-dot" onclick="glideTo('awards')" data-section="awards">
      <span class="rail-tooltip">05 // Podium Honors</span>
    </div>
    <div class="rail-dot" onclick="glideTo('terminal')" data-section="terminal">
      <span class="rail-tooltip">06 // Diagnostic Terminal</span>
    </div>
    <div class="rail-dot" onclick="glideTo('contact')" data-section="contact">
      <span class="rail-tooltip">07 // Transmission Dispatch</span>
    </div>
  </div>

  <!-- ============================================================ -->
  <!-- STAGE 01: 3D RETRO WORKSTATION (HERO)                        -->
  <!-- ============================================================ -->
  <section id="workstation">
    <div id="hero-stage">
      <div class="hero-hud-card">
        <div class="hero-badge-tag">[ STAGE 01 // INTERACTIVE 3D WORKSTATION ]</div>
        <h1 class="hero-name-title">Muhammad Mirza Aqmal Raziq</h1>
        <div class="hero-sub-text">
          Final Year Diploma Teknologi Komputeran • Kolej Vokasional Perdagangan JB<br/>
          <strong style="color: var(--amber);">CGPA 3.98 / 4.00</strong> • Verified SKM Level 3 Certified: <strong style="color: var(--cyan);">S103882102</strong>
        </div>
        <div class="hero-actions">
          <a class="nav-btn primary" href="#about" onclick="playBeep(850, 0.05)">Explore Candidate Dossier ↓</a>
          <a class="nav-btn" href="./Resume_Muhammad_Mirza_Aqmal_Raziq.pdf" target="_blank" onclick="playBeep(700, 0.05)">📄 Resume PDF</a>
          <a class="nav-btn" href="./sijil_skm3_jpk_official.pdf" target="_blank" onclick="playBeep(700, 0.05)">🏆 SKM Level 3 PDF</a>
        </div>
        <div class="scroll-guide-pill" onclick="glideTo('about')">
          ▼ Scroll down or click to enter timeline ▼
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================ -->
  <!-- 3D NEON SPINE TIMELINE & STRUCTURED SECTION STAGES           -->
  <!-- ============================================================ -->
  <div id="timeline-container">
    <!-- The Glowing 3D Laser Spine -->
    <div class="timeline-spine">
      <div class="timeline-glow-line" id="timeline-glow"></div>
      <div class="timeline-spark"></div>
    </div>

    <!-- ========================================================== -->
    <!-- STAGE 02: CANDIDATE DOSSIER                                -->
    <!-- ========================================================== -->
    <section id="about" class="section-stage" data-node="02">
      <div class="spine-node" onclick="glideTo('about')">02</div>
      
      <div class="stage-header">
        <div class="stage-badge"><span class="badge-dot"></span> STAGE 02 // CANDIDATE PROFILE</div>
        <h2 class="stage-title">Candidate Dossier &amp; Verified Credentials</h2>
        <p class="stage-desc">Comprehensive academic standing, verified vocational accreditations, and industrial training requirements.</p>
      </div>

      <div class="stage-card">
        <div class="dossier-grid">
          <!-- Left: Photo & Identification Badge -->
          <div class="dossier-photo-card">
            <div class="photo-frame">
              <img src="./images/mirza-title.png" alt="Muhammad Mirza Aqmal Raziq" />
              <div class="photo-scanline"></div>
            </div>
            <div class="credential-chip">
              ✓ SKM Level 3: S103882102
            </div>
            <div style="font-family: var(--font-mono); font-size: 11px; color: var(--slate-400); margin-bottom: 14px;">
              Pasir Gudang, Johor, Malaysia
            </div>
            <a class="nav-btn primary" href="./sijil_skm3_jpk_official.pdf" target="_blank" style="width: 100%; justify-content: center; margin-bottom: 8px;">
              📄 Official SKM 3 PDF
            </a>
            <a class="nav-btn" href="./Resume_Muhammad_Mirza_Aqmal_Raziq.pdf" target="_blank" style="width: 100%; justify-content: center;">
              📥 Download Resume PDF
            </a>
          </div>

          <!-- Right: Identity Details & KPI Counter Grid -->
          <div>
            <div style="font-family: var(--font-mono); font-size: 12px; color: var(--amber); margin-bottom: 4px;">
              // DIPLOMA TEKNOLOGI KOMPUTERAN • FINAL YEAR CANDIDATE
            </div>
            <h3 style="font-size: 1.45rem; color: #fff; font-weight: 700; margin-bottom: 12px;">
              Muhammad Mirza Aqmal Raziq bin Mirza Affzard
            </h3>
            <p style="color: var(--slate-300); font-size: 14.5px; line-height: 1.65; margin-bottom: 14px;">
              Final-year Computer Technology student at <strong>Kolej Vokasional Perdagangan Johor Bahru (KVPJB)</strong>. I specialize in bridging Edge IoT microcontrollers with neural similarity search (ESP32-CAM + FAISS 512D), custom YOLOv8 computer vision classification, hardware diagnostics, and Cisco enterprise networking.
            </p>

            <!-- 4 Key KPI Metrics -->
            <div class="kpi-row">
              <div class="kpi-box">
                <div class="kpi-num">3.98</div>
                <div class="kpi-label">Cumulative CGPA / 4.00</div>
              </div>
              <div class="kpi-box">
                <div class="kpi-num">SKM 3</div>
                <div class="kpi-label">IT System Support (JPK)</div>
              </div>
              <div class="kpi-box">
                <div class="kpi-num">5 Mo.</div>
                <div class="kpi-label">OJT: Feb – June 2027</div>
              </div>
              <div class="kpi-box">
                <div class="kpi-num">3x</div>
                <div class="kpi-label">State &amp; National Podiums</div>
              </div>
            </div>

            <!-- Internship Scope Specs -->
            <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 14px 16px; margin-top: 14px;">
              <div style="font-family: var(--font-mono); font-size: 11.5px; color: var(--emerald); font-weight: 600; margin-bottom: 4px;">
                🎯 5-MONTH ON-THE-JOB TRAINING (OJT) INTERNSHIP SPECIFICATION
              </div>
              <div style="font-size: 13.5px; color: var(--slate-300);">
                Available for placement from <strong>February 2027 to June 2027</strong> in Software Engineering, Edge IoT Systems, IT Infrastructure, or Network Administration. Willing to relocate within Johor or Greater Kuala Lumpur.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================================== -->
    <!-- STAGE 03: ENGINEERED PROJECTS SHOWCASE                     -->
    <!-- ========================================================== -->
    <section id="projects" class="section-stage" data-node="03">
      <div class="spine-node" onclick="glideTo('projects')">03</div>

      <div class="stage-header">
        <div class="stage-badge"><span class="badge-dot"></span> STAGE 03 // MISSION LOG</div>
        <h2 class="stage-title">Featured Engineered Systems &amp; AI Research</h2>
        <p class="stage-desc">Production-grade implementations combining embedded microcontrollers, computer vision, vector search, and digital signal engineering.</p>
      </div>

      <div class="stage-card">
        <div class="projects-stack">
          <!-- Project 1: SmartAttend KVPJB -->
          <div class="project-card">
            <div class="project-media">
              <img src="./images/smartattend_dashboard.jpg" alt="SmartAttend KVPJB Attendance Dashboard" />
            </div>
            <div class="project-content">
              <h3>SmartAttend KVPJB: Edge IoT Biometric Attendance</h3>
              <div class="project-tagline">// ESP32-CAM • FAISS 512D VECTOR SIMILARITY • GOOGLE SHEETS API • TELEGRAM BOT</div>
              <p class="project-desc">
                Architected a production attendance verification station for vocational cohorts. An ESP32-CAM micro-module captures frames and streams them to a Python backend where 512-dimensional facial embeddings are queried against a FAISS index, achieving sub-second verification with automated cloud logging and instant parent alerts.
              </p>
              <div class="tech-pill-list">
                <span class="tech-pill">ESP32-CAM (OV2640)</span>
                <span class="tech-pill">Python Flask</span>
                <span class="tech-pill">FAISS 512D Index</span>
                <span class="tech-pill">Google Sheets REST API</span>
                <span class="tech-pill">Telegram Bot API</span>
              </div>
              <div class="metrics-bar">
                <span>⚡ Latency: &lt;150ms</span>
                <span>🎯 Verification: 99.2% Accuracy</span>
                <span>☁️ Storage: Zero Cost Cloud Sync</span>
              </div>
            </div>
          </div>

          <!-- Project 2: YOLOv8 Custom Object Detection -->
          <div class="project-card">
            <div class="project-media">
              <img src="./images/yolo_colab_detection.jpg" alt="Custom YOLOv8 Model Training in Google Colab" />
            </div>
            <div class="project-content">
              <h3>Custom YOLOv8 Object Classification &amp; Telemetry</h3>
              <div class="project-tagline">// TRANSFER LEARNING • GOOGLE COLAB TESLA T4 • OPENCV INFERENCE PIPELINE</div>
              <p class="project-desc">
                Engineered an end-to-end computer vision pipeline. Curated and augmented custom dataset with bounding box annotations in Roboflow, trained custom YOLOv8 model on Tesla T4 GPUs via Google Colab, and deployed high-framerate real-time video detection via OpenCV.
              </p>
              <div class="tech-pill-list">
                <span class="tech-pill">YOLOv8 PyTorch</span>
                <span class="tech-pill">Tesla T4 GPU</span>
                <span class="tech-pill">Roboflow Dataset</span>
                <span class="tech-pill">OpenCV Video Engine</span>
                <span class="tech-pill">ONNX Runtime</span>
              </div>
              <div class="metrics-bar">
                <span>📊 Precision: 92.4% mAP@0.5</span>
                <span>⚡ Real-time Inference @ 30+ FPS</span>
                <span>📦 Export: ONNX / TensorRT Ready</span>
              </div>
            </div>
          </div>

          <!-- Project 3: Beyond The Mic Podcast Audio Engineering -->
          <div class="project-card">
            <div class="project-media">
              <img src="./images/trophy_petah_madani_podcast.jpg" alt="Beyond The Mic Podcast National Award" />
            </div>
            <div class="project-content">
              <h3>Beyond The Mic: National Competition Audio Engineering</h3>
              <div class="project-tagline">// 5TH PLACE NATIONAL @ PICC PUTRAJAYA • DIGITAL AUDIO MASTERING • MULTI-CAM OBS</div>
              <p class="project-desc">
                Led audio engineering and studio recording for the Beyond The Mic podcast series, competing against premier institutions across Malaysia. Handled dynamic cardioid acoustic capture, multi-stage spectral noise gating, parametric EQ, and EBU R128 loudness normalization.
              </p>
              <div class="tech-pill-list">
                <span class="tech-pill">Audacity Digital Mastering</span>
                <span class="tech-pill">EBU R128 Loudness Target</span>
                <span class="tech-pill">OBS Studio Multi-Cam</span>
                <span class="tech-pill">Acoustic Calibration</span>
              </div>
              <div class="metrics-bar">
                <span>🏆 5th Place National Award (PICC Putrajaya)</span>
                <span>🔊 Studio EBU R128 Broadcast Mastering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================================== -->
    <!-- STAGE 04: TECHNICAL MATRIX & CAPABILITIES                  -->
    <!-- ========================================================== -->
    <section id="skills" class="section-stage" data-node="04">
      <div class="spine-node" onclick="glideTo('skills')">04</div>

      <div class="stage-header">
        <div class="stage-badge"><span class="badge-dot"></span> STAGE 04 // CAPABILITIES</div>
        <h2 class="stage-title">Technical Matrix &amp; Engineering Disciplines</h2>
        <p class="stage-desc">Core proficiencies encompassing applied software development, edge IoT devices, hardware repair, and enterprise network design.</p>
      </div>

      <div class="stage-card">
        <div class="skills-quad">
          <!-- Domain 1 -->
          <div class="skill-card">
            <div class="skill-icon">🧠</div>
            <h4>Software &amp; AI Vision</h4>
            <ul class="skill-list">
              <li>Python (Scripting &amp; Automation)</li>
              <li>YOLOv8 &amp; PyTorch Inference</li>
              <li>FAISS 512D Vector Similarity</li>
              <li>OpenCV Image Processing</li>
              <li>Flask REST APIs &amp; Webhooks</li>
              <li>JavaScript &amp; Three.js WebGL</li>
            </ul>
          </div>

          <!-- Domain 2 -->
          <div class="skill-card">
            <div class="skill-icon">📡</div>
            <h4>Edge IoT &amp; Embedded</h4>
            <ul class="skill-list">
              <li>ESP32 &amp; ESP32-CAM Modules</li>
              <li>Arduino C/C++ Programming</li>
              <li>UART / I2C / SPI Sensors</li>
              <li>Camera Video Streaming RTSP</li>
              <li>Relay &amp; Actuator Control</li>
              <li>Low-Power Sleep Modes</li>
            </ul>
          </div>

          <!-- Domain 3 -->
          <div class="skill-card">
            <div class="skill-icon">🛠️</div>
            <h4>IT Support &amp; Hardware</h4>
            <ul class="skill-list">
              <li>SKM Level 3 Certified (JPK)</li>
              <li>PC Architecture &amp; Custom Assembly</li>
              <li>Component Troubleshooting</li>
              <li>Thermal Paste &amp; Cooling Diagnosis</li>
              <li>BIOS/UEFI Configuration &amp; Flashing</li>
              <li>OS Deployment (Windows &amp; Linux)</li>
            </ul>
          </div>

          <!-- Domain 4 -->
          <div class="skill-card">
            <div class="skill-icon">🌐</div>
            <h4>Cisco &amp; Telecommunications</h4>
            <ul class="skill-list">
              <li>Cisco Packet Tracer Architecture</li>
              <li>IPv4 / IPv6 Subnetting &amp; CIDR</li>
              <li>VLANs, Trunking &amp; Inter-VLAN</li>
              <li>DHCP / DNS Server Setup</li>
              <li>Cat6 Cable Crimping (T568A/B)</li>
              <li>Router &amp; Switch CLI Config</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================================== -->
    <!-- STAGE 05: PODIUM HONORS & RECOGNITIONS                     -->
    <!-- ========================================================== -->
    <section id="awards" class="section-stage" data-node="05">
      <div class="spine-node" onclick="glideTo('awards')">05</div>

      <div class="stage-header">
        <div class="stage-badge"><span class="badge-dot"></span> STAGE 05 // PODIUM DISTINCTIONS</div>
        <h2 class="stage-title">Podium Honors &amp; Competitive Accolades</h2>
        <p class="stage-desc">Proven excellence under time-pressured competitive hackathons, app development challenges, and national broadcasts.</p>
      </div>

      <div class="stage-card">
        <div class="honors-grid">
          <!-- Award 1 -->
          <div class="honor-card">
            <div class="honor-media">
              <img src="./images/trophy_johan_apps_ideation_johor.jpg" alt="Johan Apps Ideation Johor Trophy" />
            </div>
            <div class="honor-body">
              <div class="honor-trophy-tag">🥇 CHAMPION // JOHAN NEGERI</div>
              <h4>Johan Pertandingan Apps Ideation Johor</h4>
              <p style="font-size: 13px; color: var(--slate-300); margin: 6px 0;">
                Awarded 1st Place across Johor state for novel software architecture addressing student community utility and digital workflows.
              </p>
              <div class="honor-meta">State Level (Johor) • 2023</div>
            </div>
          </div>

          <!-- Award 2 -->
          <div class="honor-card">
            <div class="honor-media">
              <img src="./images/trophy_android_national_mmu.jpg" alt="MMU Android Challenge Trophy" />
            </div>
            <div class="honor-body">
              <div class="honor-trophy-tag">🥉 3RD PLACE // TEMPAT KETIGA</div>
              <h4>Tempat Ketiga MMU Android Challenge</h4>
              <p style="font-size: 13px; color: var(--slate-300); margin: 6px 0;">
                Secured 3rd Place nationwide at Multimedia University (MMU) for rapid Android native mobile app engineering and UI presentation.
              </p>
              <div class="honor-meta">National Level (MMU) • 2024</div>
            </div>
          </div>

          <!-- Award 3 -->
          <div class="honor-card">
            <div class="honor-media">
              <img src="./images/trophy_petah_madani_podcast.jpg" alt="Beyond The Mic Podcast National Award" />
            </div>
            <div class="honor-body">
              <div class="honor-trophy-tag">🏅 5TH PLACE // KEBANGSAAN</div>
              <h4>Kelima Kebangsaan Beyond The Mic</h4>
              <p style="font-size: 13px; color: var(--slate-300); margin: 6px 0;">
                Achieved 5th Place National standing at the Putrajaya International Convention Centre (PICC) for podcast engineering and production.
              </p>
              <div class="honor-meta">National @ PICC Putrajaya • 2026</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================================== -->
    <!-- STAGE 06: INTERACTIVE TERMINAL CONSOLE                     -->
    <!-- ========================================================== -->
    <section id="terminal" class="section-stage" data-node="06">
      <div class="spine-node" onclick="glideTo('terminal')">06</div>

      <div class="stage-header">
        <div class="stage-badge"><span class="badge-dot"></span> STAGE 06 // SYSTEM DIAGNOSTIC</div>
        <h2 class="stage-title">Interactive Terminal Console</h2>
        <p class="stage-desc">Direct CLI shell for querying system diagnostics, candidate dossier specs, and verification records.</p>
      </div>

      <div class="terminal-box">
        <div class="terminal-titlebar">
          <div class="term-dots">
            <span class="term-dot r"></span>
            <span class="term-dot y"></span>
            <span class="term-dot g"></span>
          </div>
          <span class="term-title">mirza@kvpjb-system: /opt/dossier</span>
          <span style="font-size: 11px; color: var(--emerald);">● CONNECTED</span>
        </div>

        <div class="terminal-screen" id="shell-output">
          <div style="color: var(--amber); font-weight: bold;">MIRZA-OS v1.0 LTS Diagnostic Console</div>
          <div style="color: var(--slate-400); margin-bottom: 8px;">Type <span style="color: var(--cyan); font-weight: bold;">help</span> or click command chips below to inspect candidate profile.</div>
          <div style="color: #34d399;">mirza@kvpjb:~$ neofetch</div>
          <div style="margin: 6px 0; padding: 8px; background: rgba(255,255,255,0.03); border-radius: 6px;">
            <div>• Candidate: <strong style="color: #fff;">Muhammad Mirza Aqmal Raziq</strong></div>
            <div>• Institution: <strong>Kolej Vokasional Perdagangan Johor Bahru (KVPJB)</strong></div>
            <div>• Academic CGPA: <strong style="color: var(--amber);">3.98 / 4.00</strong></div>
            <div>• Verified Credential: <strong style="color: var(--cyan);">SKM Tahap 3 (S103882102)</strong></div>
            <div>• Status: <strong style="color: var(--emerald);">Available for 5-Month OJT (Feb–Jun 2027)</strong></div>
          </div>
        </div>

        <div class="term-quick-bar">
          <span style="font-size: 11px; color: var(--slate-400);">QUICK EXEC:</span>
          <button class="quick-chip" onclick="runCommand('about')">about</button>
          <button class="quick-chip" onclick="runCommand('projects')">projects</button>
          <button class="quick-chip" onclick="runCommand('skills')">skills</button>
          <button class="quick-chip" onclick="runCommand('cgpa')">cgpa</button>
          <button class="quick-chip" onclick="runCommand('ojt')">ojt</button>
          <button class="quick-chip" onclick="runCommand('awards')">awards</button>
          <button class="quick-chip" onclick="runCommand('contact')">contact</button>
          <button class="quick-chip" onclick="runCommand('clear')">clear</button>
        </div>

        <div class="term-input-row">
          <span class="term-prompt">mirza@kvpjb:~$</span>
          <input type="text" id="shell-input" placeholder="Type command here (e.g. help, about, ojt, contact)..." onkeydown="if(event.key==='Enter') submitCommand()" />
          <button class="nav-btn primary" onclick="submitCommand()" style="padding: 4px 12px; font-size: 11px;">
            EXECUTE ↵
          </button>
        </div>
      </div>
    </section>

    <!-- ========================================================== -->
    <!-- STAGE 07: TRANSMISSION DISPATCH & CONTACT                  -->
    <!-- ========================================================== -->
    <section id="contact" class="section-stage" data-node="07">
      <div class="spine-node" onclick="glideTo('contact')">07</div>

      <div class="stage-header">
        <div class="stage-badge"><span class="badge-dot"></span> STAGE 07 // DISPATCH</div>
        <h2 class="stage-title">Transmission Dispatch &amp; Connect</h2>
        <p class="stage-desc">Direct communication channels for internship inquiries, interview scheduling, and credential verification.</p>
      </div>

      <div class="stage-card">
        <div class="dispatch-grid">
          <div class="dispatch-card" onclick="copyText('mirzaaqmal22@gmail.com', 'Email address')">
            <div class="dispatch-icon">✉️</div>
            <div class="dispatch-label">PRIMARY EMAIL</div>
            <div class="dispatch-val">mirzaaqmal22@gmail.com</div>
            <div style="font-family: var(--font-mono); font-size: 11px; color: var(--amber); margin-top: 6px;">[Click to Copy]</div>
          </div>

          <div class="dispatch-card" onclick="copyText('013-5788399', 'Phone number')">
            <div class="dispatch-icon">📞</div>
            <div class="dispatch-label">PHONE / WHATSAPP</div>
            <div class="dispatch-val">013-5788399</div>
            <div style="font-family: var(--font-mono); font-size: 11px; color: var(--amber); margin-top: 6px;">[Click to Copy]</div>
          </div>

          <a class="dispatch-card" href="https://www.linkedin.com/in/aqmal-raziq-3975b0346/" target="_blank" onclick="playBeep(900, 0.05)">
            <div class="dispatch-icon">💼</div>
            <div class="dispatch-label">LINKEDIN PROFILE</div>
            <div class="dispatch-val">aqmal-raziq-3975b0346</div>
            <div style="font-family: var(--font-mono); font-size: 11px; color: var(--cyan); margin-top: 6px;">[Open LinkedIn ↗]</div>
          </a>

          <a class="dispatch-card" href="https://github.com/mircrtierr" target="_blank" onclick="playBeep(900, 0.05)">
            <div class="dispatch-icon">💻</div>
            <div class="dispatch-label">GITHUB REPOSITORIES</div>
            <div class="dispatch-val">github.com/mircrtierr</div>
            <div style="font-family: var(--font-mono); font-size: 11px; color: var(--cyan); margin-top: 6px;">[Open GitHub ↗]</div>
          </a>
        </div>

        <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 26px;">
          <a class="nav-btn primary" href="mailto:mirzaaqmal22@gmail.com?subject=OJT%20Internship%20Offer%20-%20Muhammad%20Mirza%20Aqmal%20Raziq" style="padding: 12px 28px; font-size: 14px;" onclick="playBeep(1100, 0.08)">
            ✉️ Dispatch Email to Mirza
          </a>
          <a class="nav-btn" href="./Muhammad_Mirza_Aqmal_Raziq.vcf" download style="padding: 12px 20px; font-size: 13.5px;" onclick="playBeep(850, 0.05)">
            📇 Save vCard Contact (.vcf)
          </a>
          <a class="nav-btn" href="./sijil_skm3_jpk_official.pdf" target="_blank" style="padding: 12px 20px; font-size: 13.5px;" onclick="playBeep(850, 0.05)">
            🏆 Verified SKM 3 Digital Certificate
          </a>
        </div>
      </div>
    </section>
  </div>

  <!-- Interactive Toast Notification -->
  <div id="toast">✓ Copied to clipboard!</div>

  <!-- Hidden input for 3D retro keyboard compatibility -->
  <input type="text" id="textarea" readonly />

  <!-- Footer -->
  <footer>
    <div style="color: #fff; font-weight: 600; font-family: var(--font-mono); font-size: 14px; margin-bottom: 4px;">
      Muhammad Mirza Aqmal Raziq bin Mirza Affzard
    </div>
    <div>Diploma Teknologi Komputeran • Kolej Vokasional Perdagangan Johor Bahru (KVPJB)</div>
    <div>Pasir Gudang, Johor, Malaysia • Academic CGPA 3.98 / 4.00 • SKM Level 3 ID: S103882102</div>
    <div style="color: var(--amber); margin-top: 6px;">5-Month On-The-Job Training (OJT) Internship Window: February – June 2027</div>
    <div style="font-size: 12px; color: var(--slate-500); margin-top: 8px;">Engineered with 3D WebGL Workstation &amp; Neon Timeline Architecture.</div>
  </footer>

  <!-- Scripts: Audio, Ambient Canvas, Smooth Glide, Active Stage Tracker, CLI -->
  <script>
    // Audio Synthesizer
    var audioOn = true;
    var audioCtx = null;

    function playBeep(freq, duration) {
      if (!audioOn) return;
      try {
        if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
          var AudioClass = window.AudioContext || window.webkitAudioContext;
          audioCtx = new AudioClass();
        }
        if (audioCtx && audioCtx.state === 'suspended') {
          audioCtx.resume();
        }
        var osc = audioCtx.createOscillator();
        var gain = audioCtx.createGain();
        osc.frequency.setValueAtTime(freq || 800, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + (duration || 0.05));
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + (duration || 0.05));
      } catch (e) {}
    }

    function toggleAudio() {
      audioOn = !audioOn;
      var btn = document.getElementById('sound-btn');
      if (btn) btn.textContent = audioOn ? '🔊 Sound: ON' : '🔇 Sound: OFF';
      if (audioOn) playBeep(1000, 0.08);
    }

    // Smooth Gliding Navigation
    function glideTo(sectionId) {
      playBeep(850, 0.05);
      var el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Copy to Clipboard
    function copyText(text, label) {
      playBeep(1100, 0.08);
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function() {
          showToast('✓ ' + label + ' copied!');
        });
      } else {
        showToast('✓ ' + text);
      }
    }

    function showToast(msg) {
      var toast = document.getElementById('toast');
      if (!toast) return;
      toast.textContent = msg;
      toast.classList.add('show');
      setTimeout(function() {
        toast.classList.remove('show');
      }, 2200);
    }

    // Shell CLI Commands
    var shellOutput = document.getElementById('shell-output');
    var shellInput = document.getElementById('shell-input');

    var COMMANDS = {
      help: function() {
        return '<div style="color: #fbbf24;">⚡ Available Commands:</div>' +
               '<div><span style="color: #38bdf8; font-weight: bold;">about</span> - Candidate summary & CGPA</div>' +
               '<div><span style="color: #38bdf8; font-weight: bold;">projects</span> - SmartAttend, YOLO, Beyond The Mic</div>' +
               '<div><span style="color: #38bdf8; font-weight: bold;">skills</span> - Core technologies & frameworks</div>' +
               '<div><span style="color: #38bdf8; font-weight: bold;">cgpa</span> - Academic standing (3.98 / 4.00)</div>' +
               '<div><span style="color: #38bdf8; font-weight: bold;">ojt</span> - 5-Month IT Internship details (Feb–Jun 2027)</div>' +
               '<div><span style="color: #38bdf8; font-weight: bold;">awards</span> - Competitive podium finishes</div>' +
               '<div><span style="color: #38bdf8; font-weight: bold;">contact</span> - Direct phone & email info</div>' +
               '<div><span style="color: #38bdf8; font-weight: bold;">clear</span> - Clear terminal window</div>';
      },
      about: function() {
        return '<div style="color: #34d399; font-weight: bold;">Muhammad Mirza Aqmal Raziq bin Mirza Affzard</div>' +
               '<div>Diploma Teknologi Komputeran • KVPJB (Pasir Gudang, Johor)</div>' +
               '<div>Academic CGPA: <strong style="color: #fbbf24;">3.98 / 4.00</strong></div>' +
               '<div>SKM Level 3 Certified: <strong style="color: #fbbf24;">S103882102</strong></div>';
      },
      projects: function() {
        return '<div style="color: #fbbf24; font-weight: bold;">Featured Projects:</div>' +
               '<div>• <strong>SmartAttend KVPJB:</strong> ESP32-CAM + FAISS 512D sub-second biometric attendance.</div>' +
               '<div>• <strong>YOLO Custom Classifier:</strong> 92.4% mAP@0.5 Colab Tesla T4 GPU device detection.</div>' +
               '<div>• <strong>Beyond The Mic Podcast:</strong> 5th Place National @ PICC Putrajaya (EBU R128 mastering).</div>';
      },
      skills: function() {
        return '<div style="color: #38bdf8; font-weight: bold;">Technical Skills:</div>' +
               '<div>• AI & Vision: FAISS 512D, YOLOv8, OpenCV, PyTorch, ESP32-CAM</div>' +
               '<div>• Languages: Python, C/C++, JavaScript, SQL, Bash</div>' +
               '<div>• IT Support: SKM Tahap 3, Cisco CCNA, Hardware Repair, LAN/VLAN</div>';
      },
      cgpa: function() {
        return '<div>Academic Cumulative CGPA: <strong style="color: #fbbf24; font-size: 1.2em;">3.98 / 4.00</strong> (Top-tier academic excellence).</div>';
      },
      ojt: function() {
        return '<div style="color: #34d399; font-weight: bold;">5-Month On-The-Job Training (OJT) Placement</div>' +
               '<div>Window: <strong>February – June 2027</strong> (5 Months)</div>' +
               '<div>Role: Software Engineering / IT Support / Embedded Systems Internship.</div>';
      },
      awards: function() {
        return '<div style="color: #fbbf24; font-weight: bold;">Podium Honors:</div>' +
               '<div>🥇 Johan (Champion) - Apps Ideation Challenge Johor (2023)</div>' +
               '<div>🥉 Tempat Ketiga - MMU Android Competition Kebangsaan (2024)</div>' +
               '<div>🏅 Kelima Kebangsaan - Beyond The Mic Podcast @ PICC Putrajaya (2026)</div>';
      },
      contact: function() {
        return '<div>Email: <a href="mailto:mirzaaqmal22@gmail.com" style="color: #38bdf8;">mirzaaqmal22@gmail.com</a></div>' +
               '<div>Phone: <strong style="color: #34d399;">013-5788399</strong></div>' +
               '<div>Location: Pasir Gudang, Johor, Malaysia</div>';
      },
      clear: function() {
        if (shellOutput) shellOutput.innerHTML = '';
        return '';
      }
    };

    function runCommand(cmd) {
      playBeep(900, 0.04);
      if (!shellOutput) return;
      var out = document.createElement('div');
      out.style.margin = '6px 0';
      out.innerHTML = '<span style="color: var(--amber); font-weight: bold;">mirza@kvpjb:~$</span> ' + cmd;
      shellOutput.appendChild(out);

      var fn = COMMANDS[cmd.toLowerCase()];
      var res = fn ? fn() : '<span style="color: #ef4444;">command not found: ' + cmd + '. Type "help" for commands.</span>';
      if (res) {
        var resDiv = document.createElement('div');
        resDiv.style.marginBottom = '8px';
        resDiv.innerHTML = res;
        shellOutput.appendChild(resDiv);
      }
      shellOutput.scrollTop = shellOutput.scrollHeight;
    }

    function submitCommand() {
      if (!shellInput) return;
      var val = shellInput.value.trim();
      if (!val) return;
      runCommand(val);
      shellInput.value = '';
    }

    // Dynamic 3D Neon Spine Glow on Scroll & Active Section Highlighting
    var glowLine = document.getElementById('timeline-glow');
    var timelineContainer = document.getElementById('timeline-container');
    var stages = document.querySelectorAll('.section-stage');
    var railDots = document.querySelectorAll('.rail-dot');

    function updateTimeline() {
      if (timelineContainer && glowLine) {
        var rect = timelineContainer.getBoundingClientRect();
        var winH = window.innerHeight;
        var top = rect.top;
        var height = rect.height;
        
        var progress = 0;
        if (top < winH) {
          progress = Math.min(1, Math.max(0, (winH * 0.7 - top) / height));
        }
        glowLine.style.height = (progress * 100) + '%';
      }

      // Check active section
      var currentId = 'workstation';
      if (window.scrollY < window.innerHeight * 0.5) {
        currentId = 'workstation';
      } else {
        stages.forEach(function(stage) {
          var r = stage.getBoundingClientRect();
          if (r.top <= window.innerHeight * 0.45 && r.bottom >= window.innerHeight * 0.25) {
            currentId = stage.id;
          }
        });
      }

      // Update stage classes
      stages.forEach(function(stage) {
        if (stage.id === currentId) {
          stage.classList.add('active-stage');
        } else {
          stage.classList.remove('active-stage');
        }
      });

      // Update floating rail dots
      railDots.forEach(function(dot) {
        if (dot.getAttribute('data-section') === currentId) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', updateTimeline, { passive: true });
    window.addEventListener('resize', updateTimeline, { passive: true });
    updateTimeline();

    // Ambient Cyber Canvas Particle Lines
    (function initCyberCanvas() {
      var canvas = document.getElementById('bg-cyber-canvas');
      if (!canvas) return;
      var ctx = canvas.getContext('2d');
      var width = canvas.width = window.innerWidth;
      var height = canvas.height = window.innerHeight;

      var particles = [];
      var particleCount = Math.min(45, Math.floor(width / 30));

      for (var i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.5 + 0.8
        });
      }

      function draw() {
        ctx.clearRect(0, 0, width, height);

        // Draw connections
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.04)';
        ctx.lineWidth = 1;
        for (var i = 0; i < particles.length; i++) {
          for (var j = i + 1; j < particles.length; j++) {
            var dx = particles[i].x - particles[j].x;
            var dy = particles[i].y - particles[j].y;
            var dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 140) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }

        // Draw particles
        for (var i = 0; i < particles.length; i++) {
          var p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          ctx.fillStyle = 'rgba(245, 158, 11, 0.25)';
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        requestAnimationFrame(draw);
      }
      requestAnimationFrame(draw);

      window.addEventListener('resize', function() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      });
    })();

    // Safety watchdog for loading screen
    window.addEventListener('load', function() {
      if (window.__WEBGL_LOADED__) {
        var hb = document.getElementById('hero-backup');
        if (hb) hb.style.display = 'none';
      }
      setTimeout(function() {
        var loading = document.getElementById('loading');
        if (loading && loading.style.display !== 'none' && !window.__WEBGL_LOADED__) {
          loading.style.opacity = '0';
          setTimeout(function() { loading.style.display = 'none'; }, 400);
        }
      }, 3000);
    });
  </script>
</body>
</html>
`;

fs.writeFileSync('index.html', html);
console.log('Successfully written index.html! Length:', html.length);

const fs = require('fs');

const ppWoff = fs.readFileSync('fonts/public-pixel.woff').toString('base64');
const chillWoff = fs.readFileSync('fonts/chill.woff').toString('base64');

const html = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
  <title>Muhammad Mirza Aqmal Raziq | Software &amp; IT Systems Portfolio</title>
  <meta
    name="description"
    content="Muhammad Mirza Aqmal Raziq bin Mirza Affzard — Final year Diploma Teknologi Komputeran student at KVPJB (CGPA 3.98 • SKM Level 3 S103882102). Seeking 5-Month IT Internship (Feb–June 2027)."
  />
  <link rel="icon" type="image/png" href="./icon/32x32.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="./icon/180x180.png" />
  <meta name="theme-color" content="#080b11" />

  <!-- Open Graph -->
  <meta property="og:title" content="Muhammad Mirza Aqmal Raziq – Portfolio" />
  <meta property="og:description" content="Final year Diploma Teknologi Komputeran at KVPJB (CGPA 3.98 • SKM Level 3 S103882102). Seeking 5-Month IT Internship (Feb–June 2027)." />
  <meta property="og:image" content="./images/mirza-title.png" />
  <meta property="og:type" content="website" />

  <!-- Webfonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- 3D WebGL Workstation Bundle (Clean Hero Workstation from 592fce5) -->
  <script type="module" crossorigin src="./assets/index-UlS8cB25.js"></script>

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
    /* DESIGN SYSTEM: CYBER OBSIDIAN & PHOSPHOR RETRO ORANGE        */
    /* (Unified with the 3D retro computer CRT amber/orange glow)   */
    /* ============================================================ */
    :root {
      --bg-base: #06090e;
      --bg-surface: #0c121d;
      --bg-card: rgba(13, 19, 32, 0.88);
      --bg-card-hover: rgba(22, 30, 48, 0.96);
      --border-subtle: rgba(249, 115, 22, 0.16);
      --border-accent: rgba(249, 115, 22, 0.45);
      --border-accent-strong: rgba(255, 122, 0, 0.85);
      
      --orange: #f97316;
      --orange-bright: #ff7a00;
      --orange-light: #fb923c;
      --orange-dark: #ea580c;
      --orange-glow: rgba(249, 115, 22, 0.35);
      
      --amber: #f97316;
      --amber-light: #fb923c;
      --amber-glow: rgba(249, 115, 22, 0.3);
      --emerald: #fb923c;
      --emerald-glow: rgba(249, 115, 22, 0.25);
      --cyan: #ff7a00;
      --cyan-glow: rgba(255, 122, 0, 0.25);
      
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
    }

    body {
      background-color: var(--bg-base);
      background-image: 
        radial-gradient(circle at 50% 0%, rgba(249, 115, 22, 0.18) 0%, transparent 60%),
        radial-gradient(circle at 85% 35%, rgba(255, 122, 0, 0.08) 0%, transparent 45%),
        radial-gradient(circle at 15% 70%, rgba(234, 88, 12, 0.08) 0%, transparent 45%),
        linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
      background-size: 100% 100%, 100% 100%, 100% 100%, 36px 36px, 36px 36px;
      color: #f8fafc;
      font-family: var(--font-sans);
      font-size: 16px;
      line-height: 1.65;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }

    /* Selection */
    ::selection {
      background: #f97316;
      color: #000;
    }

    /* ============================================================ */
    /* 3D WEBGL RETRO WORKSTATION CANVAS                            */
    /* ============================================================ */
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
      background: #090d16;
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
      background: #0f172a;
      border: 1px solid var(--border-accent);
      box-shadow: 0 0 35px rgba(245, 158, 11, 0.18);
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
      background: #05080f;
      border: 1px solid var(--border-accent);
      border-radius: 4px;
      overflow: hidden;
      margin: 12px 0;
    }
    #loading-bar-progress {
      position: absolute;
      top: 0; bottom: 0; left: 0; right: 0;
      background: linear-gradient(90deg, #d97706, #fbbf24);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.2s;
    }

    /* ============================================================ */
    /* NAVIGATION & TOP HUD BAR (Appears Only on Scroll Below Hero) */
    /* ============================================================ */
    nav.hud-navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 50;
      padding: 12px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(7, 10, 15, 0.92);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(148, 163, 184, 0.12);
      transform: translateY(-100%);
      opacity: 0;
      pointer-events: none;
      transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
    }
    nav.hud-navbar.nav-visible {
      transform: translateY(0);
      opacity: 1;
      pointer-events: all;
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
      border: 1.5px solid var(--border-accent);
      background: #1e293b;
      overflow: hidden;
      box-shadow: 0 0 12px rgba(245, 158, 11, 0.25);
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
      font-size: 11px;
      color: #fb923c;
      display: flex;
      align-items: center;
      gap: 6px;
      font-family: var(--font-mono);
      font-weight: 600;
    }
    .status-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #ff7a00;
      box-shadow: 0 0 8px #ff7a00;
      animation: pulse-dot 2s infinite;
    }
    @keyframes pulse-dot {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.85); }
    }

    .nav-sections {
      display: flex;
      gap: 6px;
      align-items: center;
    }
    @media (max-width: 900px) {
      .nav-sections { display: none; }
    }
    .nav-sec-link {
      font-family: var(--font-mono);
      font-size: 12px;
      color: var(--slate-400);
      text-decoration: none;
      padding: 6px 10px;
      border-radius: 6px;
      transition: all 0.2s;
    }
    .nav-sec-link:hover {
      color: #ff7a00;
      background: rgba(249, 115, 22, 0.1);
    }

    .nav-actions {
      display: flex;
      gap: 8px;
      align-items: center;
    }
    .nav-btn {
      font-family: var(--font-mono);
      font-size: 12px;
      font-weight: 600;
      color: var(--slate-300);
      background: rgba(30, 41, 59, 0.65);
      border: 1px solid rgba(148, 163, 184, 0.18);
      padding: 7px 12px;
      border-radius: 6px;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .nav-btn:hover {
      background: rgba(249, 115, 22, 0.15);
      border-color: #ff7a00;
      color: #fff;
      transform: translateY(-1px);
    }
    .nav-btn.primary {
      background: linear-gradient(135deg, #ff7a00, #ea580c);
      color: #000;
      font-weight: 700;
      border: 1px solid #ff9d42;
      box-shadow: 0 0 16px rgba(249, 115, 22, 0.45);
    }
    .nav-btn.primary:hover {
      background: linear-gradient(135deg, #ff922d, #ff6d00);
      box-shadow: 0 0 25px rgba(249, 115, 22, 0.65);
      color: #000;
    }



    /* Offline / Non-WebGL Fallback Hero */
    #hero-backup {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
      position: absolute;
      top: 0; left: 0; right: 0;
      min-height: 100vh;
      width: clamp(0px, 94vw, 840px);
      margin: auto;
      z-index: 0;
      padding: 90px 16px 40px;
      text-align: center;
    }
    .hero-offline-card {
      background: var(--bg-card);
      border: 1px solid var(--border-accent);
      border-radius: 14px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.7);
      padding: 32px;
      max-width: 680px;
    }

    /* ============================================================ */
    /* EDITORIAL CONTENT CONTAINER & SECTIONS                       */
    /* ============================================================ */
    main {
      position: relative;
      z-index: 5;
      margin-top: 185vh;
      padding: 40px 16px 120px;
      max-width: 1060px;
      margin-left: auto;
      margin-right: auto;
    }

    section {
      padding-bottom: 80px;
      margin-bottom: 80px;
      position: relative;
      scroll-margin-top: 80px;
    }
    section::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 5%;
      right: 5%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(148, 163, 184, 0.18), transparent);
    }
    section:last-of-type::after {
      display: none;
    }

    .section-tagline {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-family: var(--font-mono);
      font-size: 11.5px;
      font-weight: 700;
      color: var(--amber);
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 10px;
      background: rgba(245, 158, 11, 0.1);
      border: 1px solid rgba(245, 158, 11, 0.3);
      padding: 4px 14px;
      border-radius: 20px;
    }
    .badge-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--amber);
      box-shadow: 0 0 6px var(--amber);
    }
    .section-title {
      font-size: 2.2rem;
      font-weight: 800;
      color: #fff;
      letter-spacing: -0.5px;
      margin-bottom: 8px;
      background: linear-gradient(180deg, #ffffff 0%, #cbd5e1 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .section-desc {
      color: var(--slate-400);
      font-size: 16px;
      max-width: 680px;
      margin-bottom: 30px;
      line-height: 1.6;
    }

    /* ============================================================ */
    /* CARDS & GLASSMORPHISM SURFACES                               */
    /* ============================================================ */
    .card {
      background: var(--bg-card);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid var(--border-subtle);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      box-shadow: 0 12px 35px -8px rgba(0, 0, 0, 0.7);
      padding: 32px;
      position: relative;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .card:hover {
      border-color: var(--border-accent);
      box-shadow: 0 18px 45px -10px rgba(0, 0, 0, 0.85), 0 0 30px rgba(245, 158, 11, 0.1);
      transform: translateY(-2px);
    }
    .card.highlight {
      border-color: var(--border-accent);
      box-shadow: 0 12px 35px -8px rgba(0, 0, 0, 0.7), 0 0 25px rgba(245, 158, 11, 0.08);
    }

    /* ============================================================ */
    /* THE 4 KEY PERFORMANCE INDICATORS (KPI STATS GRID)            */
    /* ============================================================ */
    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin: 26px 0;
    }
    @media (max-width: 840px) {
      .kpi-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 480px) {
      .kpi-grid { grid-template-columns: 1fr; }
    }

    .kpi-tile {
      background: linear-gradient(180deg, rgba(22, 30, 50, 0.8) 0%, rgba(13, 19, 32, 0.95) 100%);
      border: 1px solid var(--border-subtle);
      border-top: 2px solid #ff7a00;
      border-radius: 12px;
      padding: 20px 16px;
      text-align: center;
      transition: all 0.25s ease;
      position: relative;
      overflow: hidden;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
    }
    .kpi-tile.emerald-top { border-top-color: #f97316; }
    .kpi-tile.cyan-top { border-top-color: #ea580c; }
    .kpi-tile.gold-top { border-top-color: #ff7a00; }

    .kpi-tile:hover {
      border-color: #ff7a00;
      transform: translateY(-3px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6), 0 0 24px rgba(249, 115, 22, 0.25);
    }
    .kpi-val {
      font-family: var(--font-mono);
      font-size: 2.1rem;
      font-weight: 800;
      color: #fff;
      line-height: 1.1;
      margin-bottom: 6px;
    }
    .kpi-val.gold {
      background: linear-gradient(135deg, #fed7aa 0%, #ff7a00 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .kpi-val.emerald {
      background: linear-gradient(135deg, #ffba7a 0%, #f97316 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .kpi-val.cyan {
      background: linear-gradient(135deg, #ff9d42 0%, #ea580c 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .kpi-label {
      font-size: 11.5px;
      font-weight: 700;
      color: var(--slate-400);
      text-transform: uppercase;
      letter-spacing: 0.6px;
      margin-bottom: 8px;
    }
    .kpi-chip {
      display: inline-block;
      font-family: var(--font-mono);
      font-size: 10px;
      font-weight: 600;
      padding: 3px 8px;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--slate-300);
    }

    /* ============================================================ */
    /* CANDIDATE DOSSIER PROFILE (SECTION 1)                        */
    /* ============================================================ */
    .profile-hero {
      display: flex;
      gap: 32px;
      align-items: center;
      margin-bottom: 24px;
    }
    @media (max-width: 720px) {
      .profile-hero {
        flex-direction: column;
        text-align: center;
      }
    }
    .avatar-frame {
      width: 145px;
      height: 145px;
      border-radius: 14px;
      border: 2px solid var(--border-accent);
      box-shadow: 0 0 30px rgba(245, 158, 11, 0.25);
      background: #000;
      overflow: hidden;
      flex-shrink: 0;
      position: relative;
    }
    .avatar-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      image-rendering: pixelated;
    }
    .avatar-frame::after {
      content: "";
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 1px,
        transparent 1px,
        transparent 2px
      );
      pointer-events: none;
    }
    .profile-info h1 {
      font-size: 1.9rem;
      font-weight: 800;
      color: #fff;
      margin-bottom: 4px;
      letter-spacing: -0.5px;
    }
    .profile-sub {
      font-family: var(--font-mono);
      font-size: 14px;
      color: var(--amber);
      font-weight: 600;
      margin-bottom: 12px;
    }
    .profile-bio {
      color: var(--slate-300);
      font-size: 15.5px;
      line-height: 1.65;
    }
    .profile-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 16px;
    }
    @media (max-width: 720px) {
      .profile-tags { justify-content: center; }
    }
    .tag-badge {
      font-family: var(--font-mono);
      font-size: 11px;
      padding: 4px 11px;
      border-radius: 6px;
      background: rgba(30, 41, 59, 0.8);
      border: 1px solid rgba(148, 163, 184, 0.15);
      color: var(--slate-300);
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }
    .tag-badge.active {
      background: rgba(16, 185, 129, 0.12);
      border-color: rgba(16, 185, 129, 0.4);
      color: #34d399;
      font-weight: 600;
    }

    /* ============================================================ */
    /* INTERACTIVE CRT TERMINAL READOUT                             */
    /* ============================================================ */
    .crt-console {
      background: #04070c;
      border: 1px solid rgba(249, 115, 22, 0.45);
      box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.85), 0 0 30px rgba(249, 115, 22, 0.16);
      border-radius: 10px;
      padding: 22px;
      font-family: var(--font-mono);
      font-size: 13px;
      line-height: 1.8;
      margin-top: 24px;
      position: relative;
      overflow: hidden;
    }
    .crt-console::before {
      content: "";
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.25),
        rgba(0, 0, 0, 0.25) 1px,
        transparent 1px,
        transparent 2px
      );
      pointer-events: none;
    }
    .cmd-prompt { color: #ff7a00; font-weight: bold; }
    .cmd-val { color: var(--slate-300); }
    .cmd-green { color: #ffba7a; font-weight: 600; }
    .cmd-cyan { color: #fed7aa; font-weight: 600; }
    .cmd-cursor {
      display: inline-block;
      width: 8px;
      height: 15px;
      background: #ff7a00;
      margin-left: 4px;
      vertical-align: middle;
      animation: blink 1s infinite;
    }
    @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

    /* ============================================================ */
    /* PROJECT SHOWCASE MISSION CARDS                               */
    /* ============================================================ */
    .project-grid {
      display: flex;
      flex-direction: column;
      gap: 36px;
    }
    .project-card {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      padding: 32px;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 0 12px 35px rgba(0, 0, 0, 0.6);
      position: relative;
    }
    .project-card:hover {
      border-color: rgba(249, 115, 22, 0.5);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), 0 0 35px rgba(249, 115, 22, 0.16);
      transform: translateY(-2px);
    }
    .project-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      flex-wrap: wrap;
      gap: 8px;
    }
    .project-tag {
      font-family: var(--font-mono);
      font-size: 11.5px;
      font-weight: 700;
      color: #ff7a00;
      text-transform: uppercase;
      letter-spacing: 1px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .project-year {
      font-family: var(--font-mono);
      font-size: 11.5px;
      color: var(--slate-400);
      background: rgba(30, 41, 59, 0.6);
      padding: 2px 8px;
      border-radius: 4px;
      border: 1px solid rgba(148, 163, 184, 0.12);
    }
    .project-title {
      font-size: 1.6rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 8px;
    }
    .project-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
      margin: 14px 0 18px;
      list-style: none;
    }
    .project-pills li {
      font-family: var(--font-mono);
      font-size: 11.5px;
      padding: 4px 11px;
      border-radius: 5px;
      background: rgba(30, 41, 59, 0.65);
      border: 1px solid rgba(148, 163, 184, 0.16);
      color: var(--slate-300);
    }
    .hardware-frame {
      border-radius: 12px;
      border: 1px solid rgba(148, 163, 184, 0.22);
      overflow: hidden;
      background: #03060a;
      margin: 20px 0;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
      position: relative;
    }
    .hardware-frame img {
      width: 100%;
      height: auto;
      display: block;
      transition: transform 0.4s ease;
    }
    .hardware-frame:hover img {
      transform: scale(1.02);
    }
    .pipeline-bar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      background: rgba(6, 9, 15, 0.75);
      border: 1px solid rgba(249, 115, 22, 0.2);
      padding: 12px 16px;
      border-radius: 10px;
      margin: 16px 0;
      font-family: var(--font-mono);
      font-size: 12px;
      color: var(--slate-300);
    }
    .pipe-node {
      background: rgba(249, 115, 22, 0.15);
      border: 1px solid rgba(249, 115, 22, 0.4);
      color: #fed7aa;
      padding: 3px 10px;
      border-radius: 6px;
      font-weight: 600;
    }
    .pipe-node.cyan {
      background: rgba(255, 122, 0, 0.15);
      border-color: rgba(255, 122, 0, 0.45);
      color: #ffba7a;
    }
    .pipe-node.emerald {
      background: rgba(234, 88, 12, 0.15);
      border-color: rgba(234, 88, 12, 0.45);
      color: #fdba74;
    }
    .pipe-arrow {
      color: var(--slate-500);
      font-weight: bold;
      user-select: none;
    }

    /* Collapsible Specs */
    .accordion-btn {
      background: rgba(30, 41, 59, 0.5);
      border: 1px solid rgba(148, 163, 184, 0.2);
      color: var(--slate-300);
      font-family: var(--font-mono);
      font-size: 12px;
      padding: 9px 18px;
      border-radius: 6px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s;
    }
    .accordion-btn:hover {
      background: rgba(249, 115, 22, 0.14);
      border-color: #ff7a00;
      color: #fff;
    }
    .accordion-body {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s ease-out, opacity 0.3s ease-out;
      opacity: 0;
    }
    .accordion-body.open {
      max-height: 600px;
      opacity: 1;
      margin-top: 14px;
      padding: 18px;
      background: rgba(6, 9, 15, 0.75);
      border: 1px solid rgba(249, 115, 22, 0.18);
      border-radius: 8px;
    }
    .spec-list {
      list-style: none;
      font-size: 14px;
      line-height: 1.75;
      color: var(--slate-300);
    }
    .spec-list li {
      margin-bottom: 8px;
    }
    .spec-list strong {
      color: #ff7a00;
      font-family: var(--font-mono);
      font-size: 13px;
    }

    /* ============================================================ */
    /* TECHNICAL CAPABILITIES MATRIX (SECTION 3)                    */
    /* ============================================================ */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    @media (max-width: 860px) {
      .skills-grid { grid-template-columns: 1fr; }
    }
    .skill-card {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-top: 2px solid #ff7a00;
      border-radius: 14px;
      padding: 26px;
      transition: all 0.25s;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
    }
    .skill-card.cyan-top { border-top-color: #f97316; }
    .skill-card.emerald-top { border-top-color: #ea580c; }

    .skill-card:hover {
      border-color: #ff7a00;
      transform: translateY(-3px);
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.7), 0 0 25px rgba(249, 115, 22, 0.2);
    }
    .skill-card-head {
      font-family: var(--font-mono);
      font-size: 12.5px;
      font-weight: 700;
      color: #ff8c00;
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 1px solid rgba(249, 115, 22, 0.15);
    }
    .skill-card.cyan-top .skill-card-head { color: #f97316; }
    .skill-card.emerald-top .skill-card-head { color: #fb923c; }

    .skill-items {
      list-style: none;
      font-size: 14.5px;
      color: var(--slate-300);
    }
    .skill-items li {
      padding: 8px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px dotted rgba(249, 115, 22, 0.12);
    }
    .skill-items li:last-child { border-bottom: none; }
    .skill-name {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .skill-name::before {
      content: "▹";
      color: #ff7a00;
      font-weight: bold;
    }
    .skill-card.cyan-top .skill-name::before { color: #f97316; }
    .skill-card.emerald-top .skill-name::before { color: #fb923c; }

    .skill-level-tag {
      font-family: var(--font-mono);
      font-size: 10px;
      font-weight: 600;
      padding: 2px 7px;
      border-radius: 4px;
      background: rgba(249, 115, 22, 0.08);
      color: #fed7aa;
      border: 1px solid rgba(249, 115, 22, 0.22);
    }

    /* ============================================================ */
    /* PODIUM HONORS & TROPHY SHOWCASE (SECTION 4)                  */
    /* ============================================================ */
    .trophy-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-bottom: 28px;
    }
    @media (max-width: 860px) {
      .trophy-grid { grid-template-columns: 1fr; }
    }
    .trophy-card {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: 14px;
      padding: 22px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.3s ease;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }
    .trophy-card:hover {
      border-color: var(--border-accent);
      transform: translateY(-3px);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7), 0 0 25px rgba(245, 158, 11, 0.12);
    }
    .trophy-badge {
      display: inline-block;
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 700;
      padding: 5px 12px;
      border-radius: 20px;
      margin-bottom: 14px;
    }
    .trophy-badge.gold {
      background: rgba(249, 115, 22, 0.18);
      border: 1px solid rgba(249, 115, 22, 0.5);
      color: #fed7aa;
      box-shadow: 0 0 15px rgba(249, 115, 22, 0.25);
    }
    .trophy-badge.bronze {
      background: rgba(234, 88, 12, 0.18);
      border: 1px solid rgba(234, 88, 12, 0.45);
      color: #fb923c;
    }
    .trophy-badge.national {
      background: rgba(255, 122, 0, 0.18);
      border: 1px solid rgba(255, 122, 0, 0.45);
      color: #ffba7a;
      box-shadow: 0 0 15px rgba(255, 122, 0, 0.25);
    }
    .trophy-img-wrap {
      width: 100%;
      aspect-ratio: 4/3;
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 16px;
      border: 1px solid rgba(148, 163, 184, 0.18);
      background: #03060a;
      position: relative;
    }
    .trophy-img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
    .trophy-img-wrap:hover img {
      transform: scale(1.06);
    }
    .trophy-name {
      font-size: 15.5px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 6px;
    }
    .trophy-org {
      font-size: 13px;
      color: var(--slate-400);
      line-height: 1.5;
    }

    /* ============================================================ */
    /* INTERACTIVE UNIX SHELL CONSOLE (SECTION 5)                   */
    /* ============================================================ */
    .shell-container {
      background: #05080e;
      border: 1px solid var(--border-subtle);
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.75);
    }
    .shell-header {
      background: #0e1524;
      border-bottom: 1px solid rgba(148, 163, 184, 0.12);
      padding: 12px 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .shell-dots {
      display: flex;
      gap: 7px;
      align-items: center;
    }
    .dot {
      width: 11px;
      height: 11px;
      border-radius: 50%;
    }
    .dot.red { background: #ef4444; }
    .dot.yellow { background: #ff7a00; }
    .dot.green { background: #fb923c; }
    .shell-title {
      font-family: var(--font-mono);
      font-size: 12px;
      color: var(--slate-400);
    }
    .shell-body {
      padding: 22px;
      font-family: var(--font-mono);
      font-size: 13px;
      line-height: 1.8;
      min-height: 180px;
      max-height: 340px;
      overflow-y: auto;
    }
    .shell-input-row {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid rgba(249, 115, 22, 0.15);
    }
    .shell-prompt {
      color: #ff7a00;
      font-weight: bold;
    }
    .shell-input {
      flex: 1;
      background: transparent;
      border: none;
      outline: none;
      color: #fff;
      font-family: var(--font-mono);
      font-size: 13px;
    }
    .shell-quick-cmds {
      padding: 12px 18px;
      background: #080c14;
      border-top: 1px solid rgba(249, 115, 22, 0.12);
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      align-items: center;
    }
    .cmd-pill {
      background: rgba(30, 41, 59, 0.85);
      border: 1px solid rgba(249, 115, 22, 0.2);
      color: var(--slate-300);
      font-family: var(--font-mono);
      font-size: 11.5px;
      padding: 4px 11px;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.15s;
    }
    .cmd-pill:hover {
      background: rgba(249, 115, 22, 0.25);
      border-color: #ff7a00;
      color: #fff;
      transform: translateY(-1px);
    }

    /* ============================================================ */
    /* CONTACT & DISPATCH TILES (SECTION 6)                         */
    /* ============================================================ */
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      gap: 16px;
      margin: 24px 0;
    }
    .contact-card {
      background: rgba(14, 21, 36, 0.85);
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      padding: 22px;
      text-align: center;
      cursor: pointer;
      transition: all 0.25s ease;
      text-decoration: none;
      display: block;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
    }
    .contact-card:hover {
      border-color: #ff7a00;
      transform: translateY(-3px);
      background: rgba(22, 30, 48, 0.96);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6), 0 0 25px rgba(249, 115, 22, 0.25);
    }
    .contact-icon {
      font-size: 24px;
      margin-bottom: 8px;
    }
    .contact-label {
      font-family: var(--font-mono);
      font-size: 11px;
      color: var(--slate-400);
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .contact-val {
      font-family: var(--font-mono);
      font-size: 14px;
      font-weight: 700;
      color: #fff;
      word-break: break-all;
    }
    .contact-hint {
      font-size: 11px;
      color: #fb923c;
      margin-top: 6px;
      font-family: var(--font-mono);
    }

    /* Toast Notification */
    #toast {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #0c121d;
      color: #ff8c00;
      border: 1px solid #ff7a00;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8), 0 0 25px rgba(249, 115, 22, 0.45);
      padding: 12px 22px;
      border-radius: 8px;
      font-family: var(--font-mono);
      font-size: 13px;
      font-weight: 600;
      z-index: 999;
      transform: translateY(120px);
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    #toast.show {
      transform: translateY(0);
    }

    /* Footer */
    footer {
      border-top: 1px solid rgba(148, 163, 184, 0.12);
      padding: 44px 16px;
      text-align: center;
      color: var(--slate-500);
      font-size: 13.5px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    footer a { color: var(--slate-400); text-decoration: none; }
    footer a:hover { color: var(--amber); }
  </style>
</head>

<body>
  <div id="home"></div>

  <!-- 3D Retro Commodore PET 8296 Workstation Canvas -->
  <canvas class="webgl"></canvas>

  <!-- Offline / Non-WebGL Fallback Hero -->
  <div id="hero-backup">
    <div class="hero-offline-card">
      <div class="avatar-frame" style="margin: 0 auto 16px;">
        <img src="./images/mirza-title.png" alt="Muhammad Mirza Aqmal Raziq" />
      </div>
      <div class="brand-status" style="justify-content: center; margin-bottom: 8px;">
        <span class="status-dot"></span> AVAILABLE FOR 5-MONTH OJT (FEB–JUN 2027)
      </div>
      <h1 style="font-size: 2.1rem; font-weight: 800; color: #fff; margin-bottom: 6px;">Muhammad Mirza Aqmal Raziq</h1>
      <div style="font-family: var(--font-mono); font-size: 14px; color: var(--amber); margin-bottom: 14px;">
        Diploma Teknologi Komputeran • Kolej Vokasional Perdagangan JB (KVPJB)
      </div>
      <p style="color: var(--slate-300); font-size: 15.5px; max-width: 560px; margin: 0 auto 20px;">
        Passionate Software &amp; IT Systems Engineer specializing in Edge IoT vision (ESP32-CAM), FAISS vector search, custom YOLOv8 detection, and enterprise hardware diagnostics.
      </p>
      <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
        <a class="nav-btn primary" href="#about">Explore Candidate Dossier ↓</a>
        <a class="nav-btn" href="./sijil_skm3_jpk_official.pdf" target="_blank">📄 Official SKM 3 PDF</a>
      </div>
    </div>
  </div>

  <!-- Top HUD Command Bar -->
  <nav class="hud-navbar">
    <a href="#home" class="brand-hud">
      <div class="brand-avatar">
        <img src="./images/mirza-title.png" alt="Mirza" />
      </div>
      <div class="brand-info">
        <span class="brand-title">MIRZA // OS-1.0</span>
        <span class="brand-status"><span class="status-dot"></span> OJT READY (FEB 2027)</span>
      </div>
    </a>

    <!-- Quick In-Page Section Links -->
    <div class="nav-sections">
      <a class="nav-sec-link" href="#about">Dossier</a>
      <a class="nav-sec-link" href="#projects">Projects</a>
      <a class="nav-sec-link" href="#skills">Skills</a>
      <a class="nav-sec-link" href="#awards">Honors</a>
      <a class="nav-sec-link" href="#terminal">Terminal</a>
      <a class="nav-sec-link" href="#contact">Contact</a>
    </div>

    <!-- Quick Actions -->
    <div class="nav-actions">
      <button class="nav-btn" onclick="toggleAudio()" id="sound-btn" title="Toggle Tactile Audio">
        🔊 Sound: ON
      </button>
      <a class="nav-btn" href="https://www.linkedin.com/in/aqmal-raziq-3975b0346/" target="_blank">
        LinkedIn
      </a>
      <a class="nav-btn" href="https://github.com/mircrtierr" target="_blank">
        GitHub
      </a>
      <a class="nav-btn primary" href="./sijil_skm3_jpk_official.pdf" target="_blank" title="Download Verified SKM 3 Digital PDF">
        📄 SKM 3 PDF
      </a>
    </div>
  </nav>

  <!-- Editorial Main Content Container -->
  <main>
    <!-- ============================================== -->
    <!-- SECTION 1: CANDIDATE DOSSIER // ABOUT MIRZA     -->
    <!-- ============================================== -->
    <section id="about">
      <div class="section-tagline"><span class="badge-dot"></span> 01 // PROFILE &amp; ACADEMICS</div>
      <h2 class="section-title">Candidate Dossier</h2>
      <p class="section-desc">
        Final-year Computer Technology student at KVPJB with verified government accreditation, high-academic standing, and embedded vision specialization.
      </p>

      <div class="card highlight">
        <div class="profile-hero">
          <div class="avatar-frame">
            <img src="./images/mirza-title.png" alt="Muhammad Mirza Aqmal Raziq" />
          </div>
          <div class="profile-info">
            <h1>Muhammad Mirza Aqmal Raziq</h1>
            <div class="profile-sub">Diploma Teknologi Komputeran • KVPJB (Pasir Gudang, Johor)</div>
            <p class="profile-bio">
              Software &amp; IT Systems specialist bridging embedded edge microcontrollers with neural similarity search (ESP32-CAM + FAISS 512D), custom YOLOv8 computer vision classification, Cisco CCNA routing, and hardware diagnostics.
            </p>
            <div class="profile-tags">
              <span class="tag-badge active">● Seeking 5-Mo OJT (Feb–Jun 2027)</span>
              <span class="tag-badge">📍 Pasir Gudang, Johor</span>
              <span class="tag-badge">🎓 CGPA 3.98 / 4.00</span>
              <span class="tag-badge">🛡️ SKM Level 3: S103882102</span>
            </div>
          </div>
        </div>

        <!-- THE 4 GRAND KPI STATS -->
        <div class="kpi-grid">
          <div class="kpi-tile gold-top">
            <div class="kpi-val gold">3.98</div>
            <div class="kpi-label">Cumulative CGPA</div>
            <span class="kpi-chip">ACADEMIC EXCELLENCE</span>
          </div>

          <div class="kpi-tile emerald-top">
            <div class="kpi-val emerald">SKM 3</div>
            <div class="kpi-label">JPK Accreditation</div>
            <span class="kpi-chip">ID: S103882102</span>
          </div>

          <div class="kpi-tile cyan-top">
            <div class="kpi-val cyan">5 MOS</div>
            <div class="kpi-label">OJT Internship</div>
            <span class="kpi-chip">FEB – JUNE 2027</span>
          </div>

          <div class="kpi-tile gold-top">
            <div class="kpi-val gold">TOP 5</div>
            <div class="kpi-label">National Podium</div>
            <span class="kpi-chip">3x COMPETITIONS</span>
          </div>
        </div>

        <!-- Glowing CRT Terminal Diagnostic Readout -->
        <div class="crt-console">
          <div><span class="cmd-prompt">&gt; mirza.status --verbose</span></div>
          <div><span class="cmd-cyan">[INSTITUTION]</span> Kolej Vokasional Perdagangan Johor Bahru (KVPJB)</div>
          <div><span class="cmd-cyan">[SPECIALIZATION]</span> Edge IoT vision nodes, FAISS 512D vector embeddings, YOLOv8 object detection, Cisco networking.</div>
          <div><span class="cmd-cyan">[AVAILABILITY]</span> <span class="cmd-green">Open for 5-Month On-The-Job Training (OJT) IT / Software Internship (Feb – June 2027)</span>.</div>
          <div><span class="cmd-cyan">[VERIFICATION]</span> Sijil Kemahiran Malaysia (SKM) Tahap 3 in IT System Support issued by JPK.</div>
          <div><span class="cmd-prompt">&gt; ready_for_interview</span><span class="cmd-cursor"></span></div>
        </div>

        <div style="display: flex; gap: 12px; margin-top: 26px; flex-wrap: wrap;">
          <a class="nav-btn primary" href="./sijil_skm3_jpk_official.pdf" target="_blank">
            📄 View Official SKM 3 Certificate PDF
          </a>
          <a class="nav-btn" href="./Resume_Muhammad_Mirza_Aqmal_Raziq.pdf" target="_blank">
            📥 Download Resume PDF
          </a>
          <a class="nav-btn" href="#contact">
            ✉ Contact / Hire Mirza
          </a>
        </div>
      </div>
    </section>

    <!-- ============================================== -->
    <!-- SECTION 2: ENGINEERING PROJECTS                -->
    <!-- ============================================== -->
    <section id="projects">
      <div class="section-tagline"><span class="badge-dot"></span> 02 // ENGINEERING MISSION LOGS</div>
      <h2 class="section-title">Featured Projects</h2>
      <p class="section-desc">
        End-to-end hardware integrations, edge vision pipelines, and production neural models developed and field-tested.
      </p>

      <div class="project-grid">
        <!-- Project 1: SmartAttend KVPJB -->
        <div class="project-card">
          <div class="project-meta">
            <span class="project-tag">⚡ Edge AI &amp; Biometric Security</span>
            <span class="project-year">2024 – 2025</span>
          </div>
          <h3 class="project-title">SmartAttend KVPJB</h3>
          <p style="color: var(--slate-300); font-size: 15.5px; margin-bottom: 14px;">
            Automated facial recognition attendance platform that replaces manual paper sheets with low-cost edge vision hardware coupled to a high-speed Python embedding server.
          </p>

          <div class="pipeline-bar">
            <span style="color: var(--amber); font-weight: bold;">Pipeline:</span>
            <span class="pipe-node">ESP32-CAM</span>
            <span class="pipe-arrow">➔</span>
            <span class="pipe-node cyan">LAN UDP Stream</span>
            <span class="pipe-arrow">➔</span>
            <span class="pipe-node">InsightFace (ArcFace 512D)</span>
            <span class="pipe-arrow">➔</span>
            <span class="pipe-node emerald">FAISS Index (&lt;250ms)</span>
            <span class="pipe-arrow">➔</span>
            <span class="pipe-node">SQLite DB</span>
          </div>

          <ul class="project-pills">
            <li>ESP32-CAM Node</li>
            <li>Python</li>
            <li>FAISS 512D Index</li>
            <li>ArcFace ResNet-50</li>
            <li>SQLite Relational DB</li>
            <li>Sub-second (&lt;250ms) Latency</li>
          </ul>

          <div class="hardware-frame">
            <img src="./images/smartattend_dashboard.jpg" alt="SmartAttend Biometric System Interface" loading="lazy" />
          </div>

          <button class="accordion-btn" onclick="toggleSpec(this)">
            [+] View System Architecture Breakdown
          </button>
          <div class="accordion-body">
            <ul class="spec-list">
              <li><strong>• Edge Vision Node:</strong> ESP32-CAM (OV2640 sensor) transmitting high-throughput JPEG frames over local LAN via socket streaming.</li>
              <li><strong>• Embedding Pipeline:</strong> Facial landmark alignment + InsightFace (ArcFace ResNet-50) yielding dense 512-dimensional feature vectors.</li>
              <li><strong>• Vector Similarity:</strong> <code>IndexFlatL2</code> FAISS vector index querying 500+ student embeddings in &lt;250ms with a Euclidean distance threshold of 0.42.</li>
              <li><strong>• Persistent Storage:</strong> SQLite backend with transactional timestamps, duplicate suppression, and automated attendance reporting.</li>
            </ul>
          </div>
        </div>

        <!-- Project 2: YOLO Custom Object Detection -->
        <div class="project-card">
          <div class="project-meta">
            <span class="project-tag">🎯 Computer Vision &amp; Deep Learning</span>
            <span class="project-year">2024</span>
          </div>
          <h3 class="project-title">YOLO Custom Object Classifier</h3>
          <p style="color: var(--slate-300); font-size: 15.5px; margin-bottom: 14px;">
            Custom neural object classifier trained on Google Colab GPU for real-time classroom inventory and laboratory equipment tracking.
          </p>

          <div class="pipeline-bar">
            <span style="color: var(--amber); font-weight: bold;">Benchmark:</span>
            <span class="pipe-node emerald">92.4% mAP@0.5</span>
            <span class="pipe-arrow">|</span>
            <span class="pipe-node cyan">18ms Latency</span>
            <span class="pipe-arrow">|</span>
            <span class="pipe-node">Tesla T4 GPU (100 Epochs)</span>
            <span class="pipe-arrow">|</span>
            <span class="pipe-node">1,200+ Annotated Samples</span>
          </div>

          <ul class="project-pills">
            <li>YOLOv8</li>
            <li>Google Colab GPU</li>
            <li>PyTorch</li>
            <li>OpenCV</li>
            <li>Python</li>
            <li>Live Webcam Inference</li>
          </ul>

          <div class="hardware-frame">
            <img src="./images/yolo_colab_detection.jpg" alt="YOLO Custom Detection on Google Colab" loading="lazy" />
          </div>

          <button class="accordion-btn" onclick="toggleSpec(this)">
            [+] View Training &amp; Inference Specs
          </button>
          <div class="accordion-body">
            <ul class="spec-list">
              <li><strong>• Dataset:</strong> 1,200+ annotated high-res images with augmentations (random crop, brightness jitter, mosaic blending).</li>
              <li><strong>• Training Compute:</strong> 100 epochs on Google Colab Tesla T4 GPU running PyTorch and Ultralytics YOLOv8 architecture.</li>
              <li><strong>• Performance:</strong> Achieved 92.4% mAP@0.5 and 18ms inference latency per frame on continuous video loops.</li>
            </ul>
          </div>
        </div>

        <!-- Project 3: Beyond The Mic Podcast -->
        <div class="project-card">
          <div class="project-meta">
            <span class="project-tag">🎚 Broadcast Engineering &amp; Mastering</span>
            <span class="project-year">2026 (National Final)</span>
          </div>
          <h3 class="project-title">Beyond The Mic Podcast Production</h3>
          <p style="color: var(--slate-300); font-size: 15.5px; margin-bottom: 14px;">
            Broadcast engineering and audio mastering for <em>Pertandingan Beyond The Mic: Podcast Peringkat Kebangsaan</em> at Putrajaya International Convention Centre (PICC) during Petah KPM 2026, achieving <strong>5th Place Nationally (Kelima Kebangsaan)</strong>.
          </p>

          <div class="pipeline-bar">
            <span style="color: var(--amber); font-weight: bold;">Standard:</span>
            <span class="pipe-node emerald">EBU R128 (-14 LUFS)</span>
            <span class="pipe-arrow">|</span>
            <span class="pipe-node">Kelima Kebangsaan</span>
            <span class="pipe-arrow">|</span>
            <span class="pipe-node cyan">PICC Putrajaya</span>
          </div>

          <ul class="project-pills">
            <li>Broadcast Audio</li>
            <li>Acoustic Noise Suppression</li>
            <li>PICC Putrajaya</li>
            <li>Dual Balanced XLR</li>
            <li>Petah KPM 2026</li>
          </ul>

          <div class="hardware-frame" style="max-width: 540px; margin: 20px auto;">
            <img src="./images/trophy_petah_madani_podcast.jpg" alt="Petah KPM 2026 National Trophy" loading="lazy" />
          </div>

          <button class="accordion-btn" onclick="toggleSpec(this)">
            [+] View Audio Production Specifications
          </button>
          <div class="accordion-body">
            <ul class="spec-list">
              <li><strong>• Hardware:</strong> Dual-channel balanced XLR dynamic microphones with low-noise mic preamps and shock mounts.</li>
              <li><strong>• Acoustic Processing:</strong> Multi-band downward expansion, phase-aligned dynamic EQ, and real-time noise suppression.</li>
              <li><strong>• Mastering:</strong> EBU R128 / ITU-R BS.1770 broadcast standard compliance (-14 LUFS integrated, -1.0 dBTP ceiling).</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================== -->
    <!-- SECTION 3: TECHNICAL CAPABILITIES MATRIX       -->
    <!-- ============================================== -->
    <section id="skills">
      <div class="section-tagline"><span class="badge-dot"></span> 03 // CORE COMPETENCIES</div>
      <h2 class="section-title">Technical Capabilities</h2>
      <p class="section-desc">
        Comprehensive expertise bridging software intelligence with physical IT infrastructure and Cisco network architecture.
      </p>

      <div class="skills-grid">
        <div class="skill-card">
          <div class="skill-card-head">🤖 EMBEDDED &amp; AI SYSTEMS</div>
          <ul class="skill-items">
            <li><span class="skill-name">ESP32 &amp; ESP32-CAM (C/C++)</span><span class="skill-level-tag">Advanced</span></li>
            <li><span class="skill-name">FAISS 512D Vector Embeddings</span><span class="skill-level-tag">Advanced</span></li>
            <li><span class="skill-name">YOLOv8 Custom Object Detection</span><span class="skill-level-tag">Trained</span></li>
            <li><span class="skill-name">OpenCV Vision Processing</span><span class="skill-level-tag">Core</span></li>
            <li><span class="skill-name">PyTorch Neural Models</span><span class="skill-level-tag">Applied</span></li>
            <li><span class="skill-name">IoT Socket UDP Streaming</span><span class="skill-level-tag">Network</span></li>
          </ul>
        </div>

        <div class="skill-card cyan-top">
          <div class="skill-card-head">💻 SOFTWARE &amp; DATA</div>
          <ul class="skill-items">
            <li><span class="skill-name">Python (Scripting &amp; Automation)</span><span class="skill-level-tag">Primary</span></li>
            <li><span class="skill-name">JavaScript &amp; TypeScript (WebGL)</span><span class="skill-level-tag">Proficient</span></li>
            <li><span class="skill-name">SQL (SQLite / Relational Design)</span><span class="skill-level-tag">Relational</span></li>
            <li><span class="skill-name">Linux / Bash CLI &amp; SSH</span><span class="skill-level-tag">Systems</span></li>
            <li><span class="skill-name">HTML5, CSS3, Modern Responsive</span><span class="skill-level-tag">Frontend</span></li>
            <li><span class="skill-name">Git &amp; GitHub Version Control</span><span class="skill-level-tag">DevOps</span></li>
          </ul>
        </div>

        <div class="skill-card emerald-top">
          <div class="skill-card-head">🛠 IT SUPPORT &amp; CISCO</div>
          <ul class="skill-items">
            <li><span class="skill-name">SKM 3 IT Support (S103882102)</span><span class="skill-level-tag">Certified</span></li>
            <li><span class="skill-name">Cisco CCNA: Routing &amp; Switching</span><span class="skill-level-tag">Verified</span></li>
            <li><span class="skill-name">Cisco IT Essentials: PC Hardware</span><span class="skill-level-tag">Verified</span></li>
            <li><span class="skill-name">LAN / VLAN &amp; Subnet Setup</span><span class="skill-level-tag">Network</span></li>
            <li><span class="skill-name">Component Diagnostics &amp; Repair</span><span class="skill-level-tag">Hardware</span></li>
            <li><span class="skill-name">OS Deployment &amp; Recovery</span><span class="skill-level-tag">Systems</span></li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ============================================== -->
    <!-- SECTION 4: PODIUM HONORS & TROPHY SHOWCASE     -->
    <!-- ============================================== -->
    <section id="awards">
      <div class="section-tagline"><span class="badge-dot"></span> 04 // COMPETITIVE ACHIEVEMENTS</div>
      <h2 class="section-title">Podium Honors &amp; Awards</h2>
      <p class="section-desc">
        Recognized at state and national levels across software innovation, mobile app ideation, and broadcast production.
      </p>

      <div class="trophy-grid">
        <div class="trophy-card">
          <div>
            <span class="trophy-badge gold">🥇 JOHAN (CHAMPION)</span>
            <div class="trophy-img-wrap">
              <img src="./images/trophy_johan_apps_ideation_johor.jpg" alt="Johan Apps Ideation Challenge Johor Trophy" loading="lazy" />
            </div>
          </div>
          <div>
            <div class="trophy-name">Johan Apps Ideation Challenge</div>
            <div class="trophy-org">State Level Android Innovation • Johor (2023)</div>
          </div>
        </div>

        <div class="trophy-card">
          <div>
            <span class="trophy-badge bronze">🥉 TEMPAT KETIGA</span>
            <div class="trophy-img-wrap">
              <img src="./images/trophy_android_national_mmu.jpg" alt="Tempat Ketiga MMU Android Competition Trophy" loading="lazy" />
            </div>
          </div>
          <div>
            <div class="trophy-name">Tempat Ketiga MMU Android</div>
            <div class="trophy-org">Multimedia University &amp; JPN Melaka (2024)</div>
          </div>
        </div>

        <div class="trophy-card">
          <div>
            <span class="trophy-badge national">🏅 KELIMA KEBANGSAAN</span>
            <div class="trophy-img-wrap">
              <img src="./images/trophy_petah_madani_podcast.jpg" alt="Kelima Kebangsaan Beyond The Mic Trophy" loading="lazy" />
            </div>
          </div>
          <div>
            <div class="trophy-name">Kelima Kebangsaan Beyond The Mic</div>
            <div class="trophy-org">Petah KPM 2026 @ PICC Putrajaya (2026)</div>
          </div>
        </div>
      </div>

      <div class="card" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
        <div>
          <div style="font-family: var(--font-mono); font-size: 11.5px; color: var(--emerald); font-weight: 700; margin-bottom: 4px;">
            VERIFIED GOVERNMENT ACCREDITATION
          </div>
          <div style="font-size: 1.2rem; font-weight: 700; color: #fff;">Sijil Kemahiran Malaysia (SKM) Tahap 3</div>
          <div style="font-size: 14px; color: var(--slate-400); margin-top: 4px;">
            IT System Support • Cert ID: <strong style="color: #fff;">S103882102</strong> • JPK Kementerian Sumber Manusia
          </div>
        </div>
        <a class="nav-btn primary" href="./sijil_skm3_jpk_official.pdf" target="_blank" style="padding: 11px 22px;">
          📄 Download Official SKM PDF
        </a>
      </div>
    </section>

    <!-- ============================================== -->
    <!-- SECTION 5: INTERACTIVE UNIX SHELL              -->
    <!-- ============================================== -->
    <section id="terminal">
      <div class="section-tagline"><span class="badge-dot"></span> 05 // INTERACTIVE UNIX SHELL</div>
      <h2 class="section-title">Terminal Console</h2>
      <p class="section-desc">
        Type commands or click quick pills below to interact with the system kernel and explore credentials.
      </p>

      <div class="shell-container">
        <div class="shell-header">
          <div class="shell-dots">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
            <span style="font-family: var(--font-mono); font-size: 11.5px; color: var(--slate-300); margin-left: 8px;">mirza@kvpjb:~$</span>
          </div>
          <span class="shell-title">MIRZA_KERNEL // BASH</span>
        </div>

        <div class="shell-body" id="shell-output">
          <div style="color: var(--slate-400); margin-bottom: 8px;">
            *** MIRZA-OS v1.0 LTS (COMMODORE 710 EDITION) ***<br />
            Type <span style="color: var(--amber); font-weight: bold; cursor: pointer; text-decoration: underline;" onclick="runCommand('help')">help</span> or <span style="color: var(--amber); font-weight: bold; cursor: pointer; text-decoration: underline;" onclick="runCommand('neofetch')">neofetch</span> to view system information.
          </div>
        </div>

        <form class="shell-input-row" onsubmit="event.preventDefault(); submitCommand();" style="padding: 10px 20px;">
          <span class="shell-prompt">mirza@kvpjb:~$</span>
          <input type="text" id="shell-input" class="shell-input" autocomplete="off" spellcheck="false" placeholder="type 'help', 'about', 'neofetch'..." />
        </form>

        <div class="shell-quick-cmds">
          <span style="font-size: 11.5px; color: var(--slate-500); font-family: var(--font-mono);">Quick Run:</span>
          <button class="cmd-pill" onclick="runCommand('neofetch')">neofetch</button>
          <button class="cmd-pill" onclick="runCommand('about')">about</button>
          <button class="cmd-pill" onclick="runCommand('projects')">projects</button>
          <button class="cmd-pill" onclick="runCommand('skills')">skills</button>
          <button class="cmd-pill" onclick="runCommand('cgpa')">cgpa</button>
          <button class="cmd-pill" onclick="runCommand('ojt')">ojt</button>
          <button class="cmd-pill" onclick="runCommand('awards')">awards</button>
          <button class="cmd-pill" onclick="runCommand('contact')">contact</button>
          <button class="cmd-pill" onclick="runCommand('clear')" style="color: var(--slate-400);">clear</button>
        </div>
      </div>
    </section>

    <!-- ============================================== -->
    <!-- SECTION 6: CONTACT & OJT INQUIRY               -->
    <!-- ============================================== -->
    <section id="contact">
      <div class="section-tagline"><span class="badge-dot"></span> 06 // DIRECT DISPATCH</div>
      <h2 class="section-title">Contact &amp; Connect</h2>
      <p class="section-desc">
        Actively available for technical interviews regarding the <strong>5-Month IT / Software Internship (February – June 2027)</strong>.
      </p>

      <div class="contact-grid">
        <div class="contact-card" onclick="copyText('mirzaaqmal22@gmail.com', 'Email address')">
          <div class="contact-icon">✉️</div>
          <div class="contact-label">DIRECT EMAIL</div>
          <div class="contact-val">mirzaaqmal22@gmail.com</div>
          <div class="contact-hint">[Click to Copy]</div>
        </div>

        <div class="contact-card" onclick="copyText('013-5788399', 'Phone number')">
          <div class="contact-icon">📞</div>
          <div class="contact-label">PHONE / WHATSAPP</div>
          <div class="contact-val">013-5788399</div>
          <div class="contact-hint">[Click to Copy]</div>
        </div>

        <a class="contact-card" href="https://www.linkedin.com/in/aqmal-raziq-3975b0346/" target="_blank">
          <div class="contact-icon">💼</div>
          <div class="contact-label">LINKEDIN</div>
          <div class="contact-val">aqmal-raziq-3975b0346</div>
          <div class="contact-hint">[Open Profile ↗]</div>
        </a>

        <a class="contact-card" href="https://github.com/mircrtierr" target="_blank">
          <div class="contact-icon">💻</div>
          <div class="contact-label">GITHUB</div>
          <div class="contact-val">github.com/mircrtierr</div>
          <div class="contact-hint">[Open Repos ↗]</div>
        </a>
      </div>

      <div style="text-align: center; margin-top: 30px;">
        <a class="nav-btn primary" href="mailto:mirzaaqmal22@gmail.com?subject=OJT%20Internship%20Offer%20-%20Muhammad%20Mirza%20Aqmal%20Raziq" style="padding: 13px 30px; font-size: 14.5px;">
          ✉️ Send Direct Email to Mirza
        </a>
      </div>
    </section>
  </main>

  <!-- Interactive Toast Notification -->
  <div id="toast">✓ Copied to clipboard!</div>

  <input type="text" id="textarea" readonly />

  <!-- Footer -->
  <footer>
    <div style="color: #fff; font-weight: 600; font-family: var(--font-mono); font-size: 14px;">
      Muhammad Mirza Aqmal Raziq bin Mirza Affzard
    </div>
    <div>Diploma Teknologi Komputeran • Kolej Vokasional Perdagangan Johor Bahru (KVPJB)</div>
    <div>Pasir Gudang, Johor, Malaysia • CGPA 3.98 • SKM Level 3: S103882102</div>
    <div>5-Month OJT Internship Window: February – June 2027</div>
    <div>Retro Workstation 3D Design inspired by the Commodore PET 8296.</div>
  </footer>

  <!-- Scripts: Tactile Audio, CLI Shell, Copy Helper, Watchdogs -->
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

    // Accordion Toggle
    function toggleSpec(btn) {
      playBeep(700, 0.04);
      var body = btn.nextElementSibling;
      if (body) {
        body.classList.toggle('open');
        btn.textContent = body.classList.contains('open')
          ? '[-] Collapse Specifications'
          : '[+] View System Architecture Breakdown';
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
        return '<div style="color: #ff7a00; font-weight: bold;">⚡ Available Commands:</div>' +
               '<div><span style="color: #fb923c; font-weight: bold;">neofetch</span> - View system hardware & candidate info</div>' +
               '<div><span style="color: #fb923c; font-weight: bold;">about</span> - Candidate summary & CGPA</div>' +
               '<div><span style="color: #fb923c; font-weight: bold;">projects</span> - SmartAttend, YOLO, Beyond The Mic</div>' +
               '<div><span style="color: #fb923c; font-weight: bold;">skills</span> - Core technologies & frameworks</div>' +
               '<div><span style="color: #fb923c; font-weight: bold;">cgpa</span> - Academic standing (3.98 / 4.00)</div>' +
               '<div><span style="color: #fb923c; font-weight: bold;">ojt</span> - 5-Month IT Internship details (Feb–Jun 2027)</div>' +
               '<div><span style="color: #fb923c; font-weight: bold;">awards</span> - Competitive podium finishes</div>' +
               '<div><span style="color: #fb923c; font-weight: bold;">contact</span> - Direct phone & email info</div>' +
               '<div><span style="color: #fb923c; font-weight: bold;">clear</span> - Clear terminal window</div>';
      },
      neofetch: function() {
        return '<pre style="color: #fb923c; font-family: monospace; font-size: 11px; line-height: 1.3;">' +
               '        _.-;;-._          <span style="color: #ff7a00; font-weight: bold;">mirza@kvpjb</span><br/>' +
               ' \'-..-\'|   ||   |         <span style="color: #94a3b8;">-----------</span><br/>' +
               ' \'-..-\'|_.-;;-._|         <span style="color: #fed7aa;">OS:</span> Mirza-OS 1.0 LTS (64-bit)<br/>' +
               ' \'-..-\'|   ||   |         <span style="color: #fed7aa;">Host:</span> KVPJB Workstation (Commodore 710)<br/>' +
               ' \'-..-\'|_.-\'\'-._|         <span style="color: #fed7aa;">Kernel:</span> Linux 6.8.0-kvpjb-generic<br/>' +
               '                          <span style="color: #fed7aa;">Uptime:</span> 2024 - 2027 (Final Year)<br/>' +
               '                          <span style="color: #fed7aa;">CGPA:</span> <span style="color: #ff7a00; font-weight: bold;">3.98 / 4.00</span><br/>' +
               '                          <span style="color: #fed7aa;">Certification:</span> <span style="color: #fb923c; font-weight: bold;">SKM Level 3 (S103882102)</span><br/>' +
               '                          <span style="color: #fed7aa;">OJT Placement:</span> <span style="color: #fed7aa;">Feb - June 2027 (5 Mos)</span><br/>' +
               '                          <span style="color: #fed7aa;">Focus:</span> ESP32-CAM, FAISS 512D, YOLOv8<br/>' +
               '</pre>';
      },
      about: function() {
        return '<div style="color: #ff7a00; font-weight: bold;">Muhammad Mirza Aqmal Raziq bin Mirza Affzard</div>' +
               '<div>Diploma Teknologi Komputeran • KVPJB (Pasir Gudang, Johor)</div>' +
               '<div>Academic CGPA: <strong style="color: #ff7a00;">3.98 / 4.00</strong></div>' +
               '<div>SKM Level 3 Certified: <strong style="color: #fb923c;">S103882102</strong></div>';
      },
      projects: function() {
        return '<div style="color: #ff7a00; font-weight: bold;">Featured Projects:</div>' +
               '<div>• <strong>SmartAttend KVPJB:</strong> ESP32-CAM + FAISS 512D sub-second biometric attendance.</div>' +
               '<div>• <strong>YOLO Custom Classifier:</strong> 92.4% mAP@0.5 Colab Tesla T4 GPU device detection.</div>' +
               '<div>• <strong>Beyond The Mic Podcast:</strong> 5th Place National @ PICC Putrajaya (EBU R128 mastering).</div>';
      },
      skills: function() {
        return '<div style="color: #ff7a00; font-weight: bold;">Technical Skills:</div>' +
               '<div>• AI & Vision: FAISS 512D, YOLOv8, OpenCV, PyTorch, ESP32-CAM</div>' +
               '<div>• Languages: Python, C/C++, JavaScript, SQL, Bash</div>' +
               '<div>• IT Support: SKM Tahap 3, Cisco CCNA, Hardware Repair, LAN/VLAN</div>';
      },
      cgpa: function() {
        return '<div>Academic Cumulative CGPA: <strong style="color: #ff7a00; font-size: 1.2em;">3.98 / 4.00</strong> (Top-tier academic excellence).</div>';
      },
      ojt: function() {
        return '<div style="color: #ff7a00; font-weight: bold;">5-Month On-The-Job Training (OJT) Placement</div>' +
               '<div>Window: <strong>February – June 2027</strong> (5 Months)</div>' +
               '<div>Role: Software Engineering / IT Support / Embedded Systems Internship.</div>';
      },
      awards: function() {
        return '<div style="color: #ff7a00; font-weight: bold;">Podium Honors:</div>' +
               '<div>🥇 Johan (Champion) - Apps Ideation Challenge Johor (2023)</div>' +
               '<div>🥉 Tempat Ketiga - MMU Android Competition Kebangsaan (2024)</div>' +
               '<div>🏅 Kelima Kebangsaan - Beyond The Mic Podcast @ PICC Putrajaya (2026)</div>';
      },
      contact: function() {
        return '<div>Email: <a href="mailto:mirzaaqmal22@gmail.com" style="color: #fb923c;">mirzaaqmal22@gmail.com</a></div>' +
               '<div>Phone: <strong style="color: #ff7a00;">013-5788399</strong></div>' +
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

    // Show top HUD navbar only when scrolled into content sections (Hero stays pure computer)
    function updateNavbarOnScroll() {
      var nav = document.querySelector('nav.hud-navbar');
      if (!nav) return;
      var threshold = window.innerHeight * 0.55;
      if (window.scrollY > threshold) {
        nav.classList.add('nav-visible');
      } else {
        nav.classList.remove('nav-visible');
      }
    }
    window.addEventListener('scroll', updateNavbarOnScroll, { passive: true });
    updateNavbarOnScroll();

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
console.log('Successfully generated cyber obsidian portfolio! Size:', html.length);

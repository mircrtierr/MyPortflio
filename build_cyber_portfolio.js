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
  <meta name="theme-color" content="#090d16" />

  <!-- Open Graph -->
  <meta property="og:title" content="Muhammad Mirza Aqmal Raziq – Portfolio" />
  <meta property="og:description" content="Final year Diploma Teknologi Komputeran at KVPJB (CGPA 3.98 • SKM Level 3 S103882102). Seeking 5-Month IT Internship (Feb–June 2027)." />
  <meta property="og:image" content="./images/mirza-title.png" />
  <meta property="og:type" content="website" />

  <!-- Google Fonts: Inter & JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- 3D WebGL Workstation Bundle (Interactive Retro Computer) -->
  <script type="module" crossorigin src="./assets/index-UlS8cB25.js"></script>

  <style>
    /* ============================================================ */
    /* RETRO WEBFONTS (For authentic 8-bit titles & terminal)       */
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
    /* DESIGN SYSTEM: WARM OBSIDIAN & PHOSPHOR ORANGE               */
    /* Human-crafted, highly readable, retro-modern aesthetic       */
    /* ============================================================ */
    :root {
      --bg-dark: #080b12;
      --bg-surface: #0e1422;
      --bg-card: rgba(14, 20, 34, 0.88);
      --bg-card-hover: rgba(20, 28, 48, 0.95);
      
      --orange: #f97316;
      --orange-bright: #ff7a00;
      --orange-light: #fb923c;
      --orange-dark: #ea580c;
      --orange-glow: rgba(249, 115, 22, 0.35);
      --orange-subtle: rgba(249, 115, 22, 0.12);
      --border-accent: rgba(249, 115, 22, 0.28);
      --border-accent-strong: rgba(249, 115, 22, 0.65);

      --cream: #fed7aa;
      --slate-100: #f1f5f9;
      --slate-200: #e2e8f0;
      --slate-300: #cbd5e1;
      --slate-400: #94a3b8;
      --slate-500: #64748b;
      --slate-800: #1e293b;

      --font-pixel: 'public-pixel', monospace;
      --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
      --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
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
      background-color: var(--bg-dark);
      background-image: 
        radial-gradient(circle at 50% 0%, rgba(249, 115, 22, 0.12) 0%, transparent 60%),
        radial-gradient(circle at 85% 25%, rgba(234, 88, 12, 0.06) 0%, transparent 40%),
        linear-gradient(rgba(249, 115, 22, 0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(249, 115, 22, 0.025) 1px, transparent 1px);
      background-size: 100% 100%, 100% 100%, 36px 36px, 36px 36px;
      color: var(--slate-200);
      font-family: var(--font-sans);
      font-size: 16px;
      line-height: 1.7;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }

    ::selection {
      background: var(--orange-bright);
      color: #000;
    }

    /* ============================================================ */
    /* 3D WEBGL WORKSTATION CANVAS                                  */
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

    /* ============================================================ */
    /* RETRO BOOTLOADER SCREEN                                      */
    /* ============================================================ */
    #loading {
      color: var(--cream);
      background-color: #080b12;
      position: fixed;
      top: 0; bottom: 0; left: 0; right: 0;
      padding: 10vw 6vw;
      z-index: 9999;
      transition: opacity 0.5s ease;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .boot-box {
      width: clamp(0px, 92vw, 680px);
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    #loading h2 {
      font-family: var(--font-pixel);
      font-size: 1.4rem;
      color: var(--orange-bright);
      margin: 0;
      letter-spacing: 0.5px;
    }
    #loading-bar {
      position: relative;
      width: 100%;
      height: 48px;
      border: dashed 2px var(--orange);
      box-shadow: 2px 2px 0px #000, 6px 6px 0px rgba(249, 115, 22, 0.4);
      background-color: #04060a;
    }
    #loading-bar-progress {
      position: absolute;
      top: 3px; bottom: 3px; left: 3px; right: 3px;
      background: linear-gradient(90deg, #ea580c, #ff7a00);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.2s;
    }
    #loading-items {
      height: 32px;
      font-family: var(--font-mono);
      font-size: 13.5px;
      color: var(--cream);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    /* Offline / Non-WebGL Fallback Hero */
    #hero-backup {
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
      position: absolute;
      top: 0; left: 0; right: 0;
      min-height: 100vh;
      width: min(94vw, 1280px);
      margin: auto;
      z-index: 0;
      padding: 100px 16px 40px;
      text-align: center;
    }
    .hero-offline-card {
      background: var(--bg-card);
      border: 1px solid var(--border-accent);
      border-radius: 14px;
      box-shadow: 0 12px 36px rgba(0,0,0,0.5);
      padding: 36px;
      max-width: 720px;
    }

    /* ============================================================ */
    /* SLEEK PERMANENT HUD NAVBAR                                   */
    /* ============================================================ */
    nav.hud-navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 64px;
      z-index: 1000;
      background: rgba(8, 11, 18, 0.88);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border-bottom: 1px solid rgba(249, 115, 22, 0.22);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 32px;
      transition: all 0.25s ease;
    }

    .brand-hud {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: inherit;
    }
    .brand-avatar {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      border: 1px solid var(--orange);
      overflow: hidden;
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 10px rgba(249, 115, 22, 0.3);
    }
    .brand-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .brand-info {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .brand-title {
      font-family: var(--font-pixel);
      font-size: 11px;
      color: var(--orange-bright);
      letter-spacing: 0.5px;
    }
    .brand-status {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: var(--font-mono);
      font-size: 11px;
      color: var(--slate-300);
    }
    .status-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background-color: #22c55e;
      box-shadow: 0 0 8px #22c55e;
      animation: pulseGreen 2s infinite;
    }
    @keyframes pulseGreen {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.45; transform: scale(0.85); }
    }

    .nav-sections {
      display: flex;
      align-items: center;
      gap: 22px;
    }
    .nav-sec-link {
      color: var(--slate-300);
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.3px;
      transition: all 0.2s ease;
      position: relative;
      padding: 6px 4px;
    }
    .nav-sec-link:hover, .nav-sec-link.active {
      color: var(--orange-bright);
    }
    .nav-sec-link.active::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--orange-bright);
      box-shadow: 0 0 8px var(--orange-bright);
      border-radius: 2px;
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    /* Tactile Buttons */
    .btn {
      position: relative;
      font-family: var(--font-sans);
      font-size: 14px;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 9px 20px;
      background: linear-gradient(135deg, #f97316, #ea580c);
      color: #000;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 0 4px 14px rgba(249, 115, 22, 0.35);
    }
    .btn:hover {
      background: linear-gradient(135deg, #ff7a00, #f97316);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(249, 115, 22, 0.5);
      color: #000;
    }
    .btn:active {
      transform: translateY(0);
      box-shadow: 0 2px 8px rgba(249, 115, 22, 0.4);
    }
    .btn.secondary {
      background: rgba(255, 255, 255, 0.05);
      color: var(--slate-200);
      border: 1px solid rgba(255, 255, 255, 0.12);
      box-shadow: none;
    }
    .btn.secondary:hover {
      background: rgba(249, 115, 22, 0.12);
      border-color: var(--orange);
      color: var(--orange-light);
      box-shadow: 0 4px 14px rgba(249, 115, 22, 0.2);
    }
    .btn.nav-small {
      padding: 6px 14px;
      font-size: 13px;
      border-radius: 6px;
    }

    @media (max-width: 900px) {
      .nav-sections { display: none; }
      nav.hud-navbar { padding: 0 16px; }
    }
    @media (max-width: 600px) {
      .btn.nav-small.hide-mobile { display: none; }
    }

    /* ============================================================ */
    /* FULL-WIDTH EXPANSIVE CONTENT CONTAINER                       */
    /* ============================================================ */
    main {
      position: relative;
      z-index: 10;
      margin-top: 100vh; /* Scrolled past 3D workstation hero */
      width: 100%;
      background: #090b10;
      border-top: 1px solid rgba(249, 115, 22, 0.25);
      box-shadow: 0 -30px 60px rgba(0, 0, 0, 0.95);
    }

    .main-container {
      max-width: 1320px;
      margin-left: auto;
      margin-right: auto;
      padding: 60px 24px 120px;
    }

    section {
      margin-bottom: 120px;
      scroll-margin-top: 90px;
    }

    /* Humanized Section Headers */
    .section-header-block {
      margin-bottom: 36px;
      text-align: left;
    }
    .section-tag {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-family: var(--font-pixel);
      font-size: 11px;
      color: var(--orange-bright);
      background: rgba(249, 115, 22, 0.1);
      border: 1px solid rgba(249, 115, 22, 0.25);
      padding: 6px 14px;
      border-radius: 6px;
      margin-bottom: 12px;
      letter-spacing: 0.5px;
    }
    .section-title {
      font-size: clamp(1.8rem, 3.2vw, 2.4rem);
      font-weight: 700;
      color: #fff;
      letter-spacing: -0.02em;
      line-height: 1.25;
      margin-bottom: 8px;
    }
    .section-desc {
      font-size: 16.5px;
      color: var(--slate-400);
      max-width: 720px;
      line-height: 1.6;
    }

    /* ============================================================ */
    /* ABOUT ME (Widescreen 2-Column Dossier)                       */
    /* ============================================================ */
    .about-grid-wide {
      display: grid;
      grid-template-columns: 360px 1fr;
      gap: 28px;
      align-items: stretch;
    }

    .about-sidebar-card {
      background: var(--bg-card);
      border: 1px solid var(--border-accent);
      border-radius: 14px;
      padding: 32px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 20px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(12px);
    }
    .avatar-frame-large {
      width: 180px;
      height: 180px;
      border-radius: 12px;
      border: 2px solid var(--orange);
      overflow: hidden;
      background: #000;
      box-shadow: 0 0 20px rgba(249, 115, 22, 0.35);
    }
    .avatar-frame-large img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .ojt-pill-box {
      background: rgba(34, 197, 94, 0.08);
      border: 1px solid rgba(34, 197, 94, 0.28);
      border-radius: 8px;
      padding: 12px 16px;
      font-size: 13.5px;
      color: #86efac;
      width: 100%;
      line-height: 1.5;
    }

    .about-main-card {
      background: var(--bg-card);
      border: 1px solid var(--border-accent);
      border-radius: 14px;
      padding: 36px 36px 32px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 26px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(12px);
    }
    .about-bio-text {
      color: var(--slate-300);
      font-size: 16.5px;
      line-height: 1.75;
      margin-bottom: 16px;
    }
    .about-bio-text strong {
      color: #fff;
    }

    /* 4 Grand KPI Metric Boxes */
    .kpi-retro-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }
    .kpi-retro-box {
      background: rgba(14, 20, 34, 0.7);
      border: 1px solid rgba(249, 115, 22, 0.2);
      border-radius: 10px;
      padding: 18px 14px;
      text-align: center;
      transition: all 0.2s ease;
    }
    .kpi-retro-box:hover {
      border-color: var(--orange);
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(249, 115, 22, 0.15);
    }
    .kpi-retro-num {
      font-family: var(--font-pixel);
      font-size: 1.35rem;
      color: var(--orange-bright);
      margin-bottom: 6px;
      text-shadow: 0 0 12px rgba(249, 115, 22, 0.4);
    }
    .kpi-retro-label {
      font-size: 13px;
      font-weight: 700;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .kpi-retro-sub {
      font-size: 11.5px;
      color: var(--slate-400);
      margin-top: 2px;
      font-family: var(--font-mono);
    }

    /* Live Personal Status Bar */
    .live-status-card {
      background: rgba(249, 115, 22, 0.06);
      border: 1px solid rgba(249, 115, 22, 0.2);
      border-radius: 8px;
      padding: 14px 20px;
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      color: var(--cream);
    }

    @media (max-width: 960px) {
      .about-grid-wide { grid-template-columns: 1fr; }
      .kpi-retro-grid { grid-template-columns: repeat(2, 1fr); }
    }

    /* ============================================================ */
    /* FEATURED PROJECTS (Widescreen 2-Column Cards)                */
    /* ============================================================ */
    .project-card-wide {
      background: var(--bg-card);
      border: 1px solid var(--border-accent);
      border-radius: 14px;
      padding: 36px;
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 36px;
      align-items: center;
      margin-bottom: 32px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(12px);
      transition: border-color 0.25s ease, transform 0.25s ease;
    }
    .project-card-wide:hover {
      border-color: var(--border-accent-strong);
      transform: translateY(-2px);
    }

    .project-header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
      flex-wrap: wrap;
      gap: 8px;
    }
    .project-category-chip {
      font-family: var(--font-mono);
      font-size: 12px;
      color: var(--orange-bright);
      background: rgba(249, 115, 22, 0.1);
      padding: 4px 10px;
      border-radius: 6px;
      border: 1px solid rgba(249, 115, 22, 0.2);
    }
    .project-year-badge {
      font-family: var(--font-mono);
      font-size: 12px;
      color: var(--slate-400);
    }
    .project-main-title {
      font-size: 1.45rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 14px;
      line-height: 1.3;
    }
    .project-story-p {
      color: var(--slate-300);
      font-size: 15.5px;
      line-height: 1.7;
      margin-bottom: 14px;
    }
    .project-story-p strong {
      color: #fff;
    }

    .project-takeaway-box {
      background: rgba(249, 115, 22, 0.05);
      border-left: 3px solid var(--orange);
      padding: 10px 14px;
      border-radius: 0 6px 6px 0;
      font-size: 14px;
      color: var(--cream);
      margin: 14px 0;
      line-height: 1.5;
    }

    .retro-tags-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      list-style: none;
      margin: 16px 0 20px;
    }
    .retro-tags-list li {
      font-family: var(--font-mono);
      font-size: 12px;
      background: rgba(255, 255, 255, 0.04);
      color: var(--slate-300);
      padding: 4px 10px;
      border-radius: 6px;
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .project-card-image {
      position: relative;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid rgba(249, 115, 22, 0.3);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.6);
      background: #000;
    }
    .project-card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.4s ease;
    }
    .project-card-wide:hover .project-card-image img {
      transform: scale(1.02);
    }

    .collapse-toggle-btn {
      background: none;
      border: none;
      color: var(--orange-bright);
      font-family: var(--font-mono);
      font-size: 13px;
      cursor: pointer;
      padding: 6px 0;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      text-decoration: underline;
    }
    .collapse-content {
      display: none;
      margin-top: 12px;
      padding: 14px;
      background: rgba(8, 11, 18, 0.8);
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 14px;
      color: var(--slate-300);
    }
    .collapse-content.show {
      display: block;
    }
    .collapse-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    @media (max-width: 960px) {
      .project-card-wide {
        grid-template-columns: 1fr;
        padding: 24px;
      }
    }

    /* ============================================================ */
    /* SKILLS & TOOLBOX (4-Column Bento Grid)                       */
    /* ============================================================ */
    .skills-grid-wide {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }
    .skill-card-column {
      background: var(--bg-card);
      border: 1px solid var(--border-accent);
      border-radius: 12px;
      padding: 24px 20px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
      backdrop-filter: blur(10px);
    }
    .skills-col-title {
      font-size: 14.5px;
      font-weight: 700;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 8px;
      border-bottom: 1px solid rgba(249, 115, 22, 0.2);
      padding-bottom: 10px;
    }
    .skills-pills-wrap {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .skill-chip {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.07);
      padding: 7px 12px;
      border-radius: 6px;
      font-size: 13.5px;
      color: var(--slate-200);
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all 0.2s ease;
    }
    .skill-chip:hover {
      background: rgba(249, 115, 22, 0.1);
      border-color: rgba(249, 115, 22, 0.4);
      color: #fff;
    }
    .skill-chip-tag {
      font-size: 10.5px;
      font-family: var(--font-mono);
      color: var(--orange-bright);
    }

    @media (max-width: 1080px) {
      .skills-grid-wide { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 580px) {
      .skills-grid-wide { grid-template-columns: 1fr; }
    }

    /* ============================================================ */
    /* HONORS & AWARDS (Trophy Showcase)                            */
    /* ============================================================ */
    .awards-grid-wide {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      margin-bottom: 28px;
    }
    .trophy-tile {
      background: var(--bg-card);
      border: 1px solid var(--border-accent);
      border-radius: 12px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
      backdrop-filter: blur(10px);
      transition: all 0.25s ease;
    }
    .trophy-tile:hover {
      border-color: var(--orange);
      transform: translateY(-3px);
      box-shadow: 0 12px 32px rgba(249, 115, 22, 0.2);
    }
    .trophy-badge-pill {
      font-family: var(--font-mono);
      font-size: 12px;
      font-weight: 700;
      color: var(--orange-bright);
      background: rgba(249, 115, 22, 0.12);
      border: 1px solid rgba(249, 115, 22, 0.3);
      padding: 4px 10px;
      border-radius: 6px;
      display: inline-block;
      margin-bottom: 10px;
    }
    .trophy-photo-frame {
      width: 100%;
      height: 240px;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: #000;
    }
    .trophy-photo-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.35s ease;
    }
    .trophy-tile:hover .trophy-photo-frame img {
      transform: scale(1.03);
    }
    .trophy-title-text {
      font-size: 15.5px;
      font-weight: 700;
      color: #fff;
      line-height: 1.35;
      margin-bottom: 4px;
    }
    .trophy-desc-text {
      font-size: 13.5px;
      color: var(--slate-400);
      line-height: 1.45;
    }

    /* Full-Width SKM 3 Official Certification Banner */
    .cert-banner-wide {
      background: linear-gradient(135deg, rgba(14, 20, 34, 0.95), rgba(24, 34, 58, 0.95));
      border: 1px solid var(--border-accent);
      border-radius: 12px;
      padding: 24px 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      flex-wrap: wrap;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    }
    .cert-badge-tag {
      font-family: var(--font-pixel);
      font-size: 10.5px;
      color: var(--orange-bright);
      margin-bottom: 6px;
    }
    .cert-title-big {
      font-size: 1.35rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 4px;
    }
    .cert-meta-info {
      font-size: 14px;
      color: var(--slate-300);
    }

    @media (max-width: 900px) {
      .awards-grid-wide { grid-template-columns: 1fr; }
      .cert-banner-wide { flex-direction: column; align-items: flex-start; }
    }

    /* ============================================================ */
    /* INTERACTIVE TERMINAL CONSOLE                                 */
    /* ============================================================ */
    .terminal-container-wide {
      background: #090c15;
      border: 1px solid rgba(249, 115, 22, 0.3);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 12px 36px rgba(0, 0, 0, 0.6);
    }
    .terminal-topbar {
      background: #06080e;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding: 10px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .terminal-dots {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .term-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    .term-dot.red { background: #ef4444; }
    .term-dot.yellow { background: #f59e0b; }
    .term-dot.green { background: #10b981; }

    .terminal-body {
      padding: 20px 24px;
      min-height: 180px;
      max-height: 340px;
      overflow-y: auto;
      font-family: var(--font-mono);
      font-size: 13.5px;
      line-height: 1.6;
      color: var(--slate-200);
    }
    .terminal-input-row {
      display: flex;
      align-items: center;
      padding: 12px 24px;
      background: #06080e;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      gap: 10px;
    }
    .term-prompt {
      font-family: var(--font-mono);
      font-size: 13px;
      color: var(--orange-bright);
      font-weight: 700;
    }
    .term-input {
      flex: 1;
      background: transparent;
      border: none;
      outline: none;
      font-family: var(--font-mono);
      font-size: 13.5px;
      color: #fff;
    }
    .terminal-quick-pills {
      padding: 12px 24px;
      background: #04060a;
      border-top: 1px solid rgba(255, 255, 255, 0.04);
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
    }
    .term-pill {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--slate-300);
      font-family: var(--font-mono);
      font-size: 12px;
      padding: 3px 10px;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.15s ease;
    }
    .term-pill:hover {
      background: rgba(249, 115, 22, 0.15);
      border-color: var(--orange);
      color: #fff;
    }

    /* ============================================================ */
    /* CONTACT SECTION                                              */
    /* ============================================================ */
    .contact-grid-wide {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      margin-bottom: 32px;
    }
    .contact-tile {
      background: var(--bg-card);
      border: 1px solid var(--border-accent);
      border-radius: 12px;
      padding: 24px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 10px;
      cursor: pointer;
      text-decoration: none;
      color: inherit;
      transition: all 0.25s ease;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
      backdrop-filter: blur(10px);
    }
    .contact-tile:hover {
      border-color: var(--orange);
      transform: translateY(-3px);
      box-shadow: 0 10px 28px rgba(249, 115, 22, 0.2);
    }
    .contact-svg-icon {
      width: 48px;
      height: 48px;
      border-radius: 10px;
      background: rgba(249, 115, 22, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 4px;
    }
    .contact-label-small {
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.5px;
      color: var(--slate-400);
      text-transform: uppercase;
    }
    .contact-val-main {
      font-family: var(--font-mono);
      font-size: 13.5px;
      font-weight: 600;
      color: #fff;
      word-break: break-all;
    }
    .contact-hint-sub {
      font-size: 12px;
      color: var(--orange-bright);
    }

    @media (max-width: 900px) {
      .contact-grid-wide { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 500px) {
      .contact-grid-wide { grid-template-columns: 1fr; }
    }

    /* Toast Notification */
    #toast {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #10b981;
      color: #fff;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 14px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
      opacity: 0;
      transform: translateY(16px);
      transition: all 0.25s ease;
      z-index: 99999;
      pointer-events: none;
    }
    #toast.show {
      opacity: 1;
      transform: translateY(0);
    }

    /* Footer */
    footer {
      position: relative;
      z-index: 10;
      background: #06070a;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding: 48px 24px;
      text-align: center;
      color: var(--slate-400);
      font-size: 14px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    footer a { color: var(--cream); text-decoration: none; }
    footer a:hover { color: var(--orange-bright); }
  </style>
</head>

<body>
  <!-- Retro Bootloader Screen -->
  <div id="loading">
    <div class="boot-box">
      <h2>Booting...</h2>
      <div id="loading-bar">
        <div id="loading-bar-progress"></div>
      </div>
      <div id="loading-items">Starting...</div>
    </div>
  </div>

  <div id="home"></div>

  <!-- 3D Retro Commodore PET 8296 Workstation Canvas -->
  <canvas class="webgl"></canvas>

  <!-- Non-WebGL Fallback View -->
  <div id="hero-backup">
    <div class="hero-offline-card">
      <div class="avatar-frame-large" style="margin: 0 auto 16px;">
        <img src="./images/mirza-title.png" alt="Muhammad Mirza Aqmal Raziq" />
      </div>
      <div class="brand-status" style="justify-content: center; margin-bottom: 8px;">
        <span class="status-dot"></span> OPEN FOR 5-MONTH OJT (FEB–JUN 2027)
      </div>
      <h1 style="font-family: var(--font-pixel); font-size: 1.3rem; color: #fff; margin-bottom: 8px;">Muhammad Mirza Aqmal Raziq</h1>
      <div style="font-family: var(--font-mono); font-size: 14px; color: var(--orange-bright); margin-bottom: 14px;">
        Diploma Teknologi Komputeran • Kolej Vokasional Perdagangan JB (KVPJB)
      </div>
      <p style="color: var(--slate-300); font-size: 15.5px; max-width: 580px; margin: 0 auto 20px; line-height: 1.6;">
        Final-year student specializing in IoT microcontrollers (ESP32-CAM), FAISS vector search, custom YOLOv8 computer vision, and Cisco networking.
      </p>
      <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
        <a class="btn" href="#about">Explore About Me ↓</a>
        <a class="btn secondary" href="./sijil_skm3_jpk_official.pdf" target="_blank">📄 Official SKM 3 PDF</a>
      </div>
    </div>
  </div>

  <!-- Permanent Top Retro HUD Navigation Bar -->
  <nav class="hud-navbar">
    <a href="#home" class="brand-hud">
      <div class="brand-avatar">
        <img src="./images/mirza-title.png" alt="Mirza" />
      </div>
      <div class="brand-info">
        <span class="brand-title">MIRZA // RETRO OS</span>
        <span class="brand-status"><span class="status-dot"></span> OJT READY (FEB 2027)</span>
      </div>
    </a>

    <!-- Quick Section Links -->
    <div class="nav-sections">
      <a class="nav-sec-link" href="#about">About</a>
      <a class="nav-sec-link" href="#projects">Projects</a>
      <a class="nav-sec-link" href="#skills">Toolbox</a>
      <a class="nav-sec-link" href="#awards">Honors</a>
      <a class="nav-sec-link" href="#terminal">Terminal</a>
      <a class="nav-sec-link" href="#contact">Contact</a>
    </div>

    <!-- Quick Action Buttons -->
    <div class="nav-actions">
      <button class="btn nav-small secondary" onclick="toggleAudio()" id="sound-btn" title="Toggle Tactile Audio">
        🔊 Sound: ON
      </button>
      <a class="btn nav-small secondary hide-mobile" href="https://www.linkedin.com/in/aqmal-raziq-3975b0346/" target="_blank">
        LinkedIn
      </a>
      <a class="btn nav-small secondary hide-mobile" href="https://github.com/mircrtierr" target="_blank">
        GitHub
      </a>
      <a class="btn nav-small" href="./sijil_skm3_jpk_official.pdf" target="_blank" title="Download Verified SKM 3 Digital PDF">
        📄 SKM 3 PDF
      </a>
    </div>
  </nav>

  <!-- Editorial Main Content Container (Full-Width Widescreen Layout) -->
  <main>
    <div class="main-container">
    <!-- ============================================== -->
    <!-- SECTION 1: ABOUT ME & CANDIDATE STORY          -->
    <!-- ============================================== -->
    <section id="about">
      <div class="section-header-block">
        <span class="section-tag"><span class="status-dot"></span> 01 // ABOUT ME</span>
        <h2 class="section-title">Turning lab hardware and Python code into things that actually work.</h2>
        <p class="section-desc">
          Final-year Computer Technology student at KVPJB, Pasir Gudang. Passionate about edge IoT microcontrollers, computer vision, and hands-on IT infrastructure.
        </p>
      </div>

      <div class="about-grid-wide">
        <!-- Sidebar Profile Card -->
        <div class="about-sidebar-card">
          <div class="avatar-frame-large">
            <img src="./images/mirza-title.png" alt="Muhammad Mirza Aqmal Raziq" />
          </div>
          <div>
            <h3 style="font-size: 1.25rem; font-weight: 700; color: #fff; margin-bottom: 4px;">Muhammad Mirza Aqmal Raziq</h3>
            <div style="font-family: var(--font-mono); font-size: 13.5px; color: var(--orange-bright);">Diploma Teknologi Komputeran</div>
            <div style="font-size: 13px; color: var(--slate-400); margin-top: 2px;">KVPJB • Pasir Gudang, Johor</div>
          </div>

          <div class="ojt-pill-box">
            🟢 <strong>Seeking 5-Month OJT Internship</strong><br />
            February – June 2027
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px; width: 100%;">
            <a class="btn" href="./sijil_skm3_jpk_official.pdf" target="_blank" style="width: 100%;">
              📄 Verified SKM 3 PDF
            </a>
            <a class="btn secondary" href="./Resume_Muhammad_Mirza_Aqmal_Raziq.pdf" target="_blank" style="width: 100%;">
              📥 Download Resume PDF
            </a>
            <a class="btn secondary" href="#contact" style="width: 100%;">
              ✉ Get in Touch
            </a>
          </div>
        </div>

        <!-- Main Narrative & Stats Card -->
        <div class="about-main-card">
          <div>
            <h3 style="font-size: 1.2rem; font-weight: 700; color: #fff; margin-bottom: 14px;">A bit about me</h3>
            <p class="about-bio-text">
              Hey, I'm Mirza. I am a final-year Computer Technology student at <strong>Kolej Vokasional Perdagangan Johor Bahru (KVPJB)</strong> in Pasir Gudang, Johor. Ever since I stepped into the vocational track, I've loved getting my hands dirty with real tech — whether that means crimping Cat6 RJ-45 cables in the lab until my fingers hurt, setting up Cisco routing tables, troubleshooting PC hardware, or hooking up cheap microcontrollers to Python scripts to build working computer vision systems.
            </p>
            <p class="about-bio-text">
              I believe in building practical tools that solve everyday problems: I maintain a cumulative CGPA of <strong>3.98 / 4.00</strong> and earned my official <strong>Sijil Kemahiran Malaysia (SKM) Tahap 3 accreditation (Cert ID: S103882102)</strong> in IT System Support from JPK. I'm actively seeking a <strong>5-Month On-The-Job Training (OJT) internship</strong> from February to June 2027 where I can contribute to a real engineering team and learn from experienced mentors.
            </p>
          </div>

          <!-- 4 Grand KPI Stats -->
          <div class="kpi-retro-grid">
            <div class="kpi-retro-box">
              <div class="kpi-retro-num">3.98</div>
              <div class="kpi-retro-label">CGPA</div>
              <div class="kpi-retro-sub">Academic Excellence</div>
            </div>

            <div class="kpi-retro-box">
              <div class="kpi-retro-num">SKM 3</div>
              <div class="kpi-retro-label">JPK Certified</div>
              <div class="kpi-retro-sub">ID: S103882102</div>
            </div>

            <div class="kpi-retro-box">
              <div class="kpi-retro-num">5 MOS</div>
              <div class="kpi-retro-label">OJT Window</div>
              <div class="kpi-retro-sub">Feb – June 2027</div>
            </div>

            <div class="kpi-retro-box">
              <div class="kpi-retro-num">TOP 5</div>
              <div class="kpi-retro-label">Podiums</div>
              <div class="kpi-retro-sub">3x Competitions</div>
            </div>
          </div>

          <!-- Live Status Readout -->
          <div class="live-status-card">
            <span>⚡</span>
            <div>
              <strong style="color: #fff;">Currently:</strong> Finalizing SmartAttend biometric edge deployment &amp; preparing for final-semester practical assessments.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================== -->
    <!-- SECTION 2: FEATURED PROJECTS (WIDE 2-COLUMN)   -->
    <!-- ============================================== -->
    <section id="projects">
      <div class="section-header-block">
        <span class="section-tag"><span class="status-dot"></span> 02 // SELECTED WORK</span>
        <h2 class="section-title">Projects I built to solve real problems at college.</h2>
        <p class="section-desc">
          Practical systems built with accessible hardware, Python, neural embeddings, and real-time inference.
        </p>
      </div>

      <!-- Project 1: SmartAttend KVPJB -->
      <div class="project-card-wide">
        <div>
          <div class="project-header-row">
            <span class="project-category-chip">IoT &amp; Computer Vision • Final Year Project</span>
            <span class="project-year-badge">2024 – 2025</span>
          </div>
          <h3 class="project-main-title">SmartAttend KVPJB — Facial Recognition Attendance</h3>
          
          <p class="project-story-p">
            <strong>The Problem:</strong> Every morning at our college, lecturers spent 10 to 15 minutes passing around paper attendance sheets. Sheets were misplaced, class time was wasted, and students sometimes signed for their absent friends. Commercial biometric scanners cost thousands of ringgit that student departments don't have.
          </p>
          <p class="project-story-p">
            <strong>How I Built It:</strong> I proved we could build a fast, reliable attendance system using an accessible <strong>RM35 ESP32-CAM module</strong> mounted at the classroom doorway. It streams video over campus Wi-Fi to a local Python server. The server extracts 512D ArcFace facial embeddings and matches them against our student vector database using FAISS in <strong>less than 250 milliseconds</strong>! Once verified, it logs the attendance timestamp into SQLite and plays a friendly confirmation chime.
          </p>

          <div class="project-takeaway-box">
            💡 <strong>Key takeaway:</strong> Running heavy neural nets on microcontrollers causes extreme heat and dropped frames. Offloading the 512D ArcFace search to a local Python host kept the ESP32 cool and our response time under a quarter-second.
          </div>

          <ul class="retro-tags-list">
            <li>ESP32-CAM</li>
            <li>Python 3</li>
            <li>FAISS 512D Vector Index</li>
            <li>InsightFace</li>
            <li>SQLite</li>
            <li>Sub-250ms Matching</li>
          </ul>

          <button class="collapse-toggle-btn" onclick="toggleAccordion(this)">
            [+] View Technical Build Details
          </button>
          <div class="collapse-content">
            <ul class="collapse-list">
              <li><strong>• Edge Camera Node:</strong> ESP32-CAM with OV2640 sensor streaming JPEG frames over local LAN via socket connection.</li>
              <li><strong>• Vector Search Architecture:</strong> Built on FAISS <code>IndexFlatL2</code> querying 500+ student embeddings with an empirical Euclidean distance threshold of 0.42 to prevent false positives.</li>
              <li><strong>• Duplicate Scan Suppression:</strong> 60-second window lock in SQLite so walking past the lens twice doesn't record double attendance.</li>
            </ul>
          </div>
        </div>

        <!-- Wide Project Visual Frame -->
        <div class="project-card-image">
          <img src="./images/smartattend_dashboard.jpg" alt="SmartAttend Biometric System Interface" loading="lazy" />
        </div>
      </div>

      <!-- Project 2: YOLO Custom Object Classifier -->
      <div class="project-card-wide">
        <div>
          <div class="project-header-row">
            <span class="project-category-chip">Machine Learning • Google Colab GPU</span>
            <span class="project-year-badge">2024</span>
          </div>
          <h3 class="project-main-title">Lab Tool Vision Tracker — YOLOv8 Custom Classifier</h3>
          
          <p class="project-story-p">
            <strong>The Problem:</strong> In our vocational computer hardware lab, small tools like digital multimeters, LAN cable testers, and RJ-45 crimping pliers frequently went missing after practical exams. Lecturers had to inspect every workstation rack before dismissing class.
          </p>
          <p class="project-story-p">
            <strong>How I Built It:</strong> I gathered and hand-annotated <strong>1,200 photos of lab tools</strong> under various angles and glare conditions. I trained a custom YOLOv8 model using Google Colab's free GPU tier (babysitting the notebook late at night so the runtime wouldn't disconnect!). The finished model runs on a standard laptop webcam, detecting equipment with <strong>92.4% accuracy at 18ms per frame</strong> and immediately flagging any missing tool slot.
          </p>

          <div class="project-takeaway-box">
            💡 <strong>Key takeaway:</strong> Metal tables in the lab created severe glare. Adding brightness and perspective augmentations during training boosted recall from 78% to 92.4% on reflective tools.
          </div>

          <ul class="retro-tags-list">
            <li>YOLOv8</li>
            <li>Google Colab GPU</li>
            <li>PyTorch</li>
            <li>OpenCV</li>
            <li>Python</li>
            <li>Real-Time Video Inference</li>
          </ul>

          <button class="collapse-toggle-btn" onclick="toggleAccordion(this)">
            [+] View Training &amp; Dataset Specs
          </button>
          <div class="collapse-content">
            <ul class="collapse-list">
              <li><strong>• Dataset Preparation:</strong> 1,200 annotated photos with mosaic augmentation, random brightness shifts, and rotational flips.</li>
              <li><strong>• Training Details:</strong> Ultralytics YOLOv8 trained across 100 epochs on a Tesla T4 GPU, exported for low-latency CPU webcam inference.</li>
            </ul>
          </div>
        </div>

        <!-- Wide Project Visual Frame -->
        <div class="project-card-image">
          <img src="./images/yolo_colab_detection.jpg" alt="YOLO Custom Detection on Google Colab" loading="lazy" />
        </div>
      </div>

      <!-- Project 3: Beyond The Mic Podcast -->
      <div class="project-card-wide">
        <div>
          <div class="project-header-row">
            <span class="project-category-chip">Audio Engineering &amp; Leadership • National Finalist</span>
            <span class="project-year-badge">2026</span>
          </div>
          <h3 class="project-main-title">Beyond The Mic Podcast — Audio Engineering &amp; Mastering</h3>
          
          <p class="project-story-p">
            <strong>The Experience:</strong> Representing the state of Johor and KVPJB at the National Finals of Petah KPM 2026 at the Putrajaya International Convention Centre (PICC) was an unforgettable journey. We competed against top student production teams from across Malaysia.
          </p>
          <p class="project-story-p">
            <strong>My Technical Role:</strong> In addition to co-hosting the podcast, I was in charge of our live audio engineering and broadcast mastering. A podcast can have compelling discussion, but if the audio clips or has hollow hall echo, listeners tune out. I managed dual dynamic XLR microphones, dialed in real-time gain staging, configured downward expansion to kill convention hall rumble, and mastered the broadcast track to the international <strong>EBU R128 (-14 LUFS) broadcast standard</strong>. Our team brought home <strong>5th Place Nationally (Kelima Kebangsaan)</strong>!
          </p>

          <div class="project-takeaway-box">
            💡 <strong>Key takeaway:</strong> Big convention halls have harsh reflections. Setting upward compression with a fast downward expander gave us studio-clean voice isolation even in a bustling venue.
          </div>

          <ul class="retro-tags-list">
            <li>Live Broadcast Audio</li>
            <li>Acoustic Noise Suppression</li>
            <li>EBU R128 Loudness Standard</li>
            <li>PICC Putrajaya</li>
            <li>Petah KPM 2026</li>
          </ul>

          <button class="collapse-toggle-btn" onclick="toggleAccordion(this)">
            [+] View Audio Production Details
          </button>
          <div class="collapse-content">
            <ul class="collapse-list">
              <li><strong>• Audio Chain:</strong> Dual balanced XLR dynamic microphones with low-noise preamps, shock mounts, and dedicated pop filtration.</li>
              <li><strong>• Real-Time Processing:</strong> Phase-aligned dynamic EQ, multiband downward expansion, and transparent brickwall limiting with a -1.0 dBTP ceiling.</li>
            </ul>
          </div>
        </div>

        <!-- Wide Project Visual Frame -->
        <div class="project-card-image">
          <img src="./images/trophy_petah_madani_podcast.jpg" alt="Petah KPM 2026 National Trophy" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- ============================================== -->
    <!-- SECTION 3: SKILLS (EXPANSIVE 4-COLUMN MATRIX)  -->
    <!-- ============================================== -->
    <section id="skills">
      <div class="section-header-block">
        <span class="section-tag"><span class="status-dot"></span> 03 // TOOLBOX</span>
        <h2 class="section-title">Technologies and tools I actually work with.</h2>
        <p class="section-desc">
          Hands-on hardware, computer vision models, Cisco networking, and software tools I use to build projects.
        </p>
      </div>

      <div class="skills-grid-wide">
        <div class="skill-card-column">
          <div class="skills-col-title">⚡ IoT &amp; Embedded Hardware</div>
          <div class="skills-pills-wrap">
            <div class="skill-chip"><span>ESP32 &amp; ESP32-CAM</span> <span class="skill-chip-tag">Edge AI</span></div>
            <div class="skill-chip"><span>Arduino C / C++</span> <span class="skill-chip-tag">Firmware</span></div>
            <div class="skill-chip"><span>Sensors (PIR, Ultrasonic, DHT)</span> <span class="skill-chip-tag">Telemetry</span></div>
            <div class="skill-chip"><span>Buses (UART, I2C, SPI)</span> <span class="skill-chip-tag">Hardware</span></div>
            <div class="skill-chip"><span>Relays &amp; Actuators</span> <span class="skill-chip-tag">Control</span></div>
            <div class="skill-chip"><span>UDP Socket Streaming</span> <span class="skill-chip-tag">Network</span></div>
          </div>
        </div>

        <div class="skill-card-column">
          <div class="skills-col-title">🎯 AI &amp; Computer Vision</div>
          <div class="skills-pills-wrap">
            <div class="skill-chip"><span>Python 3 (Primary Language)</span> <span class="skill-chip-tag">Core</span></div>
            <div class="skill-chip"><span>FAISS 512D Vector Index</span> <span class="skill-chip-tag">Similarity</span></div>
            <div class="skill-chip"><span>YOLOv8 Custom Object Detection</span> <span class="skill-chip-tag">Vision</span></div>
            <div class="skill-chip"><span>InsightFace (ArcFace ResNet-50)</span> <span class="skill-chip-tag">Biometric</span></div>
            <div class="skill-chip"><span>OpenCV Video Pipeline</span> <span class="skill-chip-tag">CV</span></div>
            <div class="skill-chip"><span>Google Colab Cloud GPU</span> <span class="skill-chip-tag">Training</span></div>
          </div>
        </div>

        <div class="skill-card-column">
          <div class="skills-col-title">🛠 IT Support &amp; Cisco Networking</div>
          <div class="skills-pills-wrap">
            <div class="skill-chip"><span>SKM Tahap 3: IT Support</span> <span class="skill-chip-tag">Certified</span></div>
            <div class="skill-chip"><span>Cisco CCNA: Routing &amp; Switching</span> <span class="skill-chip-tag">Cisco</span></div>
            <div class="skill-chip"><span>Cisco IT Essentials: PC Repair</span> <span class="skill-chip-tag">Hardware</span></div>
            <div class="skill-chip"><span>Cat5e / Cat6 RJ-45 Cabling</span> <span class="skill-chip-tag">Lab</span></div>
            <div class="skill-chip"><span>VLAN &amp; Subnet Configuration</span> <span class="skill-chip-tag">IP Ops</span></div>
            <div class="skill-chip"><span>Linux CLI &amp; Bash Scripting</span> <span class="skill-chip-tag">Terminal</span></div>
          </div>
        </div>

        <div class="skill-card-column">
          <div class="skills-col-title">💻 Software &amp; Media Tools</div>
          <div class="skills-pills-wrap">
            <div class="skill-chip"><span>JavaScript &amp; HTML5/CSS3</span> <span class="skill-chip-tag">Web UI</span></div>
            <div class="skill-chip"><span>SQLite &amp; MySQL Databases</span> <span class="skill-chip-tag">SQL</span></div>
            <div class="skill-chip"><span>Git &amp; GitHub Version Control</span> <span class="skill-chip-tag">VCS</span></div>
            <div class="skill-chip"><span>VS Code Workspace</span> <span class="skill-chip-tag">IDE</span></div>
            <div class="skill-chip"><span>DAW Audio Mastering (EBU R128)</span> <span class="skill-chip-tag">Audio</span></div>
            <div class="skill-chip"><span>Windows / Linux System Recovery</span> <span class="skill-chip-tag">Admin</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================== -->
    <!-- SECTION 4: PODIUM HONORS & AWARDS              -->
    <!-- ============================================== -->
    <section id="awards">
      <div class="section-header-block">
        <span class="section-tag"><span class="status-dot"></span> 04 // COMPETITIONS &amp; CERTIFICATIONS</span>
        <h2 class="section-title">Podium finishes and verified credentials.</h2>
        <p class="section-desc">
          Honors earned representing KVPJB and the state of Johor at state and national competitive levels.
        </p>
      </div>

      <div class="awards-grid-wide">
        <div class="trophy-tile">
          <div>
            <span class="trophy-badge-pill">🥇 JOHAN (CHAMPION)</span>
            <div class="trophy-photo-frame">
              <img src="./images/trophy_johan_apps_ideation_johor.jpg" alt="Johan Apps Ideation Challenge Johor Trophy" loading="lazy" />
            </div>
          </div>
          <div>
            <div class="trophy-title-text">Johan Apps Ideation Challenge</div>
            <div class="trophy-desc-text">State Level Android Innovation • Johor (2023)</div>
          </div>
        </div>

        <div class="trophy-tile">
          <div>
            <span class="trophy-badge-pill">🥉 TEMPAT KETIGA</span>
            <div class="trophy-photo-frame">
              <img src="./images/trophy_android_national_mmu.jpg" alt="Tempat Ketiga MMU Android Competition Trophy" loading="lazy" />
            </div>
          </div>
          <div>
            <div class="trophy-title-text">Tempat Ketiga MMU Android</div>
            <div class="trophy-desc-text">Multimedia University &amp; JPN Melaka (2024)</div>
          </div>
        </div>

        <div class="trophy-tile">
          <div>
            <span class="trophy-badge-pill">🏅 KELIMA KEBANGSAAN</span>
            <div class="trophy-photo-frame">
              <img src="./images/trophy_petah_madani_podcast.jpg" alt="Kelima Kebangsaan Beyond The Mic Trophy" loading="lazy" />
            </div>
          </div>
          <div>
            <div class="trophy-title-text">Kelima Kebangsaan Beyond The Mic</div>
            <div class="trophy-desc-text">Petah KPM 2026 @ PICC Putrajaya (2026)</div>
          </div>
        </div>
      </div>

      <!-- Verified Government Accreditation Banner (Full Width) -->
      <div class="cert-banner-wide">
        <div>
          <div class="cert-badge-tag">★ VERIFIED GOVERNMENT ACCREDITATION</div>
          <div class="cert-title-big">Sijil Kemahiran Malaysia (SKM) Tahap 3</div>
          <div class="cert-meta-info">
            IT System Support • Cert ID: <strong style="color: var(--orange-bright);">S103882102</strong> • JPK Kementerian Sumber Manusia
          </div>
        </div>
        <a class="btn" href="./sijil_skm3_jpk_official.pdf" target="_blank">
          📄 Download Official SKM PDF
        </a>
      </div>
    </section>

    <!-- ============================================== -->
    <!-- SECTION 5: INTERACTIVE UNIX SHELL              -->
    <!-- ============================================== -->
    <section id="terminal">
      <div class="section-header-block">
        <span class="section-tag"><span class="status-dot"></span> 05 // TERMINAL</span>
        <h2 class="section-title">Interactive Terminal Console.</h2>
        <p class="section-desc">
          Feel free to query system info, run commands, or inspect candidate details directly in the browser.
        </p>
      </div>

      <div class="terminal-container-wide">
        <div class="terminal-topbar">
          <div class="terminal-dots">
            <span class="term-dot red"></span>
            <span class="term-dot yellow"></span>
            <span class="term-dot green"></span>
            <span style="font-family: var(--font-mono); font-size: 12px; color: var(--cream); margin-left: 8px;">mirza@kvpjb:~$</span>
          </div>
          <span style="font-family: var(--font-mono); font-size: 11.5px; color: var(--slate-400);">bash v5.2</span>
        </div>

        <div class="terminal-body" id="shell-output">
          <div style="color: var(--slate-400); margin-bottom: 8px;">
            *** Welcome to MIRZA-OS Terminal ***<br />
            Type <span style="color: var(--orange-bright); font-weight: bold; cursor: pointer; text-decoration: underline;" onclick="runCommand('help')">help</span> or <span style="color: var(--orange-bright); font-weight: bold; cursor: pointer; text-decoration: underline;" onclick="runCommand('neofetch')">neofetch</span> to query candidate information.
          </div>
        </div>

        <form class="terminal-input-row" onsubmit="event.preventDefault(); submitCommand();">
          <span class="term-prompt">mirza@kvpjb:~$</span>
          <input type="text" id="shell-input" class="term-input" autocomplete="off" spellcheck="false" placeholder="type 'help', 'about', 'neofetch'..." />
        </form>

        <div class="terminal-quick-pills">
          <span style="font-size: 11.5px; color: var(--slate-400); font-family: var(--font-mono);">Quick Commands:</span>
          <button class="term-pill" onclick="runCommand('neofetch')">neofetch</button>
          <button class="term-pill" onclick="runCommand('about')">about</button>
          <button class="term-pill" onclick="runCommand('projects')">projects</button>
          <button class="term-pill" onclick="runCommand('skills')">skills</button>
          <button class="term-pill" onclick="runCommand('cgpa')">cgpa</button>
          <button class="term-pill" onclick="runCommand('ojt')">ojt</button>
          <button class="term-pill" onclick="runCommand('awards')">awards</button>
          <button class="term-pill" onclick="runCommand('contact')">contact</button>
          <button class="term-pill" onclick="runCommand('clear')" style="color: var(--slate-400);">clear</button>
        </div>
      </div>
    </section>

    <!-- ============================================== -->
    <!-- SECTION 6: CONTACT & OJT INQUIRIES             -->
    <!-- ============================================== -->
    <section id="contact">
      <div class="section-header-block">
        <span class="section-tag"><span class="status-dot"></span> 06 // LET'S TALK</span>
        <h2 class="section-title">Interested in working together?</h2>
        <p class="section-desc">
          I'm actively available for technical interviews regarding the <strong>5-Month IT / Software Internship (February – June 2027)</strong>. Reach out directly below:
        </p>
      </div>

      <div class="contact-grid-wide">
        <div class="contact-tile" onclick="copyText('mirzaaqmal22@gmail.com', 'Email address')">
          <div class="contact-svg-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--orange-bright)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </div>
          <div class="contact-label-small">DIRECT EMAIL</div>
          <div class="contact-val-main">mirzaaqmal22@gmail.com</div>
          <div class="contact-hint-sub">[Click to Copy]</div>
        </div>

        <div class="contact-tile" onclick="copyText('013-5788399', 'Phone number')">
          <div class="contact-svg-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--orange-bright)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <div class="contact-label-small">PHONE / WHATSAPP</div>
          <div class="contact-val-main">013-5788399</div>
          <div class="contact-hint-sub">[Click to Copy]</div>
        </div>

        <a class="contact-tile" href="https://www.linkedin.com/in/aqmal-raziq-3975b0346/" target="_blank">
          <div class="contact-svg-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--orange-bright)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </div>
          <div class="contact-label-small">LINKEDIN</div>
          <div class="contact-val-main">aqmal-raziq-3975b0346</div>
          <div class="contact-hint-sub">[Open Profile ↗]</div>
        </a>

        <a class="contact-tile" href="https://github.com/mircrtierr" target="_blank">
          <div class="contact-svg-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--orange-bright)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
          </div>
          <div class="contact-label-small">GITHUB</div>
          <div class="contact-val-main">github.com/mircrtierr</div>
          <div class="contact-hint-sub">[Open Repos ↗]</div>
        </a>
      </div>

      <div style="text-align: center; margin-top: 28px;">
        <a class="btn" href="mailto:mirzaaqmal22@gmail.com?subject=OJT%20Internship%20Offer%20-%20Muhammad%20Mirza%20Aqmal%20Raziq" style="padding: 13px 32px; font-size: 15.5px;">
          ✉ Send Direct Email to Mirza
        </a>
      </div>
    </section>
    </div>
  </main>

  <!-- Interactive Toast Notification -->
  <div id="toast">✓ Copied to clipboard!</div>

  <input type="text" id="textarea" readonly />

  <!-- Footer -->
  <footer>
    <div style="color: #fff; font-weight: 700; font-size: 14.5px;">
      Muhammad Mirza Aqmal Raziq bin Mirza Affzard
    </div>
    <div>Diploma Teknologi Komputeran • Kolej Vokasional Perdagangan Johor Bahru (KVPJB)</div>
    <div>Pasir Gudang, Johor, Malaysia • CGPA 3.98 • SKM Level 3: S103882102</div>
    <div>5-Month OJT Internship Window: February – June 2027</div>
    <div style="margin-top: 6px; font-size: 12px; color: var(--slate-500);">
      Designed with retro computer soul &amp; modern developer craft.
    </div>
  </footer>

  <!-- Scripts: Tactile Audio, CLI Shell, Copy Helper, Watchdogs -->
  <script>
    // Audio Synthesizer
    var audioOn = true;
    var audioCtx = null;
    function playBeep(freq, type, duration) {
      if (!audioOn) return;
      try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        var osc = audioCtx.createOscillator();
        var gain = audioCtx.createGain();
        osc.type = type || 'sine';
        osc.frequency.setValueAtTime(freq || 440, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + (duration || 0.08));
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + (duration || 0.08));
      } catch (e) {}
    }

    function toggleAudio() {
      audioOn = !audioOn;
      var btn = document.getElementById('sound-btn');
      if (btn) {
        btn.innerHTML = audioOn ? '🔊 Sound: ON' : '🔇 Sound: OFF';
      }
      if (audioOn) playBeep(880, 'square', 0.1);
    }

    // Accordion Toggle
    function toggleAccordion(btn) {
      playBeep(620, 'sine', 0.05);
      var content = btn.nextElementSibling;
      if (content.classList.contains('show')) {
        content.classList.remove('show');
        btn.innerHTML = btn.innerHTML.replace('[-]', '[+]');
      } else {
        content.classList.add('show');
        btn.innerHTML = btn.innerHTML.replace('[+]', '[-]');
      }
    }

    // Copy to clipboard helper
    function copyText(text, label) {
      playBeep(780, 'triangle', 0.08);
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function() {
          showToast(label + ' copied to clipboard!');
        });
      } else {
        showToast(text);
      }
    }

    function showToast(msg) {
      var toast = document.getElementById('toast');
      if (toast) {
        toast.textContent = '✓ ' + msg;
        toast.classList.add('show');
        setTimeout(function() { toast.classList.remove('show'); }, 2500);
      }
    }

    // Terminal Commands
    var commands = {
      help: function() {
        return [
          'Available commands:',
          '  about       - Short candidate profile and institution',
          '  projects    - Summary of featured engineering projects',
          '  skills      - Key hardware, AI, and networking competencies',
          '  cgpa        - Academic results and transcript summary',
          '  ojt         - 5-Month internship availability dates',
          '  awards      - Competition achievements and state/national podiums',
          '  skm         - Official Sijil Kemahiran Malaysia (SKM 3) info',
          '  contact     - Phone, WhatsApp, email, and social links',
          '  neofetch    - System specifications and candidate overview',
          '  clear       - Clear terminal window'
        ];
      },
      about: function() {
        return [
          'NAME: Muhammad Mirza Aqmal Raziq bin Mirza Affzard',
          'PROGRAM: Diploma Teknologi Komputeran (Final Year)',
          'COLLEGE: Kolej Vokasional Perdagangan Johor Bahru (KVPJB)',
          'LOCATION: Pasir Gudang, Johor, Malaysia',
          'FOCUS: Edge IoT microcontrollers, FAISS vector embeddings, YOLOv8 vision, and Cisco networking.'
        ];
      },
      projects: function() {
        return [
          '1. SmartAttend KVPJB (2024-2025): ESP32-CAM + InsightFace 512D + FAISS &lt;250ms biometric attendance station.',
          '2. Lab Tool Vision Tracker (2024): Custom YOLOv8 model trained on 1,200 photos with 92.4% mAP.',
          '3. Beyond The Mic Podcast (2026): Audio engineering & mastering (EBU R128) representing Johor at PICC Putrajaya.'
        ];
      },
      skills: function() {
        return [
          'HARDWARE: ESP32-CAM, Arduino C++, Sensor Interfacing, UART/I2C/SPI buses.',
          'AI/VISION: Python 3, YOLOv8, FAISS Vector Index, InsightFace, OpenCV, PyTorch.',
          'NETWORKING: Cisco CCNA (Routing/Switching), Cat6 RJ-45 Cabling, VLANs, Subnets.',
          'SOFTWARE: JavaScript, HTML5/CSS3, SQLite, MySQL, Git/GitHub, DAW Audio.'
        ];
      },
      cgpa: function() {
        return [
          'ACADEMIC PERFORMANCE:',
          '  Cumulative CGPA: 3.98 / 4.00',
          '  Distinction: Anugerah Pengarah (Director\\'s List) Every Active Semester'
        ];
      },
      ojt: function() {
        return [
          'INTERNSHIP AVAILABILITY:',
          '  Duration: 5 Months (On-The-Job Training / OJT)',
          '  Window: February 2027 – June 2027',
          '  Preferred Roles: IT Support, Edge IoT / Microcontroller Dev, Junior Software / Python, Network Support.',
          '  Location: Johor / Remote / Flexible'
        ];
      },
      awards: function() {
        return [
          'PODIUM DISTINCTIONS:',
          '  🥇 Johan (Champion) - Apps Ideation Challenge Johor 2023',
          '  🥉 Tempat Ketiga - MMU Android App Challenge 2024',
          '  🏅 Kelima Kebangsaan - Beyond The Mic Podcast Petah KPM 2026 @ PICC Putrajaya'
        ];
      },
      skm: function() {
        return [
          'GOVERNMENT ACCREDITATION:',
          '  Certificate: Sijil Kemahiran Malaysia (SKM) Tahap 3',
          '  Discipline: IT System Support',
          '  Cert ID: S103882102',
          '  Issuing Authority: JPK (Jabatan Pembangunan Kemahiran, Kementerian Sumber Manusia)'
        ];
      },
      contact: function() {
        return [
          'CONTACT INFORMATION:',
          '  Email: mirzaaqmal22@gmail.com',
          '  Phone / WhatsApp: +60 13-578 8399',
          '  LinkedIn: https://www.linkedin.com/in/aqmal-raziq-3975b0346/',
          '  GitHub: https://github.com/mircrtierr'
        ];
      },
      neofetch: function() {
        return [
          '       .---.       mirza@kvpjb',
          '      /     \\\\     -----------',
          '     | () () |     OS: MIRZA-OS 1.0 (Commodore PET 8296 Edition)',
          '      \\\\  -  /     Host: Kolej Vokasional Perdagangan JB',
          '       \\'---\\''     Kernel: Diploma Teknologi Komputeran',
          '                   Uptime: Final Year (Graduating 2027)',
          '                   CGPA: 3.98 / 4.00',
          '                   Accreditation: SKM Tahap 3 (S103882102)',
          '                   Target: 5-Month OJT (Feb–June 2027)',
          '                   Shell: bash 5.2 / retro-cli'
        ];
      }
    };

    function runCommand(cmd) {
      playBeep(700, 'square', 0.04);
      var output = document.getElementById('shell-output');
      var cleanCmd = (cmd || '').trim().toLowerCase();
      if (!output) return;

      var promptLine = document.createElement('div');
      promptLine.innerHTML = '<span style=\"color: var(--orange-bright); font-weight: bold;\">mirza@kvpjb:~$</span> ' + cleanCmd;
      output.appendChild(promptLine);

      if (cleanCmd === 'clear') {
        output.innerHTML = '';
        return;
      }

      if (commands[cleanCmd]) {
        var lines = commands[cleanCmd]();
        lines.forEach(function(l) {
          var lineDiv = document.createElement('div');
          lineDiv.innerHTML = l;
          output.appendChild(lineDiv);
        });
      } else {
        var errDiv = document.createElement('div');
        errDiv.style.color = '#ef4444';
        errDiv.textContent = 'bash: command not found: ' + cleanCmd + '. Type \\'help\\' for available commands.';
        output.appendChild(errDiv);
      }

      output.scrollTop = output.scrollHeight;
    }

    function submitCommand() {
      var input = document.getElementById('shell-input');
      if (input && input.value) {
        runCommand(input.value);
        input.value = '';
      }
    }

    // Scrollspy for HUD navbar
    function updateScrollspy() {
      var sections = document.querySelectorAll('section');
      var navLinks = document.querySelectorAll('.nav-sec-link');
      var scrollY = window.pageYOffset || document.documentElement.scrollTop;

      sections.forEach(function(current) {
        var sectionHeight = current.offsetHeight;
        var sectionTop = current.offsetTop - 120;
        var sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
              link.classList.add('active');
            }
          });
        }
      });
    }
    window.addEventListener('scroll', updateScrollspy, { passive: true });

    // Safety watchdog for loading screen
    window.addEventListener('load', function() {
      if (window.__WEBGL_LOADED__) {
        var loading = document.getElementById('loading');
        if (loading) {
          loading.style.opacity = '0';
          setTimeout(function() { loading.style.display = 'none'; }, 400);
        }
        var hb = document.getElementById('hero-backup');
        if (hb) hb.style.display = 'none';
      }
      setTimeout(function() {
        var loading = document.getElementById('loading');
        if (loading && loading.style.display !== 'none') {
          loading.style.opacity = '0';
          setTimeout(function() { loading.style.display = 'none'; }, 400);
        }
        if (!window.__WEBGL_LOADED__) {
          var hb = document.getElementById('hero-backup');
          if (hb) hb.style.display = 'flex';
        }
      }, 3500);
    });
  </script>
</body>
</html>
`;

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully generated humanized, polished retro portfolio! Size:', html.length);

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
  <meta name="theme-color" content="#0a0d14" />

  <!-- Open Graph -->
  <meta property="og:title" content="Muhammad Mirza Aqmal Raziq – Portfolio" />
  <meta property="og:description" content="Final year Diploma Teknologi Komputeran at KVPJB (CGPA 3.98 • SKM Level 3 S103882102). Seeking 5-Month IT Internship (Feb–June 2027)." />
  <meta property="og:image" content="./images/mirza-title.png" />
  <meta property="og:type" content="website" />

  <!-- Webfonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- 3D WebGL Workstation Bundle (Interactive Retro Computer) -->
  <script type="module" crossorigin src="./assets/index-UlS8cB25.js"></script>

  <style>
    /* ============================================================ */
    /* WEBFONTS EMBEDDED (Chiptune public-pixel & retro chill)      */
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
    /* DESIGN SYSTEM: RETRO COMPUTER CRT THEME                      */
    /* Inspired by edh.dev / Edward Huang's retro computer site     */
    /* Unified with 3D CRT Phosphor Orange Palette                  */
    /* ============================================================ */
    :root {
      --bg-dark: #0a0d14;
      --bg-card: rgba(14, 19, 30, 0.94);
      --bg-surface: #121826;
      
      --orange: #f97316;
      --orange-bright: #ff7a00;
      --orange-light: #fb923c;
      --orange-dark: #ea580c;
      --orange-glow: rgba(249, 115, 22, 0.35);
      --orange-subtle: rgba(249, 115, 22, 0.15);

      --cream: #fed7aa;
      --slate-200: #e2e8f0;
      --slate-300: #cbd5e1;
      --slate-400: #94a3b8;
      --slate-500: #64748b;

      --font-pixel: 'public-pixel', monospace;
      --font-chill: 'chill', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
      --font-sans: 'Inter', sans-serif;
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
        radial-gradient(circle at 50% 0%, rgba(249, 115, 22, 0.14) 0%, transparent 60%),
        radial-gradient(circle at 85% 30%, rgba(234, 88, 12, 0.08) 0%, transparent 45%),
        linear-gradient(rgba(249, 115, 22, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(249, 115, 22, 0.03) 1px, transparent 1px);
      background-size: 100% 100%, 100% 100%, 32px 32px, 32px 32px;
      color: #f1f5f9;
      font-family: var(--font-chill);
      font-size: 17px;
      line-height: 1.65;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }

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
      color: var(--cream);
      background: #090c12;
      position: fixed;
      top: 0; bottom: 0; left: 0; right: 0;
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
      max-width: 600px;
      width: 100%;
      background: #0e1420;
      border: dashed 2px var(--orange);
      box-shadow: 2px 2px 0px #000, 6px 6px 0px rgba(249, 115, 22, 0.3);
      padding: 24px;
    }
    #loading h2 {
      font-family: var(--font-pixel);
      font-size: 1.1rem;
      color: var(--orange-bright);
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
      background: #06090f;
      border: dashed 1px var(--orange);
      margin: 12px 0;
    }
    #loading-bar-progress {
      position: absolute;
      top: 2px; bottom: 2px; left: 2px; right: 2px;
      background: linear-gradient(90deg, #ea580c, #f97316);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.2s;
    }

    /* ============================================================ */
    /* RETRO HUD NAVBAR (Appears Only on Scroll Below Hero)         */
    /* ============================================================ */
    nav.hud-navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 50;
      padding: 10px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(10, 13, 20, 0.94);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: dashed 2px rgba(249, 115, 22, 0.4);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
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
      border: 1px dashed var(--orange);
      box-shadow: 2px 2px 0px #000;
      background: #111726;
      overflow: hidden;
      flex-shrink: 0;
    }
    .brand-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 85% center;
      image-rendering: pixelated;
    }
    .brand-info {
      display: flex;
      flex-direction: column;
    }
    .brand-title {
      font-family: var(--font-pixel);
      font-size: 11px;
      color: #fff;
      letter-spacing: 0.5px;
    }
    .brand-status {
      font-size: 11px;
      color: var(--orange-light);
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
      background: var(--orange-bright);
      box-shadow: 0 0 8px var(--orange-bright);
      animation: pulse-dot 2s infinite;
    }
    @keyframes pulse-dot {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.85); }
    }

    .nav-sections {
      display: flex;
      gap: 4px;
      align-items: center;
    }
    @media (max-width: 860px) {
      .nav-sections { display: none; }
    }
    .nav-sec-link {
      font-family: var(--font-mono);
      font-size: 12px;
      font-weight: 600;
      color: var(--slate-300);
      text-decoration: none;
      padding: 6px 10px;
      border: 1px solid transparent;
      transition: all 0.2s;
    }
    .nav-sec-link:hover {
      color: #fff;
      background: rgba(249, 115, 22, 0.15);
      border-color: rgba(249, 115, 22, 0.4);
    }

    .nav-actions {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    /* ============================================================ */
    /* EDWARD-STYLE RETRO BUTTONS (.btn)                            */
    /* Tactile block buttons with offset drop shadows               */
    /* ============================================================ */
    .btn {
      position: relative;
      font-family: var(--font-chill);
      font-size: 15px;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 7px 16px;
      background-color: var(--orange-dark);
      color: #fff;
      border: 1px solid var(--orange-bright);
      box-shadow: 3px 3px 0px #000, 5px 5px 0px rgba(249, 115, 22, 0.35);
      cursor: pointer;
      text-decoration: none;
      transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
      user-select: none;
      border-radius: 2px;
    }
    .btn:hover {
      transform: scale(1.05);
      background-color: var(--orange);
      box-shadow: 4px 4px 0px #000, 7px 7px 0px rgba(249, 115, 22, 0.55);
      color: #fff;
    }
    .btn:active {
      transform: scale(0.96);
      box-shadow: 2px 2px 0px #000;
    }

    .btn.secondary {
      background-color: #121826;
      color: var(--cream);
      border: 1px dashed rgba(249, 115, 22, 0.5);
      box-shadow: 3px 3px 0px #000, 5px 5px 0px rgba(0, 0, 0, 0.4);
    }
    .btn.secondary:hover {
      background-color: #1a2236;
      border-color: var(--orange-bright);
      box-shadow: 4px 4px 0px #000, 7px 7px 0px rgba(249, 115, 22, 0.3);
      color: #fff;
    }

    .btn.nav-small {
      font-size: 13px;
      padding: 5px 12px;
      font-family: var(--font-mono);
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
      width: clamp(0px, 94vw, 760px);
      margin: auto;
      z-index: 0;
      padding: 90px 16px 40px;
      text-align: center;
    }
    .hero-offline-card {
      background: var(--bg-card);
      border: dashed 2px var(--orange);
      box-shadow: 3px 3px 0px #000, 7px 7px 0px rgba(249, 115, 22, 0.3);
      padding: 32px;
      max-width: 680px;
    }

    /* ============================================================ */
    /* EDITORIAL CONTENT CONTAINER & SECTIONS                       */
    /* Edward's focused reading width + dashed dividers             */
    /* ============================================================ */
    main {
      position: relative;
      z-index: 5;
      margin-top: 185vh;
      padding: 40px 16px 120px;
      width: clamp(0px, 94vw, 760px);
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }

    section {
      padding-bottom: 72px;
      margin-bottom: 72px;
      position: relative;
      scroll-margin-top: 80px;
      text-align: left;
    }
    section::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: clamp(0px, 92vw, 720px);
      border-bottom: dashed 2px rgba(249, 115, 22, 0.38);
    }
    section:last-of-type::after {
      display: none;
    }

    /* PIXEL BADGE HEADINGS (Edward's signature style) */
    .retro-badge-title {
      display: inline-block;
      font-family: var(--font-pixel);
      font-size: 1.3rem;
      background-color: var(--orange-dark);
      color: #fff;
      padding: 10px 20px 6px;
      border: 1px dashed var(--orange-bright);
      box-shadow: 3px 3px 0px #000, 6px 6px 0px rgba(249, 115, 22, 0.35);
      margin-bottom: 14px;
      letter-spacing: 0.5px;
    }
    @media (max-width: 600px) {
      .retro-badge-title {
        font-size: 1.05rem;
        padding: 8px 14px 5px;
      }
    }

    .retro-section-subtitle {
      color: var(--slate-300);
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 24px;
    }

    /* RETRO CARD CONTAINER */
    .retro-card {
      background: var(--bg-card);
      border: dashed 1px rgba(249, 115, 22, 0.45);
      box-shadow: 2px 2px 0px #000, 6px 6px 0px rgba(249, 115, 22, 0.22);
      border-radius: 4px;
      padding: 26px;
      margin-bottom: 24px;
      position: relative;
      transition: all 0.2s ease;
    }
    .retro-card:hover {
      border-color: var(--orange-bright);
      box-shadow: 3px 3px 0px #000, 8px 8px 0px rgba(249, 115, 22, 0.35);
    }

    /* ============================================================ */
    /* SECTION 1: CANDIDATE PROFILE & HUMAN STORY                   */
    /* ============================================================ */
    .profile-layout {
      display: flex;
      gap: 24px;
      align-items: flex-start;
      margin-bottom: 20px;
    }
    @media (max-width: 640px) {
      .profile-layout {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    }
    .avatar-frame {
      width: 130px;
      height: 130px;
      border: 1px dashed var(--orange);
      box-shadow: 2px 2px 0px #000, 5px 5px 0px rgba(249, 115, 22, 0.3);
      background: #000;
      overflow: hidden;
      flex-shrink: 0;
      position: relative;
    }
    .avatar-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 85% center;
      image-rendering: pixelated;
    }
    .avatar-frame::after {
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
    .profile-details h3 {
      font-family: var(--font-pixel);
      font-size: 1.15rem;
      color: #fff;
      margin-bottom: 6px;
    }
    .profile-details .subhead {
      font-family: var(--font-mono);
      font-size: 13.5px;
      color: var(--orange-light);
      font-weight: 600;
      margin-bottom: 12px;
    }
    .profile-details p {
      color: var(--slate-300);
      font-size: 15.5px;
      line-height: 1.65;
      margin-bottom: 12px;
    }

    /* 4 Tactile Retro Stat Boxes */
    .kpi-retro-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      margin: 20px 0;
    }
    @media (max-width: 700px) {
      .kpi-retro-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 440px) {
      .kpi-retro-grid { grid-template-columns: 1fr; }
    }
    .kpi-retro-box {
      background: #0d131f;
      border: dashed 1px rgba(249, 115, 22, 0.4);
      box-shadow: 2px 2px 0px #000, 4px 4px 0px rgba(249, 115, 22, 0.2);
      padding: 16px 12px;
      text-align: center;
      transition: all 0.2s ease;
    }
    .kpi-retro-box:hover {
      border-color: var(--orange-bright);
      transform: translateY(-2px);
      box-shadow: 2px 2px 0px #000, 6px 6px 0px rgba(249, 115, 22, 0.35);
    }
    .kpi-retro-num {
      font-family: var(--font-pixel);
      font-size: 1.45rem;
      color: var(--orange-bright);
      margin-bottom: 4px;
    }
    .kpi-retro-label {
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 700;
      color: var(--cream);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .kpi-retro-sub {
      font-size: 11px;
      color: var(--slate-400);
      margin-top: 4px;
    }

    /* Retro Terminal Readout Box */
    .retro-terminal-box {
      background: #060910;
      border: dashed 1px rgba(249, 115, 22, 0.45);
      box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.8), 2px 2px 0px #000, 4px 4px 0px rgba(249, 115, 22, 0.15);
      padding: 18px;
      font-family: var(--font-mono);
      font-size: 13px;
      line-height: 1.75;
      margin: 20px 0;
      position: relative;
    }
    .retro-terminal-box::before {
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
    .rt-prompt { color: var(--orange-bright); font-weight: bold; }
    .rt-key { color: var(--cream); font-weight: 600; }
    .rt-val { color: var(--slate-300); }
    .rt-cursor {
      display: inline-block;
      width: 7px;
      height: 14px;
      background: var(--orange-bright);
      margin-left: 4px;
      vertical-align: middle;
      animation: blink 1s infinite;
    }
    @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

    /* ============================================================ */
    /* SECTION 2: PROJECTS (Story-driven, humanized)                */
    /* ============================================================ */
    .project-header-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 8px;
    }
    .project-badge-tag {
      font-family: var(--font-pixel);
      font-size: 11px;
      color: var(--orange-bright);
      background: rgba(249, 115, 22, 0.12);
      border: 1px dashed var(--orange);
      padding: 3px 8px;
    }
    .project-year-badge {
      font-family: var(--font-mono);
      font-size: 12px;
      color: var(--slate-400);
      background: #0d131f;
      padding: 2px 8px;
      border: 1px solid rgba(148, 163, 184, 0.2);
    }
    .project-main-title {
      font-family: var(--font-pixel);
      font-size: 1.25rem;
      color: #fff;
      margin: 8px 0 12px;
    }
    .project-story-p {
      color: var(--slate-300);
      font-size: 15.5px;
      line-height: 1.65;
      margin-bottom: 12px;
    }
    .project-story-p strong {
      color: var(--cream);
    }

    /* Dashed Skills / Tags (Edward Huang style) */
    .retro-tags-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 14px 0;
      list-style: none;
    }
    .retro-tags-list li {
      display: inline-block;
      padding: 4px 10px;
      border: dashed 1px var(--orange);
      box-shadow: 1px 1px 0px #000, 3px 3px 0px rgba(249, 115, 22, 0.2);
      background: #0d1422;
      color: var(--cream);
      font-family: var(--font-mono);
      font-size: 12px;
    }

    .retro-image-frame {
      border: dashed 1px var(--orange);
      box-shadow: 2px 2px 0px #000, 5px 5px 0px rgba(249, 115, 22, 0.25);
      background: #05080e;
      overflow: hidden;
      margin: 18px 0;
      position: relative;
    }
    .retro-image-frame img {
      width: 100%;
      height: auto;
      display: block;
      transition: transform 0.3s ease;
    }
    .retro-image-frame:hover img {
      transform: scale(1.02);
    }

    .retro-pipeline-box {
      background: #070b12;
      border: dashed 1px rgba(249, 115, 22, 0.35);
      padding: 10px 14px;
      font-family: var(--font-mono);
      font-size: 12px;
      color: var(--slate-300);
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      margin: 12px 0;
    }
    .pipe-node {
      background: rgba(249, 115, 22, 0.15);
      border: 1px dashed var(--orange);
      color: var(--cream);
      padding: 2px 8px;
      font-weight: 600;
    }
    .pipe-arrow {
      color: var(--orange-bright);
      font-weight: bold;
    }

    /* Collapsible Specs */
    .collapse-toggle-btn {
      background: #0e1524;
      border: dashed 1px rgba(249, 115, 22, 0.45);
      box-shadow: 2px 2px 0px #000, 4px 4px 0px rgba(0, 0, 0, 0.4);
      color: var(--cream);
      font-family: var(--font-mono);
      font-size: 12.5px;
      padding: 7px 16px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;
    }
    .collapse-toggle-btn:hover {
      background: #182236;
      border-color: var(--orange-bright);
      color: #fff;
    }
    .collapse-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.35s ease-out, opacity 0.3s ease-out;
      opacity: 0;
    }
    .collapse-content.open {
      max-height: 600px;
      opacity: 1;
      margin-top: 12px;
      padding: 16px;
      background: #080c14;
      border: dashed 1px rgba(249, 115, 22, 0.3);
    }
    .collapse-list {
      list-style: none;
      font-size: 14px;
      line-height: 1.7;
      color: var(--slate-300);
    }
    .collapse-list li {
      margin-bottom: 6px;
    }
    .collapse-list strong {
      color: var(--orange-bright);
      font-family: var(--font-mono);
    }

    /* ============================================================ */
    /* SECTION 3: SKILLS (Categorized dashed badges)                */
    /* ============================================================ */
    .skills-group {
      margin-bottom: 22px;
    }
    .skills-group-title {
      font-family: var(--font-pixel);
      font-size: 0.95rem;
      color: var(--orange-bright);
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .skills-pills-wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .skills-pills-wrap span {
      display: inline-block;
      padding: 6px 12px;
      border: dashed 1px rgba(249, 115, 22, 0.5);
      box-shadow: 2px 2px 0px #000, 4px 4px 0px rgba(249, 115, 22, 0.2);
      background: #0e1422;
      color: var(--cream);
      font-family: var(--font-mono);
      font-size: 13.5px;
      transition: all 0.2s ease;
    }
    .skills-pills-wrap span:hover {
      border-color: var(--orange-bright);
      transform: translateY(-2px);
      box-shadow: 2px 2px 0px #000, 5px 5px 0px rgba(249, 115, 22, 0.4);
      color: #fff;
    }

    /* ============================================================ */
    /* SECTION 4: AWARDS & TROPHIES                                 */
    /* ============================================================ */
    .trophy-grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-bottom: 24px;
    }
    @media (max-width: 720px) {
      .trophy-grid-3 { grid-template-columns: 1fr; }
    }
    .trophy-tile {
      background: #0d1420;
      border: dashed 1px rgba(249, 115, 22, 0.4);
      box-shadow: 2px 2px 0px #000, 5px 5px 0px rgba(249, 115, 22, 0.2);
      padding: 16px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.2s ease;
    }
    .trophy-tile:hover {
      border-color: var(--orange-bright);
      transform: translateY(-3px);
      box-shadow: 2px 2px 0px #000, 7px 7px 0px rgba(249, 115, 22, 0.35);
    }
    .trophy-badge-pill {
      display: inline-block;
      font-family: var(--font-pixel);
      font-size: 10px;
      padding: 4px 8px;
      background: rgba(249, 115, 22, 0.15);
      border: 1px dashed var(--orange);
      color: var(--cream);
      margin-bottom: 10px;
    }
    .trophy-photo-frame {
      width: 100%;
      aspect-ratio: 4/3;
      border: 1px solid rgba(148, 163, 184, 0.2);
      overflow: hidden;
      margin-bottom: 12px;
      background: #000;
    }
    .trophy-photo-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s;
    }
    .trophy-photo-frame:hover img {
      transform: scale(1.05);
    }
    .trophy-title-text {
      font-family: var(--font-pixel);
      font-size: 0.95rem;
      color: #fff;
      margin-bottom: 6px;
    }
    .trophy-desc-text {
      font-size: 13px;
      color: var(--slate-400);
      line-height: 1.5;
    }

    /* Government Credential Banner */
    .cert-banner {
      background: #0d131f;
      border: dashed 1px var(--orange);
      box-shadow: 2px 2px 0px #000, 6px 6px 0px rgba(249, 115, 22, 0.25);
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }
    .cert-badge-tag {
      font-family: var(--font-pixel);
      font-size: 10.5px;
      color: var(--orange-bright);
      margin-bottom: 6px;
    }
    .cert-title-big {
      font-family: var(--font-pixel);
      font-size: 1.1rem;
      color: #fff;
      margin-bottom: 4px;
    }
    .cert-meta-info {
      font-family: var(--font-mono);
      font-size: 13px;
      color: var(--slate-300);
    }

    /* ============================================================ */
    /* SECTION 5: INTERACTIVE UNIX SHELL                            */
    /* ============================================================ */
    .terminal-container {
      background: #05080e;
      border: dashed 1px var(--orange);
      box-shadow: 2px 2px 0px #000, 6px 6px 0px rgba(249, 115, 22, 0.2);
      overflow: hidden;
    }
    .terminal-topbar {
      background: #0d131f;
      border-bottom: dashed 1px rgba(249, 115, 22, 0.3);
      padding: 10px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .terminal-dots {
      display: flex;
      gap: 6px;
    }
    .term-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    .term-dot.red { background: #ef4444; }
    .term-dot.yellow { background: #ff7a00; }
    .term-dot.green { background: #fb923c; }
    .terminal-body {
      padding: 18px;
      font-family: var(--font-mono);
      font-size: 13px;
      line-height: 1.75;
      min-height: 160px;
      max-height: 320px;
      overflow-y: auto;
    }
    .terminal-input-row {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
      background: #090e18;
      border-top: dashed 1px rgba(249, 115, 22, 0.25);
    }
    .term-prompt {
      color: var(--orange-bright);
      font-weight: bold;
    }
    .term-input {
      flex: 1;
      background: transparent;
      border: none;
      outline: none;
      color: #fff;
      font-family: var(--font-mono);
      font-size: 13px;
    }
    .terminal-quick-pills {
      padding: 10px 16px;
      background: #060910;
      border-top: 1px solid rgba(249, 115, 22, 0.15);
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
      align-items: center;
    }
    .term-pill {
      background: #0f1726;
      border: dashed 1px rgba(249, 115, 22, 0.4);
      color: var(--cream);
      font-family: var(--font-mono);
      font-size: 11px;
      padding: 3px 9px;
      cursor: pointer;
      transition: all 0.15s;
    }
    .term-pill:hover {
      background: var(--orange-dark);
      border-color: var(--orange-bright);
      color: #fff;
    }

    /* ============================================================ */
    /* SECTION 6: CONTACT & OJT INQUIRIES                           */
    /* ============================================================ */
    .contact-tiles-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
      margin: 20px 0;
    }
    @media (max-width: 580px) {
      .contact-tiles-grid { grid-template-columns: 1fr; }
    }
    .contact-tile {
      background: #0d1420;
      border: dashed 1px rgba(249, 115, 22, 0.45);
      box-shadow: 2px 2px 0px #000, 4px 4px 0px rgba(249, 115, 22, 0.2);
      padding: 20px 18px;
      text-align: center;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .contact-tile:hover {
      border-color: var(--orange-bright);
      transform: translateY(-2px);
      box-shadow: 2px 2px 0px #000, 6px 6px 0px rgba(249, 115, 22, 0.4);
      background: #141c2c;
    }
    .contact-svg-icon {
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .contact-label-small {
      font-family: var(--font-mono);
      font-size: 11px;
      color: var(--orange-light);
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .contact-val-main {
      font-family: var(--font-mono);
      font-size: 14px;
      font-weight: 700;
      color: #fff;
      word-break: break-all;
    }
    .contact-hint-sub {
      font-size: 11px;
      color: var(--slate-400);
      margin-top: 4px;
      font-family: var(--font-mono);
    }

    /* Toast Notification */
    #toast {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #0e1422;
      color: var(--orange-bright);
      border: dashed 1px var(--orange-bright);
      box-shadow: 3px 3px 0px #000, 6px 6px 0px rgba(249, 115, 22, 0.4);
      padding: 10px 20px;
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
      border-top: dashed 2px rgba(249, 115, 22, 0.35);
      padding: 40px 16px;
      text-align: center;
      color: var(--slate-400);
      font-size: 13.5px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: clamp(0px, 94vw, 760px);
      margin: 0 auto;
    }
    footer a { color: var(--cream); text-decoration: none; }
    footer a:hover { color: var(--orange-bright); }
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
        <span class="status-dot"></span> OPEN FOR 5-MONTH OJT (FEB–JUN 2027)
      </div>
      <h1 style="font-family: var(--font-pixel); font-size: 1.4rem; color: #fff; margin-bottom: 8px;">Muhammad Mirza Aqmal Raziq</h1>
      <div style="font-family: var(--font-mono); font-size: 14px; color: var(--orange-bright); margin-bottom: 14px;">
        Diploma Teknologi Komputeran • Kolej Vokasional Perdagangan JB (KVPJB)
      </div>
      <p style="color: var(--slate-300); font-size: 15.5px; max-width: 540px; margin: 0 auto 20px; line-height: 1.6;">
        Final-year student specializing in IoT microcontrollers (ESP32-CAM), FAISS vector search, custom YOLOv8 computer vision, and Cisco networking.
      </p>
      <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
        <a class="btn" href="#about">Explore Candidate Dossier ↓</a>
        <a class="btn secondary" href="./sijil_skm3_jpk_official.pdf" target="_blank">📄 Official SKM 3 PDF</a>
      </div>
    </div>
  </div>

  <!-- Top Retro HUD Command Bar (Slides in on scroll) -->
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
      <a class="nav-sec-link" href="#skills">Skills</a>
      <a class="nav-sec-link" href="#awards">Honors</a>
      <a class="nav-sec-link" href="#terminal">Terminal</a>
      <a class="nav-sec-link" href="#contact">Contact</a>
    </div>

    <!-- Quick Action Buttons -->
    <div class="nav-actions">
      <button class="btn nav-small secondary" onclick="toggleAudio()" id="sound-btn" title="Toggle Tactile Audio">
        🔊 Sound: ON
      </button>
      <a class="btn nav-small secondary" href="https://www.linkedin.com/in/aqmal-raziq-3975b0346/" target="_blank">
        LinkedIn
      </a>
      <a class="btn nav-small secondary" href="https://github.com/mircrtierr" target="_blank">
        GitHub
      </a>
      <a class="btn nav-small" href="./sijil_skm3_jpk_official.pdf" target="_blank" title="Download Verified SKM 3 Digital PDF">
        📄 SKM 3 PDF
      </a>
    </div>
  </nav>

  <!-- Editorial Main Content Container (Centered Edward-style width) -->
  <main>
    <!-- ============================================== -->
    <!-- SECTION 1: ABOUT ME & CANDIDATE STORY          -->
    <!-- ============================================== -->
    <section id="about">
      <div style="text-align: center; margin-bottom: 20px;">
        <h2 class="retro-badge-title">HI THERE, I'M MIRZA</h2>
      </div>

      <div class="retro-card">
        <div class="profile-layout">
          <div class="avatar-frame">
            <img src="./images/mirza-title.png" alt="Muhammad Mirza Aqmal Raziq" />
          </div>
          <div class="profile-details">
            <h3>Muhammad Mirza Aqmal Raziq</h3>
            <div class="subhead">Diploma Teknologi Komputeran • KVPJB (Pasir Gudang, Johor)</div>
            <p>
              Hi, I'm Mirza. I am a final-year Computer Technology student at <strong>Kolej Vokasional Perdagangan Johor Bahru (KVPJB)</strong>. Ever since I started my vocational journey, I have loved getting my hands dirty with technology — whether that is crimping network cables in the lab, configuring Cisco routers, or hooking up cheap microcontrollers to Python scripts to build things that actually work in real life.
            </p>
            <p>
              I take pride in doing quality work: I maintain a cumulative CGPA of <strong>3.98 / 4.00</strong> and earned my official <strong>Sijil Kemahiran Malaysia (SKM) Tahap 3 accreditation (Cert ID: S103882102)</strong> in IT System Support from JPK.
            </p>
          </div>
        </div>

        <div style="background: rgba(249, 115, 22, 0.08); border: 1px dashed var(--orange); padding: 12px 16px; margin: 16px 0; font-size: 15px; color: var(--cream);">
          🎯 <strong>Current Objective:</strong> Seeking a <strong>5-Month On-The-Job Training (OJT) IT / Software Internship from February to June 2027</strong>. Eager to contribute to a real engineering team, solve daily challenges, and learn from experienced mentors.
        </div>

        <!-- 4 Grand KPI Stats -->
        <div class="kpi-retro-grid">
          <div class="kpi-retro-box">
            <div class="kpi-retro-num">3.98</div>
            <div class="kpi-retro-label">Cumulative CGPA</div>
            <div class="kpi-retro-sub">Academic Excellence</div>
          </div>

          <div class="kpi-retro-box">
            <div class="kpi-retro-num">SKM 3</div>
            <div class="kpi-retro-label">JPK Certified</div>
            <div class="kpi-retro-sub">ID: S103882102</div>
          </div>

          <div class="kpi-retro-box">
            <div class="kpi-retro-num">5 MOS</div>
            <div class="kpi-retro-label">OJT Internship</div>
            <div class="kpi-retro-sub">Feb – June 2027</div>
          </div>

          <div class="kpi-retro-box">
            <div class="kpi-retro-num">TOP 5</div>
            <div class="kpi-retro-label">National Podium</div>
            <div class="kpi-retro-sub">3x Competitions</div>
          </div>
        </div>

        <!-- Diagnostic Terminal Readout -->
        <div class="retro-terminal-box">
          <div><span class="rt-prompt">&gt; mirza.status --summary</span></div>
          <div><span class="rt-key">[CANDIDATE]</span> <span class="rt-val">Muhammad Mirza Aqmal Raziq bin Mirza Affzard</span></div>
          <div><span class="rt-key">[INSTITUTION]</span> <span class="rt-val">Kolej Vokasional Perdagangan Johor Bahru (KVPJB), Pasir Gudang, Johor</span></div>
          <div><span class="rt-key">[ACCREDITATION]</span> <span class="rt-val">SKM Tahap 3 (IT System Support) • JPK Kementerian Sumber Manusia</span></div>
          <div><span class="rt-key">[INTERNSHIP]</span> <span class="rt-val" style="color: var(--orange-bright); font-weight: bold;">Available for 5-Month OJT (February – June 2027)</span></div>
          <div><span class="rt-prompt">&gt; status: ready_for_interview</span><span class="rt-cursor"></span></div>
        </div>

        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 20px;">
          <a class="btn" href="./sijil_skm3_jpk_official.pdf" target="_blank">
            📄 View Official SKM 3 Certificate PDF
          </a>
          <a class="btn secondary" href="./Resume_Muhammad_Mirza_Aqmal_Raziq.pdf" target="_blank">
            📥 Download Resume PDF
          </a>
          <a class="btn secondary" href="#contact">
            ✉ Contact Mirza
          </a>
        </div>
      </div>
    </section>

    <!-- ============================================== -->
    <!-- SECTION 2: FEATURED PROJECTS (Human Builder Stories) -->
    <!-- ============================================== -->
    <section id="projects">
      <div style="text-align: center; margin-bottom: 20px;">
        <h2 class="retro-badge-title">FEATURED PROJECTS</h2>
        <div class="retro-section-subtitle">
          Real projects I built to solve problems at college, with code, wiring, and lessons learned.
        </div>
      </div>

      <!-- Project 1: SmartAttend KVPJB -->
      <div class="retro-card">
        <div class="project-header-row">
          <span class="project-badge-tag">[ PROJECT_01 ]</span>
          <span class="project-year-badge">2024 – 2025</span>
        </div>
        <h3 class="project-main-title">SmartAttend KVPJB — Facial Recognition Attendance</h3>
        
        <p class="project-story-p">
          <strong>Why I built this:</strong> Every morning at our college, lecturers had to pass around physical paper sheets for roll-call. It wasted 10 to 15 minutes of class time, paper got misplaced, and students sometimes signed for their absent friends. Commercial facial recognition turnstiles cost thousands of ringgit that student departments don't have. I wanted to prove we could build a fast, reliable attendance station using accessible, budget-friendly hardware.
        </p>
        <p class="project-story-p">
          <strong>How it works:</strong> An affordable RM35 ESP32-CAM module mounted at the classroom entrance captures video frames and streams them over our campus Wi-Fi to a local Python server. The server runs InsightFace to extract 512-dimensional facial embeddings and queries a FAISS vector index. The lookup matches against our student database in <strong>less than 250 milliseconds</strong>! Once verified, it logs the attendance timestamp into SQLite and plays a friendly confirmation chime.
        </p>

        <div class="retro-pipeline-box">
          <span style="color: var(--orange-bright); font-weight: bold;">Data Flow:</span>
          <span class="pipe-node">ESP32-CAM Node</span>
          <span class="pipe-arrow">➔</span>
          <span class="pipe-node">LAN UDP Stream</span>
          <span class="pipe-arrow">➔</span>
          <span class="pipe-node">InsightFace (ArcFace 512D)</span>
          <span class="pipe-arrow">➔</span>
          <span class="pipe-node">FAISS Vector Index (&lt;250ms)</span>
          <span class="pipe-arrow">➔</span>
          <span class="pipe-node">SQLite DB</span>
        </div>

        <ul class="retro-tags-list">
          <li>ESP32-CAM Node</li>
          <li>Python 3</li>
          <li>FAISS 512D Index</li>
          <li>InsightFace</li>
          <li>SQLite</li>
          <li>Sub-250ms Response</li>
        </ul>

        <div class="retro-image-frame">
          <img src="./images/smartattend_dashboard.jpg" alt="SmartAttend Biometric System Interface" loading="lazy" />
        </div>

        <button class="collapse-toggle-btn" onclick="toggleAccordion(this)">
          [+] View Technical Build Details
        </button>
        <div class="collapse-content">
          <ul class="collapse-list">
            <li><strong>• Edge Camera Hardware:</strong> ESP32-CAM with OV2640 sensor streaming JPEG frames over local LAN via socket connection. Offloading heavy neural processing to Python prevented microcontroller overheating.</li>
            <li><strong>• Vector Search Architecture:</strong> Built on FAISS <code>IndexFlatL2</code> querying 500+ student embeddings with a Euclidean distance threshold of 0.42 to prevent false positives.</li>
            <li><strong>• Storage & Verification:</strong> Transactional SQLite logging with duplicate scan suppression within 60-second windows so students don't get logged twice.</li>
          </ul>
        </div>
      </div>

      <!-- Project 2: YOLO Custom Object Classifier -->
      <div class="retro-card">
        <div class="project-header-row">
          <span class="project-badge-tag">[ PROJECT_02 ]</span>
          <span class="project-year-badge">2024</span>
        </div>
        <h3 class="project-main-title">Lab Equipment Vision Tracker — YOLOv8 Custom Model</h3>
        
        <p class="project-story-p">
          <strong>Why I built this:</strong> In our vocational computer hardware lab, small tools like digital multimeters, LAN cable testers, and RJ-45 crimping pliers frequently went missing after practical exams. Lecturers had to spend extra time inspecting every workstation rack before letting students leave.
        </p>
        <p class="project-story-p">
          <strong>How it works:</strong> I gathered and hand-labelled <strong>1,200 photos of lab tools</strong> under different lighting conditions and orientations. I trained a custom YOLOv8 model using Google Colab's free GPU tier (babysitting the notebook late at night so the runtime would not disconnect!). The finished model runs on a standard laptop webcam, detecting equipment with <strong>92.4% accuracy at 18ms per frame</strong> and immediately flagging any missing tool slot.
        </p>

        <div class="retro-pipeline-box">
          <span style="color: var(--orange-bright); font-weight: bold;">Performance:</span>
          <span class="pipe-node">92.4% mAP@0.5</span>
          <span class="pipe-arrow">|</span>
          <span class="pipe-node">18ms Latency</span>
          <span class="pipe-arrow">|</span>
          <span class="pipe-node">Tesla T4 GPU (100 Epochs)</span>
          <span class="pipe-arrow">|</span>
          <span class="pipe-node">1,200 Annotated Photos</span>
        </div>

        <ul class="retro-tags-list">
          <li>YOLOv8</li>
          <li>Google Colab GPU</li>
          <li>PyTorch</li>
          <li>OpenCV</li>
          <li>Python</li>
          <li>Real-Time Video Inference</li>
        </ul>

        <div class="retro-image-frame">
          <img src="./images/yolo_colab_detection.jpg" alt="YOLO Custom Detection on Google Colab" loading="lazy" />
        </div>

        <button class="collapse-toggle-btn" onclick="toggleAccordion(this)">
          [+] View Training &amp; Dataset Specs
        </button>
        <div class="collapse-content">
          <ul class="collapse-list">
            <li><strong>• Dataset Preparation:</strong> 1,200 annotated images with data augmentations (mosaic blending, random brightness shifts, and rotational flips) to handle reflective metal lab tables.</li>
            <li><strong>• Training Details:</strong> Ultralytics YOLOv8 architecture trained over 100 epochs on a Tesla T4 GPU instance, optimized for edge inference on low-power workstations.</li>
          </ul>
        </div>
      </div>

      <!-- Project 3: Beyond The Mic Podcast -->
      <div class="retro-card">
        <div class="project-header-row">
          <span class="project-badge-tag">[ PROJECT_03 ]</span>
          <span class="project-year-badge">2026 (National Final)</span>
        </div>
        <h3 class="project-main-title">Beyond The Mic Podcast — Audio Engineering &amp; Mastering</h3>
        
        <p class="project-story-p">
          <strong>The experience:</strong> Representing the state of Johor and KVPJB at the National Finals of Petah KPM 2026 at the Putrajaya International Convention Centre (PICC) was one of the proudest moments of my vocational journey. We competed against top student production teams from across Malaysia.
        </p>
        <p class="project-story-p">
          <strong>My technical role:</strong> In addition to co-hosting the podcast, I was in charge of our live audio engineering and broadcast mastering. A podcast can have great discussion, but if the audio clips or has hollow hall echo, listeners tune out. I managed dual dynamic XLR microphones, dialed in real-time gain staging, configured downward expansion to kill convention hall rumble, and mastered the broadcast track to the international <strong>EBU R128 (-14 LUFS) broadcast standard</strong>. We secured <strong>5th Place Nationally (Kelima Kebangsaan)</strong>!
        </p>

        <div class="retro-pipeline-box">
          <span style="color: var(--orange-bright); font-weight: bold;">Broadcast Specs:</span>
          <span class="pipe-node">EBU R128 (-14 LUFS)</span>
          <span class="pipe-arrow">|</span>
          <span class="pipe-node">Dual Dynamic XLR</span>
          <span class="pipe-arrow">|</span>
          <span class="pipe-node">PICC Putrajaya</span>
          <span class="pipe-arrow">|</span>
          <span class="pipe-node">5th Place Malaysia</span>
        </div>

        <ul class="retro-tags-list">
          <li>Live Broadcast Audio</li>
          <li>Acoustic Noise Suppression</li>
          <li>EBU R128 Loudness Standard</li>
          <li>PICC Putrajaya</li>
          <li>Petah KPM 2026</li>
        </ul>

        <div class="retro-image-frame" style="max-width: 500px; margin: 16px auto;">
          <img src="./images/trophy_petah_madani_podcast.jpg" alt="Petah KPM 2026 National Trophy" loading="lazy" />
        </div>

        <button class="collapse-toggle-btn" onclick="toggleAccordion(this)">
          [+] View Audio Production Details
        </button>
        <div class="collapse-content">
          <ul class="collapse-list">
            <li><strong>• Audio Chain:</strong> Dual balanced XLR dynamic microphones with low-noise preamps, shock absorption mounts, and dedicated pop filtration.</li>
            <li><strong>• Real-Time Processing:</strong> Phase-aligned dynamic EQ, multiband downward expansion, and transparent brickwall limiting with a -1.0 dBTP ceiling.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ============================================== -->
    <!-- SECTION 3: SKILLS MATRIX (Edward Dashed Badges) -->
    <!-- ============================================== -->
    <section id="skills">
      <div style="text-align: center; margin-bottom: 20px;">
        <h2 class="retro-badge-title">SKILLS &amp; TOOLS</h2>
        <div class="retro-section-subtitle">
          Technologies, hardware, and tools I actually use and have hands-on experience with.
        </div>
      </div>

      <div class="retro-card">
        <div class="skills-group">
          <div class="skills-group-title">⚡ EMBEDDED SYSTEMS &amp; IOT HARDWARE</div>
          <div class="skills-pills-wrap">
            <span>ESP32 &amp; ESP32-CAM</span>
            <span>Arduino C/C++</span>
            <span>Sensor Interfacing (PIR, Ultrasonic, DHT)</span>
            <span>UART, I2C &amp; SPI Buses</span>
            <span>Relay &amp; Actuator Control</span>
            <span>IoT Socket UDP Streaming</span>
          </div>
        </div>

        <div class="skills-group">
          <div class="skills-group-title">🎯 COMPUTER VISION &amp; MACHINE LEARNING</div>
          <div class="skills-pills-wrap">
            <span>Python 3 (Primary Language)</span>
            <span>FAISS 512D Vector Embeddings</span>
            <span>YOLOv8 Custom Object Detection</span>
            <span>InsightFace (ArcFace ResNet-50)</span>
            <span>OpenCV Vision Processing</span>
            <span>PyTorch Basics</span>
            <span>Google Colab Cloud GPU</span>
          </div>
        </div>

        <div class="skills-group">
          <div class="skills-group-title">🛠 IT SUPPORT &amp; CISCO NETWORKING (SKM 3)</div>
          <div class="skills-pills-wrap">
            <span>SKM Tahap 3: IT System Support (S103882102)</span>
            <span>Cisco CCNA: Routing &amp; Switching</span>
            <span>Cisco IT Essentials: PC Hardware Repair</span>
            <span>LAN Cabling (Cat5e / Cat6 RJ-45 Crimping)</span>
            <span>VLAN &amp; Subnet Configuration</span>
            <span>OS Deployment &amp; Recovery</span>
            <span>Linux CLI &amp; Bash Scripting</span>
          </div>
        </div>

        <div class="skills-group" style="margin-bottom: 0;">
          <div class="skills-group-title">💻 SOFTWARE &amp; MEDIA TOOLS</div>
          <div class="skills-pills-wrap">
            <span>JavaScript &amp; TypeScript</span>
            <span>HTML5 &amp; CSS3 Responsive Design</span>
            <span>SQLite &amp; MySQL Relational DB</span>
            <span>Git &amp; GitHub Version Control</span>
            <span>VS Code</span>
            <span>DAW Audio Mastering (EBU R128)</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================== -->
    <!-- SECTION 4: PODIUM HONORS & AWARDS              -->
    <!-- ============================================== -->
    <section id="awards">
      <div style="text-align: center; margin-bottom: 20px;">
        <h2 class="retro-badge-title">PODIUM HONORS &amp; AWARDS</h2>
        <div class="retro-section-subtitle">
          Recognitions won representing KVPJB and Johor at state and national competitive events.
        </div>
      </div>

      <div class="trophy-grid-3">
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

      <!-- Verified Government Accreditation Banner -->
      <div class="cert-banner">
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
      <div style="text-align: center; margin-bottom: 20px;">
        <h2 class="retro-badge-title">TERMINAL CONSOLE</h2>
        <div class="retro-section-subtitle">
          Type commands or click quick pills below to query system info and credentials.
        </div>
      </div>

      <div class="terminal-container">
        <div class="terminal-topbar">
          <div class="terminal-dots">
            <span class="term-dot red"></span>
            <span class="term-dot yellow"></span>
            <span class="term-dot green"></span>
            <span style="font-family: var(--font-mono); font-size: 11.5px; color: var(--cream); margin-left: 8px;">mirza@kvpjb:~$</span>
          </div>
          <span style="font-family: var(--font-mono); font-size: 11px; color: var(--slate-400);">RETRO_BASH_V1.0</span>
        </div>

        <div class="terminal-body" id="shell-output">
          <div style="color: var(--slate-400); margin-bottom: 8px;">
            *** MIRZA-OS v1.0 LTS (COMMODORE WORKSTATION EDITION) ***<br />
            Type <span style="color: var(--orange-bright); font-weight: bold; cursor: pointer; text-decoration: underline;" onclick="runCommand('help')">help</span> or <span style="color: var(--orange-bright); font-weight: bold; cursor: pointer; text-decoration: underline;" onclick="runCommand('neofetch')">neofetch</span> to start.
          </div>
        </div>

        <form class="terminal-input-row" onsubmit="event.preventDefault(); submitCommand();">
          <span class="term-prompt">mirza@kvpjb:~$</span>
          <input type="text" id="shell-input" class="term-input" autocomplete="off" spellcheck="false" placeholder="type 'help', 'about', 'neofetch'..." />
        </form>

        <div class="terminal-quick-pills">
          <span style="font-size: 11px; color: var(--slate-400); font-family: var(--font-mono);">Quick Commands:</span>
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
      <div style="text-align: center; margin-bottom: 20px;">
        <h2 class="retro-badge-title">GET IN TOUCH</h2>
        <div class="retro-section-subtitle">
          Actively available for technical interviews regarding the <strong>5-Month IT / Software Internship (February – June 2027)</strong>.
        </div>
      </div>

      <div class="contact-tiles-grid">
        <div class="contact-tile" onclick="copyText('mirzaaqmal22@gmail.com', 'Email address')">
          <div class="contact-svg-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--orange-bright)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--orange-bright)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <div class="contact-label-small">PHONE / WHATSAPP</div>
          <div class="contact-val-main">013-5788399</div>
          <div class="contact-hint-sub">[Click to Copy]</div>
        </div>

        <a class="contact-tile" href="https://www.linkedin.com/in/aqmal-raziq-3975b0346/" target="_blank">
          <div class="contact-svg-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--orange-bright)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--orange-bright)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
          </div>
          <div class="contact-label-small">GITHUB</div>
          <div class="contact-val-main">github.com/mircrtierr</div>
          <div class="contact-hint-sub">[Open Repos ↗]</div>
        </a>
      </div>

      <div style="text-align: center; margin-top: 24px;">
        <a class="btn" href="mailto:mirzaaqmal22@gmail.com?subject=OJT%20Internship%20Offer%20-%20Muhammad%20Mirza%20Aqmal%20Raziq" style="padding: 12px 28px; font-size: 16px;">
          ✉ Send Direct Email to Mirza
        </a>
      </div>
    </section>
  </main>

  <!-- Interactive Toast Notification -->
  <div id="toast">✓ Copied to clipboard!</div>

  <input type="text" id="textarea" readonly />

  <!-- Footer -->
  <footer>
    <div style="color: #fff; font-weight: 700; font-family: var(--font-pixel); font-size: 13px;">
      Muhammad Mirza Aqmal Raziq bin Mirza Affzard
    </div>
    <div>Diploma Teknologi Komputeran • Kolej Vokasional Perdagangan Johor Bahru (KVPJB)</div>
    <div>Pasir Gudang, Johor, Malaysia • CGPA 3.98 • SKM Level 3: S103882102</div>
    <div>5-Month OJT Internship Window: February – June 2027</div>
    <div style="margin-top: 6px; font-size: 12px; color: var(--slate-500);">
      Retro Workstation design inspired by Commodore PET 8296 &amp; edh.dev.
    </div>
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
    function toggleAccordion(btn) {
      playBeep(700, 0.04);
      var body = btn.nextElementSibling;
      if (body) {
        body.classList.toggle('open');
        btn.textContent = body.classList.contains('open')
          ? '[-] Collapse Details'
          : '[+] View Technical Build Details';
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
        return '<div style="color: var(--orange-bright); font-weight: bold;">⚡ Available Commands:</div>' +
               '<div><span style="color: var(--cream); font-weight: bold;">neofetch</span> - View system hardware & candidate info</div>' +
               '<div><span style="color: var(--cream); font-weight: bold;">about</span> - Candidate summary & CGPA</div>' +
               '<div><span style="color: var(--cream); font-weight: bold;">projects</span> - SmartAttend, YOLO, Beyond The Mic</div>' +
               '<div><span style="color: var(--cream); font-weight: bold;">skills</span> - Core technologies & frameworks</div>' +
               '<div><span style="color: var(--cream); font-weight: bold;">cgpa</span> - Academic standing (3.98 / 4.00)</div>' +
               '<div><span style="color: var(--cream); font-weight: bold;">ojt</span> - 5-Month IT Internship details (Feb–Jun 2027)</div>' +
               '<div><span style="color: var(--cream); font-weight: bold;">awards</span> - Competitive podium finishes</div>' +
               '<div><span style="color: var(--cream); font-weight: bold;">contact</span> - Direct phone & email info</div>' +
               '<div><span style="color: var(--cream); font-weight: bold;">clear</span> - Clear terminal window</div>';
      },
      neofetch: function() {
        return '<pre style="color: var(--orange-light); font-family: monospace; font-size: 11px; line-height: 1.3;">' +
               '        _.-;;-._          <span style="color: var(--orange-bright); font-weight: bold;">mirza@kvpjb</span><br/>' +
               ' \'-..-\'|   ||   |         <span style="color: #94a3b8;">-----------</span><br/>' +
               ' \'-..-\'|_.-;;-._|         <span style="color: var(--cream);">OS:</span> Mirza-OS 1.0 LTS (64-bit)<br/>' +
               ' \'-..-\'|   ||   |         <span style="color: var(--cream);">Host:</span> KVPJB Workstation (Commodore 710)<br/>' +
               ' \'-..-\'|_.-\'\'-._|         <span style="color: var(--cream);">Kernel:</span> Linux 6.8.0-kvpjb-generic<br/>' +
               '                          <span style="color: var(--cream);">Uptime:</span> 2024 - 2027 (Final Year)<br/>' +
               '                          <span style="color: var(--cream);">CGPA:</span> <span style="color: var(--orange-bright); font-weight: bold;">3.98 / 4.00</span><br/>' +
               '                          <span style="color: var(--cream);">Certification:</span> <span style="color: var(--orange-light); font-weight: bold;">SKM Level 3 (S103882102)</span><br/>' +
               '                          <span style="color: var(--cream);">OJT Placement:</span> <span style="color: var(--cream);">Feb - June 2027 (5 Mos)</span><br/>' +
               '                          <span style="color: var(--cream);">Focus:</span> ESP32-CAM, FAISS 512D, YOLOv8<br/>' +
               '</pre>';
      },
      about: function() {
        return '<div style="color: var(--orange-bright); font-weight: bold;">Muhammad Mirza Aqmal Raziq bin Mirza Affzard</div>' +
               '<div>Diploma Teknologi Komputeran • KVPJB (Pasir Gudang, Johor)</div>' +
               '<div>Academic CGPA: <strong style="color: var(--orange-bright);">3.98 / 4.00</strong></div>' +
               '<div>SKM Level 3 Certified: <strong style="color: var(--cream);">S103882102</strong> (JPK)</div>';
      },
      projects: function() {
        return '<div style="color: var(--orange-bright); font-weight: bold;">Featured Projects:</div>' +
               '<div>• <strong>SmartAttend KVPJB:</strong> ESP32-CAM + FAISS 512D sub-second biometric attendance.</div>' +
               '<div>• <strong>YOLO Custom Classifier:</strong> 92.4% accuracy lab tool verification trained on Colab GPU.</div>' +
               '<div>• <strong>Beyond The Mic Podcast:</strong> 5th Place National @ PICC Putrajaya (EBU R128 mastering).</div>';
      },
      skills: function() {
        return '<div style="color: var(--orange-bright); font-weight: bold;">Technical Skills:</div>' +
               '<div>• Embedded: ESP32, ESP32-CAM, C/C++, Sensors, UDP streaming</div>' +
               '<div>• Vision & AI: Python, FAISS 512D, YOLOv8, InsightFace, OpenCV</div>' +
               '<div>• IT Support: SKM Tahap 3, Cisco CCNA, Hardware Repair, LAN/VLAN</div>';
      },
      cgpa: function() {
        return '<div>Academic Cumulative CGPA: <strong style="color: var(--orange-bright); font-size: 1.2em;">3.98 / 4.00</strong> (Top-tier academic standing).</div>';
      },
      ojt: function() {
        return '<div style="color: var(--orange-bright); font-weight: bold;">5-Month On-The-Job Training (OJT) Placement</div>' +
               '<div>Window: <strong>February – June 2027</strong> (5 Months)</div>' +
               '<div>Field: Software Development / IT Systems / Embedded Engineering.</div>';
      },
      awards: function() {
        return '<div style="color: var(--orange-bright); font-weight: bold;">Podium Honors:</div>' +
               '<div>🥇 Johan (Champion) - Apps Ideation Challenge Johor (2023)</div>' +
               '<div>🥉 Tempat Ketiga - MMU Android Competition Kebangsaan (2024)</div>' +
               '<div>🏅 Kelima Kebangsaan - Beyond The Mic Podcast @ PICC Putrajaya (2026)</div>';
      },
      contact: function() {
        return '<div>Email: <a href="mailto:mirzaaqmal22@gmail.com" style="color: var(--orange-light);">mirzaaqmal22@gmail.com</a></div>' +
               '<div>Phone / WhatsApp: <strong style="color: var(--orange-bright);">013-5788399</strong></div>' +
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
      out.innerHTML = '<span style="color: var(--orange-bright); font-weight: bold;">mirza@kvpjb:~$</span> ' + cmd;
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
      var threshold = window.innerHeight * 0.45;
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
console.log('Successfully generated retro computer inspired portfolio! Size:', html.length);

const fs = require('fs');

const ppWoff = fs.readFileSync('fonts/public-pixel.woff').toString('base64');
const chillWoff = fs.readFileSync('fonts/chill.woff').toString('base64');

const css = `
/* ============================================================ */
/* BASE64 EMBEDDED RETRO WEBFONTS (Zero latency, zero CORS)    */
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
/* THEME COLOR PALETTE & RESET                                  */
/* ============================================================ */
:root {
  --color-primary: #525252;
  --color-bg: #f6d4b1;
  --color-card: #fff9f2;
  --color-accent: #ffb000;
  --color-accent-dark: #d97706;
  --color-terminal-bg: #141414;
  --color-terminal-text: #f99021;
  --color-emerald: #10b981;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  overflow-x: hidden;
  background-color: var(--color-bg);
  color: var(--color-primary);
  font-family: 'chill', -apple-system, sans-serif;
  font-size: 17px;
  line-height: 1.6;
  -webkit-text-size-adjust: 100%;
}

/* ============================================================ */
/* 3D CANVAS & BACKGROUND WORKSTATION                           */
/* ============================================================ */
.webgl {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  outline: none;
  z-index: 1;
  pointer-events: all;
}
.webgl:active {
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
/* BOOTLOADER / LOADING SCREEN                                  */
/* ============================================================ */
#loading {
  color: #f6d4b1;
  background-color: var(--color-primary);
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
  gap: 16px;
}
#loading h2 {
  font-family: 'public-pixel', monospace;
  font-size: 1.6em;
  text-align: left;
  margin: 0;
  padding: 0;
  color: #f6d4b1;
  background: transparent;
}
#loading-items {
  height: 48px;
  font-family: 'chill', sans-serif;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #ffb000;
}
#loading-bar {
  position: relative;
  width: 100%;
  height: 42px;
  border: dashed 2px #f6d4b1;
  box-shadow: 4px 4px 0 #000;
}
#loading-bar-progress {
  position: absolute;
  top: 2px;
  bottom: 2px;
  left: 2px;
  right: 2px;
  background-color: #f6d4b1;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s;
}

/* ============================================================ */
/* NAVIGATION & HUD BAR                                         */
/* ============================================================ */
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
}
.menu-btn {
  position: fixed;
  padding: 10px 20px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 51;
  background: rgba(246, 212, 177, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 2px solid var(--color-primary);
  box-shadow: 0 4px 0 rgba(82, 82, 82, 0.15);
}
.nav-brand {
  font-family: 'public-pixel', monospace;
  font-size: 11px;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 10px;
  pointer-events: all;
}
.nav-actions {
  display: flex;
  gap: 10px;
  align-items: center;
  pointer-events: all;
  flex-wrap: wrap;
}
.btn {
  position: relative;
  font-family: 'chill', sans-serif;
  font-size: 15px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 4px 4px 0 var(--color-primary);
  background-color: var(--color-primary);
  color: #f6d4b1;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s, background-color 0.2s;
  padding: 6px 18px;
  border: 1px solid #f6d4b1;
  text-decoration: none;
  pointer-events: all;
  user-select: none;
}
.btn:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--color-primary);
  background-color: #3d3d3d;
  color: #fff;
}
.btn:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 var(--color-primary);
}
.btn-accent {
  background-color: #ffb000;
  color: #1a1a1a;
  border-color: #1a1a1a;
  font-weight: bold;
}
.btn-accent:hover {
  background-color: #f59e0b;
  color: #000;
}

.menu-body {
  background-color: #2b2b2b;
  color: #f6d4b1;
  font-size: 1.6em;
  font-family: 'public-pixel', monospace;
  position: fixed;
  top: 0;
  bottom: 0;
  left: -100vw;
  width: 320px;
  max-width: 85vw;
  z-index: 25;
  transition: left 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 80px 30px;
  box-shadow: 8px 0 20px rgba(0, 0, 0, 0.4);
  border-right: 3px solid var(--color-accent);
}
.active .menu-body {
  left: 0;
}
.menu-body a {
  color: #f6d4b1;
  text-decoration: none;
  transition: color 0.2s, transform 0.2s;
  display: block;
}
.menu-body a:hover {
  color: var(--color-accent);
  transform: translateX(8px);
}
.menu-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 24;
  display: none;
}
.active .menu-backdrop {
  display: block;
}

#tip-scroll {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'public-pixel', monospace;
  font-size: 11px;
  box-shadow: 4px 4px 0 rgba(0,0,0,0.4);
  background-color: #2b2b2b;
  color: #ffb000;
  padding: 8px 20px;
  border: 1px solid #ffb000;
  pointer-events: none;
  z-index: 10;
  transition: opacity 0.3s;
  animation: pulse 2s infinite ease-in-out;
}
@keyframes pulse {
  0%, 100% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, -6px); }
}
html[data-scroll="true"] #tip-scroll {
  opacity: 0;
  pointer-events: none;
}

/* ============================================================ */
/* HERO BACKUP (Offline / Non-WebGL View)                       */
/* ============================================================ */
#hero-backup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  width: clamp(0px, 94vw, 760px);
  margin: auto;
  color: var(--color-primary);
  z-index: 0;
  padding: 80px 16px 40px;
  text-align: center;
}
#file-protocol-notice {
  display: none;
  background: #2b2b2b;
  color: #ffb000;
  border: 2px dashed #ffb000;
  padding: 10px 16px;
  margin-bottom: 12px;
  max-width: 680px;
  font-family: 'public-pixel', monospace;
  font-size: 10px;
  line-height: 1.6;
  text-align: center;
  box-shadow: 4px 4px 0 #000;
}
.hero-dither-portrait {
  display: block;
  max-width: 320px;
  width: 100%;
  margin: 0 auto 12px;
  border: 3px solid var(--color-primary);
  box-shadow: 6px 6px 0 rgba(82, 82, 82, 0.4);
  image-rendering: pixelated;
}

/* ============================================================ */
/* EDITORIAL MAIN CONTENT SECTIONS                              */
/* ============================================================ */
main {
  color: var(--color-primary);
  margin-top: 200vh;
  position: relative;
  z-index: 5;
  padding: 40px 16px 80px;
}

section {
  padding-bottom: 70px;
  margin-bottom: 80px;
  position: relative;
  max-width: 920px;
  margin-left: auto;
  margin-right: auto;
  scroll-margin-top: 80px;
}
section::after {
  content: "";
  border-bottom: 2px dashed var(--color-primary);
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: clamp(0px, 90vw, 720px);
  opacity: 0.5;
}
section:last-of-type::after {
  display: none;
}

/* ============================================================ */
/* RETRO HEADINGS & BANNERS                                     */
/* ============================================================ */
.section-banner {
  text-align: center;
  margin-bottom: 32px;
}
.section-title {
  display: inline-block;
  color: #f6d4b1;
  background-color: var(--color-primary);
  font-family: 'public-pixel', monospace;
  font-size: 1.8em;
  padding: 8px 24px;
  margin: 0 auto 8px;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.25);
  border: 1px solid #f6d4b1;
}
.section-subtitle {
  font-family: 'chill', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: var(--color-primary);
  letter-spacing: 1px;
  text-transform: uppercase;
}

/* ============================================================ */
/* RETRO CARDS & ARCHITECTURE                                   */
/* ============================================================ */
.retro-card {
  background-color: var(--color-card);
  border: 3px solid var(--color-primary);
  box-shadow: 6px 6px 0 var(--color-primary);
  margin: 24px auto;
  width: 100%;
  padding: 24px 28px;
  box-sizing: border-box;
  text-align: left;
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;
}
.retro-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 8px 8px 0 var(--color-primary);
}

.card-header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px dashed #b89b82;
  padding-bottom: 12px;
  margin-bottom: 18px;
  font-family: 'public-pixel', monospace;
  font-size: 11px;
  color: var(--color-primary);
  flex-wrap: wrap;
  gap: 8px;
}
.card-header-tag {
  background: var(--color-primary);
  color: #f6d4b1;
  padding: 4px 10px;
  font-size: 10px;
}
.card-header-status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 10px;
  color: #047857;
  font-weight: bold;
}
.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 6px #10b981;
  display: inline-block;
  animation: blink 1.5s infinite;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

/* ============================================================ */
/* THE 4 KEY PERFORMANCE INDICATORS (KPI STATS GRID)            */
/* ============================================================ */
.stat-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin: 24px 0;
}
@media (max-width: 768px) {
  .stat-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .stat-grid {
    grid-template-columns: 1fr;
  }
}

.stat-box {
  background: #fdf2e3;
  border: 2px solid var(--color-primary);
  box-shadow: 4px 4px 0 var(--color-primary);
  padding: 16px 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.15s;
}
.stat-box:hover {
  transform: translateY(-2px);
  background: #fff;
}
.stat-value {
  font-family: 'public-pixel', monospace;
  font-size: 1.35em;
  color: var(--color-primary);
  margin-bottom: 4px;
}
.stat-value.gold {
  color: #b45309;
}
.stat-label {
  font-family: 'chill', sans-serif;
  font-size: 12px;
  font-weight: bold;
  color: var(--color-primary);
  text-transform: uppercase;
  margin-bottom: 6px;
}
.stat-badge {
  display: inline-block;
  font-family: 'public-pixel', monospace;
  font-size: 8.5px;
  padding: 3px 8px;
  background: var(--color-primary);
  color: #f6d4b1;
  border-radius: 1px;
}

/* ============================================================ */
/* RETRO CRT TERMINAL DISPLAY BOX                               */
/* ============================================================ */
.retro-terminal-box {
  background: var(--color-terminal-bg);
  color: var(--color-terminal-text);
  border: 2px solid var(--color-terminal-text);
  box-shadow: inset 0 0 16px rgba(249, 144, 33, 0.2), 5px 5px 0 var(--color-primary);
  padding: 18px 22px;
  font-family: 'public-pixel', monospace;
  font-size: 11px;
  line-height: 1.8;
  margin: 20px 0;
  position: relative;
  overflow: hidden;
}
.retro-terminal-box::before {
  content: " ";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.15) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
}
.terminal-line {
  margin: 6px 0;
}
.t-green { color: #10b981; }
.t-amber { color: #f59e0b; }
.t-cyan { color: #38bdf8; }
.t-white { color: #ffffff; }
.t-cursor {
  display: inline-block;
  width: 8px;
  height: 12px;
  background: #f59e0b;
  margin-left: 4px;
  vertical-align: middle;
  animation: blink 1s infinite;
}

/* ============================================================ */
/* PROFILE DOSSIER (ABOUT ME)                                   */
/* ============================================================ */
.dossier-layout {
  display: flex;
  gap: 24px;
  align-items: center;
  margin-bottom: 20px;
}
@media (max-width: 680px) {
  .dossier-layout {
    flex-direction: column;
    text-align: center;
  }
}
.dossier-avatar-bezel {
  flex-shrink: 0;
  width: 140px;
  height: 140px;
  border: 3px solid var(--color-primary);
  box-shadow: 4px 4px 0 var(--color-primary);
  background: #1a1a1a;
  padding: 4px;
  overflow: hidden;
}
.dossier-avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  image-rendering: pixelated;
  display: block;
}
.dossier-bio h2 {
  font-family: 'public-pixel', monospace;
  font-size: 1.3em;
  color: var(--color-primary);
  background: transparent;
  padding: 0;
  margin: 0 0 6px;
  text-align: left;
}
@media (max-width: 680px) {
  .dossier-bio h2 { text-align: center; }
}
.dossier-bio p {
  padding: 0;
  margin: 6px 0;
  width: 100%;
  font-size: 16px;
}
.dossier-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}
.chip {
  font-family: 'public-pixel', monospace;
  font-size: 9px;
  padding: 4px 10px;
  background: #edd3bd;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
}

/* ============================================================ */
/* PROJECT & HARDWARE LOG CARDS                                 */
/* ============================================================ */
.project-card {
  background-color: var(--color-card);
  border: 3px solid var(--color-primary);
  box-shadow: 6px 6px 0 var(--color-primary);
  margin: 32px auto;
  padding: 24px 28px;
}
.project-title {
  font-family: 'public-pixel', monospace;
  font-size: 1.3em;
  color: var(--color-primary);
  margin: 0 0 4px;
}
.project-year {
  font-family: 'chill', sans-serif;
  font-weight: bold;
  color: var(--color-accent-dark);
  font-size: 14px;
  margin-bottom: 12px;
}
.tech-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 12px 0 16px;
  list-style: none;
}
.tech-pills li {
  font-family: 'chill', sans-serif;
  font-size: 13px;
  font-weight: 600;
  padding: 3px 10px;
  background: #fdf2e3;
  border: 1px solid var(--color-primary);
  box-shadow: 2px 2px 0 var(--color-primary);
  color: var(--color-primary);
}
.project-media-frame {
  position: relative;
  border: 3px solid var(--color-primary);
  background: #1a1a1a;
  padding: 6px;
  margin: 16px 0;
  box-shadow: 4px 4px 0 var(--color-primary);
}
.project-media-frame img {
  width: 100%;
  height: auto;
  display: block;
}
.project-metric-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin: 14px 0;
}
.metric-chip {
  background: #2b2b2b;
  color: #ffb000;
  padding: 6px 12px;
  font-family: 'public-pixel', monospace;
  font-size: 10px;
  border: 1px solid #ffb000;
}

/* Collapsible accordion */
.collapse-btn[collapsed="true"] + .collapse-body {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 0.3s, max-height 0.4s ease-out;
}
.collapse-btn[collapsed="false"] + .collapse-body {
  opacity: 1;
  max-height: 800px;
  overflow: hidden;
  transition: opacity 0.4s, max-height 0.4s ease-in;
  margin-top: 14px;
  padding: 14px;
  background: #fbf0e4;
  border: 1px dashed var(--color-primary);
}

/* ============================================================ */
/* SKILL MATRIX (3-COLUMN DIAGNOSTIC GRID)                      */
/* ============================================================ */
.skills-matrix {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin: 20px 0;
}
@media (max-width: 768px) {
  .skills-matrix {
    grid-template-columns: 1fr;
  }
}
.matrix-card {
  background: #fff8f0;
  border: 2px solid var(--color-primary);
  box-shadow: 4px 4px 0 var(--color-primary);
  padding: 18px 16px;
}
.matrix-card-title {
  font-family: 'public-pixel', monospace;
  font-size: 11px;
  background: var(--color-primary);
  color: #f6d4b1;
  padding: 6px 10px;
  margin: 0 0 14px;
  display: inline-block;
  border-radius: 1px;
}
.matrix-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.matrix-list li {
  font-family: 'chill', sans-serif;
  font-size: 14.5px;
  padding: 6px 0;
  border-bottom: 1px dotted #caa98d;
  display: flex;
  align-items: center;
  gap: 8px;
}
.matrix-list li::before {
  content: "▸";
  color: var(--color-accent-dark);
  font-weight: bold;
}

/* ============================================================ */
/* AWARDS & TROPHY HALL OF FAME                                 */
/* ============================================================ */
.awards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin: 20px 0;
}
.award-box {
  background: #fff8f0;
  border: 2px solid var(--color-primary);
  box-shadow: 4px 4px 0 var(--color-primary);
  padding: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.award-photo {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border: 2px solid var(--color-primary);
  margin-bottom: 12px;
}
.award-title {
  font-family: 'public-pixel', monospace;
  font-size: 11px;
  color: var(--color-primary);
  margin: 6px 0;
  line-height: 1.4;
}
.award-sub {
  font-family: 'chill', sans-serif;
  font-size: 13px;
  color: #666;
  font-weight: 600;
}

/* ============================================================ */
/* CONTACT DISPATCH TERMINAL                                    */
/* ============================================================ */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
  margin: 20px 0;
}
.contact-tile {
  background: #fdf2e3;
  border: 2px solid var(--color-primary);
  box-shadow: 3px 3px 0 var(--color-primary);
  padding: 16px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.15s, background 0.15s;
}
.contact-tile:hover {
  transform: translate(-2px, -2px);
  background: #fff;
  box-shadow: 5px 5px 0 var(--color-primary);
}
.contact-tile .icon {
  font-size: 24px;
  margin-bottom: 6px;
}
.contact-tile .label {
  font-family: 'public-pixel', monospace;
  font-size: 10px;
  color: var(--color-primary);
  margin-bottom: 4px;
}
.contact-tile .value {
  font-family: 'chill', sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: var(--color-accent-dark);
  word-break: break-all;
}

/* Toast alert */
#toast {
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: #2b2b2b;
  color: #ffb000;
  border: 2px solid #ffb000;
  box-shadow: 4px 4px 0 #000;
  padding: 10px 18px;
  font-family: 'public-pixel', monospace;
  font-size: 11px;
  z-index: 999;
  transform: translateY(120px);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
#toast.show {
  transform: translateY(0);
}

/* ============================================================ */
/* FOOTER                                                       */
/* ============================================================ */
footer {
  display: flex;
  gap: 12px;
  flex-direction: column;
  font-size: 13px;
  max-width: 720px;
  margin: auto;
  padding: 40px 16px;
  text-align: center;
  color: var(--color-primary);
  border-top: 2px dashed #caa98d;
}
`;

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Muhammad Mirza Aqmal Raziq – Personal Portfolio</title>
    <meta
      name="description"
      content="Muhammad Mirza Aqmal Raziq bin Mirza Affzard — Final year Diploma Teknologi Komputeran student at KVPJB (CGPA 3.98 • SKM Level 3 S103882102). Seeking 5-Month IT Internship (Feb–June 2027)."
    />
    <link rel="icon" type="image/png" href="./icon/32x32.png" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"
    />
    <link rel="apple-touch-icon" sizes="180x180" href="./icon/180x180.png" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-title" content="Mirza – Personal Portfolio" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="theme-color" content="#f6d4b1" />

    <meta property="og:title" content="Muhammad Mirza Aqmal Raziq – Portfolio" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="./images/mirza-title.png" />
    <meta
      name="og:description"
      content="Final year Diploma Teknologi Komputeran student at KVPJB (CGPA 3.98 • SKM Level 3 S103882102). Seeking 5-Month IT Internship (Feb–June 2027)."
    />
    <link rel="manifest" href="./manifest.json" />
    <script type="module" crossorigin src="./assets/index-CZRio7_M.js"></script>
    <style>
${css}
    </style>
  </head>

  <body>
    <div id="home"></div>

    <!-- 3D Retro Commodore PET 8296 Workstation Canvas -->
    <canvas class="webgl"></canvas>

    <!-- Resilient Offline / Fallback Hero View -->
    <div id="hero-backup">
      <div id="file-protocol-notice">
        ⚡ OFFLINE / LOCAL VIEW: Run <b>Preview_Website.bat</b> for the Full 3D Interactive Commodore Experience!
      </div>
      <img src="./images/mirza-title.png" alt="Muhammad Mirza Aqmal Raziq - Systems Specialist" class="hero-dither-portrait" />
      <h3 style="font-family: 'public-pixel', monospace; font-size: 1.1em; margin: 0;">Hi there, I’m</h3>
      <h1 style="font-family: 'public-pixel', monospace; font-size: 2.2em; background: #525252; color: #f6d4b1; padding: 6px 20px; margin: 6px 0;">Mirza</h1>
      <ul style="list-style: none; padding: 0; margin: 8px 0; font-size: 16px; font-weight: bold; line-height: 1.8;">
        <li>• Software &amp; IT Systems Specialist</li>
        <li>• Diploma Teknologi Komputeran (KVPJB)</li>
        <li>• CGPA 3.98 / 4.00 • SKM Level 3 Certified (S103882102)</li>
        <li>• Seeking 5-Month OJT Internship (Feb – June 2027)</li>
      </ul>
      <div style="margin-top: 10px;">
        <a class="btn btn-accent" href="#aboutMe">Explore System Dossier ↓</a>
      </div>
    </div>

    <!-- Top Command HUD & Navigation -->
    <nav>
      <div class="menu-btn">
        <div style="display: flex; align-items: center; gap: 12px; pointer-events: all;">
          <button class="btn" onclick="toggleMenu()" aria-label="Toggle navigation menu" title="Open Navigation">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
              <rect width="16" height="3" />
              <rect y="6.5" width="16" height="3" />
              <rect y="13" width="16" height="3" />
            </svg>
          </button>
          <div class="nav-brand">
            <span>MIRZA // OS-1.0</span>
            <span class="card-header-status" style="font-size: 9px;"><span class="status-dot"></span> READY</span>
          </div>
        </div>

        <div class="nav-actions">
          <button class="btn" onclick="toggleAudioFeedback()" id="audio-toggle-btn" title="Toggle Tactile Retro Audio">
            🔊 Sound: ON
          </button>
          <a
            class="btn"
            href="https://www.linkedin.com/in/aqmal-raziq-3975b0346/"
            target="_blank"
            title="LinkedIn Profile"
          >
            LinkedIn
          </a>
          <a
            class="btn"
            href="https://github.com/mircrtierr"
            target="_blank"
            title="GitHub Repositories"
          >
            GitHub
          </a>
          <a
            class="btn btn-accent"
            href="./sijil_skm3_jpk_official.pdf"
            target="_blank"
            title="Download Official SKM Level 3 Certificate PDF"
          >
            📄 SKM 3 PDF
          </a>
        </div>
      </div>

      <div class="menu-backdrop" onclick="closeMenu()"></div>
      <div class="menu-body">
        <div style="font-size: 14px; color: #ffb000; margin-bottom: 10px; border-bottom: 1px dashed #ffb000; padding-bottom: 6px;">
          // MIRZA-OS NAV
        </div>
        <a href="#home" onclick="closeMenu()">01. Home</a>
        <a href="#aboutMe" onclick="closeMenu()">02. Dossier</a>
        <a href="#projects" onclick="closeMenu()">03. Projects</a>
        <a href="#skills" onclick="closeMenu()">04. Capabilities</a>
        <a href="#awards" onclick="closeMenu()">05. Honors</a>
        <a href="#contact" onclick="closeMenu()">06. Dispatch</a>
      </div>

      <div id="tip-scroll">▼ SCROLL DOWN TO EXPLORE ▼</div>
    </nav>

    <!-- Editorial Sections -->
    <main>
      <!-- ============================================== -->
      <!-- SECTION 1: CANDIDATE DOSSIER // ABOUT MIRZA     -->
      <!-- ============================================== -->
      <section id="aboutMe">
        <div class="section-banner">
          <h2 class="section-title">SYSTEM DOSSIER</h2>
          <div class="section-subtitle">// CANDIDATE BIO &amp; VERIFIED ACCREDITATION</div>
        </div>

        <div class="retro-card">
          <div class="card-header-bar">
            <span class="card-header-tag">[DOSSIER: MIRZA-01]</span>
            <span class="card-header-status"><span class="status-dot"></span> AVAILABLE FOR 5-MONTH OJT (FEB-JUN 2027)</span>
          </div>

          <div class="dossier-layout">
            <div class="dossier-avatar-bezel">
              <img src="./images/mirza-title.png" alt="Muhammad Mirza Aqmal Raziq" class="dossier-avatar-img" />
            </div>
            <div class="dossier-bio">
              <h2>Muhammad Mirza Aqmal Raziq</h2>
              <div style="font-family: 'chill', sans-serif; font-size: 14px; font-weight: bold; color: var(--color-accent-dark); margin-bottom: 8px;">
                Diploma Teknologi Komputeran • Kolej Vokasional Perdagangan Johor Bahru (KVPJB)
              </div>
              <p>
                Final-year Computer Technology student based in <strong>Pasir Gudang, Johor</strong>. Combining embedded edge IoT engineering (ESP32-CAM) with neural similarity search (FAISS 512D), YOLOv8 object detection, enterprise Cisco networking, and hardware troubleshooting.
              </p>
              <div class="dossier-chips">
                <span class="chip">📍 Pasir Gudang, Johor</span>
                <span class="chip">🎓 KVPJB Final Year</span>
                <span class="chip">🛡 SKM 3: S103882102</span>
                <span class="chip">⚡ Available Feb–June 2027</span>
              </div>
            </div>
          </div>

          <!-- THE 4 KEY EYE-CATCHING STAT CARDS -->
          <div class="stat-grid">
            <div class="stat-box">
              <div class="stat-value gold">3.98</div>
              <div class="stat-label">Academic CGPA</div>
              <span class="stat-badge">TOP TIER RECORD</span>
            </div>

            <div class="stat-box">
              <div class="stat-value">SKM 3</div>
              <div class="stat-label">Gov Accreditation</div>
              <span class="stat-badge">ID: S103882102</span>
            </div>

            <div class="stat-box">
              <div class="stat-value" style="font-size: 1.1em;">5 MONTHS</div>
              <div class="stat-label">OJT Internship</div>
              <span class="stat-badge">FEB – JUNE 2027</span>
            </div>

            <div class="stat-box">
              <div class="stat-value" style="font-size: 1.1em;">TOP 5</div>
              <div class="stat-label">National Podium</div>
              <span class="stat-badge">3x HONORS</span>
            </div>
          </div>

          <!-- RETRO CRT TERMINAL DIAGNOSTIC READOUT -->
          <div class="retro-terminal-box">
            <div class="terminal-line"><span class="t-amber">&gt; SYS_QUERY: CANDIDATE_PROFILE --VERBOSE</span></div>
            <div class="terminal-line"><span class="t-green">[SPECIALIZATION]</span> Edge IoT vision nodes, vector similarity indexing, neural vision classifiers, Cisco routing &amp; hardware maintenance.</div>
            <div class="terminal-line"><span class="t-green">[CORE GOAL]</span> 5-Month On-The-Job Training (OJT) IT / Software Engineering placement from February to June 2027.</div>
            <div class="terminal-line"><span class="t-green">[INTEGRITY]</span> Verified Sijil Kemahiran Malaysia (SKM) Tahap 3 in IT System Support issued by Jabatan Pembangunan Kemahiran (JPK).</div>
            <div class="terminal-line"><span class="t-amber">&gt; SYSTEM STATUS: READY_FOR_DEPLOYMENT</span><span class="t-cursor"></span></div>
          </div>

          <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 20px;">
            <a class="btn btn-accent" href="./sijil_skm3_jpk_official.pdf" target="_blank">
              📄 View Official SKM 3 Digital PDF
            </a>
            <a class="btn" href="#contact">
              ✉ Contact / Hire Mirza
            </a>
          </div>
        </div>
      </section>

      <!-- ============================================== -->
      <!-- SECTION 2: ENGINEERING PROJECTS // MISSION LOGS -->
      <!-- ============================================== -->
      <section id="projects">
        <div class="section-banner">
          <h2 class="section-title">ENGINEERING PROJECTS</h2>
          <div class="section-subtitle">// EDGE AI • NEURAL VISION • BROADCAST SYSTEMS</div>
        </div>

        <!-- Project 1: SmartAttend KVPJB -->
        <div class="project-card">
          <div class="card-header-bar">
            <span class="card-header-tag">[MISSION: 01 // SMARTATTEND]</span>
            <span class="card-header-status"><span class="status-dot"></span> LIVE AT KVPJB • SUB-SECOND LATENCY</span>
          </div>

          <h3 class="project-title">SmartAttend KVPJB</h3>
          <div class="project-year">Automated Biometric Edge Vision &amp; Vector Similarity Platform (2024–2025)</div>

          <ul class="tech-pills">
            <li>ESP32-CAM Node</li>
            <li>Python Server</li>
            <li>FAISS 512D Vector Index</li>
            <li>ArcFace ResNet-50</li>
            <li>SQLite Relational DB</li>
            <li>Edge AI</li>
          </ul>

          <div class="project-metric-row">
            <span class="metric-chip">⚡ Latency: &lt;250ms</span>
            <span class="metric-chip">🎯 Dimension: 512D Vectors</span>
            <span class="metric-chip">👥 Capacity: 500+ Students</span>
          </div>

          <p>
            SmartAttend completely replaces manual paper attendance logbooks with low-cost edge vision hardware coupled to a high-speed Python biometric embedding server. An ESP32-CAM captures student faces upon entry and streams compressed frames across the local subnet. Frames are embedded into dense 512-dimensional feature vectors and matched via Facebook AI Similarity Search (FAISS) in under 250 milliseconds.
          </p>

          <div class="project-media-frame">
            <img
              src="./images/smartattend_dashboard.jpg"
              alt="SmartAttend Biometric System Interface"
              loading="lazy"
            />
          </div>

          <button
            class="collapse-btn btn"
            collapsed="true"
            onclick="toggleAccordion(this)"
          >
            [+ EXPAND TECHNICAL ARCHITECTURE SPEC]
          </button>
          <div class="collapse-body">
            <p><strong>• Edge Vision Node:</strong> Low-power ESP32-CAM (OV2640 sensor) transmitting high-throughput JPEG frames over local LAN via UDP socket streaming.</p>
            <p><strong>• Embedding Pipeline:</strong> Facial landmark alignment + InsightFace (ArcFace ResNet-50) yielding dense 512-dimensional Euclidean feature representations.</p>
            <p><strong>• Vector Similarity:</strong> <code>IndexFlatL2</code> FAISS vector index querying 500+ student embeddings in &lt;250ms with a calibrated Euclidean distance threshold of 0.42.</p>
            <p><strong>• Persistent Storage:</strong> SQLite backend with transactional timestamps, duplicate suppression, and automated attendance reporting.</p>
          </div>
        </div>

        <!-- Project 2: YOLO Object Detection -->
        <div class="project-card">
          <div class="card-header-bar">
            <span class="card-header-tag">[MISSION: 02 // YOLO NEURAL DETECTOR]</span>
            <span class="card-header-status"><span class="status-dot"></span> 92.4% mAP@0.5 • 18ms INFERENCE</span>
          </div>

          <h3 class="project-title">YOLO Custom Object Classifier</h3>
          <div class="project-year">Real-Time Classroom &amp; Lab Device Monitoring Pipeline (2024)</div>

          <ul class="tech-pills">
            <li>YOLOv8</li>
            <li>Google Colab Tesla T4 GPU</li>
            <li>PyTorch</li>
            <li>OpenCV</li>
            <li>Python</li>
            <li>Edge Video Pipeline</li>
          </ul>

          <div class="project-metric-row">
            <span class="metric-chip">🎯 Precision: 92.4% mAP@0.5</span>
            <span class="metric-chip">⚡ Inference: 18ms/frame</span>
            <span class="metric-chip">🖼 Dataset: 1,200+ Annotated</span>
          </div>

          <p>
            A custom neural object classifier trained on Google Colab for automated laboratory and classroom inventory tracking. Detects smartphones, bags, and student presence via real-time webcam feed with automated bounding box predictions and confidence scoring.
          </p>

          <div class="project-media-frame">
            <img
              src="./images/yolo_colab_detection.jpg"
              alt="YOLO Custom Detection on Google Colab"
              loading="lazy"
            />
          </div>

          <button
            class="collapse-btn btn"
            collapsed="true"
            onclick="toggleAccordion(this)"
          >
            [+ EXPAND MODEL ARCHITECTURE SPEC]
          </button>
          <div class="collapse-body">
            <p><strong>• Dataset:</strong> 1,200+ annotated high-res images with augmentations (random crop, brightness jitter, mosaic blending).</p>
            <p><strong>• Training Compute:</strong> 100 epochs on Google Colab Tesla T4 GPU running PyTorch and Ultralytics YOLOv8 architecture.</p>
            <p><strong>• Performance:</strong> Achieved 92.4% mAP@0.5 and 18ms inference latency per frame on live video streams.</p>
          </div>
        </div>

        <!-- Project 3: Beyond The Mic Podcast -->
        <div class="project-card">
          <div class="card-header-bar">
            <span class="card-header-tag">[MISSION: 03 // BEYOND THE MIC]</span>
            <span class="card-header-status"><span class="status-dot"></span> 5TH PLACE KEBANGSAAN @ PICC PUTRAJAYA</span>
          </div>

          <h3 class="project-title">Beyond The Mic Podcast Production</h3>
          <div class="project-year">National Broadcast Engineering &amp; Audio Mastering (2026)</div>

          <ul class="tech-pills">
            <li>Audio Engineering</li>
            <li>Petah KPM 2026</li>
            <li>PICC Putrajaya</li>
            <li>EBU R128 Standards</li>
            <li>Studio Mixing</li>
          </ul>

          <div class="project-metric-row">
            <span class="metric-chip">🏆 Honor: Kelima Kebangsaan</span>
            <span class="metric-chip">📍 Venue: PICC Putrajaya</span>
            <span class="metric-chip">🎚 Mastering: -14 LUFS Broadcast</span>
          </div>

          <p>
            Broadcast audio capture and mastering for <em>Pertandingan Beyond The Mic: Podcast Peringkat Kebangsaan</em> (Kategori Lepas Menengah) at Putrajaya International Convention Centre (PICC) during the Petah KPM 2026 national festival. Achieved <strong>5th Place Nationally (Kelima Kebangsaan)</strong> representing KVPJB.
          </p>

          <div class="project-media-frame" style="max-width: 520px; margin: 16px auto;">
            <img
              src="./images/trophy_petah_madani_podcast.jpg"
              alt="Petah KPM 2026 National Trophy"
              loading="lazy"
            />
          </div>

          <button
            class="collapse-btn btn"
            collapsed="true"
            onclick="toggleAccordion(this)"
          >
            [+ EXPAND AUDIO PRODUCTION SPEC]
          </button>
          <div class="collapse-body">
            <p><strong>• Hardware:</strong> Dual-channel balanced XLR dynamic microphones with low-noise mic preamps and shock mounts.</p>
            <p><strong>• Acoustic Processing:</strong> Multi-band downward expansion, phase-aligned dynamic EQ, and real-time noise suppression.</p>
            <p><strong>• Broadcast Standard:</strong> EBU R128 / ITU-R BS.1770 broadcast standard compliance (-14 LUFS integrated, -1.0 dBTP ceiling).</p>
          </div>
        </div>
      </section>

      <!-- ============================================== -->
      <!-- SECTION 3: CORE CAPABILITIES // SYSTEM MATRIX  -->
      <!-- ============================================== -->
      <section id="skills">
        <div class="section-banner">
          <h2 class="section-title">CORE CAPABILITIES</h2>
          <div class="section-subtitle">// 3-TIER DIAGNOSTIC MATRIX</div>
        </div>

        <div class="skills-matrix">
          <div class="matrix-card">
            <div class="matrix-card-title">🤖 EMBEDDED &amp; AI SYSTEMS</div>
            <ul class="matrix-list">
              <li>ESP32 &amp; ESP32-CAM (C/C++)</li>
              <li>FAISS 512D Vector Similarity</li>
              <li>YOLOv8 Custom Object Detection</li>
              <li>OpenCV &amp; Vision Pipelines</li>
              <li>PyTorch Model Fine-Tuning</li>
              <li>Edge Sensor Socket Streaming</li>
            </ul>
          </div>

          <div class="matrix-card">
            <div class="matrix-card-title">💻 SOFTWARE &amp; SYSTEMS</div>
            <ul class="matrix-list">
              <li>Python (Scripting &amp; Automation)</li>
              <li>JavaScript &amp; TypeScript (WebGL)</li>
              <li>SQL (SQLite / Relational Schemas)</li>
              <li>Linux / Bash Shell Environment</li>
              <li>HTML5, CSS3, Responsive UI</li>
              <li>Git Version Control &amp; CI/CD</li>
            </ul>
          </div>

          <div class="matrix-card">
            <div class="matrix-card-title">🛠 IT &amp; ACCREDITATIONS</div>
            <ul class="matrix-list">
              <li>SKM 3 IT Support System (S103882102)</li>
              <li>Cisco CCNA Routing &amp; Switching</li>
              <li>Cisco IT Essentials: PC Hardware</li>
              <li>LAN Provisioning &amp; VLAN Setup</li>
              <li>Component Diagnosis &amp; Repair</li>
              <li>Operating System Deployment</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ============================================== -->
      <!-- SECTION 4: HONORS & PODIUM // HALL OF FAME     -->
      <!-- ============================================== -->
      <section id="awards">
        <div class="section-banner">
          <h2 class="section-title">PODIUM HONORS</h2>
          <div class="section-subtitle">// COMPETITIVE AWARDS &amp; DIGITAL CREDENTIALS</div>
        </div>

        <div class="awards-grid">
          <div class="award-box">
            <img
              src="./images/trophy_johan_apps_ideation_johor.jpg"
              alt="Johan Apps Ideation Challenge Johor Trophy"
              class="award-photo"
              loading="lazy"
            />
            <div>
              <div class="stat-badge" style="background: #b45309; margin-bottom: 6px;">🥇 CHAMPION</div>
              <h4 class="award-title">Johan Apps Ideation</h4>
              <div class="award-sub">Johor State Challenge (2023)</div>
            </div>
          </div>

          <div class="award-box">
            <img
              src="./images/trophy_android_national_mmu.jpg"
              alt="Tempat Ketiga MMU Android Competition Trophy"
              class="award-photo"
              loading="lazy"
            />
            <div>
              <div class="stat-badge" style="background: #4b5563; margin-bottom: 6px;">🥉 3RD PLACE</div>
              <h4 class="award-title">Tempat Ketiga MMU</h4>
              <div class="award-sub">Android Competition Kebangsaan (2024)</div>
            </div>
          </div>

          <div class="award-box">
            <img
              src="./images/trophy_petah_madani_podcast.jpg"
              alt="Kelima Kebangsaan Beyond The Mic Podcast Trophy"
              class="award-photo"
              loading="lazy"
            />
            <div>
              <div class="stat-badge" style="background: #047857; margin-bottom: 6px;">🏅 5TH NATIONAL</div>
              <h4 class="award-title">Kelima Kebangsaan</h4>
              <div class="award-sub">Petah KPM @ PICC Putrajaya (2026)</div>
            </div>
          </div>
        </div>

        <div style="text-align: center; margin-top: 24px;">
          <a class="btn btn-accent" href="./sijil_skm3_jpk_official.pdf" target="_blank" style="padding: 10px 28px; font-size: 16px;">
            📄 Download Verified Sijil Kemahiran Malaysia (SKM 3) Digital PDF
          </a>
        </div>
      </section>

      <!-- ============================================== -->
      <!-- SECTION 5: CONTACT & DISPATCH TERMINAL         -->
      <!-- ============================================== -->
      <section id="contact">
        <div class="section-banner">
          <h2 class="section-title">COMMUNICATION TERMINAL</h2>
          <div class="section-subtitle">// DISPATCH &amp; OJT INQUIRIES</div>
        </div>

        <div class="retro-card">
          <div class="card-header-bar">
            <span class="card-header-tag">[CHANNELS: ONLINE]</span>
            <span class="card-header-status"><span class="status-dot"></span> DIRECT CONTACT</span>
          </div>

          <p style="text-align: center; margin-bottom: 20px;">
            Available for a <strong>5-Month IT / Software Engineering Internship (February – June 2027)</strong>. Click any channel to copy or connect directly:
          </p>

          <div class="contact-grid">
            <div class="contact-tile" onclick="copyContact('mirzaaqmal22@gmail.com', 'Email Address')">
              <div class="icon">✉</div>
              <div class="label">EMAIL</div>
              <div class="value">mirzaaqmal22@gmail.com</div>
              <div style="font-size: 11px; color: #888; margin-top: 4px;">[Click to Copy]</div>
            </div>

            <div class="contact-tile" onclick="copyContact('013-5788399', 'Phone Number')">
              <div class="icon">📞</div>
              <div class="label">PHONE / WHATSAPP</div>
              <div class="value">013-5788399</div>
              <div style="font-size: 11px; color: #888; margin-top: 4px;">[Click to Copy]</div>
            </div>

            <a class="contact-tile" href="https://www.linkedin.com/in/aqmal-raziq-3975b0346/" target="_blank" style="text-decoration: none;">
              <div class="icon">💼</div>
              <div class="label">LINKEDIN</div>
              <div class="value">aqmal-raziq-3975b0346</div>
              <div style="font-size: 11px; color: #888; margin-top: 4px;">[Open Profile ↗]</div>
            </a>

            <a class="contact-tile" href="https://github.com/mircrtierr" target="_blank" style="text-decoration: none;">
              <div class="icon">💻</div>
              <div class="label">GITHUB</div>
              <div class="value">github.com/mircrtierr</div>
              <div style="font-size: 11px; color: #888; margin-top: 4px;">[Open Repos ↗]</div>
            </a>
          </div>

          <div style="text-align: center; margin-top: 24px;">
            <a class="btn btn-accent" href="mailto:mirzaaqmal22@gmail.com?subject=OJT%20Internship%20Offer%20-%20Muhammad%20Mirza%20Aqmal%20Raziq" style="padding: 10px 24px;">
              ✉ Send Email Directly
            </a>
          </div>
        </div>
      </section>
    </main>

    <!-- Retro Toast Notification -->
    <div id="toast">✓ Copied to clipboard!</div>

    <input type="text" id="textarea" readonly />

    <!-- 3D Bootloader Overlay -->
    <div id="loading">
      <h2>Booting...</h2>
      <div id="loading-bar">
        <div id="loading-bar-progress"></div>
      </div>
      <div id="loading-items">Starting...</div>
    </div>

    <footer>
      <div style="font-weight: bold; font-family: 'public-pixel', monospace; font-size: 12px;">
        Muhammad Mirza Aqmal Raziq bin Mirza Affzard
      </div>
      <div>Diploma Teknologi Komputeran • Kolej Vokasional Perdagangan Johor Bahru (KVPJB).</div>
      <div>Pasir Gudang, Johor, Malaysia • CGPA 3.98 • SKM Level 3: S103882102.</div>
      <div>5-Month OJT Internship (February – June 2027).</div>
      <div>Computer 3D Design inspired by the Commodore PET 8296.</div>
    </footer>

    <!-- Interactive Audio & UI Controller Scripts -->
    <script>
      // ==============================================
      // TACTILE WEB AUDIO SYNTHESIZER
      // ==============================================
      var audioEnabled = true;
      var audioCtx = null;

      function getAudioContext() {
        if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
          var AudioClass = window.AudioContext || window.webkitAudioContext;
          audioCtx = new AudioClass();
        }
        if (audioCtx && audioCtx.state === 'suspended') {
          audioCtx.resume();
        }
        return audioCtx;
      }

      function playBeep(freq, type, duration) {
        if (!audioEnabled) return;
        try {
          var ctx = getAudioContext();
          if (!ctx) return;
          var osc = ctx.createOscillator();
          var gain = ctx.createGain();
          osc.type = type || 'sine';
          osc.frequency.setValueAtTime(freq || 880, ctx.currentTime);
          gain.gain.setValueAtTime(0.04, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + (duration || 0.08));
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + (duration || 0.08));
        } catch (e) {}
      }

      function toggleAudioFeedback() {
        audioEnabled = !audioEnabled;
        var btn = document.getElementById('audio-toggle-btn');
        if (btn) btn.textContent = audioEnabled ? '🔊 Sound: ON' : '🔇 Sound: OFF';
        if (audioEnabled) playBeep(1000, 'triangle', 0.1);
      }

      // ==============================================
      // ACCORDION TOGGLE
      // ==============================================
      function toggleAccordion(btn) {
        playBeep(600, 'square', 0.04);
        var isCollapsed = btn.getAttribute('collapsed') === 'true';
        btn.setAttribute('collapsed', isCollapsed ? 'false' : 'true');
        btn.textContent = isCollapsed
          ? '[- COLLAPSE TECHNICAL SPEC]'
          : '[+ EXPAND TECHNICAL ARCHITECTURE SPEC]';
      }

      // ==============================================
      // CLIPBOARD COPY HELPER + TOAST
      // ==============================================
      function copyContact(text, label) {
        playBeep(1200, 'sine', 0.1);
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

      // ==============================================
      // MENU CONTROLS
      // ==============================================
      function closeMenu() {
        playBeep(440, 'triangle', 0.04);
        document.getElementsByTagName('nav')[0].classList.remove('active');
      }

      function toggleMenu() {
        playBeep(880, 'triangle', 0.04);
        var nav = document.getElementsByTagName('nav')[0];
        if (nav.classList.contains('active')) {
          nav.classList.remove('active');
        } else {
          nav.classList.add('active');
        }
      }

      // ==============================================
      // PROTOCOL & WEBLOGIC WATCHDOG
      // ==============================================
      if (window.location.protocol === 'file:') {
        var notice = document.getElementById('file-protocol-notice');
        if (notice) notice.style.display = 'block';
      }

      window.addEventListener('load', function() {
        if (window.__WEBGL_LOADED__) {
          var hb = document.getElementById('hero-backup');
          if (hb) hb.style.display = 'none';
        }

        // Safety watchdog: ensure loading screen dismisses cleanly
        setTimeout(function() {
          var loading = document.getElementById('loading');
          if (loading && loading.style.display !== 'none' && !window.__WEBGL_LOADED__) {
            console.warn('Safety watchdog: dismissing loading overlay');
            loading.style.opacity = '0';
            setTimeout(function() {
              loading.style.display = 'none';
            }, 400);
          }
        }, 3000);
      });
    </script>
  </body>
</html>
`;

fs.writeFileSync('index.html', html);
fs.writeFileSync('retro-computer-website-main/retro-computer-website-main/index.html', html);
console.log('Successfully built enhanced index.html in both locations! Length:', html.length);

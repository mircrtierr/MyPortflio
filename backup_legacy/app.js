/**
 * Muhammad Mirza Aqmal Raziq bin Mirza Affzard - Developer Portfolio
 * Human-Crafted Interactive Engineering Experience
 * GitHub: https://github.com/mircrtierr
 */

// Application State
const STATE = {
  theme: localStorage.getItem('portfolio-theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'),
  soundEnabled: localStorage.getItem('portfolio-sound') === 'true',
  terminalHistory: [],
  historyIndex: -1,
  activeFilter: 'all',
  activeSkillDomain: 'all',
  activeTerminalTab: 'terminal'
};

// Subtle Web Audio Engine (Tactile clicks)
class TactileAudio {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playSoftClick() {
    if (!STATE.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.03);

    gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.03);
  }

  playBeep() {
    if (!STATE.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, this.ctx.currentTime);
    osc.frequency.setValueAtTime(1174.66, this.ctx.currentTime + 0.06);

    gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.16);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.16);
  }
}

const audio = new TactileAudio();

// Candidate Data
const CANDIDATE = {
  name: "Muhammad Mirza Aqmal Raziq bin Mirza Affzard",
  shortName: "Mirza Aqmal",
  title: "Diploma Teknologi Komputeran • KVPJB",
  cgpa: "3.98",
  location: "Pasir Gudang, Johor, Malaysia",
  phone: "013-5788399",
  email: "mirzaaqmal22@gmail.com",
  github: "https://github.com/mircrtierr",
  linkedin: "https://www.linkedin.com/in/aqmal-raziq-3975b0346",
  ojtDuration: "February – June 2027 (5 Months)"
};

// Interactive CLI Command Registry
const COMMANDS = {
  help: {
    desc: "List available commands",
    execute: () => `
<div class="text-emerald-400 font-semibold mb-2">⚡ Available CLI Commands:</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1 text-xs">
  <div><span class="text-cyan-400 font-bold">about</span>       - Bio, academic background & CGPA</div>
  <div><span class="text-cyan-400 font-bold">projects</span>    - Featured engineering projects & repos</div>
  <div><span class="text-cyan-400 font-bold">skills</span>      - 7 core technical domains & tools</div>
  <div><span class="text-cyan-400 font-bold">github</span>      - GitHub profile & repository links</div>
  <div><span class="text-cyan-400 font-bold">linkedin</span>    - Official LinkedIn profile URL</div>
  <div><span class="text-cyan-400 font-bold">awards</span>      - Competition podiums & awards</div>
  <div><span class="text-cyan-400 font-bold">certs</span>       - Industry certs (OpenAI, ICDL, Cisco, SKM3)</div>
  <div><span class="text-cyan-400 font-bold">references</span>  - Academic & institutional referees</div>
  <div><span class="text-cyan-400 font-bold">ojt</span>         - 5-Month IT Internship details (Feb–Jun 2027)</div>
  <div><span class="text-cyan-400 font-bold">contact</span>     - Direct phone, WhatsApp, email & vCard</div>
  <div><span class="text-cyan-400 font-bold">resume</span>      - Open / download verified resume PDF</div>
  <div><span class="text-cyan-400 font-bold">theme</span>       - Toggle between light and dark theme</div>
  <div><span class="text-cyan-400 font-bold">clear</span>       - Clear current terminal screen</div>
</div>
<div class="mt-2 text-slate-500 text-xs italic">Tip: You can click the quick command pills below or press Tab for auto-complete.</div>`
  },

  about: {
    desc: "Display candidate background",
    execute: () => `
<div class="border-l-2 border-emerald-500 pl-3 py-1 my-2">
  <div class="text-emerald-400 font-bold text-sm">${CANDIDATE.name}</div>
  <div class="text-slate-300 text-xs mt-1">📍 ${CANDIDATE.location}</div>
  <div class="text-slate-300 text-xs mt-1">🎓 <strong>Diploma Teknologi Komputeran</strong> at Kolej Vokasional Perdagangan Johor Bahru</div>
  <div class="text-slate-300 text-xs mt-1">🏆 Academic Standing: <span class="text-emerald-400 font-bold">CGPA ${CANDIDATE.cgpa} / 4.00</span></div>
  <div class="text-slate-300 text-xs mt-1">💼 Seeking: <span class="text-cyan-400 font-semibold">5-Month IT Internship / OJT (${CANDIDATE.ojtDuration})</span></div>
  <div class="text-slate-400 text-xs mt-2">Passionate about connecting software with physical hardware — from building edge facial recognition with ESP32-CAM and FAISS to training custom computer vision models with YOLO.</div>
</div>`
  },

  projects: {
    desc: "List featured engineering projects",
    execute: () => `
<div class="text-emerald-400 font-bold mb-2">🚀 Featured Engineering Projects:</div>

<div class="mb-3 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
  <div class="flex items-center justify-between">
    <span class="text-cyan-300 font-bold text-xs">[1] SmartAttend KVPJB</span>
    <span class="text-emerald-400 text-[11px] font-mono">Edge AI + Web</span>
  </div>
  <p class="text-slate-300 text-xs mt-1">Facial Recognition Attendance Management System powered by Python Flask, InsightFace (ArcFace), FAISS 512D vector embeddings, and ESP32-CAM hardware capture.</p>
  <div class="mt-2 flex flex-wrap gap-2 text-[11px]">
    <a href="https://github.com/mircrtierr/smartattend-kvpjb" target="_blank" class="text-emerald-400 underline hover:text-emerald-300">↗ GitHub Repository</a>
    <span class="text-slate-600">|</span>
    <button onclick="openProjectModal('smartattend')" class="text-cyan-400 underline hover:text-cyan-300">🔍 Architecture Breakdown</button>
  </div>
</div>

<div class="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
  <div class="flex items-center justify-between">
    <span class="text-cyan-300 font-bold text-xs">[2] Electronics Object Detection</span>
    <span class="text-emerald-400 text-[11px] font-mono">Computer Vision</span>
  </div>
  <p class="text-slate-300 text-xs mt-1">Custom computer vision model trained on annotated hardware datasets via Roboflow, Google Colab, and YOLO for vocational lab auditing.</p>
  <div class="mt-2 flex flex-wrap gap-2 text-[11px]">
    <a href="https://github.com/mircrtierr/yolo-electronics-detection" target="_blank" class="text-emerald-400 underline hover:text-emerald-300">↗ GitHub Repository</a>
    <span class="text-slate-600">|</span>
    <button onclick="openProjectModal('yolo')" class="text-cyan-400 underline hover:text-cyan-300">🔍 Dataset & Pipeline Modal</button>
  </div>
</div>`
  },

  skills: {
    desc: "Display technical competence across 7 core domains",
    execute: () => `
<div class="text-emerald-400 font-bold mb-2">🛠️ Technical Skills (7 Core Domains):</div>
<div class="space-y-1.5 text-xs">
  <div><span class="text-cyan-400 font-semibold">• Programming:</span> Python, Java, PHP, JavaScript</div>
  <div><span class="text-cyan-400 font-semibold">• Web Development:</span> HTML5, CSS3, Tailwind CSS, Laravel, Flask</div>
  <div><span class="text-cyan-400 font-semibold">• App Development:</span> Java Swing, JFrame, Android Studio, NetBeans (SKM Level 3)</div>
  <div><span class="text-cyan-400 font-semibold">• Database Management:</span> MySQL, MariaDB, SQL Query Optimization</div>
  <div><span class="text-cyan-400 font-semibold">• AI & Machine Learning:</span> YOLO, OpenCV, Roboflow, Google Colab, ArcFace, FAISS</div>
  <div><span class="text-cyan-400 font-semibold">• Networking:</span> Cisco Packet Tracer, TCP/IP, OSI Model, Router/Switch Config</div>
  <div><span class="text-cyan-400 font-semibold">• Cybersecurity:</span> Basic Cybersecurity, Reverse Engineering Fundamentals</div>
</div>`
  },

  github: {
    desc: "Show GitHub profile and repositories",
    execute: () => `
<div class="text-emerald-400 font-bold mb-1">🐙 GitHub Profile:</div>
<div class="text-xs text-slate-300">Profile URL: <a href="https://github.com/mircrtierr" target="_blank" class="text-cyan-400 underline font-mono">https://github.com/mircrtierr</a></div>
<div class="mt-2 space-y-1 text-xs">
  <div class="text-slate-300 font-mono">📁 <a href="https://github.com/mircrtierr/smartattend-kvpjb" target="_blank" class="text-emerald-400 underline">smartattend-kvpjb</a> - Facial recognition attendance system</div>
  <div class="text-slate-300 font-mono">📁 <a href="https://github.com/mircrtierr/yolo-electronics-detection" target="_blank" class="text-emerald-400 underline">yolo-electronics-detection</a> - Hardware component object detection model</div>
  <div class="text-slate-300 font-mono">📁 <a href="https://github.com/mircrtierr/MyPortflio" target="_blank" class="text-emerald-400 underline">MyPortflio</a> - Portfolio repository</div>
</div>`
  },

  awards: {
    desc: "Display competitive achievements",
    execute: () => `
<div class="text-emerald-400 font-bold mb-2">🏅 Honors & Awards (5+ Recognitions):</div>
<div class="space-y-2 text-xs">
  <div class="border-l-2 border-amber-400 pl-2">
    <div class="flex items-center justify-between">
      <span class="text-amber-300 font-semibold">Champion / 1st Place (Johor State Level) 🏆</span>
      <button onclick="openAwardModal('johan_apps_ideation_johor')" class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] hover:bg-amber-500/30">View Trophy 🏆</button>
    </div>
    <div class="text-slate-300">Apps Ideation Challenge (Secondary School – Android Category) | JPN Johor (2023)</div>
  </div>
  <div class="border-l-2 border-emerald-400 pl-2">
    <div class="flex items-center justify-between">
      <span class="text-emerald-300 font-semibold">Third Place (National Level) 🥉</span>
      <button onclick="openAwardModal('android_national_mmu')" class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] hover:bg-emerald-500/30">View Trophy 🏆</button>
    </div>
    <div class="text-slate-300">Pertandingan Pembangunan Aplikasi Android | KPM (BSTP), JPN Melaka & MMU (2023)</div>
  </div>
  <div class="border-l-2 border-cyan-400 pl-2">
    <div class="flex items-center justify-between">
      <span class="text-cyan-300 font-semibold">Fifth Place (National Level) 🎙️</span>
      <button onclick="openAwardModal('petah_madani_podcast')" class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] hover:bg-cyan-500/30">View Trophy 🏆</button>
    </div>
    <div class="text-slate-300">PETAH MADANI: Beyond the Mic – Podcast Challenge | Ministry of Education Malaysia (2026)</div>
  </div>
  <div class="border-l-2 border-amber-400 pl-2">
    <div class="text-amber-300 font-semibold">1st Runner-Up / 2nd Place (College Level)</div>
    <div class="text-slate-300">KV Skills Competition in Web Technology | KVPJB (2024)</div>
  </div>
  <div class="border-l-2 border-emerald-400 pl-2">
    <div class="text-emerald-300 font-semibold">Consolation Prize (Johor Zone Level)</div>
    <div class="text-slate-300">KV Skills Competition in Web Technology | Kolej Vokasional Malaysia (2025)</div>
  </div>
</div>`
  },

  certs: {
    desc: "Display verified industry certifications",
    execute: () => `
<div class="text-emerald-400 font-bold mb-2">📜 Verified Qualifications & Certifications (6 Total):</div>
<div class="space-y-2 text-xs">
  <div class="p-2 rounded bg-slate-900/80 border border-slate-800">
    <div class="font-bold text-emerald-400">1. Sijil Kemahiran Malaysia (SKM) Tahap 3 – Application Development</div>
    <div class="text-slate-400 text-[11px]">JPK Kementerian Sumber Manusia • No. Sijil: S103882102 • NOSS: IT-010-3:2016</div>
    <div class="mt-1 flex gap-2">
      <button onclick="openCertificateModal('skm3')" class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px]">Inspect Cert</button>
      <a href="assets/certificates/sijil_skm3_jpk_official.pdf" target="_blank" class="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] inline-flex items-center gap-1">Official PDF</a>
    </div>
  </div>
  <div class="p-2 rounded bg-slate-900/80 border border-slate-800">
    <div class="font-bold text-cyan-400">2. OpenAI Academy – AI Foundations</div>
    <div class="text-slate-400 text-[11px]">Cert ID: 6u8b3zqsu9 • Issued: 17 Aug 2026</div>
    <div class="mt-1 flex gap-2">
      <button onclick="openCertificateModal('openai_foundations')" class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px]">Inspect Cert</button>
      <a href="https://academy.openai.com/public/certificate/6u8b3zqsu9" target="_blank" class="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">Verify Online</a>
    </div>
  </div>
  <div class="p-2 rounded bg-slate-900/80 border border-slate-800">
    <div class="font-bold text-cyan-400">3. OpenAI Academy – Agents and Workflows</div>
    <div class="text-slate-400 text-[11px]">Cert ID: igra2j14wu • Issued: 17 Aug 2026</div>
    <div class="mt-1 flex gap-2">
      <button onclick="openCertificateModal('openai_agents')" class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px]">Inspect Cert</button>
      <a href="https://academy.openai.com/public/certificate/igra2j14wu" target="_blank" class="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">Verify Online</a>
    </div>
  </div>
  <div class="p-2 rounded bg-slate-900/80 border border-slate-800">
    <div class="font-bold text-cyan-400">4. OpenAI Academy – Applied AI Foundations</div>
    <div class="text-slate-400 text-[11px]">Cert ID: pt4kythdcy • Issued: 17 Aug 2026</div>
    <div class="mt-1 flex gap-2">
      <button onclick="openCertificateModal('openai_applied')" class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px]">Inspect Cert</button>
      <a href="https://academy.openai.com/public/certificate/pt4kythdcy" target="_blank" class="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">Verify Online</a>
    </div>
  </div>
  <div class="p-2 rounded bg-slate-900/80 border border-slate-800">
    <div class="font-bold text-emerald-400">5. ICDL Certificate – AI Essentials (Syllabus 2.0)</div>
    <div class="text-slate-400 text-[11px]">ICDL Asia • Candidate No: MY0000023321 • 5 Nov 2026</div>
    <div class="mt-1 flex gap-2">
      <button onclick="openCertificateModal('icdl')" class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px]">Inspect Cert</button>
    </div>
  </div>
  <div class="p-2 rounded bg-slate-900/80 border border-slate-800">
    <div class="font-bold text-cyan-400">6. Cisco Networking Academy – IT Essentials</div>
    <div class="text-slate-400 text-[11px]">Cisco Academy • KVPJB • ID: b3d010ca • 11 Apr 2026</div>
    <div class="mt-1 flex gap-2">
      <button onclick="openCertificateModal('cisco')" class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px]">Inspect Cert</button>
    </div>
  </div>
</div>
<div class="mt-3">
  <a href="assets/certificates/all_certificates.pdf" target="_blank" class="text-emerald-400 hover:underline font-mono text-xs">📄 Download Official PDF Bundle (6 Pages)</a>
</div>`
  },

  references: {
    desc: "Display academic & institutional referees",
    execute: () => `
<div class="text-emerald-400 font-bold mb-2">🎓 Academic & Institutional Referees:</div>
<div class="space-y-2 text-xs">
  <div class="p-2.5 rounded bg-slate-900/80 border border-slate-800">
    <div class="text-white font-bold text-sm">Nor'asikin binti Abu Bakar</div>
    <div class="text-slate-300">Pensyarah, Jabatan Teknologi Maklumat</div>
    <div class="text-slate-400 text-[11px]">Kolej Vokasional Perdagangan Johor Bahru</div>
    <div class="text-emerald-400 font-mono text-[11px] mt-1">E-mel: <a href="mailto:g-56178128@moe-dl.edu.my" class="hover:underline">g-56178128@moe-dl.edu.my</a></div>
  </div>
  <div class="p-2.5 rounded bg-slate-900/80 border border-slate-800">
    <div class="text-white font-bold text-sm">Nurul Syaza binti Rosli</div>
    <div class="text-slate-300">Pensyarah, Jabatan Teknologi Maklumat</div>
    <div class="text-slate-400 text-[11px]">Kolej Vokasional Perdagangan Johor Bahru</div>
    <div class="text-emerald-400 font-mono text-[11px] mt-1">E-mel: <a href="mailto:g-42015121@moe-dl.edu.my" class="hover:underline">g-42015121@moe-dl.edu.my</a></div>
  </div>
</div>`
  },

  ojt: {
    desc: "Display 5-month internship placement information",
    execute: () => `
<div class="text-emerald-400 font-bold mb-2">💼 5-Month Industrial Training (OJT) Availability:</div>
<div class="bg-slate-900/60 p-3 rounded border border-emerald-500/30 text-xs space-y-1.5">
  <div>📅 <strong class="text-slate-200">Duration:</strong> February 2027 – June 2027 (5 Months full-time)</div>
  <div>📍 <strong class="text-slate-200">Location Base:</strong> Pasir Gudang / Johor Bahru / Open to Remote or Hybrid IT roles</div>
  <div>🎯 <strong class="text-slate-200">Target Roles:</strong> Junior Software Engineer, Full-Stack Web Developer, Python/AI Trainee, Network & Systems Support</div>
  <div>⚡ <strong class="text-slate-200">Academic Standing:</strong> Current CGPA 3.98 (Top Performer, Diploma Teknologi Komputeran)</div>
  <div class="pt-2 text-cyan-300">👉 Reach out directly: <span class="font-mono text-emerald-400 font-bold">${CANDIDATE.phone}</span> / <span class="font-mono text-emerald-400 font-bold">${CANDIDATE.email}</span></div>
</div>`
  },

  linkedin: {
    desc: "Open LinkedIn professional profile",
    execute: () => `
<div class="text-cyan-400 font-bold mb-1">💼 LinkedIn Profile:</div>
<div class="text-xs text-slate-300">
  Profile URL: <a href="https://www.linkedin.com/in/aqmal-raziq-3975b0346" target="_blank" class="text-cyan-300 underline font-mono">https://www.linkedin.com/in/aqmal-raziq-3975b0346</a>
</div>
<div class="mt-2 text-slate-400 text-xs">Ready to connect with IT recruiters, engineering leads, and technology teams.</div>`
  },

  contact: {
    desc: "Show contact channels & quick connection links",
    execute: () => `
<div class="text-emerald-400 font-bold mb-2">📬 Contact Channels:</div>
<div class="space-y-1.5 text-xs">
  <div>💬 WhatsApp: <a href="https://wa.me/60135788399" target="_blank" class="text-emerald-400 font-mono hover:underline">+6013-5788399</a></div>
  <div>📱 Phone: <a href="tel:0135788399" class="text-cyan-400 font-mono hover:underline">013-5788399</a></div>
  <div>📧 Email: <a href="mailto:mirzaaqmal22@gmail.com" class="text-cyan-400 font-mono hover:underline">mirzaaqmal22@gmail.com</a></div>
  <div>💼 LinkedIn: <a href="https://www.linkedin.com/in/aqmal-raziq-3975b0346" target="_blank" class="text-cyan-400 font-mono hover:underline">linkedin.com/in/aqmal-raziq-3975b0346</a></div>
  <div>🐙 GitHub: <a href="https://github.com/mircrtierr" target="_blank" class="text-cyan-400 font-mono hover:underline">https://github.com/mircrtierr</a></div>
  <div>📇 vCard: <a href="Muhammad_Mirza_Aqmal_Raziq.vcf" download="Muhammad_Mirza_Aqmal_Raziq.vcf" class="text-cyan-300 font-mono hover:underline">Download Contact (.vcf)</a></div>
  <div>📄 Resume: <a href="Resume_Muhammad_Mirza_Aqmal_Raziq.pdf" download="Resume_Muhammad_Mirza_Aqmal_Raziq.pdf" class="text-emerald-400 font-mono hover:underline">Resume_Muhammad_Mirza_Aqmal_Raziq.pdf (Download)</a></div>
</div>`
  },

  resume: {
    desc: "Open or download the verified resume",
    execute: () => {
      window.open('Resume_Muhammad_Mirza_Aqmal_Raziq.pdf', '_blank');
      return `<div class="text-emerald-400 text-xs">Opening verified PDF resume in new tab... <a href="Resume_Muhammad_Mirza_Aqmal_Raziq.pdf" download="Resume_Muhammad_Mirza_Aqmal_Raziq.pdf" class="underline text-cyan-300 font-mono">Download directly</a></div>`;
    }
  },

  theme: {
    desc: "Toggle light / dark mode",
    execute: () => {
      const isLight = document.body.classList.contains('light-theme');
      setTheme(isLight ? 'dark' : 'light');
      return `<div class="text-xs text-emerald-400">Switched theme to <span class="font-mono font-bold">${isLight ? 'dark' : 'light'}</span>.</div>`;
    }
  },

  clear: {
    desc: "Clear terminal screen",
    execute: () => {
      const terminalOutput = document.getElementById('terminal-output');
      if (terminalOutput) terminalOutput.innerHTML = '';
      return '';
    }
  }
};

// Lifecycle Boot
document.addEventListener('DOMContentLoaded', () => {
  initRetroBootloader();
  initTheme();
  initSoundToggle();
  initJohorClock();
  initSpotlightMouseTracking();
  initThreeWebGL();
  initCommodore3D();
  initScrollTip();
  initTerminalTabs();
  initTerminal();
  initSmartAttendSimulator();
  initYoloPlayground();
  initSkillsFilter();
  initCredentialsFilter();
  initKeyboardShortcuts();
  initScrollProgress();
  initScrollReveal();
  initScrollSpy();
  initBackToTop();
});

// Johor Bahru Live Clock Widget
function initJohorClock() {
  const clockEl = document.getElementById('johor-clock');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    // Format to MYT (GMT+8)
    const options = { timeZone: 'Asia/Kuala_Lumpur', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const timeStr = now.toLocaleTimeString('en-US', options);
    clockEl.textContent = `${timeStr} MYT`;
  }

  update();
  setInterval(update, 1000);
}

// Mouse-Tracked Spotlight on Cards (Artisan human touch)
function initSpotlightMouseTracking() {
  const cards = document.querySelectorAll('.spotlight-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

// Terminal Tab Switching & Remote Navigation
function initTerminalTabs() {
  const tabs = document.querySelectorAll('.terminal-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      audio.playSoftClick();
      const target = tab.getAttribute('data-tab');
      window.switchTerminalTab(target);
    });
  });
}

window.switchTerminalTab = function(target) {
  const tabs = document.querySelectorAll('.terminal-tab');
  const panels = {
    retro3d: document.getElementById('tab-panel-retro3d'),
    terminal: document.getElementById('tab-panel-terminal'),
    code: document.getElementById('tab-panel-code'),
    json: document.getElementById('tab-panel-json')
  };

  STATE.activeTerminalTab = target;

  tabs.forEach(t => {
    if (t.getAttribute('data-tab') === target) {
      t.classList.add('active');
    } else {
      t.classList.remove('active');
    }
  });

  Object.keys(panels).forEach(key => {
    if (panels[key]) {
      if (key === target) {
        panels[key].classList.remove('hidden');
      } else {
        panels[key].classList.add('hidden');
      }
    }
  });

  if (target === 'terminal') {
    const input = document.getElementById('terminal-input');
    if (input) input.focus();
  }
};

// Terminal Logic
function initTerminal() {
  const terminalInput = document.getElementById('terminal-input');
  const terminalForm = document.getElementById('terminal-form');
  const terminalOutput = document.getElementById('terminal-output');

  if (!terminalForm || !terminalInput || !terminalOutput) return;

  terminalOutput.innerHTML = `
    <div class="text-slate-400 text-xs mb-2">
      <span class="text-emerald-400 font-mono font-bold">mirza@kvpjb-system</span> <span class="text-slate-500">[zsh v5.9]</span>
      <br>Type <span class="text-cyan-400 font-bold font-mono">help</span> or click command pills below to explore.
    </div>
  `;

  terminalInput.addEventListener('input', () => {
    audio.playSoftClick();
  });

  terminalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const rawVal = terminalInput.value.trim();
    if (!rawVal) return;

    handleCommand(rawVal);
    STATE.terminalHistory.push(rawVal);
    STATE.historyIndex = STATE.terminalHistory.length;
    terminalInput.value = '';
    audio.playBeep();
  });

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (STATE.historyIndex > 0) {
        STATE.historyIndex--;
        terminalInput.value = STATE.terminalHistory[STATE.historyIndex] || '';
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (STATE.historyIndex < STATE.terminalHistory.length - 1) {
        STATE.historyIndex++;
        terminalInput.value = STATE.terminalHistory[STATE.historyIndex] || '';
      } else {
        STATE.historyIndex = STATE.terminalHistory.length;
        terminalInput.value = '';
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const current = terminalInput.value.trim().toLowerCase();
      if (!current) return;
      const match = Object.keys(COMMANDS).find(c => c.startsWith(current));
      if (match) {
        terminalInput.value = match;
      }
    }
  });

  const terminalWindow = document.getElementById('terminal-window');
  if (terminalWindow) {
    terminalWindow.addEventListener('click', (e) => {
      if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'A') {
        terminalInput.focus();
      }
    });
  }
}

function handleCommand(cmdStr) {
  const terminalOutput = document.getElementById('terminal-output');
  const terminalContainer = document.getElementById('terminal-container');
  if (!terminalOutput) return;

  const parts = cmdStr.trim().split(/\s+/);
  const command = parts[0].toLowerCase();
  const args = parts.slice(1);

  const cmdRow = document.createElement('div');
  cmdRow.className = 'mt-2 text-xs flex items-center space-x-1.5';
  cmdRow.innerHTML = `
    <span class="text-emerald-400 font-bold font-mono">mirza@kvpjb:~$</span>
    <span class="text-slate-100 font-mono">${escapeHtml(cmdStr)}</span>
  `;
  terminalOutput.appendChild(cmdRow);

  // Mirror command to 3D Commodore CRT display if active
  if (typeof window.logToCommodoreCrt === 'function') {
    window.logToCommodoreCrt(cmdStr);
  }

  if (COMMANDS[command]) {
    const result = COMMANDS[command].execute(args);
    if (result) {
      appendOutput(result);
    }
  } else {
    appendOutput(`
      <div class="text-xs text-red-400 mt-1">
        command not found: <span class="font-mono">${escapeHtml(command)}</span>. 
        Type <span class="text-cyan-400 font-mono font-bold cursor-pointer underline" onclick="runCliCommand('help')">help</span> to view available commands.
      </div>
    `);
  }

  if (terminalContainer) {
    terminalContainer.scrollTop = terminalContainer.scrollHeight;
  }
}

function appendOutput(htmlContent) {
  const terminalOutput = document.getElementById('terminal-output');
  if (!terminalOutput) return;
  const outDiv = document.createElement('div');
  outDiv.className = 'text-xs text-slate-300 mt-1 mb-2 leading-relaxed';
  outDiv.innerHTML = htmlContent;
  terminalOutput.appendChild(outDiv);
}

window.runCliCommand = function(cmd) {
  const terminalInput = document.getElementById('terminal-input');
  audio.playSoftClick();
  if (terminalInput) {
    terminalInput.value = cmd;
    handleCommand(cmd);
    terminalInput.value = '';
    terminalInput.focus();
    audio.playBeep();
  }
};

window.submitCliCommand = function() {
  const input = document.getElementById('terminal-input');
  if (!input) return;
  const val = input.value.trim();
  if (!val) return;
  handleCommand(val);
  STATE.terminalHistory.push(val);
  STATE.historyIndex = STATE.terminalHistory.length;
  input.value = '';
  audio.playBeep();
};

// ========================================================
// 1. SMARTATTEND LIVE EDGE & FAISS SIMULATION WIDGET
// ========================================================
function initSmartAttendSimulator() {
  const triggerBtn = document.getElementById('sim-trigger-btn');
  const simStatus = document.getElementById('sim-status-badge');
  const simFaceBox = document.getElementById('sim-face-box');
  const simMetrics = document.getElementById('sim-metrics');
  const simConsole = document.getElementById('sim-log-console');

  if (!triggerBtn || !simStatus || !simFaceBox || !simMetrics || !simConsole) return;

  let isScanning = false;

  triggerBtn.addEventListener('click', () => {
    if (isScanning) return;
    isScanning = true;
    audio.playSoftClick();

    // Step 1: Ingesting Frame
    triggerBtn.disabled = true;
    triggerBtn.textContent = "Processing Stream...";
    simStatus.innerHTML = `<span class="w-2 h-2 rounded-full bg-amber-400 animate-ping mr-1.5"></span> ESP32-CAM Ingestion`;
    simStatus.className = "text-[11px] font-mono px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center";

    simConsole.innerHTML += `<div class="text-slate-400">[0.0ms] Incoming HTTP multipart frame from 192.168.1.142 (ESP32-CAM)...</div>`;

    // Step 2: RetinaFace Bounding Box Detection
    setTimeout(() => {
      simFaceBox.classList.remove('opacity-0');
      simFaceBox.classList.add('opacity-100');
      simConsole.innerHTML += `<div class="text-cyan-400">[12.4ms] RetinaFace: Face localized at (x:148, y:72, w:180, h:180). Conf: 0.992</div>`;
      audio.playSoftClick();
    }, 400);

    // Step 3: ArcFace Embedding Extraction & FAISS Vector Search
    setTimeout(() => {
      simConsole.innerHTML += `<div class="text-purple-400">[26.1ms] InsightFace: Extracted 512D normalized embedding vector.</div>`;
      simConsole.innerHTML += `<div class="text-slate-400">[28.3ms] FAISS IndexFlatIP: Searching 1:N database index (Cosine Similarity)...</div>`;
    }, 900);

    // Step 4: Verification Result
    setTimeout(() => {
      audio.playBeep();
      simStatus.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400 mr-1.5"></span> Verified (6.2ms)`;
      simStatus.className = "text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center font-bold";

      simConsole.innerHTML += `<div class="text-emerald-400 font-bold">[34.5ms] MATCH: Muhammad Mirza Aqmal Raziq (Distance: 0.812 &gt;= 0.65)</div>`;
      simConsole.innerHTML += `<div class="text-emerald-300">[38.1ms] MariaDB: INSERT INTO attendance (student_id, status, timestamp) VALUES ('KVPJB-042', 'ON_TIME', NOW())</div>`;

      simMetrics.innerHTML = `
        <div class="p-2 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono">
          <span class="text-slate-400 block text-[10px]">Recognized Student</span>
          <span class="font-bold text-slate-100">Mirza Aqmal (KVPJB)</span>
        </div>
        <div class="p-2 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono">
          <span class="text-slate-400 block text-[10px]">FAISS Search Speed</span>
          <span class="font-bold text-emerald-400">6.2 ms (Sub-second)</span>
        </div>
        <div class="p-2 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono">
          <span class="text-slate-400 block text-[10px]">Confidence Metric</span>
          <span class="font-bold text-cyan-300">Cosine: 0.812 (Passed)</span>
        </div>
      `;

      triggerBtn.disabled = false;
      triggerBtn.textContent = "Test Another Verification";
      isScanning = false;
    }, 1500);
  });
}

// ========================================================
// 2. YOLO COMPUTER VISION INTERACTIVE PLAYGROUND
// ========================================================
function initYoloPlayground() {
  const runYoloBtn = document.getElementById('yolo-run-btn');
  const bboxes = document.querySelectorAll('.yolo-bbox');
  const yoloStats = document.getElementById('yolo-stats-text');

  if (!runYoloBtn || !yoloStats) return;

  let isInferring = false;

  runYoloBtn.addEventListener('click', () => {
    if (isInferring) return;
    isInferring = true;
    audio.playSoftClick();

    runYoloBtn.textContent = "Scanning Frame...";
    runYoloBtn.disabled = true;

    // Reset boxes
    bboxes.forEach(box => {
      box.classList.remove('opacity-100', 'bounding-box-active');
      box.classList.add('opacity-0');
    });

    // Animate boxes popping in one by one with confidence
    const delayStep = 250;
    bboxes.forEach((box, index) => {
      setTimeout(() => {
        box.classList.remove('opacity-0');
        box.classList.add('opacity-100', 'bounding-box-active');
        audio.playSoftClick();
      }, (index + 1) * delayStep);
    });

    setTimeout(() => {
      audio.playBeep();
      runYoloBtn.textContent = "Re-scan Inference";
      runYoloBtn.disabled = false;
      isInferring = false;
      yoloStats.innerHTML = `<span class="text-emerald-400 font-bold">4 Objects Detected</span> • Inference: <span class="font-bold text-cyan-300 font-mono">21.8ms (45.8 FPS)</span> • Model: <span class="text-slate-300 font-mono">YOLOv8s.pt</span>`;
    }, (bboxes.length + 1) * delayStep);
  });
}

// Project Modals
const PROJECT_MODAL_DATA = {
  smartattend: {
    title: "SmartAttend KVPJB – Facial Recognition Attendance Management System",
    category: "Edge AI • Deep Learning • Web Architecture",
    githubUrl: "https://github.com/mircrtierr/smartattend-kvpjb",
    overview: `
      SmartAttend KVPJB is an institutional facial recognition attendance platform engineered for Kolej Vokasional Perdagangan Johor Bahru. 
      It automates student verification, eliminates proxy check-ins, and cuts morning check-in wait times from minutes to under 500 milliseconds per person.
    `,
    architectureHtml: `
      <div class="space-y-4">
        <!-- Live Dashboard Image Showcase -->
        <div class="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-xl">
          <div class="p-2.5 border-b border-slate-800 bg-slate-900/90 flex items-center justify-between text-xs font-mono text-slate-300">
            <span class="flex items-center gap-2 text-emerald-400 font-bold">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              SmartAttend Operations Console & Attendance Logs
            </span>
            <span class="text-[11px] text-slate-400">Candidate Student Record: JKV0625KA013</span>
          </div>
          <a href="assets/projects/smartattend_dashboard.jpg" target="_blank" class="block relative group/zoom" title="Click to open original screenshot in high-resolution">
            <img src="assets/projects/smartattend_dashboard.jpg" alt="SmartAttend Administrative Dashboard Screenshot" class="w-full max-h-[380px] object-contain mx-auto bg-slate-950" />
            <div class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/zoom:opacity-100 transition-opacity flex items-center justify-center">
              <span class="px-3 py-1.5 rounded-lg bg-slate-900/90 text-white font-mono text-xs border border-slate-700 shadow">
                🔍 Open Full-Resolution Screenshot
              </span>
            </div>
          </a>
        </div>

        <div class="bg-slate-950 p-3.5 rounded-lg border border-slate-800 font-mono text-xs text-emerald-400 leading-relaxed overflow-x-auto">
+-----------------------------------------------------------------------------------------+
|                              SYSTEM ARCHITECTURE FLOW                                  |
+-----------------------------------------------------------------------------------------+
  [ ESP32-CAM Node ] ----(HTTP MJPEG/POST)----> [ Flask Ingestion API ]
                                                          |
                                                          v
                                               [ InsightFace (ArcFace) ]
                                                          | (512-dim Normalized Vector)
                                                          v
                                               [ FAISS Vector Index ] <--- IndexFlatIP (Cosine)
                                                          |
                                      +-------------------+-------------------+
                                      | Match (Dist >= 0.65)                  | Unrecognized
                                      v                                       v
                              [ Student Verified ]                    [ Flag Unknown / Alert ]
                                      |
                                      v
                        [ MySQL / MariaDB Relational Store ]
                           (Audit Logs, Check-in/out, Timestamps)
                                      |
                                      v
                      [ Web Dashboard & Analytics UI ]
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
            <h4 class="font-bold text-cyan-400 mb-1">Hardware & Edge Capture</h4>
            <p class="text-slate-300">ESP32-CAM microcontroller with OV2640 camera sensor mounted at classroom/campus turnstiles. Transmits encrypted frame packets via Wi-Fi 802.11 b/g/n to central Flask endpoints.</p>
          </div>
          <div class="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
            <h4 class="font-bold text-cyan-400 mb-1">Vector Search (FAISS)</h4>
            <p class="text-slate-300">Employs Facebook AI Similarity Search (FAISS IndexFlatIP) for instant inner-product cosine similarity lookup across thousands of 512D embeddings in sub-10ms latency.</p>
          </div>
          <div class="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
            <h4 class="font-bold text-cyan-400 mb-1">Face Recognition Engine</h4>
            <p class="text-slate-300">ArcFace (Additive Angular Margin Loss) deep convolutional network invariant to lighting fluctuations, glasses, facial angles, and surgical masks.</p>
          </div>
          <div class="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
            <h4 class="font-bold text-cyan-400 mb-1">Administrative Web Portal</h4>
            <p class="text-slate-300">Python Flask and Jinja2 frontend communicating with MariaDB/MySQL. Provides live attendance feeds, daily anomaly flagging, and instant CSV/PDF export for college administration.</p>
          </div>
        </div>
      </div>
    `,
    techBadges: ["Python", "Flask", "MySQL / MariaDB", "InsightFace (ArcFace)", "FAISS Vector Search", "ESP32-CAM", "OpenCV", "Tailwind CSS"]
  },

  yolo: {
    title: "Electronic & Computer Goods Object Detection – YOLO",
    category: "Computer Vision • Deep Learning • Hardware Classification",
    githubUrl: "https://github.com/mircrtierr/yolo-electronics-detection",
    overview: `
      An advanced computer vision detection and classification model designed to automatically identify, categorize, and count electronic and computer hardware components (motherboards, GPUs, CPUs, RAM modules, power supplies, hard drives, and peripheral cards) in real-time.
    `,
    architectureHtml: `
      <div class="space-y-4">
        <!-- Dual Colab Verification: Dataset Inference & Live Webcam -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Item 1: Colab Dataset Inference -->
          <div class="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-xl flex flex-col justify-between">
            <div class="p-2.5 border-b border-slate-800 bg-slate-900/90 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-2 text-cyan-400 font-bold">
                <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                Dataset Inference
              </span>
              <span class="text-[11px] text-slate-400">keyboard 0.91</span>
            </div>
            <a href="assets/projects/yolo_colab_detection.jpg" target="_blank" class="block relative group/zoom p-2 bg-slate-950" title="Click to open original screenshot">
              <img src="assets/projects/yolo_colab_detection.jpg" alt="Google Colab YOLO Detection Notebook Screenshot" class="w-full max-h-[220px] object-contain mx-auto" />
              <div class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/zoom:opacity-100 transition-opacity flex items-center justify-center">
                <span class="px-2.5 py-1 rounded-lg bg-slate-900/90 text-white font-mono text-xs border border-slate-700 shadow">
                  🔍 View Image
                </span>
              </div>
            </a>
          </div>

          <!-- Item 2: Colab Live Webcam Inference -->
          <div class="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-xl flex flex-col justify-between">
            <div class="p-2.5 border-b border-slate-800 bg-slate-900/90 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-2 text-emerald-400 font-bold">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Live Webcam Inference
              </span>
              <span class="text-[11px] text-slate-400">webcamCode001</span>
            </div>
            <a href="assets/projects/yolo_webcam_live.png" target="_blank" class="block relative group/zoom p-2 bg-slate-950" title="Click to open original webcam screenshot">
              <img src="assets/projects/yolo_webcam_live.png" alt="Google Colab Live Webcam Inference Screenshot" class="w-full max-h-[220px] object-contain mx-auto" />
              <div class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/zoom:opacity-100 transition-opacity flex items-center justify-center">
                <span class="px-2.5 py-1 rounded-lg bg-slate-900/90 text-white font-mono text-xs border border-slate-700 shadow">
                  🔍 View Image
                </span>
              </div>
            </a>
          </div>
        </div>

        <div class="bg-slate-950 p-3.5 rounded-lg border border-slate-800 font-mono text-xs text-cyan-400 leading-relaxed overflow-x-auto">
+-----------------------------------------------------------------------------------------+
|                             DATA & TRAINING PIPELINE                                    |
+-----------------------------------------------------------------------------------------+
  [ Raw Image Acquisition ] ---> [ Roboflow Platform ] 
                                          |
                                          +--> Bounding Box Annotation (7 Classes)
                                          +--> Data Augmentation (Flip, Mosaic, Hue, Blur)
                                          +--> Dataset Export (YOLOv8 PyTorch Format)
                                          |
                                          v
                              [ Google Colab GPU Environment ]
                                          |
                                          +--> Transfer Learning on CSPDarknet Backbone
                                          +--> Hyperparameter Tuning & Focal Loss Optimization
                                          +--> Epoch Training with Early Stopping
                                          |
                                          v
                              [ Model Weights (.pt / ONNX) ]
                                          |
                                          v
                              [ OpenCV Real-Time Inference ]
                        (Bounding Box Scoring, mAP@0.5 > 92%, Counting)
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
            <h4 class="font-bold text-emerald-400 mb-1">Dataset Engineering & Augmentation</h4>
            <p class="text-slate-300">Custom annotated computer hardware dataset hosted on Roboflow. Applied mosaic augmentation, random contrast, and scaling to replicate real-world e-waste and computer lab conditions.</p>
          </div>
          <div class="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
            <h4 class="font-bold text-emerald-400 mb-1">Model Architecture</h4>
            <p class="text-slate-300">YOLO (You Only Look Once) architecture utilizing Path Aggregation Network (PANet) and decoupled head for simultaneous bounding box regression and multi-class classification.</p>
          </div>
          <div class="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
            <h4 class="font-bold text-emerald-400 mb-1">Performance Benchmarks</h4>
            <p class="text-slate-300">Achieved robust mean Average Precision (mAP@0.5) exceeding 92% across multi-component clutter, running at 45+ FPS on standard test hardware.</p>
          </div>
          <div class="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
            <h4 class="font-bold text-emerald-400 mb-1">Practical Applications</h4>
            <p class="text-slate-300">Engineered for vocational computer lab hardware audits, automated electronic recycling sorters, and rapid component verification in technical education settings.</p>
          </div>
        </div>
      </div>
    `,
    techBadges: ["Python", "YOLOv8 / YOLOv5", "Roboflow", "Google Colab", "OpenCV", "PyTorch", "Computer Vision"]
  }
};

window.openProjectModal = function(projectId) {
  const data = PROJECT_MODAL_DATA[projectId];
  if (!data) return;

  audio.playBeep();

  const modalContainer = document.getElementById('project-modal');
  const modalContent = document.getElementById('project-modal-content');
  if (!modalContainer || !modalContent) return;

  modalContent.innerHTML = `
    <div class="p-6 md:p-8">
      <div class="flex items-start justify-between border-b border-slate-800 pb-4">
        <div>
          <span class="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">${data.category}</span>
          <h3 class="text-xl md:text-2xl font-bold text-white mt-1">${data.title}</h3>
        </div>
        <button onclick="closeProjectModal()" class="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <div class="mt-4">
        <p class="text-slate-300 text-sm leading-relaxed">${data.overview}</p>
      </div>

      <div class="mt-6">
        <h4 class="text-sm font-bold text-white mb-2 flex items-center gap-2">
          <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
          System Architecture & Technical Execution
        </h4>
        ${data.architectureHtml}
      </div>

      <div class="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div class="flex flex-wrap gap-1.5">
          ${data.techBadges.map(b => `<span class="tech-tag text-emerald-300">${b}</span>`).join('')}
        </div>
        <div class="flex items-center gap-3">
          <a href="${data.githubUrl}" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold text-xs rounded-lg transition-all shadow-md shadow-emerald-500/20">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            View Source on GitHub
          </a>
          <button onclick="closeProjectModal()" class="px-4 py-2 border border-slate-700 hover:bg-slate-800 text-slate-300 font-medium text-xs rounded-lg transition-colors">
            Close
          </button>
        </div>
      </div>
    </div>
  `;

  modalContainer.classList.remove('hidden');
  modalContainer.classList.add('flex');
  document.body.style.overflow = 'hidden';
};

window.closeProjectModal = function() {
  const modalContainer = document.getElementById('project-modal');
  if (modalContainer) {
    modalContainer.classList.add('hidden');
    modalContainer.classList.remove('flex');
    document.body.style.overflow = '';
  }
};

// ==============================================
// VERIFIED DIGITAL CERTIFICATES DATA & LIGHTBOX
// ==============================================
const CERTIFICATES_DATA = {
  skm3: {
    title: "Sijil Kemahiran Malaysia (SKM) Tahap 3",
    subtitle: "Pembangunan Aplikasi (Application Development) [IT-010-3:2016]",
    issuer: "Jabatan Pembangunan Kemahiran (JPK), Kementerian Sumber Manusia Malaysia",
    center: "Pusat Bertauliah K05104 (Kolej Vokasional Perdagangan Johor)",
    date: "17 November 2026",
    id: "S103882102",
    batch: "K05104-IT-010-3:2016-2023(MTB1)FT-092025",
    category: "National Vocational Standard",
    badgeColor: "emerald",
    image: "assets/certificates/cert_skm3_jpk.png",
    imageP2: "assets/certificates/cert_skm3_jpk_p2.png",
    pdfUrl: "assets/certificates/sijil_skm3_jpk_official.pdf",
    overview: "Official national vocational qualification formally issued under Akta Pembangunan Kemahiran Kebangsaan 2006 (Akta 652), certifying core competencies in software engineering, systems design, object-oriented programming, and relational database management under the Malaysian Qualifications Framework.",
    competencies: [
      "Requirements gathering & software systems analysis",
      "Full-stack software design and relational database modeling",
      "Object-oriented implementation, testing and debugging",
      "Software lifecycle compliance and documentation"
    ]
  },
  openai_foundations: {
    title: "OpenAI Academy – AI Foundations",
    subtitle: "Core Foundations of Modern Generative AI & Large Language Models",
    issuer: "OpenAI Academy",
    center: "OpenAI Official Accreditation",
    date: "17 August 2026",
    id: "6u8b3zqsu9",
    verifyUrl: "https://academy.openai.com/public/certificate/6u8b3zqsu9",
    category: "AI & Machine Learning",
    badgeColor: "cyan",
    image: "assets/certificates/cert_openai_ai_foundations.png",
    overview: "Certified foundational knowledge in large language model mechanics, attention mechanisms, tokenization pipelines, prompt techniques, and responsible AI practices.",
    competencies: [
      "Transformer and attention mechanism foundations",
      "Token probability distributions and generation sampling",
      "System prompt design, few-shot conditioning and formatting",
      "AI safety, hallucination mitigation and alignment"
    ]
  },
  openai_agents: {
    title: "OpenAI Academy – Agents and Workflows",
    subtitle: "Autonomous Agent Architectures & Tool Orchestration",
    issuer: "OpenAI Academy",
    center: "OpenAI Official Accreditation",
    date: "17 August 2026",
    id: "igra2j14wu",
    verifyUrl: "https://academy.openai.com/public/certificate/igra2j14wu",
    category: "Autonomous Systems",
    badgeColor: "cyan",
    image: "assets/certificates/cert_openai_agents_workflows.png",
    overview: "Advanced certification covering multi-step agent design patterns, deterministic tool use, function calling schemas, persistent memory, and agent orchestration.",
    competencies: [
      "Agentic loop cycles, reasoning patterns and stopping conditions",
      "Function calling and OpenAPI tool integration",
      "State preservation and conversation context management",
      "Multi-agent collaboration and subagent task delegation"
    ]
  },
  openai_applied: {
    title: "OpenAI Academy – Applied AI Foundations",
    subtitle: "Enterprise Problem-Solving with Applied AI",
    issuer: "OpenAI Academy",
    center: "OpenAI Official Accreditation",
    date: "17 August 2026",
    id: "pt4kythdcy",
    verifyUrl: "https://academy.openai.com/public/certificate/pt4kythdcy",
    category: "Applied AI & Engineering",
    badgeColor: "cyan",
    image: "assets/certificates/cert_openai_applied_ai.png",
    overview: "Practical engineering qualification on deploying production AI layers, semantic search, retrieval-augmented generation (RAG), and data integration pipelines.",
    competencies: [
      "Vector embeddings and similarity search indexing",
      "Retrieval-Augmented Generation (RAG) architecture",
      "AI integration into existing enterprise backends",
      "Performance evaluation and latency optimization"
    ]
  },
  icdl: {
    title: "ICDL Certificate – AI Essentials",
    subtitle: "Syllabus 2.0 • International Digital Literacy",
    issuer: "ICDL Asia / ICDL Foundation",
    center: "Kolej Vokasional Perdagangan Examination Center",
    date: "5 November 2026",
    id: "Candidate No: MY0000023321",
    category: "International Certification",
    badgeColor: "emerald",
    image: "assets/certificates/cert_icdl_ai_essentials.png",
    overview: "International digital literacy standard evaluating practical understanding of artificial intelligence applications, data ethics, and workflow automation.",
    competencies: [
      "Core AI concepts, machine learning vs traditional software",
      "Data ethics, privacy, bias, and trustworthy AI",
      "Workplace productivity tools powered by AI",
      "Ethical dilemmas and societal impact of automation"
    ]
  },
  cisco: {
    title: "Cisco Networking Academy – IT Essentials",
    subtitle: "PC Hardware, Operating Systems & Network Diagnostics",
    issuer: "Cisco Networking Academy",
    center: "Kolej Vokasional Perdagangan Cisco Academy",
    date: "11 April 2026",
    id: "b3d010ca-7f71-4090-a0e8-b2e6dcca0e66",
    category: "IT Infrastructure & Networking",
    badgeColor: "cyan",
    image: "assets/certificates/cert_cisco_it_essentials.png",
    overview: "Industry certification validating hands-on hardware assembly, operating system setup, network configuration, and enterprise diagnostics.",
    competencies: [
      "Hardware component diagnostics, motherboard, storage & RAM",
      "Windows/Linux OS installation, configuration and troubleshooting",
      "TCP/IP, subnetting, switch/router baseline configuration",
      "Operational security, preventative maintenance and safety"
    ]
  }
};

window.openCertificateModal = function(certKey) {
  const cert = CERTIFICATES_DATA[certKey];
  if (!cert) return;

  audio.playBeep();

  const modalContainer = document.getElementById('certificate-modal');
  const modalContent = document.getElementById('certificate-modal-content');
  if (!modalContainer || !modalContent) return;

  modalContent.innerHTML = `
    <div class="p-6 md:p-8">
      <!-- Modal Header -->
      <div class="flex items-start justify-between border-b border-slate-800 pb-4">
        <div>
          <span class="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">${cert.category}</span>
          <h3 class="text-xl md:text-2xl font-bold text-white mt-1">${cert.title}</h3>
          <p class="text-xs text-slate-300 font-mono mt-0.5">${cert.subtitle}</p>
        </div>
        <button onclick="closeCertificateModal()" class="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors" title="Close Modal (Esc)">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <!-- High-Res Certificate Preview Box -->
      <div class="mt-4">
        ${cert.imageP2 ? `
        <div class="flex items-center justify-between mb-2">
          <div class="flex gap-2 font-mono text-xs">
            <button id="cert-tab-p1" onclick="switchCertPage('p1')" class="px-3 py-1 rounded-md bg-emerald-500 text-slate-950 font-bold transition-colors">
              Muka 1 (Bahasa Melayu)
            </button>
            <button id="cert-tab-p2" onclick="switchCertPage('p2')" class="px-3 py-1 rounded-md bg-slate-800 text-slate-300 hover:text-white transition-colors">
              Page 2 (English Version)
            </button>
          </div>
          <span class="text-[11px] font-mono text-slate-500">2-Page Official Credential</span>
        </div>
        ` : ''}
        <div class="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl group flex items-center justify-center p-2">
          <img id="cert-modal-main-img" src="${cert.image}" alt="${cert.title}" class="max-h-[480px] w-auto max-w-full rounded object-contain shadow-lg" />
          <div class="absolute bottom-3 right-3 flex items-center gap-2">
            <a id="cert-modal-orig-link" href="${cert.image}" target="_blank" class="px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-mono text-xs backdrop-blur inline-flex items-center gap-1.5 transition-colors shadow">
              <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              <span>View Original Image</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Metadata Grid -->
      <div class="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
        <div class="p-3.5 rounded-lg bg-slate-900/70 border border-slate-800">
          <div class="text-slate-500 mb-1">// Recipient & Authority</div>
          <div class="text-white font-bold text-sm">Muhammad Mirza Aqmal Raziq</div>
          <div class="text-slate-300 mt-1">${cert.issuer}</div>
          <div class="text-slate-400 text-[11px] mt-0.5">${cert.center}</div>
        </div>

        <div class="p-3.5 rounded-lg bg-slate-900/70 border border-slate-800 flex flex-col justify-between">
          <div>
            <div class="text-slate-500 mb-1">// Credential Verification</div>
            <div class="flex items-center justify-between text-slate-300">
              <span>Issue Date:</span>
              <span class="text-emerald-400 font-semibold">${cert.date}</span>
            </div>
            <div class="flex items-center justify-between text-slate-300 mt-1">
              <span>No. Sijil / ID:</span>
              <span class="text-cyan-400 font-bold">${cert.id}</span>
            </div>
            ${cert.batch ? `
            <div class="flex items-center justify-between text-slate-300 mt-1">
              <span>Kod Kelulusan:</span>
              <span class="text-slate-400 font-mono text-[10px] truncate max-w-[200px]" title="${cert.batch}">${cert.batch}</span>
            </div>` : ''}
          </div>
          <div class="pt-2 flex justify-end">
            <button onclick="copyToClipboard('${cert.id}', 'Credential ID')" class="text-[11px] text-slate-400 hover:text-white inline-flex items-center gap-1">
              <svg class="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
              <span>Copy Credential ID</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Description & Competencies -->
      <div class="mt-4 p-4 rounded-lg bg-slate-900/40 border border-slate-800">
        <p class="text-slate-300 text-xs leading-relaxed">${cert.overview}</p>
        <div class="mt-3">
          <div class="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2">Verified Competencies:</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            ${cert.competencies.map(c => `
              <div class="flex items-start gap-2 text-slate-300">
                <span class="text-emerald-400 font-bold">✓</span>
                <span>${c}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div class="flex flex-wrap items-center gap-2">
          ${cert.verifyUrl ? `
            <a href="${cert.verifyUrl}" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg transition-colors shadow-sm">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              <span>Verify on Official Portal</span>
            </a>
          ` : `
            <span class="text-xs font-mono text-slate-400">Institutional Record Verified</span>
          `}
          ${cert.pdfUrl ? `
            <a href="${cert.pdfUrl}" target="_blank" download="Sijil_SKM3_JPK_Muhammad_Mirza_Aqmal_Raziq.pdf" class="inline-flex items-center gap-1.5 px-3 py-2 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 text-xs rounded-lg transition-colors font-mono">
              <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              <span>Download Official PDF</span>
            </a>
          ` : ''}
          <a href="assets/certificates/all_certificates.pdf" target="_blank" download="Verified_Certificates_Muhammad_Mirza_Aqmal_Raziq.pdf" class="inline-flex items-center gap-2 px-3 py-2 border border-slate-700 hover:border-slate-600 bg-slate-900 text-slate-300 text-xs rounded-lg transition-colors">
            <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            <span>Download All (7-Page PDF)</span>
          </a>
        </div>
        <button onclick="closeCertificateModal()" class="px-4 py-2 border border-slate-700 hover:bg-slate-800 text-slate-300 font-medium text-xs rounded-lg transition-colors">
          Close Preview
        </button>
      </div>
    </div>
  `;

  modalContainer.classList.remove('hidden');
  modalContainer.classList.add('flex');
  document.body.style.overflow = 'hidden';
};

window.closeCertificateModal = function() {
  const modalContainer = document.getElementById('certificate-modal');
  if (modalContainer) {
    modalContainer.classList.add('hidden');
    modalContainer.classList.remove('flex');
    document.body.style.overflow = '';
  }
};

window.switchCertPage = function(page) {
  const img = document.getElementById('cert-modal-main-img');
  const link = document.getElementById('cert-modal-orig-link');
  const btnP1 = document.getElementById('cert-tab-p1');
  const btnP2 = document.getElementById('cert-tab-p2');
  if (!img) return;

  if (page === 'p2') {
    img.src = 'assets/certificates/cert_skm3_jpk_p2.png';
    if (link) link.href = 'assets/certificates/cert_skm3_jpk_p2.png';
    if (btnP1) {
      btnP1.className = 'px-3 py-1 rounded-md bg-slate-800 text-slate-300 hover:text-white transition-colors';
    }
    if (btnP2) {
      btnP2.className = 'px-3 py-1 rounded-md bg-emerald-500 text-slate-950 font-bold transition-colors';
    }
  } else {
    img.src = 'assets/certificates/cert_skm3_jpk_p1.png';
    if (link) link.href = 'assets/certificates/cert_skm3_jpk_p1.png';
    if (btnP1) {
      btnP1.className = 'px-3 py-1 rounded-md bg-emerald-500 text-slate-950 font-bold transition-colors';
    }
    if (btnP2) {
      btnP2.className = 'px-3 py-1 rounded-md bg-slate-800 text-slate-300 hover:text-white transition-colors';
    }
  }
};

// ==========================================
// AUTHENTIC TROPHIES & AWARDS REGISTRY
// ==========================================
const AWARDS_DATA = {
  johan_apps_ideation_johor: {
    title: "Champion / 1st Place (Johor State Level)",
    subtitle: "Pertandingan Apps Ideation Challenge (Kategori Sekolah Menengah - Android)",
    category: "State Championship 🏆",
    issuer: "Jabatan Pendidikan Negeri Johor (JPN Johor)",
    date: "September 2023",
    trophyType: "Official Gold & Red State Champion Column Trophy",
    inscription: "JOHAN • Sekolah Menengah (Android) • Pertandingan Apps Ideation Challenge Johor 2023",
    overview: "Awarded First Place Champion across the State of Johor for developing an original Android mobile application prototype, evaluated by the Johor State Education Department on usability, code structure, visual UX design, and real-world student productivity impact.",
    image: "assets/awards/trophy_johan_apps_ideation_johor.jpg",
    tags: ["Android Development", "Java", "Mobile Prototyping", "State Champion 🏆", "JPN Johor"]
  },
  android_national_mmu: {
    title: "Third Place (National Level)",
    subtitle: "Pertandingan Pembangunan Aplikasi Android (Kategori Sekolah Menengah)",
    category: "National Podium 🥉",
    issuer: "Kementerian Pendidikan Malaysia (BSTP) & Multimedia University (MMU)",
    date: "2023",
    trophyType: "Official Faceted Crystal Plaque Trophy",
    inscription: "KEMENTERIAN PENDIDIKAN • BAHAGIAN SUMBER DAN TEKNOLOGI PENDIDIKAN DENGAN KERJASAMA JABATAN PENDIDIKAN NEGERI MELAKA • MMU • TEMPAT KETIGA",
    overview: "Secured 3rd Place nationwide in a high-intensity mobile development challenge organized jointly by the Ministry of Education Malaysia (BSTP), Melaka State Education Department, and Multimedia University (MMU). Evaluated on native Android development, algorithmic logic, and responsive interface architecture.",
    image: "assets/awards/trophy_android_national_mmu.jpg",
    tags: ["Android Architecture", "Java / Kotlin", "Mobile UX", "National Podium 🥉", "MMU", "KPM"]
  },
  petah_madani_podcast: {
    title: "Fifth Place (National Level)",
    subtitle: "PETAH MADANI: Beyond the Mic – Podcast Challenge",
    category: "National Podium 🎙️",
    issuer: "Kementerian Pendidikan Malaysia (KPM)",
    date: "12 – 15 October 2026",
    trophyType: "Official Acrylic & Beech Wood Podium Trophy",
    inscription: "KEMENTERIAN PENDIDIKAN • KELIMA • PERTANDINGAN BEYOND THE MIC: PODCAST PERINGKAT KEBANGSAAN KATEGORI LEPAS MENENGAH • 12-15 OKTOBER 2026 • PUSAT KONVENSYEN ANTARABANGSA PUTRAJAYA",
    overview: "Recognized nationally at the Putrajaya International Convention Centre (PICC) among top student finalists from across Malaysia. Evaluated on articulate technology storytelling, public speech delivery, audio presentation clarity, and engaging narrative structure under the Ministry of Education Malaysia.",
    image: "assets/awards/trophy_petah_madani_podcast.jpg",
    tags: ["Technical Storytelling", "Audio Production", "Podcast", "Public Presentation", "National Level 🎙️", "PICC Putrajaya"]
  }
};

window.openAwardModal = function(awardKey) {
  const award = AWARDS_DATA[awardKey];
  if (!award) return;

  audio.playBeep();

  const modalContainer = document.getElementById('award-modal');
  const modalContent = document.getElementById('award-modal-content');
  if (!modalContainer || !modalContent) return;

  modalContent.innerHTML = `
    <div class="p-6 md:p-8">
      <!-- Modal Header -->
      <div class="flex items-start justify-between border-b border-slate-800 pb-4">
        <div>
          <span class="text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider">${award.category}</span>
          <h3 class="text-xl md:text-2xl font-bold text-white mt-1">${award.title}</h3>
          <p class="text-xs text-slate-300 font-mono mt-0.5">${award.subtitle}</p>
        </div>
        <button onclick="closeAwardModal()" class="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors" title="Close Modal (Esc)">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <!-- High-Res Trophy Photo Preview -->
      <div class="mt-4">
        <div class="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl flex items-center justify-center p-3">
          <img src="${award.image}" alt="${award.title}" class="max-h-[500px] w-auto max-w-full rounded object-contain shadow-lg" />
          <div class="absolute bottom-3 right-3 flex items-center gap-2">
            <a href="${award.image}" target="_blank" class="px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-mono text-xs backdrop-blur inline-flex items-center gap-1.5 transition-colors shadow">
              <svg class="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              <span>View Full Resolution</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Trophy Metadata Grid -->
      <div class="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
        <div class="p-3.5 rounded-lg bg-slate-900/70 border border-slate-800">
          <div class="text-slate-500 mb-1">// Awarding Authority</div>
          <div class="text-white font-bold text-sm">${award.issuer}</div>
          <div class="text-amber-400 font-semibold mt-1">Recipient: Muhammad Mirza Aqmal Raziq</div>
          <div class="text-slate-400 text-[11px] mt-0.5">${award.trophyType}</div>
        </div>

        <div class="p-3.5 rounded-lg bg-slate-900/70 border border-slate-800 flex flex-col justify-between">
          <div>
            <div class="text-slate-500 mb-1">// Event & Trophy Details</div>
            <div class="flex items-center justify-between text-slate-300">
              <span>Date:</span>
              <span class="text-emerald-400 font-semibold">${award.date}</span>
            </div>
            <div class="mt-2 text-[11px] text-slate-300">
              <span class="text-slate-500 block text-[10px]">Physical Inscription:</span>
              <span class="text-amber-300 font-semibold italic">"${award.inscription}"</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Description & Tags -->
      <div class="mt-4 p-4 rounded-lg bg-slate-900/40 border border-slate-800">
        <p class="text-slate-300 text-xs leading-relaxed">${award.overview}</p>
        <div class="mt-3 flex flex-wrap gap-1.5">
          ${award.tags.map(t => `<span class="tech-tag text-amber-300 border-amber-500/20">${t}</span>`).join('')}
        </div>
      </div>

      <!-- Footer Buttons -->
      <div class="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
        <span class="text-[11px] font-mono text-slate-500">Official Physical Award Trophy • Pasir Gudang, Johor</span>
        <button onclick="closeAwardModal()" class="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs transition-colors">
          Close Window
        </button>
      </div>
    </div>
  `;

  modalContainer.classList.remove('hidden');
  modalContainer.classList.add('flex');
  document.body.style.overflow = 'hidden';
};

window.closeAwardModal = function() {
  const modalContainer = document.getElementById('award-modal');
  if (modalContainer) {
    modalContainer.classList.add('hidden');
    modalContainer.classList.remove('flex');
    document.body.style.overflow = '';
  }
};

// Filter Tabs
function initCredentialsFilter() {
  const filterBtns = document.querySelectorAll('.cred-filter-btn');
  const credItems = document.querySelectorAll('.cred-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      audio.playSoftClick();
      filterBtns.forEach(b => {
        b.classList.remove('bg-emerald-500', 'text-slate-950', 'font-bold');
        b.classList.add('text-slate-400', 'hover:text-white', 'bg-slate-900/60');
      });

      btn.classList.add('bg-emerald-500', 'text-slate-950', 'font-bold');
      btn.classList.remove('text-slate-400', 'hover:text-white', 'bg-slate-900/60');

      const filter = btn.getAttribute('data-filter');
      STATE.activeFilter = filter;

      credItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

function initSkillsFilter() {
  const skillBtns = document.querySelectorAll('.skill-filter-btn');
  const skillGroups = document.querySelectorAll('.skill-group');

  skillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      audio.playSoftClick();
      skillBtns.forEach(b => {
        b.classList.remove('border-emerald-500', 'text-emerald-400', 'bg-emerald-500/10');
        b.classList.add('border-slate-800', 'text-slate-400');
      });

      btn.classList.add('border-emerald-500', 'text-emerald-400', 'bg-emerald-500/10');
      btn.classList.remove('border-slate-800', 'text-slate-400');

      const domain = btn.getAttribute('data-domain');
      STATE.activeSkillDomain = domain;

      skillGroups.forEach(group => {
        const groupDomain = group.getAttribute('data-domain');
        if (domain === 'all' || groupDomain === domain) {
          group.style.display = 'block';
        } else {
          group.style.display = 'none';
        }
      });
    });
  });
}

// Sound Toggle
function initSoundToggle() {
  const soundBtn = document.getElementById('sound-toggle-btn');
  const soundOn = document.getElementById('sound-icon-on');
  const soundOff = document.getElementById('sound-icon-off');

  function update() {
    if (STATE.soundEnabled) {
      if (soundOn) soundOn.classList.remove('hidden');
      if (soundOff) soundOff.classList.add('hidden');
    } else {
      if (soundOn) soundOn.classList.add('hidden');
      if (soundOff) soundOff.classList.remove('hidden');
    }
  }

  update();

  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      STATE.soundEnabled = !STATE.soundEnabled;
      localStorage.setItem('portfolio-sound', STATE.soundEnabled);
      update();
      if (STATE.soundEnabled) {
        audio.playBeep();
        showToast("🔊 Tactile Audio Enabled");
      } else {
        showToast("🔇 Tactile Audio Muted");
      }
    });
  }
}

// Theme
function initTheme() {
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  setTheme(savedTheme);

  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = document.body.classList.contains('light-theme');
      setTheme(isLight ? 'dark' : 'light');
      audio.playSoftClick();
    });
  }
}

function setTheme(theme) {
  const body = document.body;
  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');

  if (theme === 'light') {
    body.classList.add('light-theme');
    body.classList.remove('dark');
    if (sunIcon && moonIcon) {
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    }
    localStorage.setItem('portfolio-theme', 'light');
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark');
    if (sunIcon && moonIcon) {
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    }
    localStorage.setItem('portfolio-theme', 'dark');
  }
}

// Shortcuts
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeCertificateModal();
      closeAwardModal();
    }
    if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement.tagName !== 'INPUT')) {
      e.preventDefault();
      const terminalInput = document.getElementById('terminal-input');
      if (terminalInput) {
        terminalInput.focus();
        terminalInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        audio.playSoftClick();
      }
    }
  });
}

// Copy Helper
window.copyToClipboard = function(text, label = 'Copied') {
  navigator.clipboard.writeText(text).then(() => {
    audio.playBeep();
    showToast(`✓ ${label} copied to clipboard!`);
  }).catch(() => {
    showToast(`Failed to copy`);
  });
};

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 2200);
}

function escapeHtml(string) {
  const entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;'
  };
  return String(string).replace(/[&<>"'/]/g, s => entityMap[s]);
}

// ==========================================
// SCROLL ANIMATIONS & INTERACTIVE ENGINE
// ==========================================

// 1. Top Reading Scroll Progress Bar
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) return;

  let ticking = false;
  function updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });

  updateProgress();
}

// 2. Intersection Observer Scroll Reveal & Number Counter Trigger
function initScrollReveal() {
  document.documentElement.classList.add('js-ready');
  const revealElements = document.querySelectorAll('.scroll-reveal, .reveal-on-scroll, .reveal-from-left, .reveal-from-right');
  if (!revealElements.length) return;

  if (!('IntersectionObserver' in window)) {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('is-revealed'));
    initCounterAnimations();
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        // Trigger any number counters inside this revealed container
        animateCounters(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.01,
    rootMargin: '0px 0px 250px 0px'
  });

  revealElements.forEach(el => observer.observe(el));

  // Immediate check: Reveal elements in the first 2 viewports right away
  requestAnimationFrame(() => {
    const vh = window.innerHeight || 800;
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < vh * 2) {
        el.classList.add('is-revealed');
        animateCounters(el);
      }
    });
  });
}

// 3. Eased Numeric Counter Animation (e.g. 3.98 CGPA, 5+ Awards)
function animateCounters(container) {
  if (!container) return;
  const isDirect = container.matches && container.matches('[data-counter]');
  const children = container.querySelectorAll ? Array.from(container.querySelectorAll('[data-counter]')) : [];
  const counterElements = isDirect ? [container, ...children] : children;

  counterElements.forEach(el => {
    if (el.dataset.hasAnimated === 'true') return;
    el.dataset.hasAnimated = 'true';

    const targetVal = parseFloat(el.getAttribute('data-counter')) || 0;
    const decimals = parseInt(el.getAttribute('data-decimals'), 10) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1200; // ms
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Apple-style easeOutCubic curve: 1 - Math.pow(1 - progress, 3)
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = (targetVal * ease).toFixed(decimals);

      el.textContent = `${current}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = `${targetVal.toFixed(decimals)}${suffix}`;
      }
    }

    requestAnimationFrame(update);
  });
}

function initCounterAnimations() {
  document.querySelectorAll('[data-counter]').forEach(el => animateCounters(el));
}

// 4. ScrollSpy Active Nav Link Highlighting
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id], div[id="workstation"]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  function onScroll() {
    const scrollPos = window.scrollY + 140;
    let currentId = '';

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${currentId}`) {
          link.classList.add('active-nav');
        } else {
          link.classList.remove('active-nav');
        }
      });
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// 5. Floating Back To Top Pill
function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  function toggleBtn() {
    if (window.scrollY > 380) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', toggleBtn, { passive: true });
  toggleBtn();
}

// ==============================================
// 60FPS DELTATIME CLOCK (User Inspired Module)
// ==============================================
let lastFrameTime = performance.now();
const DeltaTime = () => {
  const currentTime = performance.now();
  const delta = (currentTime - lastFrameTime) / 1000;
  lastFrameTime = currentTime;
  return Math.min(Math.max(delta, 0.001), 0.1);
};

// ==============================================
// INTERACTIVE 3D WEBGL CONSTELLATION (THREE.JS)
// ==============================================
let threeScene, threeCamera, threeRenderer, threeCore, threeInnerCore, threeParticles;
let isTurboSpin = false;
let threeVelocity = { x: 0, y: 0 };
let isThreeDragging = false;
let previousPointerPos = { x: 0, y: 0 };

function initThreeWebGL() {
  const canvas = document.getElementById('webgl-canvas');
  if (!canvas || typeof THREE === 'undefined') {
    initCanvasFallback();
    return;
  }

  try {
    threeScene = new THREE.Scene();
    threeCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    threeCamera.position.z = 24;

    threeRenderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    threeRenderer.setSize(window.innerWidth, window.innerHeight);
    threeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 1. Primary Outer Icosahedron Wireframe Core
    const coreGeo = new THREE.IcosahedronGeometry(6.5, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.38
    });
    threeCore = new THREE.Mesh(coreGeo, coreMat);
    threeScene.add(threeCore);

    // 2. Inner Cyber Gem
    const innerGeo = new THREE.OctahedronGeometry(3.6, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.55
    });
    threeInnerCore = new THREE.Mesh(innerGeo, innerMat);
    threeScene.add(threeInnerCore);

    // 3. Orbital Particle Constellation
    const particleCount = 1100;
    const posArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);
    const color1 = new THREE.Color(0x10b981); // Emerald
    const color2 = new THREE.Color(0x06b6d4); // Cyan
    const color3 = new THREE.Color(0xf59e0b); // Amber

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 9 + Math.random() * 16;
      posArray[i * 3] = Math.cos(angle) * radius;
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 8;
      posArray[i * 3 + 2] = Math.sin(angle) * radius;

      const pick = Math.random();
      const col = pick < 0.6 ? color1 : (pick < 0.85 ? color2 : color3);
      colorArray[i * 3] = col.r;
      colorArray[i * 3 + 1] = col.g;
      colorArray[i * 3 + 2] = col.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    threeParticles = new THREE.Points(particleGeo, particleMat);
    threeScene.add(threeParticles);

    // Pointer Interactivity (Grab & Orbit)
    window.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button, a, input, textarea, .artisan-card, #terminal-window, .modal-overlay, #tip-scroll, #loading')) {
        return;
      }
      isThreeDragging = true;
      previousPointerPos = { x: e.clientX, y: e.clientY };
    }, { passive: true });

    window.addEventListener('pointermove', (e) => {
      if (isThreeDragging) {
        const deltaX = e.clientX - previousPointerPos.x;
        const deltaY = e.clientY - previousPointerPos.y;
        threeVelocity.x += deltaX * 0.0035;
        threeVelocity.y += deltaY * 0.0035;
        previousPointerPos = { x: e.clientX, y: e.clientY };
      } else {
        const targetX = (e.clientX / window.innerWidth - 0.5) * 3;
        const targetY = -(e.clientY / window.innerHeight - 0.5) * 3;
        threeCamera.position.x += (targetX - threeCamera.position.x) * 0.02;
        threeCamera.position.y += (targetY - threeCamera.position.y) * 0.02;
      }
    }, { passive: true });

    window.addEventListener('pointerup', () => {
      isThreeDragging = false;
    }, { passive: true });

    // Window Resize Handling
    window.addEventListener('resize', () => {
      if (!threeCamera || !threeRenderer) return;
      threeCamera.aspect = window.innerWidth / window.innerHeight;
      threeCamera.updateProjectionMatrix();
      threeRenderer.setSize(window.innerWidth, window.innerHeight);
    });

    // 60FPS DeltaTime Animation Loop
    function animate() {
      requestAnimationFrame(animate);

      if (document.hidden) return;

      const dt = DeltaTime();
      const spinSpeed = isTurboSpin ? 3.5 : 1.0;

      if (threeCore) {
        threeCore.rotation.y += (0.22 * spinSpeed + threeVelocity.x) * dt;
        threeCore.rotation.x += (0.14 * spinSpeed + threeVelocity.y) * dt;
      }

      if (threeInnerCore) {
        threeInnerCore.rotation.y -= (0.35 * spinSpeed) * dt;
        threeInnerCore.rotation.z += (0.22 * spinSpeed) * dt;
      }

      if (threeParticles) {
        threeParticles.rotation.y -= (0.07 * spinSpeed) * dt;
        threeParticles.rotation.x += 0.02 * dt;
      }

      threeVelocity.x *= 0.94;
      threeVelocity.y *= 0.94;

      threeCamera.lookAt(threeScene.position);
      threeRenderer.render(threeScene, threeCamera);
    }

    animate();
  } catch (err) {
    console.warn("WebGL initialization note:", err);
    initCanvasFallback();
  }
}

// Fallback 2D Canvas Constellation if WebGL disabled
function initCanvasFallback() {
  const canvas = document.getElementById('webgl-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const dots = Array.from({ length: 60 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.8,
    vy: (Math.random() - 0.5) * 0.8,
    r: Math.random() * 2 + 1
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(16, 185, 129, 0.4)';
    dots.forEach(d => {
      d.x += d.vx;
      d.y += d.vy;
      if (d.x < 0) d.x = canvas.width;
      if (d.x > canvas.width) d.x = 0;
      if (d.y < 0) d.y = canvas.height;
      if (d.y > canvas.height) d.y = 0;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

// Turbo Spin Toggle for 3D Scene
window.toggleThreeWebGLRotation = function() {
  isTurboSpin = !isTurboSpin;
  const btn = document.getElementById('three-rot-btn');
  if (btn) {
    btn.textContent = isTurboSpin ? "🔥 Turbo Active" : "⚡ Turbo Spin";
    btn.className = isTurboSpin
      ? "px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-bold text-[10px] shadow"
      : "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] hover:bg-emerald-500/30 transition-colors";
  }
  audio.playBeep();
};

// ==============================================
// RETRO BOOTLOADER SYSTEM (User Inspired Reference)
// ==============================================
function initRetroBootloader() {
  const loader = document.getElementById('loading');
  const bar = document.getElementById('loading-bar-progress');
  const pct = document.getElementById('bootloader-pct');
  const items = document.getElementById('loading-items');
  if (!loader || !bar) return;

  if (sessionStorage.getItem('mirza_booted') === 'true') {
    loader.classList.add('loaded');
    return;
  }

  const steps = [
    { p: 20, msg: "// MOUNTING HARDWARE INTERFACES & DELTATIME ENGINE..." },
    { p: 45, msg: "// INITIALIZING YOLO OBJECT DETECTION & INSIGHTFACE ARCFACE..." },
    { p: 70, msg: "// VERIFYING CREDENTIALS: SKM3 (S103882102) & OPENAI ACADEMY..." },
    { p: 90, msg: "// CALIBRATING TACTILE AUDIO SYNTHESIZER & WORKSTATION CLI..." },
    { p: 100, msg: "// SYSTEM INITIALIZATION COMPLETE. WELCOME!" }
  ];

  let currentStep = 0;
  const interval = setInterval(() => {
    if (currentStep < steps.length) {
      const step = steps[currentStep];
      bar.style.transform = `scaleX(${step.p / 100})`;
      if (pct) pct.textContent = `${step.p}%`;
      if (items) items.textContent = step.msg;
      currentStep++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        loader.classList.add('loaded');
        sessionStorage.setItem('mirza_booted', 'true');
        audio.playBeep();
      }, 250);
    }
  }, 160);

  window.skipBootloader = function() {
    clearInterval(interval);
    bar.style.transform = 'scaleX(1)';
    if (pct) pct.textContent = '100%';
    loader.classList.add('loaded');
    sessionStorage.setItem('mirza_booted', 'true');
  };

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !loader.classList.contains('loaded')) {
      window.skipBootloader();
    }
  });
}

// ==============================================
// COLLAPSIBLE ACCORDION CONTROLLER (User Inspired)
// ==============================================
window.toggleCollapse = function(btn) {
  if (!btn) return;
  const isCollapsed = btn.getAttribute('collapsed') === 'true';
  btn.setAttribute('collapsed', isCollapsed ? 'false' : 'true');
  btn.textContent = isCollapsed ? 'less...' : 'more...';

  if (typeof audio !== 'undefined' && audio.playSoftClick) {
    audio.playSoftClick();
  }
};

// ==============================================
// FLOATING SCROLL TIP INDICATOR (User Inspired)
// ==============================================
function initScrollTip() {
  const tip = document.getElementById('tip-scroll');
  function checkScroll() {
    if (window.scrollY > 10) {
      document.documentElement.setAttribute('data-scroll', 'true');
    } else {
      document.documentElement.removeAttribute('data-scroll');
    }
  }

  if (tip) {
    tip.addEventListener('click', () => {
      window.scrollTo({ top: (window.innerHeight || 800) * 1.1, behavior: 'smooth' });
      if (typeof audio !== 'undefined' && audio.playSoftClick) {
        audio.playSoftClick();
      }
    });
  }

  window.addEventListener('scroll', checkScroll, { passive: true });
  checkScroll();
}

// ==============================================
// RETRO SLIDE-OUT NAVIGATION OVERLAY
// ==============================================
window.toggleRetroMenu = function() {
  const overlay = document.getElementById('retro-menu-overlay');
  if (!overlay) return;
  overlay.classList.toggle('menu-open');
  if (typeof audio !== 'undefined' && audio.playBeep) {
    audio.playBeep();
  }
};

// ==============================================
// RETRO LIGHTBOX MODAL (Image Zoom & Previews)
// ==============================================
window.openLightbox = function(src, title, desc) {
  const modal = document.getElementById('retro-lightbox');
  const img = document.getElementById('retro-lightbox-img');
  const t = document.getElementById('retro-lightbox-title');
  const d = document.getElementById('retro-lightbox-desc');
  if (!modal || !img) return;
  img.src = src;
  if (t) t.textContent = title || 'IMAGE PREVIEW';
  if (d) d.textContent = desc || '';
  modal.classList.add('active');
  if (typeof audio !== 'undefined' && audio.playBeep) audio.playBeep();
};

window.closeLightbox = function() {
  const modal = document.getElementById('retro-lightbox');
  if (modal) modal.classList.remove('active');
  if (typeof audio !== 'undefined' && audio.playSoftClick) audio.playSoftClick();
};

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const overlay = document.getElementById('retro-menu-overlay');
    if (overlay && overlay.classList.contains('menu-open')) {
      overlay.classList.remove('menu-open');
      if (typeof audio !== 'undefined' && audio.playBeep) audio.playBeep();
    }
    const lightbox = document.getElementById('retro-lightbox');
    if (lightbox && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
      if (typeof audio !== 'undefined' && audio.playSoftClick) audio.playSoftClick();
    }
  }
});

// ==============================================
// 3D COMMODORE 710 WORKSTATION (THREE.JS + SCROLL & MOUSE ANIMATION)
// ==============================================
let commodoreModel = null;
let commodoreScreenMesh = null;
let commodorePointLight = null;
let currentCrtColorIndex = 0;
let isCommodoreZoomed = false;

const CRT_PALETTES = [
  {
    name: "AMBER CRT",
    btnText: "🟡 Amber CRT",
    hex: 0xffb000,
    primary: "#ffb000",
    dim: "#996a00",
    bg: "#0c0904",
    glow: "rgba(255, 176, 0, 0.45)",
    scanline: "rgba(0, 0, 0, 0.35)"
  },
  {
    name: "MATRIX GREEN",
    btnText: "🟢 Matrix Green",
    hex: 0x10b981,
    primary: "#10b981",
    dim: "#065f46",
    bg: "#020c06",
    glow: "rgba(16, 185, 129, 0.45)",
    scanline: "rgba(0, 0, 0, 0.35)"
  },
  {
    name: "CYBER CYAN",
    btnText: "🔵 Cyber Cyan",
    hex: 0x06b6d4,
    primary: "#06b6d4",
    dim: "#0e7490",
    bg: "#020a10",
    glow: "rgba(6, 182, 212, 0.45)",
    scanline: "rgba(0, 0, 0, 0.35)"
  }
];

function initCommodore3D() {
  const canvas = document.getElementById('commodore-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  function valMap(x, from, to) {
    const y = ((x - from[0]) / (from[1] - from[0])) * (to[1] - to[0]) + to[0];
    if (to[0] < to[1]) {
      if (y < to[0]) return to[0];
      if (y > to[1]) return to[1];
    } else {
      if (y > to[0]) return to[0];
      if (y < to[1]) return to[1];
    }
    return y;
  }

  try {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf6d4b1);

    const sizes = {
      width: document.documentElement.clientWidth || window.innerWidth,
      height: window.innerHeight,
      portraitOffset: valMap(
        window.innerHeight / (document.documentElement.clientWidth || window.innerWidth),
        [0.75, 1.75],
        [0, 2]
      )
    };

    // Camera setup - zoomed into CRT screen at top of page
    const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 100);
    camera.position.set(0, 0, -2.5 - sizes.portraitOffset);
    camera.rotation.set(-Math.PI, 0, Math.PI);
    camera.lookAt(0, 0, 0);
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: false,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setClearColor(0xf6d4b1, 1);
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    if (THREE.sRGBEncoding) renderer.outputEncoding = THREE.sRGBEncoding;

    // Ambient & Directional Lighting matching warm retro aesthetic
    const ambientLight = new THREE.AmbientLight(0xffedd9, 1.35);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfff3e6, 1.45);
    dirLight.position.set(4, 7, -5);
    scene.add(dirLight);

    // Dynamic CRT screen point light casting phosphor bounce onto keys
    commodorePointLight = new THREE.PointLight(CRT_PALETTES[0].hex, 1.8, 5);
    commodorePointLight.position.set(0, 0.55, -1.2);
    scene.add(commodorePointLight);

    // ========================================================
    // DYNAMIC CRT PHOSPHOR CANVAS (1024x768 4:3 Text Engine)
    // ========================================================
    const crtCanvas = document.createElement('canvas');
    crtCanvas.width = 1024;
    crtCanvas.height = 768;
    const crtCtx = crtCanvas.getContext('2d');

    const crtTexture = new THREE.CanvasTexture(crtCanvas);
    crtTexture.minFilter = THREE.LinearFilter;
    crtTexture.magFilter = THREE.LinearFilter;
    if (THREE.sRGBEncoding) crtTexture.encoding = THREE.sRGBEncoding;

    // Line log buffer with Mirza's verified credentials
    const crtLogs = [
      "ready."
    ];

    // Preload Phosphor CRT Portraits for 3 palettes
    const crtPortraits = {
      amber: new Image(),
      green: new Image(),
      white: new Image()
    };
    crtPortraits.amber.src = 'assets/retro/mirza_crt_portrait_amber.png';
    crtPortraits.green.src = 'assets/retro/mirza_crt_portrait_green.png';
    crtPortraits.white.src = 'assets/retro/mirza_crt_portrait_white.png';

    crtPortraits.amber.onload = () => drawCrtScreen();
    crtPortraits.green.onload = () => drawCrtScreen();
    crtPortraits.white.onload = () => drawCrtScreen();

    let cursorBlink = true;
    let lastBlinkTime = performance.now();
    let scanlineOffset = 0;

    function drawCrtScreen() {
      if (!crtCtx) return;
      const palette = CRT_PALETTES[currentCrtColorIndex];

      // 1. CRT Screen Base Phosphor Glow
      crtCtx.fillStyle = palette.bg;
      crtCtx.fillRect(0, 0, 1024, 768);

      // 2. Subtle CRT Vignette / Radial Curvature
      const vignette = crtCtx.createRadialGradient(512, 384, 180, 512, 384, 520);
      vignette.addColorStop(0, "rgba(0, 0, 0, 0)");
      vignette.addColorStop(0.85, "rgba(0, 0, 0, 0.4)");
      vignette.addColorStop(1, "rgba(0, 0, 0, 0.85)");
      crtCtx.fillStyle = vignette;
      crtCtx.fillRect(0, 0, 1024, 768);

      // 3. Phosphor Scanlines with Dynamic Drift
      crtCtx.fillStyle = palette.scanline;
      const startYScan = (scanlineOffset % 4);
      for (let y = startYScan; y < 768; y += 4) {
        crtCtx.fillRect(0, y, 1024, 2);
      }

      // 4. CRT Outer Frame Accent
      crtCtx.strokeStyle = palette.dim;
      crtCtx.lineWidth = 4;
      crtCtx.strokeRect(16, 16, 992, 736);

      // 5. RIGHT SIDE: PHOSPHOR DITHERED PORTRAIT
      const portraitImg = currentCrtColorIndex === 0
        ? crtPortraits.amber
        : (currentCrtColorIndex === 1 ? crtPortraits.green : crtPortraits.white);

      if (portraitImg && portraitImg.complete && portraitImg.naturalWidth > 0) {
        // Glowing bezel frame around portrait
        crtCtx.strokeStyle = palette.dim;
        crtCtx.lineWidth = 2;
        crtCtx.strokeRect(588, 126, 364, 456);

        // Portrait Image
        crtCtx.drawImage(portraitImg, 595, 134, 350, 440);
      }

      // 6. LEFT SIDE: INTRO & HIGH CONTRAST NAME BADGE
      crtCtx.font = "bold 28px 'chill', sans-serif";
      crtCtx.fillStyle = palette.primary;
      crtCtx.shadowColor = palette.glow;
      crtCtx.shadowBlur = 10;
      crtCtx.fillText("Hi there,", 50, 150);

      // Inverted Phosphor Highlight Box: "I'm Mirza"
      const boxW = 290;
      const boxH = 50;
      crtCtx.fillStyle = palette.primary;
      crtCtx.fillRect(50, 172, boxW, boxH);

      crtCtx.font = "bold 24px 'public-pixel', monospace";
      crtCtx.fillStyle = "#000000";
      crtCtx.shadowBlur = 0;
      crtCtx.fillText("I'm Mirza", 68, 208);

      // Candidate Credential Bullets
      crtCtx.shadowColor = palette.glow;
      crtCtx.shadowBlur = 6;
      crtCtx.fillStyle = palette.primary;
      crtCtx.font = "18px 'chill', 'JetBrains Mono', monospace";

      const bullets = [
        "• Software & IT Systems Specialist",
        "• Diploma Teknologi Komputeran (KVPJB)",
        "• Academic CGPA: 3.98 / 4.00",
        "• SKM Level 3 Certified: S103882102",
        "• 5-Month IT Internship (Feb – June 2027)"
      ];
      let bY = 276;
      bullets.forEach(b => {
        crtCtx.fillText(b, 50, bY);
        bY += 36;
      });

      // Bottom Shell Prompt Area
      crtCtx.strokeStyle = palette.dim;
      crtCtx.lineWidth = 1;
      crtCtx.beginPath();
      crtCtx.moveTo(50, 485);
      crtCtx.lineTo(550, 485);
      crtCtx.stroke();

      crtCtx.font = "13px 'public-pixel', monospace";
      crtCtx.fillStyle = palette.dim;
      crtCtx.fillText("Welcome to MIRZA-OS 1.0 LTS", 50, 520);
      crtCtx.fillText(">> Scroll down or type below", 50, 550);

      // Live Mirror Command Prompt
      const lastCmd = crtLogs[crtLogs.length - 1] || "ready.";
      crtCtx.font = "bold 15px 'public-pixel', monospace";
      crtCtx.fillStyle = palette.primary;
      crtCtx.fillText("mirza:~$ " + lastCmd, 50, 604);

      // Blinking Block Prompt Cursor
      if (cursorBlink) {
        const textWidth = crtCtx.measureText("mirza:~$ " + lastCmd).width;
        crtCtx.fillRect(56 + textWidth, 586, 14, 22);
      }

      // Reset shadow
      crtCtx.shadowBlur = 0;
      crtTexture.needsUpdate = true;
    }

    // Expose log function to mirror CLI commands
    window.logToCommodoreCrt = function(cmdStr) {
      if (!cmdStr) return;
      crtLogs.push("> " + cmdStr.toUpperCase());
      crtLogs.push("EXEC // STATUS: OK [200]");
      if (crtLogs.length > 20) crtLogs.shift();
      drawCrtScreen();
    };

    // Initial render of CRT canvas + font ready hook
    drawCrtScreen();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        drawCrtScreen();
      });
    }

    // ========================================================
    // PHOTOREALISTIC BAKED TEXTURES & GLTF MODEL LOADER
    // ========================================================
    const textureLoader = new THREE.TextureLoader();
    
    const bakeTexture = textureLoader.load('assets/textures/bake-quality-5.jpg', () => {
      if (renderer) renderer.render(scene, camera);
    });
    bakeTexture.flipY = false;
    if (THREE.sRGBEncoding) bakeTexture.encoding = THREE.sRGBEncoding;

    const bakeFloorTexture = textureLoader.load('assets/textures/bake_floor-quality-3.jpg');
    bakeFloorTexture.flipY = false;
    if (THREE.sRGBEncoding) bakeFloorTexture.encoding = THREE.sRGBEncoding;

    const computerMaterial = new THREE.MeshBasicMaterial({ map: bakeTexture });
    const floorMaterial = new THREE.MeshBasicMaterial({
      map: bakeFloorTexture,
      transparent: true,
      opacity: 0.95
    });

    const computerGroup = new THREE.Group();
    scene.add(computerGroup);
    commodoreModel = computerGroup;

    if (typeof THREE.GLTFLoader !== 'undefined') {
      const loader = new THREE.GLTFLoader();
      loader.load('assets/models/Commodore710_33.5.glb', (gltf) => {
        const children = [...gltf.scene.children];
        children.forEach((child) => {
          if (child.isMesh) {
            if (child.name === 'Screen') {
              commodoreScreenMesh = child;
              child.material = new THREE.MeshBasicMaterial({
                map: crtTexture
              });
              computerGroup.add(child);
            } else if (child.name === 'Computer' || child.name === 'CRT' || child.name === 'Keyboard') {
              child.material = computerMaterial;
              computerGroup.add(child);
            } else if (child.name === 'ShadowPlane') {
              child.material = floorMaterial;
              computerGroup.add(child);
            }
          }
        });

        computerGroup.position.set(0, 0, 0);
        computerGroup.rotation.set(0, 0, 0);

        drawCrtScreen();
      }, undefined, (err) => {
        console.warn("Commodore GLTF load note:", err);
      });
    }

    // ========================================================
    // INTERACTIVE ROTATION, DRAG & MOUSE/SCROLL PARALLAX
    // ========================================================
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let rotVel = { x: 0, y: 0 };
    let targetMouseParallax = { x: 0, y: 0 };
    let currentMouseParallax = { x: 0, y: 0 };

    window.addEventListener('pointermove', (e) => {
      targetMouseParallax.x = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseParallax.y = (e.clientY / window.innerHeight - 0.5) * 2;

      if (isDragging && computerGroup) {
        const dx = e.clientX - prevMouse.x;
        const dy = e.clientY - prevMouse.y;
        rotVel.y += dx * 0.005;
        rotVel.x += dy * 0.003;
        prevMouse = { x: e.clientX, y: e.clientY };
      }
    }, { passive: true });

    canvas.addEventListener('pointerdown', (e) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    }, { passive: true });

    window.addEventListener('pointerup', () => {
      isDragging = false;
    }, { passive: true });

    canvas.addEventListener('dblclick', () => {
      window.toggleCommodoreZoom();
    });

    // Window Resize Handler
    window.addEventListener('resize', () => {
      sizes.width = document.documentElement.clientWidth || window.innerWidth;
      sizes.height = window.innerHeight;
      sizes.portraitOffset = valMap(sizes.height / sizes.width, [0.8, 1.8], [0, 2.5]);
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    }, { passive: true });

    // ========================================================
    // ZOOM CONTROL TOGGLE
    // ========================================================
    window.toggleCommodoreZoom = function() {
      isCommodoreZoomed = !isCommodoreZoomed;
      const btn = document.getElementById('crt-zoom-btn');
      if (btn) {
        btn.textContent = isCommodoreZoomed ? "🔍 Zoom Out" : "🔍 Zoom Screen";
      }
      if (typeof audio !== 'undefined' && audio.playBeep) {
        audio.playBeep();
      }
    };

    // ========================================================
    // PHOSPHOR PALETTE SWITCHER
    // ========================================================
    window.toggleCrtColor = function() {
      currentCrtColorIndex = (currentCrtColorIndex + 1) % CRT_PALETTES.length;
      const current = CRT_PALETTES[currentCrtColorIndex];

      if (commodorePointLight) {
        commodorePointLight.color.setHex(current.hex);
      }

      const btn = document.getElementById('crt-color-btn');
      if (btn) btn.textContent = current.btnText;

      const badge = document.getElementById('crt-status-badge');
      if (badge) badge.textContent = current.name;

      drawCrtScreen();

      if (typeof audio !== 'undefined' && audio.playBeep) {
        audio.playBeep();
      }
    };

    // ========================================================
    // 60FPS DELTATIME ANIMATION LOOP WITH SCROLL & MOUSE DYNAMICS
    // ========================================================
    let idleTime = 0;
    function renderLoop() {
      requestAnimationFrame(renderLoop);

      const dt = DeltaTime();
      idleTime += dt;

      // Scanline Drift Animation on CRT Canvas
      scanlineOffset = (scanlineOffset + dt * 10) % 4;

      // Handle Blinking Cursor (every 500ms)
      const now = performance.now();
      if (now - lastBlinkTime > 500) {
        cursorBlink = !cursorBlink;
        lastBlinkTime = now;
        drawCrtScreen();
      }

      // Smooth Mouse Parallax Interpolation
      currentMouseParallax.x += (targetMouseParallax.x - currentMouseParallax.x) * dt * 3.5;
      currentMouseParallax.y += (targetMouseParallax.y - currentMouseParallax.y) * dt * 3.5;

      const vh = window.innerHeight || 800;
      const scroll = window.scrollY / vh;
      const zoomFac = isCommodoreZoomed ? 0 : valMap(scroll, [0, 1], [0, 1]);

      const targetCamZ = isCommodoreZoomed
        ? -2.5 - sizes.portraitOffset
        : valMap(scroll, [0, 1], [-2.5 - sizes.portraitOffset, -10 - sizes.portraitOffset]);

      camera.position.z = targetCamZ;

      const targetCompX = isCommodoreZoomed ? 0 : 0.5 * zoomFac;
      const targetCompY = isCommodoreZoomed ? 0 : valMap(scroll, [0, 1], [0, 1.5]);
      const targetCompRotY = isCommodoreZoomed ? 0 : (Math.PI * 0.2) * zoomFac;

      if (computerGroup) {
        if (!isDragging) {
          const swayFactor = isCommodoreZoomed ? 0.005 : 0.015;
          const finalRotY = targetCompRotY + currentMouseParallax.x * 0.1 + Math.sin(idleTime * 0.8) * swayFactor;
          const finalRotX = currentMouseParallax.y * 0.06;

          computerGroup.rotation.y = finalRotY;
          computerGroup.rotation.x = finalRotX;
          computerGroup.position.x = targetCompX;
          computerGroup.position.y = targetCompY;
        } else {
          computerGroup.rotation.y += rotVel.y * dt;
          computerGroup.rotation.x += rotVel.x * dt;
        }

        // Velocity damping
        rotVel.y *= 0.92;
        rotVel.x *= 0.92;
      }

      camera.position.x = currentMouseParallax.x * valMap(scroll, [0, 1], [0.2, 3]) * 0.1;
      camera.position.y = currentMouseParallax.y * valMap(scroll, [0, 1], [0.2, 1.2]) * 0.1;
      camera.lookAt(0, isCommodoreZoomed ? 0.1 : valMap(scroll, [0, 1], [0, 0.4]), 0);

      // Canvas opacity smoothly fades from 1.0 to 0.0 as user scrolls past hero
      const canvasOpacity = isCommodoreZoomed ? 1 : valMap(scroll, [1.15, 1.70], [1, 0]);
      canvas.style.opacity = canvasOpacity.toFixed(3);
      canvas.style.pointerEvents = (canvasOpacity < 0.05) ? 'none' : 'auto';

      renderer.render(scene, camera);
    }

    renderLoop();

  } catch (err) {
    console.warn("Commodore 3D init error:", err);
  }
}


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
  <div><span class="text-cyan-400 font-bold">awards</span>      - Competition podiums & awards</div>
  <div><span class="text-cyan-400 font-bold">certs</span>       - Industry certs (ICDL, Cisco, SKM Level 3)</div>
  <div><span class="text-cyan-400 font-bold">ojt</span>         - 5-Month IT Internship details (Feb–Jun 2027)</div>
  <div><span class="text-cyan-400 font-bold">contact</span>     - Direct phone, email & social links</div>
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
    <div class="text-amber-300 font-semibold">Champion / 1st Place (Johor State Level)</div>
    <div class="text-slate-300">Apps Ideation Challenge (Secondary School – Android Category) | JPN Johor (2023)</div>
  </div>
  <div class="border-l-2 border-emerald-400 pl-2">
    <div class="text-emerald-300 font-semibold">Third Place (National Level)</div>
    <div class="text-slate-300">Pertandingan Pembangunan Aplikasi Android | KPM (BSTP), JPN Melaka & MMU (2023)</div>
  </div>
  <div class="border-l-2 border-cyan-400 pl-2">
    <div class="text-cyan-300 font-semibold">Fifth Place (National Level)</div>
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
    <div class="text-slate-400 text-[11px]">JPK Kementerian Sumber Manusia • IT-010-3:2016 • 17 Nov 2026</div>
    <div class="mt-1 flex gap-2">
      <button onclick="openCertificateModal('skm3')" class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px]">Inspect Cert</button>
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

  contact: {
    desc: "Show contact channels & quick connection links",
    execute: () => `
<div class="text-emerald-400 font-bold mb-2">📬 Contact Channels:</div>
<div class="space-y-1 text-xs">
  <div>📱 Phone/WhatsApp: <a href="tel:0135788399" class="text-cyan-400 font-mono hover:underline">013-5788399</a></div>
  <div>📧 Email: <a href="mailto:mirzaaqmal22@gmail.com" class="text-cyan-400 font-mono hover:underline">mirzaaqmal22@gmail.com</a></div>
  <div>🐙 GitHub: <a href="https://github.com/mircrtierr" target="_blank" class="text-cyan-400 font-mono hover:underline">https://github.com/mircrtierr</a></div>
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
  initTheme();
  initSoundToggle();
  initJohorClock();
  initSpotlightMouseTracking();
  initTerminalTabs();
  initTerminal();
  initSmartAttendSimulator();
  initYoloPlayground();
  initSkillsFilter();
  initCredentialsFilter();
  initKeyboardShortcuts();
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

// Terminal Tab Switching
function initTerminalTabs() {
  const tabs = document.querySelectorAll('.terminal-tab');
  const panels = {
    terminal: document.getElementById('tab-panel-terminal'),
    code: document.getElementById('tab-panel-code'),
    json: document.getElementById('tab-panel-json')
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      audio.playSoftClick();
      const target = tab.getAttribute('data-tab');
      STATE.activeTerminalTab = target;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      Object.keys(panels).forEach(key => {
        if (panels[key]) {
          if (key === target) {
            panels[key].classList.remove('hidden');
          } else {
            panels[key].classList.add('hidden');
          }
        }
      });
    });
  });
}

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
    // Switch to terminal tab if not active
    const terminalTabBtn = document.querySelector('.terminal-tab[data-tab="terminal"]');
    if (terminalTabBtn && !terminalTabBtn.classList.contains('active')) {
      terminalTabBtn.click();
    }
    terminalInput.value = cmd;
    handleCommand(cmd);
    terminalInput.value = '';
    terminalInput.focus();
    audio.playBeep();
  }
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
        <!-- Google Colab Notebook Showcase -->
        <div class="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-xl">
          <div class="p-2.5 border-b border-slate-800 bg-slate-900/90 flex items-center justify-between text-xs font-mono text-slate-300">
            <span class="flex items-center gap-2 text-cyan-400 font-bold">
              <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Google Colab Training & Inference Notebook (kod_projek.ipynb)
            </span>
            <span class="text-[11px] text-slate-400">Class Detected: keyboard (Confidence: 0.91)</span>
          </div>
          <a href="assets/projects/yolo_colab_detection.jpg" target="_blank" class="block relative group/zoom" title="Click to open original screenshot in high-resolution">
            <img src="assets/projects/yolo_colab_detection.jpg" alt="Google Colab YOLO Detection Notebook Screenshot" class="w-full max-h-[380px] object-contain mx-auto bg-slate-950" />
            <div class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/zoom:opacity-100 transition-opacity flex items-center justify-center">
              <span class="px-3 py-1.5 rounded-lg bg-slate-900/90 text-white font-mono text-xs border border-slate-700 shadow">
                🔍 Open Full-Resolution Screenshot
              </span>
            </div>
          </a>
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
    center: "Pusat Bertauliah K05104 (Kolej Vokasional Perdagangan)",
    date: "17 November 2026",
    id: "No. Kad Pengenalan: 070922-01-0269",
    category: "National Vocational Standard",
    badgeColor: "emerald",
    image: "assets/certificates/cert_skm3_jpk.png",
    overview: "Official national vocational qualification formally certifying core competencies in software engineering, systems design, object-oriented programming, and relational database management under Malaysian national skills framework.",
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
        <div class="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl group flex items-center justify-center p-2">
          <img src="${cert.image}" alt="${cert.title}" class="max-h-[480px] w-auto max-w-full rounded object-contain shadow-lg" />
          <div class="absolute bottom-3 right-3 flex items-center gap-2">
            <a href="${cert.image}" target="_blank" class="px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-mono text-xs backdrop-blur inline-flex items-center gap-1.5 transition-colors shadow">
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
              <span>Credential ID:</span>
              <span class="text-cyan-400 font-bold">${cert.id}</span>
            </div>
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
        <div class="flex items-center gap-2">
          ${cert.verifyUrl ? `
            <a href="${cert.verifyUrl}" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg transition-colors shadow-sm">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              <span>Verify on Official Portal</span>
            </a>
          ` : `
            <span class="text-xs font-mono text-slate-400">Institutional Record Verified</span>
          `}
          <a href="assets/certificates/all_certificates.pdf" target="_blank" download="Verified_Certificates_Muhammad_Mirza_Aqmal_Raziq.pdf" class="inline-flex items-center gap-2 px-3 py-2 border border-slate-700 hover:border-slate-600 bg-slate-900 text-slate-300 text-xs rounded-lg transition-colors">
            <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            <span>Download All (6-Page PDF)</span>
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

/**
 * Muhammad Mirza Aqmal Raziq bin Mirza Affzard - Developer Portfolio
 * Interactive Terminal & Bento Grid Hybrid Logic
 * GitHub: https://github.com/mircrtierr
 */

// State Management
const STATE = {
  theme: localStorage.getItem('portfolio-theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'),
  terminalHistory: [],
  historyIndex: -1,
  activeFilter: 'all',
  activeSkillDomain: 'all',
};

// Data Structures
const CANDIDATE = {
  name: "Muhammad Mirza Aqmal Raziq bin Mirza Affzard",
  shortName: "Mirza Aqmal",
  title: "Diploma Teknologi Komputeran Student & Full-Stack / AI Enthusiast",
  institution: "Kolej Vokasional Perdagangan Johor Bahru (KVPJB)",
  cgpa: "3.98",
  location: "Pasir Gudang, Johor, Malaysia",
  phone: "013-5788399",
  email: "mirzaaqmal22@gmail.com",
  github: "https://github.com/mircrtierr",
  ojtPeriod: "February – June 2027 (5 Months)",
  ojtStatus: "Available for Placement"
};

const COMMANDS = {
  help: {
    desc: "Display list of all available CLI commands",
    execute: () => `
<div class="text-emerald-400 font-semibold mb-2">⚡ Available CLI Commands:</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1 text-xs">
  <div><span class="text-cyan-400 font-bold">about</span>       - Bio, academic background & CGPA</div>
  <div><span class="text-cyan-400 font-bold">projects</span>    - Featured engineering projects & repos</div>
  <div><span class="text-cyan-400 font-bold">skills</span>      - 7 core technical domains & tools</div>
  <div><span class="text-cyan-400 font-bold">github</span>      - GitHub profile & repository links</div>
  <div><span class="text-cyan-400 font-bold">awards</span>      - National, State & Zone competition wins</div>
  <div><span class="text-cyan-400 font-bold">certs</span>       - Industry certs (ICDL, Cisco, SKM Level 3)</div>
  <div><span class="text-cyan-400 font-bold">ojt</span>         - 5-Month IT Internship details (Feb–Jun 2027)</div>
  <div><span class="text-cyan-400 font-bold">contact</span>     - Direct phone, email & social links</div>
  <div><span class="text-cyan-400 font-bold">resume</span>      - Open / download verified resume PDF</div>
  <div><span class="text-cyan-400 font-bold">theme [dark|light]</span> - Toggle interface color scheme</div>
  <div><span class="text-cyan-400 font-bold">clear</span>       - Clear current terminal screen</div>
  <div><span class="text-cyan-400 font-bold">whoami</span>      - Verify current session role</div>
</div>
<div class="mt-2 text-slate-400 text-xs italic">Tip: Click on any prompt badge or press Tab to auto-complete.</div>`
  },

  about: {
    desc: "Display candidate bio, institution, and background",
    execute: () => `
<div class="border-l-2 border-emerald-500 pl-3 py-1 my-2">
  <div class="text-emerald-400 font-bold text-sm">${CANDIDATE.name}</div>
  <div class="text-slate-300 text-xs mt-1">📍 ${CANDIDATE.location}</div>
  <div class="text-slate-300 text-xs mt-1">🎓 <strong>Diploma Teknologi Komputeran</strong> at ${CANDIDATE.institution}</div>
  <div class="text-slate-300 text-xs mt-1">🏆 Academic Standing: <span class="text-emerald-400 font-bold">CGPA ${CANDIDATE.cgpa} / 4.00</span></div>
  <div class="text-slate-300 text-xs mt-1">💼 Seeking: <span class="text-cyan-400 font-medium">5-Month IT Internship / OJT (${CANDIDATE.ojtPeriod})</span></div>
  <div class="text-slate-400 text-xs mt-2">Passionate technologist combining full-stack web/app development, edge AI/Computer Vision (ArcFace, FAISS, YOLO), and network infrastructure to build high-impact real-world systems.</div>
</div>`
  },

  projects: {
    desc: "List featured engineering projects",
    execute: () => `
<div class="text-emerald-400 font-bold mb-2">🚀 Featured Engineering Projects:</div>

<div class="mb-3 bg-slate-900/60 p-2.5 rounded border border-slate-800">
  <div class="flex items-center justify-between">
    <span class="text-cyan-300 font-bold text-xs">[1] SmartAttend KVPJB</span>
    <span class="text-emerald-400 text-[11px] font-mono">Edge AI + Web</span>
  </div>
  <p class="text-slate-300 text-xs mt-1">Facial Recognition Attendance Management System powered by Python Flask, InsightFace (ArcFace), FAISS 512D vector embeddings, and ESP32-CAM edge capture.</p>
  <div class="mt-2 flex flex-wrap gap-2 text-[11px]">
    <a href="https://github.com/mircrtierr/smartattend-kvpjb" target="_blank" class="text-emerald-400 underline hover:text-emerald-300">↗ GitHub Repository</a>
    <span class="text-slate-600">|</span>
    <button onclick="openProjectModal('smartattend')" class="text-cyan-400 underline hover:text-cyan-300">🔍 Open Architecture Modal</button>
  </div>
</div>

<div class="bg-slate-900/60 p-2.5 rounded border border-slate-800">
  <div class="flex items-center justify-between">
    <span class="text-cyan-300 font-bold text-xs">[2] Electronics Object Detection</span>
    <span class="text-emerald-400 text-[11px] font-mono">Computer Vision</span>
  </div>
  <p class="text-slate-300 text-xs mt-1">Deep learning object detection model trained on annotated computer/electronic components using YOLO, Roboflow, and Google Colab for automated lab auditing.</p>
  <div class="mt-2 flex flex-wrap gap-2 text-[11px]">
    <a href="https://github.com/mircrtierr/yolo-electronics-detection" target="_blank" class="text-emerald-400 underline hover:text-emerald-300">↗ GitHub Repository</a>
    <span class="text-slate-600">|</span>
    <button onclick="openProjectModal('yolo')" class="text-cyan-400 underline hover:text-cyan-300">🔍 Open Case Study Modal</button>
  </div>
</div>`
  },

  skills: {
    desc: "Display technical competence across 7 core domains",
    execute: () => `
<div class="text-emerald-400 font-bold mb-2">🛠️ Technical Skills Matrix (7 Core Domains):</div>
<div class="space-y-1.5 text-xs">
  <div><span class="text-cyan-400 font-semibold">• Programming:</span> Python, Java, PHP, JavaScript</div>
  <div><span class="text-cyan-400 font-semibold">• Web Development:</span> HTML5, CSS3, Tailwind CSS, Laravel, Flask</div>
  <div><span class="text-cyan-400 font-semibold">• App Development:</span> Java Swing, JFrame, Android Studio, NetBeans</div>
  <div><span class="text-cyan-400 font-semibold">• Database Management:</span> MySQL, MariaDB, SQL Query Optimization</div>
  <div><span class="text-cyan-400 font-semibold">• AI & Machine Learning:</span> YOLO (v5/v8), OpenCV, Computer Vision, Roboflow, Google Colab</div>
  <div><span class="text-cyan-400 font-semibold">• Networking:</span> Cisco Packet Tracer, TCP/IP, OSI 7-Layer Model, Router/Switch Config</div>
  <div><span class="text-cyan-400 font-semibold">• Cybersecurity:</span> Cybersecurity Fundamentals, Basic Reverse Engineering & Network Defense</div>
</div>`
  },

  github: {
    desc: "Show GitHub profile and repositories",
    execute: () => `
<div class="text-emerald-400 font-bold mb-1">🐙 GitHub Workspace Profile:</div>
<div class="text-xs text-slate-300">Profile URL: <a href="https://github.com/mircrtierr" target="_blank" class="text-cyan-400 underline font-mono">https://github.com/mircrtierr</a></div>
<div class="mt-2 space-y-1 text-xs">
  <div class="text-slate-300 font-mono">📁 <a href="https://github.com/mircrtierr/smartattend-kvpjb" target="_blank" class="text-emerald-400 underline">smartattend-kvpjb</a> - Facial recognition attendance system with ArcFace & ESP32-CAM</div>
  <div class="text-slate-300 font-mono">📁 <a href="https://github.com/mircrtierr/yolo-electronics-detection" target="_blank" class="text-emerald-400 underline">yolo-electronics-detection</a> - YOLO-based computer & electronic hardware detection model</div>
</div>
<div class="mt-2 text-slate-400 text-[11px]">Type <span class="text-cyan-400 font-mono">open github</span> to launch in a new tab.</div>`
  },

  awards: {
    desc: "Display competitive achievements and podium finishes",
    execute: () => `
<div class="text-emerald-400 font-bold mb-2">🏅 Achievements & Awards (5+ Honors):</div>
<div class="space-y-2 text-xs">
  <div class="border-l-2 border-amber-400 pl-2">
    <div class="text-amber-300 font-semibold">Fifth Place (National Level)</div>
    <div class="text-slate-300">PETAH MADANI: Beyond the Mic – Podcast Challenge | Ministry of Education Malaysia (Oct 2026)</div>
  </div>
  <div class="border-l-2 border-emerald-400 pl-2">
    <div class="text-emerald-300 font-semibold">Consolation Prize (Johor Zone Level)</div>
    <div class="text-slate-300">KV Skills Competition in Web Technology | Kolej Vokasional Malaysia (July 2025)</div>
  </div>
  <div class="border-l-2 border-cyan-400 pl-2">
    <div class="text-cyan-300 font-semibold">1st Runner-Up / 2nd Place (College Level)</div>
    <div class="text-slate-300">KV Skills Competition in Web Technology | KVPJB (August 2024)</div>
  </div>
  <div class="border-l-2 border-amber-400 pl-2">
    <div class="text-amber-300 font-semibold">Third Place (National Level)</div>
    <div class="text-slate-300">Pertandingan Pembangunan Aplikasi Android (Kategori Sekolah Menengah) | KPM (BSTP), JPN Melaka & MMU (2023)</div>
  </div>
  <div class="border-l-2 border-emerald-400 pl-2">
    <div class="text-emerald-300 font-semibold">Champion / 1st Place (Johor State Level)</div>
    <div class="text-slate-300">Apps Ideation Challenge (Secondary School – Android Category) | JPN Johor (Sept 2023)</div>
  </div>
</div>`
  },

  certs: {
    desc: "Display verified industry certifications",
    execute: () => `
<div class="text-emerald-400 font-bold mb-2">📜 Verified Qualifications & Certifications:</div>
<div class="space-y-2 text-xs">
  <div>• <strong class="text-cyan-300">ICDL Certificate – AI Essentials (Syllabus 2.0)</strong><br><span class="text-slate-400 pl-3">Issued by ICDL Asia (5 November 2026)</span></div>
  <div>• <strong class="text-cyan-300">Cisco Networking Academy – IT Essentials</strong><br><span class="text-slate-400 pl-3">Issued by Kolej Vokasional Perdagangan Johor Bahru (11 April 2026)</span></div>
  <div>• <strong class="text-cyan-300">Sijil Kemahiran Malaysia (SKM) Tahap 3 – Application Development</strong><br><span class="text-slate-400 pl-3">Issued by Jabatan Pembangunan Kemahiran (JPK), Malaysia</span></div>
</div>`
  },

  ojt: {
    desc: "Display On-Job-Training (OJT) / Internship availability",
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
  <div>📄 Resume PDF: <a href="Resume_Muhammad_Mirza_Aqmal_Raziq.pdf" download="Resume_Muhammad_Mirza_Aqmal_Raziq.pdf" class="text-emerald-400 font-mono hover:underline">Resume_Muhammad_Mirza_Aqmal_Raziq.pdf (Download)</a></div>
</div>`
  },

  resume: {
    desc: "Open or download the verified resume",
    execute: () => {
      window.open('Resume_Muhammad_Mirza_Aqmal_Raziq.pdf', '_blank');
      return `<div class="text-emerald-400 text-xs">Opening Resume_Muhammad_Mirza_Aqmal_Raziq.pdf... <br><a href="Resume_Muhammad_Mirza_Aqmal_Raziq.pdf" download="Resume_Muhammad_Mirza_Aqmal_Raziq.pdf" class="underline text-cyan-300 font-mono">📥 Download PDF</a> &bull; <a href="Resume_Muhammad_Mirza_Aqmal_Raziq.html" target="_blank" class="underline text-emerald-300 font-mono">📄 View Web CV ↗</a></div>`;
    }
  },

  whoami: {
    desc: "Current user session context",
    execute: () => `<div class="text-xs text-slate-300">guest@recruiter-terminal [authenticated as guest with read privileges]</div>`
  },

  theme: {
    desc: "Toggle or set theme: theme dark | theme light",
    execute: (args) => {
      const mode = args[0] ? args[0].toLowerCase() : (document.body.classList.contains('light-theme') ? 'dark' : 'light');
      setTheme(mode);
      return `<div class="text-xs text-emerald-400">Theme switched to <span class="font-mono font-bold">${mode}</span>.</div>`;
    }
  },

  sudo: {
    desc: "Administrative privileges check",
    execute: () => `<div class="text-xs text-amber-400">Access Granted: Recruiter root privilege already unlocked. Feel free to interview me!</div>`
  },

  clear: {
    desc: "Clear terminal viewport",
    execute: () => {
      const terminalOutput = document.getElementById('terminal-output');
      if (terminalOutput) terminalOutput.innerHTML = '';
      return '';
    }
  }
};

// Initialize on DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTerminal();
  initSkillsFilter();
  initCredentialsFilter();
  initKeyboardShortcuts();
});

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  setTheme(savedTheme);

  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = document.body.classList.contains('light-theme');
      setTheme(isLight ? 'dark' : 'light');
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

// Terminal Logic
function initTerminal() {
  const terminalInput = document.getElementById('terminal-input');
  const terminalForm = document.getElementById('terminal-form');
  const terminalOutput = document.getElementById('terminal-output');

  if (!terminalForm || !terminalInput || !terminalOutput) return;

  // Initial welcome message
  terminalOutput.innerHTML = `
    <div class="text-slate-400 text-xs mb-2">
      <span class="text-emerald-400 font-mono font-bold">mirza@kvpjb-system</span> <span class="text-slate-500">[v2.4.0-release]</span>
      <br>Interactive Developer Shell. Type <span class="text-cyan-400 font-bold font-mono">help</span> or click command pills below to explore.
    </div>
  `;

  terminalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const rawVal = terminalInput.value.trim();
    if (!rawVal) return;

    handleCommand(rawVal);
    STATE.terminalHistory.push(rawVal);
    STATE.historyIndex = STATE.terminalHistory.length;
    terminalInput.value = '';
  });

  // History navigation with arrow keys & Tab auto-complete
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

  // Clicking terminal body focuses input
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

  // Append user command line
  const cmdRow = document.createElement('div');
  cmdRow.className = 'mt-2 text-xs flex items-center space-x-1.5';
  cmdRow.innerHTML = `
    <span class="text-emerald-400 font-bold font-mono">mirza@kvpjb:~$</span>
    <span class="text-slate-100 font-mono">${escapeHtml(cmdStr)}</span>
  `;
  terminalOutput.appendChild(cmdRow);

  // Execute special or mapped commands
  if (command === 'open') {
    const target = args[0] ? args[0].toLowerCase() : '';
    if (target === 'github') {
      window.open('https://github.com/mircrtierr', '_blank');
      appendOutput(`<div class="text-xs text-emerald-400">Opening https://github.com/mircrtierr in new tab...</div>`);
    } else if (target === 'smartattend' || target === 'attendance') {
      openProjectModal('smartattend');
      appendOutput(`<div class="text-xs text-emerald-400">Opening SmartAttend KVPJB architecture modal...</div>`);
    } else if (target === 'yolo' || target === 'electronics') {
      openProjectModal('yolo');
      appendOutput(`<div class="text-xs text-emerald-400">Opening YOLO Electronics case study modal...</div>`);
    } else if (target === 'resume' || target === 'cv') {
      window.open('Resume_Muhammad_Mirza_Aqmal_Raziq.html', '_blank');
      appendOutput(`<div class="text-xs text-emerald-400">Opening resume document...</div>`);
    } else {
      appendOutput(`<div class="text-xs text-amber-400">Usage: open [github | smartattend | yolo | resume]</div>`);
    }
  } else if (COMMANDS[command]) {
    const result = COMMANDS[command].execute(args);
    if (result) {
      appendOutput(result);
    }
  } else {
    appendOutput(`
      <div class="text-xs text-red-400 mt-1">
        command not found: <span class="font-mono">${escapeHtml(command)}</span>. 
        Type <span class="text-cyan-400 font-mono font-bold cursor-pointer underline" onclick="runCliCommand('help')">help</span> to view all commands.
      </div>
    `);
  }

  // Scroll to bottom
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

// Global function to trigger a command from button pills
window.runCliCommand = function(cmd) {
  const terminalInput = document.getElementById('terminal-input');
  if (terminalInput) {
    terminalInput.value = cmd;
    handleCommand(cmd);
    terminalInput.value = '';
    terminalInput.focus();
  }
};

// Project Modals
const PROJECT_MODAL_DATA = {
  smartattend: {
    title: "SmartAttend KVPJB – Facial Recognition Attendance Management System",
    category: "Edge AI • Deep Learning • Web Architecture",
    githubUrl: "https://github.com/mircrtierr/smartattend-kvpjb",
    overview: `
      SmartAttend KVPJB is an institutional facial recognition attendance platform engineered specifically for Kolej Vokasional Perdagangan Johor Bahru. 
      It automates student verification, eliminates proxy check-ins, and cuts morning check-in wait times from minutes to under 500 milliseconds per person.
    `,
    architectureHtml: `
      <div class="space-y-4">
        <div class="bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-xs text-emerald-400 leading-relaxed overflow-x-auto">
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
        <div class="bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-xs text-cyan-400 leading-relaxed overflow-x-auto">
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
          ${data.techBadges.map(b => `<span class="tech-pill text-emerald-300">${b}</span>`).join('')}
        </div>
        <div class="flex items-center gap-3">
          <a href="${data.githubUrl}" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold text-xs rounded-lg transition-all shadow-lg shadow-emerald-500/20">
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

// Credentials Filter Tabs
function initCredentialsFilter() {
  const filterBtns = document.querySelectorAll('.cred-filter-btn');
  const credItems = document.querySelectorAll('.cred-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
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

// Skills Filter
function initSkillsFilter() {
  const skillBtns = document.querySelectorAll('.skill-filter-btn');
  const skillGroups = document.querySelectorAll('.skill-group');

  skillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
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

// Keyboard shortcuts
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Escape key closes modal
    if (e.key === 'Escape') {
      closeProjectModal();
    }
    // Ctrl+K or '/' focuses terminal input
    if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement.tagName !== 'INPUT')) {
      e.preventDefault();
      const terminalInput = document.getElementById('terminal-input');
      if (terminalInput) {
        terminalInput.focus();
        terminalInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });
}

// Utility: Copy to Clipboard with Toast
window.copyToClipboard = function(text, label = 'Copied') {
  navigator.clipboard.writeText(text).then(() => {
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
  }, 2400);
}

// Utility: Escape HTML
function escapeHtml(string) {
  const entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;'
  };
  return String(string).replace(/[&<>"'/]/g, function (s) {
    return entityMap[s];
  });
}

# SmartAttend KVPJB 🎓⚡
### Facial Recognition Attendance Management System

[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-2.x-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![FAISS](https://img.shields.io/badge/Vector%20Search-FAISS-06b6d4?style=for-the-badge)](https://github.com/facebookresearch/faiss)
[![InsightFace](https://img.shields.io/badge/Model-ArcFace-10b981?style=for-the-badge)](https://github.com/deepinsight/insightface)
[![ESP32-CAM](https://img.shields.io/badge/Hardware-ESP32--CAM-f59e0b?style=for-the-badge&logo=espressif&logoColor=white)](https://www.espressif.com/)
[![MySQL](https://img.shields.io/badge/Database-MySQL%20%2F%20MariaDB-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)

---

## 📌 Overview

**SmartAttend KVPJB** is an edge-assisted, biometric facial recognition attendance platform developed for **Kolej Vokasional Perdagangan Johor Bahru (KVPJB)**. 

Traditional barcode, paper, or fingerprint check-ins suffer from long queuing bottlenecks, buddy punching, and slow reporting. SmartAttend solves this by combining low-cost edge capture units (**ESP32-CAM**) with deep facial embeddings (**InsightFace ArcFace**) and ultra-fast vector similarity lookup (**Facebook AI Similarity Search - FAISS**), logging student attendance in under 500 milliseconds per person.

---

## 🏗️ System Architecture

```
+-----------------------------------------------------------------------------------------+
|                              SYSTEM ARCHITECTURE FLOW                                  |
+-----------------------------------------------------------------------------------------+

  [ ESP32-CAM Node ] ----(HTTP MJPEG/POST)----> [ Flask Ingestion API ]
         |                                                |
  (OV2640 Lens, WiFi)                                     v
                                               [ Face Detection (RetinaFace) ]
                                                          |
                                                          v
                                               [ InsightFace (ArcFace) ]
                                                          | (512-dim Normalized Vector)
                                                          v
                                               [ FAISS Vector Index ] <--- IndexFlatIP (Cosine)
                                                          |
                                      +-------------------+-------------------+
                                      | Match (Score >= 0.65)                 | Unrecognized
                                      v                                       v
                              [ Student Verified ]                    [ Flag Unknown / Alert ]
                                      |
                                      v
                        [ MySQL / MariaDB Relational Store ]
                           (Audit Logs, Check-in/out, Timestamps)
                                      |
                                      v
                      [ Web Dashboard & Analytics UI ]
                           (CSV/PDF Reports & Live Stream)
```

---

## ✨ Key Features

- **High-Accuracy Biometrics:** Powered by ArcFace loss network; robust against illumination changes, glasses, varying angles, and face masks.
- **Sub-10ms 1:N Vector Lookup:** FAISS `IndexFlatIP` computes inner-product cosine similarity over thousands of student face vectors in milliseconds.
- **Affordable Edge Hardware:** Built using ESP32-CAM (OV2640 2MP camera), operating on standard 2.4GHz campus Wi-Fi networks.
- **Relational Integrity:** Structured MySQL/MariaDB database tracking student roll numbers, departments, punch timestamps, status (ON_TIME, LATE, ABSENT), and confidence scores.
- **Administrative Control Panel:** Web interface for registering new students, managing face encodings, live status feeds, and one-click PDF/CSV reports.

---

## ⚙️ Tech Stack & Hardware

| Layer | Technology |
| :--- | :--- |
| **Edge Hardware** | ESP32-CAM (AI-Thinker) + FTDI Programmer / USB-UART |
| **Backend Engine** | Python 3.10+, Flask, Gunicorn |
| **Vision & ML** | InsightFace (ArcFace 512D), RetinaFace, OpenCV, NumPy |
| **Vector Index** | FAISS (Facebook AI Similarity Search - CPU/GPU) |
| **Database** | MySQL / MariaDB (InnoDB engine) |
| **Frontend** | HTML5, Tailwind CSS, JavaScript (Fetch API / WebSockets) |

---

## 🚀 Quickstart & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/mircrtierr/smartattend-kvpjb.git
cd smartattend-kvpjb
```

### 2. Configure Environment & Database
Create a `.env` file in the root directory:
```ini
FLASK_APP=app.py
FLASK_ENV=development
SECRET_KEY=your_secure_secret_key
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=smartattend_db
SIMILARITY_THRESHOLD=0.65
```

Import the database schema:
```bash
mysql -u root -p smartattend_db < schema.sql
```

### 3. Install Dependencies
```bash
python -m venv venv
# Windows:
venv\Scripts\activate
# Linux/macOS:
source venv/bin/activate

pip install -r requirements.txt
```

### 4. Flash ESP32-CAM Firmware
1. Open `firmware/esp32_cam_stream.ino` in Arduino IDE.
2. Select Board: **AI Thinker ESP32-CAM**.
3. Configure your Wi-Fi SSID, Password, and Flask server IP address.
4. Upload to ESP32-CAM via FTDI programmer (bridge GPIO0 to GND during flash).

### 5. Launch the Server
```bash
python run.py
```
Access the dashboard at `http://localhost:5000`.

---

## 👨‍💻 Author & Contact

**Muhammad Mirza Aqmal Raziq bin Mirza Affzard**
- 🎓 Student, Diploma Teknologi Komputeran @ KVPJB (CGPA 3.98)
- 💼 Seeking 5-Month IT Internship / OJT (Feb – June 2027)
- 🐙 GitHub: [@mircrtierr](https://github.com/mircrtierr)
- ✉️ Email: [mirzaaqmal22@gmail.com](mailto:mirzaaqmal22@gmail.com)
- 📞 Phone: `013-5788399`


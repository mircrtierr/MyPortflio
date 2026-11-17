# Electronic & Computer Goods Object Detection – YOLO 🔍🖥️
### Deep Learning Vision Pipeline for Hardware Auditing & E-Waste Classification

[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![YOLOv8](https://img.shields.io/badge/YOLO-Ultralytics-00ffff?style=for-the-badge)](https://github.com/ultralytics/ultralytics)
[![Roboflow](https://img.shields.io/badge/Dataset-Roboflow-6706ce?style=for-the-badge)](https://roboflow.com/)
[![Google Colab](https://img.shields.io/badge/Compute-Google%20Colab-F9AB00?style=for-the-badge&logo=googlecolab&logoColor=white)](https://colab.research.google.com/)
[![OpenCV](https://img.shields.io/badge/Vision-OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white)](https://opencv.org/)

---

## 📌 Overview

This project implements an end-to-end computer vision model capable of detecting, localizing, and classifying electronic components and computer peripherals in real time.

Engineered using **Ultralytics YOLO (You Only Look Once)**, the model is trained on a custom-annotated dataset curated on **Roboflow** and optimized inside a **Google Colab GPU** environment. It addresses challenges in vocational computer labs, component inventory counting, and automated electronic waste (e-waste) sorting.

---

## 🎯 Target Hardware Classes

The model classifies 7 common computer and electronics items:
1. `Motherboard` (Desktop ATX/Micro-ATX motherboards)
2. `Graphics Card` (Dedicated GPU cards)
3. `RAM Stick` (DDR3 / DDR4 / DDR5 memory modules)
4. `Processor / CPU` (LGA & PGA form factor microprocessors)
5. `Power Supply Unit (PSU)` (Standard SMPS power units)
6. `Storage Drive` (2.5"/3.5" HDD and SATA/NVMe SSDs)
7. `Peripheral Expansion Card` (NICs, sound cards)

---

## 🔄 Pipeline Workflow

```
+-----------------------------------------------------------------------------------------+
|                                DATA & TRAINING PIPELINE                                 |
+-----------------------------------------------------------------------------------------+

  [ Image Collection ]
          |
          v
  [ Roboflow Platform ] 
          |
          +--> Bounding Box Annotation (7 Hardware Classes)
          +--> Pre-processing (Auto-orient, 640x640 resize)
          +--> Data Augmentation (Horizontal/Vertical Flip, Random 90° Rotations,
          |                       Mosaic Augmentation, Contrast & Hue Jitter)
          +--> Dataset Export (YOLOv8 PyTorch format: Train 70%, Val 20%, Test 10%)
          |
          v
  [ Google Colab T4 GPU Environment ]
          |
          +--> Transfer Learning using pretrained weights (`yolov8s.pt`)
          +--> Hyperparameter Tuning: Cosine LR scheduler, SGD optimizer, batch=16
          +--> 100 Epochs with early stopping patience=15
          |
          v
  [ Model Evaluation & Export ]
          |
          +--> Evaluation Metrics (mAP@0.5: > 92.4%, Precision: 94.1%, Recall: 89.8%)
          +--> Export formats: PyTorch (`best.pt`), ONNX, OpenVINO
          |
          v
  [ Real-Time Inference Stream ]
          |
          +--> OpenCV Video Capture / Webcam
          +--> Bounding box visualization with confidence scoring & item counts
```

---

## 📊 Performance Benchmarks

| Metric | Score | Note |
| :--- | :--- | :--- |
| **mAP@0.5** | **92.4%** | Mean Average Precision at IoU threshold 0.5 |
| **mAP@0.5:0.95** | **78.2%** | Stricter IoU threshold across varying lighting |
| **Precision** | **94.1%** | Minimal false positive rate on dense component clusters |
| **Recall** | **89.8%** | High capture rate even with overlapping cables |
| **Inference Speed** | **~22 ms** | Real-time performance (~45 FPS) on modern GPUs |

---

## 💻 Installation & Usage

### 1. Clone the Repository
```bash
git clone https://github.com/mircrtierr/yolo-electronics-detection.git
cd yolo-electronics-detection
```

### 2. Set Up Virtual Environment & Dependencies
```bash
python -m venv venv
# Windows:
venv\Scripts\activate
# Linux/macOS:
source venv/bin/activate

pip install -r requirements.txt
```

### 3. Run Inference on Video or Webcam
```bash
# Webcam feed
python detect.py --weights weights/best.pt --source 0 --conf 0.5

# Image or directory
python detect.py --weights weights/best.pt --source data/samples/test_board.jpg
```

### 4. Retrain with Your Own Dataset
```bash
python train.py --data data.yaml --epochs 100 --img 640 --batch 16 --weights yolov8s.pt
```

---

## 👨‍💻 Author & Contact

**Muhammad Mirza Aqmal Raziq bin Mirza Affzard**
- 🎓 Student, Diploma Teknologi Komputeran @ KVPJB (CGPA 3.98)
- 📜 ICDL AI Essentials (Syllabus 2.0) Certified
- 💼 Seeking 5-Month IT Internship / OJT (Feb – June 2027)
- 🐙 GitHub: [@mircrtierr](https://github.com/mircrtierr)
- ✉️ Email: [mirzaaqmal22@gmail.com](mailto:mirzaaqmal22@gmail.com)
- 📞 Phone: `013-5788399`


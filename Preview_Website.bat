@echo off
title Muhammad Mirza Aqmal Raziq - Retro Portfolio
cd /d "%~dp0"

echo ==========================================================
echo Starting Muhammad Mirza Aqmal Raziq Retro Portfolio...
echo ==========================================================

:: Check if server is already responding on port 8080
powershell -NoProfile -Command "try { $r = Invoke-WebRequest -Uri 'http://localhost:8080/index.html' -Method Head -TimeoutSec 1; exit 0 } catch { exit 1 }" >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo Local web server is already running on port 8080.
) else (
    echo Launching background HTTP server on port 8080...
    start /b "" "C:\Users\mirza\AppData\Local\Programs\Python\Python310\python.exe" -m http.server 8080
    timeout /t 1 >nul
)

echo Opening http://localhost:8080/index.html in your default browser...
start "" "http://localhost:8080/index.html"
exit

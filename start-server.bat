@echo off
title IELTS Academic Lab Server (Port 3000)
cd /d "%~dp0"
echo ========================================================
echo  DANG KHOI DONG HE THONG IELTS ACADEMIC LAB...
echo  Trinh duyet se tu dong mo: http://localhost:3000/
echo ========================================================
start "" "http://localhost:3000/"
node server.js
pause


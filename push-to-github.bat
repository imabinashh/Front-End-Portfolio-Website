@echo off
cd /d "%~dp0"
echo Pushing your project to GitHub...
"C:\Program Files\Git\cmd\git.exe" remote set-url origin https://github.com/imabinashh/Fornt-End-Portfolio-Website.git
"C:\Program Files\Git\cmd\git.exe" push -u origin main --force
echo.
echo =======================================================
echo If you see 'branch main set up to track origin/main':
echo YOUR PROJECT IS SUCCESSFULLY UPLOADED TO GITHUB!
echo =======================================================
pause


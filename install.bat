@echo off
echo ========================================
echo Tokyo Japanese Cuisine - React Setup
echo ========================================
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    echo Recommended version: Node.js 16 or higher
    pause
    exit /b 1
)

echo Node.js version:
node --version
echo.

echo Checking npm version:
npm --version
echo.

echo Installing dependencies...
echo This may take a few minutes...
echo.

npm install

if %errorlevel% neq 0 (
    echo.
    echo ERROR: Failed to install dependencies!
    echo Please check your internet connection and try again.
    pause
    exit /b 1
)

echo.
echo ========================================
echo Installation completed successfully!
echo ========================================
echo.
echo To start the development server, run:
echo   npm start
echo.
echo To build for production, run:
echo   npm run build
echo.
echo Make sure to place your images in the public/images/ folder:
echo   - tokyorestaurant.webp
echo   - tokyologo.png
echo   - chef.webp
echo   - vision.png
echo   - menubg.webp
echo   - sushi.png
echo   - grand.png
echo   - Shoji.svg
echo   - blossom.png
echo   - petal1.png to petal8.png
echo.
pause

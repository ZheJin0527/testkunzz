#!/bin/bash

echo "========================================"
echo "Tokyo Japanese Cuisine - React Setup"
echo "========================================"
echo

echo "Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org/"
    echo "Recommended version: Node.js 16 or higher"
    exit 1
fi

echo "Node.js version:"
node --version
echo

echo "Checking npm version:"
npm --version
echo

echo "Installing dependencies..."
echo "This may take a few minutes..."
echo

npm install

if [ $? -ne 0 ]; then
    echo
    echo "ERROR: Failed to install dependencies!"
    echo "Please check your internet connection and try again."
    exit 1
fi

echo
echo "========================================"
echo "Installation completed successfully!"
echo "========================================"
echo
echo "To start the development server, run:"
echo "  npm start"
echo
echo "To build for production, run:"
echo "  npm run build"
echo
echo "Make sure to place your images in the public/images/ folder:"
echo "  - tokyorestaurant.webp"
echo "  - tokyologo.png"
echo "  - chef.webp"
echo "  - vision.png"
echo "  - menubg.webp"
echo "  - sushi.png"
echo "  - grand.png"
echo "  - Shoji.svg"
echo "  - blossom.png"
echo "  - petal1.png to petal8.png"
echo

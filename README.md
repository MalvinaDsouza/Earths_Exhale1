# Earth’s Exhale

A premium plant showcase website built using React.js and Tailwind CSS.

Features include:

- Responsive modern UI
- Glassmorphism design
- Custom plant product cards
- Customer reviews section
- Interactive navigation
- Smooth custom styling

## Tech Stack

- React.js
- Tailwind CSS v4
- Vite
- React Icons

## Project Structure

frontend/
│
├── public/
│ └── images/
│
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Hero.jsx
│ │ ├── ReviewCard.jsx
│ │ ├── ProductCard.jsx
│ │ ├── TopSelling.jsx
│ │ └── FinalSection.jsx
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── package.json
├── vite.config.js
└── README.md

## Setup Instructions

### 1. Clone Repository

git clone <your-github-repo-url>

cd frontend

### 2. Install Dependencies

npm install

### 3. Run Development Server

npm run dev

Application runs at:

http://localhost:5173

## Build for Production

npm run build

## Preview Production Build

npm run preview

## Required Packages

If needed, install manually:

npm install react-icons
npm install tailwindcss @tailwindcss/vite

## Tailwind Setup

vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
plugins: [
react(),
tailwindcss(),
],
})

src/index.css

@import "tailwindcss";

## Author

Malvina Dsouza

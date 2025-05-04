# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Dashboard App (React + Tailwind)

A responsive admin dashboard built with React, Tailwind CSS, and Recharts.

## Features

- 🔐 Simulated Login Page (hardcoded)
- 📊 Overview Dashboard with 5 Charts (Bar, Line, Pie)
- 👥 Users Table (sortable + paginated)
- ⚙️ Settings Page (update name/email/password)
- 📱 Fully responsive design with mobile sidebar
- ✅ Toast feedback (form actions)

## Tech Stack

- **React** (Vite)
- **Tailwind CSS**
- **React Router**
- **Recharts** for charts
- **React Hot Toast**

## Setup

```bash
git clone https://github.com/yourusername/user_dashboard_-app.git
cd dashboard-app
npm install
npm run dev

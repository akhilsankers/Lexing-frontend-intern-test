# Lexisg-frontend-intern-test

This is a simulated legal assistant frontend interface built for the Lexi internship assignment. The app allows users to submit a legal query and receive an AI-generated answer along with citations from supporting legal documents. Each citation links directly to the relevant part of the source PDF, improving transparency and traceability.

---

## 🚀 Live Demo

🔗 [Click here to view the hosted app](https://lexisg-frontend-intern.netlify.app/)

---

## 🛠 Tech Stack

- ⚛️ **React.js** – Frontend library
- 🎨 **React-Bootstrap** – UI components
- 💨 **Tailwind CSS** (optional) – Utility-first styling
- 📄 **PDF.js** – PDF viewing and search/highlight

---

## 📦 How to Run the Project Locally

Follow these steps to run the project on your local machine:

```bash
# 1. Clone the repository


# 2. Navigate into the project directory
cd Lexisg-frontend-intern-test

# 3. Install all dependencies
npm install

# 4. Start the development server
npm run dev
```
# Citation Linking Explained
When a user submits a legal query:

The app sends the query to a mock API (simulateLegalQueryAPI).

The simulated response includes:

An AI-generated legal answer

One or more citation excerpts

Each citation includes:

📄 Source file name

🔗 Link to the PDF

🔍 A PDF.js viewer that:

Opens the document in a new tab

Scrolls to the expected page

Highlights relevant terms using #search query
# Screenshot
![Screenshot 2025-07-09 102951](https://github.com/user-attachments/assets/0f79f1b5-64b4-4400-991c-a25df9c97ece)
![Screenshot 2025-07-09 103023](https://github.com/user-attachments/assets/27877e37-45c7-4a23-82b8-7fc63c868b84)
![Screenshot 2025-07-09 103051](https://github.com/user-attachments/assets/cb086190-6722-42f7-a605-b5e14f5468cf)



#
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


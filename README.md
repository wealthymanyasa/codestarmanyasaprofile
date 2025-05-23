# Portfolio Website

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations with Framer Motion and a clean, professional design.

## ✨ Features

- 🎨 Responsive design that works on all devices
- ⚡ Blazing fast performance with React 18
- 🎭 Smooth animations and transitions with Framer Motion
- 📱 Mobile-first approach
- 📧 Contact form with email integration
- 🌓 Dark/light mode support
- 🔍 SEO optimized

## 🚀 Technologies Used

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Form Handling**: EmailJS
- **Routing**: React Router DOM
- **Notifications**: React Hot Toast
- **Sliders**: Swiper.js

## 🛠️ Prerequisites

- Node.js (v16.16.0 or higher)
- npm (v8.19.2 or higher)

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 🚀 Running the Application

### Development Mode

```bash
npm start
```

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Production Build

```bash
npm run build
```

Builds the app for production to the `build` folder. The build is minified and the filenames include the hashes.

## 🏗️ Project Structure

```
src/
├── assets/          # Images and other static files
├── components/      # Reusable UI components
├── constants/       # Constants and configuration
├── context/         # React context providers
├── hooks/           # Custom React hooks
├── pages/           # Page components
├── styles/          # Global styles and Tailwind config
└── utils/           # Utility functions
```

## 🌐 Deployment

This project is configured for deployment on Firebase Hosting. To deploy:

1. Install Firebase CLI if you haven't already:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Deploy to Firebase:
   ```bash
   npm run build
   firebase deploy
   ```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Create React App](https://create-react-app.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

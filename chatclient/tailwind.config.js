/** @type {import('tailwindcss').Config} */

const theme = {
  colors: {
    rareColor: '#FF4A09',
    logo: '#010019',
    sentMessages: '#F6F6F6',
    addContactBtn: '#F6F6F6',
    newMessage: '#F6F6F6',
    onFocus: '#FF4A09',
    navbarColor: '#010019',
    callBtn: '#010019',
    bodyColor: '#F6F6F6',
    onSelectContact: '#F6F6F6',
    bodyBackgroundColor: '#EEEEEE',
    text: '#8c8c91',
    receivedMessageColor: '#000006',
  },
  fontFamily: {
    sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
  },
  borderRadius: {
    div: 'rounded-lg',
  },
  shadows: {
    button: '0 2px 4px rgba(0, 0, 0, 0.25)',
    navbar: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
  transitions: {
    navbar: 'opacity 0.2s ease-in-out',
  },
  transformations: {
    rotate: 'rotate(45deg)',
    scale: 'scale(1.2)',
  },
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  Theme: { theme },
  plugins: [],
}


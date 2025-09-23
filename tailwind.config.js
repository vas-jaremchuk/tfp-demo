/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Primary colors
        'primary-black': '#212529',
        'primary-white': '#ffffff',
        'primary-dark': '#495057',
        'primary-medium': '#dee2e6',
        'primary-light': '#e9ecef',
        'primary-lighter': '#f8f9fa',
        'primary-main': '#cfb6ae',
        
        // Accent colors
        'accent-medium': '#00528e',
        'accent-light': '#3b82f6',
        'accent-dark': '#1e40af',
        
        // Legacy TFP colors
        'tfp-blue': '#2563eb',
        'tfp-gray': '#6b7280',
      },
    },
  },
  plugins: [],
}

# Insurance Growth Calculator

This project implements a responsive, interactive insurance growth calculator page based on the provided Figma design and Excel-based calculation guide. It uses a modern web development tech stack with TypeScript, React, Tailwind CSS, and Vite.

## 🚀 Getting Started

To run the project locally:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

To run tests:

```bash
npm run test
```

To view the deployed page [check it out here](https://eventual-calc.vercel.app/)

## 🛠️ Tech Stack

* **React (with Vite)**: Chosen for fast development, great performance in dev mode, and a strong ecosystem.
* **TypeScript**: Adds type safety and improves maintainability and scalability of the code.
* **Tailwind CSS**: Enabled quick, utility-first styling with good responsive defaults and flexibility for custom designs.
* **Vitest + React Testing Library**: Used for testing components and utility functions, ensuring testability.

## ✅ Features

* Interactive insurance growth slider input
* Dynamic chart and values that update in real-time
* Functional hamburger menu for small screens
* Responsive design that works reasonably across screen sizes 
* Section scroll on CTA button ("How it works")
* Keyboard accessibility for interactive elements
* Testimonials section with static cards

## 📌 Assumptions Made

* The Figma file was only an image, not a fully spec'd design system. Thus:

  * Font sizes, spacing, and colors were interpreted with flexibility.
  * Exact pixel-perfect alignment was not prioritized.
* The "Testimonials" section appears to be a carousel or slider; three static testimonial cards were implemented instead due to time constraints.
* Annual insurance growth is the only dynamic input, and other values are constant as per the Excel logic.
* The "How it works" CTA scrolls to its section as expected behavior.

## ⚠️ Limitations

- This project was developed and tested exclusively in **Google Chrome**. Cross-browser compatibility (e.g., Safari, Firefox, Edge) has not been verified.

## 🔮 If I Had More Time

* Finalize responsive behavior and styling for mobile layouts
* Build a complete testimonial carousel with proper controls and animations
* Refine spacing, typography, and color to better match the Figma design
* Enhance accessibility (ARIA roles, screen reader checks, tab flow audit)
* Add more unit and integration tests for interactivity and layout
* Optimize bundle size and performance with code splitting
* Perform thorough cross-browser testing to ensure consistent behavior across all major browsers (e.g., Safari, Firefox, Edge)
* Resolve a responsiveness issue observed during Chrome emulator testing, where the bar charts occasionally requires a page reload to render annotations and layout correctly


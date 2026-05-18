# MooreSkillUp

MooreSkillUp is built around categories, courses, sections, lessons, and tasks so learners can preview beginner content first and pay per course for full access later.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Cloudflare Workers](https://workers.cloudflare.com/)

## Project Structure

```
src/
├── app/                 # Next.js app directory (pages & layouts)
│   ├── courses/         # Courses listing page
│   ├── pricing/         # Pricing page
│   ├── quiz-shop/       # Quiz shop page
│   ├── contact/         # Contact form page
│   ├── faq/             # FAQ page
│   └── layout.tsx       # Root layout with theme provider
├── components/          # Reusable components
│   ├── Navbar.tsx       # Navigation bar
│   ├── Footer.tsx       # Footer
│   ├── Button.tsx       # Button component
│   └── ui-kit/          # UI components (Input, ProgressBar, etc.)
├── lib/                 # Utility functions & data
│   ├── theme.tsx        # Theme provider & context
│   ├── mock-data.ts     # Sample course & program data
│   └── utils.ts         # Helper utilities
└── styles.css           # Global styles & theme variables
```

## Features

- **Dark & Light Theme**: Smooth theme switching with localStorage persistence
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Course Browsing**: Explore multiple course categories
- **Pricing Plans**: Different tiers for learners
- **Contact & Support**: Direct contact form for inquiries
- **FAQ Section**: Common questions about the platform

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_BRAND_LOGO=/mooreskillup-logo.jpeg
```

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint.
- `npm run format`: Runs Prettier.

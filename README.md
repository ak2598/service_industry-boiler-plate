# Service Boilerplate

A modern Next.js service boilerplate built with TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- ⚡ **Next.js 15** - Latest version with App Router and Server Components
- 🔷 **TypeScript** - Full type safety and better developer experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **shadcn/ui** - Beautiful, accessible, and customizable UI components
- 🎯 **Reddit Sans Font** - Modern typography using Reddit Sans font family
- 🌙 **Dark Mode** - Built-in dark mode support
- 📱 **Responsive Design** - Mobile-first responsive design

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   └── ui/            # shadcn/ui components
│   └── lib/               # Utility functions
├── public/                # Static assets
└── ...config files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Adding shadcn/ui Components

To add more shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add toast
```

## Customization

### Theme
The project uses a neutral color scheme. You can customize colors in `src/app/globals.css`.

### Font
The project is configured to use Reddit Sans. You can change the font in `src/app/layout.tsx`.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

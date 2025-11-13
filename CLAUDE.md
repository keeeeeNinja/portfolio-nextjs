# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 portfolio application built with React 19, TypeScript, and Tailwind CSS 4. It uses the App Router architecture with a minimal initial setup.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Project Structure

- **`app/`**: Next.js App Router directory
  - `layout.tsx`: Root layout with Geist font configuration
  - `page.tsx`: Home page component
  - `globals.css`: Global styles with Tailwind directives
- **`public/`**: Static assets (SVGs, images)
- **Path aliases**: `@/*` maps to the project root

## TypeScript Configuration

- Target: ES2017
- Strict mode enabled
- JSX: react-jsx (React 19's automatic JSX runtime)
- Module resolution: bundler

## Code Quality Guidelines

As defined in プロンプト.md, this project follows professional frontend engineering standards:

1. **Semantic HTML**: Use meaningful HTML structure, avoiding non-semantic tags
2. **CSS Best Practices**:
   - Prioritize reusability and maintainability
   - Avoid unnecessary nesting and `!important`
   - No hacky solutions (negative margins, unnecessary absolute positioning)
3. **Production-Ready Code**: Write code that can withstand professional code review
4. **Maintainability**: Every architectural decision should be explainable and justifiable

## Styling

- Tailwind CSS 4 with PostCSS
- Dark mode support via `dark:` utility classes
- Geist Sans and Geist Mono fonts from Google Fonts
- Global styles in `app/globals.css`

## Development Notes

- The app uses Next.js image optimization via `next/image`
- Pages auto-update on file changes during development
- TypeScript strict mode is enabled - ensure type safety in all code

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for heimvik.me — a 90s/Y2K retro-styled React + TypeScript SPA. Each page has a distinct visual theme as an experiment in different web styles.

## Commands

```bash
npm start        # Dev server at http://localhost:3000
npm run build    # Production build
npm test         # Run tests (watch mode)
npm test -- --watchAll=false  # Run tests once
```

## Architecture

The app uses React Router v6 with four top-level routes, each a self-contained page with its own CSS:

- `/` → `Home` — landing page
- `/about` → `About` — about page
- `/resume` → `Resume` — includes a `LoadingScreen` and `Persona` sub-component
- `/projects` → `Projects` — Windows 98 desktop simulation

### Projects page (Windows 98 theme)

The most complex page. It simulates a Windows 98 desktop:
- `Projects.tsx` — manages state for open windows and start menu visibility
- `Icon.tsx` — desktop icons (defined as a static array in `Projects.tsx`)
- `Taskbar.tsx` — bottom taskbar showing open windows
- `StartMenu.tsx` — start menu overlay
- `ProjectModal.tsx` — draggable window for each open project

Projects are identified by string IDs (`project1`–`project5`) and their content lives in `ProjectModal.tsx`. To add a new project, add an entry to the `icons` array in `Projects.tsx` and handle the new ID in `ProjectModal.tsx`.

### Assets

- `src/assets/gifs/` — retro animated GIFs used for decoration
- `src/assets/background/` — background images per page
- `src/assets/windows98-icons/` — Windows 98 style icons for the Projects page

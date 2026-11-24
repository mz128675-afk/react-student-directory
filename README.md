# React Student Directory

Mirza Zubair's first React project (Project #8 in the GitHub portfolio). A student directory app built with React + Vite after completing React JS at university.

## What it is

A small app that lists students as cards and lets you search, filter, add and delete them — no backend, everything runs in the browser with React state.

## Features

- **Student cards** — 6 students to start: name, department, age and GPA
- **Live search** — type a name and the list filters as you type
- **Department filter** — All / CS / IT / SE buttons
- **Add a student** — form with name, department select and age
- **Delete** — a delete button on every card
- **Count + empty state** — shows "6 students" (or the filtered count) and a friendly message when nothing matches

## Tech used

- React 19 (components, props, `useState`, `useMemo`)
- Vite 8 (dev server + production build)
- Plain CSS, no UI library

## How to run

```bash
npm install
npm run dev
```

Then open the local address Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

The build output goes to `dist/`. The Vite config uses `base: './'` so the built site works on GitHub Pages under a sub-path.

## Live demo

The live demo will be on GitHub Pages once the repo is uploaded (upload is approval-gated — nothing is pushed automatically).

# Portfolio website

Personal portfolio of Muhammad Zharif Zhafran Bin Ismadi, Junior Cloud Engineer.

Built with React, Vite and React Router. Pages: Home, About, Career, Projects, Skills and Contact (`src/pages/`).

All content lives in `src/data/cv.js`, so updating the CV means editing that one file.

Deployed on Netlify. `netlify.toml` sets the build and sends every route to `index.html` so links like `/career` load directly.

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Design

The visual design follows the [unslop](https://github.com/heydamir/unslop) method by Damir Sokolovsky (CC BY 4.0): an ink neutral ramp, one amber accent, IBM Plex Sans and Mono, and a 4px spacing grid. The hero visual is the WordPress-on-AWS project drawn as a VPC diagram in `src/components/ArchitectureDiagram.jsx`.

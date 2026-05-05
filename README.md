# Homepage README

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm dev`                | Starts local dev server at `localhost:4321`      |
| `pnpm build`              | Build your production site to `./dist/`          |
| `pnpm preview`            | Preview your build locally, before deploying     |
| `pnpm astro ...`          | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help`    | Get help using the Astro CLI                     |

## Environment variables

Astro includes a few environment variables out of the box:
| Variable                   | Description                                         |
| :------------------------- | :-------------------------------------------------- |
| `import.meta.env.MODE`     | The mode your site is running in. This is development when running astro dev and production when running astro build. |
| `import.meta.env.PROD`     | true if your site is running in production; false otherwise. |
| `import.meta.env.DEV`      | true if your site is running in development; false otherwise. Always the opposite of import.meta.env.PROD. |
| `import.meta.env.BASE_URL` | The base URL your site is being served from. This is determined by the base config option. |
| `import.meta.env.SITE`     | This is set to the site option specified in your project’s astro.config. |

## Credit

The theme of this website is based off of [Bear Blog](https://github.com/HermanMartinus/bearblog/).

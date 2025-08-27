# Copilot Instructions for proyecto-roca

## Project Overview
This is a minimal web project centered around a single HTML file: `index.html`. The project appears to be an informational or contact page for a real estate business ("Roca - El mundo inmobiliario aquí").

## Architecture & Structure
- The codebase currently consists of only one file: `index.html`.
- All content, navigation, and forms are implemented directly in this file.
- There are no external scripts, stylesheets, or build tools present.
- No backend, API, or database integration is currently visible.

## Developer Workflows
- **No build or test steps are required.**
- All changes are made directly to `index.html`.
- To preview changes, open `index.html` in a web browser.
- No package management or dependency installation is needed.

## Project-Specific Conventions
- All markup is written in standard HTML5.
- Navigation is implemented with anchor tags, but all links currently point to `#` (placeholders).
- The form uses basic HTML input elements and does not include any client-side validation or JavaScript.
- The project title and main heading are in Spanish, indicating localization or target audience.

## Patterns & Examples
- **Form Example:**
  ```html
  <form>
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" required>
      <!-- ...other fields... -->
      <button type="submit">Enviar</button>
  </form>
  ```
- **Navigation Example:**
  ```html
  <nav>
      <a href="#">Inicio</a> |
      <a href="#">Propiedades</a> |
      <a href="#">Servicios</a> |
      <a href="#">Contacto</a>
  </nav>
  ```

## Guidance for AI Agents
- Focus on direct HTML edits and improvements (structure, accessibility, localization).
- If adding new features, keep everything in `index.html` unless new files are explicitly requested.
- Use Spanish for user-facing text to match existing content.
- Avoid introducing frameworks, build tools, or external dependencies unless requested.

## Key File Reference
- `index.html`: The sole source of truth for all content and logic.

---
If the project expands (e.g., adds CSS, JS, or backend), update these instructions to reflect new workflows and conventions.

# Portfolio Website

A responsive personal portfolio for Gunin Bhardwaj, showcasing skills, projects, profile details, social links, and a contact section.

## Sections

- Introduction and profile links
- About section
- Skills grouped by web development, AI/data science, databases, tools, and soft skills
- Project showcase
- Contact form

## Technologies

- HTML5
- CSS3
- JavaScript
- Font Awesome
- Intersection Observer API

## Run Locally

Open `index.html` directly in a browser, or use a local static server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Project Structure

- `index.html` - Page structure and content
- `style.css` - Layout, styling, animations, and responsive behavior
- `script.js` - Particle generation, navigation, scroll animations, mouse effects, and form handling

## Behavior

- Navigation links scroll smoothly to page sections.
- Sections animate as they enter the viewport.
- Decorative particles and floating shapes respond to page and mouse movement.
- The contact form currently validates input and resets after submission, but does not send data to a backend.

## Customization

Update the name, biography, skills, project links, resume URL, and social profiles in `index.html`. Adjust colors and layout in `style.css` and page interactions in `script.js`.
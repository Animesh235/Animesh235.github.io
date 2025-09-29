# Modern Portfolio Template

This is a clean, customizable portfolio website template rewritten from scratch using modern HTML5, CSS3 (with Grid and Flexbox), and vanilla JavaScript. It features a responsive, single-page design with sections for introduction, about, experience (resume), portfolio (with modals), projects & skills (with animated progress bars), interests, contact (form), and footer with social links including Buy Me Coffee.

## Features

- Fully responsive design (mobile-first, works on all devices)
- Smooth scrolling navigation
- Portfolio items with vanilla JS modals (no external libraries)
- Client-side contact form validation (integrate with Formspree/Netlify for submissions)
- Animated skill progress bars on scroll
- Back-to-top button
- Social media integration (LinkedIn, GitHub, Buy Me Coffee)
- Semantic HTML for accessibility
- Lightweight: No heavy dependencies (only Font Awesome CDN for icons and Google Fonts)

## Customization

To make this template your own:

1. **Personal Information**:
   - Replace "Your Name", "Your Profession", "Your Specialty" in the hero and about sections.
   - Edit the bio paragraph in `#about`.
   - Update contact details (email, location) in `#contact`.

2. **Experience (Resume)**:
   - In `#resume`, replace job titles, dates, companies, and descriptions in the timeline items.
   - Add/remove `.timeline-item` divs for more work/education entries.

3. **Portfolio**:
   - Update images (replace placeholder URLs with your own; e.g., upload to ImgBB or GitHub).
   - Edit titles, descriptions, and links in `.portfolio-item` and hidden modal divs (`#modal1`, etc.).
   - Add more `.portfolio-item` divs to the grid as needed.

4. **Projects & Skills**:
   - Update the projects list (`<ul>` in the left column).
   - Modify skill labels and `data-width` attributes (e.g., "90%") in `.progress` divs.
   - Change blog button links to your actual URLs.

5. **Interests**:
   - Edit titles, icons (Font Awesome classes), and descriptions in `.interest-item`.
   - Add/remove items to the grid.

6. **Social Links & Buy Me Coffee**:
   - Update URLs in hero, footer, and contact social links.
   - Replace Buy Me Coffee URL with your own.

7. **Styling**:
   - Customize colors (e.g., primary blue `#007bff` in `styles.css`).
   - Adjust fonts, spacing, or add themes in `styles.css`.
   - For custom images, replace `https://via.placeholder.com/...` URLs.

8. **Advanced**:
   - For contact form submissions, add `action="https://formspree.io/your-email"` to `<form>`.
   - Add a favicon: Place `favicon.ico` in the root and update `<link rel="icon">`.

## Setup

1. Clone or download this repository.
2. Open `index.html` in a modern browser (Chrome, Firefox, etc.) to preview.
3. Edit files using a code editor like VS Code.
4. For development: No build tools needed; it's static.
5. Deploy: Host on GitHub Pages (enable in repo settings), Netlify (drag-and-drop), Vercel, or any static host. Update base URL if needed for relative paths.

## Technologies Used

- **HTML5**: Semantic structure for sections and accessibility.
- **CSS3**: Flexbox/Grid for layouts, animations for skills, media queries for responsiveness.
- **Vanilla JavaScript**: Smooth scroll, modals, form validation, scroll animations (Intersection Observer).
- **External**: Font Awesome (icons via CDN), Google Fonts (Arial for simplicity; swap as needed).

No jQuery, plugins, or build tools required—pure vanilla for performance and ease.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Template rewritten from scratch for a modern, dependency-free experience. Original design discarded.*

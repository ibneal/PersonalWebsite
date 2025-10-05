# Neal Bhalodia - Portfolio Website

A modern, responsive portfolio website built with React to showcase my work, skills, and projects.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Interactive Project Showcase**: iFrame integration for live project demos
- **Smooth Navigation**: Single-page application with smooth scrolling
- **Contact Form**: Functional contact form with validation
- **Modern UI/UX**: Clean, professional design with smooth animations
- **SEO Optimized**: Proper meta tags and semantic HTML

## Sections

1. **About**: Personal information, skills, and experience
2. **Projects**: Interactive showcase with iFrame previews
3. **Contact**: Contact form and social links
4. **Footer**: Additional links and information

## Technologies Used

- React 18
- CSS3 with modern features (Grid, Flexbox, Custom Properties)
- Responsive design principles
- Smooth scrolling and animations
- iFrame integration for project previews

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Customization

### Personal Information

Update the following files with your personal information:

- `src/components/Hero.js` - Update name and description
- `src/components/About.js` - Update bio, skills, and experience
- `src/components/Contact.js` - Update contact information and social links
- `src/components/Footer.js` - Update contact info and social links

### Projects

Edit `src/components/Projects.js` to add your projects:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description...",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://your-project-demo.com",
    githubUrl: "https://github.com/yourusername/project",
    iframeUrl: "https://your-project-demo.com",
    image: "/path/to/project-image.jpg"
  },
  // Add more projects...
];
```

### Styling

The website uses CSS modules for styling. Main style files:

- `src/index.css` - Global styles and utilities
- `src/App.css` - App-level styles
- `src/components/*.css` - Component-specific styles

### Colors

The main color scheme can be customized by updating CSS custom properties in `src/index.css`:

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --accent-color: #f39c12;
  --text-color: #333;
  --background-color: #ffffff;
}
```

## Deployment

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Configure custom domain if needed

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
```json
"homepage": "https://yourusername.github.io/portfolio",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```
3. Run: `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Neal Bhalodia - nealbhalodia@example.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

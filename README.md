# Personal Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS. This portfolio showcases your skills as a MERN Stack Developer with clean design and smooth animations.

## Features

- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Smooth Navigation**: Smooth scrolling between sections
- **Interactive Components**: Hover effects, animations, and transitions
- **Contact Form**: Functional contact form with validation
- **Social Media Integration**: Links to LinkedIn, GitHub, and Twitter
- **SEO Optimized**: Proper meta tags and semantic HTML

## Sections

1. **Hero Section**: Introduction with name, title, and call-to-action buttons
2. **About Me**: Personal description and professional highlights
3. **Skills**: Visual representation of frontend and backend technologies
4. **Projects**: Showcase of 6 sample projects with GitHub and live demo links
5. **Contact**: Contact form and social media links

## Technologies Used

- React 18
- Tailwind CSS 3
- Modern JavaScript (ES6+)
- CSS3 Animations
- Responsive Design

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
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

## Customization

### Personal Information

1. **Hero Section**: Update your name and introduction in `src/components/Hero.js`
2. **About Section**: Modify the about text in `src/components/About.js`
3. **Contact Information**: Update email and social links in `src/components/Contact.js`

### Projects

Update the projects array in `src/components/Projects.js` with your actual projects:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description...",
    technologies: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/yourusername/project",
    liveLink: "https://your-project-demo.vercel.app",
    image: "bg-gradient-to-br from-blue-400 to-purple-500"
  },
  // Add more projects...
];
```

### Colors and Styling

Customize the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: '#3B82F6',    // Blue
  secondary: '#1F2937',  // Dark Gray
  accent: '#10B981',     // Green
}
```

## Deployment

### Deploy to Vercel (Recommended)

1. Build the project:
   ```bash
   npm run build
   ```

2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

3. Deploy:
   ```bash
   vercel
   ```

   Or connect your GitHub repository to Vercel for automatic deployments.

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the `build` folder to Netlify or connect your GitHub repository.

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio-website",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## Environment Variables

For the contact form to work properly in production, you may want to integrate with a service like EmailJS or Formspree. Create a `.env` file:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## Performance Optimization

- Images are optimized with CSS gradients instead of heavy image files
- Lazy loading implemented for smooth performance
- Minimal bundle size with tree shaking
- Responsive images and modern CSS

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/portfolio-website](https://github.com/yourusername/portfolio-website)

---

**Note**: Remember to update all placeholder information (name, email, GitHub username, project links) with your actual details before deploying. 
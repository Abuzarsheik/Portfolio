# Customization Guide

Follow this checklist to personalize your portfolio website:

## 🎯 Quick Customization Checklist

### 1. Personal Information
- [ ] **Hero Section** (`src/components/Hero.js`)
  - Replace "Your Name" with your actual name (line 25)
  - Update the intro text (lines 29-32)

- [ ] **About Section** (`src/components/About.js`)
  - Modify the about paragraphs to reflect your experience (lines 19-35)
  - Update stats: years of experience, projects completed (lines 66, 76, 86)

### 2. Contact Information
- [ ] **Contact Section** (`src/components/Contact.js`)
  - Update email address (line 88)
  - Update location (line 108) 
  - Update social media links:
    - LinkedIn URL (line 27)
    - GitHub URL (line 38)
    - Twitter URL (line 49)

### 3. Projects
- [ ] **Projects Section** (`src/components/Projects.js`)
  - Replace all 6 sample projects with your actual projects (lines 4-56)
  - For each project, update:
    - Title
    - Description
    - Technologies used
    - GitHub repository link
    - Live demo link

### 4. Skills (Optional)
- [ ] **Skills Section** (`src/components/Skills.js`)
  - Adjust skill levels (lines 5-15)
  - Add/remove technologies as needed
  - Update additional technologies list (line 85)

### 5. Branding
- [ ] **Page Title** (`public/index.html`)
  - Update the title tag (line 20)
  - Update meta description (lines 10-12)

- [ ] **Colors** (`tailwind.config.js`)
  - Customize primary, secondary, and accent colors (lines 9-13)

## 🚀 Ready to Deploy?

### Before Deploying:
1. ✅ Test locally: `npm start`
2. ✅ Build successfully: `npm run build`
3. ✅ Replace all placeholder information
4. ✅ Test all links work correctly
5. ✅ Verify responsive design on different devices

### Deployment Options:

#### Option 1: Vercel (Recommended)
```bash
npm run build
npx vercel
```

#### Option 2: Netlify
1. Run `npm run build`
2. Upload the `build` folder to Netlify

#### Option 3: GitHub Pages
```bash
npm install --save-dev gh-pages
npm run deploy
```

## 📱 Testing Checklist

- [ ] Navigation works smoothly
- [ ] All sections display correctly
- [ ] Contact form shows alert when submitted
- [ ] Social media links open correctly
- [ ] Project links work (GitHub & live demos)
- [ ] Responsive on mobile devices
- [ ] Responsive on tablet devices
- [ ] All animations work smoothly

## 🎨 Advanced Customization

### Adding New Sections
1. Create a new component in `src/components/`
2. Import it in `src/App.js`
3. Add navigation link in `src/components/Header.js`

### Changing Animations
- Modify Tailwind animation classes
- Add custom CSS animations in `src/index.css`

### Adding Real Contact Form
Consider integrating with:
- EmailJS
- Formspree
- Netlify Forms
- Firebase

---

**Need Help?** Check the main README.md for detailed instructions! 
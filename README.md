#  Rayan Bhatti - Portfolio Website

A modern, responsive portfolio website showcasing my software engineering expertise, built with vanilla HTML, CSS, and JavaScript. Features interactive animations, glassmorphism design, and seamless user experience.

## 🌐 Live Demo

**[View Live Portfolio →]([https://your-portfolio.vercel.app](https://www.rayanbhatti.dev/))**

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Customization](#-customization)
- [Performance](#-performance)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🎨 **Modern Design**
- **Dark Theme** with glassmorphism effects and subtle gradients
- **Responsive Design** that works perfectly on desktop, tablet, and mobile
- **Smooth Animations** using CSS transitions and JavaScript interactions
- **Interactive Elements** with hover effects and micro-animations

### 🔧 **Technical Highlights**
- **Vanilla JavaScript** - No frameworks, demonstrating core web development skills
- **CSS Grid & Flexbox** - Modern layout techniques for responsive design
- **Intersection Observer API** - Efficient scroll-based animations
- **Progressive Enhancement** - Works without JavaScript, enhanced with it

### 📱 **User Experience**
- **Smooth Scrolling** navigation between sections
- **Scroll Progress Indicator** showing page progress
- **Lazy Loading Animations** for performance optimization
- **Mobile-First Responsive** design with collapsible navigation

### 🎯 **Professional Sections**
- **Hero Section** - Compelling introduction with call-to-action
- **Experience Timeline** - Visual representation of career progression
- **Skills Grid** - Organized technical competencies
- **Project Showcase** - Interactive cards with GitHub repository links
- **Certifications** - AWS credentials and education
- **Contact Information** - Multiple ways to connect

## 🛠 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Styling** | CSS Grid, Flexbox, CSS Animations, Glassmorphism |
| **Icons** | Font Awesome 6.4.0 |
| **Hosting** | Vercel (Static Site) |
| **Performance** | Intersection Observer, Lazy Loading, Optimized Assets |

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.)
- Git (for version control)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rayanbhatti/portfolio-website
   cd portfolio-website
   ```

2. **Open locally**
   ```bash
   # Simply open the index.html file in your browser
   open index.html
   # Or use a local server
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **Customize**
   - Update personal information in the HTML
   - Replace GitHub repository links with your actual repos
   - Modify colors, fonts, or layout in the CSS section

## 📁 Project Structure

```
portfolio-website/
│
├── index.html              # Main portfolio page
├── README.md              # Project documentation
└── assets/                # (Optional) Additional assets
    ├── images/            # Profile photos, project screenshots
    └── docs/              # Additional documentation
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or use the **Vercel Dashboard**:
1. Connect your GitHub repository
2. Import project
3. Deploy automatically on every push

### GitHub Pages
1. Repository Settings → Pages
2. Source: Deploy from branch
3. Branch: main / (root)
4. Live at: `https://username.github.io`

### Netlify
1. Drag `index.html` to [netlify.com](https://netlify.com)
2. Instant deployment with custom domain support

## 🎨 Customization

### Personal Information
```html
<!-- Update hero section -->
<h1>Your Name</h1>
<p class="subtitle">Your Title | Your Specialties</p>

<!-- Update contact information -->
<a href="mailto:your-email@example.com">your-email@example.com</a>
```

### GitHub Repository Links
```html
<!-- Replace placeholder URLs -->
<a href="https://github.com/yourusername/your-project" class="project-link">
    <i class="fab fa-github"></i> View Code
</a>
```

### Color Scheme
```css
/* Modify CSS variables for easy theme changes */
:root {
    --primary-color: #3b82f6;
    --secondary-color: #8b5cf6;
    --accent-color: #10b981;
    --background-dark: #0f172a;
    --card-background: rgba(30, 41, 59, 0.5);
}
```

### Adding New Sections
```html
<!-- Follow the existing pattern -->
<section id="new-section">
    <div class="container">
        <h2 class="section-title fade-in">Section Title</h2>
        <!-- Your content here -->
    </div>
</section>
```

## ⚡ Performance

### Optimization Features
- **Lazy Loading**: Animations only trigger when elements enter viewport
- **Efficient CSS**: Modern properties with hardware acceleration
- **Minimal Dependencies**: Only Font Awesome for icons
- **Optimized Images**: Responsive design principles

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 90+
- **Best Practices**: 95+
- **SEO**: 90+

## 🌟 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 88+ |
| Firefox | 85+ |
| Safari | 14+ |
| Edge | 88+ |

**Features Used:**
- CSS Grid & Flexbox
- Intersection Observer API
- CSS Custom Properties
- ES6+ JavaScript

## 🔧 Development

### Adding New Projects
1. **Copy project card template**
2. **Update project information**
3. **Add appropriate GitHub links**
4. **Include relevant technology tags**

### Modifying Animations
```css
/* Customize animation timing */
.fade-in {
    transition: all 0.6s ease; /* Adjust duration */
}

/* Add new animations */
@keyframes yourAnimation {
    /* Define keyframes */
}
```

## 📈 Analytics & SEO

### Adding Analytics
```html
<!-- Add before closing </head> tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### SEO Optimization
- ✅ Semantic HTML structure
- ✅ Meta tags for social sharing
- ✅ Proper heading hierarchy
- ✅ Alt text for images (when added)
- ✅ Clean URL structure

## 🤝 Contributing

While this is a personal portfolio, I welcome suggestions and improvements!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**Rayan Bhatti** - Software Engineer

- 📧 Email: [rayanwasif@gmail.com](mailto:rayanwasif@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/rayan-bhatti](https://linkedin.com/in/rayan-bhatti)
- 📍 Location: Melbourne, Victoria, Australia
- 📱 Phone: 0415 271 491

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🎯 Project Goals

This portfolio website serves multiple purposes:

1. **Professional Showcase** - Highlight software engineering skills and experience
2. **Technical Demonstration** - Show proficiency in modern web development
3. **Personal Branding** - Create a memorable online presence
4. **Career Development** - Support job applications and networking

---

**Built by Rayan Bhatti**

*Interested in working together? Let's connect!*

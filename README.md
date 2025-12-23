# Abdul Aziz - Portfolio Website

A modern, responsive portfolio website showcasing my work as an AI/ML Engineer and Full-Stack Developer. Built with React, featuring smooth animations, accessibility compliance, and optimized performance.

## 🌐 Live Demo

**Visit the live portfolio**: [https://abdulaziz-eta.vercel.app/](https://abdulaziz-eta.vercel.app/)

The portfolio is automatically deployed on Vercel and updates on every push to the `main` branch.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth scroll animations
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Accessible**: WCAG 2.1 compliant with ARIA labels, keyboard navigation, and screen reader support
- **Performance Optimized**: React.memo, lazy loading, and optimized IntersectionObserver usage
- **Error Handling**: Error boundaries to prevent app crashes
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Industry Standards**: Prettier, ESLint, Husky, CI/CD pipeline

## 📋 Sections

1. **Home** - Hero section with animated typing effect and profile introduction
2. **About** - Personal information, background, and statistics
3. **Education** - Academic journey and work experience timeline
4. **Skills** - Technical and AI/ML skills with animated progress bars
5. **Projects** - Portfolio of 5 featured projects with links
6. **Contact** - Contact form with validation and contact information

## 🛠️ Technology Stack

- **Frontend**: React 18.2
- **Styling**: CSS3 with CSS Variables
- **Icons**: React Icons
- **Smooth Scroll**: React Scroll
- **Testing**: React Testing Library, Jest
- **Build Tool**: Create React App
- **Code Quality**: ESLint, Prettier
- **Git Hooks**: Husky, lint-staged
- **CI/CD**: GitHub Actions (automated pipeline)
- **Deployment**: Vercel (automatic)
- **Containerization**: Docker, Docker Compose
- **Container Registry**: GitHub Container Registry (GHCR)

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/abdulazizatGitHub/portfolio-frontend.git
cd portfolio-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🧪 Testing

Run the test suite:

```bash
npm test
```

Run tests with coverage:

```bash
npm test -- --coverage
```

Run tests in watch mode:

```bash
npm run test:watch
```

Run tests for CI:

```bash
npm run test:ci
```

## 🔧 Code Quality

Format code:

```bash
npm run format
```

Check code formatting:

```bash
npm run format:check
```

Lint code:

```bash
npm run lint
```

Fix linting issues:

```bash
npm run lint:fix
```

## 🚀 Industry Standards

This project follows industry best practices:

- ✅ **Code Formatting**: Prettier configured with consistent rules
- ✅ **Linting**: ESLint with React rules and Prettier integration
- ✅ **Git Hooks**: Pre-commit hooks (Husky + lint-staged) for automatic quality checks
- ✅ **CI/CD**: GitHub Actions workflow validates code before Vercel deployment
- ✅ **Documentation**: Comprehensive README, CONTRIBUTING.md, SECURITY.md, and JSDoc comments
- ✅ **Security**: Security policy, dependency audits, and best practices
- ✅ **Testing**: Jest + React Testing Library with >80% coverage target
- ✅ **Error Handling**: Error boundaries for graceful error recovery
- ✅ **Accessibility**: WCAG 2.1 compliant with ARIA labels and keyboard navigation
- ✅ **Performance**: React.memo, lazy loading, optimized observers

## 🏗️ Build for Production

Create an optimized production build:

```bash
npm run build
```

Build for Vercel (matches production build):

```bash
npm run vercel-build
```

The build folder will contain the production-ready files.

## 📁 Complete Project Structure

```
portfolio-frontend/
├── .github/
│   └── workflows/
│       ├── ci.yml              # Pre-deployment CI/CD pipeline
│       └── deploy.yml           # Deployment verification workflow
├── .husky/
│   └── pre-commit              # Git pre-commit hook (runs lint-staged)
├── public/                      # Static public assets
│   ├── index.html              # HTML template with meta tags
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│   └── My CV (Updated).pdf     # CV file for download
├── src/                         # Application source code
│   ├── Components/             # Reusable React components
│   │   ├── ErrorBoundary.js    # Error boundary with fallback UI
│   │   ├── Footer.js           # Footer with copyright and scroll-to-top
│   │   ├── Header.js           # Navigation header with smooth scroll
│   │   └── Header.test.js      # Tests for Header component
│   ├── Pages/                  # Page/section components
│   │   ├── About.js            # About section with stats
│   │   ├── Contact.js          # Contact form and information
│   │   ├── Education.js        # Education and experience timeline
│   │   ├── Home.js             # Hero section with typing animation
│   │   ├── Project.js          # Projects showcase grid
│   │   └── Skills.js           # Skills with animated progress bars
│   ├── hooks/                  # Custom React hooks
│   │   ├── useFadeOnScroll.js  # IntersectionObserver-based fade hook
│   │   └── useFadeOnScroll.test.js  # Tests for the hook
│   ├── Assets/
│   │   ├── CSS/                # Stylesheets
│   │   │   ├── variables.css   # Global CSS variables (colors, spacing)
│   │   │   ├── About.css       # About section styles
│   │   │   ├── Contact.css     # Contact section styles
│   │   │   ├── Education.css  # Education section styles
│   │   │   ├── Footer.css     # Footer styles
│   │   │   ├── Header.css     # Header/navigation styles
│   │   │   ├── Home.css       # Home/hero section styles
│   │   │   ├── Project.css    # Projects section styles
│   │   │   └── Skills.css     # Skills section styles
│   │   └── Images/             # Image assets
│   │       ├── about.png       # About section image
│   │       ├── MyImage.jpeg    # Profile image (Home section)
│   │       ├── E-Commerce.png  # E-Commerce project image
│   │       ├── IDS.png         # IoT IDS project image
│   │       ├── LMS.png         # Laboratory Management System image
│   │       ├── PantryMind.png  # PantryMind project image
│   │       └── VTryon.png      # Virtual Try-On project image
│   ├── App.js                  # Main app component (wraps all sections)
│   ├── App.css                 # Global app styles
│   ├── App.test.js             # App component tests
│   ├── index.js                # React entry point (ReactDOM.createRoot)
│   ├── index.css               # Global styles + CSS variables import
│   ├── reportWebVitals.js      # Web vitals performance tracking
│   └── setupTests.js           # Jest setup (Jest DOM + IntersectionObserver mock)
├── .editorconfig               # Editor configuration (indent, EOL, charset)
├── .eslintrc.json              # ESLint configuration
├── .eslintignore               # Files ignored by ESLint
├── .gitignore                  # Git ignore patterns
├── .nvmrc                      # Node.js version (18)
├── .prettierrc                 # Prettier code formatting rules
├── .prettierignore             # Files ignored by Prettier
├── CONTRIBUTING.md             # Contribution guidelines and standards
├── SECURITY.md                 # Security policy and best practices
├── DOCKER.md                   # Docker deployment guide
├── DEPLOYMENT.md               # Complete deployment guide and CI/CD pipeline
├── Dockerfile                  # Multi-stage Docker build configuration
├── docker-compose.yml          # Docker Compose configuration
├── nginx.conf                  # Nginx server configuration for production
├── .dockerignore               # Files ignored by Docker build
├── package.json                # Project dependencies, scripts, and metadata
├── package-lock.json           # Locked dependency versions
├── README.md                   # This file - project documentation
└── vercel.json                 # Vercel deployment configuration
```

## 📂 Key Files Explained

### Components

- **ErrorBoundary.js**: Catches React errors and displays fallback UI
- **Header.js**: Fixed navigation with smooth scroll, mobile menu, active section highlighting
- **Footer.js**: Copyright info and scroll-to-top button

### Pages

- **Home.js**: Hero section with animated typing effect, profile image, social links, CTA buttons
- **About.js**: Personal info, background, statistics (CGPA, projects, experience)
- **Education.js**: Timeline of education and work experience with icons
- **Skills.js**: Two-column layout with technical skills and AI/ML skills, animated progress bars
- **Project.js**: Grid of 5 projects with images, descriptions, tech tags, and links
- **Contact.js**: Contact form with validation and contact information display

### Hooks

- **useFadeOnScroll.js**: Custom hook using IntersectionObserver for fade-in/fade-out animations on scroll

### Styles

- **variables.css**: Single source of truth for all CSS variables (colors, fonts, spacing)
- Component-specific CSS files: Each page/component has its own stylesheet

## 🎨 Customization

### Colors

Edit `src/Assets/CSS/variables.css` to change the color scheme:

```css
:root {
  --bg-color: #081b29;
  --second-bg-color: #112e42;
  --text-color: #ededed;
  --main-color: #00abf0;
  --accent-color: #00ff88;
  /* ... */
}
```

### Content

- **Personal Info**: Update in `src/Pages/Home.js` and `src/Pages/About.js`
- **Projects**: Modify the `projects` array in `src/Pages/Project.js`
- **Skills**: Update skill progress bars in `src/Pages/Skills.js`
- **Education/Experience**: Edit timeline items in `src/Pages/Education.js`
- **Contact Info**: Update in `src/Pages/Contact.js`

### Images

- Replace images in `src/Assets/Images/` with your own
- Update import paths in respective components
- Recommended sizes:
  - Profile image: 320x320px (circular)
  - Project images: 350x250px minimum
  - About image: 250x250px (circular)

## ♿ Accessibility

This project follows WCAG 2.1 guidelines:

- ✅ Semantic HTML5 elements (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- ✅ ARIA labels and roles on all interactive elements
- ✅ Keyboard navigation support (Enter, Space, Escape keys)
- ✅ Visible focus indicators for keyboard users
- ✅ Screen reader compatibility
- ✅ Proper alt text for all images
- ✅ Color contrast compliance
- ✅ Skip navigation support

## 🚀 Performance

Optimizations implemented:

- ✅ **React.memo**: All page components memoized to prevent unnecessary re-renders
- ✅ **Lazy Loading**: All images use `loading="lazy"` attribute
- ✅ **Optimized Observers**: Efficient IntersectionObserver usage with proper cleanup
- ✅ **Code Splitting**: Ready for route-based code splitting if needed
- ✅ **Minimal Bundle**: Optimized build size (~65KB gzipped main bundle)
- ✅ **Memoization**: useMemo for expensive computations (typing effect in Home)

## 📝 Code Quality

- **Error Boundaries**: ErrorBoundary component catches errors gracefully
- **PropTypes**: Type checking for component props
- **JSDoc**: Comprehensive documentation for all components and hooks
- **ESLint**: Code quality enforcement with React and Prettier rules
- **Prettier**: Automatic code formatting for consistency
- **Clean Code**: DRY principles, organized structure, no code duplication
- **Testing**: Component tests, hook tests, integration tests

## 🔄 CI/CD Pipeline

### Automated Workflow

The complete CI/CD pipeline runs automatically on every push to `main`:

1. **Code Quality** (`ci.yml`):
   - ✅ ESLint validation
   - ✅ Prettier formatting check
   - ✅ Jest test suite with coverage
   - ✅ Security audit (npm audit)
   - ✅ Production build verification
   - ✅ Docker build test

2. **Docker Pipeline** (`docker.yml`):
   - ✅ Builds Docker image
   - ✅ Pushes to GitHub Container Registry (GHCR)
   - ✅ Tests Docker container
   - ✅ Health check validation

3. **Vercel Deployment**:
   - ✅ Automatic deployment after all checks pass
   - ✅ Live at: [https://abdulaziz-eta.vercel.app/](https://abdulaziz-eta.vercel.app/)

**Result**: Only high-quality, tested code gets deployed to production.

### Workflow Files

- `.github/workflows/ci.yml`: Main CI/CD pipeline (code quality, tests, build)
- `.github/workflows/docker.yml`: Docker image build and push to GHCR
- `.github/workflows/deploy.yml`: Deployment verification workflow
- `.github/workflows/complete-pipeline.yml`: Master orchestration workflow

### Docker Image Registry

Docker images are automatically pushed to GitHub Container Registry:

- **Registry**: `ghcr.io/abdulazizatgithub/portfolio-frontend`
- **Tags**: `latest`, `main`, `main-<sha>`
- **Pull command**: `docker pull ghcr.io/abdulazizatgithub/portfolio-frontend:latest`

## 🚢 Deployment

### Vercel Deployment

**Live URL**: [https://abdulaziz-eta.vercel.app/](https://abdulaziz-eta.vercel.app/)

The project is configured for automatic deployment on Vercel:

1. Connect GitHub repository to Vercel
2. Vercel automatically detects `vercel.json` configuration
3. On every push to `main`:
   - GitHub Actions validates code
   - If checks pass → Vercel builds and deploys
   - If checks fail → Vercel does not deploy

### Build Command

Vercel uses: `npm run vercel-build` (which runs `npm install && react-scripts build`)

## 🧪 Test Coverage

Current test coverage includes:

- ✅ App component (4 test cases)
- ✅ Header component (4 test cases)
- ✅ useFadeOnScroll hook (6 test cases)
- ✅ Integration tests

**Target**: >80% code coverage

## 📚 Documentation

- **README.md**: This file - complete project documentation
- **CONTRIBUTING.md**: Guidelines for contributing to the project
- **SECURITY.md**: Security policy and vulnerability reporting
- **JSDoc Comments**: Inline documentation in all components and hooks

## 🐛 Known Issues

None currently. If you find any issues, please open an issue on GitHub.

## 📄 License

This project is private and proprietary. All rights reserved.

## 👤 Author

**Abdul Aziz**

- LinkedIn: [abdulaziz-dev](https://www.linkedin.com/in/abdulaziz-dev/)
- GitHub: [abdulazizatGitHub](https://github.com/abdulazizatGitHub)
- Email: abdulazizk1430@gmail.com

## 🙏 Acknowledgments

- React team for the amazing framework
- React Icons for the icon library
- React Testing Library for testing utilities
- All open-source contributors

## 🐳 Docker Deployment

### Build Docker Image

```bash
npm run docker:build
```

Or manually:

```bash
docker build -t portfolio:latest .
```

### Run Docker Container

```bash
npm run docker:run
```

Or manually:

```bash
docker run -p 3000:80 portfolio:latest
```

The app will be available at [http://localhost:3000](http://localhost:3000)

### Docker Compose

Start with docker-compose:

```bash
npm run docker:dev
```

Stop the container:

```bash
npm run docker:stop
```

### Docker Benefits

- ✅ **Consistent Environment**: Same environment across dev, staging, production
- ✅ **Easy Deployment**: Deploy anywhere Docker runs (AWS, Azure, GCP, etc.)
- ✅ **Isolation**: No conflicts with system dependencies
- ✅ **Scalability**: Easy to scale with orchestration tools
- ✅ **Production Ready**: Optimized multi-stage build with Nginx

### Docker Image Details

- **Base Image**: Node 18 Alpine (lightweight)
- **Build Stage**: Compiles React app
- **Production Stage**: Serves with Nginx (optimized for static files)
- **Size**: ~50MB (alpine-based, minimal)
- **Port**: 80 (configurable)

---

**Last Updated**: 2024  
**Version**: 2.0  
**Status**: Production Ready ✅

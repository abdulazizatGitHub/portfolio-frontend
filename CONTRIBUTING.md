# Contributing to Portfolio Project

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing](#testing)

## 🤝 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect different viewpoints and experiences

## 🚀 Getting Started

1. **Fork the repository**

   ```bash
   git clone https://github.com/abdulazizatGitHub/portfolio-frontend.git
   cd portfolio-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Start development server**
   ```bash
   npm start
   ```

## 💻 Development Workflow

### Before You Start

1. Check existing issues and pull requests
2. Create an issue if you're planning a major change
3. Ensure you're on the latest main branch

### Making Changes

1. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow coding standards
   - Write tests for new features
   - Update documentation

3. **Test your changes**

   ```bash
   npm test
   npm run lint
   npm run format:check
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

## 📝 Coding Standards

### JavaScript/React

- Use functional components with hooks
- Follow React best practices
- Use meaningful variable and function names
- Add JSDoc comments for functions and components
- Keep components small and focused

### Code Formatting

- Use Prettier for formatting (configured in `.prettierrc`)
- Run `npm run format` before committing
- Follow ESLint rules (configured in `.eslintrc.json`)

### File Naming

- Components: `PascalCase.js` (e.g., `Header.js`)
- Hooks: `camelCase.js` with `use` prefix (e.g., `useFadeOnScroll.js`)
- Utilities: `camelCase.js` (e.g., `formatDate.js`)
- Tests: `ComponentName.test.js`

### CSS

- Use CSS variables from `variables.css`
- Follow BEM-like naming conventions
- Keep styles component-specific
- Use mobile-first responsive design

## 📦 Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

### Commit Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Commit Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Examples

```bash
feat(header): add mobile menu animation
fix(contact): resolve form validation error
docs(readme): update installation instructions
style: format code with prettier
refactor(hooks): optimize useFadeOnScroll hook
test(header): add accessibility tests
```

## 🔄 Pull Request Process

1. **Update your branch**

   ```bash
   git checkout main
   git pull origin main
   git checkout your-branch
   git rebase main
   ```

2. **Ensure all checks pass**
   - Tests pass: `npm test`
   - Linting passes: `npm run lint`
   - Formatting is correct: `npm run format:check`
   - Build succeeds: `npm run build`

3. **Create Pull Request**
   - Provide clear description
   - Reference related issues
   - Add screenshots for UI changes
   - Ensure CI checks pass

4. **Review Process**
   - Address review comments
   - Keep PR focused and small
   - Update documentation if needed

## 🧪 Testing

### Writing Tests

- Write tests for all new features
- Aim for >80% code coverage
- Use React Testing Library
- Test user interactions, not implementation

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage

# Run tests in CI mode
npm run test:ci
```

## 📚 Documentation

- Update README.md for user-facing changes
- Add JSDoc comments for new functions/components
- Update CONTRIBUTING.md if process changes
- Document breaking changes

## 🐛 Reporting Issues

### Bug Reports

Include:

- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Environment details
- Screenshots if applicable

### Feature Requests

Include:

- Use case description
- Proposed solution
- Alternatives considered
- Additional context

## ✅ Checklist

Before submitting a PR:

- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated
- [ ] All tests pass
- [ ] Build succeeds
- [ ] Linting passes
- [ ] Formatting is correct

## 🙏 Thank You!

Your contributions make this project better. We appreciate your time and effort!

---

**Questions?** Open an issue or contact the maintainer.

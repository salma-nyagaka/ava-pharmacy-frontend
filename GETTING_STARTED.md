# AVA Pharmacy Web Application - Getting Started Guide

## 🚀 Quick Start

### Prerequisites
- **Node.js**: v14.0 or higher
- **npm**: v6.0 or higher (comes with Node.js)
- **Git**: For version control

### Installation & Running

```bash
# 1. Navigate to the project directory
cd /Users/salmanyagaka/ava-pharmacy

# 2. Install dependencies (if not already installed)
npm install

# 3. Start the development server
npm start
```

The application will automatically open in your default browser at `http://localhost:3000`

---

## 📖 Project Structure Overview

### Key Directories
```
src/
├── components/       # Reusable components (Header, Footer)
├── pages/           # Full page components
├── styles/          # CSS stylesheets
├── assets/          # Images and logos
├── App.tsx          # Main app component
└── index.tsx        # React entry point
```

### Main Files
- **App.tsx** - Routes between pages, manages navigation
- **global.css** - Design system (colors, spacing, fonts)
- **Header.tsx** - Navigation and search
- **Footer.tsx** - Footer links and contact info

---

## 🗺️ Navigation Map

The application uses simple state-based routing. Navigate between pages by clicking buttons:

### Pages Available
1. **Home** (`/home`) - Landing page
2. **Products** (`/products`) - Product catalog
3. **Product Detail** (`/product-detail`) - Individual product
4. **Prescription** (`/prescription`) - Upload prescriptions
5. **Doctor** (`/doctor`) - Consult doctors
6. **Cart** (`/cart`) - Shopping cart
7. **Checkout** (`/checkout`) - Payment & order

### Coming Soon
- Chat Consultation
- Lab Tests
- Sign In

---

## 🎨 Customizing the Design

### Change Brand Colors

Edit `src/styles/global.css` and modify the CSS variables:

```css
:root {
  /* Primary colors - Burgundy */
  --primary-dark: #6b1f14;
  --primary: #8b2e1f;
  --primary-light: #d85f49;

  /* Secondary colors - Pink */
  --secondary: #e6236b;
  --secondary-light: #ff4d7d;

  /* You can change these to your preferred colors */
}
```

### Change Typography

Modify font sizes and families in `global.css`:

```css
:root {
  --font-family: 'Your Font', sans-serif;
  --font-xs: 12px;
  --font-sm: 14px;
  --font-md: 16px;
  --font-lg: 18px;
  /* ... more sizes ... */
}
```

### Change Spacing

All spacing uses consistent variables:

```css
:root {
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
}
```

---

## 🛠️ Development Commands

### Start Development Server
```bash
npm start
```
Runs the app in development mode with hot reload.

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `build/` folder.

### Run Tests
```bash
npm test
```
Launches the test runner.

### Eject Configuration
```bash
npm run eject
```
⚠️ **Warning**: One-way operation! Only do this if you need full control.

---

## 📱 Testing Responsiveness

### Using Chrome DevTools
1. Open the app in Chrome
2. Press `F12` or right-click → Inspect
3. Click the device toolbar icon (mobile icon)
4. Choose different device sizes

### Testing Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

---

## 🔗 Component Communication

### Passing Data Between Pages

The navigation uses a simple pattern:

```typescript
// In App.tsx
const [currentPage, setCurrentPage] = useState('home');

// From any page
<button onClick={() => onNavigate('products')}>
  View Products
</button>
```

---

## 🎯 Adding New Features

### Adding a New Page

1. **Create the page component**
   ```bash
   # Create in src/pages/NewPage.tsx
   ```

2. **Add the CSS**
   ```bash
   # Create in src/styles/NewPage.css
   ```

3. **Update App.tsx**
   ```typescript
   import NewPage from './pages/NewPage';

   // In the main return:
   {currentPage === 'new-page' && <NewPage onNavigate={handleNavigate} />}
   ```

4. **Add navigation button**
   ```typescript
   <button onClick={() => onNavigate('new-page')}>
     New Page
   </button>
   ```

### Adding a New Component

1. Create in `src/components/MyComponent.tsx`
2. Create CSS in `src/styles/MyComponent.css`
3. Import and use in pages

---

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
# Try a different port
PORT=3001 npm start
```

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Styling Not Applying
- Check that CSS file is imported in the component
- Verify class names match between TSX and CSS
- Check browser DevTools console for errors

### Component Not Rendering
- Check App.tsx for correct page routing
- Verify `onNavigate` is called with correct page name
- Check browser console for errors

---

## 📦 Dependencies

### Main Dependencies
- **react**: UI library
- **react-dom**: React rendering
- **react-icons**: Icon library
- **lucide-react**: Icon library
- **typescript**: Type safety

### Dev Dependencies
- **react-scripts**: Build and dev server
- **@types/react**: TypeScript types
- **@types/react-dom**: React DOM types

To see all dependencies:
```bash
npm list
```

---

## 🌐 Deployment

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `build/` folder to Netlify

Or connect your Git repository:
```
https://app.netlify.com/sites
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

```bash
# Update package.json with your repo URL
npm run build
npm run deploy
```

---

## 📝 Code Style Guidelines

### Naming Conventions
- **Components**: PascalCase (Home.tsx, ProductCard.tsx)
- **CSS Classes**: kebab-case (product-card, cart-item)
- **Variables/Functions**: camelCase (handleNavigate, cartItems)
- **Constants**: UPPER_SNAKE_CASE (MAX_ITEMS, DEFAULT_PRICE)

### File Organization
```
Feature/
├── FeatureName.tsx      # Component
├── FeatureName.css      # Styles
└── types.ts            # TypeScript types (if needed)
```

---

## 🔒 Security Considerations

### Current State (Placeholder UI)
- No backend integration
- No user authentication
- Payment methods are simulated
- Prescription uploads are mocked

### Before Production
- Implement authentication (OAuth, JWT)
- Encrypt sensitive data (HTTPS)
- Validate all inputs server-side
- Implement rate limiting
- Use secure payment processor
- GDPR/Privacy compliance
- Data encryption at rest

---

## 📊 Performance Tips

### Optimize Images
- Use compressed images
- Consider WebP format
- Lazy load images below the fold

### Code Splitting
- React supports dynamic imports
- Split large pages into smaller components

### Caching
- Use browser caching headers
- Consider service workers

---

## 🆘 Getting Help

### Documentation
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org)
- [MDN Web Docs](https://developer.mozilla.org)

### Common Issues
See troubleshooting section above

### Contact
For project-specific questions, review the code comments and component documentation

---

## ✅ Project Checklist

- ✅ React app created with TypeScript
- ✅ All pages implemented
- ✅ Responsive design for all devices
- ✅ Custom CSS styling
- ✅ AVA Pharmacy branding applied
- ✅ Navigation working
- ✅ Forms with validation
- ✅ Image assets included
- ✅ Development server configured
- ✅ Ready for backend integration

---

## 📅 Next Steps

1. **Local Development**
   - Run `npm start`
   - Test all pages
   - Verify responsive design

2. **Customization**
   - Update colors/branding if needed
   - Add company-specific content
   - Customize product data

3. **Backend Integration**
   - Connect to API endpoints
   - Implement authentication
   - Add real payment processing

4. **Testing**
   - Unit tests for components
   - Integration tests for flows
   - E2E testing

5. **Deployment**
   - Build for production
   - Deploy to hosting
   - Setup domain
   - Configure SSL

---

## 📞 Support Resources

- **React Help**: Open browser DevTools (F12)
- **Code Issues**: Check console for error messages
- **Styling Issues**: Inspect elements to see applied styles
- **Performance**: Use Lighthouse in Chrome DevTools

---

**Happy coding! 🎉**

For the latest version and updates, check the GitHub repository.

**Last Updated**: December 21, 2025

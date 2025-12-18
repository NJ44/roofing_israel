# Let's Work Component - Quick Start ⚡

## 🚀 3 Steps to Get Started

### 1️⃣ Customize the Component
Open `src/components/ui/lets-work-section.jsx` and update:

```jsx
// Line ~14: Your calendar booking link
const handleBookCall = () => {
  window.open("YOUR_CALENDAR_LINK_HERE", "_blank")
}

// Line ~266: Your email address
<span className="...">your-email@example.com</span>
```

### 2️⃣ Add to Your Homepage
Open `src/App.jsx` and add the import:

```jsx
import { LetsWorkTogether } from '@/components/ui/lets-work-section'
```

Then add to your HomePage component:

```jsx
function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <MapEmbed />
      <Testimonials />
      <FAQ />
      <LetsWorkTogether />  {/* 👈 Add this line */}
    </>
  )
}
```

### 3️⃣ Run Your Dev Server
```bash
npm run dev
```

Visit your homepage and scroll to the bottom to see the component in action! 🎉

---

## 📋 What Was Done Automatically

✅ Component converted from TypeScript to JavaScript  
✅ Added to `src/components/ui/lets-work-section.jsx`  
✅ Demo page created at `src/pages/LetsWorkDemo.jsx`  
✅ Tailwind CSS extended with shadcn/ui colors  
✅ CSS custom properties added for theming  
✅ Vite path alias (`@/`) configured  
✅ No new dependencies needed (lucide-react already installed)  

---

## 🎨 Quick Customization

### Change Colors
Edit `src/index.css`:

```css
:root {
  --background: 0 0% 100%;       /* Background */
  --foreground: 222.2 84% 4.9%;  /* Text color */
  --border: 214.3 31.8% 91.4%;   /* Border color */
}
```

### Change Text
Edit `src/components/ui/lets-work-section.jsx`:
- Line 190-200: Main heading "Let's work together"
- Line 258: Description text
- Line 266: Contact email

---

## 🔗 Useful Links

- Full Guide: `LETS_WORK_COMPONENT_GUIDE.md`
- Component: `src/components/ui/lets-work-section.jsx`
- Demo Page: `src/pages/LetsWorkDemo.jsx`

---

## ❓ Need Help?

If something isn't working:
1. Restart dev server: `npm run dev`
2. Clear browser cache (Ctrl + Shift + R)
3. Check console for errors (F12)

**Common Issues:**
- "Cannot find module '@/components'..." → Restart dev server
- Styles not applying → Clear cache and rebuild
- Icons not showing → Check lucide-react is installed


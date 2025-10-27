# Design System Reference - diapage Mobile

Quick reference for maintaining design consistency across mobile components.

## 🎨 Color Palette

### Primary Colors
```css
--green: #65B47B      /* Primary brand color */
--gray: #b4a7bc       /* Secondary/disabled states */
```

### Background Colors (Service Cards)
```css
#edf3ff  /* Blue - Web Development */
#fffaec  /* Yellow - Custom Applications */
#f0fff4  /* Green - Marketing */
#fff5f3  /* Red - Tech Incubator */
```

### Neutral Colors
```css
#f2f2f2  /* Light gray background (Header, Services) */
#01402f  /* Dark green (Footer background) */
#ffffff  /* White */
#070d0d  /* Near black (text) */
#eeeeee  /* Form background */
```

### Accent Colors
```css
#77b9f3  /* Light blue (service headers) */
#a9e6b9  /* Light green (hover/active states) */
```

---

## 📝 Typography

### Font Families
```css
font-family: "Aileron-Regular";      /* Body text */
font-family: "Aileron-Bold";         /* Headings, emphasis */
font-family: "Aileron-Semi-Bold";    /* Subheadings */
font-family: "Aileron-Black";        /* Extra bold headers */
font-family: "Aileron-Light";        /* Light text */
```

### Font Sizing (Mobile)
Use `clamp()` for responsive typography:

```css
/* Large Headers (H1) */
font-size: clamp(3.2rem, 8vw, 4.8rem);

/* Section Titles (H2) */
font-size: clamp(4rem, 10vw, 6rem);

/* Subheaders (H3) */
font-size: clamp(2rem, 5vw, 2.4rem);

/* Body Text */
font-size: clamp(1.4rem, 4vw, 1.6rem);

/* Small Text */
font-size: clamp(1.3rem, 3.5vw, 1.5rem);

/* Buttons */
font-size: clamp(1.8rem, 4vw, 2rem);
```

### Line Heights
```css
line-height: 1.2;      /* Tight (headers) */
line-height: 2rem;     /* Body text */
line-height: 2.2rem;   /* Comfortable reading */
line-height: 2.4rem;   /* Loose (descriptions) */
```

### Letter Spacing
```css
letter-spacing: -0.3px;  /* Tight */
letter-spacing: 0.5px;   /* Normal */
letter-spacing: 1px;     /* Loose */
```

---

## 📏 Spacing System

### Padding (Responsive)
```css
padding: 4% 5%;   /* Compact sections */
padding: 6% 5%;   /* Standard sections */
padding: 8% 5%;   /* Spacious sections */
```

### Margins
```css
margin: 0 0 2%;   /* Tight vertical */
margin: 0 0 4%;   /* Standard vertical */
margin: 0 0 5%;   /* Comfortable vertical */
margin: 0 0 6%;   /* Spacious vertical */
margin: 0 0 8%;   /* Extra spacious */
```

### Gaps (Flexbox/Grid)
```css
gap: 3%;   /* Tight */
gap: 5%;   /* Standard */
gap: 8%;   /* Spacious */
```

---

## 🔘 Buttons

### Primary Button (Green)
```jsx
const PrimaryButton = styled.button`
  background-color: var(--green);
  color: #ffffff;
  font-size: clamp(1.8rem, 4vw, 2rem);
  font-weight: 700;
  height: 48px;                    /* Touch-friendly minimum */
  padding: 0;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:active {
    background-color: #a9e6b9;     /* Lighter green */
  }
`;
```

### Secondary Button (Outlined)
```jsx
const SecondaryButton = styled.button`
  background-color: white;
  color: #b4a7bc;                  /* Gray */
  border: 1px solid var(--gray);
  font-size: clamp(1.4rem, 3.5vw, 1.6rem);
  padding: 12px;
  border-radius: 8px;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:active {
    background-color: var(--green);
    color: black;
    border-color: var(--green);
  }
`;
```

---

## 📦 Component Patterns

### Container
```jsx
const Container = styled.div`
  width: 100%;
  min-height: 100vh;              /* Full viewport */
  padding: 6% 5%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;         /* Mobile-first */
`;
```

### Card
```jsx
const Card = styled.div`
  background: #f9f9f9;
  padding: 6%;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  width: 100%;
  box-sizing: border-box;
`;
```

### Form Input
```jsx
const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 3px solid ${props => props.$active ? 'var(--green)' : 'var(--gray)'};
  width: 100%;
  padding: 2% 0;
  font-size: 1.6rem;
  transition: border-color 0.3s ease;
`;
```

---

## 🎭 Interactions

### Transitions
```css
transition: background-color 0.2s ease;     /* Fast (buttons) */
transition: color 0.3s ease;                /* Medium (text) */
transition: height 0.3s ease-in-out;        /* Smooth (menus) */
```

### Touch States
Use `:active` instead of `:hover` for mobile:
```css
&:active {
  background-color: #a9e6b9;
  color: black;
}
```

### Cursor
```css
cursor: pointer;   /* Interactive elements */
```

---

## 📐 Layouts

### Vertical Stacking (Mobile Default)
```css
display: flex;
flex-direction: column;
align-items: center;           /* or flex-start */
```

### Horizontal Grid (2 columns)
```css
display: flex;
flex-wrap: wrap;
gap: 3%;

/* Child elements */
flex-basis: calc(50% - 1.5%);
```

---

## 🖼️ Images & Assets

### Responsive Images
```jsx
const ResponsiveImage = styled.img`
  width: 100%;
  max-width: 400px;             /* Constrain large images */
  height: auto;                 /* Maintain aspect ratio */
`;
```

### Icon Sizing
```css
width: 24px;                    /* Small icons */
width: 40px;                    /* Medium icons */
width: 100%;
max-width: 180px;               /* Service card icons */
```

---

## 📱 Responsive Breakpoints

### DeviceSetter Breakpoint
```javascript
deviceWidth > 1024 ? <LaptopApp /> : <MobileApp />
```

### Internal Mobile Ranges
- **Extra Small:** 320px - 374px (iPhone SE)
- **Small:** 375px - 413px (iPhone 12, 13, 14)
- **Medium:** 414px - 767px (Android, larger phones)
- **Tablet:** 768px - 1024px (iPads - if needed)

Use `clamp()` to cover entire range smoothly.

---

## ♿ Accessibility

### Minimum Touch Targets
```css
min-height: 48px;               /* Buttons, links */
min-width: 48px;                /* Icon buttons */
```

### Semantic HTML
```jsx
<nav>                           /* Navigation */
<section>                       /* Major sections */
<article>                       /* Independent content */
<header>                        /* Page/section header */
<footer>                        /* Page/section footer */
```

### Alt Text & ARIA
```jsx
<img src={icon} alt="Description of image" />
<button aria-label="Toggle menu">...</button>
```

---

## 🎨 Shadows

### Light Shadow (Cards)
```css
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
```

### Medium Shadow (Navigation)
```css
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
```

### Conditional Shadow
```css
box-shadow: ${props => props.$isOpen ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none'};
```

---

## 🔤 Border Radius

```css
border-radius: 8px;             /* Standard (buttons) */
border-radius: 12px;            /* Medium (cards, forms) */
border-radius: 16px;            /* Large (modal-like containers) */
```

---

## 📋 Import Patterns

### Standard Component Template
```jsx
import { useState } from "react";                    // If state needed
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom"; // If navigation
import AssetName from "../../assets/AssetName.svg";

const ComponentContainer = styled.div`
  width: 100%;
  // ... styles
`;

const ComponentName = () => {
  return (
    <ComponentContainer>
      {/* Content */}
    </ComponentContainer>
  );
};

export default ComponentName;
```

---

## 🎯 Figma → Code Checklist

When generating from Figma, ensure:

1. **Colors match exactly** (hex codes)
2. **Font sizes use clamp()** for responsiveness
3. **Spacing is proportional** (%, rem, not fixed px)
4. **Layout is mobile-first** (column stacking)
5. **Assets are imported** from correct path
6. **Touch targets are ≥48px**
7. **Transitions are smooth** (0.2-0.3s)
8. **Semantic HTML** is used

---

**Last Updated:** [Current Date]
**Project:** diapage mobile application
**Source:** Consolidated from existing mobile components


# Figma MCP Workflow for Styled-Components Generation

## Overview
This document outlines the optimal workflow for generating pixel-perfect mobile components using Figma → MCP → styled-components code generation.

## Prerequisites
- ✅ Figma Desktop with Full seat (Dev Mode enabled)
- ✅ Cursor IDE with Figma MCP server connection configured
- ✅ Figma plugins installed:
  - Figma to Code
  - Locofy Lightning
  - Anima (React/CSS export)
- ✅ Cursor extension: Figma for VS Code

## Workflow Steps

### Phase 1: Prepare in Figma (Designer's Source of Truth)

#### 1.1 Open Your Mobile Design File
- Launch Figma Desktop
- Open: `[Your Mobile Design File Name]`
- Navigate to mobile frames (e.g., "Mobile - Landing Page")

#### 1.2 Enable Dev Mode
- Click "Dev Mode" in top-right corner
- This provides:
  - CSS specifications
  - Asset exports
  - Spacing/sizing measurements
  - Color tokens

#### 1.3 Organize & Prepare Frames
- **Name layers meaningfully**: e.g., "MobileHeaderContainer", "ServiceCard1"
- **Export assets**: Any images/icons not already in `/src/assets`
- **Review specs**: Check colors, fonts, spacing match your design system
- **Note breakpoints**: Confirm mobile target widths (typically 320px - 768px)

---

### Phase 2: Generate Code via MCP (Automated Translation)

#### 2.1 Use MCP Tools in Cursor

##### Option A: Direct MCP Prompts (Best for Initial Generation)
In Cursor, use the **Background** or **Agent** mode:

```
@figma-mcp Please fetch the mobile Header component from frame [Frame ID/Name] 
in my Figma file and generate React code with styled-components. 
Target: src/mobile/components/Header.jsx
```

**MCP Tools Available** (as per your setup):
1. **Fetch Frame Data** - Retrieves design specs
2. **Export Assets** - Downloads images/SVGs
3. **Generate Component** - Creates React code
4. **Get Styles** - Extracts CSS properties
5. **Inspect Layers** - Analyzes structure
6. **Sync Changes** - Updates from Figma edits

##### Option B: Figma Plugins (Fallback/Comparison)
If MCP needs assistance:

1. **Anima Plugin** (Primary):
   - Select mobile frame in Figma
   - Run Anima → Export as "React"
   - Copy generated code
   - Paste into Cursor for MCP refinement

2. **Locofy Lightning** (Speed):
   - Select frame → Run plugin
   - Choose "React" output
   - Enable responsive options
   - Export to Cursor

3. **Figma to Code**:
   - For Tailwind/HTML baseline
   - Convert to styled-components via Cursor

#### 2.2 MCP Prompts for Precision

**For New Components:**
```
Using MCP, generate a mobile-responsive React component from Figma frame "[Name]"
with styled-components. Requirements:
- Use clamp() for fluid typography (min: [value], preferred: [value], max: [value])
- Mobile-first layout (flexbox column)
- :active states instead of :hover
- Touch-friendly sizes (min 48px height for buttons)
- Import assets from ../../assets/[filename]
- Follow existing pattern in src/mobile/components/
```

**For Refinements:**
```
@figma-mcp Compare my current Header.jsx against Figma frame "[Frame ID]" 
and identify styling discrepancies. Update to match Figma specs exactly.
Focus on: typography, spacing, colors, and responsive behavior.
```

**For Measurements:**
```
@figma-mcp Extract exact measurements from Figma frame "[Name]":
- Font sizes, line heights, letter spacing
- Padding and margins
- Border radius
- Color hex codes
- Asset dimensions
```

---

### Phase 3: Integrate & Refine in Cursor

#### 3.1 Place Generated Code
- Save to appropriate file: `src/mobile/components/[ComponentName].jsx`
- Ensure imports are correct (adjust paths if needed)
- Add to parent component/page

#### 3.2 Convert/Adapt if Needed
If MCP outputs plain CSS or Emotion:

**Ask Cursor Agent:**
```
Convert this generated CSS to styled-components format for React. 
Ensure responsive units and mobile-first principles. 
Use clamp() for fluid typography where appropriate.
```

#### 3.3 Test Responsiveness
1. Run dev server: `npm run dev`
2. Resize browser < 1024px (triggers DeviceSetter)
3. Open in **Responsively** app:
   - Define viewports: 375px (iPhone), 414px (Android), 768px (tablet)
   - Check all breakpoints simultaneously

#### 3.4 Validate Against Figma
- Open Figma frame side-by-side with live app
- Use browser DevTools to inspect computed styles
- Optional: Use PerfectPixel Chrome extension to overlay Figma export

---

### Phase 4: Iterate & Polish

#### 4.1 Refinement Loop
```
[Test in browser] → [Note discrepancies] → [Ask MCP to fix] → [Test again]
```

**Example refinement prompt:**
```
@figma-mcp The Header component's title font size is 2px off from Figma at 375px width.
Update to match exactly. Figma spec shows: 32px. Current: 34px.
```

#### 4.2 Lint & Validate
```bash
npm run lint
```
Fix any errors before committing.

#### 4.3 Commit Changes
```bash
git add src/mobile/components/[ComponentName].jsx
git commit -m "Add mobile [ComponentName] via Figma MCP workflow"
```

---

## Best Practices

### 🎯 Design Fidelity
- **Always start from Figma** for styling decisions
- Use MCP to **extract exact values**, not approximate
- Match **color hex codes** precisely (`var(--green)` should be defined from Figma)
- Respect **spacing/padding** from design specs

### 📱 Mobile Responsiveness
- Use `clamp(min, preferred, max)` for typography
- Avoid hardcoded `px` for widths (use %, vw, or clamp)
- Set `box-sizing: border-box` on all components
- Test on multiple device sizes (320px - 768px range)

### 🧩 Component Structure
- **One component per file** in `src/mobile/components/`
- Import assets from `../../assets/`
- Follow naming convention: PascalCase for components
- Use semantic HTML (`<nav>`, `<section>`, `<footer>`)

### ⚡ Performance
- Debounce resize listeners (see DeviceSetter.jsx)
- Optimize images/SVGs before adding to assets
- Avoid unnecessary re-renders (use React.memo if needed)

### ♿ Accessibility
- Add `alt` text to all images
- Use `aria-label` for icon-only buttons
- Ensure color contrast meets WCAG AA standards (check in Figma)
- Test keyboard navigation

---

## Troubleshooting

### MCP Not Generating Styled-Components Directly
**Solution:** Generate CSS/Emotion first, then ask Cursor Agent:
```
Convert this to styled-components. Replace inline styles with 
const [ComponentName] = styled.div`...`
```

### Measurements Don't Match Figma
**Solution:** 
1. Check if Figma is using auto-layout (flexbox) vs fixed dimensions
2. Ask MCP for exact computed values in Dev Mode
3. Use relative units for flexibility, fixed units for precision

### Assets Not Loading
**Solution:**
- Verify asset paths: `../../assets/[filename]`
- Check file extensions match (e.g., `.svg` vs `.SVG`)
- Ensure assets are in `/src/assets/` directory

### MCP Connection Issues
**Solution:**
1. Restart Cursor IDE
2. Re-authenticate Figma MCP in Cursor settings
3. Check Figma API token is valid
4. Verify file permissions in Figma

---

## Quick Reference: MCP Commands

### Generate Component
```
@figma-mcp Generate React component from frame "[Frame Name]" with styled-components
```

### Update Existing
```
@figma-mcp Update [ComponentName].jsx to match latest Figma changes
```

### Extract Styles
```
@figma-mcp Get CSS properties for element "[Layer Name]" in frame "[Frame Name]"
```

### Compare Implementation
```
@figma-mcp Compare [ComponentName].jsx against Figma and list differences
```

---

## Component Checklist

Before considering a component complete:

- [ ] Generated from Figma via MCP
- [ ] Styled-components format (no inline styles)
- [ ] Responsive (tested 320px - 768px)
- [ ] Assets imported and loading correctly
- [ ] Colors match Figma specs (hex codes verified)
- [ ] Typography matches (font-family, size, weight, line-height)
- [ ] Spacing matches (padding, margin, gap)
- [ ] Touch-friendly (buttons ≥48px height)
- [ ] Accessibility: alt text, aria labels, semantic HTML
- [ ] No linter errors
- [ ] Tested in Responsively app
- [ ] Committed to Git

---

## Example: Full Workflow for New Component

### Step-by-Step: Creating Mobile "TestimonialCard"

1. **Figma:**
   - Open mobile design file
   - Select "TestimonialCard" frame
   - Enable Dev Mode
   - Note frame ID: `123:456`

2. **Cursor (Background mode):**
   ```
   @figma-mcp Generate React component from Figma frame 123:456 (TestimonialCard)
   with styled-components. Target: src/mobile/components/TestimonialCard.jsx
   Requirements:
   - Mobile-responsive (320-768px)
   - clamp() for text sizing
   - Import quote icon from ../../assets/QuoteIcon.svg
   - Background: #f9f9f9
   - Border radius: 12px
   - Padding: 6% responsive
   ```

3. **Review generated code:**
   - Check imports
   - Verify styled-components syntax
   - Confirm responsive units

4. **Test:**
   ```bash
   npm run dev
   ```
   - Open in Responsively
   - Compare against Figma overlay

5. **Refine if needed:**
   ```
   @figma-mcp The testimonial text is 4px too small. Figma shows 16px, 
   current is 12px. Update font-size in TestimonialText styled-component.
   ```

6. **Finalize:**
   ```bash
   npm run lint
   git add src/mobile/components/TestimonialCard.jsx
   git commit -m "Add mobile TestimonialCard via Figma MCP"
   ```

---

## Notes
- Update this document as you discover new MCP capabilities
- Share with team members for consistency
- Reference this during code reviews
- Keep Figma file link handy: [Add your Figma URL here]

---

**Last Updated:** [Current Date]
**Workflow Established By:** Cursor AI + Grok-4 conversation
**Project:** diapage mobile application


# Figma MCP Quick Reference Card

## 🚀 Fast Commands for Daily Use

### Generate New Component
```
@figma-mcp Generate mobile [ComponentName] from Figma frame "[Frame ID]" 
with styled-components for src/mobile/components/[ComponentName].jsx
```

### Update Existing Component
```
@figma-mcp Sync [ComponentName].jsx with latest Figma frame "[Frame ID]" changes
```

### Extract Specific Styles
```
@figma-mcp Get exact CSS for [element] in Figma frame "[Frame ID]"
```

### Compare & Fix
```
@figma-mcp Compare [ComponentName].jsx vs Figma and list style differences
```

---

## 📐 Design Specifications to Request

When generating components, always specify:

1. **Typography:**
   - `font-size: clamp(min, preferred, max)`
   - `line-height`, `letter-spacing`, `font-weight`
   - Font-family from GlobalStyle.js

2. **Spacing:**
   - Padding: % or rem (responsive)
   - Margin: % or rem
   - Gap for flex/grid

3. **Colors:**
   - Use `var(--green)`, `var(--gray)` from :root
   - Extract hex codes if new colors needed

4. **Responsive:**
   - Mobile-first (column layout)
   - clamp() for fluid sizing
   - % widths, not fixed px
   - `box-sizing: border-box`

5. **Interactions:**
   - `:active` states (not :hover)
   - Touch targets ≥48px
   - Smooth transitions (0.2-0.3s)

---

## 🎨 Figma to styled-components Pattern

### Figma Dev Mode Shows:
```
Color: #65B47B
Font: Aileron Bold, 48px
Padding: 24px 20px
Border Radius: 12px
```

### MCP Should Generate:
```jsx
const ComponentName = styled.div`
  background-color: var(--green); // #65B47B
  font-family: "Aileron-Bold";
  font-size: clamp(3.6rem, 8vw, 4.8rem);
  padding: 6% 5%;
  border-radius: 12px;
  box-sizing: border-box;
`;
```

---

## ✅ Component Generation Checklist

Quick verification before moving on:

- [ ] Styled-components format (not inline styles)
- [ ] Assets imported: `import Icon from "../../assets/Icon.svg"`
- [ ] Responsive units (clamp, %, rem - not px)
- [ ] Mobile-first layout (flex-direction: column)
- [ ] Touch-friendly sizes (buttons ≥48px)
- [ ] Semantic HTML tags
- [ ] Alt text on images
- [ ] No linter errors

---

## 🔧 Common MCP Refinement Prompts

### Fix Typography Mismatch
```
The [element] font-size is off. Figma: [value]px, Current: [value]px. Fix to match.
```

### Adjust Spacing
```
Update padding on [Component] to match Figma: top [value], right [value], bottom [value], left [value]
```

### Color Correction
```
[Element]'s background color should be #[hex] per Figma. Update styled-component.
```

### Responsive Issue
```
[Component] overflows on 375px width. Make fully responsive using % width and clamp().
```

---

## 📱 Test Command Sequence

After MCP generation:

```bash
# 1. Start dev server
npm run dev

# 2. Browser: resize < 1024px
# 3. Test in Responsively: 375px, 414px, 768px
# 4. Check linter
npm run lint

# 5. Commit if good
git add src/mobile/components/[ComponentName].jsx
git commit -m "Add [ComponentName] via Figma MCP"
```

---

## 🎯 Your Current Project Structure

### Mobile Components Location
`src/mobile/components/[ComponentName].jsx`

### Assets Location
`src/assets/[AssetName].svg`

### Import Pattern
```jsx
import styled from "styled-components";
import AssetName from "../../assets/AssetName.svg";
```

### Color Variables (GlobalStyle.js)
- `var(--green)` → #65B47B
- `var(--gray)` → #b4a7bc

### Font Families (GlobalStyle.js)
- Aileron-Regular
- Aileron-Bold
- Aileron-Semi-Bold
- Aileron-Black
- (+ variants)

---

## 💡 Pro Tips

1. **Start with Background mode** for context-heavy prompts
2. **Switch to Agent mode** for quick generations
3. **Use Ask mode** for clarifications
4. **Always compare** rendered vs Figma side-by-side
5. **Commit frequently** - one component at a time
6. **Document discrepancies** if Figma needs design updates

---

**Workflow:** Figma (Designer's Truth) → MCP (Automation) → Cursor (Refinement) → Browser (Validation)


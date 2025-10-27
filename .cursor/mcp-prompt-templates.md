# MCP Prompt Templates for Component Generation

Copy and customize these templates when using Figma MCP in Cursor.

---

## 📝 Template 1: Generate New Mobile Component

```
@figma-mcp Generate a mobile-responsive React component from Figma frame "[FRAME_ID_OR_NAME]" ([COMPONENT_NAME]) with styled-components.

Target file: src/mobile/components/[COMPONENT_NAME].jsx

Requirements:
- Use styled-components (no inline styles)
- Mobile-first layout: flexbox with flex-direction: column
- Responsive typography: clamp([MIN]rem, [VW]vw, [MAX]rem)
- Responsive spacing: use % for padding/margin, not fixed px
- Import assets from ../../assets/[ASSET_NAME].svg
- Colors: use var(--green) for #65B47B, var(--gray) for #b4a7bc, or exact hex if new
- Font families: "Aileron-Regular" (body), "Aileron-Bold" (headers)
- Touch-friendly: buttons min 48px height, :active states (not :hover)
- Semantic HTML: use <section>, <nav>, <header>, <footer> where appropriate
- Box model: box-sizing: border-box on all containers
- Transitions: 0.2-0.3s ease for interactive elements

Design context:
- Target viewport: 320px - 768px (mobile)
- Background color: [SPECIFY]
- Main content: [DESCRIBE BRIEFLY]

Please ensure exact color matches, precise spacing, and pixel-perfect typography from Figma Dev Mode specs.
```

**How to use:**
1. Replace `[FRAME_ID_OR_NAME]` with your Figma frame
2. Replace `[COMPONENT_NAME]` with desired component name
3. Fill in `[MIN]`, `[VW]`, `[MAX]` for clamp() values based on Figma
4. Specify design context (colors, content description)

---

## 🔄 Template 2: Update Existing Component from Figma

```
@figma-mcp Sync src/mobile/components/[COMPONENT_NAME].jsx with the latest changes in Figma frame "[FRAME_ID_OR_NAME]".

Please:
1. Compare current implementation against Figma Dev Mode specs
2. Identify any style discrepancies (colors, typography, spacing, layout)
3. Update to match Figma exactly while preserving:
   - Existing React hooks and state management
   - Event handlers and business logic
   - Import statements for assets/dependencies
4. Ensure responsive behavior with clamp() and % units
5. Maintain styled-components format

Report changes made and any design decisions that needed interpretation.
```

**How to use:**
1. Replace `[COMPONENT_NAME]` and `[FRAME_ID_OR_NAME]`
2. Use when Figma design has been updated

---

## 🎨 Template 3: Extract Specific Styles

```
@figma-mcp Extract exact CSS specifications from Figma frame "[FRAME_ID_OR_NAME]" for the [ELEMENT_DESCRIPTION] element.

Please provide:
- Color (hex code)
- Font family, size, weight, line-height, letter-spacing
- Padding (top, right, bottom, left)
- Margin (top, right, bottom, left)
- Border (width, style, color, radius)
- Background (color or gradient)
- Width/Height (fixed or auto)
- Display and layout properties (flex, grid, etc.)

Format as styled-component ready CSS.
```

**How to use:**
1. Replace `[FRAME_ID_OR_NAME]` with Figma frame
2. Describe the specific element (e.g., "primary button", "section header", "card container")
3. Use when you need precise measurements for manual refinement

---

## 🐛 Template 4: Fix Style Discrepancy

```
@figma-mcp Fix styling discrepancy in src/mobile/components/[COMPONENT_NAME].jsx

Issue: [DESCRIBE DISCREPANCY]
- Figma spec: [EXPECTED VALUE]
- Current implementation: [ACTUAL VALUE]

Element: [STYLED_COMPONENT_NAME] (line [LINE_NUMBER] approx.)

Please update to match Figma exactly. Maintain responsive behavior and existing logic.
```

**Examples:**

### Typography Issue
```
@figma-mcp Fix styling discrepancy in src/mobile/components/Header.jsx

Issue: Header title font size too large on mobile
- Figma spec: 32px at 375px viewport, max 48px
- Current implementation: 34px minimum

Element: LandingPageHeader styled-component

Please update font-size to use clamp(3.2rem, 8vw, 4.8rem) to match Figma.
```

### Spacing Issue
```
@figma-mcp Fix styling discrepancy in src/mobile/components/Services.jsx

Issue: Service card padding inconsistent with Figma
- Figma spec: 24px on all sides (6% at 400px width)
- Current implementation: 8% padding

Element: ServiceCard styled-component

Please adjust padding to 6% to match Figma Dev Mode specs.
```

### Color Issue
```
@figma-mcp Fix styling discrepancy in src/mobile/components/Footer.jsx

Issue: Form label color doesn't match inactive state
- Figma spec: #b4a7bc (var(--gray))
- Current implementation: #999999

Element: FormLabel styled-component

Please update color to var(--gray) as defined in GlobalStyle.js.
```

---

## 🔍 Template 5: Validate Implementation

```
@figma-mcp Compare src/mobile/components/[COMPONENT_NAME].jsx against Figma frame "[FRAME_ID_OR_NAME]" and provide a detailed validation report.

Check for discrepancies in:
1. Typography (font-family, size, weight, line-height)
2. Colors (backgrounds, text, borders)
3. Spacing (padding, margin, gap)
4. Layout (flex properties, alignment)
5. Dimensions (width, height, max/min constraints)
6. Interactive states (active, focus, disabled)
7. Border radius and shadows
8. Asset usage (correct SVGs/images imported)

Rate fidelity: [Pixel-perfect / Close / Needs work] with explanation for each category.
```

**How to use:**
- Use after completing a component to verify design accuracy
- Review the report and address any "Needs work" items

---

## 🆕 Template 6: Generate Component Variant

```
@figma-mcp Generate a variant of src/mobile/components/[BASE_COMPONENT].jsx based on Figma frame "[VARIANT_FRAME_ID]".

Base component: [DESCRIBE FUNCTIONALITY]
Variant changes: [LIST KEY DIFFERENCES]

Please:
1. Duplicate base component structure
2. Update only the styles that differ per Figma
3. Maintain shared logic and imports
4. Save as: src/mobile/components/[VARIANT_NAME].jsx

Ensure consistent naming convention and code patterns with base component.
```

**Example:**
```
@figma-mcp Generate a variant of src/mobile/components/ServiceCard.jsx based on Figma frame "ServiceCardCondensed".

Base component: Full-height service card with image, header, description
Variant changes:
- Reduced height (40% of base)
- Horizontal layout (image left, text right)
- Smaller typography

Please:
1. Duplicate ServiceCard structure
2. Adjust layout to flexbox row
3. Update typography clamp() values per Figma
4. Save as: src/mobile/components/ServiceCardCondensed.jsx
```

---

## 🏗️ Template 7: Generate Multi-Component Section

```
@figma-mcp Generate a complete section from Figma frame "[SECTION_FRAME_ID]" with multiple sub-components.

Section: [SECTION_NAME]
Target: src/mobile/components/[SECTION_NAME]/

Components to generate:
1. [COMPONENT_1_NAME].jsx - [DESCRIPTION]
2. [COMPONENT_2_NAME].jsx - [DESCRIPTION]
3. [COMPONENT_3_NAME].jsx - [DESCRIPTION]
4. index.js - Exports all components

Design requirements:
- Mobile-responsive (320-768px)
- Styled-components throughout
- Shared styles in [SECTION_NAME]/styles.js if applicable
- Assets from ../../assets/

Please generate all files with proper imports/exports and consistent naming.
```

**How to use:**
- Use for complex sections with multiple related components
- Keeps code organized in subdirectories

---

## 📊 Template 8: Convert Figma Auto-Layout to Flexbox

```
@figma-mcp Convert Figma auto-layout in frame "[FRAME_ID]" to CSS flexbox for React styled-components.

Figma auto-layout properties:
- Direction: [VERTICAL/HORIZONTAL]
- Spacing: [VALUE]px
- Padding: [TOP] [RIGHT] [BOTTOM] [LEFT]
- Alignment: [ALIGN_VALUE]

Convert to:
- flex-direction: [row/column]
- gap: [RESPONSIVE_VALUE]
- padding: [RESPONSIVE_VALUES]
- justify-content / align-items: [CSS_VALUES]

Target mobile viewport (320-768px) with responsive units.
```

---

## 🎯 Template 9: Optimize for Touch

```
@figma-mcp Review src/mobile/components/[COMPONENT_NAME].jsx and optimize for mobile touch interactions.

Please ensure:
1. All interactive elements (buttons, links) are ≥48px in height/width
2. :hover states are replaced with :active for touch
3. Transitions are smooth (0.2-0.3s)
4. Tap targets have adequate spacing (min 8px gap)
5. Forms have large touch-friendly inputs
6. No hover-only functionality that breaks on touch devices

Update component to match Figma specs while meeting touch accessibility standards.
```

---

## 🔐 Template 10: Accessibility Audit & Fix

```
@figma-mcp Audit src/mobile/components/[COMPONENT_NAME].jsx for accessibility and update to meet WCAG AA standards.

Check and fix:
1. Semantic HTML (nav, section, header, footer, article)
2. Alt text on all images
3. ARIA labels for icon-only buttons
4. Color contrast ratios (verify against Figma)
5. Focus states for keyboard navigation
6. Form labels properly associated with inputs
7. Heading hierarchy (h1 → h2 → h3)

Reference Figma frame "[FRAME_ID]" for design intent. Update component with accessibility improvements while maintaining visual design.
```

---

## 💡 Pro Tips for Using These Templates

### 1. **Be Specific with Frame IDs**
- Use Figma's actual frame ID (found in URL or Dev Mode)
- Format: `123:456` or full URL

### 2. **Provide Context**
- Include viewport targets (320-768px for mobile)
- Mention design system (colors, fonts from GlobalStyle.js)
- Reference similar existing components

### 3. **Iterate in Steps**
- Generate → Test → Refine → Validate
- Use Template 5 (Validate) after Template 1 (Generate)

### 4. **Combine Templates**
```
@figma-mcp [Template 1: Generate] + [Template 10: Accessibility]

Generate [component] from Figma AND ensure WCAG AA compliance
```

### 5. **Save Custom Templates**
- Create your own templates based on recurring patterns
- Store in `.cursor/my-templates.md`

---

## 🎬 Example: Full Component Creation Flow

### Step 1: Generate
```
@figma-mcp Generate mobile TestimonialCard component from Figma frame 789:012
[Use Template 1, fill in all details]
```

### Step 2: Validate
```
@figma-mcp Compare TestimonialCard.jsx against Figma frame 789:012
[Use Template 5]
```

### Step 3: Fix Any Issues
```
@figma-mcp Fix styling discrepancy in TestimonialCard.jsx
[Use Template 4 for each issue found]
```

### Step 4: Optimize
```
@figma-mcp Optimize TestimonialCard.jsx for touch interactions
[Use Template 9]
```

### Step 5: Final Validation
```
@figma-mcp Audit TestimonialCard.jsx for accessibility
[Use Template 10]
```

---

**Keep this file open when working with Figma MCP for quick copy/paste access!**


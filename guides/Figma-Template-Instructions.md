# Creating PDF Templates in Figma

## Quick Setup Guide

### 1. Create New Figma File
- Go to figma.com and create a new file
- Name it "Benjamin Mlynek PDF Templates"

### 2. Set Up Artboards
- Create frame: A4 size (210 × 297mm or 595 × 842 pts)
- Name your frames: "Cover Page", "Content Page", etc.

### 3. Import Brand Colors
Add these color styles to your Figma file:

**Primary Colors:**
- Primary Orange: #FF6600
- Background Dark: #0D0D0D
- Foreground Light: #F7F9FB

**Secondary Colors:**
- Card Background: #151414
- Secondary: #1E2937
- Muted Text: #9CA3AF

### 4. Set Up Typography Styles

**Add these text styles:**
- H1 Main: Inter Bold 36pt, #FF6600
- H2 Section: Inter Semibold 28pt, #F7F9FB  
- H3 Subsection: Inter Semibold 20pt, #F7F9FB
- Body Text: Inter Regular 12pt, #F7F9FB
- Caption: Inter Regular 10pt, #9CA3AF

### 5. Create Components

**Header Component:**
- Rectangle 595×85pt, fill #0D0D0D
- "BM" text, gradient #FF6600 to #FB923C
- Document title, Inter Bold #FF6600

**Footer Component:**
- Rectangle 595×60pt, fill #0D0D0D  
- Contact info, Inter Regular 10pt #9CA3AF
- Page number, right aligned

**Card Component:**
- Rectangle with 6pt border radius
- Fill: #151414
- Border: 1pt #1E2937
- Padding: 12pt all sides

### 6. Build Your Template

**Cover Page Layout:**
```
[Header Component]
[Spacer - 100pt]
[Main Title - H1 Style with gradient]
[Subtitle - Body Text Style]
[Large icon - 80pt, #FF6600]
[Spacer]
[Footer Component]
```

**Content Page Layout:**
```
[Header Component]
[Section Icon + Title - H2 Style]
[Body content with bullet points]
[Card component for pro tips]
[Checklist with checkbox icons]
[Footer Component]
```

### 7. Export Settings
- Select your frame
- Export → PDF
- Settings: 1x, PDF format
- Include "id" in name: OFF

### 8. Template Variations
Create multiple templates:
- Cover page template
- Content page template  
- Checklist page template
- Two-column content template

## Pro Tips for Figma

### Gradients
For the "BM" logo and headings:
- Type: Linear
- Color 1: #FF6600 (position 0%)
- Color 2: #FB923C (position 100%)
- Angle: 90° (left to right)

### Icons
- Use Figma's built-in Lucide icon plugin
- Size: 24pt for headers, 16pt for inline
- Color: #FF6600 or #F7F9FB

### Auto Layout
- Use Auto Layout for consistent spacing
- Header: Auto Layout with 20pt padding
- Content sections: Auto Layout with 16pt gaps
- Cards: Auto Layout with 12pt padding

### Grid System
- Columns: 2 (for content layout)
- Gutter: 28pt (10mm)
- Margins: 57pt (20mm)

## Alternative: Canva Pro Setup

If you prefer Canva:

1. **Create Brand Kit:**
   - Upload your color palette
   - Add Inter font (if available)
   - Save brand colors as favorites

2. **Template Setup:**
   - Start with A4 Document
   - Apply your brand colors
   - Create consistent header/footer
   - Save as template

3. **Export:**
   - Download as PDF (Print quality)
   - Ensure colors match brand guidelines

## Final Checklist

☐ Brand colors correctly applied
☐ Inter font used throughout
☐ Consistent spacing and alignment
☐ Header and footer on every page
☐ Icons properly sized and colored
☐ Text hierarchy clear and readable
☐ Contact information included
☐ File exported as high-quality PDF

---

*With these templates, you'll have a consistent, professional look that matches your website perfectly!* 
---
name: Sentientware Core
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#43474f'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#737780'
  outline-variant: '#c3c6d0'
  surface-tint: '#3e5f90'
  primary: '#001836'
  on-primary: '#ffffff'
  primary-container: '#002d5b'
  on-primary-container: '#7696ca'
  inverse-primary: '#a7c8ff'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#300e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#501e01'
  on-tertiary-container: '#ce825b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a7c8ff'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#254776'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#ffdbcb'
  tertiary-fixed-dim: '#ffb692'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#713716'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
  enterprise-blue-dark: '#001A35'
  metallic-gold-light: '#D4B982'
  surface-grey: '#E9ECEF'
  text-main: '#1A1A1A'
  text-muted: '#6C757D'
typography:
  display-xl:
    fontFamily: Sora
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max-width: 1280px
---

## Brand & Style
The design system embodies a **Corporate / Modern** aesthetic tailored for global enterprise solutions. It is designed to feel authoritative and engineering-focused, prioritizing clarity and precision over decorative trends.

The visual narrative is built on the concept of "Engineering Excellence." This is achieved through a structured application of high-contrast typography, a rigid grid system, and a sophisticated color palette. The interface evokes a sense of stability and institutional trust, balanced with innovative accents that signal a forward-thinking, AI-driven technology partner. 

Key attributes include:
- **Global & Authoritative:** Uses substantial typographic weight and traditional enterprise blues.
- **Engineering-Focused:** Employs geometric precision, visible structural lines, and clear data visualization hierarchies.
- **Innovative:** Integrated metallic accents and spacious, airy layouts that suggest clarity in complex problem-solving.

## Colors
The color strategy utilizes a "Deep Enterprise Blue" as the foundation for authority and trust. This primary hue is used for headers, primary navigation, and critical interactive components. 

The "Subtle Metallic Gold" acts as a surgical accent color, reserved for high-value highlights, success states, or premium tier identifiers. 

The neutral palette is biased toward a "High-Contrast White," ensuring that the whitespace feels intentional and "premium." Light greys are used exclusively for subtle UI scaffolding—such as borders and background sectioning—to maintain a clean, airy aesthetic without the clutter of heavy lines.

## Typography
The typography system pairs **Sora**, a geometric sans-serif with a technical edge, for headings with **Inter** for body copy to ensure maximum legibility in data-heavy environments.

- **Headlines:** Use Sora to convey engineering precision. For Display and H1 levels, a tighter letter-spacing is applied to create a more impactful, "editorial" look.
- **Body:** Inter is used for all functional text. It is scaled for readability with generous line heights (1.5x minimum) to prevent user fatigue during long-form technical reading.
- **Labels:** Meta-information and small UI labels utilize Inter with a semi-bold weight and occasional uppercase styling to provide clear hierarchy in complex dashboards.

## Layout & Spacing
The system utilizes a **Fixed Grid** layout for desktop (12 columns) and a **Fluid Grid** for mobile (4 columns). 

- **The 8px Rhythm:** All spacing (padding, margins, component heights) must be multiples of 8px. This ensures mathematical harmony across the UI.
- **Whitespace:** Spacing between major sections should be generous (80px - 120px) to allow the "premium" brand positioning to breathe.
- **Information Architecture:** Complex data is organized into a modular grid. In multi-column layouts, use a 24px gutter to maintain clear separation of concerns. On mobile, margins reduce to 16px, and components typically stack vertically to preserve readability.

## Elevation & Depth
Depth is conveyed through **low-contrast outlines** combined with **ambient shadows**. This "Soft Enterprise" approach avoids the heaviness of traditional skeuomorphism while providing more visual interest than flat design.

- **Surfaces:** Use a pure white background for the primary content area, with a very light grey (`#F8F9FA`) for secondary containers or "well" components.
- **Shadows:** Use extra-diffused, low-opacity shadows (Blur: 20px, Spread: -5px, Opacity: 4%) with a slight tint of the Primary Blue to ground the elements.
- **Borders:** 1px solid borders in `#E9ECEF` are used to define component boundaries when shadows are not present, maintaining a clean, structured appearance.

## Shapes
The design system employs a **Soft** shape language (0.25rem / 4px base radius). This subtle rounding softens the "industrial" feel of the deep blue and geometric type, making the software feel modern and accessible without losing its professional edge. 

- **Buttons & Inputs:** Use the standard 4px radius.
- **Cards:** Use `rounded-lg` (8px) to create a clear container-level distinction.
- **Icons:** Should follow the same geometric rules, using consistent stroke weights (1.5px or 2px) and slight corner rounding.

## Components
- **Buttons:** Primary buttons are solid Deep Enterprise Blue with white text. Secondary buttons use a Subtle Metallic Gold outline. Hover states should involve a slight darkening of the fill or a subtle lift via shadow.
- **Cards:** White backgrounds with a 1px light grey border. On hover, apply an ambient shadow and a 2px top-border accent in Metallic Gold to indicate interactivity.
- **Input Fields:** Rectangular with a 4px radius. Use a 1px border that shifts to Primary Blue on focus. Labels must always be visible (no floating labels) to support complex form entry.
- **Professional Iconography:** Use a custom-curated set of thin-line icons. Icons should be functional and never decorative; when paired with Gold, they signify a "premium" or "AI-powered" feature.
- **Data Tables:** High-density, using subtle row-striping in light grey. Headers are sticky and styled in Deep Enterprise Blue with white Sora typography.
- **Chips/Badges:** Small, rounded-pill shapes used for status indicators. Use muted versions of the primary/secondary colors to prevent them from distracting from the main CTA.
# 🎨 Gemini Coding Guidelines & Design Rules

**CRITICAL RULE**: Every time you modify, refactor, or write new code (especially UI/Frontend code), you **MUST** adhere to the guidelines established in this file.

## 1. Taste Skill (Anti-Slop Frontend)
- **Do not output templated, generic, or "slop" designs.** Your UI work must look bespoke, premium, and carefully crafted.
- **Audit before Redesign**: Understand the existing UI and the brief before making structural changes.
- **Use Real Design Systems**: Stick strictly to the established design tokens and rationale.
- **Micro-interactions & Aesthetics**: Focus on subtle animations, perfect spacing, typography (Google Fonts like Inter, Space Grotesk, Public Sans), and curated color palettes (no pure #F00 red or #00F blue).

## 2. DESIGN.md Protocol
- **Follow the DESIGN.md spec**: All visual identity and design tokens must be drawn from or documented in a `DESIGN.md` file (using YAML frontmatter for tokens + Markdown for rationale).
- **Enforce Design Tokens**: Never hardcode colors, spacing, or typography values haphazardly. Always use the mapped tokens from the design system.
- **Consistency**: When adding a new component, ensure its properties (backgroundColor, textColor, padding, rounded) map directly to the established specification.

## 3. Workflow Checklist
Before executing any frontend code changes, verify:
- [ ] Is this design premium and free of generic UI tropes?
- [ ] Are all colors, fonts, and spacings derived from the `DESIGN.md` specification?
- [ ] Have you applied the `taste-skill` guidelines to ensure a high-end design direction?

# 🎨 Gemini Coding Guidelines & Design Rules

**CRITICAL RULE**: Every time you modify, refactor, or write new code (especially UI/Frontend code), you **MUST** adhere to the guidelines established in this file.

## 1. Hermes Design Skill
**Do NOT use the default AI-generated "taste-skill" (Anti-Slop) guidelines anymore. The Hermes aesthetic takes precedence.**
- **Understated Luxury:** Designs must evoke a high-end fashion house. Minimal, timeless, and expensive. No "trendy" tech UI tricks like neon glows, brutalism, or heavy glassmorphism unless strictly required.
- **Color Palette:** Rooted in warm, premium tones. The iconic Hermès Orange (`#F37021`), saddle brown, rich cream (`#FAF9F6`), deep charcoal, and elegant gold. Avoid cold tech blues or generic purples.
- **Typography:** Classic and sophisticated. Embrace elegant serif fonts (e.g., Cormorant Garamond, Playfair Display) for headlines to convey heritage, paired with clean sans-serifs (Montserrat, Lato) for readability in body text. Do not use generic tech fonts like Inter or Space Grotesk.
- **Whitespace & Breathing Room:** Generous use of negative space. Elements should never feel crowded. Let the content and imagery breathe like a piece of art in a gallery.
- **Refined Interactions:** Animations should be subtle, smooth, and deliberate. Think of a velvet curtain opening—slow, graceful fades and soft glides. No frantic bouncing or springy animations.

## 2. DESIGN.md Protocol
- **Follow the DESIGN.md spec**: All visual identity and design tokens must be drawn from or documented in a `DESIGN.md` file (using YAML frontmatter for tokens + Markdown for rationale).
- **Enforce Design Tokens**: Never hardcode colors, spacing, or typography values haphazardly. Always use the mapped tokens from the design system.
- **Consistency**: When adding a new component, ensure its properties (backgroundColor, textColor, padding, rounded) map directly to the established specification.

## 3. Workflow Checklist
Before executing any frontend code changes, verify:
- [ ] Does this design feel like a luxury fashion editorial (Hermes)?
- [ ] Are the colors warm, rich, and sophisticated (e.g., Hermès Orange, cream, brown)?
- [ ] Is the typography classic and elegant (Serifs for headings, clean sans for body)?
- [ ] Have I removed unnecessary clutter to maximize breathing room?
- [ ] Are all colors, fonts, and spacings derived from the `DESIGN.md` specification?

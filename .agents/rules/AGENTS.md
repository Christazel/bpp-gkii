# Project Rules - BPP GKII Portal

## Design & Styling Rules
1. **Primary Color Tokens**: Always use `#0c35a6` for primary blue, `#06195c` for deep navy, `#B8962E` / `#D4AF37` for gold accents, and `#FAFCFF` for soft background cards.
2. **Typography**: Always use `Gabarito` font as the primary font family.
3. **Data Management**: Keep all static state in `src/data/bpp-data.json`. Do not hardcode static document lists or officer data directly inside TSX components.
4. **Security**: All external `target="_blank"` links must specify `rel="noopener noreferrer"`.
5. **Responsiveness**: Ensure layouts work cleanly on mobile viewport sizes (`375px+`). Use compact panels where necessary to prevent vertical scroll bloat.

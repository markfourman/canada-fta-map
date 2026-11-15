# Handoff status: Canada's Free Trade Map

All six tasks are done. What is left is data that could not be verified from here. See the README "Data status" table.

## Still open (needs a browser with access to Statistics Canada, ISED or CBSA)
1. Top-5 export and import products per country. Source: ISED Trade Data Online or Statistics Canada. Add to `TRADE` as `exports: [...]` and `imports: [...]`, then show them in `tradeBlock()` in `index.html`.
2. 2025 trade for countries missing from `TRADE`. Same table, same year.
3. Numeric tariff codes marked `codeSrc: "secondary"`: confirm in CBSA Memorandum D17-1-10, Appendix H, then set `codeSrc: "cbsa"`. Find the Mexico Tariff (MXT) code.
4. Proof-of-origin rules and the Israel origin chapter for agreements where `proof` / `chapters` is missing.
5. Government URLs for Costa Rica, EFTA, Jordan, Israel and NAFTA dates, and for the Ecuador and Indonesia signing dates.

## Rules that still apply
- Never fill a fact from memory. Leave it null; the app shows "Not verified".
- Keep source URLs in the README.
- Test with `python -m http.server` and check phone width, keyboard-only use, and that nothing reads "undefined".

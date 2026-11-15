# Canada's Free Trade Map

**Live page: https://markfourman.github.io/canada-fta-map/**

An interactive world map showing which countries have a free trade agreement with Canada, which agreement applies, when it took effect, 2025 trade with Canada, and the CBSA tariff treatment. Built for customs professionals and supply chain students.

## Features

- World map coloured by status: in force, provisionally applied, signed, in negotiation. Each status also has its own symbol (● ◉ ○ ◌), so colour is never the only cue.
- Click a country for its agreements, entry-into-force dates, 2025 trade, and a "For customs" block: CBSA tariff treatment (with code), origin chapters, proof of origin.
- **Compare** two countries side by side (pick from the lists, or click them on the map).
- Search, an agreement filter, and a timeline slider from 1994 to today.
- List view that works fully by keyboard and screen reader; skip link past the map; Escape returns to the map.
- On a phone, details open in a bottom sheet.
- Shareable links: `#c=392` opens Japan (ISO numeric country code).
- The header count is computed from the data, not typed in.

## Data status

Anything not verified shows "Not verified" in the app. Nothing is filled from memory.

| Data | Status | Source |
|------|--------|--------|
| Agreement list and statuses (15 in force, 3 signed, 6 in negotiation); 51 partner countries | Verified 2026-11-15; computed count matches. **On 2026-12-01 the app counts Indonesia as in force (16 agreements, 52 countries).** | Trade Commissioner Service (page modified 2026-11-12) |
| Entry-into-force dates: CUSMA, CETA, CPTPP, UK TCA, Chile, Colombia, Honduras, Korea, Panama, Peru, Ukraine | Verified, official source | CRA procurement appendix (also gives modernized Ukraine 2024-07-01); Canada Gazette SI/2017-47 (CETA); Contracting Policy Notice 2021-1 and Gazette SI/2021-14 (UK TCA); CBSA Customs Notice 17-23 (original Ukraine 2017-08-01); Global Affairs Canada Chile page (modernized Chile 2019-02-05) |
| CPTPP member dates (11 members) | Verified, official source | Global Affairs Canada CPTPP timeline; Canada Gazette SOR/2023-150; CBSA Customs Notice 26-22 (UK); Library of Parliament |
| In-force dates for all 15 agreements, including Costa Rica 2002-11-01, EFTA 2009-07-01, Jordan 2012-10-01, Israel 1997-01-01 (modernized 2019-09-01) and NAFTA 1994-01-01 | Verified, official source | Global Affairs Canada agreements table; Global Affairs Canada statement on the modernized Canada-Israel FTA (2019); Government of Canada news release on the EFTA agreement (2009) |
| Ecuador signed 2026-07-24; Indonesia signed 2025-09-24, enters into force 2026-12-01 | Verified, official source | Global Affairs Canada news release (Ecuador, 2026); Global Affairs Canada Indonesia CEPA background page; Global Affairs Canada agreements table |
| UAE CEPA signed 2026-10-27, in force expected 2027 | Verified | Prime Minister's Office; Canadian Press via Hürriyet Daily News |
| 2025 exports and imports (31 countries: 22 with both figures, 9 with one) | Verified, rounded to C$0.1 B | Statistics Canada Table 12-10-0171-01 as published by Global Affairs Canada |
| Trade for the other partner countries (small EU members, Iceland, Liechtenstein, NZ, Brunei, Costa Rica, Honduras, Ukraine and others) | **Not in the source page**, left blank | n/a |
| Top-5 export and import products per country | **Not filled.** The app shows "named in the source" 2025 highlights where GAC names them | n/a |
| CBSA tariff treatment names | Verified | CBSA Customs Tariff 2026, list of countries and tariff treatments |
| Tariff treatment codes for all 18 treatments with a code: UST 10, MXT 11, CIAT 13, CT 14, CRT 21, IT 22, NT 23, SLT 24, PT 25, COLT 26, JT 27, PAT 28, HNT 29, KRT 30, CEUT 31, UAT 32, CPTPT 33, UKT 34 | Verified, official source | CBSA Memorandum D11-4-2 (2022), section 53 |
| Tariff treatment code 35 (CPUKT) | Verified | CBSA Customs Notice 26-22 |
| Indonesia tariff treatment name and code | **Not verified.** The agreement is not yet in force; the app shows "Not verified" after 2026-12-01 until the CBSA publishes it | n/a |
| Origin chapters per agreement | Verified (Customs Act schedule dated 2024-07-01). Israel: Chapter Three, from the agreement text and the CIFTA Rules of Origin Regulations (SOR/2019-276) | Customs Act, Schedule, Part 5 |
| Proof of origin for all 15 agreements (form or declaration, who completes it) | Verified, official source | CBSA, Proof of origin page |

### Known discrepancies

- The Prime Minister's October 2026 release says 16 agreements. This most likely counts the Indonesia CEPA, which enters into force 2026-12-01. Until then the app follows the Trade Commissioner Service page (15 agreements, 51 countries). **After 2026-12-01, re-check the official country total on the Trade Commissioner Service page**: the app will compute 16 agreements and 52 countries by itself, and the official figure may differ.
- UAE imports are left blank: the GAC report gives C$679 M in one figure and C$2.2 B in another.
- The GAC report prints "$" without naming the currency. It is treated as Canadian dollars; the report's totals match Statistics Canada's Canadian-dollar totals.

## Sources (APA)

- Canada Border Services Agency. (2017). *Customs Notice 17-23: Implementation of the Canada-Ukraine Free Trade Agreement.* https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn17-23-eng.html
- Canada Border Services Agency. (2018). *Customs Notice 18-22: Implementation of the CPTPP* (reposted by CSCB). https://cscb.ca/en/article/cn-18-22-implementation-comprehensive-and-progressive-agreement-trans-pacific-partnership
- Canada Border Services Agency. (2021). *Customs Notice 21-07: Implementation of the Canada-United Kingdom Trade Continuity Agreement.* https://cbsa-asfc.gc.ca/publications/cn-ad/cn21-07-eng.html
- Canada Border Services Agency. (2024). *Customs Notice 24-21: Implementation of the New Canada-Ukraine Free Trade Agreement.* https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn24-21-eng.html
- Canada Border Services Agency. (2026). *Customs Notice 26-22: Amendment to the Customs Tariff, United Kingdom.* https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-22-eng.html
- Canada Border Services Agency. (2026). *Customs Tariff 2026: List of countries and applicable tariff treatments.* https://www.cbsa-asfc.gc.ca/trade-commerce/tariff-tarif/2026/html/countries-pays-eng.html
- Canada Border Services Agency. (2022). *Memorandum D11-4-2: Tariff treatments (section 53, tariff treatment codes).* https://www.cbsa-asfc.gc.ca/publications/dm-md/d11/d11-4-2-eng.html
- Canada Border Services Agency. (n.d.). *Proof of origin.* https://www.cbsa-asfc.gc.ca/import/origin-origine-eng.html
- *Customs Act*, R.S.C. 1985, c. 1 (2nd Supp.), Schedule, Part 5 (version of 2024-07-01). https://laws.justice.gc.ca/eng/acts/c-52.6/section-sched142298-20240701.html
- Canada Revenue Agency. (n.d.). *Appendix A: Trade agreements and financial thresholds.* https://www.canada.ca/en/revenue-agency/corporate/about-canada-revenue-agency-cra/procurement-cra/procurement-policy-appendix-a-trade-agreements-financial-thresholds.html
- Canada Gazette. (2017). *SI/2017-47: Order fixing September 21, 2017 as the day on which the CETA Implementation Act comes into force.* https://canadagazette.gc.ca/rp-pr/p2/2017/2017-09-07-x1/html/si-tr47-eng.html
- Canada Gazette. (2021). *SI/2021-14: Order fixing April 1, 2021 (Canada-UK Trade Continuity Agreement).* https://gazette.gc.ca/rp-pr/p2/2021/2021-04-14/html/si-tr14-eng.html
- Canada Gazette. (2023). *SOR/2023-150: Extension of a CPTPP tariff to Brunei.* https://gazette.gc.ca/rp-pr/p2/2023/2023-07-05/html/sor-dors150-eng.html
- Global Affairs Canada. (n.d.). *CPTPP: View the timeline.* https://www.international.gc.ca/trade-commerce/trade-agreements-accords-commerciaux/agr-acc/cptpp-ptpgp/view_timeline-consultez_chronologie.aspx?lang=eng
- Global Affairs Canada. (n.d.). *Trade and investment agreements (table of agreements and entry-into-force dates).* https://international.canada.ca/en/services/business/trade/agreements-negotiations/investment-agreements
- Global Affairs Canada. (2019, August). *Statement by Minister Carr on modernized Canada-Israel Free Trade Agreement now in force.* https://www.canada.ca/en/global-affairs/news/2019/08/statement-by-minister-carr-on-modernized-canada-israel-free-trade-agreement-now-in-force.html
- Global Affairs Canada. (2026, July). *Canada and Ecuador sign a free trade agreement.* https://www.canada.ca/en/global-affairs/news/2026/07/canada-and-ecuador-sign-a-free-trade-agreement.html
- Global Affairs Canada. (n.d.). *Canada-Indonesia CEPA: Background.* https://www.international.gc.ca/trade-commerce/trade-agreements-accords-commerciaux/agr-acc/indonesia-indonesie/cepa-apeg/background-contexte.aspx?lang=eng
- Government of Canada. (2009). *New trade agreement eliminates barriers, opens doors to European markets* [news release]. https://www.canada.ca/en/news/archive/2009/07/new-trade-agreement-eliminates-barriers-opens-doors-european-markets.html
- Global Affairs Canada. (n.d.). *Canada-Israel Free Trade Agreement: Chapter Three, Rules of origin.* https://www.international.gc.ca/trade-commerce/trade-agreements-accords-commerciaux/agr-acc/israel/fta-ale/text-texte/03.aspx
- *CIFTA Rules of Origin Regulations*, SOR/2019-276. (2019). *Canada Gazette, Part II, 153*(17). https://gazette.gc.ca/rp-pr/p2/2019/2019-08-21/html/sor-dors276-eng.html
- Global Affairs Canada. (n.d.). *Canada-Chile Free Trade Agreement.* https://international.gc.ca/trade-commerce/trade-agreements-accords-commerciaux/agr-acc/chile-chili/index.aspx?lang=eng
- Global Affairs Canada, Office of the Chief Economist. (2026). *Highlights of Canada's merchandise trade performance: 2025 update* (data: Statistics Canada Table 12-10-0171-01, retrieved 2026-05-05). https://international.canada.ca/en/global-affairs/corporate/reports/chief-economist/annual/2025
- Prime Minister of Canada. (2026, October). *Canada and the UAE sign the Comprehensive Economic Partnership Agreement.* https://www.pm.gc.ca/en/node/54483
- Treasury Board Secretariat. (2021). *Contracting Policy Notice 2021-1.* https://www.canada.ca/en/treasury-board-secretariat/services/policy-notice/contracting-policy-notice-2021-1-canada-uk-trade.html
- Trade Commissioner Service. (2026). *Free trade agreements.* https://www.tradecommissioner.gc.ca/en/market-industry-info/free-trade-agreements.html

## Files

| File | Purpose |
|------|---------|
| `index.html` | The app |
| `data.js` | Agreements, members, customs data, country names, trade data |
| `vendor/` | D3, topojson-client and the world map, stored locally so the app runs offline |
| `preview.png` | Link preview image (LinkedIn and others) |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

## Run locally

The map file loads with `fetch`, so opening `index.html` directly may fail. Run a small local server instead:

```
python -m http.server
```

Then open http://localhost:8000.

## Deploy

Create a repo named `canada-fta-map`, upload every file and the `vendor` folder to the root, then go to Settings > Pages > Deploy from a branch > `main` / root.

## Disclaimer

Reference tool, not customs advice. Confirm tariff treatment with the CBSA.

## Credits

Map data: [world-atlas](https://github.com/topojson/world-atlas) (Natural Earth). Built with [D3](https://d3js.org).
Mark Fourmanovskis · [LinkedIn](https://www.linkedin.com/in/mark-fourmanovskis/) · [GitHub](https://github.com/markfourman)

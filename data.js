// Canada's Free Trade Map: all data lives here.
// RULE: nothing in this file counts as fact until it is verified and has a source (see README "Data status").
// Agreement list and statuses: verified 2026-11-15 against the Trade Commissioner Service page (modified 2026-11-12).
// Entry-into-force dates: verified 2026-11-15 (sources in README). dateVerified:false would show "(not verified)" in the app.
// Trade figures: 2025, CAD millions, from Statistics Canada Table 12-10-0171-01 as published by Global Affairs Canada.
// Anything null or missing is shown as "Not verified" in the app. Never fill a gap from memory.

const META = {
  lastVerified: "2026-11-15",
  listSource: "https://www.tradecommissioner.gc.ca/en/market-industry-info/free-trade-agreements.html",
  officialCount: { agreements: 15, countries: 51 }, // as stated by the source; the app also computes its own count
  trade: {
    year: 2025,
    source: "https://international.canada.ca/en/global-affairs/corporate/reports/chief-economist/annual/2025",
    label: "Statistics Canada Table 12-10-0171-01 (customs-based), as published by Global Affairs Canada, Office of the Chief Economist. Canadian dollars, rounded to C$0.1 billion in the source."
  }
};

// Where the customs facts come from.
const CUSTOMS_SRC = {
  rules: "https://laws.justice.gc.ca/eng/acts/c-52.6/section-sched142298-20240701.html", // Customs Act, Schedule, Part 5
  codes: "https://www.cbsa-asfc.gc.ca/publications/dm-md/d11/d11-4-2-eng.html",           // CBSA Memorandum D11-4-2 (2022-06-29), section 53
  tariff: "https://www.cbsa-asfc.gc.ca/trade-commerce/tariff-tarif/2026/html/countries-pays-eng.html" // Customs Tariff 2026: countries and tariff treatments
};

// status: "inforce" | "provisional" | "signed" | "negotiating"
// customs.tariff[].codeSrc: "cbsa" = confirmed in a CBSA customs notice; code:null = not verified. (All codes were confirmed in CBSA Memorandum D11-4-2 on 2026-11-15.)
const AGREEMENTS = {
  CUSMA:   { name: "Canada-United States-Mexico Agreement", status: "inforce", date: "2020-07-01", dateVerified: true,
             note: "Replaced NAFTA (in force 1994-01-01).", members: ["840","484"],
             customs: { tariff: [
               { abbr:"UST", name:"United States Tariff", code:10, codeSrc:"cbsa", members:["840"] },
               { abbr:"MXT", name:"Mexico Tariff", code:11, codeSrc:"cbsa", members:["484"] } ],
               chapters: "Chapters 4 to 7",
               proof: "No prescribed format. The certification of origin must contain the minimum data elements (Annex 5-A, Chapter 5). It may be completed by the importer, exporter or producer.",
               proofSrc: "https://www.cbsa-asfc.gc.ca/import/origin-origine-eng.html", proofLabel: "CBSA: Proof of origin" } },
  NAFTA:   { name: "North American Free Trade Agreement", status: "inforce", date: "1994-01-01", until: "2020-07-01", dateVerified: true,
             historical: true, note: "Replaced by CUSMA. Shown only on the timeline before 2020.", members: ["840","484"] },
  CETA:    { name: "Canada-European Union Comprehensive Economic and Trade Agreement", status: "provisional", date: "2017-09-21", dateVerified: true,
             note: "Provisionally applied; in force for Canadian exporters. Full entry into force needs ratification by all EU member states.",
             members: ["040","056","100","191","196","203","208","233","246","250","276","300","348","372","380","428","440","442","470","528","616","620","642","703","705","724","752"],
             customs: { tariff: [ { abbr:"CEUT", name:"Canada-European Union Tariff", code:31, codeSrc:"cbsa" } ],
               chapters: "Protocol on Rules of Origin and Origin Procedures",
               proof: "Origin declaration (Annex 2 of the Protocol on Rules of Origin and Origin Procedures), completed by the exporter.",
               proofSrc: "https://www.cbsa-asfc.gc.ca/import/origin-origine-eng.html", proofLabel: "CBSA: Proof of origin" } },
  CPTPP:   { name: "Comprehensive and Progressive Agreement for Trans-Pacific Partnership", status: "inforce", date: "2018-12-30", dateVerified: true,
             note: "Date is Canada's own entry into force. Each member's date with Canada differs.",
             members: ["036","096","152","392","458","484","554","604","702","704","826"],
             memberDates: {
               "036": { date: "2018-12-30", verified: true }, "392": { date: "2018-12-30", verified: true },
               "484": { date: "2018-12-30", verified: true }, "554": { date: "2018-12-30", verified: true },
               "702": { date: "2018-12-30", verified: true }, "704": { date: "2019-01-14", verified: true },
               "604": { date: "2021-09-19", verified: true }, "458": { date: "2022-11-29", verified: true },
               "152": { date: "2023-02-21", verified: true }, "096": { date: "2023-07-12", verified: true },
               "826": { date: "2026-09-01", verified: true } },
             customs: { tariff: [
               { abbr:"CPTPT", name:"Comprehensive and Progressive Trans-Pacific Partnership Tariff", code:33, codeSrc:"cbsa",
                 members:["036","096","152","392","458","484","554","604","702","704"] },
               { abbr:"CPUKT", name:"Comprehensive and Progressive United Kingdom Tariff", code:35, codeSrc:"cbsa", members:["826"] } ],
               chapters: "Chapters 3 to 5 of the Trans-Pacific Partnership Agreement, incorporated by reference",
               proof: "No prescribed format. The certification of origin must contain the minimum data requirements (Annex 3-B, Chapter 3). It may be completed by the importer, exporter or producer.",
               proofSrc: "https://www.cbsa-asfc.gc.ca/import/origin-origine-eng.html", proofLabel: "CBSA: Proof of origin" } },
  UKTCA:   { name: "Canada-UK Trade Continuity Agreement", status: "inforce", date: "2021-04-01", dateVerified: true,
             note: "UK goods can also qualify under CPTPP since 2026-09-01. Compare the two for your goods.", members: ["826"],
             customs: { tariff: [ { abbr:"UKT", name:"United Kingdom Tariff", code:34, codeSrc:"cbsa" } ],
               chapters: "Protocol on Rules of Origin and Origin Procedures of CETA, as incorporated into the Canada-UK TCA",
               proof: "Origin declaration (Section C, Article 18), completed by the exporter.",
               proofSrc: "https://www.cbsa-asfc.gc.ca/import/origin-origine-eng.html", proofLabel: "CBSA: Proof of origin" } },
  CCFTA:   { name: "Canada-Chile Free Trade Agreement", status: "inforce", date: "1997-07-05", dateVerified: true,
             note: "Modernized agreement in force 2019-02-05.", members: ["152"],
             customs: { tariff: [ { abbr:"CT", name:"Chile Tariff", code:14, codeSrc:"cbsa" } ], chapters: "Chapters C and E",
               proof: "Forms B240 / B240-S, completed by the exporter.",
               proofSrc: "https://www.cbsa-asfc.gc.ca/import/origin-origine-eng.html", proofLabel: "CBSA: Proof of origin" } },
  CCOFTA:  { name: "Canada-Colombia Free Trade Agreement", status: "inforce", date: "2011-08-15", dateVerified: true, members: ["170"],
             customs: { tariff: [ { abbr:"COLT", name:"Colombia Tariff", code:26, codeSrc:"cbsa" } ], chapters: "Chapter Four",
               proof: "Forms BSF459 / BSF459-S, completed by the exporter.",
               proofSrc: "https://www.cbsa-asfc.gc.ca/import/origin-origine-eng.html", proofLabel: "CBSA: Proof of origin" } },
  CCRFTA:  { name: "Canada-Costa Rica Free Trade Agreement", status: "inforce", date: "2002-11-01", dateVerified: true, members: ["188"],
             customs: { tariff: [ { abbr:"CRT", name:"Costa Rica Tariff", code:21, codeSrc:"cbsa" } ], chapters: "Chapters III and V",
               proof: "Forms B246 / B246-S, completed by the exporter.",
               proofSrc: "https://www.cbsa-asfc.gc.ca/import/origin-origine-eng.html", proofLabel: "CBSA: Proof of origin" } },
  CEFTA:   { name: "Canada-European Free Trade Association Free Trade Agreement", status: "inforce", date: "2009-07-01", dateVerified: true,
             note: "Iceland, Liechtenstein, Norway, Switzerland.", members: ["352","438","578","756"],
             customs: { tariff: [
               { abbr:"IT", name:"Iceland Tariff", code:22, codeSrc:"cbsa", members:["352"] },
               { abbr:"NT", name:"Norway Tariff", code:23, codeSrc:"cbsa", members:["578"] },
               { abbr:"SLT", name:"Switzerland-Liechtenstein Tariff", code:24, codeSrc:"cbsa", members:["438","756"] } ],
               chapters: "Chapter II and Annex C",
               proof: "Origin declaration (Appendix II to Annex C), completed by the exporter.",
               proofSrc: "https://www.cbsa-asfc.gc.ca/import/origin-origine-eng.html", proofLabel: "CBSA: Proof of origin" } },
  CHFTA:   { name: "Canada-Honduras Free Trade Agreement", status: "inforce", date: "2014-10-01", dateVerified: true, members: ["340"],
             customs: { tariff: [ { abbr:"HNT", name:"Honduras Tariff", code:29, codeSrc:"cbsa" } ], chapters: "Chapter Five",
               proof: "Forms BSF747 / BSF747-S, completed by the exporter.",
               proofSrc: "https://www.cbsa-asfc.gc.ca/import/origin-origine-eng.html", proofLabel: "CBSA: Proof of origin" } },
  CIFTA:   { name: "Canada-Israel Free Trade Agreement", status: "inforce", date: "1997-01-01", dateVerified: true,
             note: "Modernized agreement in force 2019-09-01.", members: ["376"],
             customs: { tariff: [ { abbr:"CIAT", name:"Canada-Israel Agreement Tariff", code:13, codeSrc:"cbsa" } ],
               proof: "Form B239, completed by the exporter.",
               proofSrc: "https://www.cbsa-asfc.gc.ca/import/origin-origine-eng.html", proofLabel: "CBSA: Proof of origin" } },
  CJFTA:   { name: "Canada-Jordan Free Trade Agreement", status: "inforce", date: "2012-10-01", dateVerified: true, members: ["400"],
             customs: { tariff: [ { abbr:"JT", name:"Jordan Tariff", code:27, codeSrc:"cbsa" } ], chapters: "Chapter Five",
               proof: "Forms BSF303 / BSF303-A, completed by the exporter.",
               proofSrc: "https://www.cbsa-asfc.gc.ca/import/origin-origine-eng.html", proofLabel: "CBSA: Proof of origin" } },
  CKFTA:   { name: "Canada-Korea Free Trade Agreement", status: "inforce", date: "2015-01-01", dateVerified: true, members: ["410"],
             customs: { tariff: [ { abbr:"KRT", name:"Korea Tariff", code:30, codeSrc:"cbsa" } ], chapters: "Chapter Four",
               proof: "Forms BSF760 / BSF760-K, completed by the exporter.",
               proofSrc: "https://www.cbsa-asfc.gc.ca/import/origin-origine-eng.html", proofLabel: "CBSA: Proof of origin" } },
  CPAFTA:  { name: "Canada-Panama Free Trade Agreement", status: "inforce", date: "2013-04-01", dateVerified: true, members: ["591"],
             customs: { tariff: [ { abbr:"PAT", name:"Panama Tariff", code:28, codeSrc:"cbsa" } ], chapters: "Chapter Four",
               proof: "Forms BSF631 / BSF631-S, completed by the exporter.",
               proofSrc: "https://www.cbsa-asfc.gc.ca/import/origin-origine-eng.html", proofLabel: "CBSA: Proof of origin" } },
  CPFTA:   { name: "Canada-Peru Free Trade Agreement", status: "inforce", date: "2009-08-01", dateVerified: true, members: ["604"],
             customs: { tariff: [ { abbr:"PT", name:"Peru Tariff", code:25, codeSrc:"cbsa" } ], chapters: "Chapter Four",
               proof: "Forms BSF267 / BSF267-S, completed by the exporter.",
               proofSrc: "https://www.cbsa-asfc.gc.ca/import/origin-origine-eng.html", proofLabel: "CBSA: Proof of origin" } },
  CUFTA:   { name: "Modernized Canada-Ukraine Free Trade Agreement", status: "inforce", date: "2024-07-01", dateVerified: true,
             note: "Original agreement in force 2017-08-01. Modernized version in force 2024-07-01.", members: ["804"],
             customs: { tariff: [ { abbr:"UAT", name:"Ukraine Tariff", code:32, codeSrc:"cbsa" } ],
               chapters: "Chapters 3 and 4 (Chapter 3 covers rules of origin and origin procedures)",
               proof: "Origin declaration (Annex 3-B, Chapter 3), completed by the exporter.",
               proofSrc: "https://www.cbsa-asfc.gc.ca/import/origin-origine-eng.html", proofLabel: "CBSA: Proof of origin" } },
  // Signed, not yet in force
  CECFTA:  { name: "Canada-Ecuador Free Trade Agreement", status: "signed", date: "2026-07-24", dateVerified: true, dateLabel: "Signed", members: ["218"] },
  CIDCEPA: { name: "Canada-Indonesia Comprehensive Economic Partnership Agreement", status: "signed", date: "2025-09-24", dateVerified: true, dateLabel: "Signed", effectiveDate: "2026-12-01",
             note: "Enters into force 2026-12-01.", members: ["360"] },
  CAECEPA: { name: "Canada-United Arab Emirates Comprehensive Economic Partnership Agreement", status: "signed", date: "2026-10-27", dateVerified: true, dateLabel: "Signed",
             note: "Negotiations concluded July 2026. Expected to enter into force in 2027.", members: ["784"] },
  // In negotiations
  ASEAN:   { name: "Canada-ASEAN Free Trade Agreement", status: "negotiating", date: null, members: ["096","116","360","418","458","104","608","702","764","704"] },
  CINCEPA: { name: "Canada-India Comprehensive Economic Partnership Agreement", status: "negotiating", date: null, members: ["356"] },
  MERCOSUR:{ name: "Canada-Mercosur Free Trade Agreement", status: "negotiating", date: null, members: ["032","076","600","858"] },
  CPHFTA:  { name: "Canada-Philippines Free Trade Agreement", status: "negotiating", date: null, members: ["608"] },
  CTHFTA:  { name: "Canada-Thailand Free Trade Agreement", status: "negotiating", date: null, members: ["764"] },
  CTRFTA:  { name: "Canada-Türkiye Free Trade Agreement", status: "negotiating", date: null, members: ["792"] }
};

// Country names keyed by ISO 3166 numeric code (matches world-atlas ids).
const NAMES = {
  "840":"United States","484":"Mexico","040":"Austria","056":"Belgium","100":"Bulgaria","191":"Croatia","196":"Cyprus",
  "203":"Czechia","208":"Denmark","233":"Estonia","246":"Finland","250":"France","276":"Germany","300":"Greece","348":"Hungary",
  "372":"Ireland","380":"Italy","428":"Latvia","440":"Lithuania","442":"Luxembourg","470":"Malta","528":"Netherlands","616":"Poland",
  "620":"Portugal","642":"Romania","703":"Slovakia","705":"Slovenia","724":"Spain","752":"Sweden","036":"Australia","096":"Brunei",
  "152":"Chile","392":"Japan","458":"Malaysia","554":"New Zealand","604":"Peru","702":"Singapore","704":"Vietnam","826":"United Kingdom",
  "170":"Colombia","188":"Costa Rica","352":"Iceland","438":"Liechtenstein","578":"Norway","756":"Switzerland","340":"Honduras",
  "376":"Israel","400":"Jordan","410":"South Korea","591":"Panama","804":"Ukraine","218":"Ecuador","360":"Indonesia",
  "784":"United Arab Emirates","116":"Cambodia","418":"Laos","104":"Myanmar","608":"Philippines","764":"Thailand","356":"India",
  "032":"Argentina","076":"Brazil","600":"Paraguay","858":"Uruguay","792":"Türkiye","124":"Canada"
};

// Trade with Canada, 2025, CAD millions. exp = Canadian exports to the country; imp = Canadian imports from it.
// null/missing = the source page gives no figure. Source: META.trade. hlExp/hlImp = what the source names for 2025
// (what led or changed in the year, NOT a ranked top-5 list).
const TRADE = {
  "840": { exp: 564600, imp: 361700 },
  "484": { exp: 8900, imp: 53400, hlExp: "Growth led by oilseeds and animal/vegetable fats and oils.", hlImp: "Led by motor vehicles and parts and machinery; electronics also significant." },
  "826": { exp: 46600, imp: 9900, hlExp: "Gold is the largest export category; mineral fuels and oils (mainly crude oil) are second. Aircraft and parts fell." },
  "392": { exp: 14600, imp: 21100, hlExp: "Meat and rapeseed/canola seed grew; coal weighed on the overall 2.8% fall.", hlImp: "Imports fell 1.3%, mainly on weaker electronics." },
  "276": { exp: 9200, imp: 25100, hlExp: "Growth across a broad range of products.", hlImp: "Higher machinery shipments drove the rise." },
  "410": { exp: 7100, imp: 17900, hlExp: "Exports fell 7.2%, with coal a notable factor." },
  "380": { exp: 3900, imp: 13600, hlImp: "Leading imports: pharmaceuticals, electronics, precious stones and metals." },
  "250": { exp: 5000, imp: 10200, hlExp: "Oilseeds grew." },
  "528": { exp: 9500, imp: 4400, hlExp: "Growth driven mainly by crude oil and aluminum." },
  "756": { exp: 2600, imp: 10300, hlExp: "Gold export volumes fell sharply.", hlImp: "Gold import volumes surged; total imports rose 28.3%." },
  "056": { exp: 3900, imp: 4200 },
  "724": { exp: 2700, imp: 4600, hlExp: "Cereals grew." },
  "036": { exp: 3400, imp: 4000, hlImp: "Named in the source: meat products; precious stones and metals." },
  "152": { exp: 1000, imp: 2100 },
  "170": { exp: 1100, imp: 2700 },
  "218": { exp: 600, imp: 1300, hlExp: "Farm, fishing and intermediate food products grew." },
  "604": { exp: 1400, imp: 7700, hlExp: "Refined petroleum products fell.", hlImp: "Gold imports grew." },
  "458": { exp: 1700, imp: 4400 },
  "360": { exp: 3000, imp: 3600, hlExp: "Energy products grew." },
  "376": { exp: 746.8, imp: 1383.8, hlExp: "Motor cars grew." },
  "784": { exp: 2835.4, imp: null, hlExp: "Machinery, electronics and scientific instruments grew.",
           note: "Imports left blank: the source gives two different figures (C$679 M and C$2.2 B)." },
  "702": { exp: 3200, imp: null, hlExp: "Crude oil grew." },
  "704": { exp: null, imp: 19300, hlImp: "Leading imports: computers (machinery) and smartphones (electronics)." },
  "578": { exp: 2300, imp: null },
  "616": { exp: 1500, imp: null },
  "372": { exp: null, imp: 4900, hlImp: "Machinery grew." },
  "752": { exp: null, imp: 5200, hlImp: "Copper and vehicles grew." },
  "400": { exp: null, imp: 168.8 },
  "591": { exp: 600, imp: null },
  "356": { exp: 3900, imp: 9700, hlExp: "Exports fell, driven by vegetables and mineral fuels.", hlImp: "Leading imports: diamonds, office machines and medicaments." },
  "076": { exp: 3100, imp: 11600, hlExp: "Growth driven mainly by fertilizer." }
};

# ADS Metrics Framework

As of 2026-10-09 · Owner: ADS team

## Summary

Out of the 65 metrics in the catalog, 15 are selected as the working set: four leadership KPIs (Adoption rate, Accessibility pass rate, Breaking change rate, Estimated hours saved) and 11 operational metrics covering service, quality and change governance. Selection used five weighted criteria with a threshold of 27 out of 33, plus one rule: each of the seven questions about the system must be covered by at least one metric.

What changed compared to the Miro board:

- 23 metrics were merged into slices of larger ones; for example, eight quality items became one Component readiness checklist.
- Two metrics were added: Component readiness and Estimated hours saved.
- 25 metrics were excluded, 5 are on a waiting list. Nothing was deleted from the catalog.
- Every metric in the top set has an owner, a data source, a cadence and the action it triggers.

Decisions needed from the team: approve the criteria and weights, approve the top 15, assign owners, and start with the eight metrics whose data already exists.

## Context and problem

ADS is a component-delivery team: a PO, developers and a designer maintain the Figma library, the code library and the Design Portal, which renders components from code. The team does not do product design; its customers are product designers and engineers who assemble their screens from the components. Metrics therefore have to measure the quality and usage of the service, not the quality of the products.

The catalog on the Miro board holds 65 metrics in 10 categories, 20 of them marked Tier 1. That is too many to actually collect: a set of 20 metrics without owners and data sources becomes a measurement project rather than a management tool. What is needed is a set of 10–15 metrics, each with an owner, a data source, a cadence and a decision it triggers.

Metrics must answer seven questions. Each question has its own audience, and each must have at least one metric.

| Code | Question | Who asks |
| --- | --- | --- |
| ADOPT | Is the system used where it should be, in Figma and in code? | Leadership, ADS team |
| FIDELITY | Are components used as designed, and do Figma and code match? | ADS team |
| QUALITY | Are components reliable, accessible (a11y) and tested? | Everyone |
| SERVICE | Do we respond to requests and fix bugs quickly? | Product teams |
| SATISFACTION | Do designers and engineers want to use us? | ADS PO |
| GOVERNANCE | Can we change components safely? | ADS team, product stakeholders |
| VALUE | Does the system pay back the investment? | Leadership |

Metrics have three readers: leadership looks at 3–4 KPIs once a quarter, product teams see what they get from the service, and the ADS team uses operational metrics for sprint planning. One dashboard, three views.

## How others measure design systems

Mature teams measure the same things: the share of UI built from the system, detaches and deviations, outdated versions and satisfaction. But every team uses its own denominator, so numbers are not comparable across companies. Few teams measure at all: per Sparkbox 2022, 16% of teams tracked metrics; per zeroheight 2024, 38%; in 2026 only 5% measure ROI.

What design system teams measure (share of teams, %, zeroheight Design Systems Report 2026, n=147): design system adoption 41, component usage in design tools 41, component usage in code 38, accessibility compliance 36, speed of development 31, team happiness 28, product consistency 26, speed of design delivery 23, team productivity 23, code quality 22, bug/error volume 20, contributions 20, docs coverage 20, docs page views 17, engagement 13, technical performance 12, NPS 9, ROI 5.

| Company | What it measures | How it collects | Published numbers |
| --- | --- | --- | --- |
| [Pinterest, Gestalt](https://www.figma.com/blog/how-pinterests-design-systems-team-measures-adoption/) | Design adoption = Gestalt layers ÷ all layers on handoff pages; code adoption tracked separately | FigStats: nightly script over the Figma REST API, files edited in the last two weeks only | Worked example 46.6%; team spread from ~2% to ~50% used for targeted training |
| [Uber, Base](https://www.uber.com/us/en/blog/design-system-at-scale/) | Adoption score per screen: Base vs looks-like-Base views; a11y issue severity | Automated screen traversal on CD builds, Jira tickets, dashboard per app | +17 pp adoption in Rider over 2023–2024 |
| [IBM, Carbon for IBM.com](https://www.knapsack.cloud/blog/lessons-learned-from-working-on-carbon-for-ibm-com) | Share of pageviews on pages built with Carbon | Web analytics by dependency detection | 6.2% → 44.8% during 2021 |
| [Spotify, Encore](https://iamtyce.com/blog/can-i-get-an-encore-spotifys-design-system-three-years-on) | Usage, Contribution, Coverage, Satisfaction; library version per team | Daily query of repositories → dashboard | Low usage → deprecation candidates |
| [Mews](https://developers.mews.com/design-system-adoption-metric-building/) | Adoption = DS DOM elements ÷ all elements in production | Babel plugin tags elements, New Relic samples every 10 s | 53–60% per product; the first metric, "deviations", was not understood by stakeholders |
| [Productboard](https://www.productboard.com/blog/how-we-measure-adoption-of-a-design-system-at-productboard/) | Component instances, deprecated instances, prop usage, custom typography | react-scanner + ESLint/stylelint → Looker, daily | Visual coverage rejected as the primary metric |
| [Shopify, Polaris](https://medium.com/shopify-ux/uplifting-shopify-polaris-7c54fc6564d9) | Admin coverage | Coverage dashboard, migration tooling | Target 90%, 86.6% after a year |
| [athenahealth, Forge](https://www.figma.com/blog/design-systems-104-making-metrics-matter/) | Inserts and detaches per component | Figma API → Tableau, monthly review | ~100,000 insertions per month |
| [Atlassian](https://www.uxpin.com/studio/blog/atlassian-design-system-creating-design-harmony-scale/) | Opt-in and opt-out of changes, product NPS after updates | Triangulated with UserTesting | No numbers |
| [Microsoft, Fluent](https://www.figma.com/blog/introducing-design-system-analytics/) | Unused and frequently detached components | Figma Library Analytics | No numbers |
| [Booking.com](https://www.ardakaracizmeli.com/article/design-system) | Satisfaction survey; tokens validated by A/B test | Experimentation platform | >1,000 experiments on DS components |

Every metric in our top set has a precedent:

- Adoption rate: everyone measures it; the key decision is the denominator, chosen once (Pinterest counts layers, Mews DOM elements, Productboard imports).
- Detach & override rate: Microsoft, Google and athenahealth watch detaches in Figma; Productboard and Mews count deviations in code.
- Version adoption lag: Spotify and [Brevo](https://engineering.brevo.com/how-to-track-design-system-adoption/) snapshot the library version per team; Nathan Curtis sets the KR "system version no older than 6 months".
- Breaking change rate and Blast Radius: Curtis requires the team to define what counts as a breaking change and to audit usage before deprecation; [Omlet](https://omlet.dev/blog/data-driven-design-systems-in-practice/) builds a dependency tree to assess change impact.
- Accessibility pass rate: the fourth most common metric in the industry (36% of teams).
- Consumer satisfaction: Pinterest surveys twice a year; [Shopify](https://getdx.com/blog/shopify-developer-experience-survey/) surveys half of the developers every six months to avoid fatigue.
- Estimated hours saved: IBM computes "pattern efficiency", 2,010 hours saved across 18 UIs ([Knapsack ROI report](https://hubspot.knapsack.cloud/hubfs/Design-System-Insights-ROI-2021.pdf)); the [Figma experiment](https://www.figma.com/blog/measuring-the-value-of-design-systems/) shows 34% faster and calls it a ceiling.
- Lead time: Knapsack calls production cycle time the most honest proxy for value.

## Principles for choosing metrics

The sources converge on ten rules. Each one is built into the criteria and the rules for forming the top set.

| Principle | Who states it | How we applied it |
| --- | --- | --- |
| Start from stakeholder questions and work backwards to metrics | [zeroheight](https://zeroheight.com/blog/from-basic-adoption-to-meaningful-measurement-how-design-system-metrics-evolve/) | Seven questions and three audiences defined before scoring |
| A metric without an action is a vanity metric | [Romina Kavcic](https://thedesignsystem.guide/design-system-metrics), zeroheight | Criterion A with the highest weight |
| Adoption is a lagging proxy, not a goal | [Dan Mall](https://v5.danmall.com/posts/in-search-of-a-better-design-system-metric-than-adoption/), [Robin Cannon](https://www.robin-cannon.com/p/design-system-adoption-numbersjust), [Knapsack](https://www.knapsack.cloud/blog/why-design-system-adoption-isnt-the-true-measure-of-success) | Adoption stays a KPI, with leading indicators beside it: detach, lead time, readiness |
| Few metrics | Dan Mall ("if I could only track one"), [clipcontent](https://clipcontent.substack.com/p/how-to-measure-design-system-adoption-a17d7e6d57f7) | Limit of 10–15 and deduplication |
| Metrics depend on the system's maturity stage | [Ben Callahan, Sparkbox](https://sparkbox.com/foundry/design_system_maturity_model) | Rollout phases: first what already has data |
| The team writes and socializes its own definition of a breaking change | [Nathan Curtis](https://nathanacurtis.substack.com/p/versioning-design-systems-48cceb5ace4d) | Decided: API change or a noticeable visual change |
| Audit usage and talk to teams before deprecating | Nathan Curtis | That is Blast Radius |
| Regular cadence and a named owner, otherwise numbers get cherry-picked | Alan B. Smith (Workday) via [Omlet](https://omlet.dev/blog/how-leaders-measure-design-system-adoption/), athenahealth | Cadence and owner in every metric passport |
| Pair quantitative data with qualitative | Supernova, zeroheight, [Lucid](https://lucid.co/techblog/2023/01/09/learning-how-to-measure-a-design-systems-success) | Survey with an open question; detach root-cause reviews |
| Baseline first, targets later | Wilkinson, the Figma experiment design | First quarter is baseline only, no targets |

What to avoid, per the same sources:

- Goodhart's law: once adoption becomes the goal, teams connect the system formally. Mews and Pinterest filter noise; DNSK describes "97% connected" alongside a live workarounds channel.
- Vanity counters: number of components, libraries, documentation pages, contributors. That is why Update frequency and Deprecation rate were excluded.
- Figma-only data misses code; code-only data misses mobile platforms and wrapped components. That is why Adoption and Detach are counted from both sides.
- Usage volume does not equal correct usage (PJ Onori). That is why Detach & override and Token adoption sit next to Adoption.
- Survey fatigue: Lucid lost its response rate after two quarters. Hence a quarterly survey of 5–7 questions; the Shopify model of alternating halves of the audience is an option.
- Measurement tooling needs ongoing engineering time (Omlet, zeroheight 2025). Hence criterion C and the rollout phases.

## Selection criteria and scoring method

Each metric is scored 0–3 on five criteria; the scores are weighted, maximum 33. Metrics scoring 27 or more enter the top set, plus those needed to cover all seven questions. The criteria are chosen to filter out metrics that are interesting to know but give nothing to act on.

| Criterion | Weight | 3 points | 0 points |
| --- | --- | --- | --- |
| A. Actionable — the metric triggers a decision | 3 | A change in the number says what to do, and the ADS team's action moves the number | Informational only; the number is driven by factors outside our control |
| Q. Answers a key question — covers one of the seven questions | 3 | The main answer to a question leadership or customers ask | Relates to none of the questions |
| M. Measurable now — data exists today | 2 | Figma Library Analytics, Jira, CI or the Design Portal already provide the data | Needs new research or a manual audit |
| C. Cheap to run — cost of collection | 1 | Automatic once set up | Manual work by several people every quarter |
| R. Reliable signal — signal quality | 2 | Objective, stable, comparable over time, hard to game | Subjective or easy to game |

Score = 3A + 3Q + 2M + C + 2R, max = 33

Rules for forming the top set:

1. Threshold: metrics scoring 27 and above enter the top set.
2. Coverage: each of the seven questions is covered by at least one metric. That is why Consumer satisfaction (25) and Estimated hours saved (20) entered below the threshold.
3. Deduplication: metrics about the same phenomenon are merged into one; the others become its slices. Detach rate in Figma and Customization rate in code are one metric with two sources.
4. Size: 10–15 metrics; a team of a few people will not collect or read more.
5. Re-scoring: the catalog is reviewed every six months. A metric stays in the top set only if it influenced at least one decision during the quarter; decisions are logged in a short decision log next to the dashboard.

For each metric in the top set, an owner, a data source, a cadence and a signal type (leading or lagging) are also defined. These are the criteria the top set is checked against going forward: a metric without an owner or a source does not count as implemented.

## Top 15 metrics

The top set holds 13 metrics scoring 27 and above plus two added by the coverage rule: Consumer satisfaction and Estimated hours saved. Four of them are leadership KPIs, the rest are operational metrics of the team and the service. Three metrics were renamed, two added (N1, N3), the rest taken from the catalog as is or merged.

| # | Metric | Question | Score | Owner | Data source | Cadence | Signal |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Adoption rate (1.1) | ADOPT | 30 | Engineering | Script over Angular templates: ADS selectors and imports per repository; Figma Library Analytics | Monthly | Lagging, KPI |
| 2 | Accessibility pass rate (6.4 + 6.5) | QUALITY | 28 | Engineering | axe on each component page in the Design Portal; manual keyboard and screen-reader check | Every release | Leading, KPI |
| 3 | Breaking change rate (5.5 + 5.11) | GOVERNANCE | 33 | Engineering | Changelog, semver, API diff in CI | Every release | Leading, KPI |
| 4 | Estimated hours saved (N3) | VALUE | 20 | PO | Derived: inserts and usages × average cost of building from scratch | Quarterly | Lagging, KPI |
| 5 | Detach & override rate (2.3 + 2.4) | FIDELITY | 31 | Design + Engineering | Library Analytics (detaches / inserts); lint rule for style overrides of ADS components (::ng-deep, custom classes) | Monthly | Leading |
| 6 | Figma–code parity (4.2 + 6.6 + 4.5) | FIDELITY | 27 | Design + Engineering | Code Connect coverage; script comparing inputs and Figma properties | Monthly | Leading |
| 7 | Token adoption in code (5.2) | FIDELITY | 27 | Engineering | Stylelint rule against hardcoded values | Every release | Leading |
| 8 | Consumer satisfaction (4.9 + 5.1) | SATISFACTION | 25 | PO | CSAT survey, 5–7 questions, designer and engineer segments | Quarterly | Lagging |
| 9 | Lead time for component requests (3.1 + 3.2 + 3.3) | SERVICE | 31 | PO | Jira: from ticket creation to release in npm and Figma; slices by ticket type | Monthly | Leading |
| 10 | Bug resolution time (3.4) | SERVICE | 33 | Engineering | Jira: median from bug report to closure | Monthly | Leading |
| 11 | Bugs per component (5.10) | QUALITY | 28 | Engineering | Jira, Component field | Monthly | Lagging |
| 12 | Component readiness (N1) | QUALITY | 30 | Design + Engineering | Definition of Done checklist on the component page in the Design Portal | Every release | Leading |
| 13 | Version adoption lag (3.5) | GOVERNANCE | 28 | Engineering | Weekly snapshot of ADS versions in repositories' package.json; Library Analytics | Monthly | Lagging |
| 14 | Blast Radius (7.1 + 1.4) | GOVERNANCE | 30 | Design + Engineering | Library Analytics by files and teams; script over Angular templates; product owner map | Weekly | Leading |
| 15 | Library utilization (1.2) | ADOPT | 27 | Design | Library Analytics: components with inserts in 90 days; script: ADS selectors found in templates | Quarterly | Lagging |

### Metric passports

**1. Adoption rate.** Share of UI built from ADS: in code, usages of ADS selectors in Angular templates over all UI components (ADS plus custom) in a repository; in Figma, ADS instances over all top-level instances in product files. Counted per product and overall. Slices: number of teams (1.5), list of custom components (1.8), screen coverage (1.3). Action: a product with a low share gets an adoption plan; recurring custom components go into the ADS backlog.

**2. Accessibility pass rate.** Share of components that pass axe on their Design Portal page in all variants plus a manual keyboard and screen-reader check. For telehealth, WCAG AA is a requirement, not a wish. Action: a component that fails does not get Stable status; violations go into the next sprint.

**3. Breaking change rate.** Number of breaking changes per release and share of major releases per quarter. A breaking change is an API change or a noticeable visual change of a component; slice: upgrade conflicts at consumers (5.11). Action: a breaking change is allowed only with a migration guide and a codemod; a rising rate is a signal to revisit API design.

**4. Estimated hours saved.** Derived KPI: Figma inserts and code usages in the period × average estimate of the time to build an equivalent from scratch, minus ADS team hours. The number is model-based, so it is always reported with its assumptions. Action: justifies the team budget; not used to manage sprints.

**5. Detach & override rate.** In Figma, detaches / inserts per component per month; in code, the share of ADS component usages with style overrides (::ng-deep, !important, custom classes on top of the component). Action: a component with a high rate goes into root-cause research and API or variant rework. This is the main leading signal that a component does not cover a real need.

**6. Figma–code parity.** Share of components whose Figma component is linked to code through Code Connect and whose set of properties matches the inputs in code, names included (6.6, 4.5). Action: a mismatch becomes an alignment ticket before the next release; new components are not published without parity.

**7. Token adoption in code.** Share of style values in ADS and in product repositories taken from tokens rather than hardcoded. Checked by a stylelint rule. Action: violations in ADS block the merge; the trend per product shows where help with token migration is needed.

**8. Consumer satisfaction.** Quarterly survey of designers and engineers: satisfaction with components, documentation, response speed; one open question. Reported separately for the two segments. Action: the three main pains from open answers become next quarter's goals.

**9. Lead time for component requests.** Median time from ticket creation to release in both npm and Figma. Slices: new component (3.1), change (3.2), feedback (3.3). Action: a rising median triggers a review of WIP limits and prioritization; published to consumers as an SLA expectation.

**10. Bug resolution time.** Median time from bug report to closure for ADS bugs. Action: bugs with a high Blast Radius take priority over new features; a rising median signals a lack of support capacity.

**11. Bugs per component.** Number of bugs per component per quarter, normalized by its usage. Action: the top 3 components by bugs get a quality investment: tests, refactoring, visual regression.

**12. Component readiness.** Share of components meeting the Definition of Done: documentation with examples and do/don't (8.1), documentation freshness (8.2), tests (5.3), a11y (6.5), Code Connect, empty and overflow content states, responsiveness and localization (7.x). Published as a status on the component page. Action: a component does not get Stable status until the checklist is complete; the share of Stable is a quarterly goal.

**13. Version adoption lag.** Time from the release of a new major version until 80% of consumers have moved to it; slice: time to zero imports of a deprecated component. Action: a lag is a signal that migration is too expensive: a codemod, a guide or hands-on help is needed.

**14. Blast Radius.** Number of Figma files, Figma projects, repositories and unique stakeholders affected by a change to a component; levels Low, Medium, High. Action: defines the change process, from a fix by the designer alone to an RFC and review by all stakeholders. Details in the separate Blast Radius presentation.

**15. Library utilization.** Share of library components with at least one insert or usage in 90 days. Slice: variant usage frequency (2.6). Action: components and variants unused for two consecutive quarters are deprecation candidates; this lowers maintenance cost.

## Metrics outside the top set

53 metrics did not make the top set: 5 on the waiting list, 23 merged into top-set metrics as their slices, 25 excluded. None is deleted from the catalog: merged metrics remain as dashboard breakdowns, excluded ones can return at the six-month re-scoring.

### Waiting list

Metrics with a sufficient score that are not included yet: either there is no process for them, or they duplicate a top-set signal.

| ID | Metric | Question | Score | Why not now |
| --- | --- | --- | --- | --- |
| N2 | Contribution rate | ADOPT | 27 | Product teams' contributions to ADS; no contribution model yet, include when one exists |
| 2.6 | Variant usage frequency | FIDELITY | 24 | Variant hygiene; a slice of Library utilization |
| 5.4 | Library load time | QUALITY | 24 | A CI guardrail via size-limit, not a KPI |
| 8.5 | Number of support requests | SERVICE | 22 | Useful with topic categorization; needs a single support channel |
| 5.9 | Reduction in bugs (component-related) | VALUE | 20 | Lagging signal, hard to attribute to ADS |

### Merged into top-set metrics

| ID | Metric | Score | Merged into | Role |
| --- | --- | --- | --- | --- |
| 8.1 | Documentation availability | 30 | Component readiness | Main Definition of Done item and main adoption driver |
| 2.4 | Customization rate (code) | 28 | Detach & override rate | Code side of detach |
| 6.5 | WCAG alignment per component | 28 | Accessibility pass rate | Per-component slice |
| 1.4 | Usage coverage across teams per component | 27 | Blast Radius | Input data |
| 1.8 | Number of non-reusable components | 25 | Adoption rate | Denominator; list of candidates for ADS |
| 3.2 | Component update velocity | 25 | Lead time | Slice by ticket type: change |
| 5.1 | Engineer satisfaction score | 25 | Consumer satisfaction | Engineer segment |
| 1.5 | Number of involved teams | 24 | Adoption rate | Slice by team |
| 5.3 | Test coverage level | 24 | Component readiness | Definition of Done item |
| 6.6 | Naming consistency | 24 | Figma–code parity | Name check |
| 1.3 | Component coverage | 22 | Adoption rate | Second way to count, by screens; expensive |
| 1.7 | Team adoption rate | 22 | Adoption rate | Duplicates 1.5 and 1.9 |
| 1.9 | Dependency rate | 22 | Adoption rate | Same signal |
| 3.3 | Feedback incorporation speed | 22 | Lead time | Slice by ticket type: feedback |
| 8.2 | Percentage of outdated components | 22 | Component readiness | Documentation freshness |
| 4.5 | Consistency in variant naming | 21 | Figma–code parity | Property name check |
| 2.1 | Component instances (Figma) | 19 | Adoption rate | Raw counter |
| 2.2 | Component instances (Git) | 19 | Adoption rate | Raw counter |
| 5.11 | Number of detected conflicts | 19 | Breaking change rate | How a breaking change shows up at consumers |
| 7.1 | Scalability for localization | 19 | Component readiness | Definition of Done item |
| 7.2 | Responsive scalability | 19 | Component readiness | Definition of Done item |
| 7.3 | Content overflow handling | 19 | Component readiness | Definition of Done item |
| 7.4 | Content underflow handling | 17 | Component readiness | Definition of Done item |

### Excluded

| ID | Metric | Score | Reason |
| --- | --- | --- | --- |
| 3.7 | Update frequency of the library | 21 | Release frequency says nothing about value |
| 3.8 | Component deprecation rate | 21 | Hygiene; visible through Version adoption lag |
| 8.3 | Component search success rate | 19 | Needs portal analytics; bring back when available |
| 4.4 | Use of auto-layout | 18 | A designer's internal checklist, not a metric |
| 5.8 | File optimization rate | 18 | Too technical, no decision behind the number |
| 2.5 | Parameter override rate (Figma) | 17 | Noisy: overriding text is legitimate |
| 4.3 | Variant coverage | 17 | No objective denominator |
| 2.8 | Component concentration per project | 16 | Unclear which decision it triggers |
| 4.8 | Prototyping integration per component | 16 | Niche case |
| 6.1 | Design consistency score | 16 | Manual product audit; outside the component team's sphere of influence |
| 2.7 | Component Jira mention volume | 14 | Triggers no decisions |
| 3.9 | Reduction in technical debt | 14 | Vague; not attributable |
| 5.6 | Ease of customization | 14 | Derived from detach and override |
| 5.7 | Coverage of functional requirements | 14 | Manual PRD mapping every quarter |
| 8.4 | Average time to find a component | 14 | Duplicates 8.3 |
| 8.6 | Feedback submission rate | 14 | Triggers no decisions |
| 4.1 | Time to design a page in Figma | 13 | A one-off benchmark study, not a metric; can be run once to calibrate hours saved |
| 6.2 | Interface consistency improvement | 13 | Trend of 6.1 |
| 1.6 | User coverage | 12 | No data; needs product analytics tagging |
| 3.6 | Sprint disruption rate | 11 | By its own description too situational |
| 4.7 | Drag-and-drop usability | 11 | Nothing to measure systematically |
| 6.3 | Brand alignment score | 11 | A one-off check when a component is created |
| 9.1 | Cross-functional collaboration improvement | 11 | Subjective, not attributable |
| 9.2 | Manager satisfaction score | 11 | Duplicates Consumer satisfaction |
| 4.6 | Searchability in Assets panel | 10 | A one-off usability test |

Comparison with the current board labels: of the 20 Tier 1 metrics, 13 entered the top set directly or through merging. Seven dropped out: Sprint disruption rate, Design consistency score, Brand alignment score, Variant coverage, Reduction in bugs, Number of non-reusable components as a standalone metric and Feedback incorporation speed as a standalone metric. From Tier 2, Detach rate, Customization rate, Alignment to token system, Reuse rate and Percentage of utilized components (was Tier 4) moved up.

## Rollout roadmap

Eight metrics can be launched within two months on data that already exists in Jira, Figma and the Design Portal; the other seven need code scanning and a survey. The first quarter is baseline only; targets are set after it. Each phase closes with a checkpoint; the next does not start until the previous one produces working numbers.

| Phase | Metrics | Tooling and constraints |
| --- | --- | --- |
| 0. Decisions, weeks 1–2 | — | Approve the criteria and the top 15, assign owners, write down the definitions of breaking change and the adoption denominator, build the "product → owner" map, add Component request and Bug issue types with a Component field in Jira. Checkpoint: criteria and top set approved |
| 1. Data already exists, months 1–2 | Detach & override rate (Figma part), Library utilization, Lead time, Bug resolution time, Bugs per component, Breaking change rate, Accessibility pass rate, Component readiness | Figma Library Analytics: Organization plan, UI and CSV, one year of history, drafts not counted. Jira Control Chart and JQL. Changelog and semver. axe-core via pa11y-ci or Playwright over the Design Portal component page URLs, results in JSON. Readiness checklist as a field in component metadata in the Design Portal. Checkpoint: first dashboard with baseline |
| 2. Code scanning, months 2–4 | Adoption rate, Token adoption, Version adoption lag, Blast Radius, Figma–code parity, Detach & override rate (code part) | Own script on the TypeScript Compiler API and @angular/compiler: traverse templates, count selectors and inputs of ADS components per repository, ADS version from package.json, JSON into storage; the off-the-shelf react-scanner and Omlet work only with React. Stylelint rule against hardcoded values in SCSS. Code Connect coverage = connected ÷ published components. The Library Analytics API is not available on the Organization plan: CSV export from the UI (available with five or more teams) or a script over the files API. Checkpoint: Blast Radius computed for all components |
| 3. People and value, months 4–6 | Consumer satisfaction, Estimated hours saved | Survey in Google Forms or Typeform, 5–7 questions, stable wording for trends. Hours-saved model on phase 1–2 data plus one build-time benchmark. One dashboard with three views and a decision log; first quarterly report to leadership. Checkpoint: first catalog re-scoring at six months |

The cost of the stack is engineering time only: every tool in the table is free or already part of current subscriptions. Rough effort: about one engineering week of setup for phase 1, two to three weeks for phase 2, then about half a day per month of upkeep.

## Confirmed facts, assumptions, open questions and sources

Four facts about the ADS environment were confirmed by the team, one assumption remains; there are four open questions.

Confirmed and assumed:

- Confirmed: Figma Organization plan. Library Analytics is available in the UI and as CSV; there is no analytics REST API, so Detach rate and Library utilization are taken from the UI once a month.
- Confirmed: product code is Angular. react-scanner and Omlet do not apply; Adoption, Token adoption, Blast Radius and Version lag are computed by an in-house script over templates and package.json.
- Confirmed: ADS bugs and requests live in Jira and can be separated by issue type or label.
- Confirmed: there is no Storybook, but the Design Portal has a page per component. Accessibility pass rate and Component readiness are computed from those pages.
- Assumption: every product has a named owner; without it, Blast Radius is counted in files and repositories only, without stakeholders.

Open questions for the team:

- [x] What counts as a breaking change: decided — an API change or a noticeable visual change of a component.
- [ ] Adoption rate denominator: selectors in templates (cheap) or DOM elements in production (more accurate, as at Mews)?
- [ ] Blast Radius thresholds (0–1 / 2–4 / 5+ stakeholders): confirm after the first calculation over 10 components.
- [ ] Average estimate of the time to build a component from scratch for Estimated hours saved: take it from a one-off benchmark (metric 4.1) or from engineers' estimates.
- [ ] Who owns the dashboard and the decision log.

Sources the document relies on, beyond the links in the text:

- ADS metrics catalog: the Metrics Scoring — Tiered View table on the Miro board [ADS Kpi and Metrics](https://miro.com/app/board/uXjVL4OD1xc=/), 67 rows, read in full.
- [zeroheight Design Systems Report 2026](https://report.zeroheight.com/), [Report 2025](https://othr.zeroheight.com/hubfs/zeroheight%20-%20Design%20System%20Report%202025%20-%20release%20version.pdf), [How We Document 2024](https://othr.zeroheight.com/hubfs/Community%20and%20Content/How%20We%20Document/HowWeDocument2024.pdf).
- [Sparkbox Design Systems Survey 2022](https://designsystemssurvey.sparkbox.com/) and [Design System Maturity Model](https://sparkbox.com/foundry/design_system_maturity_model).
- [Knapsack, Design System Insights: ROI](https://hubspot.knapsack.cloud/hubfs/Design-System-Insights-ROI-2021.pdf).
- [Figma Library Analytics: definitions](https://help.figma.com/hc/en-us/articles/360039238353-View-and-explore-library-analytics), [REST API](https://developers.figma.com/docs/rest-api/library-analytics-intro/), [Code Connect](https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect).
- [react-scanner](https://github.com/moroshko/react-scanner), [Omlet, open source since April 2026, React only](https://omlet.dev/blog/omlet-open-source/), [Storybook accessibility testing](https://storybook.js.org/docs/writing-tests/accessibility-testing), [Jira Control Chart](https://support.atlassian.com/jira-software-cloud/docs/view-and-understand-the-control-chart/).
- Nathan Curtis, [Versioning Design Systems](https://nathanacurtis.substack.com/p/versioning-design-systems-48cceb5ace4d); Dan Mall, [In Search of a Better Design System Metric than Adoption](https://v5.danmall.com/posts/in-search-of-a-better-design-system-metric-than-adoption/).

Articles on Medium and uxdesign.cc were not reachable from the research environment; facts from them (Shopify Polaris, Spotify) are confirmed only through search excerpts.

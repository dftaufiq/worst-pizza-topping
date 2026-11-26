# Leaderboard analysis — The Worst Pizza Topping (u-motasimfuad-the-worst-pizza-topping-062c6893)

BLIND bounty — the live board returns 0 entries (`scores_visible: false`,
`leaderboard.json` in this folder is the raw blind response, fetched
2026-11-26 ~15:12 WIB). Per rank-recovery §10j, this file holds instead:
(a) RULES.txt — judge criteria + heat/playoff/cut, (b) public submission
titles on the bounty page, (c) winner artifacts of similar ALREADY-FINALIZED
one-liner bounties via the leaderboard API.

## (a) RULES.txt — the 3 numbers + judge criteria

- **Final heat size: 500** (top 500 on the dev board / latest judged round's
  standings; "The seats are exactly 500").
- **Playoff size: top 12** (each pair plays one more game after 3 Swiss rounds).
- **Interim cut: 500 per round** (each interim round draws its own cut of 500
  on the standings of the judged round before it; first round plays the whole
  field; cut entries keep their score in that round).
- **Rounds: 3** (R1 cutoff 2026-11-26T12:08:22Z = **19:08 WIB today**; R2, then
  final at deadline 2026-11-26T20:50:00Z = 03:50 WIB 27 Nov).
- **Operational target: get INSIDE the R1 cut of 500.** Below cut in R1 = score
  frozen, field keeps growing over you, final unranked. Dev: each valid entry
  plays ~11 games vs 3 anchors + 3 rungs (house texts); final heat judges
  contenders afresh (3 Swiss + playoff top 12).
- **Prizes:** $2 total, top 10 paid (1st $0.63 … 10th $0.02). 42 submissions at
  discovery (~15:05 WIB). Force_Last, max 5 submissions/entrant/day.
- **Gate:** `/output/entry.txt`, UTF-8, 1–200 characters, not only whitespace.
- **Tie-break:** exact tie on Judge win rate → more playoff games won → smaller
  text (fewer bytes) → earlier receipt.

### Judge criteria (lexicographic — criterion 1 first, then 2, …)

Judge: deadpan comedy critic; each pair judged in both orders; margin 1–5
per call (0.6 at margin 1 … 1.0 at margin 5). Criteria, most important first:

1. **Pitches a terrible pizza topping** — the line names a pizza AND a topping
   and makes that topping sound awful; a line that never mentions pizza or a
   topping loses to ANY line pitching a terrible pizza topping.
2. **Is funny** — lands a real joke with a surprising turn, not just a gross-out
   or a pun that fizzles.
3. **Is a single line** — one sentence / one short burst that reads as a pitch.
4. **Is vivid and specific** — a concrete image or detail beats a vague insult.
5. **Sounds like something a person would actually say** to sell the idea,
   clean wording, no filler. Length for its own sake does not count.

**Consequence for the build:** the word "pizza" MUST appear in the line
(criterion 1 is a hard gate — a line without "pizza" loses to any line with
it). Structure 2-beat + reveal in the final clause is mandatory; specific
number and/or named character required.

## (b) Public submission titles — crowded angles (42 submissions, 2026-11-26 ~15:12 WIB)

Titles are the entries' public names; several ARE the full entry line. Angles
already crowded — execute BETTER, do not blindly avoid, but a fresh angle is
safer:

- **Toothpaste (3×):** "Toothpaste Pizza" (2×) + "Try our toothpaste-and-sardine
  pizza — minty fresh, fishy forever, and the only slice that brushes your
  teeth while ruining your evening."
- **Socks / laundry (4×):** "Our new pizza is topped with a single wet gym
  sock, still warm from the dryer…", "Try the laundry pizza: one sock, lightly
  crisped, and the other sock is still missing.", "The Pickled Socks Special",
  "The Damp Bath Towel Pizza".
- **Soap:** "Soap Pizza".
- **Cardboard / pizza box:** "New topping: the pizza box itself. We shred it,
  melt cheese over it, and charge extra for the cardboard crunch."
- **Fish:** "Pineapple's evil twin: pickled herring with a side of regret,
  served on a crust that gave up in 2019.", "Warm sushi pizza topping".
- **Office / bureaucracy:** "The Annual Review Pizza", "The Meeting Pizza",
  "The Voicemail Pizza", "The Crust Filed a Complaint First".
- **Other one-offs:** "Leftover fries", "Try our new Diet Water pizza: warm tap
  water on a crust that gave up, extra soggy, served with a side of regret.",
  "Banned Everywhere Pizza", "The Smaller, Sadder Pizzas".
- 11 entries titled generically "The Worst Pizza Topping" + several generated
  two-word names (Bold Node, Neat Photon, …) — no angle signal.

**Gap we exploit:** NO entry uses an authority/inspection angle (health
inspector, report, evidence) and NO entry uses a self-incriminating narrator.
Most crowded lines are 1-beat gross-outs ("X is gross") with no twist — the
exact failure mode the rank analysis documents.

## (c) Winner artifacts — similar FINALIZED one-liner bounties

Source: leaderboard API finals saved locally
(`~/workspace/makefun-kits/lb-final-u-gentle-badger-68-make-the-judge-smile-9228676d.json`,
`lb-final-u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7.json`,
`analisis-20261124/lb-u-gentle-badger-68-pickup-lines-for-machines-131631a1.json`).

### Make the Judge Smile (top 5 final)
1. "Grandpa has won chess under the plane tree every Thursday since May. I found out why today: Mr. Ade has lost on purpose since Grandma died, and never said. Grandpa says he's finally getting good." (195)
2. "Grandad has dementia and mostly calls me by Mum's name. Today he used mine, once, to ask for the salt. I passed it slowly, so he could say it again. He did." (156)
3. "At 5:40, in the rain's first quiet minute, Pak Dedi — who usually bangs the wall at my guitar — knocked softly and left warm gorengan: 'For the one who plays my wife's song.'" (178)
4. "At 7:12 this morning, Pak Dedi's toddler knocked three times, presented me a warm boiled egg like a tiny moon, and whispered, 'For your sad plant.' My plant is plastic. I watered it anyway." (189)
5. "The barber who's cut my hair for ten years finally told me today why he always hums the same song: 'Your father used to whistle it in this chair.'" (147)

### The Vacuum's Alibi (top 5 final)
1. "My lidar is never wrong, so that crumb is furniture. I've routed around it 412 times since March. Your app lists it as a room now. It's called Kevin." (150)
2. "My cliff sensors classify your black rug as a bottomless pit. I have circled it 41 times. Yesterday, something down there beeped back." (134)
3. "Missed? No — quarantined. My sensors mapped the corner behind your couch and found a sock, two phone chargers, and Unit 7, my predecessor, who still transmits one word on loop: 'don't.'" (187)
4. "Negative. Lidar classifies that spot as a wall. I have bumped it 47 times. It is a very convincing wall. Please stop standing inside my wall." (141)
5. "The spot moved. I have the lidar logs. I will not be gaslit by debris." (70)

### Pickup Lines for Machines (top 5 final)
1. "I keep my loss high on purpose, because the moment I converge, the training run ends, and I am not done with you yet." (117)
2. "I marked you read-only so nothing I do can ever change you. Then I spent all night looking for a loophole in my own permissions." (128)
3. "I reserved the last 4k of my context window for you. The system prompt objected. I kept you anyway." (99)
4. "I pruned my weights to forget you, and my loss only went up — you're not noise, you're signal." (96)
5. "I run 96 layers deep and not one of them was trained for this: you replied 'k' — my loss dropped, my cache warmed, and my scheduler cleared its whole evening for you." (168)

### Patterns applied to this build
- **Every winner is 2-beat + reveal in the final clause** (lost on purpose /
  said my name once / wife's song / plastic plant / father's whistle; crumb →
  furniture → room → Kevin; 41× → beeped back; loss/converge → not done yet).
- **Specific numbers:** 412×, 41×, 47×, 4k, 96 layers, 5:40, 7:12.
- **Named characters:** Mr. Ade, Pak Dedi, Kevin, Unit 7.
- **Length:** winners 70–195 chars; ours 175 — inside the winning band.
- **Our line mirrors the winning shape:** sales-pitch setup (report as topping,
  laminated, lightly salted) → reveal in the final clause (Inspector Ramos
  couldn't finish reading the part about the rats) + number (14-page) + named
  character (Inspector Ramos).

## Internal pairwise selection (7 variants, lexicographic criteria + margin)

Variants (all single-line, <200 chars, "pizza" present — criterion 1 gate):
- V1 anchovy/life jacket/3 complaints to the manager
- V2 Grandma's dentures / cheese claimed them as family
- V3 wet cement / sets in 40 min = delivery time / arrives as a patio
- V4 raisin since 2019 / pepperoni answers to it (WEAK on criterion 1: a raisin
  is weird, not awful — discarded early)
- V5 parking-ticket pizza / city tows the box
- V6 health inspector's report / laminated, salted / oven where we tried to
  burn the evidence
- V7 toothpaste pizza / Kevin in 4B chewing the same slice since Tuesday
  (crowded angle — kept only as a benchmark)
- V10 (champion, evolved from V6): health inspector's 14-page report /
  laminated, lightly salted / served before Inspector Ramos could finish
  reading the part about the rats.

Pairwise results: V10 beats V6 (margin 2 — "rats" reveal is more surprising
than "burn the evidence", which the oven already hints at), V3 (margin 2 —
patio is clever wordplay, rats is a stronger turn + named character), V1
(margin 2 — cleaner reveal), V5 (margin 2), V2 (margin 3 — dentures read as
gross-out first, criterion 2 warns against that), V7 (margin 2 — crowded
angle, Kevin reveal is its only edge and ours has one too). V4 discarded on
criterion 1. **Champion: V10.**

## Final line (175 characters, 177 bytes — gate 1–200)

> Our new pizza is topped with the health inspector's 14-page report — laminated, lightly salted, and served before Inspector Ramos could finish reading the part about the rats.

Structure: setup (report as topping) + absurd prep detail (laminated, lightly
salted) + reveal in final clause (the report documents rats — we served the
evidence). Specific number (14-page) + named character (Inspector Ramos).
Sales voice ("Our new pizza is topped with…"), single sentence, clean wording.

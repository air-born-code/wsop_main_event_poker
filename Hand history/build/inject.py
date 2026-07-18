#!/usr/bin/env python3
"""Inject Hand Lab (replayers + aggression gym) into the WSOP study halls and build master CSVs."""
import csv, io, os, re, sys

SP = os.path.dirname(os.path.abspath(__file__))
REPO = "/Users/stephenbrowne/Desktop/poker_wsop"

css = open(f"{SP}/hl.css").read()
engine = open(f"{SP}/hl_engine.js").read()
data = {n: open(f"{SP}/p{n}.js").read() for n in (1, 2, 3, 4)}

def lead(hid, txt):
    return f'\n<h3>Table time — live hand</h3>\n<p>{txt}</p>\n<div class="handlab" data-hand="{hid}"></div>'

INDEX = """
<h3>The casebook — every documented hand in the program</h3>
<p>The master database (v3) holds 34 documented spots from Adrián Mateos and Leo Margets. The interactive ones are placed where their lesson lives — Phase II links jump directly; other phases open in their own study hall. Seven more power the <a href="wsop-phase3-study.html#d55">Aggression Gym on Phase III Day 55</a>.</p>
<table class="hl-index">
<tr><th>Hand</th><th>Spot</th><th>Lesson home</th></tr>
<tr><td class="mono">AM-005</td><td>Three-street thin value in a soft field</td><td><a href="wsop-phase1-study.html#d10">Phase I · Day 10</a></td></tr>
<tr><td class="mono">LM-012</td><td>Bluff-catch twice, fold the polarized river</td><td><a href="wsop-phase1-study.html#d11">Phase I · Day 11</a></td></tr>
<tr><td class="mono">LM-019</td><td>Defend once, believe the second barrel</td><td><a href="wsop-phase1-study.html#d17">Phase I · Day 17</a></td></tr>
<tr><td class="mono">AM-009</td><td>Protection c-bet → polarized river sizing</td><td><a href="wsop-phase1-study.html#d19">Phase I · Day 19</a></td></tr>
<tr><td class="mono">LM-011</td><td>Delayed aggression in a 3-bet pot</td><td><a href="#d22">Day 22</a></td></tr>
<tr><td class="mono">AM-010</td><td>Bottom-of-range river bluff, repping straights</td><td><a href="#d25">Day 25</a></td></tr>
<tr><td class="mono">AM-003</td><td>Squeezed pot, disciplined give-up</td><td><a href="#d26">Day 26</a></td></tr>
<tr><td class="mono">AM-002</td><td>Blind-vs-blind thin value vs a passive pro</td><td><a href="#d29">Day 29</a></td></tr>
<tr><td class="mono">AM-001</td><td>Second pair OOP, pot control</td><td><a href="#d30">Day 30</a></td></tr>
<tr><td class="mono">AM-008</td><td>Oversized-bet read, planned bluff-catch</td><td><a href="#d31">Day 31</a></td></tr>
<tr><td class="mono">LM-010</td><td>C-bet, then fold to the big turn lead</td><td><a href="#d31">Day 31</a></td></tr>
<tr><td class="mono">AM-006</td><td>The kings fold in a 4-bet pot</td><td><a href="#d33">Day 33</a></td></tr>
<tr><td class="mono">AM-004</td><td>Updating a live read mid-hand</td><td><a href="#d35">Day 35</a></td></tr>
<tr><td class="mono">SUP-001</td><td>Behavior-driven river jam</td><td><a href="#d37">Day 37</a></td></tr>
<tr><td class="mono">LM-003</td><td>AJo call-off vs a short-stack jam</td><td><a href="wsop-phase3-study.html#d46">Phase III · Day 46</a></td></tr>
<tr><td class="mono">LM-014</td><td>Back-jam over the squeeze with 77</td><td><a href="wsop-phase3-study.html#d46">Phase III · Day 46</a></td></tr>
<tr><td class="mono">LM-004</td><td>QQ vs jam — no ICM fear</td><td><a href="wsop-phase3-study.html#d48">Phase III · Day 48</a></td></tr>
<tr><td class="mono">LM-013</td><td>AQ call-off that meets kings — and holds</td><td><a href="wsop-phase3-study.html#d48">Phase III · Day 48</a></td></tr>
<tr><td class="mono">LM-002</td><td>Folding 99 to a 3x-pot overbet</td><td><a href="wsop-phase3-study.html#d51">Phase III · Day 51</a></td></tr>
<tr><td class="mono">LM-005</td><td>JJ vs AK — the flip for the chip lead</td><td><a href="wsop-phase3-study.html#d52">Phase III · Day 52</a></td></tr>
<tr><td class="mono">LM-018</td><td>Cold 4-bet jam under ICM</td><td><a href="wsop-phase3-study.html#d52">Phase III · Day 52</a></td></tr>
<tr><td class="mono">LM-006</td><td>Ace-king released vs a multiway lead</td><td><a href="wsop-phase3-study.html#d53">Phase III · Day 53</a></td></tr>
<tr><td class="mono">LM-007</td><td>Final-table race, played right</td><td><a href="wsop-phase3-study.html#d53">Phase III · Day 53</a></td></tr>
<tr><td class="mono">GYM</td><td>Aggression Gym — 8 attack-and-exit drills (LM-008/009/015/016/017/020/021, AM-010)</td><td><a href="wsop-phase3-study.html#d55">Phase III · Day 55</a></td></tr>
<tr><td class="mono">LM-001</td><td>Bubble stack posture (stage brief)</td><td><a href="wsop-phase4-study.html#d64">Phase IV · Day 64</a></td></tr>
<tr><td class="mono">AM-007</td><td>Aces cracked — process vs outcome</td><td><a href="wsop-phase4-study.html#d68">Phase IV · Day 68</a></td></tr>
<tr><td class="mono">BHS-001</td><td>Full house, checked thrice — bluff-catching the aggressor</td><td><a href="wsop-phase4-study.html#d74">Phase IV · Day 74</a></td></tr>
<tr><td class="mono">BHS-002</td><td>The invisible set — inducing the covering jam</td><td><a href="wsop-phase4-study.html#d74">Phase IV · Day 74</a></td></tr>
</table>
<p>Hands not listed (LM-008, LM-009, LM-015, LM-016, LM-017, LM-020, LM-021) live inside the Aggression Gym rather than as standalone replayers. Full sourcing for every hand is in <span class="mono">Hand history/wsop_hands_master.csv</span>.</p>"""

BRIEF = """
<div class="hl-brief"><span class="hl-bk">Field brief — LM-001 · Leo Margets, 2025 Main Event bubble</span>
Margets reaches the direct bubble — 1,476 players, 1,465 paid, blinds 4,000/8,000 — with 383,000 (~48bb): comfortable, not invulnerable. The read that matters isn't on one opponent but on the whole room: <b>field-wide fear is itself exploitable information.</b> Her line through it is the script above in warlord mode — pressure the medium stacks selectively, leave the desperate shorts alone, and never let a comfortable stack become reckless simply because everyone else is scared. <em>(Source: pokerfuse bubble recap — see the master hand database.)</em></div>"""

GYM_BLOCK = """
<h3>Table time — the Aggression Gym</h3>
<p>Re-acceleration is a skill with two halves: the attack, and the exit. Eight documented spots from the Margets and Mateos runs, each drilled both ways. This is the interactive version of the aggression-drills database (v3).</p>
<div class="aggro-gym"></div>"""

INSERTS = {
    1: [
        (10, lead("AM-005", "The lesson above set the river value thresholds. Now sit in the seat: Day 1 of the 2024 Main Event, a soft table, and three streets of sizing decisions. Match the line Mateos actually took.")),
        (11, lead("LM-012", "Bluff-catching is street-by-street re-evaluation, never a promise. Margets calls the champion twice — and shows you why the third street is a different decision entirely.")),
        (17, lead("LM-019", "Facing barrels is range-reading under fire. One overcard you can call; the second barrel on the card that crowns his range is information — believe it, like Margets did at 14 left.")),
        (19, lead("AM-009", "The solver wants an overbet on this river; Mateos chooses 6,200 against an unknown — play the whole sizing tree and see why both answers matter.")),
    ],
    2: [
        (22, lead("LM-011", "Delayed c-bets and probes are about keeping the story credible until the board turns your way. Margets 3-bets, then goes silent for two streets — on purpose.")),
        (25, lead("AM-010", "Repping a range is exactly this: arrive at the river with nothing, check what your line credibly holds, and size like you mean it. Mateos with the bottom of his range.")),
        (26, lead("AM-003", "The population read from the lesson — live fields under-bluff rivers and arrive stronger than theory — is exactly what saves Mateos two bets here.")),
        (29, lead("AM-002", "Thin value mastery, live from Day 1 of the Main Event: three streets with one pair against a passive professional, and not a chip left behind.")),
        (30, lead("AM-001", "The check-call line in the wild: second pair, out of position, 200bb deep. Watch how small the pot stays — that's the whole point.")),
        (31, lead("AM-008", "An unusual sizing is information. Mateos reads it, prices it, calls twice anyway — and buys a read worth more than the pot.") +
             lead("LM-010", "And the донк-lead version: when the unusual move is a sudden big turn lead, the exit is the skill. Margets folds the best hand — and is still right.").replace("донк", "donk")),
        (33, lead("AM-006", "The 4-bet tree from the lesson, played for tournament life on Day 5: kings, a four-bet pot 250bb deep, and the fold that made the news.")),
        (35, lead("AM-004", "Live tells are provisional data. Watch the first read form — and then watch what a fast, confident barrel does to it.")),
        (37, lead("SUP-001", "A river raise tree unlocked by a live read: Margets turns a pair of aces with no kicker into the most credible jam at the table.")),
        (39, INDEX),
    ],
    3: [
        (46, lead("LM-003", "Reshove-and-call-off charts, live: a ~5bb jam into the top of your calling range at 20 left. The math says snap — can you?") +
             lead("LM-014", "And the reshove side of the same chart: sevens at 20bb, a squeeze in front, dead money in the middle. The back-jam is the point of the whole range.")),
        (48, lead("LM-004", "Push-fold discipline includes calling: queens against a 14bb jam with the final table looming. Geometry first, fear second.") +
             lead("LM-013", "Then the harder version: AQ against a 12bb jam that turns out to be kings — and why the call was right before the ace ever landed.")),
        (51, lead("LM-002", "Pay-jump logic under maximum pressure: pocket nines, a 3x-pot overbet from the eventual champion, and the fastest good fold of Day 7.")),
        (52, lead("LM-005", "The warlord's seat is won in pots like this: a 33bb jam, jacks, and the chip lead on the line at 16 left.") +
             lead("LM-018", "And the warlord's weapon: the cold 4-bet jam. AK into an open and a 3-bet, seventeen left, everyone's calling range crushed by the ladder.")),
        (53, lead("LM-006", "Middle-stack discipline at two tables: ace-king, a champion's lead into two players, and the fold that keeps the run alive.") +
             lead("LM-007", "And where discipline meets destiny: the final table itself, ATs versus the limp-attack jam — played right, ended by the river.")),
        (55, GYM_BLOCK),
    ],
    4: [
        (64, BRIEF),
        (68, lead("AM-007", "The hand tilt armor was built for: aces, a perfect preflop war, a six-million-chip pot — and a runner-runner river. Play it, lose it, run the reset script.")),
        (74, lead("BHS-001", "Image and meta-game, applied: against the table's most aggressive player, Mateos' image weapon is looking beatable. Full house, checked three times.") +
             lead("BHS-002", "The companion hand — same opponent, same principle: the invisible set that turned a hyper-aggressor's momentum into a covering jam and a double-up.")),
    ],
}

def insert_day(html, day, block, fname):
    m = re.search(r"L\.push\(\{d:%d," % day, html)
    if not m:
        sys.exit(f"FAIL: day {day} not found in {fname}")
    b = html.find("body:`", m.end())
    if b < 0:
        sys.exit(f"FAIL: body template for day {day} not found in {fname}")
    close = html.find("`", b + 6)
    if close < 0:
        sys.exit(f"FAIL: body close for day {day} not found in {fname}")
    if "`" in block or "${" in block:
        sys.exit(f"FAIL: unsafe chars in block for day {day}")
    return html[:close] + block + "\n" + html[close:]

for n in (1, 2, 3, 4):
    path = f"{REPO}/wsop-phase{n}-study.html"
    html = open(path).read()
    if "HAND LAB" in html:
        sys.exit(f"FAIL: {path} already injected")
    # 1. CSS into first style block
    i = html.find("</style>")
    assert i > 0
    html = html[:i] + css + html[i:]
    # 2. renderAll hook
    pat = "  renderQuizStart();\n  renderNav();\n}"
    if html.count(pat) != 1:
        sys.exit(f"FAIL: renderAll pattern x{html.count(pat)} in {path}")
    html = html.replace(pat, "  renderQuizStart();\n  renderNav();\n  if(window.hlInit)window.hlInit();\n}")
    # 3. day-body inserts
    for day, block in INSERTS[n]:
        html = insert_day(html, day, block, path)
    # 4. script block at end
    html = html.rstrip() + "\n<script>\n" + data[n] + "\n" + engine + "</script>\n"
    open(path, "w").write(html)
    print(f"injected phase {n}: {len(INSERTS[n])} day blocks")

# ---------- master CSVs ----------
PLACE = {  # Hand_ID -> (phase, day, file, integration)
 "AM-001":("II",30,"wsop-phase2-study.html","Interactive replayer"),
 "AM-002":("II",29,"wsop-phase2-study.html","Interactive replayer"),
 "AM-003":("II",26,"wsop-phase2-study.html","Interactive replayer"),
 "AM-004":("II",35,"wsop-phase2-study.html","Interactive replayer"),
 "AM-005":("I",10,"wsop-phase1-study.html","Interactive replayer"),
 "AM-006":("II",33,"wsop-phase2-study.html","Interactive replayer"),
 "AM-007":("IV",68,"wsop-phase4-study.html","Interactive replayer"),
 "AM-008":("II",31,"wsop-phase2-study.html","Interactive replayer"),
 "AM-009":("I",19,"wsop-phase1-study.html","Interactive replayer"),
 "AM-010":("II",25,"wsop-phase2-study.html","Interactive replayer + Gym drill D-07"),
 "LM-001":("IV",64,"wsop-phase4-study.html","Stage brief"),
 "LM-002":("III",51,"wsop-phase3-study.html","Interactive replayer"),
 "LM-003":("III",46,"wsop-phase3-study.html","Interactive replayer"),
 "LM-004":("III",48,"wsop-phase3-study.html","Interactive replayer"),
 "LM-005":("III",52,"wsop-phase3-study.html","Interactive replayer"),
 "LM-006":("III",53,"wsop-phase3-study.html","Interactive replayer"),
 "LM-007":("III",53,"wsop-phase3-study.html","Interactive replayer"),
 "LM-008":("III",55,"wsop-phase3-study.html","Aggression Gym drill D-05"),
 "LM-009":("III",55,"wsop-phase3-study.html","Aggression Gym drill D-01"),
 "LM-010":("II",31,"wsop-phase2-study.html","Interactive replayer"),
 "LM-011":("II",22,"wsop-phase2-study.html","Interactive replayer"),
 "LM-012":("I",11,"wsop-phase1-study.html","Interactive replayer"),
 "LM-013":("III",48,"wsop-phase3-study.html","Interactive replayer"),
 "LM-014":("III",46,"wsop-phase3-study.html","Interactive replayer"),
 "LM-015":("III",55,"wsop-phase3-study.html","Aggression Gym drill D-02"),
 "LM-016":("III",55,"wsop-phase3-study.html","Aggression Gym drill D-03"),
 "LM-017":("III",55,"wsop-phase3-study.html","Aggression Gym drill D-04"),
 "LM-018":("III",52,"wsop-phase3-study.html","Interactive replayer"),
 "LM-019":("I",17,"wsop-phase1-study.html","Interactive replayer"),
 "LM-020":("III",55,"wsop-phase3-study.html","Aggression Gym drill D-06"),
 "LM-021":("III",55,"wsop-phase3-study.html","Aggression Gym drill D-08"),
 "BHS-001":("IV",74,"wsop-phase4-study.html","Interactive replayer"),
 "BHS-002":("IV",74,"wsop-phase4-study.html","Interactive replayer"),
 "SUP-001":("II",37,"wsop-phase2-study.html","Interactive replayer"),
}
with open(f"{REPO}/Hand history/wsop_large_field_master_hands_v3.csv", encoding="utf-8-sig") as f:
    rows = [r for r in csv.reader(f) if any(c.strip() for c in r)]
hdr = rows[0] + ["Study_Phase", "Study_Day", "Study_File", "Integration"]
out = [hdr]
for r in rows[1:]:
    p = PLACE.get(r[0], ("", "", "", "Not yet integrated"))
    out.append(r + [str(x) for x in p])
with open(f"{REPO}/Hand history/wsop_hands_master.csv", "w", newline="", encoding="utf-8") as f:
    csv.writer(f).writerows(out)
print(f"wrote wsop_hands_master.csv ({len(out)-1} hands)")

with open(f"{REPO}/Hand history/wsop_aggression_drills_v3.csv", encoding="utf-8-sig") as f:
    drows = [r for r in csv.reader(f) if any(c.strip() for c in r)]
dhdr = drows[0] + ["Integration"]
dout = [dhdr] + [r + ["Aggression Gym — Phase III Day 55 (wsop-phase3-study.html#d55)"] for r in drows[1:]]
with open(f"{REPO}/Hand history/wsop_drills_master.csv", "w", newline="", encoding="utf-8") as f:
    csv.writer(f).writerows(dout)
print(f"wrote wsop_drills_master.csv ({len(dout)-1} drills)")
print("ALL OK")

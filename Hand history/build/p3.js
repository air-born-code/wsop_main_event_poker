/* ---------- HAND LAB DATA — Phase III ---------- */
window.HL_HANDS={
"LM-003":{
 id:"LM-003",title:"The call-off you owe your range",who:"Leo Margets · 2025 Main Event · Day 8, 20 left",
 rec:0,recNote:"",
 setup:"Day 8, twenty players left, blinds 400K/800K with a big blind ante — every elimination a six-figure pay jump. Margets opens the hijack; Chris Dombrowski, down to about 5bb in the big blind, moves all-in.",
 heroName:"Margets",heroPos:"HJ",heroStack:"~45,000,000",heroCards:["Ac","Jd"],
 blinds:"400K/800K (800K ante)",
 vill:[{name:"Dombrowski",pos:"BB",stack:"4,100,000 (~5bb)"}],
 src:[["https://www.pokernews.com/tours/wsop/2025-wsop/event-81-10000-wsop-main-event/day8/?page=10","PokerNews Day 8 live report"]],
 steps:[
  {t:"deal"},
  {t:"act",who:"H",txt:"opens to 1,600,000",pot:3600000},
  {t:"act",who:0,txt:"moves all-in — 4,100,000",pot:6900000,wait:1400},
  {t:"ask",txt:"A ~5bb big-blind jam over your hijack open. AJo, 20 players left, pay jumps everywhere. 2,500,000 more to call into a 6,900,000 pot — you need barely 27% equity.",
   opts:[
    {l:"Call — AJo crushes a correct short-stack jam range",v:"pro",e:"Margets calls instantly. A 5bb BB shove over a hijack open is — correctly — extremely wide: any ace, any pair, broadways, suited junk. AJo dominates a huge slice of that range and needs only ~27% at this price. ICM shaves margins, but nowhere near this far."},
    {l:"Fold — pay jumps first, jams have you dominated",v:"bad",e:"The classic deep-run overfold. If a 5bb stack only jammed hands that dominate AJ, it would have blinded out long ago. Folding the top of your calling range donates the shove's entire fold equity — the exact leak that keeps short stacks alive."},
    {l:"Fold — never call off with ace-jack offsuit",v:"bad",e:"A full-ring cash-game rule, not a tournament endgame one. Hand categories mean nothing without stack geometry: against this stack and position, AJo is near the top of your continuing range."}],
   did:{txt:"calls 2,500,000",pot:9400000}},
  {t:"reveal",who:0,cards:["Kc","Jc"]},
  {t:"street",name:"FLOP",cards:["Ah","7h","6d"],pot:9400000},
  {t:"act",who:"H",txt:"flops top pair",wait:1000},
  {t:"street",name:"TURN",cards:["7c"],pot:9400000},
  {t:"act",who:0,txt:"drawing dead",wait:900},
  {t:"street",name:"RIVER",cards:["5h"],pot:9400000},
  {t:"end",res:"K♣J♣ was dominated and stayed dominated — the A♥7♥6♦ flop sealed it before the turn made it official. Dombrowski out in 20th.",
   lesson:"Do not overfold strong offsuit aces against correctly wide short-stack jams. The risk premium at 20 left is real but small — the money lost folding hands this far ahead of the jamming range is far bigger."}
 ]},

"LM-014":{
 id:"LM-014",title:"Back-jam over the squeeze",who:"Leo Margets · 2025 Main Event · Day 7, 40 left",
 rec:0,recNote:"",
 setup:"Day 7, forty players left, blinds 150K/300K. Guerra opens the cutoff, Margets flats pocket sevens in the small blind at 20bb — and Mizrachi squeezes to 2,500,000 from the big blind. Guerra lets it go. Now the real decision.",
 heroName:"Margets",heroPos:"SB",heroStack:"6,050,000 (20bb)",heroCards:["7s","7d"],
 blinds:"150K/300K (300K ante)",
 vill:[{name:"Guerra",pos:"CO",stack:"~12,000,000"},{name:"Mizrachi",pos:"BB",stack:"covers"}],
 src:[["https://www.pokernews.com/tours/wsop/2025-wsop/event-81-10000-wsop-main-event/day7/?highlights=1&page=5&rsort=1","PokerNews Day 7 live report"]],
 steps:[
  {t:"deal"},
  {t:"act",who:0,txt:"opens to 600,000",pot:1350000},
  {t:"act",who:"H",txt:"calls 450,000 more",pot:1800000},
  {t:"act",who:1,txt:"squeezes to 2,500,000",pot:4300000,wait:1300},
  {t:"act",who:0,txt:"folds",fold:true,wait:900},
  {t:"ask",txt:"Mizrachi's squeeze, Guerra's dead 600,000 in the middle, and your sevens at 20bb. Flat-calling is barely an option — this is jam or fold.",
   opts:[
    {l:"Jam 6,050,000 — the dead money makes it",v:"pro",e:"Margets back-jams. The squeeze play targets exactly this configuration — which means the squeezer's range is wide, and the pot already holds the opener's dead 600K plus blinds and ante. A medium pair at 20bb converts all that dead money into fold equity plus a race at worst. Mizrachi calls… with A♠10♠ — exactly the flip the jam priced in."},
    {l:"Fold — sevens can't stand a call",v:"bad",e:"Folding hands 4,300,000 to the squeeze without a fight and leaves you at 18bb having flashed weakness. Aggressive squeezers are the *target* here, not the threat: their range is built on your expected fold."},
    {l:"Call 1,900,000 more — see a flop cheap",v:"bad",e:"The worst geometry in poker: a fifth of your stack in preflop, out of position, set-mining with the squeeze's leverage still above you. At 20bb the sevens' value is in the jam, not the flop."}],
   did:{txt:"jams 6,050,000",pot:10350000}},
  {t:"act",who:1,txt:"calls",pot:13000000,wait:1000},
  {t:"reveal",who:1,cards:["As","Ts"]},
  {t:"street",name:"FLOP",cards:["7c","Kd","Jh"],pot:13000000},
  {t:"act",who:"H",txt:"flops the set!",wait:1100},
  {t:"street",name:"TURN",cards:["Th"],pot:13000000},
  {t:"act",who:1,txt:"pairs the ten — still behind",wait:1000},
  {t:"street",name:"RIVER",cards:["9d"],pot:13000000},
  {t:"end",res:"The set holds and Margets doubles through Mizrachi — from 20bb back to a real stack, built on the opener's dead money and a squeezer's wide range.",
   lesson:"Choose aggressive squeezers as targets. A medium pair can back-jam at 20bb when the dead money is substantial — the squeeze's own math becomes your fold equity."}
 ]},

"LM-004":{
 id:"LM-004",title:"Queens don't flinch",who:"Leo Margets · 2025 Main Event · Day 8, 19 left",
 rec:0,recNote:"",
 setup:"Minutes after eliminating Dombrowski: 19 left, blinds 400K/800K with the ante. Margets opens queens; Diego Ponce moves in for 14bb.",
 heroName:"Margets",heroPos:"CO",heroStack:"~50,000,000",heroCards:["Qs","Qc"],
 blinds:"400K/800K (800K ante)",
 vill:[{name:"Ponce",pos:"SB",stack:"11,200,000 (14bb)"}],
 src:[["https://www.pokernews.com/tours/wsop/2025-wsop/event-81-10000-wsop-main-event/day8/?page=10","PokerNews Day 8 live report"]],
 steps:[
  {t:"deal"},
  {t:"act",who:"H",txt:"raises to 1,600,000",pot:3600000},
  {t:"act",who:0,txt:"jams 11,200,000",pot:14000000,wait:1400},
  {t:"ask",txt:"Ponce's whole 14bb goes in. Queens, 19 players left, every elimination another ladder step. Is there any fold here?",
   opts:[
    {l:"Call — the geometry is clear, queens play",v:"pro",e:"Margets calls. A 14bb jam over a cutoff open includes every pair, big aces, and plenty of suited broadway — queens are miles ahead of that range. The recap's own lesson: when stack geometry is clear, premium hands must not become victims of excessive ICM fear."},
    {l:"Fold — protect the stack near the final table",v:"bad",e:"ICM fear taken to self-harm. The risk premium makes marginal hands folds, not premium pairs — folding queens surrenders more equity than any cooler could cost."},
    {l:"Call, but only because you cover him",v:"ok",e:"Right action, incomplete reason. Coverage removes elimination risk, which helps — but queens call this jam from a middling stack too. Range-vs-range math first, coverage second."}],
   did:{txt:"calls 9,600,000",pot:23600000}},
  {t:"reveal",who:0,cards:["Jh","Jc"]},
  {t:"street",name:"FLOP",cards:["Kc","6h","3d"],pot:23600000},
  {t:"act",who:"H",txt:"queens stay ahead",wait:1000},
  {t:"street",name:"TURN",cards:["2c"],pot:23600000},
  {t:"street",name:"RIVER",cards:["9s"],pot:23600000},
  {t:"end",res:"Queens hold on K-6-3-2-9. Ponce out in 19th — Margets' second elimination in two hands, her stack climbing toward the final table.",
   lesson:"When stack geometry is clear, premium hands should not become victims of excessive ICM fear. The risk premium adjusts the margins of your range — it does not delete the top of it."}
 ]},

"LM-013":{
 id:"LM-013",title:"AQ meets the top of the range",who:"Leo Margets · 2025 Main Event · Day 7, 37 left",
 rec:0,recNote:"",
 setup:"Day 7, thirty-seven left, blinds 150K/300K. Paul Gibbons jams his last 3,500,000 — under 12bb — from the hijack. Margets wakes up with AQ right behind him in the cutoff.",
 heroName:"Margets",heroPos:"CO",heroStack:"~14,000,000",heroCards:["Ah","Qd"],
 blinds:"150K/300K (300K ante)",
 vill:[{name:"Gibbons",pos:"HJ",stack:"3,500,000 (11.7bb)"}],
 src:[["https://www.pokernews.com/tours/wsop/2025-wsop/event-81-10000-wsop-main-event/day7/?page=12","PokerNews Day 7 live report"]],
 steps:[
  {t:"deal"},
  {t:"act",who:0,txt:"jams 3,500,000",pot:4250000,wait:1400},
  {t:"ask",txt:"A 12bb hijack open-jam, players still behind you. AQ offsuit. The uncomfortable truth about this spot: sometimes he shows you kings. Call anyway?",
   opts:[
    {l:"Call — AQ beats the 12bb jam range",v:"pro",e:"Margets calls. A sub-12bb hijack jam range is broad — pairs, aces down through the wheel cards, broadways, suited hands with life. AQ dominates enough of it and flips against most of the rest; the times it meets the top of the range are priced in. This time it's kings… and the ace comes anyway."},
    {l:"Fold — respect an early-position jam",v:"bad",e:"11.7bb from the hijack isn't early-position strength — it's a stack doing what dying stacks must. Folding AQ here systematically overpays respect to a range that's mostly worse aces and smaller pairs."},
    {l:"Iso-jam bigger to shut out the players behind",v:"ok",e:"Reasonable instinct — with players left to act, re-jamming protects your equity. But at these stacks flatting the all-in and iso-jamming are nearly identical; the core decision is the call itself, and it's clearly right."}],
   did:{txt:"calls 3,500,000",pot:7750000}},
  {t:"reveal",who:0,cards:["Ks","Kh"]},
  {t:"street",name:"FLOP",cards:["6d","9h","Ac"],pot:7750000},
  {t:"act",who:"H",txt:"the ace! Margets takes the lead",wait:1200},
  {t:"street",name:"TURN",cards:["5c"],pot:7750000},
  {t:"street",name:"RIVER",cards:["9d"],pot:7750000},
  {t:"end",res:"Gibbons' kings were the top of the range — and the A♣ on the flop beat them anyway. Gibbons out in 37th; the call was correct before the ace, and the ace was a bonus.",
   lesson:"Against an approximately 12bb hijack jam, AQ is strong enough to call despite sometimes meeting the top of the range. Getting shown kings doesn't make the call wrong — the range does the math, not the reveal."}
 ]},

"LM-002":{
 id:"LM-002",title:"Nines meet the sledgehammer",who:"Leo Margets · 2025 Main Event · Day 7",
 rec:1,recNote:"Flop cards and exact pot reconstructed. The three-way pot, Margets' check with 99, Mizrachi's ~3x-pot overbet, Arai's fold and Margets' quick fold are verified from the Day 7 recap.",
 setup:"Day 7, under 57 players, pay jumps tightening every level. Margets opens pocket nines from middle position; Michael Mizrachi — the eventual champion — calls in position, and Arai defends the big blind. Three-way.",
 heroName:"Margets",heroPos:"MP",heroStack:"~30,000,000",heroCards:["9h","9c"],
 blinds:"250K/500K (500K ante)",
 vill:[{name:"Arai",pos:"BB",stack:"~18,000,000"},{name:"Mizrachi",pos:"BTN",stack:"~40,000,000"}],
 src:[["https://www.gipsyteam.com/news/13-07-2025/main-event-day-7-recap","GipsyTeam Day 7 recap"]],
 steps:[
  {t:"deal"},
  {t:"act",who:"H",txt:"raises to 1,100,000",pot:2350000},
  {t:"act",who:1,txt:"calls in position",pot:3450000},
  {t:"act",who:0,txt:"calls from the big blind",pot:4050000},
  {t:"street",name:"FLOP",cards:["Ts","6d","2c"],pot:4050000},
  {t:"act",who:0,txt:"checks",wait:800},
  {t:"ask",txt:"T-6-2 rainbow, three-way, one overcard to your nines. Arai checks. C-bet into the eventual champion, or keep the pot contained?",
   opts:[
    {l:"Check — multiway, way-ahead or way-behind",v:"pro",e:"Margets checks. Three-way against an elite pro in position, second pair on a dryish board is a classic check: a bet folds out worse, gets called or raised by better, and builds a pot one pair can't defend under deep-run pressure."},
    {l:"C-bet 2,000,000 (~half pot)",v:"ok",e:"Heads-up this is fine. Three-way with Mizrachi behind you in position, the medium c-bet mostly buys you two harder decisions on later streets with a hand that wanted a cheap showdown."},
    {l:"C-bet 3,500,000 — deny the overcards",v:"bad",e:"Protection logic with a self-destruct switch. The big bet into two players folds out everything you beat and keeps everything that beats you — and hands Mizrachi a raising spot you can't answer."}],
   did:{txt:"checks"}},
  {t:"act",who:1,txt:"slides out 12,000,000 — three times the pot",pot:16050000,wait:1600},
  {t:"act",who:0,txt:"agonizes… folds",fold:true,wait:1100},
  {t:"ask",txt:"Mizrachi overbets — around 3x pot — into two players. Arai finally lets his hand go. Pocket nines, one overcard board, the champion staring at you. Your move?",
   opts:[
    {l:"Fold quickly",v:"pro",e:"Margets folds almost instantly, and the speed is the skill. A giant overbet from an elite player into a multiway configuration announces extreme strength or an extremely calculated bluff — and one pair under deep-run pay-jump pressure can't profitably find out which."},
    {l:"Call — he overbets bluffs too",v:"bad",e:"Multiway overbets are the most under-bluffed line in poker — into two players, even elite bluffers need a real hand. Calling 12M with second pair is paying full price for curiosity at the worst ICM moment."},
    {l:"Jam — punish the pressure play",v:"bad",e:"Turning nines into a bluff against the one line that's almost never folding. If the overbet is value, you're drawing near-dead for your tournament at 50-odd left."}],
   did:{txt:"folds 9♥9♣ quickly",fold:true}},
  {t:"end",res:"Mizrachi drags the pot uncontested. Margets loses a small battle and keeps the war — she'll outlast all but five players in the field from here.",
   lesson:"One pair loses value fast when a strong line is taken in a highly constrained multiway pot. A 3x-pot overbet into two players is one of the strongest lines in poker — respect it, fold quickly, and spend your stack where you hold the leverage."}
 ]},

"LM-005":{
 id:"LM-005",title:"The flip for the throne",who:"Leo Margets · 2025 Main Event · Day 8, 16 left",
 rec:0,recNote:"",
 setup:"Day 8, sixteen players left, blinds 500K/1M with the ante. Margets opens jacks — and Sergio Veloso moves all-in for 32,700,000, covering most of her stack. Called, this is a pot for the chip lead.",
 heroName:"Margets",heroPos:"HJ",heroStack:"~37,000,000",heroCards:["Jd","Jc"],
 blinds:"500K/1M (1M ante)",
 vill:[{name:"Veloso",pos:"SB",stack:"32,700,000"}],
 src:[["https://www.pokernews.com/tours/wsop/2025-wsop/event-81-10000-wsop-main-event/day8/?page=12&rsort=1","PokerNews Day 8 live report"],["https://www.poker.org/latest-news/crazy-runout-ships-massive-main-event-pot-to-leo-margets-aUt9F0v6JMCG/","Poker.org hand report"]],
 steps:[
  {t:"deal"},
  {t:"act",who:"H",txt:"opens to 2,000,000",pot:4500000},
  {t:"act",who:0,txt:"moves all-in — 32,700,000",pot:36700000,wait:1600},
  {t:"ask",txt:"Not a short-stack shove — a 33bb jam that plays for essentially your tournament. JJ, 16 left, a $1M+ pay ladder above you. This is the hardest call-off class in poker.",
   opts:[
    {l:"Call — jacks are ahead of the full jam range",v:"pro",e:"Margets calls. A blind-vs-open jam this size includes QQ+/AK for value but also TT, 99, AQ and frustration jams from a stack that doesn't want to play postflop. Against that full range JJ is a clear favorite — and the reward is command of the tournament."},
    {l:"Fold — 33bb jams are QQ+ and AK, you're flipping at best",v:"ok",e:"Genuinely defensible under ICM — if the range really is that tight, JJ is barely break-even in chips and worse in dollars. But assigning the tightest possible range to every jam is its own leak: stacks under pressure jam wider than charts, and folding the winner costs the chip lead."},
    {l:"Fold — never play a huge pot without the nuts at 16 left",v:"bad",e:"Survival-poker theology. Deep runs are built by winning exactly these pots; a player who refuses every big flip ladders a spot or two and never touches the final table."}],
   did:{txt:"calls 30,700,000",pot:67400000}},
  {t:"reveal",who:0,cards:["Ad","Kh"]},
  {t:"street",name:"FLOP",cards:["Ac","Qc","9s"],pot:67400000},
  {t:"act",who:0,txt:"flops top pair — Veloso surges ahead",wait:1200},
  {t:"street",name:"TURN",cards:["3c"],pot:67400000},
  {t:"act",who:"H",txt:"the J♣ picks up a flush draw",wait:1200},
  {t:"street",name:"RIVER",cards:["2c"],pot:67400000},
  {t:"end",res:"The 2♣ completes a runner-runner club flush — J♣ high. Veloso is out in 16th, and Margets wins a pot of nearly 70 million, one of the biggest stacks in the room.",
   lesson:"Deep runs require winning major races — and sometimes losing the flip and winning the pot. Judge the decision separately from the spectacular runout: the call was right when the chips went in, not when the 2♣ landed."}
 ]},

"LM-018":{
 id:"LM-018",title:"The cold jam",who:"Leo Margets · 2025 Main Event · Day 8, 17 left",
 rec:0,recNote:"",
 setup:"Day 8, seventeen left, blinds 500K/1M. Veloso opens to 2,000,000, Minghini 3-bets to 5,600,000 behind him — and Margets looks down at ace-king in the small blind with 26.7bb. Two players already committed to the pot, both living under maximum ICM pressure.",
 heroName:"Margets",heroPos:"SB",heroStack:"26,700,000 (26.7bb)",heroCards:["As","Kd"],
 blinds:"500K/1M (1M ante)",
 vill:[{name:"Veloso",pos:"CO",stack:"~33,000,000"},{name:"Minghini",pos:"BTN",stack:"~25,000,000"}],
 src:[["https://www.pokernews.com/tours/wsop/2025-wsop/event-81-10000-wsop-main-event/day8/?page=11&rsort=1","PokerNews Day 8 live report"]],
 steps:[
  {t:"deal"},
  {t:"act",who:0,txt:"opens to 2,000,000",pot:4500000},
  {t:"act",who:1,txt:"3-bets to 5,600,000",pot:10100000,wait:1400},
  {t:"ask",txt:"An open AND a 3-bet in front of you. AK at 26.7bb, seventeen players left, both opponents constrained by the biggest pay ladder of their lives. What does maximum pressure look like?",
   opts:[
    {l:"Cold 4-bet jam — 26,700,000",v:"pro",e:"Margets shoves over both of them. The cold jam weaponizes ICM: the 3-bettor must find a hand that plays for his tournament, the opener likewise, and AK's blockers slash the combos that can. Both fold — Minghini releases A♣Q♠ — and Margets drags nearly 10M without a flop."},
    {l:"Flat the 3-bet — see a flop with the best drawing hand",v:"bad",e:"Cold-calling 5.6M out of position at 26bb is the geometry from hell: a quarter of your stack in, no initiative, and every ace-less flop a disaster. AK's value in this spot is preflop leverage — spend it there."},
    {l:"Small 4-bet to 12,000,000",v:"ok",e:"It applies real pressure, but at 26.7bb it commits nearly half your stack while leaving them a jam you'd have to call anyway. When the 4-bet math already commits you, take the version with maximum fold equity — all of it."}],
   did:{txt:"cold 4-bet jams 26,700,000",pot:35800000}},
  {t:"act",who:0,txt:"folds",fold:true,wait:1000},
  {t:"reveal",who:1,cards:["Ac","Qs"],txt:"has to let it go"},
  {t:"act",who:1,txt:"folds A♣Q♠",fold:true,wait:1000},
  {t:"end",res:"Both fold and Margets wins a major pot without showdown — nearly 10 million in dead money collected by the player willing to apply the most pressure at the moment others could least absorb it.",
   lesson:"Choose players constrained by ICM. Apply maximum pressure when your blockers and value range support it — the cold 4-bet jam is the warlord's move precisely because everyone else's calling ranges are crushed by the ladder."}
 ]},

"LM-006":{
 id:"LM-006",title:"Ace-king, released",who:"Leo Margets · 2025 Main Event · Day 8, two tables",
 rec:0,recNote:"",
 setup:"Day 8, two tables left, blinds 600K/1.2M. Margets opens ace-king from the hijack; Mizrachi calls in the small blind, Tony Gregg defends the big blind. Three-way to a flop that misses her completely — and then the champion moves.",
 heroName:"Margets",heroPos:"HJ",heroStack:"~60,000,000",heroCards:["As","Kc"],
 blinds:"600K/1.2M (1.2M ante)",
 vill:[{name:"Mizrachi",pos:"SB",stack:"~45,000,000"},{name:"Gregg",pos:"BB",stack:"~16,000,000"}],
 src:[["https://www.pokernews.com/tours/wsop/2025-wsop/event-81-10000-wsop-main-event/day8/?page=3","PokerNews Day 8 live report"]],
 steps:[
  {t:"deal"},
  {t:"act",who:"H",txt:"opens to 2,400,000",pot:5400000},
  {t:"act",who:0,txt:"calls from the small blind",pot:7200000},
  {t:"act",who:1,txt:"calls from the big blind",pot:8400000},
  {t:"street",name:"FLOP",cards:["9d","6s","3s"],pot:8400000},
  {t:"act",who:0,txt:"leads 5,000,000 — into two players",pot:13400000,wait:1600},
  {t:"act",who:1,txt:"folds top pair",fold:true,wait:1200},
  {t:"ask",txt:"Mizrachi donk-leads 5,000,000 into the multiway pot. Gregg — who flopped top pair with 9♠8♥ — lets it go almost immediately. Ace-king, no pair, no draw, two tables from the end. Continue?",
   opts:[
    {l:"Fold — the lead into two ranges is serious",v:"pro",e:"Margets folds ace-king without ceremony. A large small-blind lead into two players carries substantial strength and equity pressure — and AK-high has six outs against even the weakest hand doing that. When top pair is folding in front of you, unpaired overcards have no business staying."},
    {l:"Call — you have two overcards and position",v:"bad",e:"Six outs against a value-heavy lead, with a spade draw possible against you and ICM crushing every future street. 'Two overcards' is a preflop asset; on this flop, against this line, it's a five-million-chip subscription to guessing."},
    {l:"Raise — your range crushes his, make him prove it",v:"bad",e:"Range-bully logic in the one configuration it fails: a player who leads into a preflop raiser AND a caller isn't folding to the raise, and your actual hand has king-high. At two tables, this is how big stacks become medium ones."}],
   did:{txt:"folds A♠K♣",fold:true}},
  {t:"end",res:"Mizrachi — who led Q♠J♠, a pair-less hand with backdoors — takes it down without showdown. And the fold is still right: against the leading range across two opponents, ace-king was burning money to find out.",
   lesson:"Late-stage multiway pots punish stubbornness: ace-king can be an easy fold when a strong player leads into multiple ranges. Judge the fold by the range you faced, not the two cards you were shown afterward."}
 ]},

"LM-007":{
 id:"LM-007",title:"Seventh place, played right",who:"Leo Margets · 2025 Main Event · Final table",
 rec:0,recNote:"",
 setup:"The final table, seven-handed, hand #28, blinds 1M/2M — Margets at 19.8bb, the last woman standing, the whole poker world watching. She limps the small blind with A♥T♥; Kenny Hallaert attacks from the big blind.",
 heroName:"Margets",heroPos:"SB",heroStack:"39,600,000 (19.8bb)",heroCards:["Ah","Th"],
 blinds:"1M/2M (2M ante)",
 vill:[{name:"Hallaert",pos:"BB",stack:"covers"}],
 src:[["https://www.pokernews.com/tours/wsop/2025-wsop/event-81-10000-wsop-main-event/day9/?page=2","PokerNews final-table live report"]],
 steps:[
  {t:"deal"},
  {t:"act",who:"H",txt:"limps the small blind",pot:6000000},
  {t:"act",who:0,txt:"moves all-in — he covers",pot:43600000,wait:1600},
  {t:"ask",txt:"Hallaert jams over your limp, covering your 39,600,000. A♥T♥ at a seven-handed final table with $1.5M locked and millions above. Fold and keep ~19bb, or play for it all?",
   opts:[
    {l:"Call — ATs is way ahead of a limp-attack jam range",v:"pro",e:"Margets calls off. Big-blind jams over small-blind limps are built to punish weakness — loaded with small pairs, weak aces, suited junk with blockers. ATs dominates the aces, flips the pairs, crushes the rest. At under 20bb, folding the top of your limping range makes the limp itself exploitable."},
    {l:"Fold — the ladder above you is worth millions",v:"ok",e:"The ICM case is real: every elimination above you is worth hundreds of thousands. But 19.8bb at 1M/2M buys very little climbing time, and folding this hand to this move surrenders exactly the spot your limp strategy was designed to catch."},
    {l:"Fold — he always has a pair, you're flipping at best",v:"bad",e:"Even at face value it's wrong — ATs flips the pairs below tens and dominates every worse ace in a range that attacks limps wide. Assigning only strength to aggression is how final tables get bullied."}],
   did:{txt:"calls all-in — 39,600,000",pot:81200000}},
  {t:"reveal",who:0,cards:["6h","6s"]},
  {t:"street",name:"FLOP",cards:["Jh","7s","5s"],pot:81200000},
  {t:"act",who:0,txt:"sixes stay ahead — and the 6♠ has friends out there",wait:1300},
  {t:"street",name:"TURN",cards:["As"],pot:81200000},
  {t:"act",who:"H",txt:"the ace! Margets surges into the lead — but the A♠ brings a third spade",wait:1300},
  {t:"street",name:"RIVER",cards:["9s"],pot:81200000},
  {t:"end",res:"The 9♠ — a fourth spade, and Hallaert's 6♠ completes the flush. The dream ends in 7th place: $1,500,000, the deepest Main Event run by a woman in decades, and a final decision she never needed to apologize for.",
   lesson:"Final-table greatness still passes through brutal flips. Process and stack geometry matter more than hindsight: the call was the top of her range doing its job. Composure under maximum spotlight is the skill — the river is just weather."}
 ]}
};

/* ---------- AGGRESSION GYM — drill cards (wsop_aggression_drills_v3) ---------- */
window.HL_GYM={
 title:"The Aggression Gym",
 intro:"Eight documented spots from the Margets and Mateos runs, distilled into one repeatable pattern: pick the right target, take the aggressive line — and exit instantly when the response is serious. Two decisions per drill: the attack, and the exit. The exit is the half most players fail.",
 drills:[
 {id:"D-01",hand:"LM-009",stage:"Day 6 · last 202 · blinds 30K/60K",cards:["Ad","7d"],
  sit:"Bradley Jansen — a middle-position opener who can fold — makes it 125,000. You hold A♦7♦ in the cutoff, ~40bb effective.",
  q1:{txt:"Pick the line.",opts:[
   {l:"3-bet to 400,000",v:"pro",e:"The drill line: 3-bet people who can fold. The ace blocks his strongest continues, the suit gives equity when called — and when he calls, the A♠6♦4♣ flop belongs to your range: a small 175,000 c-bet takes it. That's exactly how the real hand went."},
   {l:"Flat call — see a flop in position",v:"bad",e:"Flatting surrenders the fold-equity half of the hand's value and invites the blinds along. A7s isn't strong enough to want a four-way flop; it's exactly shaped to be a 3-bet."},
   {l:"Fold — ace-rag doesn't attack",v:"bad",e:"The mistake the drill names: checking down the aggression because the hand isn't premium. Blocker aces are attack hands — their value is in the pressure, not the showdown."}]},
  resp:"Now the stress test: instead of calling, imagine Jansen 4-bets — or check-raises your small c-bet hard.",
  q2:{txt:"The serious response arrives. What now?",opts:[
   {l:"Release the bluff component — fold",v:"pro",e:"The exit is pre-decided: against a 4-bet or a strong check-raise, A7s has done its job and folds without ego. The heuristic: 3-bet people who can fold; c-bet small when the range favours you; release against uncapped force."},
   {l:"Call — you have an ace and a flush draw sometimes",v:"bad",e:"Defending the bluff component converts a cheap, profitable attack into an expensive guessing game. The line was priced on his folds, not on your playability."},
   {l:"Re-raise — finish what you started",v:"bad",e:"Escalating into an uncapped range with ace-seven is the ego version of aggression. The drill's entire point is that the attack and the exit are one package."}]},
  heur:"Three-bet people who can fold; c-bet small when range favours you.",mistake:"Checking too often because the hand is not premium."},
 {id:"D-02",hand:"LM-015",stage:"Day 7 · final 24 · blinds 200K/400K",cards:["As","Jc"],
  sit:"Joey Padron opens early position to 1,000,000. You're in the small blind with A♠J♣ — and Padron is the kind of player who can fold to pressure.",
  q1:{txt:"Pick the line.",opts:[
   {l:"3-bet to 3,000,000",v:"pro",e:"Margets 3-bets exactly this. AJo is too weak to flat out of position and too blocker-rich to fold: the 3-bet attacks an opener with folds in his range at a stage where continuing is expensive."},
   {l:"Flat call from the small blind",v:"bad",e:"OOP with a hand that plays terribly multiway and reverse-dominates itself in flatted pots — the textbook worst option with AJo in the blinds against an EP open."},
   {l:"Fold — AJo vs early position is beneath you",v:"ok",e:"Against a tight EP range, folding AJo in the SB is theory-clean. But the drill is about the exploitative layer: when the opener can fold, the 3-bet prints — provided the exit is pre-set."}]},
  resp:"Padron 4-bet jams 12,450,000.",
  q2:{txt:"The 4-bet jam is in. Your 3,000,000 is already out there. Decision?",opts:[
   {l:"Fold immediately",v:"pro",e:"Margets folds — and he had aces. The chips you invested are gone either way; the only question is whether the next 9.4M goes in behind them. A successful aggressive attempt can end in a fold and still be correct."},
   {l:"Call — you already invested 3M and hold blockers",v:"bad",e:"The exact mistake the drill names: calling because you already invested chips. Sunk cost is not equity. AJo against a 4-bet-jam range is drawing thin everywhere that matters."},
   {l:"Tank first — make him sweat before folding",v:"bad",e:"Theatrics burn clock and information. The fold was decided before the 3-bet went in; execute it and move to the next target."}]},
  heur:"A successful aggressive attempt can end in a fold and still be correct.",mistake:"Calling because you already invested chips."},
 {id:"D-03",hand:"LM-016",stage:"Day 8 · last 24 · blinds 300K/600K",cards:["Ac","4h"],
  sit:"Richard Freitas opens the button to 1,200,000 — the widest opening range at the table. You're in the small blind with A♣4♥ and ~26bb.",
  q1:{txt:"Pick the line.",opts:[
   {l:"3-bet to 4,000,000",v:"pro",e:"Margets 3-bets, Freitas folds K♥10♣ — done. The ace blocks his continuing hands, his button range is stuffed with folds, and ICM at 24 left makes defending expensive. The most repeatable print in late-stage poker."},
   {l:"Flat — keep the pot small with ace-rag",v:"bad",e:"Flatting A4o out of position invites the big blind in and wins nothing from the button's air — which is most of his range. The hand's only asset is its blocker, and blockers earn by raising."},
   {l:"Fold — wrong hand to fight with",v:"bad",e:"The drill's named mistake in mirror form: passing wide late-position opens to wait for premiums. Ace-x blocker 3-bets against button opens are the exact spot the aggressive stage-game is built on."}]},
  resp:"Now the stress test: imagine Freitas 4-bet jams instead of folding.",
  q2:{txt:"Facing the 4-bet jam with A4o at 26bb — geometry check. What now?",opts:[
   {l:"Fold — unless the math forces otherwise",v:"pro",e:"A4o against a jamming range is dominated or flipping badly; you fold and re-attack the next orbit. The heuristic survives the fold: attack wide late-position opens repeatedly — the profit is in the folds, not the showdowns."},
   {l:"Call — he could be re-bluffing wide",v:"bad",e:"Even a wide 4-bet range crushes ace-rag. You priced the 3-bet on his folds; when they don't come, paying off with the bottom of your attacking range refunds everything the strategy earned."},
   {l:"Fold, and stop 3-betting him",v:"bad",e:"Half right. Fold, yes — but one 4-bet doesn't retire the exploit. Repeatable aggression means returning to the same profitable spot until the target proves it's gone."}]},
  heur:"Attack wide late-position opens repeatedly.",mistake:"Picking tight early-position players instead."},
 {id:"D-04",hand:"LM-017",stage:"Day 8 · last 20 · blinds 400K/800K",cards:["Jd","Ts"],
  sit:"You opened J♦10♠ on the button to 1,600,000; Dunaway called in the small blind. The 4♥9♣9♠ flop checked through. Turn 9♥ — trips on board — he checks again. You bet 2,100,000, he calls. River A♥, he checks a third time.",
  q1:{txt:"Jack-high on 4-9-9-9-A, three checks from him. Pick the line.",opts:[
   {l:"Bet 3,000,000 — his river range is capped",v:"pro",e:"Margets bets. After check-calling the trips turn, his range is stuffed with pocket pairs and 9x-less hands that just got out-kicked by the ace — a card that smashes your betting range. The delayed pressure line prints against capped ranges."},
   {l:"Check back — jack-high, take the free showdown",v:"bad",e:"Jack-high wins showdowns against almost nothing that check-called the turn. When the runout caps him and crowns your range, checking is declining money the line already earned."},
   {l:"Bet 8,000,000 — make it maximum pressure",v:"bad",e:"The overbet re-opens the action for exactly the hands that beat you and folds nothing extra — his capped hands fold to 3M just as readily. Size buys the same folds cheaper."}]},
  resp:"Dunaway check-raises to 7,900,000.",
  q2:{txt:"The river check-raise. Your 3,000,000 is in. Decision?",opts:[
   {l:"Fold — the threshold was set before you bet",v:"pro",e:"Margets folds instantly. River check-raises are the most under-bluffed line in poker, and the ace improved his slow-played hands. The bet was profitable; paying off the raise would un-earn it. Set the exit threshold before betting — then obey it."},
   {l:"Call — he could be turning a pair into a bluff",v:"bad",e:"The drill's named mistake: paying off because your bet induced action. The bet's profit came from his folds; his raise is a different event, priced by a different — value-heavy — range."},
   {l:"Jam — only a 9 continues, rep it better",v:"bad",e:"Re-bluffing a river check-raiser with jack-high at 20 left is the single most expensive sentence in tournament poker. The line has an exit; take it."}]},
  heur:"Bet thinly or bluff when profitable, but set the exit threshold before betting.",mistake:"Paying off because the bet induced action."},
 {id:"D-05",hand:"LM-008",stage:"Day 4 · in the money · blinds 6K/12K",cards:["?","?"],
  sit:"You opened under the gun to 25,000; Philippe Noble defended the big blind. On 2♦6♥3♠ you bet 17,000 — and Noble check-raised to 73,000. You called. Turn 3♣: Noble checks.",
  q1:{txt:"He check-raised the flop… and now checks the paired turn. Pick the line.",opts:[
   {l:"Stab 55,000 — his check reopens fold equity",v:"pro",e:"Margets bets. The check-raise announced strength, but the turn check un-announces it: real hands keep betting this runout. New passive information can justify renewed aggression — take the initiative back."},
   {l:"Check — he check-raised, the hand is his",v:"bad",e:"Treating one street of aggression as a permanent verdict. Ranges update every action: a check-raiser who stops raising has downgraded himself, and letting him realize equity free is a gift."},
   {l:"Jam — end the story now",v:"bad",e:"Massively over-leveraged: it risks the stack to win a pot the 55,000 stab wins just as often, and when the jam gets called there are no good verdicts."}]},
  resp:"Noble check-raises again — all-in, about 400,000.",
  q2:{txt:"A second check-raise, this time for everything. Decision?",opts:[
   {l:"Fold instantly",v:"pro",e:"Margets folds without a beat. One check-raise can be a move; a second check-raise, for stacks, is an extremely value-heavy live line. Renewed strength ends the aggression — instantly and unemotionally."},
   {l:"Call — he can't have it twice",v:"bad",e:"He can, and live populations almost always do. The first call was information-buying; treating it as commitment is the drill's named mistake."},
   {l:"Tank-fold slowly to save face",v:"bad",e:"The fold is right; the tank is noise. Fast exits preserve both chips and composure — the table reads panic in slow folds."}]},
  heur:"New passive information can justify aggression; renewed strength ends it.",mistake:"Treating the first call as commitment."},
 {id:"D-06",hand:"LM-020",stage:"Day 8 · last 12 · blinds 600K/1.2M",cards:["Kd","7d"],
  sit:"Twelve players left — the final-table bubble. It folds to you in the cutoff with K♦7♦.",
  q1:{txt:"Pick the line.",opts:[
   {l:"Open to 2,400,000",v:"pro",e:"Margets opens. K7s from the cutoff with antes in play is a standard profitable open — position plus fold equity plus playability. The stage doesn't cancel aggression; it prices it."},
   {l:"Fold — no marginal hands at the FT bubble",v:"bad",e:"Hyper-tightness at 12 left donates the blinds and antes every orbit to whoever keeps opening. The bubble raises the price of continuing, not of opening."},
   {l:"Open big — 3,600,000, discourage the 3-bettors",v:"bad",e:"The oversized open risks more to win the same blinds and reprices every 3-bet you face. Standard size, standard plan — the discipline comes later in the tree."}]},
  resp:"Hallaert 3-bets to 9,600,000… and behind him Mizrachi cold 4-bet jams 39,500,000.",
  q2:{txt:"A 3-bet AND a cold jam behind your open. K♦7♦. Decision?",opts:[
   {l:"Fold immediately",v:"pro",e:"Margets releases instantly — Hallaert folds A♦J♣ too, and Mizrachi's A♠Q♣ takes it. Two uncapped ranges collided behind the opener; a wide open never obligates a wide continue. In and out, minimum spent."},
   {l:"Call the jam — you're priced in with a suited king",v:"bad",e:"Priced in is a myth at 33bb deep against two real ranges: K7s is dominated, flipping badly, or drawing dead — at the final-table bubble, for your tournament."},
   {l:"Fold, and tighten your opens from now on",v:"bad",e:"The exit is right; the lesson is wrong. One collision doesn't invalidate the open — it demonstrates the system: open wide, exit instantly when serious action develops."}]},
  heur:"Open aggressively, but never defend ego against two uncapped ranges.",mistake:"Thinking a wide open requires a wide continue."},
 {id:"D-07",hand:"AM-010",stage:"Day 1 · ~100bb · blinds 300/600",cards:["Ks","5s"],
  sit:"Mateos' K5s hand from Day 25's replayer, drill form: loose call in position, flop stab on T-8-7 called, turn T checked through. River 6♦ — the board reads T-8-7-T-6, four to a straight. The opener checks. Pot 7,800.",
  q1:{txt:"King-high, bottom of your range. Pick the line.",opts:[
   {l:"Bet 7,700 — near pot, rep the straight",v:"pro",e:"The drill line: his check-call-check-check line is packed with honest one-pair hands that auto-fold to a big bet on this river, and your value range at this size is almost entirely straights. Credible story, capped target, nut advantage — fire."},
   {l:"Check — accept the hand is over",v:"bad",e:"King-high has no showdown value against a flop-caller. When the runout hands you the nut story and him a capped range, checking declines the only profit left in the hand."},
   {l:"Bet 2,500 — cheap pressure",v:"bad",e:"Straights don't bet small into capped ranges — the discount size breaks the story and invites the curiosity call that beats king-high. Polar spots take polar sizes."}]},
  resp:"He folds — the line worked. But run the stress test: imagine instead he calls fast, or raises.",
  q2:{txt:"The bluff fails — a quick call, your king-high is shown. What's the correct follow-through?",opts:[
   {l:"Accept the result — never add chips after the response",v:"pro",e:"The exit rule for river bluffs is absolute: once the story is told and rejected, the hand is over. No re-bluff, no tilt-bet next hand. The line was priced on his folds; one call doesn't change the price, and chasing it does."},
   {l:"Mark him as a station and never bluff again",v:"bad",e:"Overcorrection. One call is one data point — the drill's heuristic is to keep choosing capped, honest targets, not to abandon the weapon because a single target held."},
   {l:"Fire bigger next time so he can't call",v:"bad",e:"Bluffing players who hate folding — the drill's named mistake — and doing it for more. Size doesn't fix target selection; the fix is picking opponents whose ranges contain folds."}]},
  heur:"Choose capped, honest targets and tell a credible range story.",mistake:"Bluffing players who hate folding."},
 {id:"D-08",hand:"LM-021",stage:"Day 8 · last 12 · blinds 600K/1.2M",cards:["6h","6d"],
  sit:"Final-table bubble. You opened 6♥6♦ under the gun to 2,400,000; Minghini defended the big blind. Flop 10♥7♥4♣ — two overcards to your sixes live in his range, plus every heart draw.",
  q1:{txt:"Vulnerable made hand, capped defender. Pick the line.",opts:[
   {l:"C-bet 2,700,000 — protection against a capped range",v:"pro",e:"Margets bets and Minghini folds K♥9♦ — a king-high with a heart that had every right to peel. The defender's range is stuffed with unpaired overcards and weak draws that cannot tolerate pressure; charging them now is where medium pairs earn."},
   {l:"Check — medium pairs check automatically",v:"bad",e:"The drill's named mistake, verbatim: automatically checking medium pairs. On this texture the free card beats you a third of the time — K♥9♦ takes his equity for free and you never find out."},
   {l:"Bet tiny — 1,200,000, keep it cheap",v:"bad",e:"Against overcards-plus-draw hands, the tiny bet prices in exactly the continues protection is meant to deny. Vulnerable value wants a real size against a capped range."}]},
  resp:"This time he folds. Stress test: imagine a check-raise, or a heavy continue when the turn brings a heart or an overcard.",
  q2:{txt:"Serious resistance arrives — a check-raise, or a bad turn with heavy action. What now?",opts:[
   {l:"Shut down — the protection bet already did its job",v:"pro",e:"The c-bet was for equity denial, not for stacks. Against a check-raise or heavy action on a deteriorating board, sixes revert to a bluff-catcher at best — release and re-attack a better spot. Aggression with exits is the whole system."},
   {l:"Barrel through — you committed to the hand",v:"bad",e:"The protection bet committed 2,700,000, not the stack. Escalating a vulnerable pair into serious resistance converts a printing line into a leak."},
   {l:"Call down — he could be on the draw you charged",v:"bad",e:"Sometimes — but check-raises and heavy continues at the FT bubble are value-weighted, and sixes under two broadway cards have almost no river you'll enjoy. The exit threshold was set when the bet went in."}]},
  heur:"Betting vulnerable value hands often prints against capped ranges.",mistake:"Automatically checking medium pairs."}
]};

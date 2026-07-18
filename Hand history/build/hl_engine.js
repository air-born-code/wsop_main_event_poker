/* ============ HAND LAB ENGINE — animated interactive hand histories ============ */
(function(){
const SUIT={s:"♠",h:"♥",d:"♦",c:"♣"};
const fmt=n=>typeof n==="number"?n.toLocaleString("en-US"):(n||"");
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const VPOS={1:[[50,-2]],2:[[24,2],[76,2]],3:[[13,30],[50,-2],[87,30]]};
const pretty=cs=>cs.map(c=>c==="?"?"??":c.slice(0,-1).replace("T","10")+SUIT[c.slice(-1)]).join(" ");
const who=(S,w)=>w==="H"?`<b>${S.h.heroName}</b>`:`<b>${S.h.vill[w].name}</b>`;

function cardEl(c){
  const d=document.createElement("div");d.className="hl-card";
  if(!c||c==="?"){d.classList.add("hl-back");return d;}
  const s=c.slice(-1),r=c.slice(0,-1).replace("T","10");
  if(s==="h"||s==="d")d.classList.add("hl-red");
  d.innerHTML=`<b>${r}</b><i>${SUIT[s]}</i>`;
  return d;
}
function mount(el){
  const h=(window.HL_HANDS||{})[el.dataset.hand];
  if(!h)return;
  el.innerHTML=`<div class="hl-top">
      <span class="hl-tag">▶ live hand</span>
      <span class="hl-id mono">${h.id}</span>
      <span class="hl-title">${h.title}</span>
      <span class="hl-meta">${h.who}</span>
      ${h.rec?`<span class="hl-rec" title="${h.recNote||""}">◆ reconstructed</span>`:""}
      <span class="hl-best mono"></span>
    </div>
    <div class="hl-stage"><div class="hl-felt"></div></div>
    <div class="hl-panel"></div>
    <div class="hl-log" hidden></div>`;
  const S={el,h,panel:el.querySelector(".hl-panel"),log:el.querySelector(".hl-log"),seats:[],hit:0,tot:0};
  showBest(S);buildTable(S);
  S.panel.innerHTML=`<p class="hl-setup">${h.setup}</p><button type="button" class="btn">Deal the hand ▸</button>`;
  S.panel.querySelector("button").onclick=()=>run(S);
}
function showBest(S){
  try{const b=store["h"+S.h.id];
    S.el.querySelector(".hl-best").textContent=b?`best ${b.hit}/${b.tot}`:"";
  }catch(e){}
}
function buildTable(S){
  const h=S.h,felt=S.el.querySelector(".hl-felt");
  felt.innerHTML="";S.seats=[];
  const vp=VPOS[h.vill.length]||VPOS[1];
  h.vill.forEach((v,i)=>{
    const d=document.createElement("div");d.className="hl-seat";
    d.style.left=vp[i][0]+"%";d.style.top=vp[i][1]+"%";
    d.innerHTML=`<div class="hl-hole"></div><div class="hl-plate"><b>${v.name}</b><small>${v.pos} · ${v.stack}</small></div><div class="hl-bub"></div>`;
    felt.appendChild(d);S.seats.push(d);
  });
  const hero=document.createElement("div");hero.className="hl-seat hl-hero";
  hero.innerHTML=`<div class="hl-bub"></div><div class="hl-hole"></div><div class="hl-plate"><b>${h.heroName} (you)</b><small>${h.heroPos} · ${h.heroStack}</small></div>`;
  felt.appendChild(hero);S.hero=hero;
  const mid=document.createElement("div");mid.className="hl-mid";
  mid.innerHTML=`<div class="hl-board"></div><div class="hl-pot mono">blinds ${h.blinds}</div>`;
  felt.appendChild(mid);S.mid=mid;
}
function logLine(S,txt,cls){
  const p=document.createElement("div");p.className="hl-ll "+(cls||"");p.innerHTML=txt;
  S.log.appendChild(p);S.log.scrollTop=S.log.scrollHeight;
}
function bubble(S,w,txt){
  const seat=w==="H"?S.hero:S.seats[w];
  const b=seat.querySelector(".hl-bub");
  b.textContent=txt;b.classList.remove("hl-pop");void b.offsetWidth;b.classList.add("hl-pop");
}
function setPot(S,pot){
  if(pot==null)return;
  const p=S.mid.querySelector(".hl-pot");
  p.innerHTML=`${S.street?S.street.toLowerCase()+" · ":""}pot <b>${fmt(pot)}</b>`;
  p.classList.remove("hl-pulse");void p.offsetWidth;p.classList.add("hl-pulse");
}
async function run(S){
  buildTable(S);S.hit=0;S.tot=0;S.log.hidden=false;S.log.innerHTML="";
  S.panel.innerHTML=`<p class="hl-hint">Watch the action — the table pauses when it's on you.</p>`;
  for(const st of S.h.steps){
    if(!S.el.isConnected)return;
    await doStep(S,st);
  }
}
async function doStep(S,st){
  const h=S.h;
  if(st.t==="deal"){
    const hh=S.hero.querySelector(".hl-hole");
    h.heroCards.forEach((c,i)=>{const e=cardEl(c);e.style.animationDelay=(i*.13)+"s";e.classList.add("hl-in");hh.appendChild(e);});
    S.seats.forEach((sd,i)=>{
      const vh=sd.querySelector(".hl-hole"),v=h.vill[i];
      (v.cards||["?","?"]).forEach((c,j)=>{const e=cardEl(v.open?c:"?");e.style.animationDelay=(.25+j*.13)+"s";e.classList.add("hl-in");vh.appendChild(e);});
    });
    logLine(S,`<b>${h.heroName}</b> is dealt <b>${pretty(h.heroCards)}</b> · blinds ${h.blinds}`,"hl-lh");
    await sleep(950);
  }else if(st.t==="act"){
    bubble(S,st.who,st.txt);
    if(st.fold)(st.who==="H"?S.hero:S.seats[st.who]).classList.add("hl-folded");
    setPot(S,st.pot);
    logLine(S,`${who(S,st.who)} ${st.txt}`);
    await sleep(st.wait||1000);
  }else if(st.t==="street"){
    S.el.querySelectorAll(".hl-bub").forEach(b=>b.textContent="");
    S.street=st.name;
    const bd=S.mid.querySelector(".hl-board");
    (st.cards||[]).forEach((c,i)=>{const e=cardEl(c);e.style.animationDelay=(i*.2)+"s";e.classList.add("hl-flip");bd.appendChild(e);});
    setPot(S,st.pot);
    logLine(S,`— <b>${st.name}</b> ${st.cards?pretty(st.cards):""} <span class="hl-dim">(pot ${fmt(st.pot)})</span>`,"hl-ls");
    await sleep(1100);
  }else if(st.t==="reveal"){
    const sd=S.seats[st.who],vh=sd.querySelector(".hl-hole"),cs=st.cards||h.vill[st.who].cards;
    vh.innerHTML="";
    cs.forEach((c,i)=>{const e=cardEl(c);e.style.animationDelay=(i*.16)+"s";e.classList.add("hl-flip");vh.appendChild(e);});
    if(st.txt)bubble(S,st.who,st.txt);
    logLine(S,`${who(S,st.who)} shows <b>${pretty(cs)}</b>`);
    await sleep(1100);
  }else if(st.t==="ask"){
    await ask(S,st);
  }else if(st.t==="end"){
    end(S,st);
  }
}
function ask(S,st){
  return new Promise(res=>{
    S.tot++;
    const opts=st.opts.slice();
    for(let i=opts.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[opts[i],opts[j]]=[opts[j],opts[i]];}
    S.panel.innerHTML=`<div class="hl-ask">
      <div class="hl-q"><span class="hl-onyou disp">on you</span>${st.txt}</div>
      <div class="hl-opts">${opts.map((o,i)=>`<button type="button" class="hl-opt" data-i="${i}">${o.l}</button>`).join("")}</div>
      <div class="hl-fb" hidden></div></div>`;
    S.panel.scrollIntoView({block:"nearest",behavior:"smooth"});
    S.panel.querySelectorAll(".hl-opt").forEach(b=>{
      b.onclick=()=>{
        const o=opts[+b.dataset.i];
        if(o.v==="pro")S.hit++;
        S.panel.querySelectorAll(".hl-opt").forEach(x=>{
          const oo=opts[+x.dataset.i];x.disabled=true;
          if(oo.v==="pro")x.classList.add("hl-pro");
          else if(x===b)x.classList.add(o.v==="ok"?"hl-okpick":"hl-badpick");
        });
        const fb=S.panel.querySelector(".hl-fb");
        fb.hidden=false;
        fb.innerHTML=`<div class="hl-verdict ${o.v}">${o.v==="pro"?"✓ the pro's line":o.v==="ok"?"△ defensible — but not the line":"✗ not this"}</div><p>${o.e}</p><button type="button" class="btn">Continue ▸</button>`;
        fb.querySelector("button").onclick=async()=>{
          S.panel.innerHTML=`<p class="hl-hint">…</p>`;
          if(st.did){
            bubble(S,"H",st.did.txt);
            if(st.did.fold)S.hero.classList.add("hl-folded");
            setPot(S,st.did.pot);
            logLine(S,`<b>${S.h.heroName}</b> ${st.did.txt}`,"hl-lh");
            await sleep(900);
          }
          res();
        };
        logLine(S,`<span class="hl-onyou2">decision</span> “${o.l}” ${o.v==="pro"?"✓":o.v==="ok"?"△":"✗"}`,"hl-ld");
      };
    });
  });
}
function end(S,st){
  let extra="";
  try{
    const k="h"+S.h.id,prev=store[k];
    if(!prev||S.hit>prev.hit||(S.hit===prev.hit&&S.tot>prev.tot)){
      store[k]={hit:S.hit,tot:S.tot};save();
      if(prev)extra=" — new best";
    }
    showBest(S);
  }catch(e){}
  S.panel.innerHTML=`<div class="hl-endbox">
    <div class="hl-res">${st.res}</div>
    <div class="hl-score mono">You matched <b>${S.hit}/${S.tot}</b> of the pro's decisions${extra}</div>
    <div class="hl-lesson"><span class="disp">key lesson</span>${st.lesson}</div>
    ${S.h.rec?`<div class="hl-note">◆ ${S.h.recNote}</div>`:""}
    ${S.h.src?`<div class="hl-src">Source: ${S.h.src.map(s=>`<a href="${s[0]}" target="_blank" rel="noopener">${s[1]}</a>`).join(" · ")}</div>`:""}
    <button type="button" class="btn ghost">↺ Replay hand</button></div>`;
  S.panel.querySelector("button").onclick=()=>run(S);
}
/* ---- Aggression Gym ---- */
function gymBest(el){
  try{const b=store["gym"];
    el.querySelector(".hl-best").textContent=b?`best ${b.hit}/${b.tot}`:"";
  }catch(e){}
}
function mountGym(el){
  const G=window.HL_GYM;if(!G)return;
  el.innerHTML=`<div class="hl-top">
      <span class="hl-tag">⚔ ${G.title}</span>
      <span class="hl-meta">8 drills · 2 decisions each — the attack, then the exit</span>
      <span class="hl-best mono"></span></div>
    <div class="hl-panel"></div>`;
  gymBest(el);
  const panel=el.querySelector(".hl-panel");
  panel.innerHTML=`<p class="hl-setup">${G.intro}</p><button type="button" class="btn">Enter the gym ▸</button>`;
  panel.querySelector("button").onclick=()=>gymRun(el,panel);
}
function gymRun(el,panel){
  const G=window.HL_GYM,S={i:0,hit:0};
  const next=()=>{ if(S.i>=G.drills.length){gymEnd(el,panel,S);return;} gymCard(panel,G.drills[S.i],S,next); };
  next();
}
function gymCard(panel,d,S,next){
  const cards=d.cards.map(c=>{
    if(c==="?")return `<span class="hl-card hl-back hl-gc"></span>`;
    const s=c.slice(-1),r=c.slice(0,-1).replace("T","10");
    return `<span class="hl-card hl-gc ${(s==="h"||s==="d")?"hl-red":""}"><b>${r}</b><i>${SUIT[s]}</i></span>`;
  }).join("");
  panel.innerHTML=`<div class="hl-gymcard">
    <div class="hl-gymhead"><span class="hl-onyou disp">drill ${S.i+1}/8</span>
      <span class="hl-id mono">${d.id} · ${d.hand}</span><span class="hl-meta">${d.stage}</span>
      <span class="hl-gymcards">${cards}</span></div>
    <p class="hl-sit">${d.sit}</p>
    <div class="hl-qbox"></div></div>`;
  const box=panel.querySelector(".hl-qbox");
  gymAsk(box,d.q1,ok1=>{
    const r=document.createElement("div");
    r.className="hl-resp";
    r.innerHTML=`<span class="disp">the response</span> ${d.resp}`;
    box.appendChild(r);
    const b2=document.createElement("div");box.appendChild(b2);
    gymAsk(b2,d.q2,ok2=>{
      if(ok1)S.hit++;if(ok2)S.hit++;
      const f=document.createElement("div");
      f.innerHTML=`<div class="hl-lesson"><span class="disp">repeatable heuristic</span>${d.heur}</div>
        <div class="hl-note">✗ Mistake to avoid: ${d.mistake}</div>
        <button type="button" class="btn">${S.i<7?"Next drill ▸":"Finish ▸"}</button>`;
      box.appendChild(f);
      f.querySelector("button").onclick=()=>{S.i++;next();};
    });
  });
}
function gymAsk(box,q,done){
  const opts=q.opts.slice();
  for(let i=opts.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[opts[i],opts[j]]=[opts[j],opts[i]];}
  const w=document.createElement("div");
  w.innerHTML=`<div class="hl-q">${q.txt}</div>
    <div class="hl-opts">${opts.map((o,i)=>`<button type="button" class="hl-opt" data-i="${i}">${o.l}</button>`).join("")}</div>
    <div class="hl-fb" hidden></div>`;
  box.appendChild(w);
  w.querySelectorAll(".hl-opt").forEach(b=>{
    b.onclick=()=>{
      const o=opts[+b.dataset.i];
      w.querySelectorAll(".hl-opt").forEach(x=>{
        const oo=opts[+x.dataset.i];x.disabled=true;
        if(oo.v==="pro")x.classList.add("hl-pro");
        else if(x===b)x.classList.add(o.v==="ok"?"hl-okpick":"hl-badpick");
      });
      const fb=w.querySelector(".hl-fb");
      fb.hidden=false;
      fb.innerHTML=`<div class="hl-verdict ${o.v}">${o.v==="pro"?"✓ the documented line":o.v==="ok"?"△ defensible — but not the line":"✗ not this"}</div><p>${o.e}</p>`;
      done(o.v==="pro");
    };
  });
}
function gymEnd(el,panel,S){
  let extra="";
  try{
    const prev=store["gym"];
    if(!prev||S.hit>prev.hit){store["gym"]={hit:S.hit,tot:16};save();if(prev)extra=" — new best";}
    gymBest(el);
  }catch(e){}
  panel.innerHTML=`<div class="hl-endbox">
    <div class="hl-res">Gym complete. The pattern, eight ways: pick a target who can fold, take the line, and exit the instant the response is serious.</div>
    <div class="hl-score mono">You matched <b>${S.hit}/16</b> documented decisions${extra}</div>
    <div class="hl-lesson"><span class="disp">the meta-rule</span>Every aggressive line in this gym was profitable because the exit was decided before the first chip went in. Aggression without exits is spew; exits without aggression is surrender.</div>
    <div class="hl-src">Source: wsop_aggression_drills_v3 — PokerNews Day 4–8 live reports & GipsyTeam EP03 recap</div>
    <button type="button" class="btn ghost">↺ Run it again</button></div>`;
  panel.querySelector("button").onclick=()=>gymRun(el,panel);
}
window.hlInit=function(){
  document.querySelectorAll(".handlab").forEach(el=>{
    if(!el.dataset.m){el.dataset.m=1;mount(el);}
  });
  document.querySelectorAll(".aggro-gym").forEach(el=>{
    if(!el.dataset.m){el.dataset.m=1;mountGym(el);}
  });
};
function goHash(){
  try{
    const m=location.hash.match(/^#d(\d+)$/);
    if(m&&L.some(x=>x.d===+m[1])){cur=+m[1];qState=null;renderAll();window.scrollTo({top:0});}
  }catch(e){}
}
window.addEventListener("hashchange",goHash);
goHash();
window.hlInit();
})();

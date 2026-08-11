const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/About-Du5dI1P7.js","assets/react-vendors-B-7zOj2k.js","assets/vendor-BcXmBBxg.js","assets/markdown-NeE5l3ml.js","assets/BehindTheScenes-dYTyakKF.js","assets/Services-u3ol7-ww.js","assets/useScrollAnimation-Ckj-M15Q.js","assets/Portfolio-IPYp2wRu.js","assets/Contact-NxNBMwI_.js"])))=>i.map(i=>d[i]);
import{r as l,j as e,C as ae,P as fe,u as xe,a as ye,b as V,c as le,X as be,M as we,d as ve,F as de,e as ce,H as ue,L as _,D as he,f as ke,N as je,A as re,g as Ne,i as Ae,k as Ie,R as Te,l as D,B as Se,m as Ee}from"./react-vendors-B-7zOj2k.js";import{I as Pe,J as Me,C as H,K as Be}from"./vendor-BcXmBBxg.js";import{b as Ce,c as Re,d as De}from"./markdown-NeE5l3ml.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();function _e(...n){return Pe(Me(n))}const Le=fe,Fe=l.forwardRef(({className:n,sideOffset:t=4,...i},d)=>e.jsx(ae,{ref:d,sideOffset:t,className:_e("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...i}));Fe.displayName=ae.displayName;const ze="modulepreload",$e=function(n){return"/"+n},ie={},C=function(t,i,d){let o=Promise.resolve();if(i&&i.length>0){let c=function(a){return Promise.all(a.map(g=>Promise.resolve(g).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),p=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));o=c(i.map(a=>{if(a=$e(a),a in ie)return;ie[a]=!0;const g=a.endsWith(".css"),h=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${h}`))return;const x=document.createElement("link");if(x.rel=g?"stylesheet":ze,g||(x.as="script"),x.crossOrigin="",x.href=a,p&&x.setAttribute("nonce",p),document.head.appendChild(x),g)return new Promise((P,G)=>{x.addEventListener("load",P),x.addEventListener("error",()=>G(new Error(`Unable to preload CSS for ${a}`)))})}))}function r(c){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=c,window.dispatchEvent(u),!u.defaultPrevented)throw c}return o.then(c=>{for(const u of c||[])u.status==="rejected"&&r(u.reason);return t().catch(r)})},Ge="/assets/studio-9-CwJQ0Tdi.jpg",Oe=()=>{const n=l.useRef(null);xe(()=>{const i=H.timeline({defaults:{ease:"power3.out"}});H.set(".hero-element",{y:40,opacity:0}),H.set(".hero-bg",{scale:1.05}),i.to(".hero-bg",{scale:1,duration:2.5,ease:"power2.out"}),i.to(".hero-element",{y:0,opacity:1,duration:1.2,stagger:.15},"-=2")},{scope:n});const t=(i,d)=>{d.preventDefault();const o=i.substring(1),r=document.getElementById(o);r&&r.scrollIntoView({behavior:"smooth",block:"start"})};return e.jsxs("section",{id:"home",ref:n,className:"relative w-full h-[100dvh] overflow-hidden bg-background",children:[e.jsxs("div",{className:"absolute inset-0 z-0 bg-[#0D0D12] overflow-hidden",children:[e.jsx("img",{src:Ge,alt:"Studio Background",className:"hero-bg w-full h-full object-cover opacity-40 mix-blend-luminosity"}),e.jsx("div",{className:"absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0D0D12] to-transparent"}),e.jsx("div",{className:"absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#0D0D12] to-transparent"}),e.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(13,13,18,0.85)_100%)]"})]}),e.jsx("div",{className:"absolute inset-0 z-10 flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-16 container-width w-full",children:e.jsxs("div",{className:"max-w-4xl",children:[e.jsx("p",{className:"hero-element inline-block text-primary font-mono text-sm tracking-widest uppercase mb-6 px-3 py-1 rounded-full border border-primary/20 bg-primary/5",children:"Benjamin Mlynek"}),e.jsxs("h1",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"hero-element text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground/90",children:"Music Producer &"}),e.jsx("span",{className:"hero-element text-5xl md:text-8xl lg:text-9xl font-drama italic tracking-tight text-foreground leading-[1.1]",children:"Audio Engineer."})]}),e.jsx("p",{className:"hero-element mt-6 md:mt-10 text-lg md:text-xl text-muted-foreground w-full max-w-2xl font-light leading-relaxed",children:"Professional recording, mixing, and production services tailored to your artistry and vision. Based in Odense, Denmark."}),e.jsxs("div",{className:"hero-element mt-10 flex items-center gap-6",children:[e.jsx("a",{href:"#contact",onClick:i=>t("#contact",i),className:"group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-[2rem] bg-primary text-primary-foreground font-medium magnetic-button",children:e.jsx("span",{className:"relative z-10",children:"Book a Session"})}),e.jsx("a",{href:"#work",onClick:i=>t("#work",i),className:"group relative inline-flex items-center justify-center px-8 py-4 rounded-[2rem] border border-border/50 bg-card/10 backdrop-blur-sm text-foreground font-medium hover:border-primary/50 magnetic-button",children:"Explore Portfolio"})]})]})}),e.jsx("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hero-element flex flex-col items-center",children:e.jsx("a",{href:"#services",onClick:i=>t("#services",i),className:"text-muted-foreground/50 hover:text-primary transition-colors duration-300 flex flex-col items-center gap-2 group cursor-pointer",children:e.jsx(ye,{className:"w-5 h-5 animate-bounce"})})})]})},W=()=>{const[n,t]=l.useState(!1),[i,d]=l.useState(!1),o=V(),r=le();l.useEffect(()=>{const a=()=>{const g=window.scrollY>30||o.pathname!=="/";d(g)};return a(),window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[o.pathname]);const c=[{name:"Home",href:"#home",isRoute:!1},{name:"About",href:"#about",isRoute:!1},{name:"Work",href:"#work",isRoute:!1},{name:"Services",href:"#services",isRoute:!1},{name:"Guides",href:"/guides",isRoute:!0},{name:"Contact",href:"#contact",isRoute:!1}],u=(a,g)=>{if(g.preventDefault(),a.isRoute)r(a.href);else if(o.pathname!=="/")r("/"),setTimeout(()=>{const h=a.href.substring(1),x=document.getElementById(h);x&&x.scrollIntoView({behavior:"smooth",block:"start"})},100);else{const h=a.href.substring(1),x=document.getElementById(h);x&&x.scrollIntoView({behavior:"smooth",block:"start"})}t(!1)},p=i||n;return e.jsx("div",{className:"fixed top-0 w-full z-50 pointer-events-none flex justify-center px-4 pt-6 transition-all duration-500 max-w-[100vw]",children:e.jsxs("nav",{className:`pointer-events-auto transition-all duration-500 overflow-hidden ${p?`bg-background/80 backdrop-blur-xl border border-border shadow-2xl ${n?"rounded-[2rem]":"rounded-full"} px-6 py-3`:"bg-transparent px-6 py-3"}`,children:[e.jsxs("div",{className:"flex items-center justify-between min-w-[300px] md:min-w-[600px] gap-8",children:[e.jsx("a",{href:"/",onClick:a=>{a.preventDefault(),r("/"),t(!1),window.scrollTo({top:0,behavior:"smooth"})},className:"text-2xl font-drama font-bold text-foreground cursor-pointer tracking-tighter",children:"BM."}),e.jsx("div",{className:"hidden md:flex items-center space-x-8",children:c.map(a=>e.jsx("a",{href:a.href,onClick:g=>u(a,g),className:"text-sm font-medium text-foreground/80 hover:text-primary magnetic-button cursor-pointer",children:a.name},a.name))}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("a",{href:"https://instagram.com/benjaminmlynek",target:"_blank",rel:"noopener noreferrer",className:"inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 magnetic-button hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60","aria-label":"Instagram",children:e.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor",children:e.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})}),e.jsx("button",{type:"button",className:"md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 magnetic-button hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60","aria-label":n?"Close navigation menu":"Open navigation menu","aria-expanded":n,"aria-controls":"mobile-navigation",onClick:()=>t(!n),children:n?e.jsx(be,{size:20}):e.jsx(we,{size:20})})]})]}),n&&e.jsx("div",{id:"mobile-navigation",className:"md:hidden mt-4 pt-4 border-t border-border/50 flex flex-col items-center space-y-4",children:c.map(a=>e.jsx("a",{href:a.href,onClick:g=>u(a,g),className:"block text-foreground/80 hover:text-primary transition-colors duration-200 cursor-pointer font-medium",children:a.name},a.name))})]})})},L="https://benjaminmlynek.com",me=L.replace(/\/$/,""),q={home:{title:"Benjamin Mlynek - Music Producer & Audio Engineer",description:"Benjamin Mlynek offers professional recording, mixing, and mastering services for artists ready to release polished music. Partner with an experienced engineer who keeps your vision front and center from the first take to the final master.",canonicalUrl:L,ogType:"website"},guides:{title:"Guides & Resources for Artists | Benjamin Mlynek",description:"Step-by-step guides that help artists prepare files, sessions, and workflows for professional recording, mixing, and mastering.",canonicalUrl:`${L}/guides`,ogType:"website"}},He=n=>({title:`${n.title} | Benjamin Mlynek Guides`,description:n.description,canonicalUrl:`${L}/guides/${n.slug}`,ogType:"article",ogImage:n.ogImage}),Y=typeof document<"u",oe=n=>{if(!n)return;if(/^https?:\/\//i.test(n))return n;const t=n.startsWith("/")?n:`/${n}`;return`${me}${t}`},w=(n,t,i)=>{if(!Y)return;const d=`meta[${n}="${t}"]`;let o=document.head.querySelector(d);if(!i){o&&document.head.removeChild(o);return}o||(o=document.createElement("meta"),o.setAttribute(n,t),document.head.appendChild(o)),o.setAttribute("content",i)},Ue=n=>{if(!Y||!n)return;let t=document.head.querySelector('link[rel="canonical"]');t||(t=document.createElement("link"),t.setAttribute("rel","canonical"),document.head.appendChild(t)),t.setAttribute("href",n)},K=({title:n,description:t,canonicalUrl:i,ogType:d="website",ogImage:o})=>(l.useEffect(()=>{!Y||!n||(document.title=n,w("property","og:title",n),w("name","twitter:title",n))},[n]),l.useEffect(()=>{t&&(w("name","description",t),w("property","og:description",t),w("name","twitter:description",t))},[t]),l.useEffect(()=>{const r=oe(i??"/");r&&(Ue(r),w("property","og:url",r))},[i]),l.useEffect(()=>{w("property","og:type",d??"website")},[d]),l.useEffect(()=>{const r=oe(o);w("name","twitter:card",r?"summary_large_image":"summary"),r?(w("property","og:image",r),w("name","twitter:image",r)):(w("property","og:image"),w("name","twitter:image"))},[o]),null),Q=()=>e.jsx("footer",{className:"bg-[#0A0A0E] rounded-t-[4rem] border-t border-border/20 pt-20 pb-10 mt-10 shadow-2xl relative z-10",children:e.jsxs("div",{className:"container-width section-padding",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-12 mb-16",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-3xl font-drama font-bold text-foreground",children:"BM."}),e.jsx("p",{className:"text-muted-foreground font-mono text-sm",children:"Music Producer & Audio Engineer"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-lg font-semibold text-foreground",children:"Navigation"}),e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx("a",{href:"/#about",className:"text-muted-foreground hover:text-primary transition-colors magnetic-button origin-left w-fit",children:"About"}),e.jsx("a",{href:"/#work",className:"text-muted-foreground hover:text-primary transition-colors magnetic-button origin-left w-fit",children:"Work"}),e.jsx("a",{href:"/#services",className:"text-muted-foreground hover:text-primary transition-colors magnetic-button origin-left w-fit",children:"Services"}),e.jsx("a",{href:"/guides",className:"text-muted-foreground hover:text-primary transition-colors magnetic-button origin-left w-fit",children:"Guides"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-lg font-semibold text-foreground",children:"Connect"}),e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx("a",{href:"https://instagram.com/benjaminmlynek",target:"_blank",rel:"noopener noreferrer",className:"text-muted-foreground hover:text-primary transition-colors magnetic-button origin-left w-fit",children:"Instagram"}),e.jsx("a",{href:"/#contact",className:"text-muted-foreground hover:text-primary transition-colors magnetic-button origin-left w-fit",children:"Email"})]})]})]}),e.jsx("div",{className:"pt-8 border-t border-border/20 flex flex-col md:flex-row justify-center items-center gap-4",children:e.jsx("p",{className:"text-muted-foreground text-sm font-mono",children:"© 2026 Benjamin Mlynek."})})]})}),Ve=l.lazy(()=>C(()=>import("./About-Du5dI1P7.js"),__vite__mapDeps([0,1,2,3]))),We=l.lazy(()=>C(()=>import("./BehindTheScenes-dYTyakKF.js"),__vite__mapDeps([4,1,2,3]))),qe=l.lazy(()=>C(()=>import("./Services-u3ol7-ww.js"),__vite__mapDeps([5,1,2,3,6]))),Ye=l.lazy(()=>C(()=>import("./Portfolio-IPYp2wRu.js"),__vite__mapDeps([7,1,2,3,6]))),Ke=l.lazy(()=>C(()=>import("./Contact-NxNBMwI_.js"),__vite__mapDeps([8,1,2,3,6]))),B=({id:n})=>e.jsx("section",{id:n,className:"py-20",children:e.jsx("div",{className:"container-width section-padding",children:e.jsx("div",{className:"h-32 rounded-2xl bg-card/40 animate-pulse","aria-hidden":"true"})})}),Qe=()=>e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsx(K,{...q.home}),e.jsx(W,{}),e.jsx(Oe,{}),e.jsx(l.Suspense,{fallback:e.jsx(B,{id:"about"}),children:e.jsx(Ve,{})}),e.jsx(l.Suspense,{fallback:e.jsx(B,{id:"behind-scenes"}),children:e.jsx(We,{})}),e.jsx(l.Suspense,{fallback:e.jsx(B,{id:"work"}),children:e.jsx(Ye,{})}),e.jsx(l.Suspense,{fallback:e.jsx(B,{id:"services"}),children:e.jsx(qe,{})}),e.jsx(l.Suspense,{fallback:e.jsx(B,{id:"contact"}),children:e.jsx(Ke,{})}),e.jsx(Q,{})]}),Je=`---
title: "Guide to Home Recording"
description: "Everything you need to know to get professional results from your home studio setup."
---

_Quality recordings begin long before mixing._

> Even with the best mixing or mastering engineer, a track can only sound as good as the recordings allow. Capturing clean, balanced, and expressive performances at home is entirely possible — it just requires attention to detail and a few smart choices. This guide will help you get professional-sounding results from your home setup.

---

## 1. Room and Environment

---

### Choose the Right Space
Pick the quietest room possible — one without noticeable echo or outside noise. Avoid rooms with large reflective surfaces (like bare walls and windows). Soft furnishings, rugs, and curtains help reduce reflections and make the space more controlled.

If possible, avoid recording near computers, air conditioners, or other noise sources.

> Tip: Clap in the room — if you hear a harsh, metallic echo, it’s too reflective. Add some blankets or acoustic panels.

---

### Acoustic Treatment
You don’t need a professional studio build. A few simple measures go a long way:

- Hang thick curtains or duvets behind and to the sides of your microphone.  
- Place a rug underfoot if the floor is hard.  
- Use a reflection filter behind the mic if available.  

The goal is to minimize sound bouncing around the room before it hits the microphone.

---

## 2. Microphone Technique

---

### Positioning and Distance
Keep about **15–20 cm (6–8 inches)** between your mouth and the microphone.  
Use a **pop filter** to reduce plosive sounds (like “p” and “b”).  
Stay consistent in your position — don’t move forward or backward mid-take.

If you’re using a condenser mic, aim it slightly off-center to reduce sibilance (harsh “s” sounds).

---

### Gain Staging
Set your recording levels so that peaks hit around **-12 dBFS to -6 dBFS** on your input meter.  
Avoid clipping (red lights or flat-topped waveforms). Digital clipping cannot be repaired later.

> If your takes are too quiet, raise the input gain slightly — but never at the expense of distortion.

---

### Monitoring
Use **closed-back headphones** when recording vocals or live instruments. This prevents the backing track from bleeding into your microphone.  
Keep the headphone volume moderate to avoid feedback or performance fatigue.

---

## 3. Recording Instruments

---

### Electric Guitar
> Always check your tuning before every take. Guitars drift faster than you think.  
> Even minor pitch shifts between double-tracked guitars can ruin tightness and stereo image.  
> Fresh strings and frequent tuning make the mix and performance sound instantly more professional.

#### **Get Your Guitar Set Up Right**
Most tuning problems start before anyone hits record. Get these three things right first:

- **Match string gauge to your tuning.** Strings too light for a low or dropped tuning lose stability under hard picking, sagging in pitch right after the attack. Go a gauge or two heavier: around 11–56 for half-step-down or drop D, 12–60 for drop C or lower, and a heavy single (upper 60s to low 70s) or baritone set for drop A and below.
- **Restring right before the session, not days ahead.** An older, stretched string drops pitch noticeably as a note rings out, and it only gets worse with age. Bring new strings up to pitch without aggressively stretching them by hand; you want stable tuning for a few hours, not a “broken-in” set for a live show.
- **Use a tuner that reads in cents, and check intonation too.** A cheap clip-on tuner’s in-tune range is often wider than it looks. For intonation, play the same note open, then at the 12th fret. If the fretted note is sharp or flat against the open string, that’s a setup issue (bridge saddle adjustment), not a tuning one, and it should be checked at the tuning you’re actually recording in.

#### **Play Tight, Then Edit Tight**
No amount of mixing rescues a sloppy performance. A few habits make this much easier:

- **Rehearse until it’s genuinely comfortable, before you record.** Inconsistent picking dynamics, buzzing frets, and timing slips are far easier to fix by playing the part again than by editing around them afterward.
- **Tune at the same intensity you’re actually going to play with.** A string tuned while picking softly reads sharp the moment you dig in for real, especially on a low string. Picking closer to the bridge also helps. Retune often too, even if the last take sounded fine, since a guitar can drift as a whole and still sound in tune with itself.
- **Punch in on just the bad bar**, not a whole shaky pass because “the rest was good.” For a genuinely difficult passage, it’s fine to isolate it: loop just that phrase against a click until it’s clean, then drop it in. Treat that as a last resort though, not your default. A slightly imperfect take with real character almost always beats one that’s technically flawless but robotic.

#### **Record in Sections, Not One Take**
Trying to nail an entire song in a single unbroken pass almost always produces uneven energy and creeping tempo or pitch drift, especially past the two-minute mark.

- **Record in pieces.** Track verse, chorus, and bridge separately, or phrase by phrase for tricky riffs, then comp together the strongest takes. This is standard practice on professional sessions, and it’s the difference between a track that sounds *played* and one that sounds *performed*.
- **Don’t pile on layers for size.** Two genuinely tight, clean rhythm takes (left and right) usually sound bigger than four or five loose ones, since it’s the tightness between takes that creates size, not the track count. If a part repeats identically later in the song, copy the take you already have instead of re-recording it.

#### **Use a Real Amp or a Proper Amp Simulator**
If you’re tracking direct through an interface, multi-effects unit, or modeler, confirm that an actual amp simulator is engaged before you print the signal: a modeled amp and cabinet, not just compression, EQ, and time-based effects. Guitar run straight into an interface without amp/cab modeling has no speaker breakup or power-amp saturation shaping it. It reads as thin, harsh, and unmistakably “digital,” no matter how good the playing is.

> Before committing to a full session, record a short test pass and listen back on headphones. If it doesn’t sound like a mic’d amp, your amp sim isn’t actually in the signal path. Check your patch or plugin chain before you track anything for real.

#### **Always Print a DI Track**
Whether you’re mic’ing a real amp or recording direct, always capture a clean **DI signal** in parallel with the processed tone.

- **It’s a safety net.** This costs nothing during tracking but gives your mixer the option to re-amp or change the tone entirely without needing you back in the room.
- **It makes editing far easier.** A processed guitar track is often just a solid block of waveform, but the DI shows exactly where each note and strum starts, which matters if timing ever needs tightening. A processed-only take with no DI is a dead end if the sound needs to change later.

Label your tracks clearly inside your DAW:
- <span class="guide-chip">Guitar Rhythm DI</span>  
- <span class="guide-chip">Guitar Rhythm Amp</span>

#### **Give Leads Their Own Identity**
A lead using the exact same guitar, tone, and settings as the rhythm tracks tends to blend in rather than cut through.

- **Change something about the tone.** Swapping guitars, or even just pickups, through the same amp setup is often enough to separate a lead from the rhythms underneath it. A touch more midrange helps it sit on top of a dense mix too.
- **Mute unused strings.** For single-note lines and octaves, lightly muting strings you’re not playing with your fretting or picking hand cuts down on noise that gets buried under rhythm guitars but sticks out on an exposed lead.

#### **Clean Up Your Edits Before You Deliver**
Before a session is really done, whether you’re mixing it yourself or sending it off, go back through every guitar track in solo.

- **Check every edit and crossfade** for clicks, pops, or a fade that got skipped while you were moving fast during tracking.
- **Don’t snap everything to the grid.** Nudge anything that’s a touch early or late, but over-tightened edits lose their feel and start to sound robotic. A little natural variation is what keeps it sounding human.
- **Trim ringing tails** so a new section hits cleanly instead of bleeding into what came before it, and keep a duplicate of your edited tracks before consolidating them down to one clean region per part.

#### **What to Deliver to Your Mixer**
A finished guitar session handed off for mixing should include:
- In-tune, edited performances comped from multiple takes, not a single raw pass with mistakes left in
- A clean DI track for every part, printed alongside any amp or amp-sim tone
- At least one reference tone print (mic’d amp or amp sim) so the mixer understands the direction you were going for
- One consolidated, edit-checked track per part, not dozens of leftover regions and crossfades from tracking
- Consistent levels with no clipping, and noise or silence trimmed between sections

> If a part isn’t in tune, isn’t tight, or was recorded with no amp sim and no DI, no mix can fully fix it. Solving these problems is cheap during tracking. Fixing them afterward is expensive, if it’s even possible at all.

---

### Bass
> Bass tuning is simpler than guitar: one string, one note at a time. But that also means there’s nowhere to hide a bad note.  
> A few extra minutes on setup and signal chain save hours of trying to fix a bass part that’s out of tune or lost in the mix.  
> Unlike guitar, bass doesn’t need to be edited perfectly tight. A little natural feel against a locked-in grid is usually a good thing.

#### **Track Guitars First**
Tuning is the hardest thing to keep airtight on guitar. Technique, strings, and setup all fight against you, while bass is comparatively simple, since it’s one note at a time.

Recording all the guitars first means that if a chord somewhere on the neck ends up a touch sharp or flat, you can nudge the bass note to match it during bass tracking, a small, easy fix. Do it the other way around and a slightly-off bass makes it nearly impossible to match a full chord shape to later. It’s also easier to shape a bass tone that sits well under the guitars once they already exist, rather than guessing at how it’ll fit beforehand.

#### **Get Your Bass Set Up Right**
The same setup principles as guitar apply, just scaled up.

- **Go heavier on string gauge for lower tunings.** A half-step or so down, a heaviest-available four-string set (roughly a **.110** low string) is a reasonable baseline. Anything lower, go to a five-string with heavier gauges still.
- **Check intonation the same way as guitar** (open string against the 12th fret). If it reads sharp with no more room to move the saddle back, try lowering the string action instead; less finger pressure needed to fret a note means less pitch-sharpening from the press, and it often solves what the saddle alone can’t.

#### **Bass Can Sit a Little Looser**
Once the guitars are locked down tight and the drums are gridded, a bass played a touch more naturally actually complements the rest of the track rather than fighting it. Bigger sections and less note-by-note editing are fine here. Aim for solid takes and good tuning, but bass doesn’t need the same tightness as rhythm guitar.

A few things worth watching for:
- **String ringing.** The low string can bleed into the next note as the player jumps between strings, a common bass habit that reads as messy against a tight mix. Mute the previous string, or split the take into smaller punches if it keeps happening.
- **High notes on a low string.** For a note fretted high up on a lower string, it’s often easier to get accurate tuning by punching that note in on the next string up instead.
- **Fret-specific tuning issues.** Problems tend to show up at particular spots, like the first fret of a string. If a part lives there, check the tuning right at that fret rather than trusting a general tune-up.

#### **Blend a Clean and a Dirty Tone**
You don’t need to mic a bass cab to get a great bass tone. A clean DI plus a driven or saturated tone (from a bass preamp/drive pedal or plugin) is a complete, professional-grade approach on its own.

If you’re layering more than one source, each one has a job:
- **DI:** stays clean and flexible, and always gives you the option to re-amp or change the tone later without calling anyone back in.
- **Driven layer:** adds midrange aggression that helps the bass cut through dense guitars.
- **Mic’d amp** (if you have one): sits underneath as the heaviest, dirtiest of the three.

Two things to watch when blending them: check that a clean DI and a processed layer are in phase, since having traveled through different paths they can land slightly out of alignment and cancel some frequencies (listen for whichever phase relationship sounds fuller). And don’t expect the dirty layer to carry the low end; it’s there for midrange bite, so it’s fine, often better, to roll off some of its low and extreme high end.

Label your tracks clearly inside your DAW:
- <span class="guide-chip">Bass DI</span>  
- <span class="guide-chip">Bass Drive</span>  
- <span class="guide-chip">Bass Amp</span>

#### **Clean Up Your Edits Before You Deliver**
Before a session is really done, whether you’re mixing it yourself or sending it off, go back through the bass track in solo and check each edit and crossfade for clicks, pops, or a missed fade.

- **Judge the edits in context**, against the rest of the rhythm section rather than in solo, so you don’t over-tighten something that already sits well with the drums.
- **Reuse clean repeats.** If a section repeats and an earlier pass is noisier or looser than a later one, it’s fine to copy the cleaner repeat into place rather than fixing the messier one by hand.
- **Keep a duplicate** of your edited tracks before consolidating them down to one clean region, so you can always get back to the individual takes later.

#### **What to Deliver to Your Mixer**
A finished bass session handed off for mixing should include:
- In-tune, edited performances comped from multiple takes, not a single raw pass with mistakes left in
- A clean DI track, printed alongside any driven or amp tone
- At least one reference tone print (driven or mic’d amp tone) so the mixer understands the direction you were going for
- One consolidated, edit-checked track, not dozens of leftover regions and crossfades from tracking
- Consistent levels with no clipping, and noise or silence trimmed between sections

> If a part isn’t in tune, isn’t tight, or has no DI backing up the tone you printed, no mix can fully fix it. Solving these problems is cheap during tracking. Fixing them afterward is expensive, if it’s even possible at all.

---

### Acoustic Instruments
Use a condenser mic about 30–60 cm away, aimed where the neck meets the body for a balanced tone.  
Avoid pointing the mic directly at the sound hole — this can cause boomy low-end buildup.

Record multiple takes and choose the most consistent performance, not necessarily the first.

---

### MIDI and Virtual Instruments
If you’re using software instruments, always **export the MIDI performance and a rendered audio version** once your production is complete.  
This ensures the mix engineer can reproduce or tweak sounds later if needed.

Inside your DAW, keep naming consistent:
- <span class="guide-chip">Piano Main</span>  
- <span class="guide-chip">Synth Arp</span>  
- <span class="guide-chip">Pad Texture</span>

---

## 4. Vocal Recording

---

### Preparation
Warm up your voice, hydrate, and rehearse before recording.  
Avoid dairy, carbonated drinks, or coffee just before vocal takes — they can affect tone and clarity.

---

### Performance
Focus on **emotion and consistency** over perfection.  
If you’re recording harmonies or doubles, keep phrasing and timing tight — but let natural differences add depth.

Record multiple takes (3–5) for each section. Label them clearly in your DAW:
- <span class="guide-chip">Lead Vocal Take 1</span>  
- <span class="guide-chip">Lead Vocal Take 2</span>  
- <span class="guide-chip">Lead Vocal Comped</span> (after editing)

---

### Comping and Editing
Select the best phrases from each take and compile them into a single, strong performance.  
Remove clicks, coughs, or long silences.  
Avoid excessive tuning or timing correction — keep it natural unless the style demands precision.

---

## 5. File Management and Organization

---

### Folder Structure
Keep your project tidy from the start.  
A clear folder system avoids confusion when you later export for mixing.

**Example:**
\`\`\`text
/SongTitle_Session/
├── Audio/
│   ├── Lead Vocal Takes/
│   ├── Guitars/
│   ├── Bass/
│   ├── Drums/
│   └── Synths/
├── MIDI/
│   ├── Piano Main.mid
│   └── Synth Arp.mid
├── RoughMixes/
│   └── SongTitle_RoughMix.wav
└── ProjectFiles/
    └── SongTitle.logicx
\`\`\`
`,Xe=`---
title: "Studio Session Preparation"
description: "Complete checklist and guidelines for preparing for professional recording sessions."
---

_Make the most of your time in the studio._

> Whether you’re recording in your own space or booking time at a professional studio, proper preparation will help you capture better performances, stay efficient, and keep creativity flowing. Studio time can be expensive and fast-paced — being organized beforehand lets you focus entirely on the music once the session begins.

---

## 1. Know Your Songs Inside Out

---

### Rehearse Thoroughly
Practice every part until it feels second nature.  
You should know your lyrics, arrangement, and transitions so well that you can perform confidently without relying on guesswork.

> Tip: The more relaxed and prepared you are, the more time you’ll have to experiment and capture emotion instead of problem-solving.

---

### Lock In the Arrangement
Decide on structure, tempo, and key *before* the session.  
If you’re still unsure, make rough demos or voice memos and finalize those decisions in advance.

Use a simple structure guide:
- <span class="guide-chip">Intro</span>  
- <span class="guide-chip">Verse 1</span>  
- <span class="guide-chip">Pre-Chorus</span>  
- <span class="guide-chip">Chorus</span>  
- <span class="guide-chip">Bridge</span>  
- <span class="guide-chip">Outro</span>

Having this mapped out helps everyone stay on the same page.

---

## 2. Prepare Backing Material and Files

---

### Bring Session Files (If Applicable)
If you’re bringing existing recordings or instrumentals, make sure:
- All files are clearly named  
- They start at bar 1 or 00:00:00  
- The sample rate and bit depth are correct  
- The BPM and key are noted  

Example naming inside your DAW:
- <span class="guide-chip">Instrumental Full</span>  
- <span class="guide-chip">Click Track</span>  
- <span class="guide-chip">Backing Vocals</span>  
- <span class="guide-chip">Guide Guitar</span>

Include a rough mix or demo to show the song’s intended energy or feel.

---

### Print or Export Lyrics and Notes
Have a printed or digital copy of your lyrics, chord charts, or arrangement notes.  
This helps you stay organized and allows the engineer or producer to follow along easily.

Example:
- <span class="guide-chip">Lyrics_TrackName.pdf</span>  
- <span class="guide-chip">Chord Chart - SongTitle.pdf</span>

---

### Prepare a Click Track (If Needed)
If your song is recorded to a grid, make sure your **click tempo and time signature** are finalized.  
If it’s live and freeform, let your engineer know ahead of time so they can plan mic setups accordingly.

---

## 3. Equipment and Setup

---

### Instruments
Check that all instruments are in proper working condition:
- Fresh strings on guitars and basses  
- Tuned drums with solid heads  
- No crackling cables or loose jacks  

#### **Guitar and Bass Setup**

For string instruments, tuning is everything. Even the tightest performance will fall apart if the tuning drifts — and it often does.

- Always **tune before every take**, sometimes even between sections of the same song.  
- Check tuning immediately after tracking — if it’s off, redo the take. It’s worth it.  
- Use a reliable tuner (clip-on or pedal), and make sure everyone tunes to the same reference (usually A=440 Hz).  

A fresh set of strings should be installed **right before recording** — ideally on the same day.  
A good player can usually record **two songs per set of strings** before tone and stability start to degrade.  

> Avoid the old myth about “stretching” new strings by pulling on them. Instead, tune the guitar repeatedly during the first few minutes of playing. The strings will naturally stabilize without unnecessary wear.

**Bring spare sets** of strings, batteries, drumsticks, and picks. They’re small items, but they can save an entire session when something breaks mid-take.

---

### Personal Gear
If you’re bringing your own gear (instruments, pedals, mics, laptop), make a short checklist:
- <span class="guide-chip">Guitar Pedalboard</span>  
- <span class="guide-chip">Audio Interface</span>  
- <span class="guide-chip">Laptop + Charger</span>  
- <span class="guide-chip">In-Ear Monitors</span>

Label everything clearly and test cables beforehand.

---

## 4. Vocal and Performance Prep

---

### Rest and Hydration
Your voice is an instrument — treat it like one.  
Get enough rest the night before, stay hydrated, and avoid caffeine, alcohol, and dairy leading up to the session.

---

### Warm Up
Spend at least 10–15 minutes warming up before recording.  
Even a few scales, light stretches, or breathing exercises make a noticeable difference.

---

### Mental Preparation
Recording can be emotionally and creatively intense.  
Take a few minutes to center yourself before stepping into the booth or picking up an instrument.  
Bring any lyrics, inspiration, or notes that help you connect with the song’s meaning.

---

## 5. Communication and Collaboration

---

### Share Your Vision
If you’re working with a producer or engineer, describe what you’re aiming for:
- Reference tracks that match your sound or mood  
- Details about tone, atmosphere, or vocal treatment  

Examples of useful references:
- <span class="guide-chip">Reference - ArtistName Song1</span>  
- <span class="guide-chip">Reference - ArtistName Song2</span>

---

### Be Open to Feedback
Studio sessions are collaborative.  
Trust your engineer or producer — they might suggest mic placements, takes, or tonal adjustments that elevate your performance.  
The best results come from mutual trust and creative openness.

---

## 6. Logistics and Time Management

---

### Plan Enough Time
If possible, don’t pack too much into a single day.  
Schedule setup, tuning, and warm-up time.  
A realistic plan might look like:
- Setup and soundcheck – 1 hour  
- Recording main takes – 2–3 hours  
- Overdubs and harmonies – 1–2 hours  
- Listening and notes – 30 minutes  

Being time-aware prevents stress and helps maintain focus.

---

### Bring Essentials
A small checklist can make the day smoother:
- Water and light snacks  
- Notebook or phone for notes  
- Charger for your phone/laptop  
- Backup USB stick or SSD  

---

## 7. After the Session

---

### Backup Everything
Ask for a copy of your session or take home a USB backup before leaving the studio.  
Accidents happen — don’t rely on the studio alone to store your work.

---

### Review and Notes
After the session, listen critically and take notes on what you love and what might need another take or tweak.  
Write down timestamps for feedback if revisions are planned.

---

## Final Checklist

- [x] Songs rehearsed and arranged  
- [x] Files labeled, click track ready  
- [x] Gear checked and working  
- [x] Reference tracks and lyric sheets prepared  
- [x] Hydration, rest, and warm-up done  
- [x] Session backed up after recording`,Ze=`---
title: "Preparing Files for Mixing"
description: "Essential guidelines for organizing and preparing your multitrack files for professional mixing."
---

_A clean mix starts with clean files._

> To ensure the best possible result when sending your project for mixing, it's important that everything is well-organized, properly labeled, and exported in a format that gives the mixing engineer full flexibility. Below you'll find a detailed checklist and explanations to help you prepare your session for mixing. If any questions should arise, feel free to get a hold of me either via mail or phone.

---

## 1. Exporting Your Tracks
---
### Consolidate All Tracks
Every audio file should start from **bar 1 (or 00:00:00)** — even if the actual sound comes in later. This ensures that when all the files are imported into a new session, everything lines up perfectly.

**Good example:**  
A vocal harmony that only plays in the chorus is still exported as a full-length file, starting at bar 1.

**Bad example:**  
A vocal harmony stem that starts exactly when the part comes in. This will cause alignment issues.

> Tip: Most DAWs have a “consolidate” or “bounce in place” feature for this.

---

### Clear and Consistent Track Naming
Use clear, descriptive names for each stem. This saves time and avoids confusion for the mix engineer.

**Recommended format:**  
<span class="guide-chip">Instrument_Role_Position</span>

**Examples:**
- <span class="guide-chip">LeadVox_Main</span>  
- <span class="guide-chip">Guitar_RhythmL</span>  
- <span class="guide-chip">Guitar_RhythmR</span>  
- <span class="guide-chip">Kick</span>  
- <span class="guide-chip">SnareTop</span>  
- <span class="guide-chip">SnareBottom</span>  
- <span class="guide-chip">BassDI</span>  
- <span class="guide-chip">BassAmp</span>  
- <span class="guide-chip">Synth_Arp</span>  
- <span class="guide-chip">BV_StackL</span>, <span class="guide-chip">BV_StackR</span>

Avoid default names like <span class="guide-chip">Audio_01.wav</span> or <span class="guide-chip">Track5.wav</span>.

---

### Print Dry Tracks (No Effects)
Unless a specific effect is absolutely essential to the sound or the vibe (for example, a chorus on a synth or a creative vocal delay), export your tracks dry:

- No EQ  
- No compression  
- No reverb or delay  

If you’re unsure whether an effect should be kept or removed, you can send both a dry and a wet version, clearly labeled (e.g. <span class="guide-chip">LeadVox_Main_Dry.wav</span> and <span class="guide-chip">LeadVox_Main_Wet.wav</span>).

---

### Audio File Format
- **Format:** WAV (or AIFF if needed)  
- **Bit Depth:** 24-bit (or higher if recorded that way)  
- **Sample Rate:** 44.1 kHz or 48 kHz (match your session settings)  
- Do not send MP3 files unless there is no other option  

Lossy files like MP3 reduce audio quality and can negatively affect the final mix.

---

## 2. Session Information & Extras

---

### Provide a Tempo Map or BPM
Let your mix engineer know the BPM (tempo) of the track. If your song includes tempo changes, export and include a tempo map or a MIDI file with tempo automation.

**Example:**  
“The track is in 6/8 at 90 BPM throughout.”

---

### Include a Reference Mix
Always include a rough mix of your track — even if it's not polished. This gives your engineer an idea of:

- How you envision the balance  
- Panning ideas  
- Effects usage  
- Vocal placement  

Label it clearly, for example: <span class="guide-chip">TrackName_RoughMix.wav</span>.

---

### Add Notes If Needed
If there are parts that need special attention (or things you're unsure about), include a short text file or an email with notes such as:

- “The vocals in the bridge need tuning.”  
- “The guitar solo is meant to sound raw.”  
- “Let me know if you think the harmonies are too loud.”  

More context always leads to a better result.

---

### Keep It Simple
Don’t send full DAW projects unless requested. Engineers often work in a different DAW than you, so audio files (WAVs) are the universal standard.

**Example folder structure:**
\`\`\`text
/TrackName_MixPrep/
├── Audio Stems/
│   ├── LeadVox_Main.wav
│   ├── LeadVox_Doubles.wav
│   ├── Guitar_RhythmL.wav
│   └── ...
├── TrackName_RoughMix.wav
├── TrackNotes.txt
└── BPM_TempoMap.mid
\`\`\`

---

## 3. Final Checklist

---

- [x] All files start at bar 1 and are the same length
- [x] Tracks are clearly named
- [x] Effects removed unless essential
- [x] 24-bit WAV, 44.1/48 kHz
- [x] Rough mix included
- [x] BPM and notes provided`,en=`---
title: "Preparing Files for Mastering"
description: "How to prepare your final mix for the mastering process to achieve the best possible results."
---

_The final polish starts with a balanced, dynamic mix._

> Before sending your mix for mastering, it’s important to make sure your mix is properly prepared. The goal is to give the mastering engineer enough headroom, clarity, and consistency to bring your track to its full potential without distortion or compromise.

---

## 1. Preparing the Mix

---

### Leave Headroom
Ensure your final mix peaks between **-6 dBFS and -3 dBFS** on the master bus. This gives the mastering engineer room to apply EQ, compression, and limiting without distortion.

**Do not** normalize your mix or use a limiter to push it close to 0 dBFS.

> Tip: If your mix is clipping, lower your track or bus volumes instead of adding a limiter.

---

### Avoid Processing on the Master Bus
Remove or bypass any processing on your master channel that affects the overall tone or loudness, such as:

- Limiters  
- Maximizers  
- Mastering compressors  
- Stereo wideners  

If you’ve used subtle mix-bus EQ or glue compression that’s part of your sound, it’s fine to keep it — but make sure the mastering engineer knows.

---

### Check for Clipping and Noise
Listen through your mix and confirm:

- No clipping on individual tracks or the master bus  
- No unwanted clicks, pops, or hum  
- Fades and silence are intentional at the start and end  

If there are intentional noises (like a vinyl crackle or amp hum), mention it in your notes.

---

## 2. Export Settings

---

### File Format
- **File Type:** WAV  
- **Bit Depth:** 24-bit (or 32-bit float if your mix session supports it)  
- **Sample Rate:** Keep the same as your mix session (e.g., 44.1 or 48 kHz)  
- **Channels:** Stereo interleaved  

Do not dither — your mastering engineer will handle that at the final export stage.

---

### File Naming
Use clear names to identify the song and version:

**Examples:**
- <span class="guide-chip">ArtistName_SongTitle_Mix_v3.wav</span>  
- <span class="guide-chip">SongTitle_24bit_48kHz.wav</span>

If you’re submitting an EP or album, include track numbers and desired order in a text file.

---

## 3. Provide Context

---

### Reference Tracks
Include 1–2 songs that reflect how you’d like your track to sound in terms of loudness, tonal balance, and vibe.  
Label these files clearly:

- <span class="guide-chip">Reference_Artist_Song1.mp3</span>  
- <span class="guide-chip">Reference_Artist_Song2.wav</span>

---

### Notes for the Mastering Engineer
Provide any relevant notes in a simple text file or email, such as:

- “I’d like the vocals to sit upfront like in the reference track.”  
- “Please keep the low end punchy but not boomy.”  
- “The song should translate well on streaming platforms.”  

The more details you give, the closer the final master will align with your vision.

---

### Consistency Across Tracks
If you're mastering multiple songs (EP or album), check that:

- Volume levels between tracks are consistent  
- Tonal balance feels cohesive  
- Transitions or fades are as intended  

If possible, listen to the entire sequence before sending it off.

---

## 4. Double-Check Everything

---

Before exporting, make sure that:

- The mix sounds balanced on multiple systems (studio monitors, headphones, car)  
- There are no missing plugins or offline files  
- Your exported file plays correctly from start to finish  

---

## Final Checklist

- [x] Peaks between -6 and -3 dBFS  
- [x] No limiter or heavy master-bus processing  
- [x] 24-bit WAV, correct sample rate  
- [x] No clipping or unwanted noise  
- [x] Reference mix and notes included  
- [x] File clearly named and labeled`,nn=n=>n.replace(/^"(.*)"$/,"$1").replace(/^'(.*)'$/,"$1"),F=n=>{var c,u;const t=n.split(/\r?\n/);if(((c=t[0])==null?void 0:c.trim())!=="---")return{content:n.trimStart()};let i=-1;for(let p=1;p<t.length;p+=1)if(((u=t[p])==null?void 0:u.trim())==="---"){i=p;break}if(i===-1)return{content:n.trimStart()};const d=t.slice(1,i),o=t.slice(i+1).join(`
`).trimStart(),r={};for(const p of d){const a=p.trim();if(!a||a.startsWith("#"))continue;const g=a.indexOf(":");if(g===-1)continue;const h=a.slice(0,g).trim(),x=nn(a.slice(g+1).trim());h&&(r[h]=x)}return{title:r.title,description:r.description,ogImage:r.ogImage,publishedAt:r.publishedAt,updatedAt:r.updatedAt,content:o}},z=(n,t)=>{var i,d,o,r,c;return{title:((i=n.title)==null?void 0:i.trim())||t.title,description:((d=n.description)==null?void 0:d.trim())||t.description,ogImage:((o=n.ogImage)==null?void 0:o.trim())||t.ogImage,publishedAt:(r=n.publishedAt)==null?void 0:r.trim(),updatedAt:(c=n.updatedAt||n.publishedAt)==null?void 0:c.trim(),content:n.content}},$=n=>`/og/guides/${n}.png`,I=z(F(Je),{title:"Guide to Home Recording",description:"Everything you need to know to get professional results from your home studio setup.",ogImage:$("home-recording")}),T=z(F(Xe),{title:"Studio Session Preparation",description:"Complete checklist and guidelines for preparing for professional recording sessions.",ogImage:$("studio-session-preparation")}),S=z(F(Ze),{title:"Preparing Files for Mixing",description:"Essential guidelines for organizing and preparing your multitrack files for professional mixing.",ogImage:$("preparing-files-for-mixing")}),E=z(F(en),{title:"Preparing Files for Mastering",description:"How to prepare your final mix for the mastering process to achieve the best possible results.",ogImage:$("preparing-files-for-mastering")}),J=[{slug:"home-recording",title:I.title,description:I.description,category:"Recording",downloadUrl:"/guides/home-recording-guide.pdf",icon:ve,content:I.content,ogImage:I.ogImage,publishedAt:I.publishedAt,updatedAt:I.updatedAt},{slug:"studio-session-preparation",title:T.title,description:T.description,category:"Recording",downloadUrl:"/guides/studio-session-preparation.pdf",icon:de,content:T.content,ogImage:T.ogImage,publishedAt:T.publishedAt,updatedAt:T.updatedAt},{slug:"preparing-files-for-mixing",title:S.title,description:S.description,category:"Mixing",downloadUrl:"/guides/preparing-files-for-mixing.pdf",icon:ce,content:S.content,ogImage:S.ogImage,publishedAt:S.publishedAt,updatedAt:S.updatedAt},{slug:"preparing-files-for-mastering",title:E.title,description:E.description,category:"Mastering",downloadUrl:"/guides/preparing-files-for-mastering.pdf",icon:ue,content:E.content,ogImage:E.ogImage,publishedAt:E.publishedAt,updatedAt:E.updatedAt}],tn=n=>J.find(t=>t.slug===n),sn=()=>{const n=le();return e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsx(K,{...q.guides}),e.jsx(W,{}),e.jsx("section",{className:"pt-24 pb-8",children:e.jsx("div",{className:"container-width section-padding",children:e.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[e.jsx("div",{className:"inline-block border border-border/50 px-4 py-1.5 rounded-full mb-6 text-sm font-mono tracking-wider text-muted-foreground uppercase bg-[#0A0A0E]",children:"Knowledge Hub"}),e.jsxs("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-foreground",children:["Guides & ",e.jsx("span",{className:"font-drama italic text-primary font-normal",children:"Downloads."})]}),e.jsx("p",{className:"text-lg text-muted-foreground mb-6",children:"Essential resources to help you prepare for recording sessions, mixing, and mastering. These guides will ensure we get the best possible results from our collaboration."})]})})}),e.jsx("section",{className:"pt-6 pb-16",children:e.jsx("div",{className:"container-width section-padding",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:J.map(t=>{const i=t.icon;return e.jsx("div",{className:"bg-[#0A0A0E] rounded-[2rem] p-6 lg:p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-xl group",children:e.jsxs("div",{className:"flex items-start space-x-4",children:[e.jsx("div",{className:"p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0",children:e.jsx(i,{className:"w-6 h-6"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx(_,{to:`/guides/${t.slug}`,className:"text-xl font-semibold text-foreground hover:text-primary transition-colors",children:t.title}),e.jsx("span",{className:"text-xs px-2 py-1 bg-secondary rounded-full text-secondary-foreground",children:t.category})]}),e.jsx("p",{className:"text-muted-foreground mb-4 leading-relaxed",children:t.description}),e.jsxs("div",{className:"flex flex-wrap items-center gap-x-6 gap-y-2",children:[e.jsxs(_,{to:`/guides/${t.slug}`,className:"inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors",children:[e.jsx("span",{children:"Read more"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-4 w-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"})})]}),e.jsxs("a",{href:t.downloadUrl,download:!0,className:"inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary",children:[e.jsx(he,{className:"h-4 w-4","aria-hidden":"true"}),e.jsx("span",{children:"PDF"})]})]})]})]})},t.slug)})})})}),e.jsx("section",{className:"py-24 bg-[#0D0D12] border-t border-border/20 relative z-10",children:e.jsx("div",{className:"container-width section-padding",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8 text-center",children:"Why These Guides Matter"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4",children:e.jsx(de,{className:"w-6 h-6 text-primary"})}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Save Time"}),e.jsx("p",{className:"text-muted-foreground",children:"Proper preparation eliminates technical issues and allows us to focus on creativity."})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4",children:e.jsx(ce,{className:"w-6 h-6 text-primary"})}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Better Results"}),e.jsx("p",{className:"text-muted-foreground",children:"Following these guidelines ensures we achieve the highest quality output for your music."})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4",children:e.jsx(ue,{className:"w-6 h-6 text-primary"})}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Professional Workflow"}),e.jsx("p",{className:"text-muted-foreground",children:"These practices are industry standards that professional studios use worldwide."})]})]})]})})}),e.jsx("section",{className:"py-24 bg-background",children:e.jsx("div",{className:"container-width section-padding",children:e.jsxs("div",{className:"text-center max-w-2xl mx-auto",children:[e.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-6 text-foreground",children:["Ready to Start Your ",e.jsx("span",{className:"font-drama italic text-primary font-normal",children:"Project?"})]}),e.jsx("p",{className:"text-lg text-muted-foreground mb-10 leading-relaxed",children:"Have questions about any of these guides or ready to book a session? Let's discuss your project and how we can bring your vision to life."}),e.jsx("button",{onClick:t=>{t.preventDefault(),n("/"),setTimeout(()=>{const i=document.getElementById("contact");i&&i.scrollIntoView({behavior:"smooth",block:"start"})},150)},className:"group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-[2rem] bg-primary text-primary-foreground font-medium magnetic-button shadow-xl shadow-primary/20",children:e.jsx("span",{className:"relative z-10",children:"Get In Touch"})})]})})}),e.jsx(Q,{})]})},U=n=>({node:t,children:i,...d})=>{const{id:o,className:r,...c}=d,u=typeof o=="string"?o:"",p=n==="h2"?"mt-8 text-2xl font-semibold text-foreground":n==="h3"?"mt-6 text-xl font-semibold text-foreground":"mt-4 text-lg font-medium text-foreground";return e.jsxs(n,{...c,id:u,className:`group relative scroll-mt-28 ${p} ${r??""}`.trim(),children:[u&&e.jsx("a",{href:`#${u}`,className:"anchor-link absolute -left-8 hidden h-5 w-5 items-center justify-center rounded text-muted-foreground opacity-0 transition hover:text-primary group-hover:flex group-hover:opacity-100 focus-visible:flex focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary","aria-label":`Copy link to ${u.replace(/-/g," ")}`,children:e.jsx(Ie,{className:"h-4 w-4"})}),e.jsx("span",{children:i})]})},rn=1400,on=n=>{const t=new Be;return t.reset(),n.split(/\r?\n/).map(i=>{const d=i.match(/^(#{2,4})\s+(.*)$/);if(!d)return null;const o=d[1].length,c=d[2].trim().replace(/#+$/,"").trim(),u=c.replace(/^[\*`_]+/,"").replace(/[\*`_]+$/,"");return{id:t.slug(c),title:u,depth:o}}).filter(i=>i!==null)},an=n=>{if(!n)return;if(/^https?:\/\//i.test(n))return n;const t=n.startsWith("/")?n:`/${n}`;return`${me}${t}`},ln=()=>{const{slug:n}=ke(),t=n?tn(n):void 0,[i,d]=l.useState(!1),[o,r]=l.useState(""),[c,u]=l.useState(!1),p=l.useRef(null),a=()=>{var s;((s=p.current)==null?void 0:s.timeoutId)!==void 0&&typeof window<"u"&&window.clearTimeout(p.current.timeoutId),p.current=null},g=s=>{if(typeof window>"u"){r(s);return}a();const m=window.setTimeout(()=>{p.current=null},800);p.current={id:s,timeoutId:m},r(s)},h=l.useMemo(()=>t?on(t.content):[],[t]);l.useEffect(()=>{if(typeof window>"u")return;const s=window.matchMedia(`(min-width: ${rn}px)`),m=f=>{const y=f?f.matches:s.matches;u(y),d(y)};return m(),s.addEventListener("change",m),()=>s.removeEventListener("change",m)},[]),l.useEffect(()=>{h.length!==0&&r(s=>{var m;return s&&h.some(f=>f.id===s)?s:((m=h[0])==null?void 0:m.id)??""})},[h]),l.useEffect(()=>{if(typeof window>"u"||h.length===0)return;const s=new Map,m=120,f=()=>{var te,se;if(p.current){r(p.current.id);return}const b=window.innerHeight+window.scrollY,k=document.documentElement.scrollHeight,j=(te=h[h.length-1])==null?void 0:te.id;if(b>=k-1&&j){r(j);return}if(s.size>0){const M=[...s.entries()].map(([v,N])=>({id:v,top:N.getBoundingClientRect().top-m})),A=M.filter(v=>v.top<=0).sort((v,N)=>v.top-N.top),O=M.filter(v=>v.top>0).sort((v,N)=>v.top-N.top),R=A.length>0?A[A.length-1]:O[0];if(R){r(R.id);return}}const ge=window.scrollY+m;let ee=((se=h[0])==null?void 0:se.id)??"",ne=Number.POSITIVE_INFINITY;for(const M of h){const A=document.getElementById(M.id);if(!A)continue;const O=window.getComputedStyle(A),R=parseFloat(O.scrollMarginTop||"0"),v=A.offsetTop-R,N=Math.abs(v-ge);N<ne&&(ne=N,ee=M.id)}r(ee)},y=new IntersectionObserver(b=>{b.forEach(k=>{const j=k.target.getAttribute("id");j&&(k.isIntersecting?s.set(j,k.target):s.delete(j))}),f()},{root:null,rootMargin:"-120px 0px -50% 0px",threshold:[0,.25,.5,.75,1]});for(const b of h){const k=document.getElementById(b.id);k&&y.observe(k)}return f(),window.addEventListener("scroll",f,{passive:!0}),()=>{y.disconnect(),window.removeEventListener("scroll",f),a()}},[h]);const x=l.useMemo(()=>({h2:U("h2"),h3:U("h3"),h4:U("h4")}),[]);if(!t)return e.jsx(je,{to:"/guides",replace:!0});const P=t?He(t):q.guides,G=t.icon,X=l.useMemo(()=>{if(!t)return null;const s=P.canonicalUrl,m=t.publishedAt,f=t.updatedAt??t.publishedAt,y=an(t.ogImage),b={"@context":"https://schema.org","@type":"Article",headline:t.title,description:t.description,author:{"@type":"Person",name:"Benjamin Mlynek"},mainEntityOfPage:{"@type":"WebPage","@id":s},url:s};return m&&(b.datePublished=m),f&&(b.dateModified=f),y&&(b.image=[y]),b},[t,P]),pe=s=>{if(typeof document>"u"){g(s);return}const m=()=>{const f=document.getElementById(s);f&&f.scrollIntoView({behavior:"smooth",block:"start"})};!c&&i?(d(!1),requestAnimationFrame(()=>requestAnimationFrame(m))):m(),g(s)},Z=(s,m)=>{s.preventDefault(),pe(m)};return e.jsxs("div",{className:"min-h-screen bg-background flex flex-col",children:[e.jsx(K,{...P}),X&&e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(X)}}),e.jsx(W,{}),e.jsx("main",{className:"flex-1 pt-32 pb-24",children:e.jsx("div",{className:"container-width section-padding",children:e.jsxs("div",{className:"flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative max-w-[1400px] mx-auto",children:[c&&e.jsxs("aside",{className:"sticky top-32 w-80 shrink-0 flex flex-col max-h-[calc(100vh-10rem)] bg-[#0A0A0E] border border-border/50 rounded-[2rem] overflow-hidden shadow-2xl",children:[e.jsx("div",{className:"px-8 pt-8 pb-6 border-b border-border/10",children:e.jsxs(_,{to:"/guides",className:"inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary group",children:[e.jsx(re,{className:"w-4 h-4 transition-transform group-hover:-translate-x-1"}),"Back to guides"]})}),e.jsx("nav",{className:"flex-1 overflow-y-auto px-6 py-6 text-sm text-muted-foreground",children:e.jsx("ul",{className:"space-y-1",children:h.map((s,m)=>{const f=o===s.id,y=s.depth===2,b=y&&m>0,k=s.depth===2?"":s.depth===3?"ml-4":"ml-8";return e.jsx("li",{className:b?"border-t border-border/10 pt-4 mt-4":"",children:e.jsx("a",{href:`#${s.id}`,onClick:j=>Z(j,s.id),className:`relative flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left transition-all ${y?"font-medium text-foreground":"text-foreground/70"} ${k} ${f?"bg-primary/10 text-primary font-medium translate-x-1":"hover:text-primary hover:bg-primary/5 hover:translate-x-1"}`,"aria-current":f?"true":void 0,children:e.jsx("span",{className:"flex-1 leading-snug",children:s.title})})},s.id)})})})]}),e.jsxs("div",{className:"flex-1 w-full max-w-3xl mx-auto lg:mx-0",children:[e.jsxs("div",{className:"flex flex-col gap-6 mb-12 lg:mb-16",children:[e.jsxs("div",{className:"inline-flex flex-wrap items-center gap-3 text-sm text-muted-foreground",children:[e.jsx("span",{className:"rounded-full bg-primary/10 px-3 py-1.5 text-primary flex items-center justify-center",children:e.jsx(G,{className:"h-5 w-5"})}),e.jsx("span",{className:"rounded-full bg-[#0A0A0E] border border-border/50 px-4 py-1.5 text-xs text-foreground font-mono uppercase tracking-wider",children:t.category}),e.jsxs("a",{href:t.downloadUrl,download:!0,className:"inline-flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-wider px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 transition hover:border-primary/60 hover:bg-primary/10",children:[e.jsx(he,{className:"h-3.5 w-3.5","aria-hidden":"true"}),e.jsx("span",{children:"Download PDF"})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]",children:e.jsx("span",{className:"font-drama italic text-primary font-normal",children:t.title})}),e.jsx("p",{className:"text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl",children:t.description})]})]}),h.length>0&&!c&&e.jsxs("div",{className:"mb-12",children:[e.jsxs("button",{onClick:()=>d(s=>!s),className:"w-full inline-flex items-center justify-between rounded-2xl border border-border/50 bg-[#0A0A0E] px-6 py-4 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/50 hover:text-primary","aria-expanded":i,children:[e.jsxs("span",{className:"inline-flex items-center gap-3",children:[e.jsx(Ne,{className:"w-5 h-5 text-primary"}),e.jsx("span",{className:"font-mono uppercase tracking-wider",children:"Table of contents"})]}),e.jsx(re,{className:`w-4 h-4 transition-transform duration-300 ${i?"rotate-90":"-rotate-90"}`})]}),i&&e.jsx("nav",{className:"mt-4 rounded-2xl border border-border/50 bg-[#0A0A0E] p-6 text-sm text-muted-foreground shadow-xl animate-in fade-in slide-in-from-top-4 duration-300",children:e.jsx("ul",{className:"space-y-2",children:h.map(s=>{const m=o===s.id,f=s.depth===2?"":s.depth===3?"pl-4":"pl-8";return e.jsx("li",{children:e.jsx("a",{href:`#${s.id}`,onClick:y=>Z(y,s.id),className:`relative flex w-full items-center gap-2 rounded-xl px-4 py-3 text-left transition-all ${m?"bg-primary/10 text-primary font-medium":"text-foreground/80 hover:text-primary hover:bg-primary/5"} ${f}`,"aria-current":m?"true":void 0,children:e.jsx("span",{className:"flex-1 leading-snug",children:s.title})})},s.id)})})})]}),e.jsxs("div",{className:"space-y-16",children:[e.jsx("div",{className:"guide-prose",children:e.jsx(Ae,{remarkPlugins:[Re,De],rehypePlugins:[Ce],components:x,children:t.content})}),e.jsx("div",{className:"bg-[#0A0A0E] border border-border/50 rounded-[2rem] p-8 lg:p-10 shadow-2xl relative overflow-hidden group",children:e.jsxs("div",{className:"relative z-10",children:[e.jsxs("h3",{className:"text-3xl font-bold tracking-tight mb-4",children:["Need more ",e.jsx("span",{className:"font-drama italic text-primary font-normal",children:"resources?"})]}),e.jsx("p",{className:"text-lg text-muted-foreground mb-8 leading-relaxed",children:"Explore the other guides below or reach out if you need help applying these steps to your specific project."}),e.jsx("div",{className:"flex flex-wrap gap-3",children:J.filter(s=>s.slug!==t.slug).map(s=>e.jsx(_,{to:`/guides/${s.slug}`,className:"px-5 py-2.5 text-sm font-medium rounded-full border border-border/50 hover:bg-primary/10 hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 shadow-sm bg-background/50 backdrop-blur-sm",children:s.title},s.slug))})]})})]})]})]})})}),e.jsx(Q,{})]})},dn=()=>{const n=V();return l.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",n.pathname)},[n.pathname]),e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404"}),e.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Oops! Page not found"}),e.jsx("a",{href:"/",className:"text-blue-500 hover:text-blue-700 underline",children:"Return to Home"})]})})},cn=()=>e.jsxs(Te,{children:[e.jsx(D,{path:"/",element:e.jsx(Qe,{})}),e.jsx(D,{path:"/guides",element:e.jsx(sn,{})}),e.jsx(D,{path:"/guides/:slug",element:e.jsx(ln,{})}),e.jsx(D,{path:"*",element:e.jsx(dn,{})})]}),un=()=>{const{pathname:n}=V();return l.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[n]),null},hn=()=>e.jsx(Le,{children:e.jsxs(Se,{children:[e.jsxs("svg",{className:"noise-overlay text-[0px]",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("filter",{id:"noiseFilter",children:e.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.65",numOctaves:"3",stitchTiles:"stitch"})}),e.jsx("rect",{width:"100%",height:"100%",filter:"url(#noiseFilter)"})]}),e.jsx(un,{}),e.jsx(cn,{})]})});Ee.createRoot(document.getElementById("root")).render(e.jsx(hn,{}));export{Ge as s};

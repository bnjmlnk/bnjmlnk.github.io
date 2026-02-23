const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/About-Du5dI1P7.js","assets/react-vendors-B-7zOj2k.js","assets/vendor-BcXmBBxg.js","assets/markdown-NeE5l3ml.js","assets/BehindTheScenes-CZ_x9uKc.js","assets/Services-u3ol7-ww.js","assets/useScrollAnimation-Ckj-M15Q.js","assets/Portfolio-IPYp2wRu.js","assets/Contact-CweD6KQ2.js"])))=>i.map(i=>d[i]);
import{r as l,j as e,C as ae,P as ge,u as fe,a as xe,b as W,c as le,X as ye,M as be,d as ve,F as ce,e as de,H as ue,L as D,f as we,N as ke,A as re,D as je,g as Ne,i as Ae,k as Ie,R as Se,l as C,B as Ee,m as Te}from"./react-vendors-B-7zOj2k.js";import{I as Pe,J as Me,C as V,K as _e}from"./vendor-BcXmBBxg.js";import{b as Re,c as Be,d as Ce}from"./markdown-NeE5l3ml.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}})();function De(...n){return Pe(Me(n))}const Le=ge,Fe=l.forwardRef(({className:n,sideOffset:t=4,...o},c)=>e.jsx(ae,{ref:c,sideOffset:t,className:De("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...o}));Fe.displayName=ae.displayName;const ze="modulepreload",$e=function(n){return"/"+n},oe={},R=function(t,o,c){let i=Promise.resolve();if(o&&o.length>0){let d=function(a){return Promise.all(a.map(g=>Promise.resolve(g).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),h=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));i=d(o.map(a=>{if(a=$e(a),a in oe)return;oe[a]=!0;const g=a.endsWith(".css"),m=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${m}`))return;const f=document.createElement("link");if(f.rel=g?"stylesheet":ze,g||(f.as="script"),f.crossOrigin="",f.href=a,h&&f.setAttribute("nonce",h),document.head.appendChild(f),g)return new Promise((P,H)=>{f.addEventListener("load",P),f.addEventListener("error",()=>H(new Error(`Unable to preload CSS for ${a}`)))})}))}function r(d){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=d,window.dispatchEvent(u),!u.defaultPrevented)throw d}return i.then(d=>{for(const u of d||[])u.status==="rejected"&&r(u.reason);return t().catch(r)})},He="/assets/studio-9-CwJQ0Tdi.jpg",Oe=()=>{const n=l.useRef(null);fe(()=>{const o=V.timeline({defaults:{ease:"power3.out"}});V.set(".hero-element",{y:40,opacity:0}),V.set(".hero-bg",{scale:1.05}),o.to(".hero-bg",{scale:1,duration:2.5,ease:"power2.out"}),o.to(".hero-element",{y:0,opacity:1,duration:1.2,stagger:.15},"-=2")},{scope:n});const t=(o,c)=>{c.preventDefault();const i=o.substring(1),r=document.getElementById(i);r&&r.scrollIntoView({behavior:"smooth",block:"start"})};return e.jsxs("section",{id:"home",ref:n,className:"relative w-full h-[100dvh] overflow-hidden bg-background",children:[e.jsxs("div",{className:"absolute inset-0 z-0 bg-[#0D0D12] overflow-hidden",children:[e.jsx("img",{src:He,alt:"Studio Background",className:"hero-bg w-full h-full object-cover opacity-40 mix-blend-luminosity"}),e.jsx("div",{className:"absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0D0D12] to-transparent"}),e.jsx("div",{className:"absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#0D0D12] to-transparent"}),e.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(13,13,18,0.85)_100%)]"})]}),e.jsx("div",{className:"absolute inset-0 z-10 flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-16 container-width w-full",children:e.jsxs("div",{className:"max-w-4xl",children:[e.jsx("p",{className:"hero-element inline-block text-primary font-mono text-sm tracking-widest uppercase mb-6 px-3 py-1 rounded-full border border-primary/20 bg-primary/5",children:"Benjamin Mlynek"}),e.jsxs("h1",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"hero-element text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground/90",children:"Music Producer &"}),e.jsx("span",{className:"hero-element text-5xl md:text-8xl lg:text-9xl font-drama italic tracking-tight text-foreground leading-[1.1]",children:"Audio Engineer."})]}),e.jsx("p",{className:"hero-element mt-6 md:mt-10 text-lg md:text-xl text-muted-foreground w-full max-w-2xl font-light leading-relaxed",children:"Professional recording, mixing, and production services tailored to your artistry and vision. Based in Odense, Denmark."}),e.jsxs("div",{className:"hero-element mt-10 flex items-center gap-6",children:[e.jsx("a",{href:"#contact",onClick:o=>t("#contact",o),className:"group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-[2rem] bg-primary text-primary-foreground font-medium magnetic-button",children:e.jsx("span",{className:"relative z-10",children:"Book a Session"})}),e.jsx("a",{href:"#work",onClick:o=>t("#work",o),className:"group relative inline-flex items-center justify-center px-8 py-4 rounded-[2rem] border border-border/50 bg-card/10 backdrop-blur-sm text-foreground font-medium hover:border-primary/50 magnetic-button",children:"Explore Portfolio"})]})]})}),e.jsx("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hero-element flex flex-col items-center",children:e.jsx("a",{href:"#services",onClick:o=>t("#services",o),className:"text-muted-foreground/50 hover:text-primary transition-colors duration-300 flex flex-col items-center gap-2 group cursor-pointer",children:e.jsx(xe,{className:"w-5 h-5 animate-bounce"})})})]})},U=()=>{const[n,t]=l.useState(!1),[o,c]=l.useState(!1),i=W(),r=le();l.useEffect(()=>{const a=()=>{const g=window.scrollY>30||i.pathname!=="/";c(g)};return a(),window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[i.pathname]);const d=[{name:"Home",href:"#home",isRoute:!1},{name:"About",href:"#about",isRoute:!1},{name:"Work",href:"#work",isRoute:!1},{name:"Services",href:"#services",isRoute:!1},{name:"Guides",href:"/guides",isRoute:!0},{name:"Contact",href:"#contact",isRoute:!1}],u=(a,g)=>{if(g.preventDefault(),a.isRoute)r(a.href);else if(i.pathname!=="/")r("/"),setTimeout(()=>{const m=a.href.substring(1),f=document.getElementById(m);f&&f.scrollIntoView({behavior:"smooth",block:"start"})},100);else{const m=a.href.substring(1),f=document.getElementById(m);f&&f.scrollIntoView({behavior:"smooth",block:"start"})}t(!1)},h=o||n;return e.jsx("div",{className:"fixed top-0 w-full z-50 pointer-events-none flex justify-center px-4 pt-6 transition-all duration-500 max-w-[100vw]",children:e.jsxs("nav",{className:`pointer-events-auto transition-all duration-500 overflow-hidden ${h?"bg-background/80 backdrop-blur-xl border border-border shadow-2xl rounded-full px-6 py-3":"bg-transparent px-6 py-3"}`,children:[e.jsxs("div",{className:"flex items-center justify-between min-w-[300px] md:min-w-[600px] gap-8",children:[e.jsx("a",{href:"/",onClick:a=>{a.preventDefault(),r("/"),t(!1),window.scrollTo({top:0,behavior:"smooth"})},className:"text-2xl font-drama font-bold text-foreground cursor-pointer tracking-tighter",children:"BM."}),e.jsx("div",{className:"hidden md:flex items-center space-x-8",children:d.map(a=>e.jsx("a",{href:a.href,onClick:g=>u(a,g),className:"text-sm font-medium text-foreground/80 hover:text-primary magnetic-button cursor-pointer",children:a.name},a.name))}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("a",{href:"https://instagram.com/benjaminmlynek",target:"_blank",rel:"noopener noreferrer",className:"inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 magnetic-button hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60","aria-label":"Instagram",children:e.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor",children:e.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})}),e.jsx("button",{type:"button",className:"md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 magnetic-button hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60","aria-label":n?"Close navigation menu":"Open navigation menu","aria-expanded":n,"aria-controls":"mobile-navigation",onClick:()=>t(!n),children:n?e.jsx(ye,{size:20}):e.jsx(be,{size:20})})]})]}),n&&e.jsx("div",{id:"mobile-navigation",className:"md:hidden mt-4 pt-4 border-t border-border/50 flex flex-col items-center space-y-4",children:d.map(a=>e.jsx("a",{href:a.href,onClick:g=>u(a,g),className:"block text-foreground/80 hover:text-primary transition-colors duration-200 cursor-pointer font-medium",children:a.name},a.name))})]})})},L="https://benjaminmlynek.com",me=L.replace(/\/$/,""),q={home:{title:"Benjamin Mlynek - Music Producer & Audio Engineer",description:"Benjamin Mlynek offers professional recording, mixing, and mastering services for artists ready to release polished music. Partner with an experienced engineer who keeps your vision front and center from the first take to the final master.",canonicalUrl:L,ogType:"website"},guides:{title:"Guides & Resources for Artists | Benjamin Mlynek",description:"Step-by-step guides that help artists prepare files, sessions, and workflows for professional recording, mixing, and mastering.",canonicalUrl:`${L}/guides`,ogType:"website"}},Ve=n=>({title:`${n.title} | Benjamin Mlynek Guides`,description:n.description,canonicalUrl:`${L}/guides/${n.slug}`,ogType:"article",ogImage:n.ogImage}),K=typeof document<"u",ie=n=>{if(!n)return;if(/^https?:\/\//i.test(n))return n;const t=n.startsWith("/")?n:`/${n}`;return`${me}${t}`},v=(n,t,o)=>{if(!K)return;const c=`meta[${n}="${t}"]`;let i=document.head.querySelector(c);if(!o){i&&document.head.removeChild(i);return}i||(i=document.createElement("meta"),i.setAttribute(n,t),document.head.appendChild(i)),i.setAttribute("content",o)},Ge=n=>{if(!K||!n)return;let t=document.head.querySelector('link[rel="canonical"]');t||(t=document.createElement("link"),t.setAttribute("rel","canonical"),document.head.appendChild(t)),t.setAttribute("href",n)},Y=({title:n,description:t,canonicalUrl:o,ogType:c="website",ogImage:i})=>(l.useEffect(()=>{!K||!n||(document.title=n,v("property","og:title",n),v("name","twitter:title",n))},[n]),l.useEffect(()=>{t&&(v("name","description",t),v("property","og:description",t),v("name","twitter:description",t))},[t]),l.useEffect(()=>{const r=ie(o??"/");r&&(Ge(r),v("property","og:url",r))},[o]),l.useEffect(()=>{v("property","og:type",c??"website")},[c]),l.useEffect(()=>{const r=ie(i);v("name","twitter:card",r?"summary_large_image":"summary"),r?(v("property","og:image",r),v("name","twitter:image",r)):(v("property","og:image"),v("name","twitter:image"))},[i]),null),Q=()=>e.jsx("footer",{className:"bg-[#0A0A0E] rounded-t-[4rem] border-t border-border/20 pt-20 pb-10 mt-10 shadow-2xl relative z-10",children:e.jsxs("div",{className:"container-width section-padding",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-12 mb-16",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-3xl font-drama font-bold text-foreground",children:"BM."}),e.jsx("p",{className:"text-muted-foreground font-mono text-sm",children:"Music Producer & Audio Engineer"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-lg font-semibold text-foreground",children:"Navigation"}),e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx("a",{href:"/#about",className:"text-muted-foreground hover:text-primary transition-colors magnetic-button origin-left w-fit",children:"About"}),e.jsx("a",{href:"/#work",className:"text-muted-foreground hover:text-primary transition-colors magnetic-button origin-left w-fit",children:"Work"}),e.jsx("a",{href:"/#services",className:"text-muted-foreground hover:text-primary transition-colors magnetic-button origin-left w-fit",children:"Services"}),e.jsx("a",{href:"/guides",className:"text-muted-foreground hover:text-primary transition-colors magnetic-button origin-left w-fit",children:"Guides"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-lg font-semibold text-foreground",children:"Connect"}),e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx("a",{href:"https://instagram.com/benjaminmlynek",target:"_blank",rel:"noopener noreferrer",className:"text-muted-foreground hover:text-primary transition-colors magnetic-button origin-left w-fit",children:"Instagram"}),e.jsx("a",{href:"mailto:hello@benjaminmlynek.com",className:"text-muted-foreground hover:text-primary transition-colors magnetic-button origin-left w-fit",children:"Email"})]})]})]}),e.jsx("div",{className:"pt-8 border-t border-border/20 flex flex-col md:flex-row justify-center items-center gap-4",children:e.jsx("p",{className:"text-muted-foreground text-sm font-mono",children:"© 2026 Benjamin Mlynek."})})]})}),We=l.lazy(()=>R(()=>import("./About-Du5dI1P7.js"),__vite__mapDeps([0,1,2,3]))),Ue=l.lazy(()=>R(()=>import("./BehindTheScenes-CZ_x9uKc.js"),__vite__mapDeps([4,1,2,3]))),qe=l.lazy(()=>R(()=>import("./Services-u3ol7-ww.js"),__vite__mapDeps([5,1,2,3,6]))),Ke=l.lazy(()=>R(()=>import("./Portfolio-IPYp2wRu.js"),__vite__mapDeps([7,1,2,3,6]))),Ye=l.lazy(()=>R(()=>import("./Contact-CweD6KQ2.js"),__vite__mapDeps([8,1,2,3,6]))),_=({id:n})=>e.jsx("section",{id:n,className:"py-20",children:e.jsx("div",{className:"container-width section-padding",children:e.jsx("div",{className:"h-32 rounded-2xl bg-card/40 animate-pulse","aria-hidden":"true"})})}),Qe=()=>e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsx(Y,{...q.home}),e.jsx(U,{}),e.jsx(Oe,{}),e.jsx(l.Suspense,{fallback:e.jsx(_,{id:"about"}),children:e.jsx(We,{})}),e.jsx(l.Suspense,{fallback:e.jsx(_,{id:"behind-scenes"}),children:e.jsx(Ue,{})}),e.jsx(l.Suspense,{fallback:e.jsx(_,{id:"work"}),children:e.jsx(Ke,{})}),e.jsx(l.Suspense,{fallback:e.jsx(_,{id:"services"}),children:e.jsx(qe,{})}),e.jsx(l.Suspense,{fallback:e.jsx(_,{id:"contact"}),children:e.jsx(Ye,{})}),e.jsx(Q,{})]}),Je=`---
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

### Electric Guitar and Bass
> Always check your tuning before every take — guitars drift faster than you think.  
> Even minor pitch shifts between double-tracked guitars can ruin tightness and stereo image.  
> Fresh strings and frequent tuning make the mix and performance sound instantly more professional.

Record both a **DI signal** and a **mic’d amp** if possible.  
The DI track provides flexibility later if you want to re-amp or adjust tones during mixing.

Label your tracks clearly inside your DAW:
- <span class="guide-chip">Guitar Rhythm DI</span>  
- <span class="guide-chip">Guitar Rhythm Amp</span>  
- <span class="guide-chip">Bass DI</span>

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
- [x] File clearly named and labeled`,nn=n=>n.replace(/^"(.*)"$/,"$1").replace(/^'(.*)'$/,"$1"),F=n=>{var d,u;const t=n.split(/\r?\n/);if(((d=t[0])==null?void 0:d.trim())!=="---")return{content:n.trimStart()};let o=-1;for(let h=1;h<t.length;h+=1)if(((u=t[h])==null?void 0:u.trim())==="---"){o=h;break}if(o===-1)return{content:n.trimStart()};const c=t.slice(1,o),i=t.slice(o+1).join(`
`).trimStart(),r={};for(const h of c){const a=h.trim();if(!a||a.startsWith("#"))continue;const g=a.indexOf(":");if(g===-1)continue;const m=a.slice(0,g).trim(),f=nn(a.slice(g+1).trim());m&&(r[m]=f)}return{title:r.title,description:r.description,ogImage:r.ogImage,publishedAt:r.publishedAt,updatedAt:r.updatedAt,content:i}},z=(n,t)=>{var o,c,i,r,d;return{title:((o=n.title)==null?void 0:o.trim())||t.title,description:((c=n.description)==null?void 0:c.trim())||t.description,ogImage:((i=n.ogImage)==null?void 0:i.trim())||t.ogImage,publishedAt:(r=n.publishedAt)==null?void 0:r.trim(),updatedAt:(d=n.updatedAt||n.publishedAt)==null?void 0:d.trim(),content:n.content}},$=n=>`/og/guides/${n}.png`,I=z(F(Je),{title:"Guide to Home Recording",description:"Everything you need to know to get professional results from your home studio setup.",ogImage:$("home-recording")}),S=z(F(Xe),{title:"Studio Session Preparation",description:"Complete checklist and guidelines for preparing for professional recording sessions.",ogImage:$("studio-session-preparation")}),E=z(F(Ze),{title:"Preparing Files for Mixing",description:"Essential guidelines for organizing and preparing your multitrack files for professional mixing.",ogImage:$("preparing-files-for-mixing")}),T=z(F(en),{title:"Preparing Files for Mastering",description:"How to prepare your final mix for the mastering process to achieve the best possible results.",ogImage:$("preparing-files-for-mastering")}),J=[{slug:"home-recording",title:I.title,description:I.description,category:"Recording",downloadUrl:"/guides/home-recording-guide.pdf",icon:ve,content:I.content,ogImage:I.ogImage,publishedAt:I.publishedAt,updatedAt:I.updatedAt},{slug:"studio-session-preparation",title:S.title,description:S.description,category:"Recording",downloadUrl:"/guides/studio-session-preparation.pdf",icon:ce,content:S.content,ogImage:S.ogImage,publishedAt:S.publishedAt,updatedAt:S.updatedAt},{slug:"preparing-files-for-mixing",title:E.title,description:E.description,category:"Mixing",downloadUrl:"/guides/preparing-files-for-mixing.pdf",icon:de,content:E.content,ogImage:E.ogImage,publishedAt:E.publishedAt,updatedAt:E.updatedAt},{slug:"preparing-files-for-mastering",title:T.title,description:T.description,category:"Mastering",downloadUrl:"/guides/preparing-files-for-mastering.pdf",icon:ue,content:T.content,ogImage:T.ogImage,publishedAt:T.publishedAt,updatedAt:T.updatedAt}],tn=n=>J.find(t=>t.slug===n),sn=()=>{const n=le();return e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsx(Y,{...q.guides}),e.jsx(U,{}),e.jsx("section",{className:"pt-24 pb-8",children:e.jsx("div",{className:"container-width section-padding",children:e.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[e.jsx("div",{className:"inline-block border border-border/50 px-4 py-1.5 rounded-full mb-6 text-sm font-mono tracking-wider text-muted-foreground uppercase bg-[#0A0A0E]",children:"Knowledge Hub"}),e.jsxs("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-foreground",children:["Guides & ",e.jsx("span",{className:"font-drama italic text-primary font-normal",children:"Downloads."})]}),e.jsx("p",{className:"text-lg text-muted-foreground mb-6",children:"Essential resources to help you prepare for recording sessions, mixing, and mastering. These guides will ensure we get the best possible results from our collaboration."})]})})}),e.jsx("section",{className:"pt-6 pb-16",children:e.jsx("div",{className:"container-width section-padding",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:J.map(t=>{const o=t.icon;return e.jsx("div",{className:"bg-[#0A0A0E] rounded-[2rem] p-6 lg:p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-xl group",children:e.jsxs("div",{className:"flex items-start space-x-4",children:[e.jsx("div",{className:"p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0",children:e.jsx(o,{className:"w-6 h-6"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx(D,{to:`/guides/${t.slug}`,className:"text-xl font-semibold text-foreground hover:text-primary transition-colors",children:t.title}),e.jsx("span",{className:"text-xs px-2 py-1 bg-secondary rounded-full text-secondary-foreground",children:t.category})]}),e.jsx("p",{className:"text-muted-foreground mb-4 leading-relaxed",children:t.description}),e.jsxs(D,{to:`/guides/${t.slug}`,className:"inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors",children:[e.jsx("span",{children:"Read more"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-4 w-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"})})]})]})]})},t.slug)})})})}),e.jsx("section",{className:"py-24 bg-[#0D0D12] border-t border-border/20 relative z-10",children:e.jsx("div",{className:"container-width section-padding",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8 text-center",children:"Why These Guides Matter"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4",children:e.jsx(ce,{className:"w-6 h-6 text-primary"})}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Save Time"}),e.jsx("p",{className:"text-muted-foreground",children:"Proper preparation eliminates technical issues and allows us to focus on creativity."})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4",children:e.jsx(de,{className:"w-6 h-6 text-primary"})}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Better Results"}),e.jsx("p",{className:"text-muted-foreground",children:"Following these guidelines ensures we achieve the highest quality output for your music."})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4",children:e.jsx(ue,{className:"w-6 h-6 text-primary"})}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Professional Workflow"}),e.jsx("p",{className:"text-muted-foreground",children:"These practices are industry standards that professional studios use worldwide."})]})]})]})})}),e.jsx("section",{className:"py-24 bg-background",children:e.jsx("div",{className:"container-width section-padding",children:e.jsxs("div",{className:"text-center max-w-2xl mx-auto",children:[e.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-6 text-foreground",children:["Ready to Start Your ",e.jsx("span",{className:"font-drama italic text-primary font-normal",children:"Project?"})]}),e.jsx("p",{className:"text-lg text-muted-foreground mb-10 leading-relaxed",children:"Have questions about any of these guides or ready to book a session? Let's discuss your project and how we can bring your vision to life."}),e.jsx("button",{onClick:t=>{t.preventDefault(),n("/"),setTimeout(()=>{const o=document.getElementById("contact");o&&o.scrollIntoView({behavior:"smooth",block:"start"})},150)},className:"group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-[2rem] bg-primary text-primary-foreground font-medium magnetic-button shadow-xl shadow-primary/20",children:e.jsx("span",{className:"relative z-10",children:"Get In Touch"})})]})})}),e.jsx(Q,{})]})},G=n=>({node:t,children:o,...c})=>{const{id:i,className:r,...d}=c,u=typeof i=="string"?i:"",h=n==="h2"?"mt-8 text-2xl font-semibold text-foreground":n==="h3"?"mt-6 text-xl font-semibold text-foreground":"mt-4 text-lg font-medium text-foreground";return e.jsxs(n,{...d,id:u,className:`group relative scroll-mt-28 ${h} ${r??""}`.trim(),children:[u&&e.jsx("a",{href:`#${u}`,className:"anchor-link absolute -left-8 hidden h-5 w-5 items-center justify-center rounded text-muted-foreground opacity-0 transition hover:text-primary group-hover:flex group-hover:opacity-100 focus-visible:flex focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary","aria-label":`Copy link to ${u.replace(/-/g," ")}`,children:e.jsx(Ie,{className:"h-4 w-4"})}),e.jsx("span",{children:o})]})},rn=1400,on=n=>{const t=new _e;return t.reset(),n.split(/\r?\n/).map(o=>{const c=o.match(/^(#{2,4})\s+(.*)$/);if(!c)return null;const i=c[1].length,d=c[2].trim().replace(/#+$/,"").trim(),u=d.replace(/^[\*`_]+/,"").replace(/[\*`_]+$/,"");return{id:t.slug(d),title:u,depth:i}}).filter(o=>o!==null)},an=n=>{if(!n)return;if(/^https?:\/\//i.test(n))return n;const t=n.startsWith("/")?n:`/${n}`;return`${me}${t}`},ln=()=>{const{slug:n}=we(),t=n?tn(n):void 0,[o,c]=l.useState(!1),[i,r]=l.useState(""),[d,u]=l.useState(!1),h=l.useRef(null),a=()=>{var s;((s=h.current)==null?void 0:s.timeoutId)!==void 0&&typeof window<"u"&&window.clearTimeout(h.current.timeoutId),h.current=null},g=s=>{if(typeof window>"u"){r(s);return}a();const p=window.setTimeout(()=>{h.current=null},800);h.current={id:s,timeoutId:p},r(s)},m=l.useMemo(()=>t?on(t.content):[],[t]);l.useEffect(()=>{if(typeof window>"u")return;const s=window.matchMedia(`(min-width: ${rn}px)`),p=x=>{const y=x?x.matches:s.matches;u(y),c(y)};return p(),s.addEventListener("change",p),()=>s.removeEventListener("change",p)},[]),l.useEffect(()=>{m.length!==0&&r(s=>{var p;return s&&m.some(x=>x.id===s)?s:((p=m[0])==null?void 0:p.id)??""})},[m]),l.useEffect(()=>{if(typeof window>"u"||m.length===0)return;const s=new Map,p=120,x=()=>{var te,se;if(h.current){r(h.current.id);return}const b=window.innerHeight+window.scrollY,k=document.documentElement.scrollHeight,j=(te=m[m.length-1])==null?void 0:te.id;if(b>=k-1&&j){r(j);return}if(s.size>0){const M=[...s.entries()].map(([w,N])=>({id:w,top:N.getBoundingClientRect().top-p})),A=M.filter(w=>w.top<=0).sort((w,N)=>w.top-N.top),O=M.filter(w=>w.top>0).sort((w,N)=>w.top-N.top),B=A.length>0?A[A.length-1]:O[0];if(B){r(B.id);return}}const he=window.scrollY+p;let ee=((se=m[0])==null?void 0:se.id)??"",ne=Number.POSITIVE_INFINITY;for(const M of m){const A=document.getElementById(M.id);if(!A)continue;const O=window.getComputedStyle(A),B=parseFloat(O.scrollMarginTop||"0"),w=A.offsetTop-B,N=Math.abs(w-he);N<ne&&(ne=N,ee=M.id)}r(ee)},y=new IntersectionObserver(b=>{b.forEach(k=>{const j=k.target.getAttribute("id");j&&(k.isIntersecting?s.set(j,k.target):s.delete(j))}),x()},{root:null,rootMargin:"-120px 0px -50% 0px",threshold:[0,.25,.5,.75,1]});for(const b of m){const k=document.getElementById(b.id);k&&y.observe(k)}return x(),window.addEventListener("scroll",x,{passive:!0}),()=>{y.disconnect(),window.removeEventListener("scroll",x),a()}},[m]);const f=l.useMemo(()=>({h2:G("h2"),h3:G("h3"),h4:G("h4")}),[]);if(!t)return e.jsx(ke,{to:"/guides",replace:!0});const P=t?Ve(t):q.guides,H=t.icon,X=l.useMemo(()=>{if(!t)return null;const s=P.canonicalUrl,p=t.publishedAt,x=t.updatedAt??t.publishedAt,y=an(t.ogImage),b={"@context":"https://schema.org","@type":"Article",headline:t.title,description:t.description,author:{"@type":"Person",name:"Benjamin Mlynek"},mainEntityOfPage:{"@type":"WebPage","@id":s},url:s};return p&&(b.datePublished=p),x&&(b.dateModified=x),y&&(b.image=[y]),b},[t,P]),pe=s=>{if(typeof document>"u"){g(s);return}const p=document.getElementById(s);p&&(p.scrollIntoView({behavior:"smooth",block:"start"}),d||c(!1),g(s))},Z=(s,p)=>{s.preventDefault(),pe(p)};return e.jsxs("div",{className:"min-h-screen bg-background flex flex-col",children:[e.jsx(Y,{...P}),X&&e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(X)}}),e.jsx(U,{}),e.jsx("main",{className:"flex-1 pt-32 pb-24",children:e.jsx("div",{className:"container-width section-padding",children:e.jsxs("div",{className:"flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative max-w-[1400px] mx-auto",children:[d&&e.jsxs("aside",{className:"sticky top-32 w-80 shrink-0 flex flex-col max-h-[calc(100vh-10rem)] bg-[#0A0A0E] border border-border/50 rounded-[2rem] overflow-hidden shadow-2xl",children:[e.jsx("div",{className:"px-8 pt-8 pb-6 border-b border-border/10",children:e.jsxs(D,{to:"/guides",className:"inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary group",children:[e.jsx(re,{className:"w-4 h-4 transition-transform group-hover:-translate-x-1"}),"Back to guides"]})}),e.jsx("nav",{className:"flex-1 overflow-y-auto px-6 py-6 text-sm text-muted-foreground",children:e.jsx("ul",{className:"space-y-1",children:m.map((s,p)=>{const x=i===s.id,y=s.depth===2,b=y&&p>0,k=s.depth===2?"":s.depth===3?"ml-4":"ml-8";return e.jsx("li",{className:b?"border-t border-border/10 pt-4 mt-4":"",children:e.jsx("a",{href:`#${s.id}`,onClick:j=>Z(j,s.id),className:`relative flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left transition-all ${y?"font-medium text-foreground":"text-foreground/70"} ${k} ${x?"bg-primary/10 text-primary font-medium translate-x-1":"hover:text-primary hover:bg-primary/5 hover:translate-x-1"}`,"aria-current":x?"true":void 0,children:e.jsx("span",{className:"flex-1 leading-snug",children:s.title})})},s.id)})})})]}),e.jsxs("div",{className:"flex-1 w-full max-w-3xl mx-auto lg:mx-0",children:[e.jsxs("div",{className:"flex flex-col gap-6 mb-12 lg:mb-16",children:[e.jsxs("div",{className:"inline-flex flex-wrap items-center gap-3 text-sm text-muted-foreground",children:[e.jsx("span",{className:"rounded-full bg-primary/10 px-3 py-1.5 text-primary flex items-center justify-center",children:e.jsx(H,{className:"h-5 w-5"})}),e.jsx("span",{className:"rounded-full bg-[#0A0A0E] border border-border/50 px-4 py-1.5 text-xs text-foreground font-mono uppercase tracking-wider",children:t.category}),e.jsxs("button",{type:"button","aria-disabled":"true",disabled:!0,className:"inline-flex items-center gap-2 font-mono text-xs text-primary/70 cursor-not-allowed uppercase tracking-wider px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 transition-opacity",children:[e.jsx(je,{className:"h-3.5 w-3.5","aria-hidden":"true"}),e.jsx("span",{children:"Download PDF"})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]",children:e.jsx("span",{className:"font-drama italic text-primary font-normal",children:t.title})}),e.jsx("p",{className:"text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl",children:t.description})]})]}),m.length>0&&!d&&e.jsxs("div",{className:"mb-12",children:[e.jsxs("button",{onClick:()=>c(s=>!s),className:"w-full inline-flex items-center justify-between rounded-2xl border border-border/50 bg-[#0A0A0E] px-6 py-4 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/50 hover:text-primary","aria-expanded":o,children:[e.jsxs("span",{className:"inline-flex items-center gap-3",children:[e.jsx(Ne,{className:"w-5 h-5 text-primary"}),e.jsx("span",{className:"font-mono uppercase tracking-wider",children:"Table of contents"})]}),e.jsx(re,{className:`w-4 h-4 transition-transform duration-300 ${o?"rotate-90":"-rotate-90"}`})]}),o&&e.jsx("nav",{className:"mt-4 rounded-2xl border border-border/50 bg-[#0A0A0E] p-6 text-sm text-muted-foreground shadow-xl animate-in fade-in slide-in-from-top-4 duration-300",children:e.jsx("ul",{className:"space-y-2",children:m.map(s=>{const p=i===s.id,x=s.depth===2?"":s.depth===3?"pl-4":"pl-8";return e.jsx("li",{children:e.jsx("a",{href:`#${s.id}`,onClick:y=>Z(y,s.id),className:`relative flex w-full items-center gap-2 rounded-xl px-4 py-3 text-left transition-all ${p?"bg-primary/10 text-primary font-medium":"text-foreground/80 hover:text-primary hover:bg-primary/5"} ${x}`,"aria-current":p?"true":void 0,children:e.jsx("span",{className:"flex-1 leading-snug",children:s.title})})},s.id)})})})]}),e.jsxs("div",{className:"space-y-16",children:[e.jsx("div",{className:"guide-prose",children:e.jsx(Ae,{remarkPlugins:[Be,Ce],rehypePlugins:[Re],components:f,children:t.content})}),e.jsx("div",{className:"bg-[#0A0A0E] border border-border/50 rounded-[2rem] p-8 lg:p-10 shadow-2xl relative overflow-hidden group",children:e.jsxs("div",{className:"relative z-10",children:[e.jsxs("h3",{className:"text-3xl font-bold tracking-tight mb-4",children:["Need more ",e.jsx("span",{className:"font-drama italic text-primary font-normal",children:"resources?"})]}),e.jsx("p",{className:"text-lg text-muted-foreground mb-8 leading-relaxed",children:"Explore the other guides below or reach out if you need help applying these steps to your specific project."}),e.jsx("div",{className:"flex flex-wrap gap-3",children:J.filter(s=>s.slug!==t.slug).map(s=>e.jsx(D,{to:`/guides/${s.slug}`,className:"px-5 py-2.5 text-sm font-medium rounded-full border border-border/50 hover:bg-primary/10 hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 shadow-sm bg-background/50 backdrop-blur-sm",children:s.title},s.slug))})]})})]})]})]})})}),e.jsx(Q,{})]})},cn=()=>{const n=W();return l.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",n.pathname)},[n.pathname]),e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404"}),e.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Oops! Page not found"}),e.jsx("a",{href:"/",className:"text-blue-500 hover:text-blue-700 underline",children:"Return to Home"})]})})},dn=()=>e.jsxs(Se,{children:[e.jsx(C,{path:"/",element:e.jsx(Qe,{})}),e.jsx(C,{path:"/guides",element:e.jsx(sn,{})}),e.jsx(C,{path:"/guides/:slug",element:e.jsx(ln,{})}),e.jsx(C,{path:"*",element:e.jsx(cn,{})})]}),un=()=>{const{pathname:n}=W();return l.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[n]),null},mn=()=>e.jsx(Le,{children:e.jsxs(Ee,{children:[e.jsxs("svg",{className:"noise-overlay text-[0px]",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("filter",{id:"noiseFilter",children:e.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.65",numOctaves:"3",stitchTiles:"stitch"})}),e.jsx("rect",{width:"100%",height:"100%",filter:"url(#noiseFilter)"})]}),e.jsx(un,{}),e.jsx(dn,{})]})});Te.createRoot(document.getElementById("root")).render(e.jsx(mn,{}));export{He as s};

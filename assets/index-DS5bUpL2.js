const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/About-DfdR155V.js","assets/react-vendors-Be2QoXv1.js","assets/vendor-aNe8OWTQ.js","assets/markdown-o4qCf7PK.js","assets/BehindTheScenes-BpVp1jsQ.js","assets/Services-DSC9Xxsr.js","assets/card-BN6jWcqg.js","assets/Portfolio-CPsu93np.js","assets/Contact-CePEooXL.js"])))=>i.map(i=>d[i]);
import{r as d,j as e,C as le,P as fe,S as xe,A as ye,u as U,a as be,X as ve,M as we,b as ke,F as ce,c as de,H as ue,L,d as je,N as Ne,D as Ie,e as Ae,f as H,g as Se,i as Te,R as Ee,k as C,B as Pe,l as Re}from"./react-vendors-Be2QoXv1.js";import{H as Me,I as _e,J as Be,K as Ce}from"./vendor-aNe8OWTQ.js";import{b as Le,c as De,d as $e}from"./markdown-o4qCf7PK.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function l(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=l(r);fetch(r.href,s)}})();function me(...n){return Me(_e(n))}const Fe=fe,ze=d.forwardRef(({className:n,sideOffset:t=4,...l},a)=>e.jsx(le,{ref:a,sideOffset:t,className:me("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...l}));ze.displayName=le.displayName;const Oe="modulepreload",Ve=function(n){return"/"+n},ie={},_=function(t,l,a){let r=Promise.resolve();if(l&&l.length>0){let u=function(o){return Promise.all(o.map(h=>Promise.resolve(h).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),p=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));r=u(l.map(o=>{if(o=Ve(o),o in ie)return;ie[o]=!0;const h=o.endsWith(".css"),m=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${m}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":Oe,h||(f.as="script"),f.crossOrigin="",f.href=o,p&&f.setAttribute("nonce",p),document.head.appendChild(f),h)return new Promise((P,O)=>{f.addEventListener("load",P),f.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${o}`)))})}))}function s(u){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=u,window.dispatchEvent(c),!c.defaultPrevented)throw u}return r.then(u=>{for(const c of u||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})},He=Be("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),W=d.forwardRef(({className:n,variant:t,size:l,asChild:a=!1,...r},s)=>{const u=a?xe:"button";return e.jsx(u,{className:me(He({variant:t,size:l,className:n})),ref:s,...r})});W.displayName="Button";const Ge=(n={})=>{const[t,l]=d.useState(!1),[a,r]=d.useState(!1),s=d.useRef(null),{threshold:u=.1,rootMargin:c="0px 0px -10% 0px",triggerOnce:p=!0}=n;return d.useEffect(()=>{const o=new IntersectionObserver(([h])=>{const m=h.isIntersecting;m&&!a?(l(!0),p&&r(!0)):p||l(m)},{threshold:u,rootMargin:c});return s.current&&o.observe(s.current),()=>{s.current&&o.unobserve(s.current)}},[u,c,p,a]),{elementRef:s,isVisible:t}},oe=(n=.5)=>{const[t,l]=d.useState(0),a=d.useRef(null);return d.useEffect(()=>{const r=()=>{if(a.current){const s=a.current.getBoundingClientRect(),c=window.pageYOffset*-n;s.bottom>=0&&s.top<=window.innerHeight&&l(c)}};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[n]),{elementRef:a,offset:t}},We=()=>{const{elementRef:n,offset:t}=oe(.3),{elementRef:l,isVisible:a}=Ge({threshold:.2}),{elementRef:r,offset:s}=oe(.1),u=(c,p)=>{p.preventDefault();const o=c.substring(1),h=document.getElementById(o);h&&h.scrollIntoView({behavior:"smooth",block:"start"})};return e.jsxs("section",{ref:n,id:"home",className:"min-h-screen flex items-center justify-center relative overflow-hidden",children:[e.jsx("div",{ref:r,className:"absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background",style:{transform:`translateY(${s}px)`}}),e.jsx("div",{ref:l,className:"container-width section-padding relative z-10",style:{transform:`translateY(${t}px)`},children:e.jsxs("div",{className:`text-center max-w-4xl mx-auto ${a?"animate":""}`,children:[e.jsx("h1",{className:`text-5xl md:text-7xl font-bold mb-4 leading-tight fade-in-up ${a?"animate":""}`,children:"Benjamin Mlynek"}),e.jsx("p",{className:`text-2xl md:text-3xl text-primary font-semibold mb-4 fade-in-up stagger-delay-1 ${a?"animate":""}`,children:"Music Producer & Audio Engineer"}),e.jsx("p",{className:`text-xl text-muted-foreground mb-6 fade-in-up stagger-delay-2 ${a?"animate":""}`,children:"Based in Odense, Denmark"}),e.jsx("p",{className:`text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto fade-in-up stagger-delay-3 ${a?"animate":""}`,children:"Crafting powerful sounds in rock, hard rock, metal, and pop music. Professional recording, mixing, and production services."}),e.jsxs("div",{className:`flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up stagger-delay-4 ${a?"animate":""}`,children:[e.jsx("a",{href:"#contact",onClick:c=>u("#contact",c),children:e.jsx(W,{size:"lg",className:"group",children:"Get In Touch"})}),e.jsx("a",{href:"#work",onClick:c=>u("#work",c),children:e.jsx(W,{variant:"outline",size:"lg",children:"Listen to My Work"})})]})]})}),e.jsx("div",{className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce",children:e.jsx(ye,{className:"text-primary",size:24})})]})},q=()=>{const[n,t]=d.useState(!1),[l,a]=d.useState(!1),r=U(),s=be();d.useEffect(()=>{const o=()=>{const h=window.scrollY>30||r.pathname!=="/";a(h)};return o(),window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[r.pathname]);const u=[{name:"Home",href:"#home",isRoute:!1},{name:"About",href:"#about",isRoute:!1},{name:"Work",href:"#work",isRoute:!1},{name:"Services",href:"#services",isRoute:!1},{name:"Guides",href:"/guides",isRoute:!0},{name:"Contact",href:"#contact",isRoute:!1}],c=(o,h)=>{if(h.preventDefault(),o.isRoute)s(o.href);else if(r.pathname!=="/")s("/"),setTimeout(()=>{const m=o.href.substring(1),f=document.getElementById(m);f&&f.scrollIntoView({behavior:"smooth",block:"start"})},100);else{const m=o.href.substring(1),f=document.getElementById(m);f&&f.scrollIntoView({behavior:"smooth",block:"start"})}t(!1)},p=l||n;return e.jsx("nav",{className:`fixed top-0 w-full z-50 transition-all duration-300 ${p?"bg-background/95 backdrop-blur-sm border-b border-border":"bg-transparent"}`,children:e.jsxs("div",{className:"section-padding",children:[e.jsxs("div",{className:"flex items-center justify-between h-16 max-w-[min(96%,theme(maxWidth.7xl))] mx-auto",children:[e.jsx("a",{href:"/",onClick:o=>{o.preventDefault(),s("/"),t(!1),window.scrollTo({top:0,behavior:"smooth"})},className:"text-xl font-bold text-gradient cursor-pointer",children:"BM"}),e.jsx("div",{className:"hidden md:flex space-x-8",children:u.map(o=>e.jsx("a",{href:o.href,onClick:h=>c(o,h),className:"text-foreground hover:text-primary transition-colors duration-200 cursor-pointer",children:o.name},o.name))}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("a",{href:"https://instagram.com/benjaminmlynek",target:"_blank",rel:"noopener noreferrer",className:"inline-flex h-12 w-12 items-center justify-center rounded-full text-foreground transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60","aria-label":"Instagram",children:e.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"currentColor",children:e.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})}),e.jsx("button",{type:"button",className:"md:hidden inline-flex h-12 w-12 items-center justify-center rounded-full p-2 transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60","aria-label":n?"Close navigation menu":"Open navigation menu","aria-expanded":n,"aria-controls":"mobile-navigation",onClick:()=>t(!n),children:n?e.jsx(ve,{size:24}):e.jsx(we,{size:24})})]})]}),n&&e.jsx("div",{id:"mobile-navigation",className:"md:hidden py-4 space-y-4 border-t border-border",children:u.map(o=>e.jsx("a",{href:o.href,onClick:h=>c(o,h),className:"block text-foreground hover:text-primary transition-colors duration-200 cursor-pointer",children:o.name},o.name))})]})})},D="https://benjaminmlynek.com",pe=D.replace(/\/$/,""),Y={home:{title:"Benjamin Mlynek - Music Producer & Audio Engineer",description:"Benjamin Mlynek offers professional recording, mixing, and mastering services for artists ready to release polished music. Partner with an experienced engineer who keeps your vision front and center from the first take to the final master.",canonicalUrl:D,ogType:"website"},guides:{title:"Guides & Resources for Artists | Benjamin Mlynek",description:"Step-by-step guides that help artists prepare files, sessions, and workflows for professional recording, mixing, and mastering.",canonicalUrl:`${D}/guides`,ogType:"website"}},Ue=n=>({title:`${n.title} | Benjamin Mlynek Guides`,description:n.description,canonicalUrl:`${D}/guides/${n.slug}`,ogType:"article",ogImage:n.ogImage}),K=typeof document<"u",ae=n=>{if(!n)return;if(/^https?:\/\//i.test(n))return n;const t=n.startsWith("/")?n:`/${n}`;return`${pe}${t}`},v=(n,t,l)=>{if(!K)return;const a=`meta[${n}="${t}"]`;let r=document.head.querySelector(a);if(!l){r&&document.head.removeChild(r);return}r||(r=document.createElement("meta"),r.setAttribute(n,t),document.head.appendChild(r)),r.setAttribute("content",l)},qe=n=>{if(!K||!n)return;let t=document.head.querySelector('link[rel="canonical"]');t||(t=document.createElement("link"),t.setAttribute("rel","canonical"),document.head.appendChild(t)),t.setAttribute("href",n)},Q=({title:n,description:t,canonicalUrl:l,ogType:a="website",ogImage:r})=>(d.useEffect(()=>{!K||!n||(document.title=n,v("property","og:title",n),v("name","twitter:title",n))},[n]),d.useEffect(()=>{t&&(v("name","description",t),v("property","og:description",t),v("name","twitter:description",t))},[t]),d.useEffect(()=>{const s=ae(l??"/");s&&(qe(s),v("property","og:url",s))},[l]),d.useEffect(()=>{v("property","og:type",a??"website")},[a]),d.useEffect(()=>{const s=ae(r);v("name","twitter:card",s?"summary_large_image":"summary"),s?(v("property","og:image",s),v("name","twitter:image",s)):(v("property","og:image"),v("name","twitter:image"))},[r]),null),J=()=>e.jsx("footer",{className:"py-8",children:e.jsx("div",{className:"container-width section-padding",children:e.jsx("div",{className:"text-center text-muted-foreground",children:e.jsx("p",{children:"© 2025 Benjamin Mlynek"})})})}),Ye=d.lazy(()=>_(()=>import("./About-DfdR155V.js"),__vite__mapDeps([0,1,2,3]))),Ke=d.lazy(()=>_(()=>import("./BehindTheScenes-BpVp1jsQ.js"),__vite__mapDeps([4,1,2,3]))),Qe=d.lazy(()=>_(()=>import("./Services-DSC9Xxsr.js"),__vite__mapDeps([5,1,2,3,6]))),Je=d.lazy(()=>_(()=>import("./Portfolio-CPsu93np.js"),__vite__mapDeps([7,1,2,3,6]))),Xe=d.lazy(()=>_(()=>import("./Contact-CePEooXL.js"),__vite__mapDeps([8,1,2,3]))),M=({id:n})=>e.jsx("section",{id:n,className:"py-20",children:e.jsx("div",{className:"container-width section-padding",children:e.jsx("div",{className:"h-32 rounded-2xl bg-card/40 animate-pulse","aria-hidden":"true"})})}),Ze=()=>e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsx(Q,{...Y.home}),e.jsx(q,{}),e.jsx(We,{}),e.jsx(d.Suspense,{fallback:e.jsx(M,{id:"about"}),children:e.jsx(Ye,{})}),e.jsx(d.Suspense,{fallback:e.jsx(M,{id:"behind-scenes"}),children:e.jsx(Ke,{})}),e.jsx(d.Suspense,{fallback:e.jsx(M,{id:"work"}),children:e.jsx(Je,{})}),e.jsx(d.Suspense,{fallback:e.jsx(M,{id:"services"}),children:e.jsx(Qe,{})}),e.jsx(d.Suspense,{fallback:e.jsx(M,{id:"contact"}),children:e.jsx(Xe,{})}),e.jsx(J,{})]}),en=`---
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
`,nn=`---
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
- [x] Session backed up after recording`,tn=`---
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
- [x] BPM and notes provided`,sn=`---
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
- [x] File clearly named and labeled`,rn=n=>n.replace(/^"(.*)"$/,"$1").replace(/^'(.*)'$/,"$1"),$=n=>{var u,c;const t=n.split(/\r?\n/);if(((u=t[0])==null?void 0:u.trim())!=="---")return{content:n.trimStart()};let l=-1;for(let p=1;p<t.length;p+=1)if(((c=t[p])==null?void 0:c.trim())==="---"){l=p;break}if(l===-1)return{content:n.trimStart()};const a=t.slice(1,l),r=t.slice(l+1).join(`
`).trimStart(),s={};for(const p of a){const o=p.trim();if(!o||o.startsWith("#"))continue;const h=o.indexOf(":");if(h===-1)continue;const m=o.slice(0,h).trim(),f=rn(o.slice(h+1).trim());m&&(s[m]=f)}return{title:s.title,description:s.description,ogImage:s.ogImage,publishedAt:s.publishedAt,updatedAt:s.updatedAt,content:r}},F=(n,t)=>{var l,a,r,s,u;return{title:((l=n.title)==null?void 0:l.trim())||t.title,description:((a=n.description)==null?void 0:a.trim())||t.description,ogImage:((r=n.ogImage)==null?void 0:r.trim())||t.ogImage,publishedAt:(s=n.publishedAt)==null?void 0:s.trim(),updatedAt:(u=n.updatedAt||n.publishedAt)==null?void 0:u.trim(),content:n.content}},z=n=>`/og/guides/${n}.png`,A=F($(en),{title:"Guide to Home Recording",description:"Everything you need to know to get professional results from your home studio setup.",ogImage:z("home-recording")}),S=F($(nn),{title:"Studio Session Preparation",description:"Complete checklist and guidelines for preparing for professional recording sessions.",ogImage:z("studio-session-preparation")}),T=F($(tn),{title:"Preparing Files for Mixing",description:"Essential guidelines for organizing and preparing your multitrack files for professional mixing.",ogImage:z("preparing-files-for-mixing")}),E=F($(sn),{title:"Preparing Files for Mastering",description:"How to prepare your final mix for the mastering process to achieve the best possible results.",ogImage:z("preparing-files-for-mastering")}),X=[{slug:"home-recording",title:A.title,description:A.description,category:"Recording",downloadUrl:"/guides/home-recording-guide.pdf",icon:ke,content:A.content,ogImage:A.ogImage,publishedAt:A.publishedAt,updatedAt:A.updatedAt},{slug:"studio-session-preparation",title:S.title,description:S.description,category:"Recording",downloadUrl:"/guides/studio-session-preparation.pdf",icon:ce,content:S.content,ogImage:S.ogImage,publishedAt:S.publishedAt,updatedAt:S.updatedAt},{slug:"preparing-files-for-mixing",title:T.title,description:T.description,category:"Mixing",downloadUrl:"/guides/preparing-files-for-mixing.pdf",icon:de,content:T.content,ogImage:T.ogImage,publishedAt:T.publishedAt,updatedAt:T.updatedAt},{slug:"preparing-files-for-mastering",title:E.title,description:E.description,category:"Mastering",downloadUrl:"/guides/preparing-files-for-mastering.pdf",icon:ue,content:E.content,ogImage:E.ogImage,publishedAt:E.publishedAt,updatedAt:E.updatedAt}],on=n=>X.find(t=>t.slug===n),an=()=>e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsx(Q,{...Y.guides}),e.jsx(q,{}),e.jsx("section",{className:"pt-24 pb-8",children:e.jsx("div",{className:"container-width section-padding",children:e.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4 text-gradient",children:"Guides & Downloads"}),e.jsx("p",{className:"text-lg text-muted-foreground mb-6",children:"Essential resources to help you prepare for recording sessions, mixing, and mastering. These guides will ensure we get the best possible results from our collaboration."})]})})}),e.jsx("section",{className:"pt-6 pb-16",children:e.jsx("div",{className:"container-width section-padding",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:X.map(n=>{const t=n.icon;return e.jsx("div",{className:"bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg",children:e.jsxs("div",{className:"flex items-start space-x-4",children:[e.jsx("div",{className:"p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0",children:e.jsx(t,{className:"w-6 h-6"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx(L,{to:`/guides/${n.slug}`,className:"text-xl font-semibold text-foreground hover:text-primary transition-colors",children:n.title}),e.jsx("span",{className:"text-xs px-2 py-1 bg-secondary rounded-full text-secondary-foreground",children:n.category})]}),e.jsx("p",{className:"text-muted-foreground mb-4 leading-relaxed",children:n.description}),e.jsxs(L,{to:`/guides/${n.slug}`,className:"inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors",children:[e.jsx("span",{children:"Read more"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-4 w-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"})})]})]})]})},n.slug)})})})}),e.jsx("section",{className:"pt-6 pb-16 bg-secondary/30",children:e.jsx("div",{className:"container-width section-padding",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8 text-center",children:"Why These Guides Matter"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4",children:e.jsx(ce,{className:"w-6 h-6 text-primary"})}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Save Time"}),e.jsx("p",{className:"text-muted-foreground",children:"Proper preparation eliminates technical issues and allows us to focus on creativity."})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4",children:e.jsx(de,{className:"w-6 h-6 text-primary"})}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Better Results"}),e.jsx("p",{className:"text-muted-foreground",children:"Following these guidelines ensures we achieve the highest quality output for your music."})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4",children:e.jsx(ue,{className:"w-6 h-6 text-primary"})}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Professional Workflow"}),e.jsx("p",{className:"text-muted-foreground",children:"These practices are industry standards that professional studios use worldwide."})]})]})]})})}),e.jsx("section",{className:"py-16",children:e.jsx("div",{className:"container-width section-padding",children:e.jsxs("div",{className:"text-center max-w-2xl mx-auto",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Ready to Start Your Project?"}),e.jsx("p",{className:"text-muted-foreground mb-8",children:"Have questions about any of these guides or ready to book a session? Let's discuss your project and how we can bring your vision to life."}),e.jsx("a",{href:"/#contact",className:"inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium",children:e.jsx("span",{children:"Get In Touch"})})]})})}),e.jsx(J,{})]}),G=n=>({node:t,children:l,...a})=>{const{id:r,className:s,...u}=a,c=typeof r=="string"?r:"",p=n==="h2"?"mt-8 text-2xl font-semibold text-foreground":n==="h3"?"mt-6 text-xl font-semibold text-foreground":"mt-4 text-lg font-medium text-foreground";return e.jsxs(n,{...u,id:c,className:`group relative scroll-mt-28 ${p} ${s??""}`.trim(),children:[c&&e.jsx("a",{href:`#${c}`,className:"anchor-link absolute -left-8 hidden h-5 w-5 items-center justify-center rounded text-muted-foreground opacity-0 transition hover:text-primary group-hover:flex group-hover:opacity-100 focus-visible:flex focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary","aria-label":`Copy link to ${c.replace(/-/g," ")}`,children:e.jsx(Te,{className:"h-4 w-4"})}),e.jsx("span",{children:l})]})},ln=1400,cn=n=>{const t=new Ce;return t.reset(),n.split(/\r?\n/).map(l=>{const a=l.match(/^(#{2,4})\s+(.*)$/);if(!a)return null;const r=a[1].length,u=a[2].trim().replace(/#+$/,"").trim(),c=u.replace(/^[\*`_]+/,"").replace(/[\*`_]+$/,"");return{id:t.slug(u),title:c,depth:r}}).filter(l=>l!==null)},dn=n=>{if(!n)return;if(/^https?:\/\//i.test(n))return n;const t=n.startsWith("/")?n:`/${n}`;return`${pe}${t}`},un=()=>{const{slug:n}=je(),t=n?on(n):void 0,[l,a]=d.useState(!1),[r,s]=d.useState(""),[u,c]=d.useState(!1),p=d.useRef(null),o=()=>{var i;((i=p.current)==null?void 0:i.timeoutId)!==void 0&&typeof window<"u"&&window.clearTimeout(p.current.timeoutId),p.current=null},h=i=>{if(typeof window>"u"){s(i);return}o();const g=window.setTimeout(()=>{p.current=null},800);p.current={id:i,timeoutId:g},s(i)},m=d.useMemo(()=>t?cn(t.content):[],[t]);d.useEffect(()=>{if(typeof window>"u")return;const i=window.matchMedia(`(min-width: ${ln}px)`),g=x=>{const y=x?x.matches:i.matches;c(y),a(y)};return g(),i.addEventListener("change",g),()=>i.removeEventListener("change",g)},[]),d.useEffect(()=>{m.length!==0&&s(i=>{var g;return i&&m.some(x=>x.id===i)?i:((g=m[0])==null?void 0:g.id)??""})},[m]),d.useEffect(()=>{if(typeof window>"u"||m.length===0)return;const i=new Map,g=120,x=()=>{var se,re;if(p.current){s(p.current.id);return}const b=window.innerHeight+window.scrollY,k=document.documentElement.scrollHeight,j=(se=m[m.length-1])==null?void 0:se.id;if(b>=k-1&&j){s(j);return}if(i.size>0){const R=[...i.entries()].map(([w,N])=>({id:w,top:N.getBoundingClientRect().top-g})),I=R.filter(w=>w.top<=0).sort((w,N)=>w.top-N.top),V=R.filter(w=>w.top>0).sort((w,N)=>w.top-N.top),B=I.length>0?I[I.length-1]:V[0];if(B){s(B.id);return}}const ge=window.scrollY+g;let ne=((re=m[0])==null?void 0:re.id)??"",te=Number.POSITIVE_INFINITY;for(const R of m){const I=document.getElementById(R.id);if(!I)continue;const V=window.getComputedStyle(I),B=parseFloat(V.scrollMarginTop||"0"),w=I.offsetTop-B,N=Math.abs(w-ge);N<te&&(te=N,ne=R.id)}s(ne)},y=new IntersectionObserver(b=>{b.forEach(k=>{const j=k.target.getAttribute("id");j&&(k.isIntersecting?i.set(j,k.target):i.delete(j))}),x()},{root:null,rootMargin:"-120px 0px -50% 0px",threshold:[0,.25,.5,.75,1]});for(const b of m){const k=document.getElementById(b.id);k&&y.observe(k)}return x(),window.addEventListener("scroll",x,{passive:!0}),()=>{y.disconnect(),window.removeEventListener("scroll",x),o()}},[m]);const f=d.useMemo(()=>({h2:G("h2"),h3:G("h3"),h4:G("h4")}),[]);if(!t)return e.jsx(Ne,{to:"/guides",replace:!0});const P=t?Ue(t):Y.guides,O=t.icon,Z=d.useMemo(()=>{if(!t)return null;const i=P.canonicalUrl,g=t.publishedAt,x=t.updatedAt??t.publishedAt,y=dn(t.ogImage),b={"@context":"https://schema.org","@type":"Article",headline:t.title,description:t.description,author:{"@type":"Person",name:"Benjamin Mlynek"},mainEntityOfPage:{"@type":"WebPage","@id":i},url:i};return g&&(b.datePublished=g),x&&(b.dateModified=x),y&&(b.image=[y]),b},[t,P]),he=i=>{if(typeof document>"u"){h(i);return}const g=document.getElementById(i);g&&(g.scrollIntoView({behavior:"smooth",block:"start"}),u||a(!1),h(i))},ee=(i,g)=>{i.preventDefault(),he(g)};return e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsx(Q,{...P}),Z&&e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(Z)}}),e.jsx(q,{}),e.jsx("section",{className:"pt-24 pb-0",children:e.jsx("div",{className:"container-width section-padding",children:e.jsx("div",{className:"max-w-3xl mx-auto space-y-6",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"inline-flex flex-wrap items-center gap-3 text-sm text-muted-foreground",children:[e.jsx("span",{className:"rounded-full bg-primary/10 px-3 py-1 text-primary",children:e.jsx(O,{className:"h-5 w-5"})}),e.jsx("span",{className:"rounded-full bg-secondary px-2 py-1 text-xs text-secondary-foreground",children:t.category}),e.jsxs("button",{type:"button","aria-disabled":"true",disabled:!0,className:"inline-flex items-center gap-2 font-medium text-primary opacity-70 cursor-not-allowed",children:[e.jsx(Ie,{className:"h-4 w-4","aria-hidden":"true"}),e.jsx("span",{children:"Download as PDF (coming soon)"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h1",{className:"text-gradient text-3xl font-bold md:text-4xl",children:t.title}),e.jsx("p",{className:"text-lg text-muted-foreground",children:t.description})]})]})})})}),e.jsxs("section",{className:"pb-16",children:[e.jsx("div",{className:"container-width section-padding",children:e.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[m.length>0&&!u&&e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>a(i=>!i),className:"w-full inline-flex items-center justify-between rounded-md border border-border bg-card px-4 py-3 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/60 hover:text-primary","aria-expanded":l,children:[e.jsxs("span",{className:"inline-flex items-center gap-2",children:[e.jsx(Ae,{className:"w-4 h-4"})," Table of contents"]}),l?e.jsx(H,{className:"w-4 h-4 rotate-180"}):e.jsx(H,{className:"w-4 h-4"})]}),l&&e.jsx("nav",{className:"mt-4 rounded-md border border-border bg-card p-4 text-sm text-muted-foreground",children:e.jsx("ul",{className:"space-y-2",children:m.map(i=>{const g=r===i.id;i.depth;const x=i.depth===2?"":i.depth===3?"pl-4":"pl-8";return e.jsx("li",{children:e.jsx("a",{href:`#${i.id}`,onClick:y=>ee(y,i.id),className:`relative inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-left transition ${g?"bg-primary/10 text-primary":"text-foreground/80 hover:text-primary hover:bg-primary/5"} ${x}`,"aria-current":g?"true":void 0,children:e.jsx("span",{className:"flex-1 leading-snug",children:i.title})})},i.id)})})})]}),e.jsxs("div",{className:"space-y-12",children:[e.jsx("div",{className:"guide-prose",children:e.jsx(Se,{remarkPlugins:[De,$e],rehypePlugins:[Le],components:f,children:t.content})}),e.jsxs("div",{className:"bg-secondary/40 border border-border rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Need more resources?"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:"Explore the other guides below or reach out if you need help applying these steps to your specific project."}),e.jsx("div",{className:"flex flex-wrap gap-2",children:X.filter(i=>i.slug!==t.slug).map(i=>e.jsx(L,{to:`/guides/${i.slug}`,className:"px-3 py-2 text-sm rounded-md border border-border hover:border-primary/60 hover:text-primary transition-colors",children:i.title},i.slug))})]})]})]})}),u&&e.jsxs("aside",{className:"fixed top-16 left-0 z-40 flex h-[calc(100vh-4rem)] w-72 flex-col border-r border-border bg-card shadow-2xl",children:[e.jsx("div",{className:"px-6 pt-8",children:e.jsxs(L,{to:"/guides",className:"inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary",children:[e.jsx(H,{className:"w-4 h-4"}),"Back to guides"]})}),e.jsx("nav",{className:"flex-1 overflow-y-auto px-6 py-4 text-sm text-muted-foreground",children:e.jsx("ul",{className:"mt-2 space-y-3",children:m.map((i,g)=>{const x=r===i.id,y=i.depth===2,b=y&&g>0,k=i.depth===2?"":i.depth===3?"pl-4":"pl-8";return e.jsx("li",{className:b?"border-t border-border pt-3 mt-3":"",children:e.jsx("a",{href:`#${i.id}`,onClick:j=>ee(j,i.id),className:`relative inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-left transition ${y?"font-medium text-foreground":"text-foreground/80"} ${k} ${x?"bg-primary/10 text-primary":"hover:text-primary hover:bg-primary/5"}`,"aria-current":x?"true":void 0,children:e.jsx("span",{className:"flex-1 leading-snug",children:i.title})})},i.id)})})})]})]}),e.jsx(J,{})]})},mn=()=>{const n=U();return d.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",n.pathname)},[n.pathname]),e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404"}),e.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Oops! Page not found"}),e.jsx("a",{href:"/",className:"text-blue-500 hover:text-blue-700 underline",children:"Return to Home"})]})})},pn=()=>e.jsxs(Ee,{children:[e.jsx(C,{path:"/",element:e.jsx(Ze,{})}),e.jsx(C,{path:"/guides",element:e.jsx(an,{})}),e.jsx(C,{path:"/guides/:slug",element:e.jsx(un,{})}),e.jsx(C,{path:"*",element:e.jsx(mn,{})})]}),hn=()=>{const{pathname:n}=U();return d.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[n]),null},gn=()=>e.jsx(Fe,{children:e.jsxs(Pe,{children:[e.jsx(hn,{}),e.jsx(pn,{})]})});Re.createRoot(document.getElementById("root")).render(e.jsx(gn,{}));export{W as B,me as c,Ge as u};

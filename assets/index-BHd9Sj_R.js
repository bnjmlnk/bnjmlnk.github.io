const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/About-DDv0TL4W.js","assets/react-vendors-cTDKKvKa.js","assets/vendor-BdmH6xe9.js","assets/markdown-DJN9-0Pd.js","assets/BehindTheScenes-BQ98w0cu.js","assets/Services-hy8oLhPM.js","assets/useScrollAnimation-C7_ByzFM.js","assets/Portfolio-DPsN4WlT.js","assets/Contact-h6Psdoqr.js"])))=>i.map(i=>d[i]);
import{r as d,j as e,C as le,P as ye,u as be,a as xe,b as V,c as de,X as ke,M as we,d as ve,F as ce,e as he,H as ue,B as je,L as H,D as ge,f as Ae,N as Ne,A as re,g as Ie,i as Te,k as Se,R as _e,l as z,m as Ee,n as Me}from"./react-vendors-cTDKKvKa.js";import{I as Ce,J as Be,C as $,K as De}from"./vendor-BdmH6xe9.js";import{b as Pe,c as Re,d as Le}from"./markdown-DJN9-0Pd.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}})();function Fe(...t){return Ce(Be(t))}const ze=ye,He=d.forwardRef(({className:t,sideOffset:n=4,...a},c)=>e.jsx(le,{ref:c,sideOffset:n,className:Fe("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...a}));He.displayName=le.displayName;const Oe="modulepreload",We=function(t){return"/"+t},oe={},D=function(n,a,c){let o=Promise.resolve();if(a&&a.length>0){let h=function(i){return Promise.all(i.map(p=>Promise.resolve(p).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),m=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));o=h(a.map(i=>{if(i=We(i),i in oe)return;oe[i]=!0;const p=i.endsWith(".css"),u=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${u}`))return;const y=document.createElement("link");if(y.rel=p?"stylesheet":Oe,p||(y.as="script"),y.crossOrigin="",y.href=i,m&&y.setAttribute("nonce",m),document.head.appendChild(y),p)return new Promise((M,W)=>{y.addEventListener("load",M),y.addEventListener("error",()=>W(new Error(`Unable to preload CSS for ${i}`)))})}))}function s(h){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=h,window.dispatchEvent(l),!l.defaultPrevented)throw h}return o.then(h=>{for(const l of h||[])l.status==="rejected"&&s(l.reason);return n().catch(s)})},Ge="/assets/studio-9-CwJQ0Tdi.jpg",$e=()=>{const t=d.useRef(null);be(()=>{const a=$.timeline({defaults:{ease:"power3.out"}});$.set(".hero-element",{y:40,opacity:0}),$.set(".hero-bg",{scale:1.05}),a.to(".hero-bg",{scale:1,duration:2.5,ease:"power2.out"}),a.to(".hero-element",{y:0,opacity:1,duration:1.2,stagger:.15},"-=2")},{scope:t});const n=(a,c)=>{c.preventDefault();const o=a.substring(1),s=document.getElementById(o);s&&s.scrollIntoView({behavior:"smooth",block:"start"})};return e.jsxs("section",{id:"home",ref:t,className:"relative w-full h-[100dvh] overflow-hidden bg-background",children:[e.jsxs("div",{className:"absolute inset-0 z-0 bg-[#0D0D12] overflow-hidden",children:[e.jsx("img",{src:Ge,alt:"Studio Background",className:"hero-bg w-full h-full object-cover opacity-40 mix-blend-luminosity"}),e.jsx("div",{className:"absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0D0D12] to-transparent"}),e.jsx("div",{className:"absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#0D0D12] to-transparent"}),e.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(13,13,18,0.85)_100%)]"})]}),e.jsx("div",{className:"absolute inset-0 z-10 flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-16 container-width w-full",children:e.jsxs("div",{className:"max-w-4xl",children:[e.jsx("p",{className:"hero-element inline-block text-primary font-mono text-sm tracking-widest uppercase mb-6 px-3 py-1 rounded-full border border-primary/20 bg-primary/5",children:"Benjamin Mlynek"}),e.jsxs("h1",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"hero-element text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground/90",children:"Music Producer &"}),e.jsx("span",{className:"hero-element text-5xl md:text-8xl lg:text-9xl font-drama italic tracking-tight text-foreground leading-[1.1]",children:"Audio Engineer."})]}),e.jsx("p",{className:"hero-element mt-6 md:mt-10 text-lg md:text-xl text-muted-foreground w-full max-w-2xl font-light leading-relaxed",children:"Professional recording, mixing, and production services tailored to your artistry and vision. Based in Odense, Denmark."}),e.jsxs("div",{className:"hero-element mt-10 flex items-center gap-6",children:[e.jsx("a",{href:"#contact",onClick:a=>n("#contact",a),className:"group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-[2rem] bg-primary text-primary-foreground font-medium magnetic-button",children:e.jsx("span",{className:"relative z-10",children:"Book a Session"})}),e.jsx("a",{href:"#work",onClick:a=>n("#work",a),className:"group relative inline-flex items-center justify-center px-8 py-4 rounded-[2rem] border border-border/50 bg-card/10 backdrop-blur-sm text-foreground font-medium hover:border-primary/50 magnetic-button",children:"Explore Portfolio"})]})]})}),e.jsx("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hero-element flex flex-col items-center",children:e.jsx("a",{href:"#services",onClick:a=>n("#services",a),className:"text-muted-foreground/50 hover:text-primary transition-colors duration-300 flex flex-col items-center gap-2 group cursor-pointer",children:e.jsx(xe,{className:"w-5 h-5 animate-bounce"})})})]})},U=()=>{const[t,n]=d.useState(!1),[a,c]=d.useState(!1),o=V(),s=de();d.useEffect(()=>{const i=()=>{const p=window.scrollY>30||o.pathname!=="/";c(p)};return i(),window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[o.pathname]);const h=[{name:"Home",href:"#home",isRoute:!1},{name:"About",href:"#about",isRoute:!1},{name:"Work",href:"#work",isRoute:!1},{name:"Services",href:"#services",isRoute:!1},{name:"Guides",href:"/guides",isRoute:!0},{name:"Contact",href:"#contact",isRoute:!1}],l=(i,p)=>{if(p.preventDefault(),i.isRoute)s(i.href);else if(o.pathname!=="/")s("/"),setTimeout(()=>{const u=i.href.substring(1),y=document.getElementById(u);y&&y.scrollIntoView({behavior:"smooth",block:"start"})},100);else{const u=i.href.substring(1),y=document.getElementById(u);y&&y.scrollIntoView({behavior:"smooth",block:"start"})}n(!1)},m=a||t;return e.jsx("div",{className:"fixed top-0 w-full z-50 pointer-events-none flex justify-center px-4 pt-6 transition-all duration-500 max-w-[100vw]",children:e.jsxs("nav",{className:`pointer-events-auto transition-all duration-500 overflow-hidden ${m?`bg-background/80 backdrop-blur-xl border border-border shadow-2xl ${t?"rounded-[2rem]":"rounded-full"} px-6 py-3`:"bg-transparent px-6 py-3"}`,children:[e.jsxs("div",{className:"flex items-center justify-between min-w-[300px] md:min-w-[600px] gap-8",children:[e.jsx("a",{href:"/",onClick:i=>{i.preventDefault(),s("/"),n(!1),window.scrollTo({top:0,behavior:"smooth"})},className:"text-2xl font-drama font-bold text-foreground cursor-pointer tracking-tighter",children:"BM."}),e.jsx("div",{className:"hidden md:flex items-center space-x-8",children:h.map(i=>e.jsx("a",{href:i.href,onClick:p=>l(i,p),className:"text-sm font-medium text-foreground/80 hover:text-primary magnetic-button cursor-pointer",children:i.name},i.name))}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("a",{href:"https://instagram.com/benjaminmlynek",target:"_blank",rel:"noopener noreferrer",className:"inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 magnetic-button hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60","aria-label":"Instagram",children:e.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor",children:e.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})}),e.jsx("button",{type:"button",className:"md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 magnetic-button hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60","aria-label":t?"Close navigation menu":"Open navigation menu","aria-expanded":t,"aria-controls":"mobile-navigation",onClick:()=>n(!t),children:t?e.jsx(ke,{size:20}):e.jsx(we,{size:20})})]})]}),t&&e.jsx("div",{id:"mobile-navigation",className:"md:hidden mt-4 pt-4 border-t border-border/50 flex flex-col items-center space-y-4",children:h.map(i=>e.jsx("a",{href:i.href,onClick:p=>l(i,p),className:"block text-foreground/80 hover:text-primary transition-colors duration-200 cursor-pointer font-medium",children:i.name},i.name))})]})})},O="https://benjaminmlynek.com",me=O.replace(/\/$/,""),Y={home:{title:"Benjamin Mlynek - Music Producer & Audio Engineer",description:"Benjamin Mlynek offers professional recording, mixing, and mastering services for artists ready to release polished music. Partner with an experienced engineer who keeps your vision front and center from the first take to the final master.",canonicalUrl:O,ogType:"website"},guides:{title:"Guides & Resources for Artists | Benjamin Mlynek",description:"Step-by-step guides that help artists prepare files, sessions, and workflows for professional recording, mixing, and mastering.",canonicalUrl:`${O}/guides`,ogType:"website"}},qe=t=>({title:`${t.title} | Benjamin Mlynek Guides`,description:t.description,canonicalUrl:`${O}/guides/${t.slug}`,ogType:"article",ogImage:t.ogImage}),K=typeof document<"u",ie=t=>{if(!t)return;if(/^https?:\/\//i.test(t))return t;const n=t.startsWith("/")?t:`/${t}`;return`${me}${n}`},k=(t,n,a)=>{if(!K)return;const c=`meta[${t}="${n}"]`;let o=document.head.querySelector(c);if(!a){o&&document.head.removeChild(o);return}o||(o=document.createElement("meta"),o.setAttribute(t,n),document.head.appendChild(o)),o.setAttribute("content",a)},Ve=t=>{if(!K||!t)return;let n=document.head.querySelector('link[rel="canonical"]');n||(n=document.createElement("link"),n.setAttribute("rel","canonical"),document.head.appendChild(n)),n.setAttribute("href",t)},Q=({title:t,description:n,canonicalUrl:a,ogType:c="website",ogImage:o})=>(d.useEffect(()=>{!K||!t||(document.title=t,k("property","og:title",t),k("name","twitter:title",t))},[t]),d.useEffect(()=>{n&&(k("name","description",n),k("property","og:description",n),k("name","twitter:description",n))},[n]),d.useEffect(()=>{const s=ie(a??"/");s&&(Ve(s),k("property","og:url",s))},[a]),d.useEffect(()=>{k("property","og:type",c??"website")},[c]),d.useEffect(()=>{const s=ie(o);k("name","twitter:card",s?"summary_large_image":"summary"),s?(k("property","og:image",s),k("name","twitter:image",s)):(k("property","og:image"),k("name","twitter:image"))},[o]),null),J=()=>e.jsx("footer",{className:"bg-[#0A0A0E] rounded-t-[4rem] border-t border-border/20 pt-20 pb-10 mt-10 shadow-2xl relative z-10",children:e.jsxs("div",{className:"container-width section-padding",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-12 mb-16",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-3xl font-drama font-bold text-foreground",children:"BM."}),e.jsx("p",{className:"text-muted-foreground font-mono text-sm",children:"Music Producer & Audio Engineer"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-lg font-semibold text-foreground",children:"Navigation"}),e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx("a",{href:"/#about",className:"text-muted-foreground hover:text-primary transition-colors magnetic-button origin-left w-fit",children:"About"}),e.jsx("a",{href:"/#work",className:"text-muted-foreground hover:text-primary transition-colors magnetic-button origin-left w-fit",children:"Work"}),e.jsx("a",{href:"/#services",className:"text-muted-foreground hover:text-primary transition-colors magnetic-button origin-left w-fit",children:"Services"}),e.jsx("a",{href:"/guides",className:"text-muted-foreground hover:text-primary transition-colors magnetic-button origin-left w-fit",children:"Guides"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-lg font-semibold text-foreground",children:"Connect"}),e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx("a",{href:"https://instagram.com/benjaminmlynek",target:"_blank",rel:"noopener noreferrer",className:"text-muted-foreground hover:text-primary transition-colors magnetic-button origin-left w-fit",children:"Instagram"}),e.jsx("a",{href:"/#contact",className:"text-muted-foreground hover:text-primary transition-colors magnetic-button origin-left w-fit",children:"Email"})]})]})]}),e.jsx("div",{className:"pt-8 border-t border-border/20 flex flex-col md:flex-row justify-center items-center gap-4",children:e.jsx("p",{className:"text-muted-foreground text-sm font-mono",children:"© 2026 Benjamin Mlynek."})})]})}),Ue=d.lazy(()=>D(()=>import("./About-DDv0TL4W.js"),__vite__mapDeps([0,1,2,3]))),Ye=d.lazy(()=>D(()=>import("./BehindTheScenes-BQ98w0cu.js"),__vite__mapDeps([4,1,2,3]))),Ke=d.lazy(()=>D(()=>import("./Services-hy8oLhPM.js"),__vite__mapDeps([5,1,2,3,6]))),Qe=d.lazy(()=>D(()=>import("./Portfolio-DPsN4WlT.js"),__vite__mapDeps([7,1,2,3,6]))),Je=d.lazy(()=>D(()=>import("./Contact-h6Psdoqr.js"),__vite__mapDeps([8,1,2,3,6]))),B=({id:t})=>e.jsx("section",{id:t,className:"py-20",children:e.jsx("div",{className:"container-width section-padding",children:e.jsx("div",{className:"h-32 rounded-2xl bg-card/40 animate-pulse","aria-hidden":"true"})})}),Xe=()=>e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsx(Q,{...Y.home}),e.jsx(U,{}),e.jsx($e,{}),e.jsx(d.Suspense,{fallback:e.jsx(B,{id:"about"}),children:e.jsx(Ue,{})}),e.jsx(d.Suspense,{fallback:e.jsx(B,{id:"behind-scenes"}),children:e.jsx(Ye,{})}),e.jsx(d.Suspense,{fallback:e.jsx(B,{id:"work"}),children:e.jsx(Qe,{})}),e.jsx(d.Suspense,{fallback:e.jsx(B,{id:"services"}),children:e.jsx(Ke,{})}),e.jsx(d.Suspense,{fallback:e.jsx(B,{id:"contact"}),children:e.jsx(Je,{})}),e.jsx(J,{})]}),Ze=`---
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

## 2. Recording Instruments

---

### Drums
> A drum kit's sound is mostly decided before a single mic goes up. Sizes, heads, and tuning shape the tone far more than mic choice or placement ever will.  
> Once the kit sounds right in the room, mic'ing it well is mostly about capturing each piece for what it's actually there to do, not trying to make every mic sound like the whole kit.  
> Drums are also the one instrument where editing has to happen first, since everything else in the song will end up locked to their timing.

#### **Start With the Kit, Not the Mics**
Size and head choice affect the tone more than most people expect:

- **Snare depth changes the bottom end.** A deeper shell gives a fuller, louder snare; going shallower trades some of that low end for a tighter, quicker sound. Shell material matters too: metal shells tend to add high-end bite and cut, wood shells run a bit warmer.
- **Bigger cymbals resonate more and bleed further into other mics.** Live, that projection is useful. In a treated room, smaller, thinner cymbals are easier to control and cause less trouble later, though it's ultimately down to feel and preference.
- **Kick depth affects punch versus boom.** A very deep, wide kick shell resonates more than a small room can handle cleanly. For a tight, modern, punchy low end, a shallower kick, commonly around 45–50 cm (18–20 inches) deep, is usually easier to work with than a huge one.

If a drummer already has their kit dialed in and sounding good, there's rarely a reason to change much. Step in with tuning or head swaps mainly when it's needed, not as a default.

#### **Replace Heads and Tune Before You Record**
Fresh heads read brighter and behave more predictably than heads that are already stretched out or unevenly tuned, so it's worth doing this right before a session rather than days ahead. The one common exception is the kick's batter head, which usually holds its tone and tuning for a long time and doesn't need replacing every session.

A few general tuning principles:
- **Toms:** tune the bottom (resonant) head before putting the top head back on, tapping around all the lugs and listening for an even pitch all the way around. For a punchy, controlled tone with less ring, tune the bottom head relatively higher than the top. For a more open, resonant tone, tune the two heads closer together.
- **Snare:** both heads generally want to be tight, for crack on top and thud underneath, again checking that the pitch is even around all the lugs. Don't chase all the ring out of it, though — a little natural sustain gives you more character to work with once it's sitting in a full mix later.
- **Kick:** loosen both heads until they're barely holding tension, then bring them up just slightly. Combined with some internal muffling (a blanket or pillow resting against the heads), that gives a tight, slappy low end with minimal ringing.

Tuning by ear is mostly trial and error: try it a bit tighter, listen, and back off if it sounds worse. If a head keeps ringing more than you want after it's tuned, taming it with a small piece of tape or a dampening gel near the edge is an easy fix, but avoid deadening it completely. Some natural ring is easier to shape later than a sound that's already been squeezed lifeless.

#### **Listen in the Room Before You Set Up a Single Mic**
Once the kit is tuned, get the drummer to play through a section while you walk around the room and just listen. Fix anything that stands out, too boomy, too ringy, uneven between drums, before you commit to mic placement. A mic captures whatever's already happening in the room; it's not a tool for fixing a kit that doesn't sound right yet.

#### **Mic Each Piece for What It's There to Capture**
A useful mindset for placement: most mics on a kit are there to capture one specific piece cleanly, not the whole kit at once.

- **Kick:** placed near the beater's strike point, slightly off-center rather than dead-on. Pulling the mic back brings in more low end and room tone; moving it closer to the beater brings in more attack and less boom.
- **Snare (top and bottom):** most mics used here are directional, picking up mostly from the front and rejecting sound from behind. Use that to your advantage by angling the mic so hi-hats and cymbals fall into its rejection zone as much as possible. Aim the top mic at the strike point, positioned 2–3 cm (about an inch) above the rim. Mirror that on the bottom, angled toward the center but sitting a little farther back so it isn't overwhelmed by the snare wires.
- **Toms:** similarly, 2–3 cm (about an inch) above the rim, aimed at the strike point, and tucked between cymbals where possible so they help shield the mic from spill.
- **Overheads and cymbal mics:** the goal here is usually to capture the cymbals clearly, not to get a whole-kit picture, since close mics and a room mic are already handling the rest. Mic them fairly close, and aim slightly toward the edge of the cymbal rather than dead center for a smoother, less harsh tone. If you're running a stereo pair, measure from the center of the snare to each mic and keep that distance equal; that keeps the snare centered and <a href="/guides/glossary#phase" class="glossary-link" target="_blank" rel="noopener noreferrer">phase</a>-coherent between the two, instead of drifting to one side.
- **Hi-hat:** angle the mic off-axis a bit rather than pointing it straight on. A mic aimed directly into hard-played hi-hats can pick up the actual rush of air off the cymbals, which reads as an odd, unwanted sound. Keep it clear of where the stick travels, too.
- **Room mic(s):** how far back to place these depends entirely on your space. A large, lively room can support a distant pair for real ambience; a small or dead-sounding home room usually does better with a mic pulled in much closer, or just a single room mic rather than a stereo pair.
- **A "character" mic, if you have a spare input, is worth trying.** Stick it somewhere unconventional, a hallway, behind furniture, near a doorway, anywhere with an interesting sound. It won't always make the final mix, but occasionally it becomes the thing that defines the whole drum sound.

Label your tracks clearly inside your <a href="/guides/glossary#daw" class="glossary-link" target="_blank" rel="noopener noreferrer">DAW</a>:
- <span class="guide-chip">Kick In</span>  
- <span class="guide-chip">Snare Top</span>  
- <span class="guide-chip">Snare Bottom</span>  
- <span class="guide-chip">Rack Tom</span>  
- <span class="guide-chip">Floor Tom</span>  
- <span class="guide-chip">Hi-Hat</span>  
- <span class="guide-chip">Overhead L</span>  
- <span class="guide-chip">Overhead R</span>  
- <span class="guide-chip">Room</span>

#### **Check Phase Before You Track**
Once mics are up, sum everything to mono and compare each close mic against the overheads one at a time, flipping <a href="/guides/glossary#phase" class="glossary-link" target="_blank" rel="noopener noreferrer">phase</a> on each and keeping whichever version sounds fuller, with more low end. The bottom snare mic is the one that almost always needs flipping, since it's facing the opposite direction from the top mic relative to the head's movement. Don't get stuck on this step; phase can still be flipped later if something sounds off once you're mixing.

#### **Keep the Signal Chain Simple While Tracking**
For most tracks, a clean preamp with healthy <a href="/guides/glossary#gain-staging" class="glossary-link" target="_blank" rel="noopener noreferrer">gain staging</a> and no processing is enough. If you want to shape a sound going in, light compression on the snare, a moderate ratio with a slower attack that lets the initial hit through, can add snap and keep levels consistent, but keep it subtle so you're not locked into a decision you can't undo later. A room or character mic is the one place it's fine to be heavier-handed, since pushing it harder (more sustain, more compression) can add grit that's difficult to recreate afterward.

#### **Capture Safety Samples Before Full Takes**
Before tracking full performances, get the drummer to play a few isolated hits of each piece, kick alone, snare alone, each tom, each cymbal, while the kit is freshly tuned. These rarely get used, but they're there if a head starts sounding inconsistent later in the session, or if you need a clean hit to reinforce a weak moment while editing or mixing.

#### **Track in Big Sections, Then Comp and Punch In**
Aim for full takes, or the largest sections the drummer can play through cleanly, and get more than one so you can comp the strongest pieces into a final performance rather than relying on a single pass. Listen for energy as much as timing: a drummer who's steady with the click but tiring and hitting softer over a long take is a bigger problem than a minor timing slip you can fix later.

When <a href="/guides/glossary#comping" class="glossary-link" target="_blank" rel="noopener noreferrer">comping</a> between takes, cut on a clear hit, kick, snare, or crash, rather than in the middle of a phrase; it's far more forgiving to splice cleanly. For any <a href="/guides/glossary#punch-in" class="glossary-link" target="_blank" rel="noopener noreferrer">punch-ins</a>, always roll in a few bars early so the drummer is locked into the feel before the punch point, and pay closest attention to how the cymbals match on either side of the edit. An inconsistent cymbal choice or dynamic right at a punch is usually the easiest way to give away an edit.

#### **Edit the Drums Before You Track Anything Else**
Whatever gets tracked next, bass, guitars, keys, will end up locked to the drums, so finish editing them first. Editing drums after other instruments are already recorded against them is far more painful than doing it up front.

- **Grid-edit off the right tracks.** Quantize based on the kick, snare, toms, and hi-hat, but leave the overhead and room tracks to just follow along rather than triggering edits directly off them; cymbal transients are much harder for any tool to detect accurately.
- **Favor the snare over the kick when they land together.** When a kick and snare hit at the same time but aren't quite aligned, nudge the kick and leave the snare closest to the grid. It tends to read as tighter, since a kick that's slightly off on its own is far less noticeable than a snare that is.
- **Handle odd groupings by hand.** Triplet fills and other non-standard groupings usually trip up automatic quantizing tools. Switch to the matching grid and place those hits manually rather than fighting the tool to get it right.
- **<a href="/guides/glossary#crossfade" class="glossary-link" target="_blank" rel="noopener noreferrer">Crossfade</a> every edit point**, and if a fade is clipping a cymbal decay or causing a flammed, doubled-sounding hit, nudge the cut to a different nearby hit instead of forcing it.
- **Clean up once the edits are solid.** Consolidate each track down to a single region per part, and clear out the unused audio regions left behind from editing so the session stays light and easy to work in.

#### **Rough-Mix the Drums Before You Move On**
Once drum tracking wraps, spend a few minutes getting them close to a finished-sounding tone, some EQ, light compression, maybe a sample layered under the snare, before moving on to the next instrument. It's not the final mix, but a drum sound that already feels close to finished keeps the session inspiring and gives you a far more realistic target for how everything else should sit against it.

#### **What to Deliver to Your Mixer**
A finished drum session handed off for mixing should include:
- <a href="/guides/glossary#comping" class="glossary-link" target="_blank" rel="noopener noreferrer">Comped</a>, edited performances rather than a single raw pass with mistakes left in
- One consolidated, labeled track per mic or piece, not dozens of leftover regions and crossfades from editing
- Isolated safety samples for the kick, snare, and cymbals
- Consistent levels with no <a href="/guides/glossary#clipping" class="glossary-link" target="_blank" rel="noopener noreferrer">clipping</a>, and <a href="/guides/glossary#phase" class="glossary-link" target="_blank" rel="noopener noreferrer">phase</a> already checked across the close mics and overheads
- A <a href="/guides/glossary#rough-mix" class="glossary-link" target="_blank" rel="noopener noreferrer">rough mix</a> reference, so the mixer understands the direction you were going for

None of this editing has to fall on you, either. Plenty of mixing engineers and dedicated editors will comp, quantize, and clean up drum edits themselves as part of the job, so it's worth asking what's included before you assume a fully edited session is yours to deliver.

> If the kit isn't tuned well or the takes aren't tight, no amount of mixing fixes that afterward. Solving these problems is cheap while you're tracking. Fixing them later is expensive, if it's even possible at all.

---

### Electric Guitar
> Always check your tuning before every take. Guitars drift faster than you think.  
> Even minor pitch shifts between double-tracked guitars can ruin tightness and stereo image.  
> Fresh strings and frequent tuning make the mix and performance sound instantly more professional.

#### **Get Your Guitar Set Up Right**
Most tuning problems start before anyone hits record. Get these three things right first:

- **Match string gauge to your tuning.** Strings too light for a low or dropped tuning lose stability under hard picking, sagging in pitch right after the attack. Go <a href="/guides/glossary#string-gauge" class="glossary-link" target="_blank" rel="noopener noreferrer">a gauge or two heavier</a>: around 11–56 for half-step-down or drop D, 12–60 for drop C or lower, and a heavy single (upper 60s to low 70s) or baritone set for drop A and below.
- **Restring right before the session, not days ahead.** An older, stretched string drops pitch noticeably as a note rings out, and it only gets worse with age. Bring new strings up to pitch without aggressively stretching them by hand; you want stable tuning for a few hours, not a “broken-in” set for a live show.
- **Use a tuner that reads in cents, and check intonation too.** A cheap clip-on tuner’s in-tune range is often wider than it looks. For <a href="/guides/glossary#intonation" class="glossary-link" target="_blank" rel="noopener noreferrer">intonation</a>, play the same note open, then at the 12th fret. If the fretted note is sharp or flat against the open string, that’s a setup issue (bridge saddle adjustment), not a tuning one, and it should be checked at the tuning you’re actually recording in.

#### **Play Tight, Then Edit Tight**
No amount of mixing rescues a sloppy performance. A few habits make this much easier:

- **Rehearse until it’s genuinely comfortable, before you record.** Inconsistent picking dynamics, buzzing frets, and timing slips are far easier to fix by playing the part again than by editing around them afterward.
- **Tune at the same intensity you’re actually going to play with.** A string tuned while picking softly reads sharp the moment you dig in for real, especially on a low string. Picking closer to the bridge also helps. Retune often too, even if the last take sounded fine, since a guitar can drift as a whole and still sound in tune with itself.
- **<a href="/guides/glossary#punch-in" class="glossary-link" target="_blank" rel="noopener noreferrer">Punch in</a> on just the bad bar**, not a whole shaky pass because “the rest was good.” For a genuinely difficult passage, it’s fine to isolate it: loop just that phrase against a click until it’s clean, then drop it in. Treat that as a last resort though, not your default. A slightly imperfect take with real character almost always beats one that’s technically flawless but robotic.

#### **Record in Sections, Not One Take**
Trying to nail an entire song in a single unbroken pass almost always produces uneven energy and creeping tempo or pitch drift, especially past the two-minute mark.

- **Record in pieces.** Track verse, chorus, and bridge separately, or phrase by phrase for tricky riffs, then <a href="/guides/glossary#comping" class="glossary-link" target="_blank" rel="noopener noreferrer">comp</a> together the strongest takes. This is standard practice on professional sessions, and it’s the difference between a track that sounds *played* and one that sounds *performed*.
- **Don’t pile on layers for size.** Two genuinely tight, clean rhythm takes (left and right) usually sound bigger than four or five loose ones, since it’s the tightness between takes that creates size, not the track count. If a part repeats identically later in the song, copy the take you already have instead of re-recording it.

#### **Use a Real Amp or a Proper Amp Simulator**
If you’re tracking direct through an interface, multi-effects unit, or modeler, confirm that an actual <a href="/guides/glossary#amp-simulator" class="glossary-link" target="_blank" rel="noopener noreferrer">amp simulator</a> is engaged before you print the signal: a modeled amp and cabinet, not just compression, EQ, and time-based effects. Guitar run straight into an interface without amp/cab modeling has no speaker breakup or power-amp saturation shaping it. It reads as thin, harsh, and unmistakably “digital,” no matter how good the playing is.

> Before committing to a full session, record a short test pass and listen back on headphones. If it doesn’t sound like a mic’d amp, your amp sim isn’t actually in the signal path. Check your patch or plugin chain before you track anything for real.

#### **Always Print a DI Track**
Whether you’re mic’ing a real amp or recording direct, always capture a clean **<a href="/guides/glossary#di" class="glossary-link" target="_blank" rel="noopener noreferrer">DI</a> signal** in parallel with the processed tone.

- **It’s a safety net.** This costs nothing during tracking but gives your mixer the option to re-amp or change the tone entirely without needing you back in the room.
- **It makes editing far easier.** A processed guitar track is often just a solid block of waveform, but the DI shows exactly where each note and strum starts, which matters if timing ever needs tightening. A processed-only take with no DI is a dead end if the sound needs to change later.

Label your tracks clearly inside your <a href="/guides/glossary#daw" class="glossary-link" target="_blank" rel="noopener noreferrer">DAW</a>:
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
- In-tune, edited performances <a href="/guides/glossary#comping" class="glossary-link" target="_blank" rel="noopener noreferrer">comped</a> from multiple takes, not a single raw pass with mistakes left in
- A clean <a href="/guides/glossary#di" class="glossary-link" target="_blank" rel="noopener noreferrer">DI</a> track for every part, printed alongside any amp or amp-sim tone
- At least one reference tone print (mic’d amp or <a href="/guides/glossary#amp-simulator" class="glossary-link" target="_blank" rel="noopener noreferrer">amp sim</a>) so the mixer understands the direction you were going for
- One consolidated, edit-checked track per part, not dozens of leftover regions and crossfades from tracking
- Consistent levels with no <a href="/guides/glossary#clipping" class="glossary-link" target="_blank" rel="noopener noreferrer">clipping</a>, and noise or silence trimmed between sections

Comping and edit cleanup don't have to be your job alone, either. Many mixing engineers and dedicated editors will take that on themselves, so it's worth asking what's included before you assume it's entirely on you.

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
- **String ringing.** The low string can bleed into the next note as the player jumps between strings, a common bass habit that reads as messy against a tight mix. Mute the previous string, or split the take into smaller <a href="/guides/glossary#punch-in" class="glossary-link" target="_blank" rel="noopener noreferrer">punches</a> if it keeps happening.
- **High notes on a low string.** For a note fretted high up on a lower string, it’s often easier to get accurate tuning by punching that note in on the next string up instead.
- **Fret-specific tuning issues.** Problems tend to show up at particular spots, like the first fret of a string. If a part lives there, check the tuning right at that fret rather than trusting a general tune-up.

#### **Blend a Clean and a Dirty Tone**
You don’t need to mic a bass cab to get a great bass tone. A clean <a href="/guides/glossary#di" class="glossary-link" target="_blank" rel="noopener noreferrer">DI</a> plus a driven or saturated tone (from a bass preamp/drive pedal or plugin) is a complete, professional-grade approach on its own.

If you’re layering more than one source, each one has a job:
- **DI:** stays clean and flexible, and always gives you the option to re-amp or change the tone later without calling anyone back in.
- **Driven layer:** adds midrange aggression that helps the bass cut through dense guitars.
- **Mic’d amp** (if you have one): sits underneath as the heaviest, dirtiest of the three.

Two things to watch when blending them: check that a clean DI and a processed layer are in <a href="/guides/glossary#phase" class="glossary-link" target="_blank" rel="noopener noreferrer">phase</a>, since having traveled through different paths they can land slightly out of alignment and cancel some frequencies (listen for whichever phase relationship sounds fuller). And don’t expect the dirty layer to carry the low end; it’s there for midrange bite, so it’s fine, often better, to roll off some of its low and extreme high end.

Label your tracks clearly inside your <a href="/guides/glossary#daw" class="glossary-link" target="_blank" rel="noopener noreferrer">DAW</a>:
- <span class="guide-chip">Bass DI</span>  
- <span class="guide-chip">Bass Drive</span>  
- <span class="guide-chip">Bass Amp</span>

#### **Clean Up Your Edits Before You Deliver**
Before a session is really done, whether you’re mixing it yourself or sending it off, go back through the bass track in solo and check each edit and <a href="/guides/glossary#crossfade" class="glossary-link" target="_blank" rel="noopener noreferrer">crossfade</a> for clicks, pops, or a missed fade.

- **Judge the edits in context**, against the rest of the rhythm section rather than in solo, so you don’t over-tighten something that already sits well with the drums.
- **Reuse clean repeats.** If a section repeats and an earlier pass is noisier or looser than a later one, it’s fine to copy the cleaner repeat into place rather than fixing the messier one by hand.
- **Keep a duplicate** of your edited tracks before consolidating them down to one clean region, so you can always get back to the individual takes later.

#### **What to Deliver to Your Mixer**
A finished bass session handed off for mixing should include:
- In-tune, edited performances <a href="/guides/glossary#comping" class="glossary-link" target="_blank" rel="noopener noreferrer">comped</a> from multiple takes, not a single raw pass with mistakes left in
- A clean <a href="/guides/glossary#di" class="glossary-link" target="_blank" rel="noopener noreferrer">DI</a> track, printed alongside any driven or amp tone
- At least one reference tone print (driven or mic’d amp tone) so the mixer understands the direction you were going for
- One consolidated, edit-checked track, not dozens of leftover regions and crossfades from tracking
- Consistent levels with no <a href="/guides/glossary#clipping" class="glossary-link" target="_blank" rel="noopener noreferrer">clipping</a>, and noise or silence trimmed between sections

This doesn't all have to be on you, either. Comping and edit cleanup are often things a mixing engineer or a dedicated editor will handle as part of the job, so it's worth asking about before you assume it's yours to finish.

> If a part isn’t in tune, isn’t tight, or has no DI backing up the tone you printed, no mix can fully fix it. Solving these problems is cheap during tracking. Fixing them afterward is expensive, if it’s even possible at all.

---

### Acoustic Instruments
Use a <a href="/guides/glossary#condenser-mic" class="glossary-link" target="_blank" rel="noopener noreferrer">condenser mic</a> about 30–60 cm away, aimed where the neck meets the body for a balanced tone.  
Avoid pointing the mic directly at the sound hole — this can cause boomy low-end buildup.

Record multiple takes and choose the most consistent performance, not necessarily the first.

---

### MIDI and Virtual Instruments
If you’re using software instruments, always **export the <a href="/guides/glossary#midi" class="glossary-link" target="_blank" rel="noopener noreferrer">MIDI</a> performance and a rendered audio version** once your production is complete.  
This ensures the mix engineer can reproduce or tweak sounds later if needed.

Inside your <a href="/guides/glossary#daw" class="glossary-link" target="_blank" rel="noopener noreferrer">DAW</a>, keep naming consistent:
- <span class="guide-chip">Piano Main</span>  
- <span class="guide-chip">Synth Arp</span>  
- <span class="guide-chip">Pad Texture</span>

---

## 3. Vocal Recording

---

> The mic and workflow you choose matter more for vocals than almost any other instrument, since there's no amp or cabinet standing between the performance and the recording.  
> Comfort and momentum count for just as much as technical setup. A relaxed singer moving quickly through a song will consistently beat a perfect signal chain paired with a tired, self-conscious one.  
> Editing and tuning happen after the session wraps, not while the singer is standing there waiting on you.

#### **Preparation**
Warm up, hydrate, and rehearse the parts before you start recording. Avoid dairy, carbonated drinks, or coffee right before takes, since they can affect tone and clarity.

Get the lyrics in front of you both, printed out or on a screen, before you roll anything. Knowing the words means you can say "let's redo that line" instead of stopping to ask what it was, and that alone keeps a session moving.

#### **Choose the Right Mic for the Job**
- **A rugged, mid-priced <a href="/guides/glossary#dynamic-mic" class="glossary-link" target="_blank" rel="noopener noreferrer">dynamic mic</a> built for vocals is a genuinely safe default**, especially for rock and heavy music. It holds up to a performer right on the capsule without ever needing to back off, which matters the moment someone starts screaming into it.
- **Reach for a large-diaphragm <a href="/guides/glossary#condenser-mic" class="glossary-link" target="_blank" rel="noopener noreferrer">condenser</a> mainly for a quieter or more delicate performance.** The extra sensitivity and gain works in your favor there. In a less-than-ideal room, though, a condenser will pick up noticeably more of that room's character; a dynamic mic naturally rejects more of the space around it and keeps the vocal drier and more focused, whatever your room sounds like.
- **Know the mic's proximity effect and use it on purpose.** Getting closer builds up low end, which is part of why a screamer right on the capsule sounds so huge. Stepping back trims that low end out and brightens things up. Pull back a little for a clean, bright lead vocal; get right in for aggressive, high-energy parts.
- **A pop filter helps control plosives on cleaner takes.** For a full-throated performance close to the mic, it's fine to pull the filter and let the singer get right on the capsule; that physical closeness is part of getting a genuinely energetic take.

#### **Keep the Singer Comfortable**
How well a vocalist can hear themselves changes the performance more than almost any technical decision, so get that right before you start rolling.

A dedicated headphone mix, their vocal on its own fader against everything else, and ideally under their own control, is the gold standard, but it isn't required. Sending exactly what you're hearing in the room works fine too. If someone wants their voice loud and upfront in the mix, give it to them loud. Comfort beats an objectively "correct" balance every time.

#### **Set a Clean, Consistent Level**
Run a few warm-up passes at real performance intensity, not a quiet soundcheck voice, before you commit to a take, and set your gain from that so a loud line later doesn't clip.

A single compressor early in the chain, hardware or a plugin you can track through, evens out a performance and makes it easier for both of you to judge it. Most rock, pop, and heavy mixes end up compressing the vocal fairly hard anyway, so handling some of that going in isn't wasted work: a moderate ratio, a medium attack that lets the initial hit through, and a release fast enough to recover before the next phrase is a solid starting point. It's optional, though. Going straight into a clean, well-staged preamp works fine without one.

#### **Track Fast, Line by Line**
- **Roll a handful of full takes first** just to warm the singer up, then switch to working line by line, or phrase by phrase, rather than stacking take after take of a whole section.
- **Move on the moment a line is genuinely good.** Re-taking something that already works just to have more options is how a vocalist burns out and a session drags. Speed keeps the performance energized, and that energy is far harder to fix afterward than a small timing or pitch issue.
- **<a href="/guides/glossary#punch-in" class="glossary-link" target="_blank" rel="noopener noreferrer">Punch in</a> slightly after the start of the previous region** rather than right on top of it, so an earlier pass of that same line is still sitting there on the same track if you end up preferring it. That gives you the flexibility of comping without formally keeping and re-listening to a stack of full alternate takes.
- **Splice on hard consonants, or in between words**, never in the middle of a sustained vowel. Those cuts are far easier to hide.
- **Prioritize timing over pitch while you're listening in the room.** Pitch is usually straightforward to correct afterward with a tuning tool; timing that's noticeably rushed or dragging is much more noticeable once you're stretching audio to fix it, so get that right at the source. Be pickiest of all on rough, gritty, or pitched-but-unclean sounds like heavy yells, since automated tuning struggles hardest with those.
- **Take a listen back with the singer** once you're through a whole section, confirm you're both still happy with it, and punch in anything that needs it before moving on to doubles or harmonies.

#### **Layer Doubles and Harmonies as You Go**
For big, melodic sections, doubling the lead left and right, and adding harmonies the same way, makes a chorus sound noticeably bigger.

- **Track into one working take, then copy each good pass onto a second, pre-panned placeholder track** that's already sitting quieter in the mix. The song keeps sounding more finished as you go, which keeps the energy up, rather than everything staying raw until a separate doubling pass at the end.
- **Doubles don't need the same surgical timing and tuning as the lead.** They're sitting lower in the mix specifically to add width and thickness, so a little natural looseness is fine, and chasing perfect tightness on a part nobody's listening to closely is time better spent elsewhere.
- **For screams specifically, track doubles on standout or emphasized words as you go**, rather than saving a separate doubling pass for later. Screamed doubles are usually about a handful of key moments, not the whole part.
- **If a section repeats later in the song**, copy the raw take across as a placeholder instead of re-singing it identically. Give copied regions an obviously different color so that once you're editing, you know at a glance they're duplicates waiting on the finished version, not something to tune from scratch.

Label your tracks clearly inside your <a href="/guides/glossary#daw" class="glossary-link" target="_blank" rel="noopener noreferrer">DAW</a>:
- <span class="guide-chip">Lead Vocal</span>  
- <span class="guide-chip">Vocal Double L</span>  
- <span class="guide-chip">Vocal Double R</span>  
- <span class="guide-chip">Harmony L</span>  
- <span class="guide-chip">Harmony R</span>  
- <span class="guide-chip">Scream Lead</span>  
- <span class="guide-chip">Scream Double L</span>  
- <span class="guide-chip">Scream Double R</span>

#### **Edit and Tune After the Session, Not During**
Vocals are usually tracked last, so there's no reason to hold up a live session with detailed tuning work. Save it for after everyone's gone.

- **Duplicate your session or playlist before you touch anything**, so you always have an untouched copy of the raw takes to go back to.
- **Clean up timing and <a href="/guides/glossary#crossfade" class="glossary-link" target="_blank" rel="noopener noreferrer">crossfades</a> first**, nudging anything that's obviously rushed or dragging, before you start tuning. A light, automatic pass of pitch correction is enough to confirm you're in the right ballpark; it doesn't need to be hand-tuned note by note for a rough pass.
- **Tune the lead first, then bring doubles and harmonies into alignment with it**, whether by hand-adjusting each region or with a dedicated vocal-alignment tool if you have access to one. Either way, leave a little natural tolerance in both pitch and timing on doubles rather than locking them dead-on to the lead. Align them too tightly and they collapse into the lead instead of adding width.
- **Use the highest-quality time-stretching mode your tools offer** whenever you do need to stretch a region, and consolidate a track once you're happy with it so the edits are committed and it stays easy to work with.
- **Tune a repeated section once, then copy it across.** Those colored placeholder regions from tracking are your cue: finish editing and tuning the original section fully, then copy that finished region over every marked repeat instead of tuning the same line twice.

#### **What to Deliver to Your Mixer**
A finished vocal session handed off for mixing should include:
- A tuned, edited lead vocal with timing and pitch checked, not a raw, unedited take
- Doubles and harmonies aligned to the lead with a little natural looseness preserved, not clamped dead-on top of it
- Clearly labeled, consolidated tracks starting from the same point in the timeline, so anyone can drop the session into another <a href="/guides/glossary#daw" class="glossary-link" target="_blank" rel="noopener noreferrer">DAW</a>
- Consistent levels with no <a href="/guides/glossary#clipping" class="glossary-link" target="_blank" rel="noopener noreferrer">clipping</a>
- A <a href="/guides/glossary#rough-mix" class="glossary-link" target="_blank" rel="noopener noreferrer">rough mix</a> reference, so the mixer understands the direction you were going for

Tuning and comping don't have to be entirely on you, either. Many mixing engineers and dedicated vocal editors handle exactly this as part of their service, so it's worth asking what's included before you assume a fully tuned, edited vocal is something you need to deliver yourself.

> A vocal performance that's tired, rushed through, or stitched together from too many takes isn't something tuning can fix afterward. Keep the takes fast and the singer comfortable while you're tracking; that's what actually makes the vocal believable later.

---

## 4. File Management and Organization

---

### Project Organization
A good delivery starts with a good session, not a cleanup pass right before you export. Naming and organizing tracks properly from the moment you create them saves you from a tedious rename-everything session later, and it's the difference between a bounce that takes two minutes and one that takes an hour.

#### **Name Tracks As You Create Them**
Name every track the moment you create it, not once the song is finished. Use the instrument and part it's actually capturing, not a placeholder:

- <span class="guide-chip">Kick In</span>  
- <span class="guide-chip">Guitar Rhythm DI</span>  
- <span class="guide-chip">Lead Vocal</span>

Avoid leaving default names like <span class="guide-chip">Audio 1</span> or <span class="guide-chip">Track 5</span> in place. It doesn't seem to matter mid-session, but once a project has 30-plus tracks, figuring out what "Audio 14" actually is wastes real time, and if you ever bounce stems straight from track names, a vague track name becomes a vague file name too.

#### **Keep a Consistent Track Order**
Lay tracks out the same way every time you start a new song, drums at the top, then bass, guitars, keys and synths, then vocals at the bottom, or whatever order makes sense to you, so you can navigate a session on muscle memory alone. It matters more than it sounds like it should once a session gets busy: being able to jump straight to a track without hunting for it is worth the small effort of staying consistent from the start.

#### **Group and Color-Code by Instrument**
Bundle related tracks into groups or folders, whatever your <a href="/guides/glossary#daw" class="glossary-link" target="_blank" rel="noopener noreferrer">DAW</a> calls them, all your drum mics together, all your vocal layers together, and give each group its own color. It keeps a large session visually scannable, turns soloing or muting a whole instrument into a single click instead of ten, and makes it obvious at a glance which tracks belong together once it's time to export.

#### **Build a Template You Reuse**
Once you've settled on a track layout, naming scheme, and color scheme you like, save it as a template and start every new song from it. Consistency across sessions means less setup time, fewer naming mistakes, and a project that's always in a state you could export from without a scramble.

Once a song's ready to send off, see <a href="/guides/preparing-files-for-mixing">Preparing Files for Mixing</a> for the exact naming format and file checklist your mixer will actually need. A well-organized session like this makes getting there a quick bounce, not a rebuild.
`,en=`---
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
- The <a href="/guides/glossary#sample-rate" class="glossary-link" target="_blank" rel="noopener noreferrer">sample rate</a> and <a href="/guides/glossary#bit-depth" class="glossary-link" target="_blank" rel="noopener noreferrer">bit depth</a> are correct  
- The <a href="/guides/glossary#bpm" class="glossary-link" target="_blank" rel="noopener noreferrer">BPM</a> and key are noted  

Example naming inside your <a href="/guides/glossary#daw" class="glossary-link" target="_blank" rel="noopener noreferrer">DAW</a>:
- <span class="guide-chip">Instrumental Full</span>  
- <span class="guide-chip">Click Track</span>  
- <span class="guide-chip">Backing Vocals</span>  
- <span class="guide-chip">Guide Guitar</span>

Include a <a href="/guides/glossary#rough-mix" class="glossary-link" target="_blank" rel="noopener noreferrer">rough mix</a> or demo to show the song’s intended energy or feel.

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
- <a href="/guides/glossary#reference-track" class="glossary-link" target="_blank" rel="noopener noreferrer">Reference tracks</a> that match your sound or mood  
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
- [x] Files labeled, <a href="/guides/glossary#click-track" class="glossary-link" target="_blank" rel="noopener noreferrer">click track</a> ready  
- [x] Gear checked and working  
- [x] <a href="/guides/glossary#reference-track" class="glossary-link" target="_blank" rel="noopener noreferrer">Reference tracks</a> and lyric sheets prepared  
- [x] Hydration, rest, and warm-up done  
- [x] Session backed up after recording`,nn=`---
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

> Tip: Most <a href="/guides/glossary#daw" class="glossary-link" target="_blank" rel="noopener noreferrer">DAWs</a> have a “consolidate” or “bounce in place” feature for this.

---

### Clear and Consistent Track Naming
Use clear, descriptive names for each <a href="/guides/glossary#stems" class="glossary-link" target="_blank" rel="noopener noreferrer">stem</a>. This saves time and avoids confusion for the mix engineer.

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
- **<a href="/guides/glossary#bit-depth" class="glossary-link" target="_blank" rel="noopener noreferrer">Bit Depth</a>:** 24-bit (or higher if recorded that way)  
- **<a href="/guides/glossary#sample-rate" class="glossary-link" target="_blank" rel="noopener noreferrer">Sample Rate</a>:** 44.1 kHz or 48 kHz (match your session settings)  
- Do not send <a href="/guides/glossary#wav-vs-mp3" class="glossary-link" target="_blank" rel="noopener noreferrer">MP3 files</a> unless there is no other option  

Lossy files like MP3 reduce audio quality and can negatively affect the final mix.

---

## 2. Session Information & Extras

---

### Provide a Tempo Map or BPM
Let your mix engineer know the <a href="/guides/glossary#bpm" class="glossary-link" target="_blank" rel="noopener noreferrer">BPM</a> (tempo) of the track. If your song includes tempo changes, export and include a <a href="/guides/glossary#tempo-map" class="glossary-link" target="_blank" rel="noopener noreferrer">tempo map</a> or a <a href="/guides/glossary#midi" class="glossary-link" target="_blank" rel="noopener noreferrer">MIDI</a> file with tempo automation.

**Example:**  
“The track is in 6/8 at 90 BPM throughout.”

---

### Include a Reference Mix
Always include a <a href="/guides/glossary#rough-mix" class="glossary-link" target="_blank" rel="noopener noreferrer">rough mix</a> of your track — even if it's not polished. This gives your engineer an idea of:

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
Don’t send full <a href="/guides/glossary#daw" class="glossary-link" target="_blank" rel="noopener noreferrer">DAW</a> projects unless requested. Engineers often work in a different DAW than you, so audio files (WAVs) are the universal standard.

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
- [x] <a href="/guides/glossary#rough-mix" class="glossary-link" target="_blank" rel="noopener noreferrer">Rough mix</a> included
- [x] <a href="/guides/glossary#bpm" class="glossary-link" target="_blank" rel="noopener noreferrer">BPM</a> and notes provided`,tn=`---
title: "Preparing Files for Mastering"
description: "How to prepare your final mix for the mastering process to achieve the best possible results."
---

_The final polish starts with a balanced, dynamic mix._

> Before sending your mix for mastering, it’s important to make sure your mix is properly prepared. The goal is to give the mastering engineer enough headroom, clarity, and consistency to bring your track to its full potential without distortion or compromise.

---

## 1. Preparing the Mix

---

### Leave Headroom
Ensure your final mix peaks between **-6 dBFS and -3 dBFS** on the <a href="/guides/glossary#master-bus" class="glossary-link" target="_blank" rel="noopener noreferrer">master bus</a>. This gives the mastering engineer room to apply EQ, compression, and limiting without distortion.

**Do not** <a href="/guides/glossary#normalize" class="glossary-link" target="_blank" rel="noopener noreferrer">normalize</a> your mix or use a limiter to push it close to 0 dBFS.

> Tip: If your mix is <a href="/guides/glossary#clipping" class="glossary-link" target="_blank" rel="noopener noreferrer">clipping</a>, lower your track or bus volumes instead of adding a <a href="/guides/glossary#limiter" class="glossary-link" target="_blank" rel="noopener noreferrer">limiter</a>.

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

- No <a href="/guides/glossary#clipping" class="glossary-link" target="_blank" rel="noopener noreferrer">clipping</a> on individual tracks or the <a href="/guides/glossary#master-bus" class="glossary-link" target="_blank" rel="noopener noreferrer">master bus</a>  
- No unwanted clicks, pops, or hum  
- Fades and silence are intentional at the start and end  

If there are intentional noises (like a vinyl crackle or amp hum), mention it in your notes.

---

## 2. Export Settings

---

### File Format
- **File Type:** WAV  
- **<a href="/guides/glossary#bit-depth" class="glossary-link" target="_blank" rel="noopener noreferrer">Bit Depth</a>:** 24-bit (or 32-bit float if your mix session supports it)  
- **<a href="/guides/glossary#sample-rate" class="glossary-link" target="_blank" rel="noopener noreferrer">Sample Rate</a>:** Keep the same as your mix session (e.g., 44.1 or 48 kHz)  
- **Channels:** Stereo interleaved  

Do not <a href="/guides/glossary#dither" class="glossary-link" target="_blank" rel="noopener noreferrer">dither</a>. Your mastering engineer will handle that at the final export stage.

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

- [x] Peaks between -6 and -3 <a href="/guides/glossary#dbfs" class="glossary-link" target="_blank" rel="noopener noreferrer">dBFS</a>  
- [x] No <a href="/guides/glossary#limiter" class="glossary-link" target="_blank" rel="noopener noreferrer">limiter</a> or heavy <a href="/guides/glossary#master-bus" class="glossary-link" target="_blank" rel="noopener noreferrer">master-bus</a> processing  
- [x] 24-bit WAV, correct <a href="/guides/glossary#sample-rate" class="glossary-link" target="_blank" rel="noopener noreferrer">sample rate</a>  
- [x] No <a href="/guides/glossary#clipping" class="glossary-link" target="_blank" rel="noopener noreferrer">clipping</a> or unwanted noise  
- [x] Reference mix and notes included  
- [x] File clearly named and labeled`,an=`---
title: "Glossary"
description: "Plain-English explanations of the technical terms used across these guides."
---

_Studio language, explained without the jargon._

> These guides use terms that are second nature in a studio but not necessarily anywhere else. This page explains them in plain English, so you can follow along and prepare with confidence. No audio engineering background required.

---

## 1. File & Audio Basics

---

### Sample Rate
How many times per second audio is measured when it’s converted to digital, given in Hz or kHz. A higher sample rate captures more detail in the upper frequency range. In music, you’ll mostly see two: 44.1 kHz (the CD and streaming standard) and 48 kHz (common in video, and increasingly in music production too). What matters most is that every file in a session uses the same sample rate. Mixing rates between tracks causes pitch and timing errors.

### Bit Depth
How much detail each individual sample captures, which sets the dynamic range: the gap between the quietest and loudest sound a file can hold without noise or distortion. 16-bit is the delivery standard for CDs and streaming. 24-bit is the standard for recording and mixing, since it leaves far more room to work with before a final file gets printed. If you’re asked to export at “24-bit, 44.1kHz,” that’s simply the technical format your files should be saved in.

### WAV vs. MP3
WAV is an uncompressed format. It stores the full recorded audio without throwing anything away, which is why it’s the standard for tracking, mixing, and mastering. MP3 is a compressed (“lossy”) format that discards audio data to shrink the file size, which measurably reduces quality. Record, track, and exchange audio as WAV (or AIFF) files. MP3 is fine for a quick reference or a listen on your phone, not for anything that still needs work done to it.

### dBFS
Short for decibels relative to full scale, this is how loudness is measured inside a digital system. 0 dBFS is the absolute ceiling; nothing can go louder without clipping. Because of that ceiling, dBFS values are always zero or negative. A peak of **-6 dBFS** is quieter, and safer, than a peak of **-1 dBFS**.

### Clipping
What happens when a signal tries to exceed 0 dBFS. Digital clipping is a hard, ugly distortion that can’t be undone afterward, unlike most other mix problems. Leaving healthy headroom is the simplest way to avoid it.

### Headroom
The space left between your loudest peak and 0 dBFS. Leaving headroom means there’s room for someone downstream, a mixing or mastering engineer, to add processing like EQ or compression without anything clipping.

### Stems
Individual instrument or vocal tracks exported separately, like \`Kick.wav\`, \`LeadVox_Main.wav\`, and \`Guitar_RhythmL.wav\`, rather than one single stereo file. Sending stems instead of a single bounced-down mix is what actually gives a mixing engineer room to shape your song.

---

## 2. Recording & Tracking

---

### DI
Short for Direct Input, sometimes called a DI signal or DI track. A clean, unprocessed recording of an instrument, usually a guitar or bass, taken straight from the instrument rather than through a microphone or amp. Recording a DI alongside your main tone means that tone can still be changed or replaced later, since the raw signal was kept.

### Amp Simulator
Often shortened to “amp sim.” Software or hardware that models the sound of a real guitar or bass amplifier and speaker cabinet. When recording direct, without a physical amp, an amp sim is what gives a guitar its character instead of sounding thin and harsh.

### Gain Staging
Setting your recording levels so a signal is strong and clean without ever getting close to clipping. Good gain staging is one of the simplest things that makes a home recording sound noticeably more professional.

### Intonation
Whether a stringed instrument stays in tune with itself as you move up the neck, not just when a string is played open. An instrument can read perfectly in tune open and still sound out of tune once chords are played higher up, if the intonation is off. That’s a setup issue, adjusted at the bridge, not something a tuner alone can fix.

### String Gauge
The thickness of a string, usually given in thousandths of an inch (for example .010 or .056). Heavier gauges hold pitch better under hard playing and in lower tunings, at the cost of being less comfortable to play.

### Comping
Short for “compiling.” Taking the best sections, phrases, or notes from several takes of a performance and combining them into one final, seamless take.

### Punch-In
Recording over just a small section of an existing take, a bar, a phrase, a single note, rather than redoing the whole performance from the start.

### Crossfade
A short, smooth transition between two audio regions, for example at a punch-in or an edit point, so the join is inaudible instead of an abrupt cut.

### Phase
How two or more audio signals of the same sound line up in time. When multiple mics or signals of the same source aren’t aligned, certain frequencies can cancel each other out, called phase cancellation, leaving the combined sound thinner than either signal alone.

### Condenser Mic
A microphone type known for being detailed and sensitive, commonly used for vocals and acoustic instruments in a treated room. It needs power (phantom power) to operate, and tends to pick up more of the room than a dynamic mic, which is worth knowing when deciding where and how to record.

### Dynamic Mic
A rugged, comparatively insensitive microphone type that needs no external power to operate. It can take a loud source right up close without distorting, and it naturally picks up less of the surrounding room than a condenser mic does, which makes it a forgiving, reliable choice for vocals and other close-mic'd sources, especially in a space that isn't fully treated.

### Sibilance
Harsh, hissy “s” and “sh” sounds in a vocal recording, caused by how those sounds interact with a microphone. Mic choice and positioning can reduce it at the source; it can also be tamed afterward with a dedicated processor called a de-esser.

---

## 3. Mixing & Mastering

---

### Rough Mix
An unpolished, rough balance of a song, not the final version, used to give an engineer a sense of your intended direction: levels, panning, energy.

### Reference Track
A finished song, usually by another artist, used as a sonic benchmark for tone, loudness, or vibe when describing what you’re going for.

### Master Bus
The final stage every track in a mix passes through on its way out, sometimes called the mix bus. Anything applied here, EQ, compression, limiting, affects the entire song at once, not just one instrument.

### Limiter
A type of compressor that firmly caps a signal at a set ceiling, most commonly used to raise a track’s overall loudness. It’s a heavy-handed tool, so using one before sending a mix off, rather than leaving that decision to mastering, can lock in choices that are difficult to undo later.

### Normalize
Automatically raising or lowering a file’s level so its loudest peak hits a specific target. It’s a blunt tool: normalizing a mix close to 0 dBFS before sending it off removes the headroom a mastering engineer needs, so it’s best left alone.

### Dither
A tiny, intentional amount of noise added when reducing bit depth, say from 24-bit down to 16-bit for a final release, to smooth out rounding errors that would otherwise sound harsh. This is normally the mastering engineer’s job at the very last step, which is why you shouldn’t dither a file yourself before sending it off.

---

## 4. Session & Workflow

---

### BPM
Beats per minute: the tempo of a song. Knowing your BPM, and whether it changes throughout the song, helps an engineer set up a click track or align a tempo map to your recording.

### Click Track
A steady metronome pulse played through headphones while recording, used to keep a performance locked to a consistent tempo, or grid.

### Tempo Map
A file, or MIDI track, that records every tempo change throughout a song. Used whenever a track speeds up, slows down, or shifts time signature rather than staying at one fixed BPM.

### MIDI
Short for Musical Instrument Digital Interface. Rather than being audio itself, a MIDI file stores performance information: which notes were played, when, and how hard. That’s why a MIDI part can still be edited or have its sound changed after the fact, unlike a recorded audio take.

### DAW
Short for Digital Audio Workstation, the software used to record, edit, and mix music. Logic Pro, Ableton Live, Pro Tools, and FL Studio are all examples.
`,sn=t=>t.replace(/^"(.*)"$/,"$1").replace(/^'(.*)'$/,"$1"),P=t=>{var h,l;const n=t.split(/\r?\n/);if(((h=n[0])==null?void 0:h.trim())!=="---")return{content:t.trimStart()};let a=-1;for(let m=1;m<n.length;m+=1)if(((l=n[m])==null?void 0:l.trim())==="---"){a=m;break}if(a===-1)return{content:t.trimStart()};const c=n.slice(1,a),o=n.slice(a+1).join(`
`).trimStart(),s={};for(const m of c){const i=m.trim();if(!i||i.startsWith("#"))continue;const p=i.indexOf(":");if(p===-1)continue;const u=i.slice(0,p).trim(),y=sn(i.slice(p+1).trim());u&&(s[u]=y)}return{title:s.title,description:s.description,ogImage:s.ogImage,publishedAt:s.publishedAt,updatedAt:s.updatedAt,content:o}},R=(t,n)=>{var a,c,o,s,h;return{title:((a=t.title)==null?void 0:a.trim())||n.title,description:((c=t.description)==null?void 0:c.trim())||n.description,ogImage:((o=t.ogImage)==null?void 0:o.trim())||n.ogImage,publishedAt:(s=t.publishedAt)==null?void 0:s.trim(),updatedAt:(h=t.updatedAt||t.publishedAt)==null?void 0:h.trim(),content:t.content}},L=t=>`/og/guides/${t}.png`,I=R(P(Ze),{title:"Guide to Home Recording",description:"Everything you need to know to get professional results from your home studio setup.",ogImage:L("home-recording")}),T=R(P(en),{title:"Studio Session Preparation",description:"Complete checklist and guidelines for preparing for professional recording sessions.",ogImage:L("studio-session-preparation")}),S=R(P(nn),{title:"Preparing Files for Mixing",description:"Essential guidelines for organizing and preparing your multitrack files for professional mixing.",ogImage:L("preparing-files-for-mixing")}),_=R(P(tn),{title:"Preparing Files for Mastering",description:"How to prepare your final mix for the mastering process to achieve the best possible results.",ogImage:L("preparing-files-for-mastering")}),E=R(P(an),{title:"Glossary",description:"Plain-English explanations of the technical terms used across these guides.",ogImage:L("glossary")}),X=[{slug:"home-recording",title:I.title,description:I.description,category:"Recording",downloadUrl:"/guides/home-recording-guide.pdf",icon:ve,content:I.content,ogImage:I.ogImage,publishedAt:I.publishedAt,updatedAt:I.updatedAt},{slug:"studio-session-preparation",title:T.title,description:T.description,category:"Recording",downloadUrl:"/guides/studio-session-preparation.pdf",icon:ce,content:T.content,ogImage:T.ogImage,publishedAt:T.publishedAt,updatedAt:T.updatedAt},{slug:"preparing-files-for-mixing",title:S.title,description:S.description,category:"Mixing",downloadUrl:"/guides/preparing-files-for-mixing.pdf",icon:he,content:S.content,ogImage:S.ogImage,publishedAt:S.publishedAt,updatedAt:S.updatedAt},{slug:"preparing-files-for-mastering",title:_.title,description:_.description,category:"Mastering",downloadUrl:"/guides/preparing-files-for-mastering.pdf",icon:ue,content:_.content,ogImage:_.ogImage,publishedAt:_.publishedAt,updatedAt:_.updatedAt},{slug:"glossary",title:E.title,description:E.description,category:"Reference",downloadUrl:"/guides/glossary.pdf",icon:je,content:E.content,ogImage:E.ogImage,publishedAt:E.publishedAt,updatedAt:E.updatedAt}],rn=t=>X.find(n=>n.slug===t),on=()=>{const t=de();return e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsx(Q,{...Y.guides}),e.jsx(U,{}),e.jsx("section",{className:"pt-24 pb-8",children:e.jsx("div",{className:"container-width section-padding",children:e.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[e.jsx("div",{className:"inline-block border border-border/50 px-4 py-1.5 rounded-full mb-6 text-sm font-mono tracking-wider text-muted-foreground uppercase bg-[#0A0A0E]",children:"Knowledge Hub"}),e.jsxs("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-foreground",children:["Guides & ",e.jsx("span",{className:"font-drama italic text-primary font-normal",children:"Downloads."})]}),e.jsx("p",{className:"text-lg text-muted-foreground mb-6",children:"Essential resources to help you prepare for recording sessions, mixing, and mastering. These guides are here to help us get the best out of our collaboration."})]})})}),e.jsx("section",{className:"pt-6 pb-16",children:e.jsx("div",{className:"container-width section-padding",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:X.map(n=>{const a=n.icon;return e.jsx("div",{className:"bg-[#0A0A0E] rounded-[2rem] p-6 lg:p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-xl group",children:e.jsxs("div",{className:"flex items-start space-x-4",children:[e.jsx("div",{className:"p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0",children:e.jsx(a,{className:"w-6 h-6"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx(H,{to:`/guides/${n.slug}`,className:"text-xl font-semibold text-foreground hover:text-primary transition-colors",children:n.title}),e.jsx("span",{className:"text-xs px-2 py-1 bg-secondary rounded-full text-secondary-foreground",children:n.category})]}),e.jsx("p",{className:"text-muted-foreground mb-4 leading-relaxed",children:n.description}),e.jsxs("div",{className:"flex flex-wrap items-center gap-x-6 gap-y-2",children:[e.jsxs(H,{to:`/guides/${n.slug}`,className:"inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors",children:[e.jsx("span",{children:"Read more"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-4 w-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"})})]}),e.jsxs("a",{href:n.downloadUrl,download:!0,className:"inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary",children:[e.jsx(ge,{className:"h-4 w-4","aria-hidden":"true"}),e.jsx("span",{children:"PDF"})]})]})]})]})},n.slug)})})})}),e.jsx("section",{className:"py-24 bg-[#0D0D12] border-t border-border/20 relative z-10",children:e.jsx("div",{className:"container-width section-padding",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8 text-center",children:"Why These Guides Matter"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4",children:e.jsx(ce,{className:"w-6 h-6 text-primary"})}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Save Time"}),e.jsx("p",{className:"text-muted-foreground",children:"Sorting out gear, tuning, and file formats beforehand means fewer surprises eating into session time."})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4",children:e.jsx(he,{className:"w-6 h-6 text-primary"})}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Better Results"}),e.jsx("p",{className:"text-muted-foreground",children:"Following these guidelines helps us get the best possible quality out of your music."})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4",children:e.jsx(ue,{className:"w-6 h-6 text-primary"})}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Clear Expectations"}),e.jsx("p",{className:"text-muted-foreground",children:"Knowing what to prepare means we can dive straight into the work when you arrive."})]})]})]})})}),e.jsx("section",{className:"py-24 bg-background",children:e.jsx("div",{className:"container-width section-padding",children:e.jsxs("div",{className:"text-center max-w-2xl mx-auto",children:[e.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-6 text-foreground",children:["Ready to Start Your ",e.jsx("span",{className:"font-drama italic text-primary font-normal",children:"Project?"})]}),e.jsx("p",{className:"text-lg text-muted-foreground mb-10 leading-relaxed",children:"Have questions about any of these guides or ready to book a session? Let's discuss your project and how we can bring your vision to life."}),e.jsx("button",{onClick:n=>{n.preventDefault(),t("/"),setTimeout(()=>{const a=document.getElementById("contact");a&&a.scrollIntoView({behavior:"smooth",block:"start"})},150)},className:"group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-[2rem] bg-primary text-primary-foreground font-medium magnetic-button shadow-xl shadow-primary/20",children:e.jsx("span",{className:"relative z-10",children:"Get In Touch"})})]})})}),e.jsx(J,{})]})},q=t=>({node:n,children:a,...c})=>{const{id:o,className:s,...h}=c,l=typeof o=="string"?o:"",m=t==="h2"?"mt-8 text-2xl font-semibold text-foreground":t==="h3"?"mt-6 text-xl font-semibold text-foreground":"mt-4 text-lg font-medium text-foreground";return e.jsxs(t,{...h,id:l,className:`group relative scroll-mt-28 ${m} ${s??""}`.trim(),children:[l&&e.jsx("a",{href:`#${l}`,className:"anchor-link absolute -left-8 hidden h-5 w-5 items-center justify-center rounded text-muted-foreground opacity-0 transition hover:text-primary group-hover:flex group-hover:opacity-100 focus-visible:flex focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary","aria-label":`Copy link to ${l.replace(/-/g," ")}`,children:e.jsx(Se,{className:"h-4 w-4"})}),e.jsx("span",{children:a})]})},ln=1400,dn=t=>{const n=new De;return n.reset(),t.split(/\r?\n/).map(a=>{const c=a.match(/^(#{2,4})\s+(.*)$/);if(!c)return null;const o=c[1].length,h=c[2].trim().replace(/#+$/,"").trim(),l=h.replace(/^[\*`_]+/,"").replace(/[\*`_]+$/,"");return{id:n.slug(h),title:l,depth:o}}).filter(a=>a!==null)},cn=t=>{if(!t)return;if(/^https?:\/\//i.test(t))return t;const n=t.startsWith("/")?t:`/${t}`;return`${me}${n}`},hn=()=>{const{slug:t}=Ae(),n=t?rn(t):void 0,[a,c]=d.useState(!1),[o,s]=d.useState(""),[h,l]=d.useState(!1),m=d.useRef(null),i=()=>{var r;((r=m.current)==null?void 0:r.timeoutId)!==void 0&&typeof window<"u"&&window.clearTimeout(m.current.timeoutId),m.current=null},p=r=>{if(typeof window>"u"){s(r);return}i();const g=window.setTimeout(()=>{m.current=null},800);m.current={id:r,timeoutId:g},s(r)},u=d.useMemo(()=>n?dn(n.content):[],[n]);d.useEffect(()=>{if(typeof window>"u")return;const r=window.matchMedia(`(min-width: ${ln}px)`),g=f=>{const b=f?f.matches:r.matches;l(b),c(b)};return g(),r.addEventListener("change",g),()=>r.removeEventListener("change",g)},[]),d.useEffect(()=>{u.length!==0&&s(r=>{var g;return r&&u.some(f=>f.id===r)?r:((g=u[0])==null?void 0:g.id)??""})},[u]),d.useEffect(()=>{if(typeof window>"u"||u.length===0)return;const r=new Map,g=120,f=()=>{var ae,se;if(m.current){s(m.current.id);return}const x=window.innerHeight+window.scrollY,v=document.documentElement.scrollHeight,j=(ae=u[u.length-1])==null?void 0:ae.id;if(x>=v-1&&j){s(j);return}if(r.size>0){const C=[...r.entries()].map(([w,A])=>({id:w,top:A.getBoundingClientRect().top-g})),N=C.filter(w=>w.top<=0).sort((w,A)=>w.top-A.top),G=C.filter(w=>w.top>0).sort((w,A)=>w.top-A.top),F=N.length>0?N[N.length-1]:G[0];if(F){s(F.id);return}}const fe=window.scrollY+g;let ne=((se=u[0])==null?void 0:se.id)??"",te=Number.POSITIVE_INFINITY;for(const C of u){const N=document.getElementById(C.id);if(!N)continue;const G=window.getComputedStyle(N),F=parseFloat(G.scrollMarginTop||"0"),w=N.offsetTop-F,A=Math.abs(w-fe);A<te&&(te=A,ne=C.id)}s(ne)},b=new IntersectionObserver(x=>{x.forEach(v=>{const j=v.target.getAttribute("id");j&&(v.isIntersecting?r.set(j,v.target):r.delete(j))}),f()},{root:null,rootMargin:"-120px 0px -50% 0px",threshold:[0,.25,.5,.75,1]});for(const x of u){const v=document.getElementById(x.id);v&&b.observe(v)}return f(),window.addEventListener("scroll",f,{passive:!0}),()=>{b.disconnect(),window.removeEventListener("scroll",f),i()}},[u]);const y=d.useMemo(()=>({h2:q("h2"),h3:q("h3"),h4:q("h4")}),[]);if(!n)return e.jsx(Ne,{to:"/guides",replace:!0});const M=n?qe(n):Y.guides,W=n.icon,Z=d.useMemo(()=>{if(!n)return null;const r=M.canonicalUrl,g=n.publishedAt,f=n.updatedAt??n.publishedAt,b=cn(n.ogImage),x={"@context":"https://schema.org","@type":"Article",headline:n.title,description:n.description,author:{"@type":"Person",name:"Benjamin Mlynek"},mainEntityOfPage:{"@type":"WebPage","@id":r},url:r};return g&&(x.datePublished=g),f&&(x.dateModified=f),b&&(x.image=[b]),x},[n,M]),pe=r=>{if(typeof document>"u"){p(r);return}const g=()=>{const f=document.getElementById(r);f&&f.scrollIntoView({behavior:"smooth",block:"start"})};!h&&a?(c(!1),requestAnimationFrame(()=>requestAnimationFrame(g))):g(),p(r)},ee=(r,g)=>{r.preventDefault(),pe(g)};return e.jsxs("div",{className:"min-h-screen bg-background flex flex-col",children:[e.jsx(Q,{...M}),Z&&e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(Z)}}),e.jsx(U,{}),e.jsx("main",{className:"flex-1 pt-32 pb-24",children:e.jsx("div",{className:"container-width section-padding",children:e.jsxs("div",{className:"flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative max-w-[1400px] mx-auto",children:[h&&e.jsxs("aside",{className:"sticky top-32 w-80 shrink-0 flex flex-col max-h-[calc(100vh-10rem)] bg-[#0A0A0E] border border-border/50 rounded-[2rem] overflow-hidden shadow-2xl",children:[e.jsx("div",{className:"px-8 pt-8 pb-6 border-b border-border/10",children:e.jsxs(H,{to:"/guides",className:"inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary group",children:[e.jsx(re,{className:"w-4 h-4 transition-transform group-hover:-translate-x-1"}),"Back to guides"]})}),e.jsx("nav",{className:"flex-1 overflow-y-auto px-6 py-6 text-sm text-muted-foreground",children:e.jsx("ul",{className:"space-y-1",children:u.map((r,g)=>{const f=o===r.id,b=r.depth===2,x=b&&g>0,v=r.depth===2?"":r.depth===3?"ml-4":"ml-8";return e.jsx("li",{className:x?"border-t border-border/10 pt-4 mt-4":"",children:e.jsx("a",{href:`#${r.id}`,onClick:j=>ee(j,r.id),className:`relative flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left transition-all ${b?"font-medium text-foreground":"text-foreground/70"} ${v} ${f?"bg-primary/10 text-primary font-medium translate-x-1":"hover:text-primary hover:bg-primary/5 hover:translate-x-1"}`,"aria-current":f?"true":void 0,children:e.jsx("span",{className:"flex-1 leading-snug",children:r.title})})},r.id)})})})]}),e.jsxs("div",{className:"flex-1 w-full max-w-3xl mx-auto lg:mx-0",children:[e.jsxs("div",{className:"flex flex-col gap-6 mb-12 lg:mb-16",children:[e.jsxs("div",{className:"inline-flex flex-wrap items-center gap-3 text-sm text-muted-foreground",children:[e.jsx("span",{className:"rounded-full bg-primary/10 px-3 py-1.5 text-primary flex items-center justify-center",children:e.jsx(W,{className:"h-5 w-5"})}),e.jsx("span",{className:"rounded-full bg-[#0A0A0E] border border-border/50 px-4 py-1.5 text-xs text-foreground font-mono uppercase tracking-wider",children:n.category}),e.jsxs("a",{href:n.downloadUrl,download:!0,className:"inline-flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-wider px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 transition hover:border-primary/60 hover:bg-primary/10",children:[e.jsx(ge,{className:"h-3.5 w-3.5","aria-hidden":"true"}),e.jsx("span",{children:"Download PDF"})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]",children:e.jsx("span",{className:"font-drama italic text-primary font-normal",children:n.title})}),e.jsx("p",{className:"text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl",children:n.description})]})]}),u.length>0&&!h&&e.jsxs("div",{className:"mb-12",children:[e.jsxs("button",{onClick:()=>c(r=>!r),className:"w-full inline-flex items-center justify-between rounded-2xl border border-border/50 bg-[#0A0A0E] px-6 py-4 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/50 hover:text-primary","aria-expanded":a,children:[e.jsxs("span",{className:"inline-flex items-center gap-3",children:[e.jsx(Ie,{className:"w-5 h-5 text-primary"}),e.jsx("span",{className:"font-mono uppercase tracking-wider",children:"Table of contents"})]}),e.jsx(re,{className:`w-4 h-4 transition-transform duration-300 ${a?"rotate-90":"-rotate-90"}`})]}),a&&e.jsx("nav",{className:"mt-4 rounded-2xl border border-border/50 bg-[#0A0A0E] p-6 text-sm text-muted-foreground shadow-xl animate-in fade-in slide-in-from-top-4 duration-300",children:e.jsx("ul",{className:"space-y-2",children:u.map(r=>{const g=o===r.id,f=r.depth===2?"":r.depth===3?"pl-4":"pl-8";return e.jsx("li",{children:e.jsx("a",{href:`#${r.id}`,onClick:b=>ee(b,r.id),className:`relative flex w-full items-center gap-2 rounded-xl px-4 py-3 text-left transition-all ${g?"bg-primary/10 text-primary font-medium":"text-foreground/80 hover:text-primary hover:bg-primary/5"} ${f}`,"aria-current":g?"true":void 0,children:e.jsx("span",{className:"flex-1 leading-snug",children:r.title})})},r.id)})})})]}),e.jsxs("div",{className:"space-y-16",children:[e.jsx("div",{className:"guide-prose",children:e.jsx(Te,{remarkPlugins:[Re,Le],rehypePlugins:[Pe],components:y,children:n.content})}),e.jsx("div",{className:"bg-[#0A0A0E] border border-border/50 rounded-[2rem] p-8 lg:p-10 shadow-2xl relative overflow-hidden group",children:e.jsxs("div",{className:"relative z-10",children:[e.jsxs("h3",{className:"text-3xl font-bold tracking-tight mb-4",children:["Need more ",e.jsx("span",{className:"font-drama italic text-primary font-normal",children:"resources?"})]}),e.jsx("p",{className:"text-lg text-muted-foreground mb-8 leading-relaxed",children:"Explore the other guides below or reach out if you need help applying these steps to your specific project."}),e.jsx("div",{className:"flex flex-wrap gap-3",children:X.filter(r=>r.slug!==n.slug).map(r=>e.jsx(H,{to:`/guides/${r.slug}`,className:"px-5 py-2.5 text-sm font-medium rounded-full border border-border/50 hover:bg-primary/10 hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 shadow-sm bg-background/50 backdrop-blur-sm",children:r.title},r.slug))})]})})]})]})]})})}),e.jsx(J,{})]})},un=()=>{const t=V();return d.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",t.pathname)},[t.pathname]),e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404"}),e.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Oops! Page not found"}),e.jsx("a",{href:"/",className:"text-blue-500 hover:text-blue-700 underline",children:"Return to Home"})]})})},gn=()=>e.jsxs(_e,{children:[e.jsx(z,{path:"/",element:e.jsx(Xe,{})}),e.jsx(z,{path:"/guides",element:e.jsx(on,{})}),e.jsx(z,{path:"/guides/:slug",element:e.jsx(hn,{})}),e.jsx(z,{path:"*",element:e.jsx(un,{})})]}),mn=()=>{const{pathname:t,hash:n}=V();return d.useEffect(()=>{if(!n){window.scrollTo({top:0,left:0,behavior:"instant"});return}let a=!1;const c=n.slice(1),o=()=>{var l;a||(l=document.getElementById(c))==null||l.scrollIntoView({block:"start"})};o();const s=typeof document<"u"&&"fonts"in document?document.fonts.ready:Promise.resolve(),h=new Promise(l=>{window.setTimeout(l,500)});return Promise.race([s,h]).then(()=>{requestAnimationFrame(()=>requestAnimationFrame(o))}),()=>{a=!0}},[t,n]),null},pn=()=>e.jsx(ze,{children:e.jsxs(Ee,{children:[e.jsxs("svg",{className:"noise-overlay text-[0px]",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("filter",{id:"noiseFilter",children:e.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.65",numOctaves:"3",stitchTiles:"stitch"})}),e.jsx("rect",{width:"100%",height:"100%",filter:"url(#noiseFilter)"})]}),e.jsx(mn,{}),e.jsx(gn,{})]})});Me.createRoot(document.getElementById("root")).render(e.jsx(pn,{}));export{Ge as s};

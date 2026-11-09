var e=`icon`,t=`icon-svg`,n=[{name:`index.tsx`,lang:`tsx`,code:`import {component$} from '@qwik.dev/core';
import {
  MatIcon,
  trustIconHtml,
  useMatIconRegistryProvider,
} from '@angular-community/qwik-material/icon';

// Same literal string as upstream's icon-svg-example.ts (THUMBUP_ICON) — kept byte-identical so
// the rendered <svg> markup matches exactly, not just the icon's appearance.
const THUMBUP_ICON =
  \`
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.\` +
  \`44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5\` +
  \`1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
\`;

/**
 * Port of src/components-examples/material/icon/icon-svg
 * (icon-svg-example.html/.ts) — material.angular.dev's "SVG icons" example.
 *
 * Upstream registers the literal via the injected \`MatIconRegistry\` inside
 * the component's constructor:
 *   \`iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON))\`
 * This port's equivalent is \`useMatIconRegistryProvider({icons: [...]})\`,
 * with \`trustIconHtml()\` as the explicit-trust opt-in that replaces
 * \`DomSanitizer.bypassSecurityTrustHtml\` (see \`qwik-material/icon/SYNC.md\`'s "SVG icon
 * registry" section — no DomSanitizer, no Angular DI, same "you must explicitly mark this
 * trusted" contract).
 */
export default component$(() => {
  useMatIconRegistryProvider({icons: [{name: 'thumbs-up', literal: trustIconHtml(THUMBUP_ICON)}]});
  return (
    <icon-svg-example>
      <MatIcon svgIcon="thumbs-up" aria-hidden={false} aria-label="Example thumbs up SVG icon" />
    </icon-svg-example>
  );
});
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {component$} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@qwik.dev/core'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  MatIcon,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  trustIconHtml,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  useMatIconRegistryProvider,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/icon'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// Same literal string as upstream's icon-svg-example.ts (THUMBUP_ICON) — kept byte-identical so</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// the rendered &#x3C;svg> markup matches exactly, not just the icon's appearance.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> THUMBUP_ICON</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">  \`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">  &#x3C;svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"></span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">    &#x3C;path d="M0 0h24v24H0z" fill="none"/></span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">    &#x3C;path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.\`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">  \`44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5\`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">  \`1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/></span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">  &#x3C;/svg></span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * Port of src/components-examples/material/icon/icon-svg</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * (icon-svg-example.html/.ts) — material.angular.dev's "SVG icons" example.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * Upstream registers the literal via the injected \`MatIconRegistry\` inside</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * the component's constructor:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> *   \`iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON))\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * This port's equivalent is \`useMatIconRegistryProvider({icons: [...]})\`,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * with \`trustIconHtml()\` as the explicit-trust opt-in that replaces</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * \`DomSanitizer.bypassSecurityTrustHtml\` (see \`qwik-material/icon/SYNC.md\`'s "SVG icon</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * registry" section — no DomSanitizer, no Angular DI, same "you must explicitly mark this</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * trusted" contract).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> component$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">  useMatIconRegistryProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">({icons: [{name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'thumbs-up'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, literal: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">trustIconHtml</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">THUMBUP_ICON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">)}]});</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">icon-svg-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatIcon</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> svgIcon</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"thumbs-up"</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> aria-hidden</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">} </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">aria-label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"Example thumbs up SVG icon"</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> /></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">icon-svg-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"></span></code></pre>`}],r={pkg:e,route:t,files:n};export{r as default,n as files,e as pkg,t as route};
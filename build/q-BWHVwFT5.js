var e=`sidenav`,t=`example`,n=[{name:`index.tsx`,lang:`tsx`,code:`import {component$} from '@qwik.dev/core';
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
} from '@angular-community/qwik-material/sidenav';
import './sidenav-overview-example.css';

// Qwik port of material.angular.dev's \`sidenav-overview\` docs example — see
// src/components-examples/material/sidenav/sidenav-overview/sidenav-overview-example.{ts,html,css}.
// Rendered unmodified by the Angular dev-app at /qwik-parity/mat-sidenav/example
// (src/dev-app/qwik-parity/examples.ts). Host tag mirrors the example's own component selector
// (\`sidenav-overview-example\`).
//
// Upstream's own \`shouldRun\` field gates the whole example behind
// \`/(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host)\` — true only when the
// docs site's embedded StackBlitz/WebContainer preview serves it, so the example falls back to
// \`<div>Please open on Stackblitz to see result</div>\` everywhere else, INCLUDING this dev-app's
// own \`localhost\` host (confirmed live: the Angular side at :4200 renders exactly that fallback
// text, never the actual \`<mat-sidenav-container>\`). Reproduced here with the identical check —
// not hardcoded to the fallback branch — so this port stays correct if ever hosted somewhere the
// regex DOES match, exactly mirroring the upstream component's own logic rather than special-
// casing this harness's host.
function shouldRunOnStackblitz(): boolean {
  if (typeof location === 'undefined') return false;
  return /(^|.)(stackblitz|webcontainer).(io|com)$/.test(location.host);
}

export default component$(() => {
  const shouldRun = shouldRunOnStackblitz();

  return (
    <sidenav-overview-example>
      {shouldRun ? (
        <MatDrawerContainer class="example-container">
          <MatDrawer mode="side" opened>
            Sidenav content
          </MatDrawer>
          <MatDrawerContent>Main content</MatDrawerContent>
        </MatDrawerContainer>
      ) : (
        <div>Please open on Stackblitz to see result</div>
      )}
    </sidenav-overview-example>
  );
});
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {component$} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@qwik.dev/core'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  MatDrawer,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  MatDrawerContainer,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  MatDrawerContent,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/sidenav'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> './sidenav-overview-example.css'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// Qwik port of material.angular.dev's \`sidenav-overview\` docs example — see</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// src/components-examples/material/sidenav/sidenav-overview/sidenav-overview-example.{ts,html,css}.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// Rendered unmodified by the Angular dev-app at /qwik-parity/mat-sidenav/example</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// (src/dev-app/qwik-parity/examples.ts). Host tag mirrors the example's own component selector</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// (\`sidenav-overview-example\`).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">//</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// Upstream's own \`shouldRun\` field gates the whole example behind</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`/(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host)\` — true only when the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// docs site's embedded StackBlitz/WebContainer preview serves it, so the example falls back to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`&#x3C;div>Please open on Stackblitz to see result&#x3C;/div>\` everywhere else, INCLUDING this dev-app's</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// own \`localhost\` host (confirmed live: the Angular side at :4200 renders exactly that fallback</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// text, never the actual \`&#x3C;mat-sidenav-container>\`). Reproduced here with the identical check —</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// not hardcoded to the fallback branch — so this port stays correct if ever hosted somewhere the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// regex DOES match, exactly mirroring the upstream component's own logic rather than special-</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// casing this harness's host.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> shouldRunOnStackblitz</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> location </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> 'undefined'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">^|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF">)(stackblitz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF">webcontainer)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF">(io</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF">com)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(location.host);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> component$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> shouldRun</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> shouldRunOnStackblitz</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">sidenav-overview-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      {shouldRun </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatDrawerContainer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"example-container"</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatDrawer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> mode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"side"</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> opened</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">            Sidenav content</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatDrawer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatDrawerContent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Main content&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatDrawerContent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatDrawerContainer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      ) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Please open on Stackblitz to see result&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      )}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">sidenav-overview-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"></span></code></pre>`},{name:`sidenav-overview-example.css`,lang:`css`,code:`/* Copied from src/components-examples/material/sidenav/sidenav-overview/sidenav-overview-example.css.
   Selector prefixed with this route's own host tag — see table-basic-example.css's comment for
   why a plain Qwik CSS import needs this (Angular's ViewEncapsulation scopes the equivalent rule
   per-component already; a plain import does not). */
sidenav-overview-example .example-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #eee;
}
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">/* Copied from src/components-examples/material/sidenav/sidenav-overview/sidenav-overview-example.css.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">   Selector prefixed with this route's own host tag — see table-basic-example.css's comment for</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">   why a plain Qwik CSS import needs this (Angular's ViewEncapsulation scopes the equivalent rule</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">   per-component already; a plain import does not). */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">sidenav-overview-example</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> .example-container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">absolute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  bottom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  background</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">#eee</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span></code></pre>`}],r={pkg:e,route:t,files:n};export{r as default,n as files,e as pkg,t as route};
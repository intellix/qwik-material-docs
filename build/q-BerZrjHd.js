var e=`sidenav`,t=`sidenav-disable-close`,n=[{name:`index.tsx`,lang:`tsx`,code:`import {component$} from '@qwik.dev/core';

// Qwik port of material.angular.dev's \`sidenav-disable-close\` docs example — see
// src/components-examples/material/sidenav/sidenav-disable-close/sidenav-disable-close-example.{ts,html,css}. Rendered unmodified by
// the Angular dev-app at /qwik-parity/examples/sidenav-disable-close (the generic \`examples/:exampleId\` route).
//
// Upstream gates its ENTIRE template behind
// \`shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host)\` — true
// only inside the docs site's embedded StackBlitz/WebContainer preview, false on every other
// host (material.angular.dev itself, this dev-app's localhost, ...). Confirmed live: the Angular
// side here always renders exactly the fallback \`<div>\`, never the real sidenav markup — see
// \`qwik-material-examples/sidenav/example/index.tsx\`'s header comment for the first port to hit
// this. Reproduced with the identical fallback text; the real (unreachable-here) content isn't
// ported, since neither side ever renders it in this environment.

export default component$(() => (
  <sidenav-disable-close-example>
    <div>Please open on Stackblitz to see result</div>
  </sidenav-disable-close-example>
));
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {component$} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@qwik.dev/core'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// Qwik port of material.angular.dev's \`sidenav-disable-close\` docs example — see</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// src/components-examples/material/sidenav/sidenav-disable-close/sidenav-disable-close-example.{ts,html,css}. Rendered unmodified by</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// the Angular dev-app at /qwik-parity/examples/sidenav-disable-close (the generic \`examples/:exampleId\` route).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">//</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// Upstream gates its ENTIRE template behind</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host)\` — true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// only inside the docs site's embedded StackBlitz/WebContainer preview, false on every other</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// host (material.angular.dev itself, this dev-app's localhost, ...). Confirmed live: the Angular</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// side here always renders exactly the fallback \`&#x3C;div>\`, never the real sidenav markup — see</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`qwik-material-examples/sidenav/example/index.tsx\`'s header comment for the first port to hit</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// this. Reproduced with the identical fallback text; the real (unreachable-here) content isn't</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// ported, since neither side ever renders it in this environment.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> component$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">sidenav-disable-close-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Please open on Stackblitz to see result&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">sidenav-disable-close-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">));</span></span>
<span class="line"></span></code></pre>`}],r={pkg:e,route:t,files:n};export{r as default,n as files,e as pkg,t as route};
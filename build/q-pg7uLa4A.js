var e=`slider`,t=`example`,n=[{name:`index.tsx`,lang:`tsx`,code:`import {component$, useStyles$} from '@qwik.dev/core';
import {MatSlider} from '@angular-community/qwik-material/slider';
import styles from './slider-overview-example.css?inline';

/**
 * Port of material.angular.dev's \`slider-overview\` docs example
 * (src/components-examples/material/slider/slider-overview/). A single-thumb slider with no
 * bound value (defaults to 0) — compared as rendered, no interaction needed.
 */

export default component$(() => {
  useStyles$(styles);

  return (
    <slider-overview-example>
      <MatSlider value={0} />
    </slider-overview-example>
  );
});
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {component$, useStyles$} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@qwik.dev/core'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {MatSlider} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/slider'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> styles </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> './slider-overview-example.css?inline'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * Port of material.angular.dev's \`slider-overview\` docs example</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * (src/components-examples/material/slider/slider-overview/). A single-thumb slider with no</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * bound value (defaults to 0) — compared as rendered, no interaction needed.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> component$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">  useStyles$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(styles);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">slider-overview-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatSlider</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">} /></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">slider-overview-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"></span></code></pre>`},{name:`slider-overview-example.css`,lang:`css`,code:`/*
 * Adapted from src/components-examples/material/slider/slider-overview/
 * slider-overview-example.css (\`mat-slider { width: 300px; }\`, unchanged declaration).
 *
 * Selector widened from a bare \`mat-slider\` type selector to \`mat-slider.mat-mdc-slider\`: Angular
 * ships \`.mat-mdc-slider { width: auto; }\` as one of MatSlider's own (globally-applied,
 * ViewEncapsulation.None) component styles, specificity (0,1,0) — a plain example-scoped
 * \`mat-slider { width: 300px; }\` would lose to it. Angular's own version of this rule wins only
 * because the example component's emulated encapsulation adds a \`[_ngcontent-*]\` attribute
 * selector to it, bumping its specificity to (0,1,1) — one class-level selector above \`.mat-mdc-
 * slider\`'s. Unscoped here, there is no such attribute to rely on, so the class itself is added
 * to reach the same (0,1,1) specificity directly. Confirmed live: without this, the slider
 * measures its native CSS-default (content-driven) width instead of 300px, which changes the
 * minimum-visible-fill \`scaleX(...)\` on the active track — a real, observable parity diff.
 */
slider-overview-example mat-slider.mat-mdc-slider {
  width: 300px;
}
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * Adapted from src/components-examples/material/slider/slider-overview/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * slider-overview-example.css (\`mat-slider { width: 300px; }\`, unchanged declaration).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * Selector widened from a bare \`mat-slider\` type selector to \`mat-slider.mat-mdc-slider\`: Angular</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * ships \`.mat-mdc-slider { width: auto; }\` as one of MatSlider's own (globally-applied,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * ViewEncapsulation.None) component styles, specificity (0,1,0) — a plain example-scoped</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * \`mat-slider { width: 300px; }\` would lose to it. Angular's own version of this rule wins only</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * because the example component's emulated encapsulation adds a \`[_ngcontent-*]\` attribute</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * selector to it, bumping its specificity to (0,1,1) — one class-level selector above \`.mat-mdc-</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * slider\`'s. Unscoped here, there is no such attribute to rely on, so the class itself is added</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * to reach the same (0,1,1) specificity directly. Confirmed live: without this, the slider</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * measures its native CSS-default (content-driven) width instead of 300px, which changes the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * minimum-visible-fill \`scaleX(...)\` on the active track — a real, observable parity diff.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">slider-overview-example</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D"> mat-slider</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">.mat-mdc-slider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">300</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span></code></pre>`}],r={pkg:e,route:t,files:n};export{r as default,n as files,e as pkg,t as route};
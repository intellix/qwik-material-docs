var e=`tooltip`,t=`example`,n=[{name:`index.tsx`,lang:`tsx`,code:`import {component$} from '@qwik.dev/core';
import {MatButton} from '@angular-community/qwik-material/button';
import {useMatTooltip} from '@angular-community/qwik-material/tooltip';

/**
 * Port of material.angular.dev's \`tooltip-overview\` docs example
 * (src/components-examples/material/tooltip/tooltip-overview/). The real template stacks
 * \`matButton="elevated"\` and \`matTooltip="…"\` on one native \`<button>\`. Reproduced here with the
 * "directive hooks" pattern (\`qwik-material/README.md\`'s "Composing directives" section):
 * \`useMatTooltip()\` returns exactly what \`[matTooltip]\` contributes to its host (\`hostProps\` —
 * class, \`aria-describedby\`, the hover/focus/touch handlers), spread directly onto
 * \`<MatButton appearance="elevated">\`. This is the SAME engine \`<MatTooltip as="button">\` uses
 * internally (\`qwik-material/tooltip/use-mat-tooltip.ts\`), just called here the way a real
 * consumer migrating this exact Angular template would.
 *
 * Scope: this route's own interaction (see specs/examples/angular-parity.spec.ts) only HOVERS to
 * show the tooltip — a pure pointer interaction never moves focus, so the composed button never
 * needs its \`useFocusOrigin()\`-driven classes for this scenario (confirmed live: hovering never
 * adds a \`cdk-*-focused\` class to the real Angular trigger either).
 */

export default component$(() => {
  const tip = useMatTooltip({message: 'Info about the action'});

  return (
    <tooltip-overview-example>
      <MatButton
        appearance="elevated"
        {...tip.hostProps}
        ariaLabel="Button that displays a tooltip when focused or hovered over"
      >
        Action
      </MatButton>
    </tooltip-overview-example>
  );
});
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {component$} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@qwik.dev/core'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {MatButton} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/button'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {useMatTooltip} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/tooltip'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * Port of material.angular.dev's \`tooltip-overview\` docs example</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * (src/components-examples/material/tooltip/tooltip-overview/). The real template stacks</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * \`matButton="elevated"\` and \`matTooltip="…"\` on one native \`&#x3C;button>\`. Reproduced here with the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * "directive hooks" pattern (\`qwik-material/README.md\`'s "Composing directives" section):</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * \`useMatTooltip()\` returns exactly what \`[matTooltip]\` contributes to its host (\`hostProps\` —</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * class, \`aria-describedby\`, the hover/focus/touch handlers), spread directly onto</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * \`&#x3C;MatButton appearance="elevated">\`. This is the SAME engine \`&#x3C;MatTooltip as="button">\` uses</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * internally (\`qwik-material/tooltip/use-mat-tooltip.ts\`), just called here the way a real</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * consumer migrating this exact Angular template would.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * Scope: this route's own interaction (see specs/examples/angular-parity.spec.ts) only HOVERS to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * show the tooltip — a pure pointer interaction never moves focus, so the composed button never</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * needs its \`useFocusOrigin()\`-driven classes for this scenario (confirmed live: hovering never</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * adds a \`cdk-*-focused\` class to the real Angular trigger either).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> component$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> tip</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> useMatTooltip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">({message: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Info about the action'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">tooltip-overview-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatButton</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">        appearance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"elevated"</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">tip.hostProps}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">        ariaLabel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"Button that displays a tooltip when focused or hovered over"</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      ></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        Action</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">tooltip-overview-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"></span></code></pre>`}],r={pkg:e,route:t,files:n};export{r as default,n as files,e as pkg,t as route};
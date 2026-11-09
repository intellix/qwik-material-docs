var e=`chips`,t=`example`,n=[{name:`index.tsx`,lang:`tsx`,code:`import {component$, useSignal, useVisibleTask$} from '@qwik.dev/core';
import {MatChipSet} from '@angular-community/qwik-material/chips';

/**
 * Port of material.angular.dev's \`chips-overview\` docs example
 * (src/components-examples/material/chips/chips-overview/). A static, non-interactive
 * \`<mat-chip-set>\` of plain (non-selectable) chips — compared as rendered.
 *
 * The upstream template writes the fourth chip's \`disabled\` input as a bare attribute
 * (\`<mat-chip disabled>\`, not \`[disabled]="true"\`), so — confirmed live at
 * http://localhost:4200/qwik-parity/mat-chips/example — Angular echoes it onto \`<mat-chip>\` as a
 * literal \`disabled=""\` attribute: a plain, unbound template attribute Angular preserves
 * verbatim, same category as the static \`value="x"\` echo \`README.md\` already documents as a
 * known, accepted difference (confirmed against upstream's \`chip.ts\`: \`MatChip\`'s own host
 * bindings for \`disabled\` are CSS-class-only — \`[class.mdc-evolution-chip--disabled]\`/
 * \`[class.mat-mdc-chip-disabled]\`, no \`[attr.disabled]\` — so this is purely the static echo, not
 * a real host binding \`qwik-material/chips\` is missing). \`MatChipSet\`'s \`chips\` array has no slot
 * for an arbitrary extra host attribute, and this one chip never changes, so it's reproduced with
 * a one-time DOM write instead of a prop a future, changing scenario could reuse.
 */

export default component$(() => {
  const rootRef = useSignal<Element>();
  useVisibleTask$(() => {
    rootRef.value?.querySelector('mat-chip.mat-mdc-chip-disabled')?.setAttribute('disabled', '');
  });

  return (
    <chips-overview-example ref={rootRef}>
      <MatChipSet
        aria-label="Fish selection"
        chips={[
          {key: 'one', content: 'One fish'},
          {key: 'two', content: 'Two fish'},
          {key: 'three', content: 'Three fish'},
          {key: 'four', content: 'Four fish', disabled: true},
        ]}
      />
    </chips-overview-example>
  );
});
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {component$, useSignal, useVisibleTask$} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@qwik.dev/core'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {MatChipSet} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/chips'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * Port of material.angular.dev's \`chips-overview\` docs example</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * (src/components-examples/material/chips/chips-overview/). A static, non-interactive</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * \`&#x3C;mat-chip-set>\` of plain (non-selectable) chips — compared as rendered.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * The upstream template writes the fourth chip's \`disabled\` input as a bare attribute</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * (\`&#x3C;mat-chip disabled>\`, not \`[disabled]="true"\`), so — confirmed live at</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * http://localhost:4200/qwik-parity/mat-chips/example — Angular echoes it onto \`&#x3C;mat-chip>\` as a</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * literal \`disabled=""\` attribute: a plain, unbound template attribute Angular preserves</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * verbatim, same category as the static \`value="x"\` echo \`README.md\` already documents as a</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * known, accepted difference (confirmed against upstream's \`chip.ts\`: \`MatChip\`'s own host</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * bindings for \`disabled\` are CSS-class-only — \`[class.mdc-evolution-chip--disabled]\`/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * \`[class.mat-mdc-chip-disabled]\`, no \`[attr.disabled]\` — so this is purely the static echo, not</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * a real host binding \`qwik-material/chips\` is missing). \`MatChipSet\`'s \`chips\` array has no slot</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * for an arbitrary extra host attribute, and this one chip never changes, so it's reproduced with</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * a one-time DOM write instead of a prop a future, changing scenario could reuse.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> component$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> rootRef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> useSignal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">&#x3C;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">Element</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">  useVisibleTask$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    rootRef.value?.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'mat-chip.mat-mdc-chip-disabled'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">)?.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">setAttribute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'disabled'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">''</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">chips-overview-example</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> ref</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{rootRef}></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatChipSet</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">        aria-label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"Fish selection"</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">        chips</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          {key: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'one'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'One fish'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          {key: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'two'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Two fish'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          {key: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'three'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Three fish'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          {key: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'four'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Four fish'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, disabled: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        ]}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      /></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">chips-overview-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"></span></code></pre>`}],r={pkg:e,route:t,files:n};export{r as default,n as files,e as pkg,t as route};
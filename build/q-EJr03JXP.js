var e=`tabs`,t=`tab-group-lazy-loaded`,n=[{name:`index.tsx`,lang:`tsx`,code:`import {component$, useSignal, useVisibleTask$} from '@qwik.dev/core';
import {MatTabGroup} from '@angular-community/qwik-material/tabs';

// Qwik port of material.angular.dev's \`tab-group-lazy-loaded\` docs example — see
// src/components-examples/material/tabs/tab-group-lazy-loaded/tab-group-lazy-loaded-example.
// {ts,html}. Rendered unmodified by the Angular dev-app at
// /qwik-parity/examples/tab-group-lazy-loaded.
//
// Every \`MatTabDef.content\` in this port is ALREADY lazy (only rendered once a tab first
// centers -- see mat-tab-group.tsx's own doc comment on \`content\`), unlike upstream where lazy
// loading via \`<ng-template matTabContent>\` is opt-in (plain content is eager by default). So
// there's no separate "lazy" variant to demonstrate structurally -- the observable behavior
// (a load timestamp stamped once per tab) is still faithfully reproduced.
//
// The timestamp is stamped in a \`useVisibleTask$\` (client-side only), NOT a \`useSignal\`
// initializer -- confirmed live: a \`useSignal(() => new Date())\` initializer runs during SSR
// (real server wall-clock time), while upstream's Angular dev-app is pure CSR (\`new Date()\` runs
// in the browser, after the parity harness's \`page.clock.setFixedTime()\` has already frozen it).
// Computing it server-side baked in the wrong (real, unfrozen) timestamp, failing the frozen-clock
// comparison every time. Stamping it client-side instead matches Angular's own timing exactly.
//
// \`{{ getTimeLoaded(1) | date:'medium' }}\` -> \`Intl.DateTimeFormat('en-US', {dateStyle:'medium',
// timeStyle:'medium'})\`, confirmed live to match Angular's \`DatePipe\` 'medium' format exactly for
// this locale.
const formatter = new Intl.DateTimeFormat('en-US', {dateStyle: 'medium', timeStyle: 'medium'});

export default component$(() => {
  const loadTimes = useSignal<Date[]>([]);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    loadTimes.value = [new Date(), new Date(), new Date()];
  });

  const label = (n: number, i: number) =>
    loadTimes.value[i] ? \`Content \${n} - Loaded: \${formatter.format(loadTimes.value[i])}\` : \`Content \${n} - Loaded: \`;

  return (
    <tab-group-lazy-loaded-example>
      <MatTabGroup
        tabs={[
          {label: 'First', content: label(1, 0)},
          {label: 'Second', content: label(2, 1)},
          {label: 'Third', content: label(3, 2)},
        ]}
      />
    </tab-group-lazy-loaded-example>
  );
});
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {component$, useSignal, useVisibleTask$} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@qwik.dev/core'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {MatTabGroup} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/tabs'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// Qwik port of material.angular.dev's \`tab-group-lazy-loaded\` docs example — see</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// src/components-examples/material/tabs/tab-group-lazy-loaded/tab-group-lazy-loaded-example.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// {ts,html}. Rendered unmodified by the Angular dev-app at</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// /qwik-parity/examples/tab-group-lazy-loaded.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">//</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// Every \`MatTabDef.content\` in this port is ALREADY lazy (only rendered once a tab first</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// centers -- see mat-tab-group.tsx's own doc comment on \`content\`), unlike upstream where lazy</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// loading via \`&#x3C;ng-template matTabContent>\` is opt-in (plain content is eager by default). So</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// there's no separate "lazy" variant to demonstrate structurally -- the observable behavior</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// (a load timestamp stamped once per tab) is still faithfully reproduced.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">//</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// The timestamp is stamped in a \`useVisibleTask$\` (client-side only), NOT a \`useSignal\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// initializer -- confirmed live: a \`useSignal(() => new Date())\` initializer runs during SSR</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// (real server wall-clock time), while upstream's Angular dev-app is pure CSR (\`new Date()\` runs</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// in the browser, after the parity harness's \`page.clock.setFixedTime()\` has already frozen it).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// Computing it server-side baked in the wrong (real, unfrozen) timestamp, failing the frozen-clock</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// comparison every time. Stamping it client-side instead matches Angular's own timing exactly.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">//</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`{{ getTimeLoaded(1) | date:'medium' }}\` -> \`Intl.DateTimeFormat('en-US', {dateStyle:'medium',</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// timeStyle:'medium'})\`, confirmed live to match Angular's \`DatePipe\` 'medium' format exactly for</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// this locale.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> formatter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> Intl.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">DateTimeFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'en-US'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, {dateStyle: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'medium'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, timeStyle: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'medium'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> component$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> loadTimes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> useSignal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">&#x3C;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">[]>([]);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">  // eslint-disable-next-line qwik/no-use-visible-task</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">  useVisibleTask$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    loadTimes.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(), </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(), </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">()];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    loadTimes.value[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> \`Content \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">} - Loaded: \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">formatter</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">format</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">loadTimes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">value</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">])</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">}\`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> \`Content \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">} - Loaded: \`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">tab-group-lazy-loaded-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatTabGroup</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">        tabs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          {label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'First'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, content: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">)},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          {label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Second'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, content: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">)},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          {label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Third'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, content: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">)},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        ]}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      /></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">tab-group-lazy-loaded-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"></span></code></pre>`}],r={pkg:e,route:t,files:n};export{r as default,n as files,e as pkg,t as route};
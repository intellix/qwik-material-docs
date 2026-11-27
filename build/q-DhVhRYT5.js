var e=`menu`,t=`menu-icons`,n=[{name:`index.tsx`,lang:`tsx`,code:`import {$, component$} from '@qwik.dev/core';
import {MatIconButton} from '@angular-community/qwik-material/button';
import {MatIcon, useMatIconProvider} from '@angular-community/qwik-material/icon';
import {
  MatMenu,
  MatMenuItem,
  createMatMenu,
  useMatMenuTrigger,
} from '@angular-community/qwik-material/menu';

// Qwik port of material.angular.dev's \`menu-icons\` docs example — see
// src/components-examples/material/menu/menu-icons/menu-icons-example.{ts,html}. Rendered
// unmodified by the Angular dev-app at /qwik-parity/examples/menu-icons (the generic
// \`examples/:exampleId\` route). Upstream's trigger stacks \`matIconButton\` AND
// \`[matMenuTriggerFor]\` on one \`<button>\` — reproduced with the directive-hooks pattern
// (\`useMatMenuTrigger()\`'s \`hostProps\` spread onto \`<MatIconButton>\`), same as the headline
// \`menu-overview\` example (menu/example/index.tsx). Each item's leading \`<mat-icon>\` is passed
// via \`MatMenuItem\`'s \`icon\` prop (content projected BEFORE the text span), not as a regular
// child — a plain child would land inside the item's own default-content wrapper instead of
// directly on the button, confirmed live against this exact scenario.
//
// Icon font-set: matches the Angular dev-app's own default (\`material-symbols-outlined\`,
// confirmed live — same precedent as \`qwik-material-examples/tree/example/index.tsx\`), via
// \`useMatIconProvider()\`. CONFIRMED LIVE this must be called SEPARATELY inside the panel's own
// wrapper component (\`MenuIconsPanelContent\`, below) — a hook called in the trigger/placeholder
// component's own render does NOT reach the menu's overlay-portaled content (the panel renders
// into a disconnected root, not a context-propagating descendant of this component's own JSX).

const MenuIconsPanelContent = component$(() => {
  useMatIconProvider({fontSet: 'material-symbols-outlined'});
  return (
    <>
      <MatMenuItem icon={<MatIcon>dialpad</MatIcon>}>
        <span>Redial</span>
      </MatMenuItem>
      <MatMenuItem disabled icon={<MatIcon>voicemail</MatIcon>}>
        <span>Check voice mail</span>
      </MatMenuItem>
      <MatMenuItem icon={<MatIcon>notifications_off</MatIcon>}>
        <span>Disable alerts</span>
      </MatMenuItem>
    </>
  );
});

export default component$(() => {
  const menu = createMatMenu({
    content$: $(() => <MenuIconsPanelContent />),
  });

  const trigger = useMatMenuTrigger({menu});

  useMatIconProvider({fontSet: 'material-symbols-outlined'});

  return (
    <menu-icons-example>
      <MatIconButton {...trigger.hostProps} ariaLabel="Example icon-button with a menu">
        <MatIcon>more_vert</MatIcon>
      </MatIconButton>
      <MatMenu />
    </menu-icons-example>
  );
});
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {$, component$} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@qwik.dev/core'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {MatIconButton} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/button'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {MatIcon, useMatIconProvider} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/icon'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  MatMenu,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  MatMenuItem,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  createMatMenu,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  useMatMenuTrigger,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/menu'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// Qwik port of material.angular.dev's \`menu-icons\` docs example — see</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// src/components-examples/material/menu/menu-icons/menu-icons-example.{ts,html}. Rendered</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// unmodified by the Angular dev-app at /qwik-parity/examples/menu-icons (the generic</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`examples/:exampleId\` route). Upstream's trigger stacks \`matIconButton\` AND</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`[matMenuTriggerFor]\` on one \`&#x3C;button>\` — reproduced with the directive-hooks pattern</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// (\`useMatMenuTrigger()\`'s \`hostProps\` spread onto \`&#x3C;MatIconButton>\`), same as the headline</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`menu-overview\` example (menu/example/index.tsx). Each item's leading \`&#x3C;mat-icon>\` is passed</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// via \`MatMenuItem\`'s \`icon\` prop (content projected BEFORE the text span), not as a regular</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// child — a plain child would land inside the item's own default-content wrapper instead of</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// directly on the button, confirmed live against this exact scenario.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">//</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// Icon font-set: matches the Angular dev-app's own default (\`material-symbols-outlined\`,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// confirmed live — same precedent as \`qwik-material-examples/tree/example/index.tsx\`), via</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`useMatIconProvider()\`. CONFIRMED LIVE this must be called SEPARATELY inside the panel's own</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// wrapper component (\`MenuIconsPanelContent\`, below) — a hook called in the trigger/placeholder</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// component's own render does NOT reach the menu's overlay-portaled content (the panel renders</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// into a disconnected root, not a context-propagating descendant of this component's own JSX).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> MenuIconsPanelContent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> component$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">  useMatIconProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">({fontSet: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'material-symbols-outlined'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> icon</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{&#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>dialpad&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>}></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Redial&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> disabled</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> icon</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{&#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>voicemail&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>}></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Check voice mail&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> icon</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{&#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>notifications_off&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>}></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Disable alerts&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;/></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> component$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> menu</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> createMatMenu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    content$: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MenuIconsPanelContent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> />),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> trigger</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> useMatMenuTrigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">({menu});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">  useMatIconProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">({fontSet: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'material-symbols-outlined'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">menu-icons-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatIconButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">trigger.hostProps} </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">ariaLabel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"Example icon-button with a menu"</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>more_vert&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatIconButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> /></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">menu-icons-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"></span></code></pre>`}],r={pkg:e,route:t,files:n};export{r as default,n as files,e as pkg,t as route};
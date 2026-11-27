var e=`badge`,t=`example`,n=[{name:`index.tsx`,lang:`tsx`,code:`import {component$, useSignal, useStyles$} from '@qwik.dev/core';
import {MatBadge, useMatBadge} from '@angular-community/qwik-material/badge';
import {MatButton} from '@angular-community/qwik-material/button';
import {MatIcon} from '@angular-community/qwik-material/icon';
import styles from './example.css?inline';

// Port of src/components-examples/material/badge/badge-overview
// (badge-overview-example.html/.ts/.css) — material.angular.dev's "Badge
// overview" example.
//
// Two of its five badges decorate an element that's itself a qwik-material
// component (\`<button matButton matBadge>\`, \`<mat-icon matBadge>\`) rather
// than a plain tag — upstream stacks TWO directives on one native element,
// something \`<MatBadge as="…">\` (which renders its OWN host) can't do from
// the outside. Ported here with the "directive hooks" pattern
// (\`qwik-material/README.md\`'s "Composing directives"): \`useMatBadge()\`
// returns exactly what \`[matBadge]\` contributes — \`hostProps\` (classes,
// \`aria-describedby\`) to spread onto the host, and \`content\` (the
// \`.mat-badge-content\` span) to pass through \`MatButton\`/\`MatIcon\`'s
// \`hostContent\` prop, which renders it as the host's own last child, same
// position upstream's directive appends it.

export default component$(() => {
  useStyles$(styles);
  const hidden = useSignal(false);

  const actionBadge = useMatBadge({content: '8', position: 'before'});
  const hideBadge = useMatBadge({content: '7', hidden: hidden.value});
  const iconBadge = useMatBadge({content: '15'});

  return (
    <badge-overview-example>
      <MatBadge as="div" class="demo-section" content="4" overlap={false}>
        Text with a badge
      </MatBadge>

      <MatBadge as="div" class="demo-section" content="1" size="small">
        Text with small badge
      </MatBadge>
      <MatBadge as="div" class="demo-section" content="1" size="large">
        Text with large badge
      </MatBadge>

      <div class="demo-section">
        Button with a badge on the left
        <MatButton
          appearance="elevated"
          {...actionBadge.hostProps}
          hostContent={actionBadge.content}
        >
          Action
        </MatButton>
      </div>

      <div class="demo-section">
        Button toggles badge visibility
        <MatButton
          appearance="elevated"
          {...hideBadge.hostProps}
          hostContent={hideBadge.content}
          onClick$={() => {
            hidden.value = !hidden.value;
          }}
        >
          Hide
        </MatButton>
      </div>

      <div class="demo-section">
        Icon with a badge
        <MatIcon {...iconBadge.hostProps} hostContent={iconBadge.content}>
          home
        </MatIcon>
        {/* Include text description of the icon's meaning for screen-readers */}
        <span class="cdk-visually-hidden">
          Example with a home icon with overlaid badge showing the number 15
        </span>
      </div>
    </badge-overview-example>
  );
});
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {component$, useSignal, useStyles$} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@qwik.dev/core'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {MatBadge, useMatBadge} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/badge'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {MatButton} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/button'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {MatIcon} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/icon'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> styles </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> './example.css?inline'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// Port of src/components-examples/material/badge/badge-overview</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// (badge-overview-example.html/.ts/.css) — material.angular.dev's "Badge</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// overview" example.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">//</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// Two of its five badges decorate an element that's itself a qwik-material</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// component (\`&#x3C;button matButton matBadge>\`, \`&#x3C;mat-icon matBadge>\`) rather</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// than a plain tag — upstream stacks TWO directives on one native element,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// something \`&#x3C;MatBadge as="…">\` (which renders its OWN host) can't do from</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// the outside. Ported here with the "directive hooks" pattern</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// (\`qwik-material/README.md\`'s "Composing directives"): \`useMatBadge()\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// returns exactly what \`[matBadge]\` contributes — \`hostProps\` (classes,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`aria-describedby\`) to spread onto the host, and \`content\` (the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`.mat-badge-content\` span) to pass through \`MatButton\`/\`MatIcon\`'s</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`hostContent\` prop, which renders it as the host's own last child, same</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// position upstream's directive appends it.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> component$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">  useStyles$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(styles);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> hidden</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> useSignal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> actionBadge</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> useMatBadge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">({content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'8'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, position: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'before'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> hideBadge</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> useMatBadge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">({content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'7'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, hidden: hidden.value});</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> iconBadge</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> useMatBadge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">({content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'15'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">badge-overview-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatBadge</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> as</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"div"</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"demo-section"</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> content</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"4"</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> overlap</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        Text with a badge</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatBadge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatBadge</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> as</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"div"</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"demo-section"</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> content</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"1"</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> size</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"small"</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        Text with small badge</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatBadge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatBadge</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> as</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"div"</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"demo-section"</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> content</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"1"</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> size</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"large"</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        Text with large badge</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatBadge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"demo-section"</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        Button with a badge on the left</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatButton</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          appearance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"elevated"</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">actionBadge.hostProps}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          hostContent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{actionBadge.content}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        ></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          Action</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"demo-section"</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        Button toggles badge visibility</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatButton</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          appearance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"elevated"</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">hideBadge.hostProps}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          hostContent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{hideBadge.content}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          onClick$</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">            hidden.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">hidden.value;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        ></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          Hide</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"demo-section"</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        Icon with a badge</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">iconBadge.hostProps} </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">hostContent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{iconBadge.content}></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          home</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        {</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">/* Include text description of the icon's meaning for screen-readers */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"cdk-visually-hidden"</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          Example with a home icon with overlaid badge showing the number 15</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">badge-overview-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"></span></code></pre>`},{name:`example.css`,lang:`css`,code:`/* Copy of src/components-examples/material/badge/badge-overview/badge-overview-example.css,
   applied unscoped (see route's header comment) — \`:host\` rewritten to the
   literal \`badge-overview-example\` host tag this route renders (the
   selector Angular's emulated encapsulation rewrites it to, e.g.
   \`[_nghost-ng-c0]\`, only ever matches that SAME host element; unscoped
   \`:host\` outside a shadow root matches nothing). Properties unchanged. */
badge-overview-example {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

badge-overview-example .demo-section + .demo-section {
  margin-top: 16px;
}
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">/* Copy of src/components-examples/material/badge/badge-overview/badge-overview-example.css,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">   applied unscoped (see route's header comment) — \`:host\` rewritten to the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">   literal \`badge-overview-example\` host tag this route renders (the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">   selector Angular's emulated encapsulation rewrites it to, e.g.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">   \`[_nghost-ng-c0]\`, only ever matches that SAME host element; unscoped</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">   \`:host\` outside a shadow root matches nothing). Properties unchanged. */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">badge-overview-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  flex-direction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">column</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  align-items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">flex-start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">badge-overview-example</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> .demo-section</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> +</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> .demo-section</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  margin-top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">16</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span></code></pre>`}],r={pkg:e,route:t,files:n};export{r as default,n as files,e as pkg,t as route};
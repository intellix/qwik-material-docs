var e=`form-field`,t=`form-field-appearance`,n=[{name:`index.tsx`,lang:`tsx`,code:`import {component$} from '@qwik.dev/core';
import {MatFormField, MatHint, MatLabel} from '@angular-community/qwik-material/form-field';
import {MatInput} from '@angular-community/qwik-material/input';
import {MatIcon} from '@angular-community/qwik-material/icon';

/**
 * Port of material.angular.dev's \`form-field-appearance\` docs example
 * (src/components-examples/material/form-field/form-field-appearance/) — the same form field
 * twice, \`appearance="fill"\` then \`"outline"\`. The real template's \`<mat-icon matSuffix>\` puts
 * the directive attribute DIRECTLY on the \`<mat-icon>\` — no wrapping element at all (confirmed
 * live: the real DOM has \`<div class="mat-mdc-form-field-icon-suffix"><mat-icon matsuffix ...>\`,
 * no extra \`<span>\`). \`<MatIconSuffix>\` (used by \`prefix-suffix-icon\`'s own mirror scenario)
 * exists for upstream's OTHER shape — a consumer-authored bare \`<span matIconSuffix>\` with no
 * element of its own — so here \`<MatIcon>\` is passed directly as \`iconSuffix\`, unwrapped;
 * \`MatFormField\` already adds the \`.mat-mdc-form-field-icon-suffix\` container regardless of
 * what's inside.
 *
 * NOTE (read before changing this file): this example's own upstream template wraps each
 * \`<mat-form-field>\` in a literal \`<p>\`. Per the HTML5 parsing algorithm, \`MatFormField\`'s own
 * first rendered child is a \`<div class="mat-mdc-text-field-wrapper">\`, and a \`<div>\` start tag
 * always closes any open \`<p>\` in scope, however deeply nested through an intervening custom
 * element — so Qwik's SSR text, once the browser parses it, always splits this \`<p>\` apart the
 * same way \`select-disabled\`'s \`<p><mat-checkbox>\` does (see that example's own doc comment and
 * \`specs/examples-forms/angular-parity.spec.ts\`'s \`EXPECTED_FAILURES\`). This is marked
 * \`test.fail\` there for exactly that reason — not a bug in this file.
 *
 * The wrapper below is a \`<div>\`, not upstream's literal \`<p>\`: on the real docs site (unlike the
 * parity harness, which diffs Angular-vs-Qwik structure without ever resuming either side), a
 * real browser parses this page's SSR'd HTML and silently reparents past the auto-closed \`<p>\`,
 * which desyncs Qwik's resumability data for the WHOLE page — confirmed via the docs site's
 * smoke test crashing with \`Code(Q27)\` (vnode materialize) on this page with the \`<p>\` in place.
 * \`<div>\` avoids the browser's auto-close outright, at the cost of this wrapper's tag no longer
 * matching upstream — an unavoidable trade given the alternative breaks the page outright.
 */
export default component$(() => {
  return (
    <form-field-appearance-example>
      <div>
        <MatFormField
          appearance="fill"
          label={<MatLabel>Fill form field</MatLabel>}
          control={<MatInput placeholder="Placeholder" />}
          iconSuffix={<MatIcon>sentiment_very_satisfied</MatIcon>}
          hintStart={<MatHint>Hint</MatHint>}
        />
      </div>
      <div>
        <MatFormField
          appearance="outline"
          label={<MatLabel>Outline form field</MatLabel>}
          control={<MatInput placeholder="Placeholder" />}
          iconSuffix={<MatIcon>sentiment_very_satisfied</MatIcon>}
          hintStart={<MatHint>Hint</MatHint>}
        />
      </div>
    </form-field-appearance-example>
  );
});
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {component$} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@qwik.dev/core'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {MatFormField, MatHint, MatLabel} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/form-field'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {MatInput} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/input'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {MatIcon} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/icon'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * Port of material.angular.dev's \`form-field-appearance\` docs example</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * (src/components-examples/material/form-field/form-field-appearance/) — the same form field</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * twice, \`appearance="fill"\` then \`"outline"\`. The real template's \`&#x3C;mat-icon matSuffix>\` puts</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * the directive attribute DIRECTLY on the \`&#x3C;mat-icon>\` — no wrapping element at all (confirmed</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * live: the real DOM has \`&#x3C;div class="mat-mdc-form-field-icon-suffix">&#x3C;mat-icon matsuffix ...>\`,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * no extra \`&#x3C;span>\`). \`&#x3C;MatIconSuffix>\` (used by \`prefix-suffix-icon\`'s own mirror scenario)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * exists for upstream's OTHER shape — a consumer-authored bare \`&#x3C;span matIconSuffix>\` with no</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * element of its own — so here \`&#x3C;MatIcon>\` is passed directly as \`iconSuffix\`, unwrapped;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * \`MatFormField\` already adds the \`.mat-mdc-form-field-icon-suffix\` container regardless of</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * what's inside.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * NOTE (read before changing this file): this example's own upstream template wraps each</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * \`&#x3C;mat-form-field>\` in a literal \`&#x3C;p>\`. Per the HTML5 parsing algorithm, \`MatFormField\`'s own</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * first rendered child is a \`&#x3C;div class="mat-mdc-text-field-wrapper">\`, and a \`&#x3C;div>\` start tag</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * always closes any open \`&#x3C;p>\` in scope, however deeply nested through an intervening custom</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * element — so Qwik's SSR text, once the browser parses it, always splits this \`&#x3C;p>\` apart the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * same way \`select-disabled\`'s \`&#x3C;p>&#x3C;mat-checkbox>\` does (see that example's own doc comment and</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * \`specs/examples-forms/angular-parity.spec.ts\`'s \`EXPECTED_FAILURES\`). This is marked</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * \`test.fail\` there for exactly that reason — not a bug in this file.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * The wrapper below is a \`&#x3C;div>\`, not upstream's literal \`&#x3C;p>\`: on the real docs site (unlike the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * parity harness, which diffs Angular-vs-Qwik structure without ever resuming either side), a</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * real browser parses this page's SSR'd HTML and silently reparents past the auto-closed \`&#x3C;p>\`,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * which desyncs Qwik's resumability data for the WHOLE page — confirmed via the docs site's</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * smoke test crashing with \`Code(Q27)\` (vnode materialize) on this page with the \`&#x3C;p>\` in place.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * \`&#x3C;div>\` avoids the browser's auto-close outright, at the cost of this wrapper's tag no longer</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * matching upstream — an unavoidable trade given the alternative breaks the page outright.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> component$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">form-field-appearance-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatFormField</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          appearance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"fill"</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{&#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatLabel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Fill form field&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatLabel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          control</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{&#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatInput</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> placeholder</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"Placeholder"</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> />}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          iconSuffix</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{&#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>sentiment_very_satisfied&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          hintStart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{&#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatHint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Hint&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatHint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        /></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatFormField</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          appearance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"outline"</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{&#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatLabel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Outline form field&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatLabel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          control</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{&#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatInput</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> placeholder</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"Placeholder"</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> />}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          iconSuffix</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{&#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>sentiment_very_satisfied&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          hintStart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{&#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatHint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Hint&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatHint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        /></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">form-field-appearance-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"></span></code></pre>`}],r={pkg:e,route:t,files:n};export{r as default,n as files,e as pkg,t as route};
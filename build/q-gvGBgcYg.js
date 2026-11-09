var e=`form-field`,t=`input-error-state-matcher`,n=[{name:`index.tsx`,lang:`tsx`,code:`import {$, component$, useStyles$} from '@qwik.dev/core';
import {
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  matEmailValidator,
  matRequiredValidator,
  matValidationErrors,
  useMatFormControl,
  type MatErrorStateSnapshot,
} from '@angular-community/qwik-material/form-field';
import {MatInput} from '@angular-community/qwik-material/input';
import styles from './input-error-state-matcher-example.css?inline';

/**
 * Port of material.angular.dev's \`input-error-state-matcher\` docs example
 * (src/components-examples/material/input/input-error-state-matcher/) — upstream's
 * \`MyErrorStateMatcher\`:
 *
 * \`\`\`ts
 * class MyErrorStateMatcher implements ErrorStateMatcher {
 *   isErrorState(control, form) {
 *     const isSubmitted = form && form.submitted;
 *     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
 *   }
 * }
 * \`\`\`
 *
 * ported as a \`QRL<(state: MatErrorStateSnapshot) => boolean>\` — see
 * \`core/error-state-matcher.ts\`'s own doc comment for why a plain class instance can't cross
 * this port's component boundaries the way it does upstream, and for the full design this
 * example is the first real consumer of. Passed as \`<MatInput errorStateMatcher={matcher}>\` —
 * mirrors upstream's per-control \`[errorStateMatcher]="matcher"\` exactly (there is no app-wide
 * \`useMatErrorStateMatcherProvider({...})\` call in this example, same as upstream's own
 * \`providers: []\`).
 *
 * The whole POINT of this matcher — shows the error the moment the field becomes
 * \`dirty\` (a single keystroke), without waiting for \`touched\` (blur) the way the DEFAULT
 * \`ErrorStateMatcher\` upstream's OTHER examples (\`form-field-error\`) rely on does — is exercised
 * by \`specs/examples-forms/error-state-matcher.spec.ts\` (Qwik-only functional spec; the Angular-
 * parity comparison in \`specs/examples-forms/angular-parity.spec.ts\` only exercises the
 * default, no-interaction render, matching \`form-field-error\`'s own established precedent — see
 * that id's own \`EXAMPLE_STEPS\` comment for why an interactive step was dropped there).
 */
const myErrorStateMatcher = $(
  (state: MatErrorStateSnapshot) =>
    state.invalid && (state.dirty || state.touched || state.submitted),
);

export default component$(() => {
  useStyles$(styles);
  const email = useMatFormControl({value: ''});
  const errors = matValidationErrors(email.value, [matRequiredValidator, matEmailValidator]);
  const errorMessage = errors?.required
    ? 'Email is required'
    : errors?.email
      ? 'Please enter a valid email address'
      : '';

  return (
    <input-error-state-matcher-example>
      {/* Upstream imports \`FormsModule\`, which attaches an IMPLICIT \`NgForm\` to every bare
          \`<form>\` tag with no \`[formGroup]\`/\`ngNoForm\` (confirmed live, a well-known Angular
          Forms gotcha, not specific to this example) — its \`NgControlStatusGroup\` always shows
          \`ng-pristine ng-untouched ng-valid\` here (this FORM-level \`NgForm\` has nothing
          registered to it — \`emailFormControl\` is bound via standalone \`[formControl]\`, never
          \`[ngModel]\` — so its aggregate status never actually changes), and \`NgForm\`'s own host
          binding always adds \`novalidate\`. Both are therefore literal, static markup here rather
          than derived from \`email\`'s own state. */}
      <form class="example-form ng-pristine ng-untouched ng-valid" noValidate>
        <MatFormField
          class="example-full-width"
          label={<MatLabel>Email</MatLabel>}
          touched={email.touched}
          dirty={email.dirty}
          invalid={errors !== null}
          control={
            <MatInput
              type="email"
              placeholder="Ex. pat@example.com"
              // Mirrors upstream's \`MatInput.required\` GETTER, not a literal template
              // attribute: upstream's template never writes \`required\` either, but
              // \`ngControl.control.hasValidator(Validators.required)\` reports \`true\` (the
              // FormControl's own \`Validators.required\`), which upstream's getter folds in —
              // confirmed live, the real Angular DOM has \`required\`/\`aria-required="true"\`
              // despite no \`required\` attribute in the source template.
              required
              formBound
              value={email.value}
              touched={email.touched}
              dirty={email.dirty}
              invalid={errors !== null}
              errorStateMatcher={myErrorStateMatcher}
              onInput$={(_, el) => email.setValue$(el.value)}
              onBlur$={() => email.markAsTouched$()}
            />
          }
          hintStart={<MatHint>Errors appear instantly!</MatHint>}
          errors={errors !== null ? <MatError>{errorMessage}</MatError> : undefined}
        />
      </form>
    </input-error-state-matcher-example>
  );
});
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {$, component$, useStyles$} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@qwik.dev/core'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  MatError,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  MatFormField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  MatHint,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  MatLabel,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  matEmailValidator,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  matRequiredValidator,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  matValidationErrors,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  useMatFormControl,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> MatErrorStateSnapshot,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/form-field'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {MatInput} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/input'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> styles </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> './input-error-state-matcher-example.css?inline'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * Port of material.angular.dev's \`input-error-state-matcher\` docs example</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * (src/components-examples/material/input/input-error-state-matcher/) — upstream's</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * \`MyErrorStateMatcher\`:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * \`\`\`ts</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * class MyErrorStateMatcher implements ErrorStateMatcher {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> *   isErrorState(control, form) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> *     const isSubmitted = form &#x26;&#x26; form.submitted;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> *     return !!(control &#x26;&#x26; control.invalid &#x26;&#x26; (control.dirty || control.touched || isSubmitted));</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> *   }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * \`\`\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * ported as a \`QRL&#x3C;(state: MatErrorStateSnapshot) => boolean>\` — see</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * \`core/error-state-matcher.ts\`'s own doc comment for why a plain class instance can't cross</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * this port's component boundaries the way it does upstream, and for the full design this</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * example is the first real consumer of. Passed as \`&#x3C;MatInput errorStateMatcher={matcher}>\` —</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * mirrors upstream's per-control \`[errorStateMatcher]="matcher"\` exactly (there is no app-wide</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * \`useMatErrorStateMatcherProvider({...})\` call in this example, same as upstream's own</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * \`providers: []\`).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * The whole POINT of this matcher — shows the error the moment the field becomes</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * \`dirty\` (a single keystroke), without waiting for \`touched\` (blur) the way the DEFAULT</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * \`ErrorStateMatcher\` upstream's OTHER examples (\`form-field-error\`) rely on does — is exercised</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * by \`specs/examples-forms/error-state-matcher.spec.ts\` (Qwik-only functional spec; the Angular-</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * parity comparison in \`specs/examples-forms/angular-parity.spec.ts\` only exercises the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * default, no-interaction render, matching \`form-field-error\`'s own established precedent — see</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * that id's own \`EXAMPLE_STEPS\` comment for why an interactive step was dropped there).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> myErrorStateMatcher</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">state</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> MatErrorStateSnapshot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    state.invalid </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">&#x26;&#x26;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (state.dirty </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> state.touched </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> state.submitted),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> component$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">  useStyles$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(styles);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> email</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> useMatFormControl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">({value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">''</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> errors</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> matValidationErrors</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(email.value, [matRequiredValidator, matEmailValidator]);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> errorMessage</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> errors?.required</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">    ?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> 'Email is required'</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">    :</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> errors?.email</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">      ?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> 'Please enter a valid email address'</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">      :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> ''</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">input-error-state-matcher-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      {</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">/* Upstream imports \`FormsModule\`, which attaches an IMPLICIT \`NgForm\` to every bare</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">          \`&#x3C;form>\` tag with no \`[formGroup]\`/\`ngNoForm\` (confirmed live, a well-known Angular</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">          Forms gotcha, not specific to this example) — its \`NgControlStatusGroup\` always shows</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">          \`ng-pristine ng-untouched ng-valid\` here (this FORM-level \`NgForm\` has nothing</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">          registered to it — \`emailFormControl\` is bound via standalone \`[formControl]\`, never</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">          \`[ngModel]\` — so its aggregate status never actually changes), and \`NgForm\`'s own host</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">          binding always adds \`novalidate\`. Both are therefore literal, static markup here rather</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">          than derived from \`email\`'s own state. */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">form</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"example-form ng-pristine ng-untouched ng-valid"</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> noValidate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatFormField</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"example-full-width"</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{&#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatLabel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Email&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatLabel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          touched</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{email.touched}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          dirty</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{email.dirty}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          invalid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{errors </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">!==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          control</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">            &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatInput</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">              type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"email"</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">              placeholder</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"Ex. pat@example.com"</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">              // Mirrors upstream's \`MatInput.required\` GETTER, not a literal template</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">              // attribute: upstream's template never writes \`required\` either, but</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">              // \`ngControl.control.hasValidator(Validators.required)\` reports \`true\` (the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">              // FormControl's own \`Validators.required\`), which upstream's getter folds in —</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">              // confirmed live, the real Angular DOM has \`required\`/\`aria-required="true"\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">              // despite no \`required\` attribute in the source template.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">              required</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">              formBound</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">              value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{email.value}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">              touched</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{email.touched}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">              dirty</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{email.dirty}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">              invalid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{errors </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">!==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">              errorStateMatcher</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{myErrorStateMatcher}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">              onInput$</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">_</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">el</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> email.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">setValue$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(el.value)}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">              onBlur$</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> email.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">markAsTouched$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">()}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">            /></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          hintStart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{&#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatHint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Errors appear instantly!&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatHint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          errors</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{errors </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">!==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> ?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>{errorMessage}&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">> </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        /></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">form</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">input-error-state-matcher-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"></span></code></pre>`},{name:`input-error-state-matcher-example.css`,lang:`css`,code:`input-error-state-matcher-example .example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}

input-error-state-matcher-example .example-full-width {
  width: 100%;
}
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">input-error-state-matcher-example</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> .example-form</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  min-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">150</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  max-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">500</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">input-error-state-matcher-example</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> .example-full-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span></code></pre>`}],r={pkg:e,route:t,files:n};export{r as default,n as files,e as pkg,t as route};
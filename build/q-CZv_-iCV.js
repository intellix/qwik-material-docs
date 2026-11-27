var e=`select`,t=`example`,n=[{name:`index.tsx`,lang:`tsx`,code:`import {component$} from '@qwik.dev/core';
import {MatFormField, MatLabel} from '@angular-community/qwik-material/form-field';
import {MatSelect} from '@angular-community/qwik-material/select';
import {NativeSelectControl} from './native-select-control';

/**
 * Port of material.angular.dev's \`select-overview\` docs example
 * (src/components-examples/material/select/select-overview/). Two independent cards: a plain,
 * uncontrolled \`<mat-select>\` (no \`[(ngModel)]\`/\`[value]\` binding — the real template never reads
 * a selection back out, so this doesn't either) and a native \`<select matNativeControl required>\`
 * — see \`./native-select-control.tsx\` for why the second card is a small local control rather
 * than a \`qwik-material/input\` feature.
 *
 * The real template's \`<mat-option [value]="food.value">\` is a BOUND property (no static-
 * attribute echo on Angular's side — confirmed live), unlike this port's own authored mirror
 * scenarios (\`select.ts\`), which always write a literal, unbound \`value="apple"\` specifically to
 * get \`MatOption\`'s \`echoValueAttr\` default (\`true\`) to match. This example needs the opposite:
 * \`echoValueAttr: false\` on every option def suppresses the attribute so the open panel matches
 * the real, bound-property Angular output exactly.
 */

export default component$(() => {
  return (
    <select-overview-example>
      <h4>Basic mat-select</h4>
      <MatFormField
        label={<MatLabel>Favorite food</MatLabel>}
        control={
          <MatSelect
            controlType="mat-select"
            options={[
              {value: 'steak-0', label: 'Steak', echoValueAttr: false},
              {value: 'pizza-1', label: 'Pizza', echoValueAttr: false},
              {value: 'tacos-2', label: 'Tacos', echoValueAttr: false},
            ]}
          />
        }
      />

      <h4>Basic native select</h4>
      <MatFormField
        label={<MatLabel>Cars</MatLabel>}
        control={<NativeSelectControl value="volvo" required controlType="mat-native-select" />}
      />
    </select-overview-example>
  );
});
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {component$} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@qwik.dev/core'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {MatFormField, MatLabel} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/form-field'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {MatSelect} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/select'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {NativeSelectControl} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> './native-select-control'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * Port of material.angular.dev's \`select-overview\` docs example</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * (src/components-examples/material/select/select-overview/). Two independent cards: a plain,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * uncontrolled \`&#x3C;mat-select>\` (no \`[(ngModel)]\`/\`[value]\` binding — the real template never reads</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * a selection back out, so this doesn't either) and a native \`&#x3C;select matNativeControl required>\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * — see \`./native-select-control.tsx\` for why the second card is a small local control rather</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * than a \`qwik-material/input\` feature.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * The real template's \`&#x3C;mat-option [value]="food.value">\` is a BOUND property (no static-</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * attribute echo on Angular's side — confirmed live), unlike this port's own authored mirror</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * scenarios (\`select.ts\`), which always write a literal, unbound \`value="apple"\` specifically to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * get \`MatOption\`'s \`echoValueAttr\` default (\`true\`) to match. This example needs the opposite:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * \`echoValueAttr: false\` on every option def suppresses the attribute so the open panel matches</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * the real, bound-property Angular output exactly.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> component$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">select-overview-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">h4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Basic mat-select&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">h4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatFormField</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">        label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{&#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatLabel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Favorite food&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatLabel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">        control</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatSelect</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">            controlType</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"mat-select"</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">            options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">              {value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'steak-0'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Steak'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, echoValueAttr: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">              {value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'pizza-1'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Pizza'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, echoValueAttr: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">              {value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'tacos-2'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Tacos'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, echoValueAttr: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">            ]}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          /></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      /></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">h4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Basic native select&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">h4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatFormField</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">        label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{&#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatLabel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Cars&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatLabel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">        control</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{&#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">NativeSelectControl</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"volvo"</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> required</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> controlType</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"mat-native-select"</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> />}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      /></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">select-overview-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"></span></code></pre>`},{name:`native-select-control.tsx`,lang:`tsx`,code:`import {component$, useContext} from '@qwik.dev/core';
import {
  MAT_FORM_FIELD_CONTROL_STATE,
  type MatFormFieldControlProps,
} from '@angular-community/qwik-material/core';

/**
 * A \`<select matNativeControl>\` form-field control — the \`select-overview\` docs example's
 * second card (src/components-examples/material/select/select-overview/select-overview-
 * example.html). \`qwik-material/input\`'s \`MatInput\` deliberately doesn't port
 * \`matNativeControl\`/native-\`<select>\` support (see its SYNC.md: "no parity scenario uses a
 * native select"); this example is the first one that does, so rather than grow \`MatInput\` with
 * a whole second host-element kind for one docs example, this is a small, LOCAL (this route
 * only) control implementing the SAME \`MatFormFieldControlProps\` contract \`MatInput\`/\`MatSelect\`
 * already implement (see \`core/mat-form-field-control.ts\`'s doc comment — ANY component can be
 * \`<MatFormField control={...}>\`'s control, not just the two the package ships).
 *
 * \`MatFormField\` reads \`value\`/\`required\`/\`controlType\` straight off THIS element's own JSX
 * descriptor (before rendering anything), so passing a non-empty literal \`value\` here is what
 * makes \`MatFormField\`'s already-correct, control-agnostic \`shouldLabelFloat\`/
 * \`hidePlaceholder\` formulas produce the right result for a native select whose first option is
 * always "selected" by plain HTML default — no native-select-specific logic needed in
 * \`MatFormField\` itself. Confirmed live against the real example
 * (http://localhost:4200/qwik-parity/mat-select/example): \`shouldLabelFloat\` is \`true\` from the
 * very first render (\`mdc-floating-label--float-above\`, no \`mat-form-field-hide-placeholder\`) —
 * exactly what \`!empty\` (from this non-empty \`value\`) already gives for a plain \`MatInput\`.
 */
export const NativeSelectControl = component$<MatFormFieldControlProps>(props => {
  const formField = useContext(MAT_FORM_FIELD_CONTROL_STATE, undefined);
  const id = formField ? formField.assignedId : props.id;
  const ariaDescribedBy = formField ? formField.assignedDescribedBy : props['aria-describedby'];

  return (
    <select
      {...({matnativecontrol: ''} as Record<string, string>)}
      required={props.required || undefined}
      id={id}
      class="mat-mdc-input-element mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored"
      aria-invalid="false"
      aria-required={props.required ? 'true' : 'false'}
      aria-describedby={ariaDescribedBy}
    >
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  );
});
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {component$, useContext} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@qwik.dev/core'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  MAT_FORM_FIELD_CONTROL_STATE,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> MatFormFieldControlProps,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/core'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * A \`&#x3C;select matNativeControl>\` form-field control — the \`select-overview\` docs example's</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * second card (src/components-examples/material/select/select-overview/select-overview-</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * example.html). \`qwik-material/input\`'s \`MatInput\` deliberately doesn't port</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * \`matNativeControl\`/native-\`&#x3C;select>\` support (see its SYNC.md: "no parity scenario uses a</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * native select"); this example is the first one that does, so rather than grow \`MatInput\` with</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * a whole second host-element kind for one docs example, this is a small, LOCAL (this route</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * only) control implementing the SAME \`MatFormFieldControlProps\` contract \`MatInput\`/\`MatSelect\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * already implement (see \`core/mat-form-field-control.ts\`'s doc comment — ANY component can be</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * \`&#x3C;MatFormField control={...}>\`'s control, not just the two the package ships).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * \`MatFormField\` reads \`value\`/\`required\`/\`controlType\` straight off THIS element's own JSX</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * descriptor (before rendering anything), so passing a non-empty literal \`value\` here is what</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * makes \`MatFormField\`'s already-correct, control-agnostic \`shouldLabelFloat\`/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * \`hidePlaceholder\` formulas produce the right result for a native select whose first option is</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * always "selected" by plain HTML default — no native-select-specific logic needed in</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * \`MatFormField\` itself. Confirmed live against the real example</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * (http://localhost:4200/qwik-parity/mat-select/example): \`shouldLabelFloat\` is \`true\` from the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * very first render (\`mdc-floating-label--float-above\`, no \`mat-form-field-hide-placeholder\`) —</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * exactly what \`!empty\` (from this non-empty \`value\`) already gives for a plain \`MatInput\`.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> NativeSelectControl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> component$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">&#x3C;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">MatFormFieldControlProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">props</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> formField</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> useContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MAT_FORM_FIELD_CONTROL_STATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> formField </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> formField.assignedId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> props.id;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> ariaDescribedBy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> formField </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> formField.assignedDescribedBy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> props[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'aria-describedby'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">select</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">({matnativecontrol: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">''</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">&#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>)}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">      required</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{props.required </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">||</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">      id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{id}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">      class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"mat-mdc-input-element mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored"</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">      aria-invalid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"false"</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">      aria-required</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{props.required </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> 'true'</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> 'false'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">      aria-describedby</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{ariaDescribedBy}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    ></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">option</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"volvo"</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Volvo&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">option</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"saab"</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Saab&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">option</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"mercedes"</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Mercedes&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">option</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"audi"</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Audi&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"></span></code></pre>`}],r={pkg:e,route:t,files:n};export{r as default,n as files,e as pkg,t as route};
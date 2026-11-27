var e=`autocomplete`,t=`autocomplete-optgroup`,n=[{name:`index.tsx`,lang:`tsx`,code:`import {component$, useSignal} from '@qwik.dev/core';
import {MatFormField, MatLabel} from '@angular-community/qwik-material/form-field';
import {
  MatAutocomplete,
  type MatAutocompleteGroupDef,
} from '@angular-community/qwik-material/autocomplete';

// Port of material.angular.dev's \`autocomplete-optgroup\` docs example
// (src/components-examples/material/autocomplete/autocomplete-optgroup/) — grouped options via
// \`MatAutocomplete\`'s \`options\` entries nesting their own \`options\` array (see
// \`select-option-resolver.ts\`'s identical \`MatSelectGroupDef\` shape), same conventions as this
// port's own \`mat-autocomplete/optgroups\` mirror scenario. \`stateForm = formBuilder.group({
// stateGroup: ''})\` (reactive \`FormGroup\`, \`required\` on the input) — the input starts empty and
// invalid (required), untouched.
const GROUPS: Array<{letter: string; names: string[]}> = [
  {letter: 'A', names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']},
  {letter: 'C', names: ['California', 'Colorado', 'Connecticut']},
  {letter: 'D', names: ['Delaware']},
  {letter: 'F', names: ['Florida']},
  {letter: 'G', names: ['Georgia']},
  {letter: 'H', names: ['Hawaii']},
  {letter: 'I', names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']},
  {letter: 'K', names: ['Kansas', 'Kentucky']},
  {letter: 'L', names: ['Louisiana']},
  {
    letter: 'M',
    names: [
      'Maine',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
    ],
  },
  {
    letter: 'N',
    names: [
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Carolina',
      'North Dakota',
    ],
  },
  {letter: 'O', names: ['Ohio', 'Oklahoma', 'Oregon']},
  {letter: 'P', names: ['Pennsylvania']},
  {letter: 'R', names: ['Rhode Island']},
  {letter: 'S', names: ['South Carolina', 'South Dakota']},
  {letter: 'T', names: ['Tennessee', 'Texas']},
  {letter: 'U', names: ['Utah']},
  {letter: 'V', names: ['Vermont', 'Virginia']},
  {letter: 'W', names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']},
];

function filterGroup(val: string): MatAutocompleteGroupDef[] {
  const filterValue = (val || '').toLowerCase();
  const groups = !filterValue
    ? GROUPS
    : GROUPS.map(group => ({
        letter: group.letter,
        names: group.names.filter(name => name.toLowerCase().includes(filterValue)),
      })).filter(group => group.names.length > 0);
  return groups.map(group => ({
    label: group.letter,
    options: group.names.map(name => ({value: name, label: name})),
  }));
}

export default component$(() => {
  const value = useSignal('');
  const touched = useSignal(false);
  const invalid = () => value.value === '';
  const filteredGroups = useSignal<MatAutocompleteGroupDef[]>(filterGroup(''));

  return (
    <autocomplete-optgroup-example>
      <form class="ng-untouched ng-pristine ng-invalid" noValidate>
        <MatFormField
          touched={touched.value}
          dirty={false}
          invalid={invalid()}
          label={<MatLabel>States Group</MatLabel>}
          control={
            <MatAutocomplete
              formBound
              required
              touched={touched.value}
              dirty={false}
              invalid={invalid()}
              type="text"
              value={value.value}
              onValueChange$={v => (value.value = v as string)}
              onTouched$={() => (touched.value = true)}
              options={filteredGroups}
              onInput$={(_, el) => (filteredGroups.value = filterGroup(el.value))}
              onFocus$={(_, el) => (filteredGroups.value = filterGroup(el.value))}
            />
          }
        />
      </form>
    </autocomplete-optgroup-example>
  );
});
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {component$, useSignal} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@qwik.dev/core'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {MatFormField, MatLabel} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/form-field'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  MatAutocomplete,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> MatAutocompleteGroupDef,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/autocomplete'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// Port of material.angular.dev's \`autocomplete-optgroup\` docs example</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// (src/components-examples/material/autocomplete/autocomplete-optgroup/) — grouped options via</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`MatAutocomplete\`'s \`options\` entries nesting their own \`options\` array (see</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`select-option-resolver.ts\`'s identical \`MatSelectGroupDef\` shape), same conventions as this</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// port's own \`mat-autocomplete/optgroups\` mirror scenario. \`stateForm = formBuilder.group({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// stateGroup: ''})\` (reactive \`FormGroup\`, \`required\` on the input) — the input starts empty and</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// invalid (required), untouched.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> GROUPS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">&#x3C;{</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">letter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">; </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">names</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">[]}> </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {letter: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'A'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, names: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Alabama'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Alaska'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Arizona'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Arkansas'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">]},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {letter: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'C'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, names: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'California'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Colorado'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Connecticut'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">]},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {letter: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'D'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, names: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Delaware'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">]},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {letter: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'F'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, names: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Florida'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">]},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {letter: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'G'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, names: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Georgia'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">]},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {letter: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'H'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, names: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Hawaii'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">]},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {letter: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'I'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, names: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Idaho'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Illinois'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Indiana'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Iowa'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">]},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {letter: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'K'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, names: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Kansas'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Kentucky'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">]},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {letter: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'L'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, names: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Louisiana'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">]},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    letter: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'M'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    names: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">      'Maine'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">      'Maryland'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">      'Massachusetts'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">      'Michigan'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">      'Minnesota'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">      'Mississippi'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">      'Missouri'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">      'Montana'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    letter: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'N'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    names: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">      'Nebraska'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">      'Nevada'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">      'New Hampshire'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">      'New Jersey'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">      'New Mexico'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">      'New York'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">      'North Carolina'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">      'North Dakota'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {letter: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'O'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, names: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Ohio'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Oklahoma'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Oregon'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">]},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {letter: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'P'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, names: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Pennsylvania'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">]},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {letter: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'R'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, names: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Rhode Island'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">]},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {letter: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'S'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, names: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'South Carolina'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'South Dakota'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">]},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {letter: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'T'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, names: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Tennessee'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Texas'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">]},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {letter: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'U'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, names: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Utah'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">]},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {letter: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'V'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, names: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Vermont'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Virginia'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">]},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {letter: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'W'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, names: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Washington'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'West Virginia'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Wisconsin'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Wyoming'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">]},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> filterGroup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">val</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> MatAutocompleteGroupDef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">[] {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> filterValue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (val </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">||</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> ''</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">toLowerCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> groups</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">filterValue</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">    ?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> GROUPS</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">    :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> GROUPS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">group</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> ({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        letter: group.letter,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        names: group.names.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> name.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">toLowerCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(filterValue)),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      })).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">group</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> group.names.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> ></span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> groups.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">group</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> ({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    label: group.letter,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    options: group.names.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> ({value: name, label: name})),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  }));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> component$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> useSignal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">''</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> touched</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> useSignal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> invalid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> value.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> ''</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> filteredGroups</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> useSignal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">&#x3C;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">MatAutocompleteGroupDef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">[]>(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">filterGroup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">''</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">autocomplete-optgroup-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">form</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"ng-untouched ng-pristine ng-invalid"</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> noValidate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatFormField</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          touched</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{touched.value}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          dirty</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          invalid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">invalid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">()}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{&#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatLabel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>States Group&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatLabel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          control</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">            &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatAutocomplete</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">              formBound</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">              required</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">              touched</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{touched.value}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">              dirty</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">              invalid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">invalid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">()}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">              type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"text"</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">              value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{value.value}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">              onValueChange$</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">v</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (value.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> v </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">as</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">)}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">              onTouched$</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (touched.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">)}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">              options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{filteredGroups}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">              onInput$</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">_</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">el</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (filteredGroups.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> filterGroup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(el.value))}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">              onFocus$</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">_</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">el</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (filteredGroups.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> filterGroup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(el.value))}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">            /></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        /></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">form</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">autocomplete-optgroup-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"></span></code></pre>`}],r={pkg:e,route:t,files:n};export{r as default,n as files,e as pkg,t as route};
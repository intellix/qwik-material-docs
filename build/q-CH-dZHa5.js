var e=`sort`,t=`example`,n=[{name:`index.tsx`,lang:`tsx`,code:`import {component$, useSignal} from '@qwik.dev/core';
import {MatSort, MatSortHeader, type Sort} from '@angular-community/qwik-material/sort';
import './sort-overview-example.css';

// Qwik port of material.angular.dev's \`sort-overview\` docs example — see
// src/components-examples/material/sort/sort-overview/sort-overview-example.{ts,html,css}.
// Rendered unmodified by the Angular dev-app at /qwik-parity/mat-sort/example
// (src/dev-app/qwik-parity/examples.ts). Host tag mirrors the example's own component selector
// (\`sort-overview-example\`). \`<MatSort as="table">\` (the default) renders the bare \`<table
// matSort>\` itself; upstream's own template has no \`<thead>\`/\`<tbody>\` wrapper at all (bare
// \`<tr>\`s directly inside \`<table>\`).
//
// This route still wraps them in one plain, attribute-less \`<tbody>\` — NOT a structural-parity
// difference (the browser's HTML parser inserts exactly this same implicit, attribute-less
// \`<tbody>\` around a bare \`<table><tr>\` anyway, when building it from SSR'd markup, a standard
// HTML5 table-parsing rule — already documented in \`qwik-material/sort/SYNC.md\` deviation #4 and
// normalized away by the parity harness, see \`material-parity.ts\`'s \`elementChildren\` comment),
// but a REAL functional requirement: Qwik's resumability needs its serialized vnode tree to
// match the LIVE DOM it resumes into, and the browser inserting a tbody IT doesn't know about
// (bare \`<tr>\`s crash on the first client-side re-render that touches this table — confirmed
// live, \`sortedData.value = ...\` after a sort-header click threw "Cannot set properties of
// undefined (setting '__virtual')" deep in Qwik's own vnode diffing). Writing the SAME tbody
// explicitly keeps Qwik's own vnode tree and the parsed DOM in agreement from the start.
interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

const DESSERTS: Dessert[] = [
  {name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
  {name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
  {name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6},
  {name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4},
  {name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4},
];

function compare(a: number | string, b: number | string, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

function sortDesserts(sort: Sort): Dessert[] {
  const data = DESSERTS.slice();
  if (!sort.active || sort.direction === '') {
    return data;
  }
  return data.sort((a, b) => {
    const isAsc = sort.direction === 'asc';
    switch (sort.active) {
      case 'name':
        return compare(a.name, b.name, isAsc);
      case 'calories':
        return compare(a.calories, b.calories, isAsc);
      case 'fat':
        return compare(a.fat, b.fat, isAsc);
      case 'carbs':
        return compare(a.carbs, b.carbs, isAsc);
      case 'protein':
        return compare(a.protein, b.protein, isAsc);
      default:
        return 0;
    }
  });
}

export default component$(() => {
  const sortedData = useSignal<Dessert[]>(DESSERTS.slice());

  return (
    <sort-overview-example>
      <MatSort
        onSortChange$={sort => {
          sortedData.value = sortDesserts(sort);
        }}
      >
        <tbody>
          <tr>
            <MatSortHeader id="name">Dessert (100g)</MatSortHeader>
            <MatSortHeader id="calories">Calories</MatSortHeader>
            <MatSortHeader id="fat">Fat (g)</MatSortHeader>
            <MatSortHeader id="carbs">Carbs (g)</MatSortHeader>
            <MatSortHeader id="protein">Protein (g)</MatSortHeader>
          </tr>
          {sortedData.value.map(dessert => (
            <tr key={dessert.name}>
              <td>{dessert.name}</td>
              <td>{dessert.calories}</td>
              <td>{dessert.fat}</td>
              <td>{dessert.carbs}</td>
              <td>{dessert.protein}</td>
            </tr>
          ))}
        </tbody>
      </MatSort>
    </sort-overview-example>
  );
});
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {component$, useSignal} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@qwik.dev/core'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {MatSort, MatSortHeader, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> Sort} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/sort'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> './sort-overview-example.css'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// Qwik port of material.angular.dev's \`sort-overview\` docs example — see</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// src/components-examples/material/sort/sort-overview/sort-overview-example.{ts,html,css}.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// Rendered unmodified by the Angular dev-app at /qwik-parity/mat-sort/example</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// (src/dev-app/qwik-parity/examples.ts). Host tag mirrors the example's own component selector</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// (\`sort-overview-example\`). \`&#x3C;MatSort as="table">\` (the default) renders the bare \`&#x3C;table</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// matSort>\` itself; upstream's own template has no \`&#x3C;thead>\`/\`&#x3C;tbody>\` wrapper at all (bare</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`&#x3C;tr>\`s directly inside \`&#x3C;table>\`).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">//</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// This route still wraps them in one plain, attribute-less \`&#x3C;tbody>\` — NOT a structural-parity</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// difference (the browser's HTML parser inserts exactly this same implicit, attribute-less</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`&#x3C;tbody>\` around a bare \`&#x3C;table>&#x3C;tr>\` anyway, when building it from SSR'd markup, a standard</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// HTML5 table-parsing rule — already documented in \`qwik-material/sort/SYNC.md\` deviation #4 and</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// normalized away by the parity harness, see \`material-parity.ts\`'s \`elementChildren\` comment),</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// but a REAL functional requirement: Qwik's resumability needs its serialized vnode tree to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// match the LIVE DOM it resumes into, and the browser inserting a tbody IT doesn't know about</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// (bare \`&#x3C;tr>\`s crash on the first client-side re-render that touches this table — confirmed</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// live, \`sortedData.value = ...\` after a sort-header click threw "Cannot set properties of</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// undefined (setting '__virtual')" deep in Qwik's own vnode diffing). Writing the SAME tbody</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// explicitly keeps Qwik's own vnode tree and the parsed DOM in agreement from the start.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> Dessert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">  calories</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">  carbs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">  fat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">  name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">  protein</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> DESSERTS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> Dessert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Frozen yogurt'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, calories: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">159</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, fat: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, carbs: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">24</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, protein: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Ice cream sandwich'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, calories: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">237</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, fat: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, carbs: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">37</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, protein: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Eclair'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, calories: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">262</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, fat: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, carbs: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">24</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, protein: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Cupcake'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, calories: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">305</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, fat: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, carbs: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">67</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, protein: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Gingerbread'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, calories: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">356</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, fat: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, carbs: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">49</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, protein: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> compare</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">isAsc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">&#x3C;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (isAsc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> :</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> sortDesserts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">sort</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> Sort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> Dessert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">[] {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> DESSERTS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">slice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">sort.active </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> sort.direction </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> ''</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> data;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> data.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">sort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> isAsc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> sort.direction </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> 'asc'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">    switch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (sort.active) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">      case</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> 'name'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">        return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> compare</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(a.name, b.name, isAsc);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">      case</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> 'calories'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">        return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> compare</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(a.calories, b.calories, isAsc);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">      case</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> 'fat'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">        return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> compare</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(a.fat, b.fat, isAsc);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">      case</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> 'carbs'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">        return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> compare</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(a.carbs, b.carbs, isAsc);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">      case</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> 'protein'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">        return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> compare</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(a.protein, b.protein, isAsc);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">      default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> component$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> sortedData</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> useSignal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">&#x3C;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">Dessert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">[]>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">DESSERTS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">slice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">());</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">sort-overview-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatSort</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">        onSortChange$</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">sort</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          sortedData.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> sortDesserts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(sort);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      ></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">tbody</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">tr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">            &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatSortHeader</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"name"</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Dessert (100g)&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatSortHeader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">            &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatSortHeader</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"calories"</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Calories&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatSortHeader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">            &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatSortHeader</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"fat"</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Fat (g)&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatSortHeader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">            &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatSortHeader</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"carbs"</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Carbs (g)&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatSortHeader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">            &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatSortHeader</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"protein"</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Protein (g)&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatSortHeader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          &#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">tr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          {sortedData.value.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">dessert</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">            &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">tr</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{dessert.name}></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">              &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">td</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>{dessert.name}&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">td</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">              &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">td</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>{dessert.calories}&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">td</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">              &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">td</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>{dessert.fat}&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">td</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">              &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">td</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>{dessert.carbs}&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">td</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">              &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">td</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>{dessert.protein}&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">td</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">            &#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">tr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          ))}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">tbody</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatSort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">sort-overview-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"></span></code></pre>`},{name:`sort-overview-example.css`,lang:`css`,code:`/* Copied from src/components-examples/material/sort/sort-overview/sort-overview-example.css.
   Selector prefixed with this route's own host tag — see table-basic-example.css's comment for
   why a plain Qwik CSS import needs this (this rule would otherwise affect EVERY
   \`.mat-sort-header-container\` in the whole dev-app, not just this example's). */
sort-overview-example .mat-sort-header-container {
  align-items: center;
}
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">/* Copied from src/components-examples/material/sort/sort-overview/sort-overview-example.css.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">   Selector prefixed with this route's own host tag — see table-basic-example.css's comment for</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">   why a plain Qwik CSS import needs this (this rule would otherwise affect EVERY</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">   \`.mat-sort-header-container\` in the whole dev-app, not just this example's). */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">sort-overview-example</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> .mat-sort-header-container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  align-items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span></code></pre>`}],r={pkg:e,route:t,files:n};export{r as default,n as files,e as pkg,t as route};
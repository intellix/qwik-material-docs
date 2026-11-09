var e=`table`,t=`table-sticky-header`,n=[{name:`index.tsx`,lang:`tsx`,code:`import {component$} from '@qwik.dev/core';
import {MatTable, type MatColumnDef, type MatTableRow} from '@angular-community/qwik-material/table';
import './table-sticky-header-example.css';

// Qwik port of material.angular.dev's \`table-sticky-header\` docs example. Rendered unmodified
// by the Angular dev-app at /qwik-parity/examples/table-sticky-header.
interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

const displayedColumns = ['position', 'name', 'weight', 'symbol'];
const columns: MatColumnDef[] = [
  {name: 'position', header: ' No. '},
  {name: 'name', header: ' Name '},
  {name: 'weight', header: ' Weight '},
  {name: 'symbol', header: ' Symbol '},
];
const rows: MatTableRow[] = ELEMENT_DATA.map(el => ({
  key: el.position,
  cells: {
    position: \` \${el.position} \`,
    name: \` \${el.name} \`,
    weight: \` \${el.weight} \`,
    symbol: \` \${el.symbol} \`,
  },
}));

export default component$(() => (
  <table-sticky-header-example>
    <section class="example-container mat-elevation-z8" tabIndex={0}>
      <MatTable
        columns={columns}
        rows={rows}
        displayedColumns={displayedColumns}
        headerRows={[{columns: displayedColumns, sticky: true}]}
      />
    </section>
  </table-sticky-header-example>
));
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {component$} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@qwik.dev/core'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {MatTable, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> MatColumnDef, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> MatTableRow} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/table'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> './table-sticky-header-example.css'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// Qwik port of material.angular.dev's \`table-sticky-header\` docs example. Rendered unmodified</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// by the Angular dev-app at /qwik-parity/examples/table-sticky-header.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> PeriodicElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">  name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">  position</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">  weight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">  symbol</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> ELEMENT_DATA</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> PeriodicElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {position: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Hydrogen'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, weight: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">1.0079</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, symbol: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'H'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {position: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Helium'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, weight: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">4.0026</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, symbol: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'He'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {position: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Lithium'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, weight: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">6.941</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, symbol: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Li'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {position: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Beryllium'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, weight: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">9.0122</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, symbol: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Be'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {position: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Boron'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, weight: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">10.811</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, symbol: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'B'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {position: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Carbon'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, weight: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">12.0107</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, symbol: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'C'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {position: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Nitrogen'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, weight: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">14.0067</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, symbol: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'N'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {position: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Oxygen'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, weight: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">15.9994</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, symbol: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'O'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {position: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Fluorine'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, weight: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">18.9984</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, symbol: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'F'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {position: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Neon'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, weight: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">20.1797</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, symbol: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Ne'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> displayedColumns</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'position'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'name'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'weight'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'symbol'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> columns</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> MatColumnDef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'position'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, header: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">' No. '</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'name'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, header: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">' Name '</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'weight'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, header: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">' Weight '</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'symbol'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, header: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">' Symbol '</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> rows</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> MatTableRow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> ELEMENT_DATA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">el</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> ({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  key: el.position,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  cells: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    position: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">\` \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">el</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">position</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">} \`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">\` \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">el</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">} \`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    weight: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">\` \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">el</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">weight</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">} \`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    symbol: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">\` \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">el</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">symbol</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">} \`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> component$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">table-sticky-header-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">section</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"example-container mat-elevation-z8"</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> tabIndex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatTable</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">        columns</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{columns}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">        rows</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{rows}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">        displayedColumns</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{displayedColumns}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">        headerRows</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{[{columns: displayedColumns, sticky: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}]}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      /></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">section</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">table-sticky-header-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">));</span></span>
<span class="line"></span></code></pre>`},{name:`table-sticky-header-example.css`,lang:`css`,code:`/* Copied from src/components-examples/material/table/table-sticky-header/
   table-sticky-header-example.css, prefixed with this route's own host tag. */
table-sticky-header-example .example-container {
  height: 400px;
  overflow: auto;
}
table-sticky-header-example table {
  width: 100%;
}
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">/* Copied from src/components-examples/material/table/table-sticky-header/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">   table-sticky-header-example.css, prefixed with this route's own host tag. */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">table-sticky-header-example</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> .example-container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">400</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  overflow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">table-sticky-header-example</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D"> table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span></code></pre>`}],r={pkg:e,route:t,files:n};export{r as default,n as files,e as pkg,t as route};
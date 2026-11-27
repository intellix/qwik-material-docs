var e=`table`,t=`table-row-binding`,n=[{name:`index.tsx`,lang:`tsx`,code:`import {$, component$, useSignal, useStyles$} from '@qwik.dev/core';
import {MatTable, type MatColumnDef, type MatTableRow} from '@angular-community/qwik-material/table';
import styles from './table-row-binding-example.css?inline';

// Qwik port of material.angular.dev's \`table-row-binding\` docs example — see
// src/components-examples/material/table/table-row-binding/table-row-binding-example.{ts,html}.
// Rendered unmodified by the Angular dev-app at /qwik-parity/examples/table-row-binding.
//
// Demonstrates \`MatTableRow.onClick$\`/\`.class\` — the migration mapping of upstream's
// \`(click)="clickedRows.add(row)"\` / \`[class.demo-row-is-clicked]="clickedRows.has(row)"\` on
// \`<tr mat-row>\`. \`clickedRows\` is a plain array of clicked indices here (not a \`Set\` — avoids
// any question of \`Set\` SSR-serialization; order of first click is all \`track clickedRow\` needs
// upstream anyway, which a plain array preserves identically).

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
  {name: 'position', header: 'No.'},
  {name: 'name', header: 'Name'},
  {name: 'weight', header: 'Weight'},
  {name: 'symbol', header: 'Symbol'},
];

export default component$(() => {
  useStyles$(styles);
  const clickedRows = useSignal<number[]>([]);

  const rows: MatTableRow[] = ELEMENT_DATA.map((element, i) => ({
    key: i,
    cells: {
      position: element.position,
      name: element.name,
      weight: element.weight,
      symbol: element.symbol,
    },
    class: clickedRows.value.includes(i) ? 'demo-row-is-clicked' : undefined,
    onClick$: $(() => {
      if (!clickedRows.value.includes(i)) {
        clickedRows.value = [...clickedRows.value, i];
      }
    }),
  }));

  return (
    <table-row-binding-example>
      <MatTable
        columns={columns}
        rows={rows}
        displayedColumns={displayedColumns}
        class="mat-elevation-z8 demo-table"
      />

      <div>
        <h3>Click Log</h3>
      </div>

      {clickedRows.value.length === 0 && <div>Clicked rows will be logged here</div>}

      <ul>
        {clickedRows.value.map(i => (
          <li key={i}>Clicked on {ELEMENT_DATA[i].name}</li>
        ))}
      </ul>
    </table-row-binding-example>
  );
});
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {$, component$, useSignal, useStyles$} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@qwik.dev/core'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {MatTable, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> MatColumnDef, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> MatTableRow} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/table'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> styles </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> './table-row-binding-example.css?inline'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// Qwik port of material.angular.dev's \`table-row-binding\` docs example — see</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// src/components-examples/material/table/table-row-binding/table-row-binding-example.{ts,html}.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// Rendered unmodified by the Angular dev-app at /qwik-parity/examples/table-row-binding.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">//</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// Demonstrates \`MatTableRow.onClick$\`/\`.class\` — the migration mapping of upstream's</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`(click)="clickedRows.add(row)"\` / \`[class.demo-row-is-clicked]="clickedRows.has(row)"\` on</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`&#x3C;tr mat-row>\`. \`clickedRows\` is a plain array of clicked indices here (not a \`Set\` — avoids</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// any question of \`Set\` SSR-serialization; order of first click is all \`track clickedRow\` needs</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// upstream anyway, which a plain array preserves identically).</span></span>
<span class="line"></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'position'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, header: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'No.'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'name'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, header: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Name'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'weight'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, header: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Weight'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'symbol'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, header: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Symbol'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> component$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">  useStyles$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(styles);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> clickedRows</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> useSignal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">&#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">[]>([]);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> rows</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> MatTableRow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> ELEMENT_DATA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">element</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> ({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    key: i,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    cells: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      position: element.position,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      name: element.name,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      weight: element.weight,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      symbol: element.symbol,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    class: clickedRows.value.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(i) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> 'demo-row-is-clicked'</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    onClick$: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">clickedRows.value.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(i)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        clickedRows.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">clickedRows.value, i];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  }));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">table-row-binding-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatTable</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">        columns</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{columns}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">        rows</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{rows}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">        displayedColumns</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{displayedColumns}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">        class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"mat-elevation-z8 demo-table"</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      /></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">h3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Click Log&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">h3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      {clickedRows.value.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> ===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> &#x26;&#x26;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Clicked rows will be logged here&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">ul</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        {clickedRows.value.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">li</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{i}>Clicked on {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">ELEMENT_DATA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">[i].name}&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        ))}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">ul</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">table-row-binding-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"></span></code></pre>`},{name:`table-row-binding-example.css`,lang:`css`,code:`/*
 * Adapted from
 * src/components-examples/material/table/table-row-binding/table-row-binding-example.css —
 * every selector prefixed with the example's own host tag (specs/examples-css enforces this;
 * upstream's selectors are unscoped, relying on Angular's view encapsulation instead).
 */
table-row-binding-example .demo-table {
  width: 100%;
}

table-row-binding-example .mat-mdc-row .mat-mdc-cell {
  border-bottom: 1px solid transparent;
  border-top: 1px solid transparent;
  cursor: pointer;
}

table-row-binding-example .mat-mdc-row:hover .mat-mdc-cell {
  border-color: currentColor;
}

table-row-binding-example .demo-row-is-clicked {
  font-weight: bold;
}
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * Adapted from</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * src/components-examples/material/table/table-row-binding/table-row-binding-example.css —</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * every selector prefixed with the example's own host tag (specs/examples-css enforces this;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * upstream's selectors are unscoped, relying on Angular's view encapsulation instead).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">table-row-binding-example</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> .demo-table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">table-row-binding-example</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> .mat-mdc-row</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> .mat-mdc-cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  border-bottom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> solid</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> transparent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  border-top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> solid</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> transparent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  cursor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">pointer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">table-row-binding-example</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> .mat-mdc-row:hover</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> .mat-mdc-cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  border-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">currentColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">table-row-binding-example</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> .demo-row-is-clicked</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  font-weight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">bold</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span></code></pre>`}],r={pkg:e,route:t,files:n};export{r as default,n as files,e as pkg,t as route};
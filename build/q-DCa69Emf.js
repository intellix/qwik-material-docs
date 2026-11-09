var e=`tree`,t=`example`,n=[{name:`index.tsx`,lang:`tsx`,code:`import {$, component$, useContext} from '@qwik.dev/core';
import {CDK_TREE_TOGGLE_STATE, type CdkTreeNodeInput} from '@angular-community/qwik-cdk/tree';
import {MatIconButton} from '@angular-community/qwik-material/button';
import {MatIcon, useMatIconProvider} from '@angular-community/qwik-material/icon';
import {MatTree} from '@angular-community/qwik-material/tree';

// Qwik port of material.angular.dev's \`tree-flat-child-accessor-overview\` docs example — see
// src/components-examples/material/tree/tree-flat-child-accessor-overview/
// tree-flat-child-accessor-overview-example.{ts,html}. Rendered unmodified by the Angular dev-app
// at /qwik-parity/mat-tree/example (src/dev-app/qwik-parity/examples.ts). Host tag mirrors the
// example's own component selector (\`tree-flat-child-accessor-overview-example\`).
//
// Unlike every OTHER mat-tree parity scenario (which deliberately uses plain text \`[+]\`/\`[-]\`
// toggle buttons to stay decoupled from the button/icon components — see
// specs/material-tree/angular-parity.spec.ts's header), this example's own upstream template
// genuinely stacks \`matIconButton\` AND \`matTreeNodeToggle\` on the SAME \`<button>\`, with a real
// \`<mat-icon>\` child. \`qwik-cdk/tree\`'s own \`<CdkTreeNodeToggle>\` renders a bare button with no
// icon-button chrome (by design, see its own doc comment), and neither \`<MatIconButton>\` nor a
// toggle component can be nested inside the other (both host-render their own \`<button>\` root —
// nesting adds a wrapper element, failing DOM parity). \`TreeNodeToggleButton\` below composes the
// two at the CONSUMER level instead — reading the tree's own \`CDK_TREE_TOGGLE_STATE\` context
// directly (publicly exported from \`@angular-community/qwik-cdk/tree\`) the same way
// \`CdkTreeNodeToggle\` itself does — and renders it through the public \`<MatIconButton>\`, so no
// qwik-material/qwik-cdk change was needed for this example.
//
// \`<MatIcon>\` resolves ligature text via the registry-style default font-set class ladder
// (\`MatIconConfig.fontSet\`), not an explicit \`fontSet\` PROP (which would also render a
// \`data-mat-icon-namespace\` attribute upstream never sets for this un-bound \`<mat-icon
// class="mat-icon-rtl-mirror">\`). The Angular dev-app's OWN default is \`material-symbols-outlined\`
// (\`DevAppLayout.toggleM3\` → \`MatIconRegistry.setDefaultFontSetClass(...)\`, in effect since
// \`m3Enabled\` defaults to \`true\` — see \`src/dev-app/dev-app/dev-app-layout.ts\`), confirmed live
// against \`/qwik-parity/mat-icon/basic\`. \`src/qwik-cdk-dev-app/src/routes/mat-icon/layout.tsx\`
// already reproduces this for every \`/mat-icon/*\` scenario via a scoped
// \`useMatIconProvider({fontSet: 'material-symbols-outlined'})\` call — this is the first OTHER
// route tree to render a font-mode \`<MatIcon>\`, so the same call is made here too, scoped to
// just this component's own subtree.
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const FOOD_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];

/** \`<button matIconButton matTreeNodeToggle [attr.aria-label]="'Toggle ' + node.name">\` — see the
 *  file header for why this composes \`<MatIconButton>\` with the tree's own toggle state directly,
 *  rather than going through \`<CdkTreeNodeToggle>\`. */
const TreeNodeToggleButton = component$<{node: string; label: string}>(props => {
  const state = useContext(CDK_TREE_TOGGLE_STATE);
  const expanded = !!state.expanded[props.node];
  const key = props.node;

  return (
    <MatIconButton
      ariaLabel={\`Toggle \${props.label}\`}
      onClick$={$(() => {
        const next = !state.expanded[key];
        state.expanded[key] = next;
        state.activeKey.value = key;
        if (state.onExpandedChange) {
          void state.onExpandedChange(key, next, state.dataByKey.get(key));
        }
      })}
    >
      <MatIcon class="mat-icon-rtl-mirror">
        {expanded ? ' expand_more ' : ' chevron_right '}
      </MatIcon>
    </MatIconButton>
  );
});

function slug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

function buildNodes(data: FoodNode[]): CdkTreeNodeInput<FoodNode>[] {
  return data.map(node => {
    const key = slug(node.name);
    const hasChild = !!node.children && node.children.length > 0;
    if (!hasChild) {
      return {
        key,
        data: node,
        content: (
          <>
            <MatIconButton disabled />
            {\` \${node.name} \`}
          </>
        ),
      };
    }
    return {
      key,
      data: node,
      // NOT \`isExpandable: true\` — upstream's own template
      // (\`tree-flat-child-accessor-overview-example.html\`) never binds \`[isExpandable]\` at all
      // (confirmed live: Angular's real \`<mat-tree-node>\` here carries NO \`aria-expanded\`
      // attribute, even though the node genuinely has children and a working toggle — see
      // \`qwik-cdk/tree/flatten-tree.ts\`'s own doc comment: "must be set explicitly; never
      // inferred"). \`nodeToggle\` is set explicitly instead (it would otherwise default to
      // \`isExpandable\`'s value, i.e. \`false\`) to keep keyboard Enter/Space on the ROW itself
      // toggling — matching upstream's \`matTreeNodeToggle\` written on the \`<mat-tree-node>\` tag,
      // not just its inner button.
      nodeToggle: true,
      content: (
        <>
          <TreeNodeToggleButton node={key} label={node.name} />
          {\` \${node.name} \`}
        </>
      ),
      children: buildNodes(node.children!),
    };
  });
}

export default component$(() => {
  useMatIconProvider({fontSet: 'material-symbols-outlined'});
  return (
    <tree-flat-child-accessor-overview-example>
      <MatTree nodes={buildNodes(FOOD_DATA)} />
    </tree-flat-child-accessor-overview-example>
  );
});
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {$, component$, useContext} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@qwik.dev/core'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {CDK_TREE_TOGGLE_STATE, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> CdkTreeNodeInput} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-cdk/tree'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {MatIconButton} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/button'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {MatIcon, useMatIconProvider} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/icon'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {MatTree} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/tree'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// Qwik port of material.angular.dev's \`tree-flat-child-accessor-overview\` docs example — see</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// src/components-examples/material/tree/tree-flat-child-accessor-overview/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// tree-flat-child-accessor-overview-example.{ts,html}. Rendered unmodified by the Angular dev-app</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// at /qwik-parity/mat-tree/example (src/dev-app/qwik-parity/examples.ts). Host tag mirrors the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// example's own component selector (\`tree-flat-child-accessor-overview-example\`).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">//</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// Unlike every OTHER mat-tree parity scenario (which deliberately uses plain text \`[+]\`/\`[-]\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// toggle buttons to stay decoupled from the button/icon components — see</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// specs/material-tree/angular-parity.spec.ts's header), this example's own upstream template</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// genuinely stacks \`matIconButton\` AND \`matTreeNodeToggle\` on the SAME \`&#x3C;button>\`, with a real</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`&#x3C;mat-icon>\` child. \`qwik-cdk/tree\`'s own \`&#x3C;CdkTreeNodeToggle>\` renders a bare button with no</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// icon-button chrome (by design, see its own doc comment), and neither \`&#x3C;MatIconButton>\` nor a</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// toggle component can be nested inside the other (both host-render their own \`&#x3C;button>\` root —</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// nesting adds a wrapper element, failing DOM parity). \`TreeNodeToggleButton\` below composes the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// two at the CONSUMER level instead — reading the tree's own \`CDK_TREE_TOGGLE_STATE\` context</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// directly (publicly exported from \`@angular-community/qwik-cdk/tree\`) the same way</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`CdkTreeNodeToggle\` itself does — and renders it through the public \`&#x3C;MatIconButton>\`, so no</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// qwik-material/qwik-cdk change was needed for this example.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">//</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`&#x3C;MatIcon>\` resolves ligature text via the registry-style default font-set class ladder</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// (\`MatIconConfig.fontSet\`), not an explicit \`fontSet\` PROP (which would also render a</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`data-mat-icon-namespace\` attribute upstream never sets for this un-bound \`&#x3C;mat-icon</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// class="mat-icon-rtl-mirror">\`). The Angular dev-app's OWN default is \`material-symbols-outlined\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// (\`DevAppLayout.toggleM3\` → \`MatIconRegistry.setDefaultFontSetClass(...)\`, in effect since</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`m3Enabled\` defaults to \`true\` — see \`src/dev-app/dev-app/dev-app-layout.ts\`), confirmed live</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// against \`/qwik-parity/mat-icon/basic\`. \`src/qwik-cdk-dev-app/src/routes/mat-icon/layout.tsx\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// already reproduces this for every \`/mat-icon/*\` scenario via a scoped</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`useMatIconProvider({fontSet: 'material-symbols-outlined'})\` call — this is the first OTHER</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// route tree to render a font-mode \`&#x3C;MatIcon>\`, so the same call is made here too, scoped to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// just this component's own subtree.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> FoodNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">  name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">  children</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> FoodNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">[];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> FOOD_DATA</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> FoodNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Fruit'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    children: [{name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Apple'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}, {name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Banana'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}, {name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Fruit loops'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Vegetables'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    children: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Green'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        children: [{name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Broccoli'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}, {name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Brussels sprouts'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Orange'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        children: [{name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Pumpkins'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}, {name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'Carrots'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">/** \`&#x3C;button matIconButton matTreeNodeToggle [attr.aria-label]="'Toggle ' + node.name">\` — see the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> *  file header for why this composes \`&#x3C;MatIconButton>\` with the tree's own toggle state directly,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> *  rather than going through \`&#x3C;CdkTreeNodeToggle>\`. */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> TreeNodeToggleButton</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> component$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">&#x3C;{</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">node</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">; </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">props</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> state</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> useContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">CDK_TREE_TOGGLE_STATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> expanded</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> !!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">state.expanded[props.node];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> props.node;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatIconButton</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">      ariaLabel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">\`Toggle \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">props</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">label</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">      onClick$</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> next</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">state.expanded[key];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        state.expanded[key] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> next;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        state.activeKey.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> key;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (state.onExpandedChange) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">          void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> state.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">onExpandedChange</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(key, next, state.dataByKey.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(key));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      })}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    ></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatIcon</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"mat-icon-rtl-mirror"</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        {expanded </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> ' expand_more '</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> ' chevron_right '</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatIconButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> slug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> name.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">toLowerCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">a-z0-9]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'-'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> buildNodes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> FoodNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">[])</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> CdkTreeNodeInput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">&#x3C;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">FoodNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>[] {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> data.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70">node</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> slug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(node.name);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> hasChild</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> !!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">node.children </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">&#x26;&#x26;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> node.children.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> ></span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">hasChild) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        key,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        data: node,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">        content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          &#x3C;></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">            &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatIconButton</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> disabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> /></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">            {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">\` \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">node</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">} \`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          &#x3C;/></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        ),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      key,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      data: node,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">      // NOT \`isExpandable: true\` — upstream's own template</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">      // (\`tree-flat-child-accessor-overview-example.html\`) never binds \`[isExpandable]\` at all</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">      // (confirmed live: Angular's real \`&#x3C;mat-tree-node>\` here carries NO \`aria-expanded\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">      // attribute, even though the node genuinely has children and a working toggle — see</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">      // \`qwik-cdk/tree/flatten-tree.ts\`'s own doc comment: "must be set explicitly; never</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">      // inferred"). \`nodeToggle\` is set explicitly instead (it would otherwise default to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">      // \`isExpandable\`'s value, i.e. \`false\`) to keep keyboard Enter/Space on the ROW itself</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">      // toggling — matching upstream's \`matTreeNodeToggle\` written on the \`&#x3C;mat-tree-node>\` tag,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">      // not just its inner button.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      nodeToggle: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">      content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">TreeNodeToggleButton</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> node</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{key} </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{node.name} /></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">          {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">\` \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">node</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">} \`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;/></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      ),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      children: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">buildNodes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(node.children</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> component$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">  useMatIconProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">({fontSet: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'material-symbols-outlined'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">tree-flat-child-accessor-overview-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatTree</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> nodes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">buildNodes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">FOOD_DATA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">)} /></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">tree-flat-child-accessor-overview-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"></span></code></pre>`}],r={pkg:e,route:t,files:n};export{r as default,n as files,e as pkg,t as route};
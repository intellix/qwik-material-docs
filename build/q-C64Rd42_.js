var e=`tree`,t=`tree-nested-child-accessor-overview`,n=[{name:`index.tsx`,lang:`tsx`,code:`import {$, component$, useContext} from '@qwik.dev/core';
import {CDK_TREE_TOGGLE_STATE, type CdkTreeNodeInput} from '@angular-community/qwik-cdk/tree';
import {MatIconButton} from '@angular-community/qwik-material/button';
import {MatIcon, useMatIconProvider} from '@angular-community/qwik-material/icon';
import {MatTree} from '@angular-community/qwik-material/tree';
import './tree-nested-child-accessor-overview-example.css';

// Qwik port of material.angular.dev's \`tree-nested-child-accessor-overview\` docs example — see
// src/components-examples/material/tree/tree-nested-child-accessor-overview/
// tree-nested-child-accessor-overview-example.{ts,html}. Rendered unmodified by the Angular
// dev-app at /qwik-parity/examples/tree-nested-child-accessor-overview
// (src/dev-app/qwik-parity/examples.ts' generic \`examples/:exampleId\` route). Host tag mirrors
// the example's own component selector (\`tree-nested-child-accessor-overview-example\`). Same
// \`FOOD_DATA\`/toggle-button composition as the already-ported \`tree-flat-child-accessor-overview\`
// (\`qwik-material-examples/tree/example\`) — see that file's own header comment for why
// \`TreeNodeToggleButton\` composes \`<MatIconButton>\` directly against the tree's own
// \`CDK_TREE_TOGGLE_STATE\` context instead of going through \`<MatTreeNodeToggle>\` (which renders a
// bare, unstyled toggle element by design, not an icon-button). Duplicated here rather than
// shared, matching upstream's OWN two example files, which duplicate this data/logic verbatim
// rather than sharing a module.
//
// Unlike the flat example's leaf template (which pads itself with a disabled \`<button
// matIconButton>\` placeholder so the label aligns with expandable rows), the REAL upstream nested
// leaf template (\`tree-nested-child-accessor-overview-example.html\`) has no such button — nested
// trees get their indentation from CSS (\`.mat-nested-tree-node div[role=group]\`'s \`padding-left\`,
// in this example's own \`.css\`), not a spacer element. \`qwik-material/tree\`'s \`tree-prebuilt.scss\`
// doesn't ship that particular \`.example-tree\`-scoped padding (it's example-specific styling, not
// part of the component itself) — out of scope for DOM-parity purposes (\`angular-parity.spec.ts\`
// only compares the actual element tree/attributes, not page layout/visual padding).
//
// The real upstream template also toggles the group wrapper's visibility via a STYLESHEET CLASS
// (\`[class.example-tree-invisible]="!tree.isExpanded(node)"\`, defined in this example's own
// \`.css\`) rather than an inline \`[style.display]\` binding — unlike every OTHER mat-tree parity
// scenario in this port (\`src/dev-app/qwik-parity/tree.ts\`'s own nested mirrors, which deliberately
// use the style-binding form instead). \`<MatTree>\`'s \`nestedHiddenClass\` prop (added for this
// example) switches it to the class-toggle form — see that prop's own doc comment.
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
 *  rather than going through \`<MatTreeNodeToggle>\`. */
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
      return {key, data: node, content: node.name};
    }
    return {
      key,
      data: node,
      // NOT \`isExpandable: true\` — upstream's own template
      // (\`tree-nested-child-accessor-overview-example.html\`) never binds \`[isExpandable]\` either
      // (same finding as the flat example — Angular's real \`_isExpandable()\` falls back to the
      // unbound \`[isExpandable]\` input, \`false\`, for a \`childrenAccessor\` tree regardless of
      // variant, so the real \`<mat-nested-tree-node>\` here carries NO \`aria-expanded\` attribute).
      // \`MatTree\`'s nested rendering decides whether to render the children/outlet wrapper from
      // whether this node actually HAS children, independently of this flag — see
      // \`mat-tree.tsx\`'s \`renderNestedNode\` comment and \`qwik-material/tree/SYNC.md\`.
      // \`nodeToggle\` is set explicitly (it would otherwise default to \`isExpandable\`'s value,
      // i.e. \`false\`) to keep keyboard Enter/Space on the ROW itself toggling — matching
      // upstream's \`matTreeNodeToggle\` written on the \`<mat-nested-tree-node>\` tag itself, not
      // just its inner button.
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
    <tree-nested-child-accessor-overview-example>
      <>
        <MatTree
          variant="nested"
          nodes={buildNodes(FOOD_DATA)}
          class="example-tree"
          nestedHiddenClass="example-tree-invisible"
        />
      </>
    </tree-nested-child-accessor-overview-example>
  );
});
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {$, component$, useContext} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@qwik.dev/core'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {CDK_TREE_TOGGLE_STATE, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> CdkTreeNodeInput} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-cdk/tree'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {MatIconButton} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/button'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {MatIcon, useMatIconProvider} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/icon'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {MatTree} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/tree'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> './tree-nested-child-accessor-overview-example.css'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// Qwik port of material.angular.dev's \`tree-nested-child-accessor-overview\` docs example — see</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// src/components-examples/material/tree/tree-nested-child-accessor-overview/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// tree-nested-child-accessor-overview-example.{ts,html}. Rendered unmodified by the Angular</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// dev-app at /qwik-parity/examples/tree-nested-child-accessor-overview</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// (src/dev-app/qwik-parity/examples.ts' generic \`examples/:exampleId\` route). Host tag mirrors</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// the example's own component selector (\`tree-nested-child-accessor-overview-example\`). Same</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`FOOD_DATA\`/toggle-button composition as the already-ported \`tree-flat-child-accessor-overview\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// (\`qwik-material-examples/tree/example\`) — see that file's own header comment for why</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`TreeNodeToggleButton\` composes \`&#x3C;MatIconButton>\` directly against the tree's own</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`CDK_TREE_TOGGLE_STATE\` context instead of going through \`&#x3C;MatTreeNodeToggle>\` (which renders a</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// bare, unstyled toggle element by design, not an icon-button). Duplicated here rather than</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// shared, matching upstream's OWN two example files, which duplicate this data/logic verbatim</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// rather than sharing a module.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">//</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// Unlike the flat example's leaf template (which pads itself with a disabled \`&#x3C;button</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// matIconButton>\` placeholder so the label aligns with expandable rows), the REAL upstream nested</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// leaf template (\`tree-nested-child-accessor-overview-example.html\`) has no such button — nested</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// trees get their indentation from CSS (\`.mat-nested-tree-node div[role=group]\`'s \`padding-left\`,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// in this example's own \`.css\`), not a spacer element. \`qwik-material/tree\`'s \`tree-prebuilt.scss\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// doesn't ship that particular \`.example-tree\`-scoped padding (it's example-specific styling, not</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// part of the component itself) — out of scope for DOM-parity purposes (\`angular-parity.spec.ts\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// only compares the actual element tree/attributes, not page layout/visual padding).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">//</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// The real upstream template also toggles the group wrapper's visibility via a STYLESHEET CLASS</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// (\`[class.example-tree-invisible]="!tree.isExpanded(node)"\`, defined in this example's own</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`.css\`) rather than an inline \`[style.display]\` binding — unlike every OTHER mat-tree parity</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// scenario in this port (\`src/dev-app/qwik-parity/tree.ts\`'s own nested mirrors, which deliberately</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// use the style-binding form instead). \`&#x3C;MatTree>\`'s \`nestedHiddenClass\` prop (added for this</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// example) switches it to the class-toggle form — see that prop's own doc comment.</span></span>
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
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> *  rather than going through \`&#x3C;MatTreeNodeToggle>\`. */</span></span>
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
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {key, data: node, content: node.name};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      key,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      data: node,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">      // NOT \`isExpandable: true\` — upstream's own template</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">      // (\`tree-nested-child-accessor-overview-example.html\`) never binds \`[isExpandable]\` either</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">      // (same finding as the flat example — Angular's real \`_isExpandable()\` falls back to the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">      // unbound \`[isExpandable]\` input, \`false\`, for a \`childrenAccessor\` tree regardless of</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">      // variant, so the real \`&#x3C;mat-nested-tree-node>\` here carries NO \`aria-expanded\` attribute).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">      // \`MatTree\`'s nested rendering decides whether to render the children/outlet wrapper from</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">      // whether this node actually HAS children, independently of this flag — see</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">      // \`mat-tree.tsx\`'s \`renderNestedNode\` comment and \`qwik-material/tree/SYNC.md\`.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">      // \`nodeToggle\` is set explicitly (it would otherwise default to \`isExpandable\`'s value,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">      // i.e. \`false\`) to keep keyboard Enter/Space on the ROW itself toggling — matching</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">      // upstream's \`matTreeNodeToggle\` written on the \`&#x3C;mat-nested-tree-node>\` tag itself, not</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">      // just its inner button.</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">tree-nested-child-accessor-overview-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatTree</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          variant</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"nested"</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          nodes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">buildNodes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">FOOD_DATA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">)}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"example-tree"</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">          nestedHiddenClass</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">"example-tree-invisible"</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        /></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;/></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">tree-nested-child-accessor-overview-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"></span></code></pre>`},{name:`tree-nested-child-accessor-overview-example.css`,lang:`css`,code:`/* Copied from src/components-examples/material/tree/tree-nested-child-accessor-overview/
   tree-nested-child-accessor-overview-example.css, prefixed with this route's own host tag — see
   table/table-sorting/table-sorting-example.css's header comment for why a plain CSS import
   needs this (no component-scoped CSS encapsulation here). \`.example-tree-invisible\` is also
   passed to \`<MatTree nestedHiddenClass="example-tree-invisible">\` — see that example's own
   \`index.tsx\` header comment. */
tree-nested-child-accessor-overview-example .example-tree-invisible {
  display: none;
}

tree-nested-child-accessor-overview-example .example-tree ul,
tree-nested-child-accessor-overview-example .example-tree li {
  margin-top: 0;
  margin-bottom: 0;
  list-style-type: none;
}

/*
 * This padding sets alignment of the nested nodes.
 */
tree-nested-child-accessor-overview-example .example-tree .mat-nested-tree-node div[role='group'] {
  padding-left: 40px;
}

/*
 * Padding for leaf nodes.
 * Leaf nodes need to have padding so as to align with other non-leaf nodes
 * under the same parent.
 */
tree-nested-child-accessor-overview-example .example-tree div[role='group'] > .mat-nested-tree-node {
  padding-left: 40px;
}
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">/* Copied from src/components-examples/material/tree/tree-nested-child-accessor-overview/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">   tree-nested-child-accessor-overview-example.css, prefixed with this route's own host tag — see</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">   table/table-sorting/table-sorting-example.css's header comment for why a plain CSS import</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">   needs this (no component-scoped CSS encapsulation here). \`.example-tree-invisible\` is also</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">   passed to \`&#x3C;MatTree nestedHiddenClass="example-tree-invisible">\` — see that example's own</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">   \`index.tsx\` header comment. */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">tree-nested-child-accessor-overview-example</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> .example-tree-invisible</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">tree-nested-child-accessor-overview-example</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> .example-tree</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D"> ul</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">tree-nested-child-accessor-overview-example</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> .example-tree</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D"> li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  margin-top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  margin-bottom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  list-style-type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * This padding sets alignment of the nested nodes.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">tree-nested-child-accessor-overview-example</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> .example-tree</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> .mat-nested-tree-node</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D"> div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">role</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'group'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">] {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  padding-left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">40</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * Padding for leaf nodes.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * Leaf nodes need to have padding so as to align with other non-leaf nodes</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> * under the same parent.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D"> */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">tree-nested-child-accessor-overview-example</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> .example-tree</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D"> div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">role</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">'group'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">></span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> .mat-nested-tree-node</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">  padding-left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">40</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span></code></pre>`}],r={pkg:e,route:t,files:n};export{r as default,n as files,e as pkg,t as route};
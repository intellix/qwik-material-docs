var e=`menu`,t=`menu-nested`,n=[{name:`index.tsx`,lang:`tsx`,code:`import {$, component$} from '@qwik.dev/core';
import {MatButton} from '@angular-community/qwik-material/button';
import {
  MatMenu,
  MatMenuItem,
  createMatMenu,
  useMatMenuTrigger,
} from '@angular-community/qwik-material/menu';

// Qwik port of material.angular.dev's \`menu-nested\` docs example — see
// src/components-examples/material/menu/menu-nested/menu-nested-example.{ts,html}. Rendered
// unmodified by the Angular dev-app at /qwik-parity/examples/menu-nested (the generic
// \`examples/:exampleId\` route). The root trigger stacks \`matButton\` AND \`[matMenuTriggerFor]\`
// (directive-hooks pattern, same as \`menu-overview\`); each sub-menu-opening item uses
// \`<MatMenuItem menu={...}>\` directly (its own built-in nested-trigger prop — see
// src/qwik-cdk-dev-app/src/routes/mat-menu/nested/index.tsx for the same pattern).

export default component$(() => {
  const fish = createMatMenu({
    content$: $(() => (
      <>
        <MatMenuItem>Baikal oilfish</MatMenuItem>
        <MatMenuItem>Bala shark</MatMenuItem>
        <MatMenuItem>Ballan wrasse</MatMenuItem>
        <MatMenuItem>Bamboo shark</MatMenuItem>
        <MatMenuItem>Banded killifish</MatMenuItem>
      </>
    )),
  });
  const amphibians = createMatMenu({
    content$: $(() => (
      <>
        <MatMenuItem>Sonoran desert toad</MatMenuItem>
        <MatMenuItem>Western toad</MatMenuItem>
        <MatMenuItem>Arroyo toad</MatMenuItem>
        <MatMenuItem>Yosemite toad</MatMenuItem>
      </>
    )),
  });
  const reptiles = createMatMenu({
    content$: $(() => (
      <>
        <MatMenuItem>Banded Day Gecko</MatMenuItem>
        <MatMenuItem>Banded Gila Monster</MatMenuItem>
        <MatMenuItem>Black Tree Monitor</MatMenuItem>
        <MatMenuItem>Blue Spiny Lizard</MatMenuItem>
        <MatMenuItem disabled>Velociraptor</MatMenuItem>
      </>
    )),
  });
  const vertebrates = createMatMenu({
    content$: $(() => (
      <>
        <MatMenuItem menu={fish}>Fishes</MatMenuItem>
        <MatMenuItem menu={amphibians}>Amphibians</MatMenuItem>
        <MatMenuItem menu={reptiles}>Reptiles</MatMenuItem>
        <MatMenuItem>Birds</MatMenuItem>
        <MatMenuItem>Mammals</MatMenuItem>
      </>
    )),
  });
  const invertebrates = createMatMenu({
    content$: $(() => (
      <>
        <MatMenuItem>Insects</MatMenuItem>
        <MatMenuItem>Molluscs</MatMenuItem>
        <MatMenuItem>Crustaceans</MatMenuItem>
        <MatMenuItem>Corals</MatMenuItem>
        <MatMenuItem>Arachnids</MatMenuItem>
        <MatMenuItem>Velvet worms</MatMenuItem>
        <MatMenuItem>Horseshoe crabs</MatMenuItem>
      </>
    )),
  });
  const animals = createMatMenu({
    content$: $(() => (
      <>
        <MatMenuItem menu={vertebrates}>Vertebrates</MatMenuItem>
        <MatMenuItem menu={invertebrates}>Invertebrates</MatMenuItem>
      </>
    )),
  });

  const trigger = useMatMenuTrigger({menu: animals});

  return (
    <menu-nested-example>
      <MatButton {...trigger.hostProps}>Animal index</MatButton>
      <MatMenu />
      <MatMenu />
      <MatMenu />
      <MatMenu />
      <MatMenu />
      <MatMenu />
    </menu-nested-example>
  );
});
`,html:`<pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {$, component$} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@qwik.dev/core'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {MatButton} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/button'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  MatMenu,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  MatMenuItem,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  createMatMenu,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  useMatMenuTrigger,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF"> '@angular-community/qwik-material/menu'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// Qwik port of material.angular.dev's \`menu-nested\` docs example — see</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// src/components-examples/material/menu/menu-nested/menu-nested-example.{ts,html}. Rendered</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// unmodified by the Angular dev-app at /qwik-parity/examples/menu-nested (the generic</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`examples/:exampleId\` route). The root trigger stacks \`matButton\` AND \`[matMenuTriggerFor]\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// (directive-hooks pattern, same as \`menu-overview\`); each sub-menu-opening item uses</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// \`&#x3C;MatMenuItem menu={...}>\` directly (its own built-in nested-trigger prop — see</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">// src/qwik-cdk-dev-app/src/routes/mat-menu/nested/index.tsx for the same pattern).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> component$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> fish</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> createMatMenu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    content$: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Baikal oilfish&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Bala shark&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Ballan wrasse&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Bamboo shark&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Banded killifish&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;/></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    )),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  });</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> amphibians</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> createMatMenu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    content$: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Sonoran desert toad&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Western toad&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Arroyo toad&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Yosemite toad&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;/></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    )),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  });</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> reptiles</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> createMatMenu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    content$: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Banded Day Gecko&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Banded Gila Monster&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Black Tree Monitor&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Blue Spiny Lizard&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> disabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Velociraptor&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;/></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    )),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  });</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> vertebrates</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> createMatMenu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    content$: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> menu</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{fish}>Fishes&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> menu</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{amphibians}>Amphibians&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> menu</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{reptiles}>Reptiles&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Birds&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Mammals&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;/></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    )),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  });</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> invertebrates</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> createMatMenu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    content$: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Insects&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Molluscs&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Crustaceans&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Corals&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Arachnids&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Velvet worms&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">>Horseshoe crabs&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;/></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    )),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  });</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> animals</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> createMatMenu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    content$: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=></span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> menu</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{vertebrates}>Vertebrates&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> menu</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">{invertebrates}>Invertebrates&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;/></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    )),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> trigger</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> useMatMenuTrigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">({menu: animals});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">menu-nested-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">trigger.hostProps}>Animal index&#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> /></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> /></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> /></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> /></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> /></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">      &#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">MatMenu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> /></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    &#x3C;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">menu-nested-example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">});</span></span>
<span class="line"></span></code></pre>`}],r={pkg:e,route:t,files:n};export{r as default,n as files,e as pkg,t as route};
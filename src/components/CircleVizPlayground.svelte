<script>
  import CircleViz from "./CircleViz.svelte";
  import Button from "./Button.svelte";
  import Input from './Input.svelte'

  export let themeValue = {mode: 'dark'}

  let graphData = [
    {
      name: "Longest",
      value: 200
    },
    {
      name: "Longest",
      value: 200
    },
    {
      name: "Longest",
      value: 200
    },
    {
      name: "Longest",
      value: 200
    }
  ];

  const addNode = () => {
    graphData = [
      ...graphData,
      {
        name: "Longest",
        value: 200
      }
    ];
  };
</script>

<div>
  <Button on:click={addNode} {themeValue}>Add Node</Button>
  {#each graphData as inputVal}
    <Input bind:value={inputVal.value} type="number" />
  {/each}
  <CircleViz bind:graphData />
</div>

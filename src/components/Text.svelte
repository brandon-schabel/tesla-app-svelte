<script>
  export let elType = 'p'
  export let themeValue = {mode: 'dark'}
</script>


<style>
  .dark {
    color: white;
  }

  .light {
    color: black;
  }
</style>


{#if elType === 'p'}
  <p class="{themeValue.mode}"><slot></slot></p>
{:else if elType === 'h1'}
  <h1 class="{themeValue.mode}"><slot></slot></h1>
  {:else if elType === 'h2'}
  <h2 class="{themeValue.mode}"><slot></slot></h2>
  {:else if elType === 'h3'}
  <h3 class="{themeValue.mode}"><slot></slot></h3>
  {:else if elType === 'h4'}
  <h4 class="{themeValue.mode}"><slot></slot></h4>
  {:else if elType === 'h5'}
  <h5 class="{themeValue.mode}"><slot></slot></h5>
  {:else if elType === 'h6'}
  <h6 class="{themeValue.mode}"><slot></slot></h6>
{:else if elType === 'title'}
  <title class="{themeValue.mode}"><slot></slot></title>
  {:else}
    <p class="{themeValue.mode}"><slot></slot></p>
{/if}

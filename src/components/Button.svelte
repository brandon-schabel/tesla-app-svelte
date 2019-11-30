<script>
  export let themeValue = { mode: "dark" };
</script>

<style>
  button {
    border: none;
    border-radius: 30px;
    width: 150px;
    height: 37.5px;
  }

  .theme-dark {
    transition: 0.5s ease;
    background-color: white;
    color: black;
  }

  .theme-light {
    transition: 0.5s ease;
    background-color: black;
    color: white;
  }

  @media (min-width: 768px) {
    button {
      width: 200px;
      height: 50px;
    }
  }

  @media (min-width: 992px) {
    button {
      width: 220px;
      height: 55px;
    }
  }
</style>

<button class="theme-{themeValue.mode}" on:click>
<!--  slot tells svelte where to put children nodes  -->
  <slot></slot>
</button>

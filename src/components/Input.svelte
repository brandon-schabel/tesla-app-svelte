<script>
  import { theme } from "../stores.js";
  import { onDestroy } from "svelte";

  export let value;
  export let name = "";
  // export const type = "text";

  let themeValue;

  const unsubscribeTheme = theme.subscribe(theme => {
    themeValue = theme;
  });

  onDestroy(unsubscribeTheme);
</script>

<style>
  input {
    border: none;
    border-radius: 15px;
    width: 150px;
    height: 37.5px;
    padding-left: 15px;
    margin: 2px;
  }

  .dark {
    transition: 0.5s ease;
    background-color: rgb(199, 199, 199);
    color: black;
  }

  .light {
    transition: 0.5s ease;
    background-color: rgb(97, 97, 97);
    color: white;
  }

  @media (min-width: 768px) {
    input {
      width: 200px;
      height: 50px;
    }
  }

  @media (min-width: 992px) {
    input {
      width: 220px;
      height: 55px;
    }
  }
</style>

<input class={themeValue.mode} bind:value={value} {name} type="text"/>

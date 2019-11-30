<script>
	import Nav from '../components/Nav.svelte';
	import { onDestroy } from "svelte";
	import {theme} from '../stores'

	let themeValue;

	const unsubscribeTheme = theme.subscribe(theme => {
		themeValue = theme;
	});

	onDestroy(unsubscribeTheme);

	export let segment;
</script>

<style>
	div {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.app-wrapper {
		min-height: 100vh;
	}

	.app-wrapper-light {
		background-color: white;
	}

	.app-wrapper-dark {
		background-color: black;
	}

	.app-content-wrapper-light {
		background-color: white;
	}
	.app-content-wrapper-dark {

		background-color: black;
	}

</style>

<Nav {segment} {themeValue}/>

<main class="app-wrapper app-wrapper-{themeValue.mode}">
	<div class="app-content-wrapper-{themeValue.mode}">
		<slot></slot>
	</div>
</main>

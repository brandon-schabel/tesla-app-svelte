<script>
	import CircleVizPlayground from "../components/CircleVizPlayground.svelte"
	import Button from "../components/Button.svelte"
	import { onDestroy } from "svelte"
	import { theme } from '../stores'
	import Text from "../components/Text.svelte"
	import ToggleSwitch from "../components/ToggleSwitch.svelte"

	let themeValue
	let checked = false;

	$: console.log(checked)

	const unsubscribeTheme = theme.subscribe(theme => {
		themeValue = theme
	})

	onDestroy(unsubscribeTheme)
</script>
<style>
	:global(body) {
		margin:0;
		padding: 0;
	}

	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<Text elType={'h2'} {themeValue}>Yo Waddup</Text>
<Button on:click={theme.toggleTheme(themeValue)} {themeValue}>Test</Button>
<ToggleSwitch  {themeValue} bind:checked={checked} />
<CircleVizPlayground {themeValue}/>

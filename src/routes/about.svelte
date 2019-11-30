<script>
	import {onDestroy} from 'svelte'
	import Text from "../components/Text.svelte"
	import {theme} from '../stores'

	let themeValue

	const unsubscribeTheme = theme.subscribe(theme => {
		themeValue = theme
	})

	onDestroy(unsubscribeTheme)
</script>
<svelte:head>
	<title>About</title>
</svelte:head>

<Text {themeValue} elType="h1" >About this site</Text>

<Text {themeValue} >This is the 'about' page. There's not much here.</Text>

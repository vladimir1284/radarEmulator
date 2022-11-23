<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	//export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	import Pump from '$lib/indicators/Pump.svelte';
	import Light from '$lib/indicators/Light.svelte';
	import Pir from '$lib/indicators/Pir.svelte';
	import LDR from '$lib/indicators/LDR.svelte';
	import UpperTank from '$lib/indicators/UpperTank.svelte';
	import LowerTank from '$lib/indicators/LowerTank.svelte';

	import {get_status} from '$lib/comm.ts';

	let light_value: boolean = false;
	let pump_state = 'IDLE';
	let pumping = false;
	let upperLevel = 60;
	let lowerLevel = 60;

	let socket: WebSocket;

	function parseResonse(json: string) {
		console.log(json);
	}

	onMount(() => {
		get_status('get_data', parseResonse);
	});

	// var intervalID = setInterval(get_status('get_data', parseResonse), 2000);

	// // Test
	// const gen_pump = test_pump();
	// const start = setInterval(() => {
	//     light_value = !light_value;
	//     upperLevel = Math.round(100*Math.random());
	//     lowerLevel = Math.round(100*Math.random());
	//     gen_pump.next();
	// }, 3000);
	// function* test_pump(){
	//     while(true){
	//         pump_state = 'IDLE';
	//         pumping = false;
	//         yield 0;
	//         pump_state = 'PUMPING';
	//         pumping = true;
	//         yield 1;
	//         pump_state = 'WAIT';
	//         pumping = false;
	//         yield 2;
	//         pump_state = 'PUMPING';
	//         pumping = true;
	//         yield 3;
	//         pump_state = 'ERROR';
	//         pumping = false;
	//         yield 4;
	//     }
	// }
</script>

<svelte:head>
	<title>Taller</title>
	<meta
		name="description"
		content="Esta es la interfaz que gestiona el bombeo de agua y la luz del taller."
	/>
</svelte:head>

<section>
	<div class="grid-container">
		<div class="grid-item">
			<UpperTank id="up" level={upperLevel} min_level={50} capacity={600} />
		</div>
		<div class="grid-item"><Light id="taller" state={!light_value} /></div>
		<div class="grid-item"><Pump state={pump_state} {pumping} /></div>
		<div class="grid-item"><Pir id="sala" state={light_value} /></div>
		<div class="grid-item">
			<LowerTank id="low" level={lowerLevel} min_level={15} capacity={200} />
		</div>
		<div class="grid-item"><LDR id="saleta" luminosity={lowerLevel} /></div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
	.grid-container {
		display: grid;
		grid-template-columns: auto auto;
		padding: 10px;
	}
	.grid-item {
		padding: 20px;
	}
</style>

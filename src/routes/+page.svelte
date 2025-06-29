<script lang="ts">
	import '../app.css';
	import Layout from '$lib/Layout.svelte';
	import { getData } from '../db';
	const { data } = $props();
	let cards: { i: number; x: number; y: number }[] = $state([]);

	$effect(() => {
		const getExtData = async () => {
			const res = await getData('/todos');
					console.log(res)
		};
		getExtData();

	});

	function addCard(e: MouseEvent) {
		cards = [...cards, { x: e.clientX, y: e.clientY, i: cards.length + 1 }];
	}
</script>

<svelte:window on:dblclick={addCard} />

<main>
	<Layout {cards} />
</main>

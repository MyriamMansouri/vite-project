<script lang="ts">
	import Card from './Card.svelte';
	import { Title } from '.';

	let { cards }: { cards: { i: number; x: number; y: number; text?: string }[] } = $props();
	console.log('cards', cards);
	// onMount(async () => {
	//   await configureClient();
	//  });
</script>

<div class="relative mx-auto h-screen w-screen p-4">
	<Title>Double-click anywhere to create a new note</Title>
	<div class="absolute right-4 top-4 flex gap-2">
		<button id="btn-login" disabled onclick={() => console.log('login()')}>Log in</button>
		<button id="btn-logout" class="ml-2" disabled onclick={() => console.log('logout()')}
			>Log out</button
		>
	</div>
	<div id="card-layout">
		{#each cards as card}
			<Card text={card.text} x={card.x} y={card.y} />
		{/each}
	</div>
</div>

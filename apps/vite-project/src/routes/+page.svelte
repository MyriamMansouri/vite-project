<script lang="ts">
	import '../app.css';
	import { Layout } from '@repo/ui';
	import { fetchGraphQLApi } from '../db';
	const { data } = $props();
	let cards: { i: number; x: number; y: number }[] = $state([]);
	let posts: { id: number; title: string }[] = $state([]);

	$effect(() => {
		const getExtData = async () => {
			try {
				const res = await fetchGraphQLApi();
				// Accéder aux posts depuis la réponse GraphQL
				if (res?.data?.posts) {
					posts = res.data.posts;
				}
			} catch (error) {
				console.error('Error fetching data:', error);
			}
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

	<section class="posts">
		<h2>Posts from GraphQL API</h2>
		{#each posts as post}
			<article>
				<h3>{post.title}</h3>
				<p>ID: {post.id}</p>
			</article>
		{/each}
		{#if posts.length === 0}
			<p>Aucun post trouvé</p>
		{/if}
	</section>
</main>

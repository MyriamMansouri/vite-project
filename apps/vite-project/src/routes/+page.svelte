<script lang="ts">
	import '../app.css';
	import { Layout } from '@repo/ui';
	import { fetchGraphQLApi } from '../db';
	let cards: { i: number; x: number; y: number; text?: string }[] = $state([]);
	let posts: { id: number; title: string }[] = $state([]);

	$effect(() => {
		const getExtData = async () => {
			try {
				const res = await fetchGraphQLApi();
				// Accéder aux posts depuis la réponse GraphQL
				if (res?.data?.posts) {
					posts = res.data.posts;
					// Ajouter une card pour chaque post qui existe
					if (posts.length > 0) {
						posts.forEach((post) => {
							const newCard = {
								i: cards.length + 1,
								x: Math.random() * window.innerWidth,
								y: Math.random() * window.innerHeight,
								text: post.title
							};
							cards = [...cards, newCard];
						});
					}
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
</main>

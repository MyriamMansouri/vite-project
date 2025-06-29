<script lang="ts">
  import Card from './Card.svelte';
  import Title from './Title.svelte';
  import { onMount } from 'svelte';
  import { configureClient, login, logout } from './auth';

  let { cards }: { cards: { i: number; x: number; y: number }[] } = $props();
  onMount(async () => {
    await configureClient();
  });
</script>

<div class="h-screen w-screen mx-auto p-4 relative">
  <Title>Double-click anywhere to create a new note</Title>
    <div class="absolute top-4 right-4 flex gap-2">
    <button id="btn-login" disabled onclick={() => login()}>Log in</button>
    <button id="btn-logout" class="ml-2" disabled onclick={() => logout()}>Log out</button>
  </div>
  <div id="card-layout">
    {#each cards as card}
      <Card text={cards.length} x={card.x} y={card.y} />
    {/each}
  </div>
</div>

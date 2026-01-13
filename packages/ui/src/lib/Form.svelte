<script lang="ts">
	let { text } = $props();
</script>

<form class="h-full text-3xl">
	<textarea class="h-full w-full bg-transparent p-6 focus-visible:outline-none" value={text}
	></textarea>
</form>

<script lang="ts">
	import { randomOkLCHColor } from '../helpers/randomColor';
	import { Form } from '.';

	let { text, x, y } = $props();
	let card = $state(undefined);
	let realX = $state(x);
	let realY = $state(y);
	let initialDiffX = $state(0);
	let initialDiffY = $state(0);

	let color1 = randomOkLCHColor();
	let color2 = randomOkLCHColor();
	let textDecoration = $derived(
		`linear-gradient(to bottom left in oklab, oklch(55% 0.${color1[1]} 350) 0%, oklch(95% 0.${color2[1]} 95) 100%)`
	);

	function dragMouseDown(e: MouseEvent) {
		const elem = document.getElementById('card-layout');
		elem?.insertBefore(card, elem.lastChild);
		initialDiffX = card?.offsetLeft - e.clientX;
		initialDiffY = card?.offsetTop - e.clientY;
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
	}

	function elementDrag(e: MouseEvent) {
		realX = e.clientX + initialDiffX;
		realY = e.clientY + initialDiffY;
	}

	function closeDragElement() {
		document.onmouseup = null;
		document.onmousemove = null;
	}
</script>

<div
	class="absolute z-0 flex h-64 w-64 items-center justify-center space-y-10 rounded-2xl bg-white font-bold text-white shadow-2xl"
	style="top:{realY}px; left:{realX}px"
	style:background={textDecoration}
	onmousedown={dragMouseDown}
	role="button"
	tabindex="0"
	bind:this={card}
>
	<Form {text} />
</div>

<script lang="ts">
	const images = Array.from({ length: 13 }, (_, i) => {
		const num = String(i + 1).padStart(2, '0');
		return `/images/gallery-${num}.jpeg`;
	});

	let activeImage: string | null = null;

	function openImage(src: string) {
		activeImage = src;
	}

	function closeImage() {
		activeImage = null;
	}
</script>

<svelte:window on:keydown={(e) => { if (e.key === 'Escape') closeImage(); }} />

<div class="content-div">
	<div class="flex">
		<h1 class="content-heading">Programms</h1>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
		{#each images as src}
			<button
				type="button"
				on:click={() => openImage(src)}
				class="flex items-center justify-center overflow-hidden rounded-lg bg-primary-900/40 aspect-[3/4] cursor-zoom-in"
			>
				<img {src} alt="Nameleon program" class="object-contain w-full h-full" />
			</button>
		{/each}
	</div>
</div>

{#if activeImage}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 cursor-zoom-out"
		on:click={closeImage}
		on:keydown={(e) => { if (e.key === 'Escape') closeImage(); }}
	>
		<img
			src={activeImage}
			alt="Nameleon program"
			class="w-full max-h-[85vh] object-contain"
		/>
	</div>
{/if}

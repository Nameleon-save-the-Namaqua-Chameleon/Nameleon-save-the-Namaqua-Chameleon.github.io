<script lang="ts">
	const user = 'nameleonwildlifeorg128';
	const domain = 'gmail.com';
</script>

<footer class="bg-surface-800 text-surface-50 p-4 border-t border-surface-500/30">
	<div class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 hover">
		<div class="text-center md:text-left">
			<p class="font-bold text-lg">Nameleon Foundation</p>
            <p class="text-sm opacity-70">Conservation through Education</p>
		</div>
		<div class="flex flex-col md:flex-row gap-4 md:gap-8 text-center italic">
			<a
				href="mailto:{user}@{domain}"
				class="hover:text-primary-800 transition-colors"
			>
				{user}@{domain}
			</a>
			<a href="tel:+264818410398" class="hover:text-primary-800 transition-colors">
				+264 818 410 398
			</a>
		</div>
		<div class="text-sm opacity-50">
			&copy; {new Date().getFullYear()} Nameleon Foundation. All rights reserved.
		</div>
	</div>
</footer>

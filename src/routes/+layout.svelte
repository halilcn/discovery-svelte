<script>
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex flex-col gap-4">
	<div class="w-full flex justify-center gap-4">
		<a href="/">Home</a>
		<a href="/list">List</a>
		<a href="/about">About</a>
	</div>
	<div class="w-full p-5">{@render children()}</div>
</div>

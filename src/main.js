import App from './App.svelte';
import facts from './facts.js';

const app = new App({
	target: document.body,
	props: {
		factsList: facts
	}
});

export default app;

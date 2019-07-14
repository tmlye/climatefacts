import App from './App.svelte'
import facts from './facts.js'

let index = window.location.pathname.substring(1)
if (index.endsWith('/')) index = index.slice(0, -1)
const app = new App({
	target: document.body,
	props: {
		factsList: facts,
    initialIndex: index
	}
})

export default app

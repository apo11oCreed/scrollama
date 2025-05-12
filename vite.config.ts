import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
	    port: '8080',
	    allowedHosts: ['6240c6c47dce467a9c50d432d7f3f47b.vfs.cloud9.us-east-1.amazonaws.com','47f0519e5afd4ba28b322f42a9a35d1d.vfs.cloud9.us-east-1.amazonaws.com']
	}
});

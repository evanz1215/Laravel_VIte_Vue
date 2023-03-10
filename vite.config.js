import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd());

    return defineConfig({
        plugins: [
            vue(),
            laravel({
                input: ['resources/css/app.css', 'resources/js/app.js'],
                refresh: true,
            }),
        ],
        resolve: {
            alias: {
                '@': '/resources/js',
            },
        }
    });
}


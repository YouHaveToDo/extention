import {defineConfig} from 'vite';
import * as path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    root: './',
    publicDir: 'public',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'src/index.html'),
                background: path.resolve(__dirname, 'src/scripts/background.ts'),
                content: path.resolve(__dirname, 'src/scripts/content.ts'),
                options: path.resolve(__dirname, 'src/interface/options.ts'),
                domContentLoaded: path.resolve(__dirname, 'src/util/domContentLoaded.ts'),
            },
            output: {
                entryFileNames: 'src/[name].js',
                assetFileNames: '[name].[ext]',
                format: 'es',
            }
        }
    }
});
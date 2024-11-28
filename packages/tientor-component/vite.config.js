import {defineConfig} from 'vite';
import {fileURLToPath, URL} from "node:url";
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        vue()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    build: {
        lib: {
            entry: 'src/index.js', // 入口文件
            name: 'TientorComponent', // 打包后全局变量名（适用于 UMD）
            // formats: ['es', 'umd', 'cjs'], // 指定输出格式
            fileName: (format) => `tientor-component.${format}.js`, // 输出文件名
        },
    },
});

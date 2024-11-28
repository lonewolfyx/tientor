import {defineConfig} from 'vite';
import {fileURLToPath, URL} from "node:url";

export default defineConfig({
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    build: {
        lib: {
            entry: 'src/index.js', // 入口文件
            name: 'TientorHooks', // 打包后全局变量名（适用于 UMD）
            // formats: ['es', 'umd', 'cjs'], // 指定输出格式
            fileName: (format) => `tientor-hooks.${format}.js`, // 输出文件名
        },
        rollupOptions: {
            // 确保外部化依赖，不会打包到库中
            external: ['pinia'],
            output: {
                globals: {
                    pinia: 'Pinia', // 全局变量名称（UMD 模式下）
                },
            },
        },
    },
});

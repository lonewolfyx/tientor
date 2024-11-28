import {defineConfig} from "vite";
import {fileURLToPath, URL} from 'node:url'
import dts from 'vite-plugin-dts';

export default defineConfig({
    resolve: {
        alias: {
            // @ts-ignore
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'TientorWidget',
            fileName: (format) => `tientor-widget.${format}.js`, // 输出的文件名
        },
        // rollupOptions: {
        //     // 确保外部化依赖，不会打包到库中
        //     external: ['pinia'],
        //     output: {
        //         globals: {
        //             pinia: 'Pinia', // 全局变量名称（UMD 模式下）
        //         },
        //     },
        // },
    },
    plugins: [
        dts()
    ]
})
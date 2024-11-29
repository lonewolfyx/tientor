import {defineConfig} from 'vite';
import {fileURLToPath, URL} from "node:url";
import vue from '@vitejs/plugin-vue'
import postcss from './postcss.config.js';

export default defineConfig({
    plugins: [
        vue(),
        postcss
    ],
    build: {
        lib: {
            entry: 'src/index.js', // 入口文件
            name: 'TientorComponent', // 打包后全局变量名（适用于 UMD）
            // formats: ['es', 'umd', 'cjs'], // 指定输出格式
            fileName: (format) => `tientor-component.${format}.js`, // 输出文件名
        },
        rollupOptions: {
            // 确保外部化处理 Vue 相关依赖，不打包进库
            external: ['vue', 'pinia'],
            output: {
                globals: {
                    vue: 'Vue', // Vue 的全局变量名称
                    pinia: 'Pinia'
                },
            },
        },
        cssCodeSplit: true
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler', // or "modern", "legacy"
            },
        },
    }
});

import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";
import AutoImport from 'unplugin-auto-import/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            // resolvers: [ArcoResolver()],
            imports: [
                'vue',
                'pinia'
            ],
            dts: 'auto-import/auto-imports.d.ts',
        }),
        // Components({
        //     resolvers: [
        //         ArcoResolver({
        //             sideEffect: true
        //         })
        //     ]
        // }),
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            symbolId: 'icon-[dir]-[name]',
            inject: 'body-first'
        })
    ],
    server: {
        port: 1024,
        host: '0.0.0.0',
        open: true
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler', // or "modern", "legacy"
            },
        },
    }
})

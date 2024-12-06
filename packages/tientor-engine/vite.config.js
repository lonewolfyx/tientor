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
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '#': fileURLToPath(new URL('./packages/tientor-widget/src', import.meta.url)),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler', // or "modern", "legacy"
            },
        },
    },
    // 打包处理
    build: {
        minify: true,
        cssCodeSplit: true,
        chunkSizeWarningLimit: 500,

        terserOptions: {
            compress: {
                drop_console: true, // 删除console语句
                drop_debugger: true, // 删除debugger
            },
            format: {
                comments: false, // 移除注释
            },
        },

        rollupOptions: {
            output: {
                // 最小化拆分包
                manualChunks: (id) => {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                },
                // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
                entryFileNames: `assets/js/[name]/[hash].js`,
                // 用于命名代码拆分时创建的共享块的输出命名
                chunkFileNames: `assets/js/[name]/[hash].js`,
                // 用于输出静态资源的命名，[ext]表示文件扩展名
                assetFileNames: `assets/[ext]/[name]/[hash].[ext]`,

            }
        }
    }
})

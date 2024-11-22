<template>
    这是第一个组件
    {{ $attrs }}
    <component :is="component" v-bind="$attrs"/>
</template>

<script setup>
import {useAsyncComponent} from "../_hooks/useAsyncComponent.js";
import {ElInput} from "element-plus";

const component = useAsyncComponent('Input');

const div = h(ElInput);
// const ui = getUiFramework();

// const InputComponent = ref(null);
//
// onBeforeMount(async () => {
//     if (ui === 'element') {
//         const ElInput = await import('element-plus').then((module) => module.ElInput);
//         InputComponent.value = markRaw(ElInput);
//         // 动态加载Element Plus的样式文件
//         import('element-plus/dist/index.css');
//     } else if (ui === 'arco') {
//         const ArcoInput = await import('@arco-design/web-vue').then((module) => module.Input);
//         InputComponent.value = markRaw(ArcoInput);
//         // 动态加载Arco Design的样式文件
//         import('@arco-design/web-vue/dist/arco.css');
//     } else if (ui === 'antdv') {
//         const AntdInput = await import('ant-design-vue').then((module) => module.Input);
//         InputComponent.value = markRaw(AntdInput);
//         // 动态加载Ant Design Vue的样式文件
//         import('ant-design-vue/dist/reset.css');
//     } else {
//         console.error('Unsupported UI framework:', ui);
//     }
// });

defineOptions({
    name: 'TientorInput'
});

</script>

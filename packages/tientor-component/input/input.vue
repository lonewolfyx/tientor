<template>
    这是第一个组件
    {{ $attrs }}
    <component :is="component" v-bind="$attrs"/>
</template>

<script setup>
import {useAsyncComponent} from "../_hooks/useAsyncComponent.js";

const component = useAsyncComponent('input');

defineOptions({
    name: 'TientorInput'
});
console.log(useAttrs())
</script>

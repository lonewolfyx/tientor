<template>
    <component :is="component" v-bind="$attrs">
        <slot/>
    </component>
</template>

<script setup>

import {useAsyncComponent} from "../_hooks/useAsyncComponent.js";

const component = useAsyncComponent('formItem');

defineOptions({
    name: 'TientorFormItem'
})
</script>

<style scoped lang="scss">

</style>
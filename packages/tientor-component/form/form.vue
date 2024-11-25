<template>
    <component :is="component" v-bind="$attrs" v-model="$attrs.value">
        <slot/>
    </component>
</template>

<script setup>
import {useAsyncComponent} from "../_hooks/useAsyncComponent.js";

const component = useAsyncComponent('form');

defineOptions({
    name: 'TientorForm'
});
</script>

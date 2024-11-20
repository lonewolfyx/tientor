<template>
    <svg class="iconSize" :class="className">
        <use :href="symbolId" :fill="color"/>
    </svg>
</template>

<script setup>
import {computed} from "vue";

const {color, prefix, name, className} = defineProps({
    color: {
        type: String
    },
    prefix: {
        type: String,
        default: 'icon'
    },
    name: {
        type: String,
        default: ''
    },
    className: {
        type: String,
        default: 'w-6 h-6'
    }
});
const symbolId = computed(() => `#${prefix}-${name}`)
</script>

<style scoped lang="scss">
.iconSize {
    vertical-align: -0.15em;
    @apply overflow-hidden;
}

.svg-icon-fill {
    fill: rgb(100 116 139 / var(--tw-text-opacity));
}
</style>
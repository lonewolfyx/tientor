<template>
    <div class="DividerHeader">
        <span class="title">{{ title }}</span>
    </div>
</template>

<script setup>
defineOptions({
    name: 'DividerHeader'
})

const {title} = defineProps(['title'])
</script>

<style scoped lang="scss">
.DividerHeader {
    @apply leading-6 whitespace-normal text-zinc-400;
    //color: var(--color-text-1);
    overflow-wrap: anywhere;

    .title {
        @apply block leading-6 whitespace-normal mb-3 pl-2 text-zinc-800 border-l-2 border-l-zinc-400;
        overflow-wrap: anywhere;
        border-left-style: solid;
    }
}
</style>
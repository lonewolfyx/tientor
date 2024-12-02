<template>
    <a-divider orientation="left">{{ title }}</a-divider>
</template>

<script setup>
defineOptions({
    name: 'DividerHeader'
})

const {title} = defineProps(['title'])

</script>
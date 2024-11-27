<template>
    <a-tabs default-active-key="ComponentSettings" lazy-load trigger="hover">
        <a-tab-pane key="ComponentSettings" title="组件设置" class="px-5 pb-4">
            组件设置
        </a-tab-pane>
        <a-tab-pane key="FormSettings" title="表单设置" class="px-5 pb-4">
            表单设置
        </a-tab-pane>
    </a-tabs>
</template>

<script setup>
defineOptions({
    name: 'FormConfiguration'
})
</script>

<style scoped lang="scss">

</style>
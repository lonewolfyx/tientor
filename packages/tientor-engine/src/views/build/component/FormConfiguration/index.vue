<template>
    <a-tabs default-active-key="ComponentSettings" lazy-load trigger="hover">
        <a-tab-pane key="ComponentSettings" title="组件设置" class="px-5 pb-4">
            <a-form
                :model="{}"
                auto-label-width
                size="medium"
                label-align="left"
            >
                <a-form-item label="标签文本">
                    <a-input/>
                </a-form-item>
            </a-form>
        </a-tab-pane>
        <a-tab-pane key="FormSettings" title="表单设置" class="px-5 pb-4">
            <a-form
                :model="{}"
                auto-label-width
                size="medium"
                label-align="left"
            >
                <a-form-item label="标签的对齐方向">
                    <a-radio-group type="button" default-value="beijing">
                        <a-radio value="Beijing">Beijing</a-radio>
                        <a-radio value="Shanghai">Shanghai</a-radio>
                        <a-radio value="Guangzhou">Guangzhou</a-radio>
                        <a-radio value="Shenzhen">Shenzhen</a-radio>
                    </a-radio-group>
                </a-form-item>
            </a-form>
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
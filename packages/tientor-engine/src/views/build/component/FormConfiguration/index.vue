<template>
    <a-tabs default-active-key="ComponentSettings" lazy-load>
        <a-tab-pane key="ComponentSettings" title="组件设置" class="px-5 pb-4">
            <!--            {{ widgetList?.[selectIndex] }}-->
            <!--            {{widgetList[selectIndex]}}-->
            <template v-if="widgetList?.[selectIndex]?.['_itemProps']">
                <a-form
                    :model="widgetList?.[selectIndex]"
                    auto-label-width
                    size="medium"
                    label-align="left"
                >
                    <component
                        :is="currentWidget._config[ui]"
                        :ui="ui"
                        :queryForm="widgetList?.[selectIndex]"
                    />
                </a-form>
            </template>
            <template v-else>
                <p class="text-xs">请在左侧画布中选中节点</p>
            </template>
        </a-tab-pane>
        <a-tab-pane key="FormSettings" title="表单设置" class="px-5 pb-4">
            <a-form
                :model="formProp[ui]"
                auto-label-width
                size="medium"
                label-align="left"
            >
                <component is="TientorConfigArcoFormProp" :queryForm="formProp[ui]"/>
            </a-form>
        </a-tab-pane>
    </a-tabs>
</template>

<script setup>
import {useConfigStore, useDesignerStore} from "@tientor/tientor-hooks";

defineOptions({
    name: 'FormConfiguration'
})

const {ui} = toRefs(useConfigStore())
const {formProp, widgetList, currentWidget, selectIndex} = toRefs(useDesignerStore())
</script>

<style scoped lang="scss">

</style>
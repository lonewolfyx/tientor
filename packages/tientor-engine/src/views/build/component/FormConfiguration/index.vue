<template>
    <a-tabs default-active-key="ComponentSettings" lazy-load>
        <a-tab-pane key="ComponentSettings" title="组件设置" class="px-5 pb-4">
            <!--            {{ widgetList?.[selectIndex] }}-->
            <!--            {{widgetList[selectIndex]}}-->
            <a-form
                v-if="widgetList?.[selectIndex]?.['_itemProps']"
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
        </a-tab-pane>
        <a-tab-pane key="FormSettings" title="表单设置" class="px-5 pb-4">
            <a-form
                :model="formProp[ui]"
                auto-label-width
                size="medium"
                label-align="left"
            >
                <component is="TientorConfigArcoFormProp" :queryForm="formProp[ui]"/>
                <!--                <a-form-item label="标签的对齐方向">-->
                <!--                    <a-radio-group type="button" default-value="beijing">-->
                <!--                        <a-radio value="Beijing">Beijing</a-radio>-->
                <!--                        <a-radio value="Shanghai">Shanghai</a-radio>-->
                <!--                        <a-radio value="Guangzhou">Guangzhou</a-radio>-->
                <!--                        <a-radio value="Shenzhen">Shenzhen</a-radio>-->
                <!--                    </a-radio-group>-->
                <!--                </a-form-item>-->
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
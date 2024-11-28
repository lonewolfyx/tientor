<template>
    <div class="p-5">
        <DividerHeader title="Ui 组件库"/>
        <UiDesign/>
        <!--        <DividerHeader title="布局组件"/>-->
        <DividerHeader title="基础组件"/>
        <VueDraggable
            v-model="components"
            :animation="150"
            ghostClass="ghost"
            :group="{ name: 'people', pull: 'clone', put: false }"
            :clone="cloneWidgetItem"
            :sort="false"
            class="grid grid-cols-2 gap-4"
        >
            <DraggableItem
                v-for="(item,index) in components"
                :key="index"
                :item="item"
            />
        </VueDraggable>
    </div>
</template>

<script setup>

import {VueDraggable} from "vue-draggable-plus";
import DividerHeader from "@/components/DividerHeader/index.vue";
import {clone} from 'radash'
import {basicComponents} from "@tientor/tientor-widget";
import DraggableItem from "@/views/build/component/Sidebar/DraggableItem.vue";
import UiDesign from "@/components/UiDesign/index.vue";
import {useDesignerStore} from "@tientor/tientor-hooks";

defineOptions({
    name: 'Sidebar'
});

const components = ref(clone(basicComponents))

const {formConfig, cloneWidgetItem} = useDesignerStore()
</script>

<style scoped lang="scss">
</style>
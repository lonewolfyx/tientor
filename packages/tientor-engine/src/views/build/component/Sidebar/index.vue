<template>
    <div class="p-5">
        <!--        <DividerHeader title="布局组件"/>-->
        <DividerHeader title="基础组件"/>
        <VueDraggable
            v-model="basicComponents"
            :animation="150"
            ghostClass="ghost"
            :group="{ name: 'people', pull: 'clone', put: false }"
            :clone="clone"
            :sort="false"
            class="grid grid-cols-2 gap-4"
        >
            <DraggableItem
                v-for="(item,index) in basicComponents"
                :key="index"
                :item="item"
            />
        </VueDraggable>
    </div>
</template>

<script setup>

import DraggableItem from "@/views/build/component/Sidebar/DraggableItem.vue";
import {basicComponents} from "@tientor/tientor-widget";
import {VueDraggable} from "vue-draggable-plus";
import DividerHeader from "@/components/DividerHeader/index.vue";

defineOptions({
    name: 'Sidebar'
});

const clone = () => {
}
</script>

<style scoped lang="scss">
</style>
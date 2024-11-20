<template>
    <VueDraggable
        v-model="FormWidget"
        :animation="150"
        ghostClass="ghost"
        :group="{ name: 'people', pull: 'clone', put: false }"
        :clone="clone"
        :sort="false"
        class="grid grid-cols-2 gap-4 p-5"
    >
        <DraggableItem
            v-for="(item,index) in FormWidget"
            :key="index"
            :item="item"
        />
    </VueDraggable>
</template>

<script setup>

import DraggableItem from "@/components/Sidebar/DraggableItem.vue";
import {FormWidget} from "@tientor/tientor-widget";
import {VueDraggable} from "vue-draggable-plus";

defineOptions({
    name: 'Sidebar'
});

const clone = () => {
}
</script>

<style scoped lang="scss">
</style>
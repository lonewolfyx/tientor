<template>
    <div class="draggable-item" @click="addFormWidget(item)" v-if="item.enabled[ui]">
        <SvgIcon :name="item.icon" className="w-6 h-6 mr-3 hover:fill-white" color="#d4d4d8"/>
        <span class="title">{{ item.name }}</span>
    </div>
</template>

<script setup>
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";
import {useConfigStore, useDesignerStore} from "@tientor/tientor-hooks";

defineOptions({
    name: 'DraggableItem'
})

const {item} = defineProps(['item'])
const {ui} = toRefs(useConfigStore())
const {addFormWidget} = useDesignerStore()
</script>

<style scoped lang="scss">
.draggable-item {
    @apply flex items-center py-3 px-2 border border-dashed border-gray-300 rounded text-xs text-neutral-500 font-semibold hover:bg-blue-50 hover:border-blue-500 cursor-grab transition duration-[200ms];

    .title {
        @apply text-xs;
    }
}
</style>
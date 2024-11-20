<template>
    <div class="draggable-item">
        <SvgIcon name="desktop" className="w-5 h-5 mr-3" color="#d4d4d8"/>
        <span>{{ item.name }}</span>
    </div>
</template>

<script setup>
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";

defineOptions({
    name: 'DraggableItem'
})

const {item} = defineProps(['item'])
</script>

<style scoped lang="scss">
.draggable-item {
    @apply flex items-center py-3 px-2 border border-dashed border-gray-300 rounded text-xs text-neutral-500 font-semibold hover:bg-blue-300 hover:border-blue-500 hover:text-white cursor-grab transition duration-[200ms];
}
</style>
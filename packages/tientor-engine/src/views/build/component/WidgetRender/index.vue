<template>
    <VueDraggable
        v-model="list2"
        :animation="150"
        group="people"
        ghostClass="ghost"
        class="render-wrapper"
    >
        <div
            v-for="item in list2"
            :key="item.id"
        >
            {{ item.name }}
        </div>
    </VueDraggable>

</template>

<script setup>
import {VueDraggable} from "vue-draggable-plus";

defineOptions({
    name: 'WidgetRender'
})

const list2 = ref({})
</script>

<style scoped lang="scss">
.render-wrapper {
    @apply relative box-border w-full h-full bg-white overflow-y-auto rounded;
}
</style>
<template>
    <!--    {{widgetList}}-->
    <TientorForm></TientorForm>
    <a-input v-model="queryForm.value"/>
    <component is="TientorInput" v-bind="queryForm"/>
    <!-- render-wrapper -->
    <VueDraggable
        v-model="widgetList"
        :animation="150"
        group="people"
        ghostClass="ghost"
    >
        <!--            <template v-for="item in widgetList" :key="item.id">-->
        <!--                <p>{{ item }}</p>-->
        <!--                <component is="TientorInput" v-bind="queryForm"/>-->
        <!--            </template>-->
    </VueDraggable>

</template>

<script setup>
import {VueDraggable} from "vue-draggable-plus";
import {useDesignerStore} from "@/stores/designer.js";

defineOptions({
    name: 'WidgetRender'
})

const {widgetList} = toRefs(useDesignerStore())

const queryForm = ref({
    value: ''
})
const list2 = ref([
    {
        "name": "Joao-2",
        "id": "1-2"
    }
])
</script>

<style scoped lang="scss">
.render-wrapper {
    @apply relative box-border w-full h-full bg-white overflow-y-auto rounded;
}
</style>
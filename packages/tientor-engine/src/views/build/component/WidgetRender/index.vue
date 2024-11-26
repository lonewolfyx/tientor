<template>
    {{ ui }}
    <TientorFormWrapper :ui="ui">
<!--        <TientorFormItem v-for="item in widgetList" :key="item.id" :widget="item"/>-->
    </TientorFormWrapper>
    <!--    {{widgetList}}-->
    <!--    <TientorForm>-->
    <!--        <component is="TientorInput" v-bind="queryForm"/>-->
    <!--    </TientorForm>-->
    <!--    <a-input v-model="queryForm.value"/>-->
    <!--    {{queryForm}}-->
    <!--    <component is="TientorInput" v-bind="queryForm"/>-->
    <!--    <component is="TientorForm">-->
    <!--        <component is="TientorFormItem">-->
    <!--            <component is="TientorInput" v-bind="queryForm"/>-->
    <!--        </component>-->
    <!--        <component is="TientorFormItem">-->
    <!--            <component is="TientorInput" v-bind="queryForm"/>-->
    <!--        </component>-->
    <!--    </component>-->

    <!-- render-wrapper -->
    <!--    <VueDraggable-->
    <!--        v-model="widgetList"-->
    <!--        :animation="150"-->
    <!--        group="people"-->
    <!--        ghostClass="ghost"-->
    <!--    >-->
    <!--        <template v-for="item in widgetList" :key="item.id">-->
    <!--            <p>{{ item }}</p>-->
    <!--            &lt;!&ndash;            <component is="TientorInput" v-bind="queryForm"/>&ndash;&gt;-->
    <!--        </template>-->
    <!--    </VueDraggable>-->
</template>

<script setup>
import {useDesignerStore} from "@/stores/designer.js";
import {useConfigStore} from "@/stores/config.js";

defineOptions({
    name: 'WidgetRender'
})

const {widgetList} = toRefs(useDesignerStore())

const {ui} = toRefs(useConfigStore())
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
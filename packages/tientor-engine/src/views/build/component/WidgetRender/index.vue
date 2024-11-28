<template>
    <TientorFormWrapper
        :ui="ui"
        class="render-wrapper"
        :formProp="formProp"
        :class="device"
    >
        <VueDraggable
            v-model="widgetList"
            :animation="150"
            group="people"
            ghostClass="ghost"
            class="w-full h-full p-3"
            @add="handleAdd"
        >
            <TientorFormItem
                v-for="item in widgetList"
                :key="item.id"
                :widget="item"
                :ui="ui"
                :currentWidget="currentWidget"
            />
        </VueDraggable>
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
import {VueDraggable} from "vue-draggable-plus";
import {useConfigStore, useDesignerStore} from "@tientor/tientor-hooks";

defineOptions({
    name: 'WidgetRender'
})

const {formProp, widgetList, currentWidget, updateCurrentWidget} = toRefs(useDesignerStore())

const {ui, device} = toRefs(useConfigStore())

const handleAdd = (events) => {
    nextTick(() => {
        const {newIndex} = events
        console.log(newIndex, widgetList.value[newIndex], currentWidget.value)
        updateCurrentWidget.value(widgetList.value[newIndex])
    })
}
</script>

<style scoped lang="scss">
.render-wrapper {
    @apply relative box-border w-full h-full bg-white overflow-y-auto rounded;

    &.mobile {
        @apply m-auto w-[26.7857rem] border-[5px] border-solid border-gray-500 rounded-2xl;
    }
}
</style>
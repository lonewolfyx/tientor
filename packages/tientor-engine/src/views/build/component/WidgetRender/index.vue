<template>
    <TientorFormWrapper :ui="ui" class="render-wrapper" :formProp="formProp">
        <VueDraggable
            v-model="widgetList"
            :animation="150"
            group="people"
            ghostClass="ghost"
            class="w-full h-full p-3"
        >
            <TientorFormItem v-for="item in widgetList" :key="item.id" :widget="item"/>
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
import {useDesignerStore} from "@/stores/designer.js";
import {VueDraggable} from "vue-draggable-plus";
import {useConfigStore} from "@tientor/tientor-hooks";

defineOptions({
    name: 'WidgetRender'
})

const {formProp, widgetList} = toRefs(useDesignerStore())

const {ui} = toRefs(useConfigStore())

</script>

<style scoped lang="scss">
.render-wrapper {
    @apply relative box-border w-full h-full bg-white overflow-y-auto rounded;
}
</style>
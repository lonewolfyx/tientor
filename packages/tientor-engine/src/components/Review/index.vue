<template>
    <a-drawer
        :visible="visible"
        title="预览"
        width="50%"
        @ok="changeStatus"
        @cancel="changeStatus"
        unmountOnClose
        :footer="false"
    >
        <TientorFormWrapper
            :ui="ui"
            class="render-wrapper"
            :formProp="formProp"
        >
            <TientorFormItem
                v-for="item in widgetList"
                :key="item.id"
                :widget="item"
                :ui="ui"
            />
        </TientorFormWrapper>
    </a-drawer>
</template>

<script setup>
import {useConfigStore, useDesignerStore} from "@tientor/tientor-hooks";
import {TientorFormItem, TientorFormWrapper} from "@tientor/tientor-component";

defineOptions({
    name: 'ReviewComponent'
})

const visible = ref(false)

const {ui} = toRefs(useConfigStore())
const {formProp, widgetList, currentWidget} = toRefs(useDesignerStore())

const changeStatus = () => {
    visible.value = !visible.value;
}

const showWidgetReview = () => {
    changeStatus()

}

defineExpose({showWidgetReview})
</script>

<style scoped lang="scss">

</style>
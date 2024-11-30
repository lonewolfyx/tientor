<template>
    <a-drawer
        :visible="visible"
        title="预览"
        width="50%"
        @ok="changeStatus"
        @cancel="changeStatus"
        unmountOnClose
    >
        <p>组件预览</p>
        <p>{{formProp}}</p>
        <p>{{widgetList}}</p>
    </a-drawer>
</template>

<script setup>
import {useDesignerStore} from "@tientor/tientor-hooks";

defineOptions({
    name: 'ReviewComponent'
})

const visible = ref(false)

const {formProp, widgetList} = toRefs(useDesignerStore())
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
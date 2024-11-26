<template>
    {{ $attrs }}
    <component :is="FormItemComponent">
        <!--        <component :is="FormWidgetComponent"/>-->
    </component>
</template>

<script setup>
import {getUiComponent} from "../utils/utils.js";

defineOptions({
    name: 'TientorFormItem'
})

// form 表单项
const FormItemComponent = ref({})
// form 表单控件
const FormWidgetComponent = ref({})

onMounted(() => {
    FormItemComponent.value = getUiComponent('formItem')
    // FormWidgetComponent.value = markRaw(getUiComponent('input'))
})
</script>

<style scoped lang="scss">

</style>
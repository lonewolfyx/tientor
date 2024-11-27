<template>
    {{ widget }}
    <!--    <p>{{ FormItemComponent }}</p>-->
    <component :is="FormItemComponent" v-bind="$attrs">
        <component :is="FormWidgetComponent" v-bind="$attrs"/>
    </component>
</template>

<script setup>
import {getUiComponent} from "../utils/utils.js";

defineOptions({
    name: 'TientorFormItem'
})

// form 表单项
const FormItemComponent = computed(() => getUiComponent('formItem'))
// form 表单控件
const FormWidgetComponent = computed(() => getUiComponent('input'))

const {widget} = useAttrs();
</script>

<style scoped lang="scss">

</style>
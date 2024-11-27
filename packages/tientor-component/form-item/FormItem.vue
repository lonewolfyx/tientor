<template>
    {{ $attrs }}
    <!-- 表单 form-item -->
    <component :is="FormItemComponent" v-bind="$attrs.widget._itemProps">
        <!-- 对应表单控件 -->
        <component :is="FormWidgetComponent" v-bind="$attrs.widget._widgetProp"/>
    </component>
</template>

<script setup>
import {getUiComponent} from "../utils/utils.js";

defineOptions({
    name: 'TientorFormItem'
})

const {widget} = useAttrs();

// form 表单项
const FormItemComponent = computed(() => getUiComponent('formItem'))
// form 表单控件
const FormWidgetComponent = computed(() => getUiComponent(widget?.tag))
</script>
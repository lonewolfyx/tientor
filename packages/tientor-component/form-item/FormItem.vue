<template>
    {{ $attrs }}
    <!-- 表单 form-item -->
    <component :is="FormItemComponent" v-bind="$attrs.widget._itemProps" v-if="$attrs.widget.enabled[ui]">
        <!-- 对应表单控件 -->
        <component :is="FormWidgetComponent" v-bind="$attrs.widget._widgetProp"/>
    </component>
</template>

<script setup>
import {getUiComponent} from "../utils/utils.js";

defineOptions({
    name: 'TientorFormItem'
})

const {ui} = defineProps(['ui'])
const {widget} = useAttrs();

// form 表单项
const FormItemComponent = computed(() => getUiComponent('formItem'))
// form 表单控件
const FormWidgetComponent = computed(() => getUiComponent(widget?.tag))
</script>
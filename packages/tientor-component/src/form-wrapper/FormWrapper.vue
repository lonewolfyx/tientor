<template>
    <component
        :is="FormComponent"
        v-bind="formProp[ui]"
    >
        <slot/>
    </component>
</template>

<script setup>
import {getUiComponent, setUiComponent} from "../utils/utils.js";
import {useDesignerStore} from "@tientor/tientor-hooks";

defineOptions({
    name: 'TientorFormWrapper'
})

const {ui} = defineProps(['ui'])

const {formProp} = toRefs(useDesignerStore())
// form 表单容器
const FormComponent = shallowRef({})

const queryForm = ref({})

watchEffect(() => {
    setUiComponent(ui)
    FormComponent.value = getUiComponent('form')
})
</script>
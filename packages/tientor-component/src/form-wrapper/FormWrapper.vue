<template>
    <component
        :is="FormComponent"
        v-bind="filterObject(formProp,formProps[ui])"
    >
        <slot/>
    </component>
</template>

<script setup>
import {filterObject, getUiComponent, setUiComponent} from "../utils/utils.js";
import formProps from "../config/formProps.js";

defineOptions({
    name: 'TientorFormWrapper'
})

const {ui, formProp} = defineProps(['ui', 'formProp'])

// form 表单容器
const FormComponent = shallowRef({})

const queryForm = ref({})

watchEffect(() => {
    setUiComponent(ui)
    FormComponent.value = getUiComponent('form')
})
</script>
<template>
    <component :is="FormComponent" :model="queryForm">
        <slot/>
    </component>
</template>

<script setup>
import {getUiComponent, setUiComponent} from "../utils/utils.js";

defineOptions({
    name: 'TientorFormWrapper'
})

const {ui} = defineProps(['ui'])

// form 表单容器
const FormComponent = shallowRef({})

const queryForm = ref({})

watchEffect(() => {
    setUiComponent(ui)
    FormComponent.value = getUiComponent('form')
})
</script>

<style scoped lang="scss">

</style>
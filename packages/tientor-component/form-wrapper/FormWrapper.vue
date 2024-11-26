<template>
    <div>
        这里是 form 表单{{ ui }}
    </div>
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
const FormComponent = ref({})

const queryForm = ref({})

watchEffect(() => {
    setUiComponent(ui)
    FormComponent.value = getUiComponent('form')
})
</script>

<style scoped lang="scss">

</style>
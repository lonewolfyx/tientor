<template>
    <DividerHeader title="基础设置"/>
    <TientorConfigArcoFormItem v-bind="$attrs"/>
</template>

<script setup>
import DividerHeader from "../components/DividerHeader.vue";
import TientorConfigArcoFormItem from "./FormItem.vue";

defineOptions({
    name: 'TientorConfigArcoInput'
})

</script>
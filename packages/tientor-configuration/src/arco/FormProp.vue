<template>
    <a-form-item label="表单布局：" field="layout">
        <a-radio-group type="button" size="small" v-model="queryForm.layout">
            <a-radio value="horizontal">水平</a-radio>
            <a-radio value="vertical">垂直</a-radio>
            <a-radio value="inline">行内</a-radio>
        </a-radio-group>
    </a-form-item>
    <a-form-item label="控件尺寸：" field="size">
        <a-radio-group type="button" size="small" v-model="queryForm.size">
            <a-radio value="mini">mini</a-radio>
            <a-radio value="small">小</a-radio>
            <a-radio value="medium">中</a-radio>
            <a-radio value="large">大</a-radio>
        </a-radio-group>
    </a-form-item>
    <a-form-item label="标签对齐方向：" field="labelAlign">
        <a-radio-group type="button" size="small" v-model="queryForm.labelAlign">
            <a-radio value="left">左</a-radio>
            <a-radio value="right">右</a-radio>
        </a-radio-group>
    </a-form-item>
    <a-form-item label="禁用表单：" field="disabled">
        <a-switch type="round" v-model="queryForm.disabled"/>
    </a-form-item>
    <a-form-item
        label="开启自动标签宽度："
        field="autoLabelWidth"
        extra="仅在水平布局下生效。"
        :disabled="queryForm.layout !== 'horizontal'"
    >
        <a-switch type="round" v-model="queryForm.autoLabelWidth"/>
    </a-form-item>
</template>

<script setup>
defineOptions({
    name: 'TientorConfigArcoFormProp'
})

const {queryForm} = defineProps(['queryForm'])
</script>

<style scoped lang="scss">

</style>
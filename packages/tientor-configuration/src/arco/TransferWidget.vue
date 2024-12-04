<template>
    <a-form-item label="源选择框标题：" field="defaultValue">
        <a-input v-model="queryForm._widgetProp[ui].title[0]" placeholder="请输入默认标题..."/>
    </a-form-item>
    <a-form-item label="目标选择框标题：" field="defaultValue">
        <a-input v-model="queryForm._widgetProp[ui].title[1]" placeholder="请输入默认标题..."/>
    </a-form-item>
    <a-form-item label="禁用组件：" field="disabled">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].disabled"/>
    </a-form-item>
    <a-form-item label="简单模式：" help="选择即移动">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].simple"/>
    </a-form-item>
    <a-form-item label="单向模式：" help="仅可移动到目标选择框">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].oneWay"/>
    </a-form-item>
    <a-form-item label="搜索框：" field="showSearch">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].showSearch"/>
    </a-form-item>
    <a-form-item label="全选勾选框：" field="showSelectAll">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].showSelectAll"/>
    </a-form-item>
</template>

<script setup>

defineOptions({
    name: 'TientorConfigArcoTransfer'
})
const {ui, queryForm, selectIndex} = defineProps(['ui', 'queryForm', 'selectIndex']);

</script>
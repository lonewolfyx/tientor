<template>
    <!--    <TientorConfigArcoFormItem :ui="ui" :queryForm="queryForm"/>-->
    <DividerHeader title="组件设置"/>
    <a-form-item label="默认值：" field="defaultValue">
        <a-input-number
            v-model="queryForm._widgetProp[ui].defaultValue"
            placeholder="请输入默认内容..."
            :min="0"
            :max="queryForm._widgetProp[ui].count"
            mode="button"
        />
    </a-form-item>
    <a-form-item label="评分的总数：" field="count">
        <a-input-number
            v-model="queryForm._widgetProp[ui].count"
            placeholder="请输入评分数量..."
            :min="0"
            mode="button"
        />
    </a-form-item>
    <a-form-item label="半选评分：" field="allowHalf">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].allowHalf"/>
    </a-form-item>
    <a-form-item label="允许清空评分：" field="allowClear">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].allowClear"/>
    </a-form-item>
    <a-form-item label="笑脸分级：" field="grading">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].grading"/>
    </a-form-item>
    <a-form-item label="只读状态：" field="readonly">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].readonly"/>
    </a-form-item>
    <a-form-item label="禁用组件：" field="disabled">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].disabled"/>
    </a-form-item>
    <a-form-item label="评分颜色：" field="disabled">
        <a-color-picker v-model="queryForm._widgetProp[ui].color" showText disabledAlpha/>
    </a-form-item>
</template>

<script setup>
import DividerHeader from "../components/DividerHeader.vue";

defineOptions({
    name: 'TientorConfigArcoRate'
})

const {ui, queryForm, selectIndex} = defineProps(['ui', 'queryForm', 'selectIndex'])
</script>
<template>
    <TientorConfigArcoFormItem :ui="ui" :queryForm="queryForm"/>
    <DividerHeader title="组件设置"/>
    <a-form-item label="默认值：" field="defaultValue">
        <a-input-number
            v-model="queryForm._widgetProp[ui].defaultValue"
            placeholder="请输入默认内容..."
            :min="0"
            model-event="input"
        />
    </a-form-item>
    <a-form-item label="提示文字：" field="placeholder">
        <a-input v-model="queryForm._widgetProp[ui].placeholder" placeholder="请输入默认提示文字..."/>
    </a-form-item>
    <a-form-item label="按钮模式：">
        <a-radio-group type="button" v-model="queryForm._widgetProp[ui].mode">
            <a-radio value="embed">按钮内嵌</a-radio>
            <a-radio value="button">左右按钮</a-radio>
        </a-radio-group>
    </a-form-item>
    <a-form-item label="组件尺寸：">
        <a-radio-group type="button" size="small" v-model="queryForm._widgetProp[ui].size">
            <a-radio value="mini">mini</a-radio>
            <a-radio value="small">小</a-radio>
            <a-radio value="medium">默认</a-radio>
            <a-radio value="large">大</a-radio>
        </a-radio-group>
    </a-form-item>
    <a-form-item label="允许清空输入框：" field="allowClear">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].allowClear"/>
    </a-form-item>
    <a-form-item label="禁用组件：" field="disabled">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].disabled"/>
    </a-form-item>
    <a-form-item label="只读状态：" field="readonly">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].readonly"/>
    </a-form-item>
    <a-form-item label="隐藏按钮：" field="hideButton">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].hideButton"/>
    </a-form-item>
    <a-form-item label="最小值：" field="min">
        <a-input-number v-model="queryForm._widgetProp[ui].min" :min="0" placeholder="请输入最小值..." mode="button"/>
    </a-form-item>
    <a-form-item label="最大值：" field="max">
        <a-input-number v-model="queryForm._widgetProp[ui].max" :min="0" placeholder="请输入最大值..." mode="button"/>
    </a-form-item>
    <a-form-item label="数字精度：" field="precision">
        <a-input-number v-model="queryForm._widgetProp[ui].precision" :min="0" mode="button"/>
    </a-form-item>
    <a-form-item label="数字变化步长：" field="step">
        <a-input-number v-model="queryForm._widgetProp[ui].step" :min="0" mode="button"/>
    </a-form-item>
</template>

<script setup>

import TientorConfigArcoFormItem from "./FormItem.vue";
import DividerHeader from "../components/DividerHeader.vue";

defineOptions({
    name: 'TientorConfigArcoNumber'
})

const {ui, queryForm, selectIndex} = defineProps(['ui', 'queryForm', 'selectIndex'])
</script>
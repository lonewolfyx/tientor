<template>
    <TientorConfigArcoFormItem :ui="ui" :queryForm="queryForm"/>
    <DividerHeader title="组件设置"/>
    <a-form-item label="禁用组件：" field="disabled">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].disabled"/>
    </a-form-item>
    <a-form-item label="加载中状态：" field="loading">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].loading"/>
    </a-form-item>
    <a-form-item label="开关类型：">
        <a-radio-group type="button" v-model="queryForm._widgetProp[ui].type">
            <a-radio value="circle">圆形</a-radio>
            <a-radio value="round">圆角</a-radio>
            <a-radio value="line">线性</a-radio>
        </a-radio-group>
    </a-form-item>
    <a-form-item label="开关大小：">
        <a-radio-group type="button" v-model="queryForm._widgetProp[ui].size">
            <a-radio value="small">小</a-radio>
            <a-radio value="medium">默认</a-radio>
        </a-radio-group>
    </a-form-item>
    <a-form-item label="选中时的值：" field="checkedValue">
        <a-input v-model="queryForm._widgetProp[ui].checkedValue" placeholder="请输入默认提示文字..."/>
    </a-form-item>
    <a-form-item label="未选中时的值：" field="uncheckedValue">
        <a-input v-model="queryForm._widgetProp[ui].uncheckedValue" placeholder="请输入默认提示文字..."/>
    </a-form-item>
    <a-form-item label="选中颜色：" field="checkedColor">
        <a-color-picker v-model="queryForm._widgetProp[ui].checkedColor" showText disabledAlpha/>
    </a-form-item>
    <a-form-item label="未选颜色：" field="uncheckedColor">
        <a-color-picker v-model="queryForm._widgetProp[ui].uncheckedColor" showText disabledAlpha/>
    </a-form-item>
    <a-form-item label="打开文案：" field="checkedText" help="开关类型为线性和开关小型规模下不生效">
        <a-input v-model="queryForm._widgetProp[ui].checkedText" placeholder="请输入默认提示文字..."/>
    </a-form-item>
    <a-form-item label="关闭文案：" field="uncheckedText" help="开关类型为线性和开关小型规模下不生效">
        <a-input v-model="queryForm._widgetProp[ui].uncheckedText" placeholder="请输入默认提示文字..."/>
    </a-form-item>
</template>

<script setup>

import TientorConfigArcoFormItem from "./FormItem.vue";
import DividerHeader from "../components/DividerHeader.vue";

defineOptions({
    name: 'TientorConfigArcoSwitch'
})
const {ui, queryForm, selectIndex} = defineProps(['ui', 'queryForm', 'selectIndex']);
</script>
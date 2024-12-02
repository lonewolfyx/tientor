<template>
    <TientorConfigArcoFormItem :ui="ui" :queryForm="queryForm"/>
    <DividerHeader title="组件设置"/>
    <a-form-item label="默认值：" field="defaultValue">
        <a-input v-model="queryForm._widgetProp[ui].defaultValue" placeholder="请输入默认内容..."/>
    </a-form-item>
    <a-form-item label="组件尺寸：">
        <a-radio-group type="button" size="small" v-model="queryForm._widgetProp[ui].size">
            <a-radio value="mini">mini</a-radio>
            <a-radio value="small">小</a-radio>
            <a-radio value="medium">默认</a-radio>
            <a-radio value="large">大</a-radio>
        </a-radio-group>
    </a-form-item>
    <a-form-item label="禁用组件：" field="disabled">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].disabled"/>
    </a-form-item>
    <a-form-item label="只读状态：" field="readonly">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].readonly"/>
    </a-form-item>
    <a-form-item label="提示文字：" field="placeholder">
        <a-input v-model="queryForm._widgetProp[ui].placeholder" placeholder="请输入默认提示文字..."/>
    </a-form-item>
    <a-form-item label="最大文本长度：" field="maxLength">
        <a-input-number v-model="queryForm._widgetProp[ui].maxLength" placeholder="请输入默认提示文字..."
                        mode="button"/>
    </a-form-item>
    <a-form-item label="显示字数统计：" field="showWordLimit">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].showWordLimit"/>
    </a-form-item>
</template>

<script setup>
import DividerHeader from "../components/DividerHeader.vue";
import TientorConfigArcoFormItem from "./FormItem.vue";

defineOptions({
    name: 'TientorConfigArcoInput'
})
const {ui, queryForm, selectIndex} = defineProps(['ui', 'queryForm', 'selectIndex'])
</script>
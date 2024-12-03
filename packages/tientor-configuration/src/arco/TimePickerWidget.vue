<template>
    <TientorConfigArcoFormItem :ui="ui" :queryForm="queryForm"/>
    <DividerHeader title="组件设置"/>
    <a-form-item label="类型：">
        <a-radio-group type="button" size="small" v-model="queryForm._widgetProp[ui].type" @change="typeChangeHandle">
            <a-radio value="time">时间</a-radio>
            <a-radio value="time-range">范围时间</a-radio>
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
    <template v-if="queryForm._widgetProp[ui].type==='time-range'">
        <a-form-item label="提示文字1：">
            <a-input v-model="queryForm._widgetProp[ui].placeholder[0]" placeholder="请输入默认提示文字..."/>
        </a-form-item>
        <a-form-item label="提示文字2：">
            <a-input v-model="queryForm._widgetProp[ui].placeholder[1]" placeholder="请输入默认提示文字..."/>
        </a-form-item>
    </template>
    <template v-else>
        <a-form-item label="提示文字：" field="placeholder">
            <a-input v-model="queryForm._widgetProp[ui].placeholder" placeholder="请输入默认提示文字..."/>
        </a-form-item>
    </template>
    <a-form-item label="12小时制：" field="use12Hours">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].use12Hours"/>
    </a-form-item>
    <a-form-item label="弹出框位置：">
        <a-select v-model="queryForm._widgetProp[ui].position" :options="positionOptions"/>
    </a-form-item>
    <a-form-item label="隐藏时销毁：" field="unmountOnClose">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].unmountOnClose"/>
    </a-form-item>
    <a-form-item label="确定状态：" field="disableConfirm" help="开启后直接点选时间不需要点击确认按钮">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].disableConfirm"/>
    </a-form-item>
</template>

<script setup>
import TientorConfigArcoFormItem from "./FormItem.vue";
import DividerHeader from "../components/DividerHeader.vue";

defineOptions({
    name: 'TientorConfigArcoTimePicker'
})

const {ui, queryForm, selectIndex} = defineProps(['ui', 'queryForm', 'selectIndex'])

// 弹出框位置
const positionOptions = [
    {label: '顶部', value: 'top'},
    {label: '顶部左侧', value: 'tl'},
    {label: '顶部右侧', value: 'tr'},
    {label: '底部', value: 'bottom'},
    {label: '底部左侧', value: 'bl'},
    {label: '底部右侧', value: 'br'}
]

onMounted(() => {
    nextTick(() => {
        typeChangeHandle(queryForm._widgetProp[ui].type)
    })
})
// 类型切换
const typeChangeHandle = (e) => {
    if (e === 'time-range') {
        queryForm._widgetProp[ui].defaultValue = [];
        queryForm._widgetProp[ui].placeholder = ['开始时间', '结束时间'];
    } else {
        queryForm._widgetProp[ui].defaultValue = '';
        queryForm._widgetProp[ui].placeholder = '开始时间';
    }
}
</script>
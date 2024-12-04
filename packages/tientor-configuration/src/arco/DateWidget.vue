<template>
    <TientorConfigArcoFormItem :ui="ui" :queryForm="queryForm"/>
    <DividerHeader title="组件设置"/>
    <a-form-item label="日期类型：">
        <a-select v-model="queryForm.tag" :options="dateTypesOptions" @change="dateTagsChangeHandle"/>
    </a-form-item>
    <a-form-item
        label="范围类型器："
        help="尽在 范围选择器 时支持"
        :disabled="queryForm.tag!=='range'"
    >
        <a-select v-model="queryForm._widgetProp[ui].mode" :options="rangeModeTypesOptions"/>
    </a-form-item>

    <template v-if="queryForm.tag==='range'">
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

    <a-form-item label="仅显示面板：" field="hideTrigger">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].hideTrigger"/>
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
    <a-form-item label="组件尺寸：">
        <a-radio-group type="button" size="small" v-model="queryForm._widgetProp[ui].size">
            <a-radio value="mini">mini</a-radio>
            <a-radio value="small">小</a-radio>
            <a-radio value="medium">默认</a-radio>
            <a-radio value="large">大</a-radio>
        </a-radio-group>
    </a-form-item>
    <a-form-item label="预设范围位置：">
        <a-radio-group type="button" size="small" v-model="queryForm._widgetProp[ui].shortcutsPosition">
            <a-radio value="left">左侧</a-radio>
            <a-radio value="bottom">底部</a-radio>
            <a-radio value="right">右侧</a-radio>
        </a-radio-group>
    </a-form-item>
    <a-form-item label="弹出框位置：">
        <a-select v-model="queryForm._widgetProp[ui].position" :options="positionOptions"/>
    </a-form-item>
    <a-form-item label="隐藏时销毁：" field="unmountOnClose">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].unmountOnClose"/>
    </a-form-item>
    <a-form-item label="键盘输入：" field="disabledInput">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].disabledInput"/>
    </a-form-item>
    <a-form-item label="缩写模式：" field="abbreviation">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].abbreviation"/>
    </a-form-item>
    <a-form-item label="时间显示：" field="showTime">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].showTime"/>
    </a-form-item>
    <a-form-item
        label="显示确认按钮："
        field="showConfirmBtn"
        help="开启时间显示默认支持"
        :disabled="queryForm._widgetProp[ui].showTime"
        class="mb-4"
    >
        <a-switch type="round" v-model="queryForm._widgetProp[ui].showConfirmBtn"/>
    </a-form-item>
    <a-form-item label="显示确认按钮：" field="dayStartOfWeek" help="每周的第一天开始于周几">
        <a-select v-model="queryForm._widgetProp[ui].dayStartOfWeek" :options="dayStartOfWeeks"/>
    </a-form-item>
</template>

<script setup>
import {construct, crush} from "radash";
import TientorConfigArcoFormItem from "./FormItem.vue";
import DividerHeader from "../components/DividerHeader.vue";

defineOptions({
    name: 'TientorConfigArcoDate'
})

const {ui, queryForm, selectIndex} = defineProps(['ui', 'queryForm', 'selectIndex'])

// 日期类型配置项
const dateTypesOptions = [
    {label: '基本选择器', value: 'date'},
    {label: '月份选择器', value: 'month'},
    {label: '年份选择器', value: 'year'},
    {label: '季度选择器', value: 'quarter'},
    {label: '周期选择器', value: 'week'},
    {label: '范围选择器', value: 'range'},
]

// 范围选择器类型
const rangeModeTypesOptions = construct(crush(dateTypesOptions))

// 弹出框位置
const positionOptions = [
    {label: '顶部', value: 'top'},
    {label: '顶部左侧', value: 'tl'},
    {label: '顶部右侧', value: 'tr'},
    {label: '底部', value: 'bottom'},
    {label: '底部左侧', value: 'bl'},
    {label: '底部右侧', value: 'br'}
]

// 每周的第一天开始于周几
const dayStartOfWeeks = [
    {label: '周日', value: 0},
    {label: '周一', value: 1},
    {label: '周二', value: 2},
    {label: '周三', value: 3},
    {label: '周四', value: 4},
    {label: '周五', value: 5},
    {label: '周六', value: 6},
]

onMounted(() => {
    nextTick(() => {
        dateTagsChangeHandle(queryForm.tag)
    })
})
// 日期类型选择触发事件
const dateTagsChangeHandle = (e) => {
    if (e === 'range') {
        queryForm._widgetProp[ui].defaultValue = [];
        queryForm._widgetProp[ui].placeholder = ['开始日期', '结束日期'];
    } else {
        queryForm._widgetProp[ui].defaultValue = '';
        queryForm._widgetProp[ui].placeholder = '';
    }
}
</script>
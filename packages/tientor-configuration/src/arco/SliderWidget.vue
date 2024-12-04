<template>
    <TientorConfigArcoFormItem :ui="ui" :queryForm="queryForm"/>
    <DividerHeader title="组件设置"/>
    <a-form-item label="默认值：" field="defaultValue">
        <a-input-number
            v-model="queryForm._widgetProp[ui].defaultValue"
            mode="button"
            :min="queryForm._widgetProp[ui].min"
            :max="queryForm._widgetProp[ui].max"
        />
    </a-form-item>
    <a-form-item label="滑动条方向：">
        <a-radio-group type="button" v-model="queryForm._widgetProp[ui].direction">
            <a-radio value="horizontal">水平</a-radio>
            <a-radio value="vertical">垂直</a-radio>
        </a-radio-group>
    </a-form-item>
    <a-form-item
        label="设置步长："
        field="step"
        help="建议设置能够被 max-min 整除的值，否则会出现可选最大值小于 max 的情况。当设置 show-ticks 时，显示步长刻度线。"
    >
        <a-input-number
            v-model="queryForm._widgetProp[ui].step"
            mode="button"
            :min="0"
        />
    </a-form-item>
    <a-form-item label="显示刻度线：" field="showTicks">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].showTicks"/>
    </a-form-item>
    <a-form-item label="最小值：" field="min">
        <a-input-number
            v-model="queryForm._widgetProp[ui].min"
            mode="button"
            :min="0"
        />
    </a-form-item>
    <a-form-item label="最大值：" field="max">
        <a-input-number
            v-model="queryForm._widgetProp[ui].max"
            mode="button"
            :min="0"
        />
    </a-form-item>
    <a-form-item label="禁用组件：" field="disabled">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].disabled"/>
    </a-form-item>
    <a-form-item label="输入框：" field="showInput">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].showInput"/>
    </a-form-item>
    <a-form-item
        label="范围选择："
        field="range"
        help="仅支持开启显示输入框时"
        :disabled="!queryForm._widgetProp[ui].showInput"
    >
        <a-switch type="round" v-model="queryForm._widgetProp[ui].range"/>
    </a-form-item>
    <a-form-item label="数值提示：" field="showTooltip">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].showTooltip"/>
    </a-form-item>
    <DividerHeader title="滑块标签组"/>
    <a-space direction="vertical" class="mb-5">
        <a-row :gutter="24" v-for="(item,index) in marks" :key="index">
            <a-col :span="10">
                <a-input-number v-model="item.value" mode="button" :min="0" @change="formatMarksHandle"/>
            </a-col>
            <a-col :span="10">
                <a-input v-model="item.label" @change="formatMarksHandle"/>
            </a-col>
            <a-col :span="4">
                <a-button shape="circle" @click="deleteMarksHandle(item)">
                    <icon-delete/>
                </a-button>
            </a-col>
        </a-row>
    </a-space>
    <a-button type="primary" long @click="addMarks">新增标签</a-button>
</template>

<script setup>
import DividerHeader from "../components/DividerHeader.vue";
import {uuid} from "../_utils/index.js";
import TientorConfigArcoFormItem from "./FormItem.vue";

defineOptions({
    name: 'TientorConfigArcoSlider'
})

const {ui, queryForm, selectIndex} = defineProps(['ui', 'queryForm', 'selectIndex'])

const marks = ref([])

onMounted(() => {
    nextTick(() => {
        queryForm._widgetProp[ui].marks ? Object.keys(queryForm._widgetProp[ui].marks).map(index => {
            marks.value.push({
                id: uuid(),
                label: queryForm._widgetProp[ui].marks[index],
                value: Number(index)
            })
        }) : ''
    })
})

// 新增滑块标签
const addMarks = () => {
    marks.value.push({
        id: uuid(),
        label: '',
        value: 0
    })
}

// 删除标签事件
const deleteMarksHandle = (data) => {
    const index = marks.value.findIndex(item => item.id === data.id)
    marks.value.splice(index, 1)
    formatMarksHandle()
}

const formatMarksHandle = () => {
    queryForm._widgetProp[ui].marks = marks.value.reduce((acc, item) => {
        acc[item.value] = item.label;
        return acc;
    }, {});
}
</script>
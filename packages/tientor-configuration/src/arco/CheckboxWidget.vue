<template>
    <TientorConfigArcoFormItem :ui="ui" :queryForm="queryForm"/>
    <DividerHeader title="组件设置"/>
    <a-form-item label="复选框组：" field="group">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].group" @change="checkboxChangeHandle"/>
    </a-form-item>
    <a-form-item label="禁用组件：" field="disabled">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].disabled"/>
    </a-form-item>
    <a-form-item label="办选状态：" field="indeterminate">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].indeterminate"/>
    </a-form-item>
    <a-form-item label="方向：" help="仅复选框组支持" :disabled="!queryForm._widgetProp[ui].group">
        <a-radio-group type="button" v-model="queryForm._widgetProp[ui].direction">
            <a-radio value="horizontal">水平</a-radio>
            <a-radio value="vertical">垂直</a-radio>
        </a-radio-group>
    </a-form-item>
    <a-form-item label="最多选中：" help="仅复选框组支持" field="max">
        <a-input-number v-model="queryForm._widgetProp[ui].max" :min="1" mode="button"/>
    </a-form-item>
    <DividerHeader title="复选框组选项"/>
    <a-space direction="vertical" class="mb-5">
        <a-row :gutter="24" v-for="(item,index) in queryForm._widgetProp[ui].options" :key="index">
            <a-col :span="10">
                <a-input v-model="item.label">
                    <template #prefix>文案:</template>
                </a-input>
            </a-col>
            <a-col :span="10">
                <a-input v-model="item.value">
                    <template #prefix>值:</template>
                </a-input>
            </a-col>
            <a-col :span="4">
                <a-button shape="circle" @click="deleteHandle(index)">
                    <icon-delete/>
                </a-button>
            </a-col>
        </a-row>
    </a-space>
    <a-button type="primary" long @click="addCheckboxGroup">新增标签</a-button>
</template>

<script setup>

import DividerHeader from "../components/DividerHeader.vue";
import TientorConfigArcoFormItem from "./FormItem.vue";

defineOptions({
    name: 'TientorConfigArcoCheckbox'
})
const {ui, queryForm, selectIndex} = defineProps(['ui', 'queryForm', 'selectIndex'])

// 复选框变更事件
const checkboxChangeHandle = (checked) => {
    if (checked) {
        queryForm.tag = 'checkboxGroup';
        queryForm._widgetProp[ui].defaultValue = [];
        // Array.from({length: 3}, (_, index) => {
        //     queryForm._widgetProp[ui].options.push({
        //         label: `Option ${index}`,
        //         value: `Option ${index}`,
        //     })
        // })
    } else {
        queryForm.tag = 'checkbox';
        queryForm._widgetProp[ui].defaultValue = '';
    }
}

const addCheckboxGroup = () => {
    queryForm._widgetProp[ui].options.push({
        label: '',
        value: ''
    })
}

// 删除事件
const deleteHandle = (index) => {
    queryForm._widgetProp[ui].options.splice(index, 1)
}
</script>
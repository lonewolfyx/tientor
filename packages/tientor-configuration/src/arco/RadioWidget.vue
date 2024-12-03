<template>
    <DividerHeader title="组件设置"/>
    <a-form-item label="单选框组：" field="group">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].group" @change="radioChangeHandle"/>
    </a-form-item>
    <a-form-item label="单选默认值：" :disabled="queryForm._widgetProp[ui].group">
        <a-input v-model="queryForm._widgetProp[ui]._slot.default" placeholder="请输入默认内容..."/>
    </a-form-item>
    <a-form-item label="单选类型：">
        <a-radio-group type="button" size="small" v-model="queryForm._widgetProp[ui].type">
            <a-radio value="radio">单选型</a-radio>
            <a-radio value="button">按钮型</a-radio>
        </a-radio-group>
    </a-form-item>
    <a-form-item label="组件尺寸：" help="仅单选框组支持" :disabled="!queryForm._widgetProp[ui].group">
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
    <a-form-item label="方向：" help="仅单选框组支持" :disabled="!queryForm._widgetProp[ui].group">
        <a-radio-group type="button" v-model="queryForm._widgetProp[ui].direction">
            <a-radio value="horizontal">水平</a-radio>
            <a-radio value="vertical">垂直</a-radio>
        </a-radio-group>
    </a-form-item>
    <DividerHeader title="单选框组选项"/>
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
    <a-button type="primary" long @click="addRadioGroup">新增标签</a-button>
</template>

<script setup>
import DividerHeader from "../components/DividerHeader.vue";

defineOptions({
    name: 'TientorConfigArcoRadio'
})
const {ui, queryForm, selectIndex} = defineProps(['ui', 'queryForm', 'selectIndex'])

// 单选框组选项
const radioGroupOptions = ref([])

// 监听单选框组变化
const radioChangeHandle = (checked) => {
    if (checked) {
        queryForm.tag = 'radioGroup';
    } else {
        queryForm.tag = 'radio';
    }
}

const addRadioGroup = () => {
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
<template>
    <TientorConfigArcoFormItem :ui="ui" :queryForm="queryForm"/>
    <DividerHeader title="组件设置"/>
    <a-form-item label="颜色格式：">
        <a-radio-group type="button" v-model="queryForm._widgetProp[ui].format">
            <a-radio value="hex">Hex</a-radio>
            <a-radio value="rgb">Rgb</a-radio>
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
    <a-form-item label="颜色值：" field="showText">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].showText"/>
    </a-form-item>
    <a-form-item label="历史颜色：" field="showHistory">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].showHistory"/>
    </a-form-item>
    <a-form-item label="预设颜色：" field="showHistory">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].showPreset"/>
    </a-form-item>
    <a-form-item label="禁用组件：" field="disabled">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].disabled"/>
    </a-form-item>
    <a-form-item label="禁用透明通道：" field="disabledAlpha">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].disabledAlpha"/>
    </a-form-item>
    <a-form-item label="颜色面板：" field="hideTrigger" help="开启后将仅显示颜色面板">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].hideTrigger"/>
    </a-form-item>
    <DividerHeader title="预设颜色的颜色组"/>
    <a-row>
        <a-col :span="12" v-for="(item,index) in queryForm._widgetProp[ui].presetColors" :key="item+index"
               style="margin-bottom:10px">
            <a-row>
                <a-col :span="16">
                    <a-color-picker v-model="queryForm._widgetProp[ui].presetColors[index]" showText/>
                </a-col>
                <a-col :span="5">
                    <a-button shape="circle" @click="deleteHandle(index)">
                        <icon-delete/>
                    </a-button>
                </a-col>
            </a-row>
        </a-col>
    </a-row>
    <a-button type="primary" long @click="addColors('presetColors')">新增预设颜色</a-button>
</template>

<script setup>
import DividerHeader from "../components/DividerHeader.vue";
import TientorConfigArcoFormItem from "./FormItem.vue";

defineOptions({
    name: 'TientorConfigArcoColor'
})
const {ui, queryForm, selectIndex} = defineProps(['ui', 'queryForm', 'selectIndex'])

// 增加颜色
const addColors = (type) => {
    queryForm._widgetProp[ui][type].push('')
}

// 删除颜色
const deleteHandle = (index) => {
    queryForm._widgetProp[ui].presetColors.splice(index, 1)
}
</script>
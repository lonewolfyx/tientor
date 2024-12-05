<template>
    <TientorConfigArcoFormItem :ui="ui" :queryForm="queryForm"/>
    <DividerHeader title="组件设置"/>
<!--    <a-form-item label="基础数据：">-->
<!--        <a-button>-->
<!--            <template #icon>-->
<!--                <icon-edit/>-->
<!--            </template>-->
<!--            数据编辑-->
<!--        </a-button>-->
<!--    </a-form-item>-->
    <a-form-item label="组件尺寸：">
        <a-radio-group type="button" size="small" v-model="queryForm._widgetProp[ui].size">
            <a-radio value="mini">mini</a-radio>
            <a-radio value="small">小</a-radio>
            <a-radio value="medium">默认</a-radio>
            <a-radio value="large">大</a-radio>
        </a-radio-group>
    </a-form-item>
    <a-form-item label="绑定值为路径：" field="pathMode">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].pathMode"/>
    </a-form-item>
    <a-form-item label="多选模式：" field="multiple">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].multiple"/>
    </a-form-item>
    <a-form-item label="禁用组件：" field="disabled">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].disabled"/>
    </a-form-item>
    <a-form-item label="搜索模式：" field="allowSearch">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].allowSearch"/>
    </a-form-item>
    <a-form-item label="允许清除：" field="allowClear">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].allowClear"/>
    </a-form-item>
    <a-form-item label="下级触发方式：">
        <a-radio-group type="button" v-model="queryForm._widgetProp[ui].expandTrigger">
            <a-radio value="click">Click</a-radio>
            <a-radio value="hover">Hover</a-radio>
        </a-radio-group>
    </a-form-item>
    <a-form-item label="提示文字：" field="placeholder">
        <a-input v-model="queryForm._widgetProp[ui].placeholder" placeholder="请输入默认提示文字..."/>
    </a-form-item>
    <a-form-item label="标签数量：" help="开启多选模式下选择的标签数量，0 则不限制">
        <a-input-number v-model="queryForm._widgetProp[ui].maxTagCount" :min="0" mode="button"/>
    </a-form-item>
    <a-form-item label="加载中：" field="loading">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].loading"/>
    </a-form-item>
    <a-form-item label="严格模式：" field="checkStrictly">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].checkStrictly"/>
    </a-form-item>
    <a-form-item label="搜索延迟时间：">
        <a-input-number v-model="queryForm._widgetProp[ui].searchDelay" :min="0" mode="button"/>
    </a-form-item>
    <a-form-item label="选项键值：" field="valueKey">
        <a-input v-model="queryForm._widgetProp[ui].valueKey"/>
    </a-form-item>
    <a-form-item label="展开子菜单：" field="expandChild">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].expandChild"/>
    </a-form-item>
    <a-form-item label="标签内容不换行：" field="tagNowrap">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].tagNowrap"/>
    </a-form-item>
</template>

<script setup>
import DividerHeader from "../components/DividerHeader.vue";
import TientorConfigArcoFormItem from "./FormItem.vue";

defineOptions({
    name: 'TientorConfigArcoCascader'
})
const {ui, queryForm, selectIndex} = defineProps(['ui', 'queryForm', 'selectIndex']);
</script>
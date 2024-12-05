<template>

<!--    <a-form-item label="基础数据：">-->
<!--        <a-button>-->
<!--            <template #icon>-->
<!--                <icon-edit/>-->
<!--            </template>-->
<!--            数据编辑-->
<!--        </a-button>-->
<!--    </a-form-item>-->
    <a-form-item label="提示文字：" field="placeholder">
        <a-input v-model="queryForm._widgetProp[ui].placeholder" placeholder="请输入默认提示文字..."/>
    </a-form-item>
    <a-form-item label="边框样式：" field="bordered">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].border"/>
    </a-form-item>
    <a-form-item label="组件尺寸：">
        <a-radio-group type="button" size="small" v-model="queryForm._widgetProp[ui].size">
            <a-radio value="mini">mini</a-radio>
            <a-radio value="small">小</a-radio>
            <a-radio value="medium">默认</a-radio>
            <a-radio value="large">大</a-radio>
        </a-radio-group>
    </a-form-item>
    <a-form-item label="多选：" field="multiple">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].multiple"/>
    </a-form-item>
    <a-form-item
        label="标签数量："
        help="开启多选模式后，可设置的标签选择数量"
        :disabled="!queryForm._widgetProp[ui].multiple"
    >
        <a-input-number v-model="queryForm._widgetProp[ui].maxTagCount" :min="0"/>
    </a-form-item>
    <a-form-item label="清空选择框：" field="allowClear">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].allowClear"/>
    </a-form-item>
    <a-form-item label="搜索模式：" field="allowSearch">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].allowSearch"/>
    </a-form-item>
    <a-form-item label="禁用组件：" field="disabled">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].disabled"/>
    </a-form-item>
    <a-form-item label="加载中：" field="loading">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].loading"/>
    </a-form-item>
    <a-form-item label="复选框：">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].treeCheckable"/>
    </a-form-item>
    <a-form-item label="父子节点关联：">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].treeCheckStrictly"/>
    </a-form-item>
    <a-form-item label="定制回显：">
        <a-radio-group type="button" v-model="queryForm._widgetProp[ui].treeCheckedStrategy">
            <a-radio value="all">all</a-radio>
            <a-radio value="parent">parent</a-radio>
            <a-radio value="child">child</a-radio>
        </a-radio-group>
    </a-form-item>
    <a-form-item label="虚拟滚动：">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].scrollbar"/>
    </a-form-item>
    <a-form-item label="显示 Header：" help="空状态时是否显示 header">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].showHeaderOnEmpty"/>
    </a-form-item>
    <a-form-item label="显示 footer：" help="空状态时是否显示 footer">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].showFooterOnEmpty"/>
    </a-form-item>
    <DividerHeader title="节点数据字段名设置"/>
    <a-form-item label="索引值：" help="指定 key 在 TreeNodeData 中的字段名">
        <a-input v-model="queryForm._widgetProp[ui].fieldNames.key"/>
    </a-form-item>
    <a-form-item label="展示值：" help="指定 title 在 TreeNodeData 中的字段名">
        <a-input v-model="queryForm._widgetProp[ui].fieldNames.title"/>
    </a-form-item>
    <a-form-item label="子节点值：" help="指定 children 在 TreeNodeData 中的字段名">
        <a-input v-model="queryForm._widgetProp[ui].fieldNames.children"/>
    </a-form-item>
</template>

<script setup>
import DividerHeader from "../components/DividerHeader.vue";

defineOptions({
    name: 'TientorConfigArcoTreeSelect'
})
const {ui, queryForm, selectIndex} = defineProps(['ui', 'queryForm', 'selectIndex']);
</script>
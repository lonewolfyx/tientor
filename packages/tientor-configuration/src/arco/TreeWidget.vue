<template>
    <TientorConfigArcoFormItem :ui="ui" :queryForm="queryForm"/>
    <DividerHeader title="组件设置"/>
    <!--    <a-form-item label="基础数据：">-->
    <!--        {{queryForm._widgetProp[ui].data}}-->

    <!--        <a-button type="primary">-->
    <!--            <template #icon>-->
    <!--                <icon-edit />-->
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
    <a-form-item label="占据一行：" field="blockNode">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].blockNode"/>
    </a-form-item>
    <a-form-item label="展开父节点：" field="defaultExpandAll">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].defaultExpandAll"/>
    </a-form-item>
    <a-form-item label="多选节点：" field="multiple">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].multiple"/>
    </a-form-item>
    <a-form-item label="节点复选框：" field="checkable">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].checkable"/>
    </a-form-item>
    <a-form-item label="父子关联：" field="checkStrictly" help="是否取消父子节点关联">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].checkStrictly"/>
    </a-form-item>
    <a-form-item label="回填方式：">
        <a-radio-group type="button" v-model="queryForm._widgetProp[ui].checkedStrategy">
            <a-radio value="all">所有</a-radio>
            <a-radio value="parent">父子节点</a-radio>
            <a-radio value="child">子节点</a-radio>
        </a-radio-group>
    </a-form-item>
    <a-form-item label="连接线：" field="showLine">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].showLine"/>
    </a-form-item>
    <a-form-item label="拖拽节点：" field="draggable">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].draggable"/>
    </a-form-item>
    <a-form-item label="节点父节点：" field="defaultExpandSelected" help="是否默认展开已选中节点的父节点">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].defaultExpandSelected"/>
    </a-form-item>
    <a-form-item label="复选框父节点：" field="defaultExpandChecked" help="是否默认展开已选中复选框节点的父节点">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].defaultExpandChecked"/>
    </a-form-item>
    <a-form-item label="展开父节点：" field="autoExpandParent" help="是否自动展开已展开节点的父节点">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].autoExpandParent"/>
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

    <DividerHeader title="虚拟列表设置"/>
    <a-form-item label="虚拟列表：" field="virtual">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].virtual" @change="virtualHandle"/>
    </a-form-item>
    <a-form-item label="高度：">
        <a-input-number
            v-model="queryForm._widgetProp[ui].virtualListProps.height"
            :min="0"
            mode="button"
            placeholder="默认虚拟列表高度"
        />
    </a-form-item>
    <a-form-item label="固定高度：">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].virtualListProps.fixedSize"/>
    </a-form-item>
    <a-form-item label="默认数量：" help="可是窗口所呈现数量">
        <a-input-number
            v-model="queryForm._widgetProp[ui].virtualListProps.threshold"
            :min="0"
            mode="button"
        />
    </a-form-item>
    <a-form-item label="预估高度：" help="元素高度不固定时的预估高度">
        <a-input-number
            v-model="queryForm._widgetProp[ui].virtualListProps.estimatedSize"
            :min="0"
            mode="button"
        />
    </a-form-item>
    <a-form-item label="元素数量：" help="视口边界外提前挂载的元素数量">
        <a-input-number
            v-model="queryForm._widgetProp[ui].virtualListProps.buffer"
            :min="0"
            mode="button"
        />
    </a-form-item>
</template>

<script setup>
import DividerHeader from "../components/DividerHeader.vue";
import TientorConfigArcoFormItem from "./FormItem.vue";

defineOptions({
    name: 'TientorConfigArcoTree'
})
const {ui, queryForm, selectIndex} = defineProps(['ui', 'queryForm', 'selectIndex']);

const virtualHandle = (checked) => {
    if (checked) {
        queryForm._widgetProp[ui].virtualListProps.height = 500;
    } else {
        queryForm._widgetProp[ui].virtualListProps.height = NaN;
    }
}
</script>
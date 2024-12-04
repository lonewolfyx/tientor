<template>
    <TientorConfigArcoFormItem :ui="ui" :queryForm="queryForm"/>
    <DividerHeader title="组件设置"/>
    <a-form-item label="默认值：" field="defaultValue">
        <a-input type="round" v-model="queryForm._widgetProp[ui].defaultValue"/>
    </a-form-item>
    <a-form-item label="基础数据：">
        <a-button>
            <template #icon>
                <icon-edit/>
            </template>
            数据编辑
        </a-button>
    </a-form-item>
    <a-form-item label="多选模式：" field="multiple">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].multiple"/>
    </a-form-item>
    <a-form-item label="组件尺寸：">
        <a-radio-group type="button" size="small" v-model="queryForm._widgetProp[ui].size">
            <a-radio value="mini">mini</a-radio>
            <a-radio value="small">小</a-radio>
            <a-radio value="medium">默认</a-radio>
            <a-radio value="large">大</a-radio>
        </a-radio-group>
    </a-form-item>
    <a-form-item label="选项键值：" field="valueKey">
        <a-input v-model="queryForm._widgetProp[ui].valueKey"/>
    </a-form-item>
    <a-form-item label="提示文字：" field="placeholder">
        <a-input v-model="queryForm._widgetProp[ui].placeholder" placeholder="请输入默认提示文字..."/>
    </a-form-item>
    <a-form-item label="允许清空输入框：" field="allowClear">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].allowClear"/>
    </a-form-item>
    <a-form-item label="禁用组件：" field="disabled">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].disabled"/>
    </a-form-item>
    <a-form-item label="允许创建：" field="allowCreate">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].allowCreate"/>
    </a-form-item>
    <a-form-item
        label="标签数量："
        help="开启多选模式后，可设置的标签选择数量"
        :disabled="!queryForm._widgetProp[ui].multiple"
    >
        <a-input-number v-model="queryForm._widgetProp[ui].maxTagCount" :min="0"/>
    </a-form-item>
    <a-form-item
        label="多选数量："
        help="开启多选模式后，可设置的选择数量"
        :disabled="!queryForm._widgetProp[ui].multiple"
    >
        <a-input-number mode="button" v-model="queryForm._widgetProp[ui].limit" :min="0"/>
    </a-form-item>
    <a-form-item label="边框样式：" field="bordered">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].bordered"/>
    </a-form-item>
    <a-form-item label="默认第一个：" help="在无值时默认选择第一个选项">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].defaultActiveFirstOption"/>
    </a-form-item>
    <a-form-item label="隐藏时销毁：" field="unmountOnClose">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].unmountOnClose"/>
    </a-form-item>
    <a-form-item label="额外显示：" help="在下拉菜单中显示额外选项">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].showExtraOptions"/>
    </a-form-item>
    <a-form-item label="允许搜索：" field="allowSearch">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].allowSearch"/>
    </a-form-item>
    <a-form-item label="搜索延迟时间：" help="触发搜索事件的延迟时间，单位毫秒"
                 :disabled="!queryForm._widgetProp[ui].allowSearch">
        <a-input-number mode="button" v-model="queryForm._widgetProp[ui].searchDelay"/>
    </a-form-item>
    <a-form-item label="是否加载中：" field="loading">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].loading"/>
    </a-form-item>
    <a-form-item label="显示 Header：" help="空状态时是否显示 header">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].showHeaderOnEmpty"/>
    </a-form-item>
    <a-form-item label="显示 footer：" help="空状态时是否显示 footer">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].showFooterOnEmpty"/>
    </a-form-item>
    <a-form-item label="标签换行：" field="tagNowrap">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].tagNowrap"/>
    </a-form-item>
    <DividerHeader title="虚拟滚动设置"/>
    <a-form-item label="虚拟滚动：">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].scrollbar"/>
    </a-form-item>
    <a-form-item label="高度：" :disabled="!queryForm._widgetProp[ui].scrollbar">
        <a-input-number
            v-model="queryForm._widgetProp[ui].virtualListProps.height"
            :min="0"
            mode="button"
            placeholder="默认虚拟列表高度"
        />
    </a-form-item>
    <a-form-item label="固定高度：" :disabled="!queryForm._widgetProp[ui].scrollbar">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].virtualListProps.fixedSize"/>
    </a-form-item>
    <a-form-item label="默认数量：" help="可是窗口所呈现数量" :disabled="!queryForm._widgetProp[ui].scrollbar">
        <a-input-number
            v-model="queryForm._widgetProp[ui].virtualListProps.threshold"
            :min="0"
            mode="button"
        />
    </a-form-item>
    <a-form-item label="预估高度：" help="元素高度不固定时的预估高度" :disabled="!queryForm._widgetProp[ui].scrollbar">
        <a-input-number
            v-model="queryForm._widgetProp[ui].virtualListProps.estimatedSize"
            :min="0"
            mode="button"
        />
    </a-form-item>
    <a-form-item label="元素数量：" help="视口边界外提前挂载的元素数量" :disabled="!queryForm._widgetProp[ui].scrollbar">
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
    name: 'TientorConfigArcoSelect'
})
const {ui, queryForm, selectIndex} = defineProps(['ui', 'queryForm', 'selectIndex']);

const data = [{
    key: '1',
    valueName: 'sadasd',
    value: 'Jane Doe',
    label: 23000,
}]
</script>
<template>
    <a-form-item label="隐藏标签：">
        <a-switch type="round" v-model="queryForm._itemProps[ui].hideLabel"/>
    </a-form-item>
    <a-form-item label="隐藏标签：">
        <a-switch type="round" v-model="queryForm._itemProps[ui].hideLabel"/>
    </a-form-item>
    <a-form-item label="标签文本：" field="label">
        <a-input v-model="queryForm._itemProps[ui].label" placeholder="请输入默认的标签文本..."/>
    </a-form-item>
    <a-form-item label="表单数据值：" field="field">
        <a-input v-model="queryForm._itemProps[ui].field" placeholder="请输入默认的表单数据值..."/>
    </a-form-item>
    <a-form-item
        label="提示内容："
        field="tooltip"
        help="若编辑标签文本后侧会有一个问号图标"
    >
        <a-input v-model="queryForm._itemProps[ui].tooltip" placeholder="请输入默认的tooltip..."/>
    </a-form-item>
    <a-form-item label="标签冒号：" field="showColon">
        <a-switch type="round" v-model="queryForm._itemProps[ui].showColon"/>
    </a-form-item>
    <a-form-item label="是否禁用：" field="disabled">
        <a-switch type="round" v-model="queryForm._itemProps[ui].disabled"/>
    </a-form-item>
    <a-form-item label="帮助文案：" field="help">
        <a-input v-model="queryForm._itemProps[ui].help" placeholder="请输入默认的帮助文案..."/>
    </a-form-item>
    <a-form-item label="额外文案：" field="extra">
        <a-input v-model="queryForm._itemProps[ui].extra" placeholder="请输入默认额外显示的文案..."/>
    </a-form-item>
    <a-form-item label="必填：" field="required">
        <a-switch type="round" v-model="queryForm._itemProps[ui].required"/>
    </a-form-item>
    <a-form-item
        label="星号位置："
        field="asteriskPosition"
        :disabled="!queryForm._itemProps[ui].required"
        help="仅开启必填项有效"
    >
        <a-radio-group type="button" size="small" v-model="queryForm._itemProps[ui].asteriskPosition">
            <a-radio value="start">前</a-radio>
            <a-radio value="end">后</a-radio>
        </a-radio-group>
    </a-form-item>
    <a-form-item
        label="隐藏星号："
        field="hideAsterisk"
        :disabled="!queryForm._itemProps[ui].required"
        help="仅开启必填项有效"
    >
        <a-switch type="round" v-model="queryForm._itemProps[ui].hideAsterisk"/>
    </a-form-item>
</template>

<script setup>
defineOptions({
    name: 'TientorConfigArcoFormItem'
});

// const {ui, queryForm} = useAttrs()
const {ui, queryForm} = defineProps(['ui', 'queryForm'])
</script>

<style scoped lang="scss">

</style>
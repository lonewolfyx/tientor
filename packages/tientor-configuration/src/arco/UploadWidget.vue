<template>
    <DividerHeader title="组件设置"/>
    <a-form-item label="上传地址：" field="action">
        <a-input v-model="queryForm._widgetProp[ui].action" placeholder="请输入上传请求地址"/>
    </a-form-item>
    <a-form-item label="文件类型：" help="接收的上传文件类型">
        <a-input v-model="queryForm._widgetProp[ui].accept" placeholder="请输入接受的文件类型"/>
    </a-form-item>
    <a-form-item label="禁用组件：" field="disabled">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].disabled"/>
    </a-form-item>
    <a-form-item label="批量上传：" field="multiple">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].multiple"/>
    </a-form-item>
    <a-form-item label="文件夹上传：" field="directory">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].directory"/>
    </a-form-item>
    <a-form-item label="拖拽上传：" field="draggable">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].draggable"/>
    </a-form-item>
    <a-form-item label="提示文字：">
        <a-input v-model="queryForm._widgetProp[ui].tip"/>
    </a-form-item>
    <a-form-item label="携带 Cookie：" field="withCredentials">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].withCredentials"/>
    </a-form-item>
    <a-form-item label="自动上传：" field="autoUpload">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].autoUpload"/>
    </a-form-item>
    <a-form-item label="显示文件列表：" field="showFileList">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].showFileList"/>
    </a-form-item>
    <a-form-item label="显示删除按钮：" field="showRemoveButton">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].showRemoveButton"/>
    </a-form-item>
    <a-form-item label="显示重试按钮：" field="showRetryButton">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].showRetryButton"/>
    </a-form-item>
    <a-form-item label="显示取消按钮：" field="showCancelButton">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].showCancelButton"/>
    </a-form-item>
    <a-form-item label="显示上传按钮：" field="showUploadButton">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].showUploadButton"/>
    </a-form-item>
    <a-form-item label="照片墙预览按钮：" field="showPreviewButton">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].showPreviewButton"/>
    </a-form-item>
    <a-form-item label="超链接下载属性：" field="download">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].download"/>
    </a-form-item>
    <a-form-item label="Url 呈现："
                 help="在列表模式下，如果上传的文件存在 URL 则展示链接。如果关闭仅展示文字并且点击可以触发 `preview` 事件">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].showLink"/>
    </a-form-item>
    <a-form-item label="图片组件预览：" field="imagePreview">
        <a-switch type="round" v-model="queryForm._widgetProp[ui].imagePreview"/>
    </a-form-item>

    <a-form-item label="Img 属性：">
        <a-radio-group type="button" v-model="queryForm._widgetProp[ui].imageLoading">
            <a-radio value="eager">Eager</a-radio>
            <a-radio value="lazy">Lazy</a-radio>
        </a-radio-group>
    </a-form-item>
    <a-form-item label="图片列表属性：">
        <a-radio-group type="button" size="mini" v-model="queryForm._widgetProp[ui].listType">
            <a-radio value="text">文本</a-radio>
            <a-radio value="picture">照片列表</a-radio>
            <a-radio value="picture-card">照片墙</a-radio>
        </a-radio-group>
    </a-form-item>
</template>

<script setup>
import DividerHeader from "../components/DividerHeader.vue";

defineOptions({
    name: 'TientorConfigArcoUpload'
})
const {ui, queryForm, selectIndex} = defineProps(['ui', 'queryForm', 'selectIndex']);
</script>
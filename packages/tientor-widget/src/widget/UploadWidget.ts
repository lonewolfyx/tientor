import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

const ArcoWidgetProps = {
    // 默认值
    defaultValue: '',
    // 接收的上传文件类型 https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#htmlattrdefaccept
    accept: '',
    // 上传的URL
    action: '',
    // 是否禁用
    disabled: false,
    // 是否支持多文件上传
    multiple: false,
    // 是否支持文件夹上传（需要浏览器支持）
    directory: false,
    // 是否支持拖拽上传
    draggable: false,
    // 提示文字
    tip: '',
    // // 上传请求附加的头信息
    // headers: {},
    // // 上传请求附加的数据
    // data: [],
    // // 上传的文件名
    // name: {},
    // 上传请求是否携带 cookie
    withCredentials: false,
    // // 限制上传文件的数量。`0`表示不限制
    // limit: 0,
    // 是否自动上传文件
    autoUpload: true,
    // 是否显示文件列表
    showFileList: true,
    // 是否显示删除按钮
    showRemoveButton: true,
    // 是否显示重试按钮
    showRetryButton: true,
    // 是否显示取消按钮
    showCancelButton: true,
    // 是否显示上传按钮
    showUploadButton: true,
    // 照片墙是否显示预览按钮
    showPreviewButton: true,
    // 是否在 `<a>` 链接上添加 download 属性
    download: false,
    // 在列表模式下，如果上传的文件存在 URL 则展示链接。如果关闭仅展示文字并且点击可以触发 `preview` 事件。
    showLink: true,
    // `<img>` 的原生 HTML 属性，需要浏览器支持 'eager' | 'lazy'
    imageLoading: 'lazy',
    // 图片列表类型 text' | 'picture' | 'picture-card
    listType: 'text',
    // 是否使用 ImagePreview 组件进行预览
    imagePreview: false,
}

export const UploadWidget: WidgetInterface = {
    id: '5e86d5a848e44ba6801ea8faaa9b9dad',
    name: '上传-✔',
    icon: 'widget-upload',
    tag: 'upload',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _config: {
        arco: 'TientorConfigArcoUpload'
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '上传'
            }
        },
    },
    _widgetProp: {
        arco: {...ArcoWidgetProps}
    }
}
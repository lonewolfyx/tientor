export default {
    id: '0f9167ba92764612b172e6c278e9030a',
    name: '输入框',
    icon: 'widget-input',
    tag: 'input',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {
        // 标签文本
        label: '输入框',
        // 是否禁用
        disabled: false,
        // 是否必填
        required: true,
        // 表单属性值 · arco 版本
        field: '',
        // 表单属性值 · element-plus 版本
        prop: '',
        // 表单项校验规则（优先级高于 form 的 rules）
        rules: [] || {},

        // 以下仅支持 arco 组件
        // 提示内容
        tooltip: '',
        // 是否显示冒号
        showColon: false,
        // 帮助文案
        help: '',
        // 必填星号前后位
        asteriskPosition: '',
        // 是否隐藏标签
        hideLabel: false,
        // 是否隐藏星号
        hideAsterisk:false
    },
    _widgetProp: {}
}
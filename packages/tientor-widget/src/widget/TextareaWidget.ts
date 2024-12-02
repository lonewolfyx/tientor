import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";


const ArcoWidgetProps = {
    // 默认值
    defaultValue: '',
    // 是否禁用
    disabled: false,
    // 提示文字
    placeholder: '',
    // 输入值的最大长度
    maxLength: 0,
    // 是否显示字数统计
    showWordLimit: false,
    // 是否允许清空输入框
    allowClear: false,
    // 是否自适应高度
    autoSize: false
}

export const TextareaWidget: WidgetInterface = {
    id: '4d4fcb2e5e7e4f578b8fd015426cdf32',
    name: '多行文本框-✔',
    icon: 'widget-textarea',
    tag: 'textarea',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    // 配置面板
    _config: {
        arco: 'TientorConfigArcoTextarea',
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '多行文本框'
            }
        },
    },
    _widgetProp: {
        arco: {...ArcoWidgetProps}
    }
}
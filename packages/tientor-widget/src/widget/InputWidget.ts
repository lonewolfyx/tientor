import {ArcoItemProps} from "../item/arco";
import {WidgetInterface} from "../types/widget";

const ArcoWidgetProps = {
    // 默认值
    defaultValue: '',
    // 输入框大小
    size: 'medium',
    // 是否允许清空输入框
    allowClear: false,
    // 是否禁用
    disabled: false,
    // 是否为只读状态
    readonly: false,
    // 提示文字
    placeholder: '',
    // 输入值的最大长度
    maxLength: 0,
    // 是否显示字数统计
    showWordLimit: false
}

export const InputWidget: WidgetInterface = {
    id: '0f9167ba92764612b172e6c278e9030a',
    name: '输入框',
    icon: 'widget-input',
    tag: 'input',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    // 配置面板
    _config: {
        arco: 'TientorConfigArcoInput',
    },
    // 控件 Props
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '输入框',
            }
        },
    },
    _widgetProp: {
        arco: {...ArcoWidgetProps}
    }
}
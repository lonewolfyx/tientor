import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

const ArcoWidgetProps = {
    // 默认值
    defaultValue: false,
    // 是否禁用
    disabled: false,
    // 是否为加载中状态
    loading: false,
    // 开关的类型
    type: 'circle',
    // 开关的大小
    size: 'medium',
    // 选中时的值
    checkedValue: '',
    // 未选中时的值
    uncheckedValue: '',
    // 选中时的开关颜色
    checkedColor: '#165dff',
    // 未选中时的开关颜色
    uncheckedColor: '#c9cdd4',
    // 打开状态时的文案
    checkedText: '',
    // 关闭状态时的文案
    uncheckedText: ''
}

export const SwitchWidget: WidgetInterface = {
    id: '7385a57c74e64243bf3915a2a3f43a3d',
    name: '开关-✔',
    icon: 'widget-switch',
    tag: 'switch',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _config: {
        arco: 'TientorConfigArcoSwitch'
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '开关'
            }
        },
    },
    _widgetProp: {
        arco: {...ArcoWidgetProps}
    }
}
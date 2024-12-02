import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

const ArcoWidgetProps = {
    // 默认值
    defaultValue: '',
    // 输入框大小
    size: 'medium',
    // 是否允许清空输入框
    allowClear: false,
    // 是否显示源内容
    visibility: true,
    // 是否禁用
    disabled: false,
    // 提示文字
    placeholder: '',
    // 输入值的最大长度
    maxLength: 0,
    // 是否显示字数统计
    showWordLimit: false,
    // 是否显示可见按钮
    invisibleButton: false
}

export const PasswordWidget: WidgetInterface = {
    id: 'e0b2862a2fd44eeb8eab562b843349f1',
    name: '密码输入框-✔',
    icon: 'widget-password',
    tag: 'password',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    // 配置面板
    _config: {
        arco: 'TientorConfigArcoPassword',
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '密码输入框'
            }
        },
    },
    _widgetProp: {
        arco: {...ArcoWidgetProps}
    }
}
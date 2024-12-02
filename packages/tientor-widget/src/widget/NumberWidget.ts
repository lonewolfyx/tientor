import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

const ArcoWidgetProps = {
    // 默认值
    // defaultValue: 0,
    // 按钮模式
    mode: 'embed',
    // 数字精度
    precision: 0,
    // 数字变化步长
    step: 1,
    // 输入框大小
    size: 'medium',
    // 是否禁用
    disabled: false,
    // 最大值
    max: 10,
    // 最小值
    min: 0,
    // 提示文本
    placeholder: '',
    // 是否隐藏按钮
    hideButton: false,
    // 是否允许清空输入框
    allowClear: false,
    // 是否为只读状态
    readonly: false,
}
export const NumberWidget: WidgetInterface = {
    id: 'dc7a6cdbaf8b41679d1d3a3f7d0c8599',
    name: '数字输入框-✔',
    icon: 'widget-number',
    tag: 'number',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    // 配置面板
    _config: {
        arco: 'TientorConfigArcoNumber',
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '数字输入框'
            }
        },
    },
    _widgetProp: {
        arco: {...ArcoWidgetProps}
    }
}
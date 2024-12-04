import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

const ArcoWidgetProps = {
    // 默认值
    defaultValue: '',
    // 是否单选组
    group: false,
    // 类型
    type: 'radio',
    // 是否禁用
    disable: false,
    value: '',
    // 单选框组的尺寸
    size: 'medium',
    // 单选框组的方向
    direction: 'horizontal',
    // 单选框组选项
    options: [],
    // 插槽
    _slot: {
        default: '单选框'
    }
}

export const RadioWidget: WidgetInterface = {
    id: '3fc9964787444bedae87c41982f59c1f',
    name: '单选框-✔',
    icon: 'widget-radio',
    tag: 'radio',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _config: {
        arco: 'TientorConfigArcoRadio'
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '单选框'
            }
        },
    },
    _widgetProp: {
        arco: {...ArcoWidgetProps}
    }
}
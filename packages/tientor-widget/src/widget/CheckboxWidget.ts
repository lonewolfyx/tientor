import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

const ArcoWidgetProps = {
    // 默认值
    defaultValue: '',
    // 是否复选框组
    group: false,
    // 禁用
    disabled: false,
    // 是否为半选状态
    indeterminate: false,
    // 支持最多选中的数量
    max: 1,
    // 复选框的排列方向
    direction: 'horizontal',
    // 复选框组选项
    options: [
        {
            "label": "Option 1",
            "value": "Option 1"
        },
        {
            "label": "Option 2",
            "value": "Option 2"
        },
        {
            "label": "Option 3",
            "value": "Option 3"
        }
    ],
    // 插槽
    _slot: {
        default: 'Option'
    }
}

export const CheckboxWidget: WidgetInterface = {
    id: '1717342a744843e084da5e09647051ea',
    name: '多选框-✔',
    icon: 'widget-checkbox',
    tag: 'checkbox',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _config: {
        arco: 'TientorConfigArcoCheckbox'
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '多选框',
            }
        },
    },
    _widgetProp: {
        arco: {...ArcoWidgetProps}
    }
};
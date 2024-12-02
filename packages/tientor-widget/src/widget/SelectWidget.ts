import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

export const SelectWidget: WidgetInterface = {
    name: '选择器',
    icon: 'widget-select',
    tag: 'select',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '选择器'
            }
        },
    },
    _widgetProp: {}
}
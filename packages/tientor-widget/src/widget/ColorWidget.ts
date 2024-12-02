import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

export const ColorWidget: WidgetInterface = {
    name: '颜色选择器',
    icon: 'widget-color',
    tag: 'color',
    enabled: {
        element: true,
        antv: false,
        arco: true
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '颜色选择器'
            }
        },
    },
    _widgetProp: {}
}
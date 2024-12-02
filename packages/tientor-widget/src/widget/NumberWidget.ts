import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

export const NumberWidget: WidgetInterface = {
    name: '数字输入框',
    icon: 'widget-number',
    tag: 'number',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '数字输入框'
            }
        },
    },
    _widgetProp: {}
}
import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

export const SwitchWidget: WidgetInterface = {
    name: '开关',
    icon: 'widget-switch',
    tag: 'switch',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '开关'
            }
        },
    },
    _widgetProp: {}
}
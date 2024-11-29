import {WidgetInterface} from "../types/widget";

export const SwitchWidget: WidgetInterface = {
    name: '开关',
    icon: 'widget-switch',
    tag: 'switch',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {},
    _widgetProp: {}
}
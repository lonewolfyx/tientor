import {WidgetInterface} from "../types/widget";

export const NumberWidget: WidgetInterface = {
    name: '数字输入框',
    icon: 'widget-number',
    tag: 'number',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {},
    _widgetProp: {}
}
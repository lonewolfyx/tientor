import {WidgetInterface} from "../types/widget";

export const DateWidget: WidgetInterface = {
    name: '日期选择器',
    icon: 'widget-date',
    tag: 'date',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {},
    _widgetProp: {}
}
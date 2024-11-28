import {WidgetInterface} from "@/types/widget";

export const DateTimeWidget: WidgetInterface = {
    name: '日期时间选择器',
    icon: 'widget-date-time',
    tag: 'dateTime',
    enabled: {
        element: true,
        antv: false,
        arco: false
    },
    _itemProps: {},
    _widgetProp: {}
}
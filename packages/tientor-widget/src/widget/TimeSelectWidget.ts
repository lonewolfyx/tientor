import {WidgetInterface} from "@/types/widget";

export const TimeSelectWidget: WidgetInterface = {
    name: '时间选择',
    icon: 'widget-time-select',
    tag: 'timeSelect',
    enabled: {
        element: true,
        antv: false,
        arco: false
    },
    _itemProps: {},
    _widgetProp: {}
}
import {WidgetInterface} from "@/types/widget";

export const TimePickerWidget: WidgetInterface = {
    name: '时间选择器',
    icon: 'widget-time-picker',
    tag: 'timePicker',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {},
    _widgetProp: {}
}
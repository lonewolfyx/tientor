import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

export const TimePickerWidget: WidgetInterface = {
    name: '时间选择器',
    icon: 'widget-time-picker',
    tag: 'timePicker',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '时间选择器'
            }
        },
    },
    _widgetProp: {}
}
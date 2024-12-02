import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

export const TimeSelectWidget: WidgetInterface = {
    name: '时间选择',
    icon: 'widget-time-select',
    tag: 'timeSelect',
    enabled: {
        element: true,
        antv: false,
        arco: false
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '时间选择'
            }
        },
    },
    _widgetProp: {}
}
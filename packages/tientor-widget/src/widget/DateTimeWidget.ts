import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

export const DateTimeWidget: WidgetInterface = {
    name: '日期时间选择器',
    icon: 'widget-date-time',
    tag: 'dateTime',
    enabled: {
        element: true,
        antv: false,
        arco: false
    },
    _config: {},
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '日期时间选择器'
            }
        },
    },
    _widgetProp: {}
}
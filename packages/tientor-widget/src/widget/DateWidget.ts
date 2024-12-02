import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

export const DateWidget: WidgetInterface = {
    name: '日期选择器',
    icon: 'widget-date',
    tag: 'date',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '日期选择器'
            }
        },
    },
    _widgetProp: {}
}
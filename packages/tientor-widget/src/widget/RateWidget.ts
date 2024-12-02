import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

export const RateWidget: WidgetInterface = {
    name: '评分',
    icon: 'widget-rate',
    tag: 'rate',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '评分'
            }
        },
    },
    _widgetProp: {}
}
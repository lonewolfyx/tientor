import {WidgetInterface} from "@/types/widget";

export const RateWidget: WidgetInterface = {
    name: '评分',
    icon: 'widget-rate',
    tag: 'rate',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {},
    _widgetProp: {}
}
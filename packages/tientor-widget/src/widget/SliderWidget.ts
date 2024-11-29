import {WidgetInterface} from "../types/widget";

export const SliderWidget: WidgetInterface = {
    name: '滑块',
    icon: 'widget-slider',
    tag: 'slider',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {},
    _widgetProp: {}
}
import {WidgetInterface} from "@/types/widget";

export const ColorWidget: WidgetInterface = {
    name: '颜色选择器',
    icon: 'widget-color',
    tag: 'color',
    enabled: {
        element: true,
        antv: false,
        arco: true
    },
    _itemProps: {},
    _widgetProp: {}
}
import {WidgetInterface} from "@/types/widget";

export const SelectWidget: WidgetInterface = {
    name: '选择器',
    icon: 'widget-select',
    tag: 'select',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {},
    _widgetProp: {}
}
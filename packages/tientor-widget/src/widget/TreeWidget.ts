import {WidgetInterface} from "@/types/widget";

export const TreeWidget: WidgetInterface = {
    name: '树形控件',
    icon: 'widget-tree',
    tag: 'tree',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {},
    _widgetProp: {}
}
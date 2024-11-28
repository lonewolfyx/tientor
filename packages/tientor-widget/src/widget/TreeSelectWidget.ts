import {WidgetInterface} from "@/types/widget";

export const TreeSelectWidget: WidgetInterface = {
    name: '树形选择器',
    icon: 'widget-tree-select',
    tag: 'treeSelect',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {},
    _widgetProp: {}
}
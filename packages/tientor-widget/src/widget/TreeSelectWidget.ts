import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

export const TreeSelectWidget: WidgetInterface = {
    name: '树形选择器',
    icon: 'widget-tree-select',
    tag: 'treeSelect',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _config: {},
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '树形选择'
            }
        },
    },
    _widgetProp: {}
}
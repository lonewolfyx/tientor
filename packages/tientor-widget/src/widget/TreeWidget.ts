import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

export const TreeWidget: WidgetInterface = {
    name: '树形控件',
    icon: 'widget-tree',
    tag: 'tree',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '树形控件'
            }
        },
    },
    _widgetProp: {}
}
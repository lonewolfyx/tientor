import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

export const CascaderWidget: WidgetInterface = {
    name: '级联选择器',
    icon: 'widget-cascader',
    tag: 'cascader',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '级联选择器',
            }
        },
    },
    _widgetProp: {}
};
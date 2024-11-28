import {WidgetInterface} from "@/types/widget";

export const CascaderWidget: WidgetInterface = {
    name: '级联选择器',
    icon: 'widget-cascader',
    tag: 'cascader',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {},
    _widgetProp: {}
};
import {WidgetInterface} from "@/types/widget";

export const CheckboxWidget: WidgetInterface = {
    name: '多选框',
    icon: 'widget-checkbox',
    tag: 'checkbox',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {},
    _widgetProp: {}
};
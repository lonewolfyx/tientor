import {WidgetInterface} from "@/types/widget";

export const RadioWidget: WidgetInterface = {
    name: '单选框',
    icon: 'widget-radio',
    tag: 'radio',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {},
    _widgetProp: {}
}
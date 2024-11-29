import {WidgetInterface} from "../types/widget";

export const TextareaWidget: WidgetInterface = {
    name: '多行文本框',
    icon: 'widget-textarea',
    tag: 'textarea',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {},
    _widgetProp: {}
}
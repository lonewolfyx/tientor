import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

export const TextareaWidget: WidgetInterface = {
    name: '多行文本框',
    icon: 'widget-textarea',
    tag: 'textarea',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '多行文本框'
            }
        },
    },
    _widgetProp: {}
}
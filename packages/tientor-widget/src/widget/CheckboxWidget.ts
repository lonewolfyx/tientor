import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

export const CheckboxWidget: WidgetInterface = {
    name: '多选框',
    icon: 'widget-checkbox',
    tag: 'checkbox',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '多选框',
            }
        },
    },
    _widgetProp: {}
};
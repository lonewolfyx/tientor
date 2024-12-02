import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

export const RadioWidget: WidgetInterface = {
    name: '单选框',
    icon: 'widget-radio',
    tag: 'radio',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '单选框'
            }
        },
    },
    _widgetProp: {}
}
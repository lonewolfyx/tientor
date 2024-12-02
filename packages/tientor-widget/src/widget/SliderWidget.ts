import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

export const SliderWidget: WidgetInterface = {
    name: '滑块',
    icon: 'widget-slider',
    tag: 'slider',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '滑块'
            }
        },
    },
    _widgetProp: {}
}
import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

export const TransferWidget: WidgetInterface = {
    name: '穿梭框',
    icon: 'widget-transfer',
    tag: 'transfer',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _config: {},
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '穿梭框'
            }
        },
    },
    _widgetProp: {}
}
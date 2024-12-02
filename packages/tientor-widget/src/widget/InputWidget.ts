// import {WidgetInterface} from "../types/widget";

import {ArcoItemProps} from "../item/arco";

export const InputWidget: any = {
    id: '0f9167ba92764612b172e6c278e9030a',
    name: '输入框',
    icon: 'widget-input',
    tag: 'input',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    // 控件 Props
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '输入框',
            }
        },
    },
    _widgetProp: {}
}
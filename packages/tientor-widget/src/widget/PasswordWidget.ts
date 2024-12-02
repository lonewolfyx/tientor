import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

export const PasswordWidget: WidgetInterface = {
    name: '密码输入框',
    icon: 'widget-password',
    tag: 'password',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '密码输入框'
            }
        },
    },
    _widgetProp: {}
}
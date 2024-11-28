import {WidgetInterface} from "@/types/widget";

export const PasswordWidget: WidgetInterface = {
    name: '密码输入框',
    icon: 'widget-password',
    tag: 'password',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {},
    _widgetProp: {}
}
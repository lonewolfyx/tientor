import {WidgetInterface} from "../types/widget";

export const UploadWidget: WidgetInterface = {
    name: '上传',
    icon: 'widget-upload',
    tag: 'upload',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {},
    _widgetProp: {}
}
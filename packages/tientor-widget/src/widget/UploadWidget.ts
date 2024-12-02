import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

export const UploadWidget: WidgetInterface = {
    name: '上传',
    icon: 'widget-upload',
    tag: 'upload',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '上传'
            }
        },
    },
    _widgetProp: {}
}
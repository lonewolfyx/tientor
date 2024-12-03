import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

const ArcoWidgetProps: any = {
    // 默认值
    defaultValue: 0,
    // 评分的总数
    count: 5,
    // 是否允许半选
    allowHalf: false,
    // 是否允许清除
    allowClear: false,
    // 是否开启笑脸分级
    grading: false,
    // 是否为只读状态
    readonly: false,
    // 是否禁用
    disabled: false,
    // 颜色
    color: ''
}
export const RateWidget: WidgetInterface = {
    name: '评分',
    icon: 'widget-rate',
    tag: 'rate',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    // 配置面板
    _config: {
        arco: 'TientorConfigArcoRate',
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '评分'
            }
        },
    },
    _widgetProp: {
        arco: {...ArcoWidgetProps}
    }
}
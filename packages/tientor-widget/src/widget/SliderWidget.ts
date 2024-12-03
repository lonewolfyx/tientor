import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

const ArcoWidgetProps: any = {
    // 默认值
    defaultValue: 0,
    // 滑动的步长
    step: 1,
    // 滑动范围的最小值
    min: 0,
    // 滑动范围的最大值
    max: 100,
    // 设置显示的标签
    marks: {},
    // 滑动输入条的方向
    direction: 'horizontal',
    // 是否禁用
    disable: false,
    // 是否显示刻度线
    showTicks: false,
    // 是否显示输入框
    showInput: false,
    // 是否开启范围选择
    range: false,
    // 是否显示tooltip
    showTooltip: false,
}
export const SliderWidget: WidgetInterface = {
    name: '滑块-✔',
    icon: 'widget-slider',
    tag: 'slider',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    // 配置面板
    _config: {
        arco: 'TientorConfigArcoSlider',
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '滑块'
            }
        },
    },
    _widgetProp: {
        arco: {...ArcoWidgetProps}
    }
}
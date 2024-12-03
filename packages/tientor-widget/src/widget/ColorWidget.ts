import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

const ArcoWidgetProps = {
    // 默认值
    defaultValue: '',
    // 颜色值的格式
    format: '',
    // 尺寸
    size: 'medium',
    // 显示颜色值
    showText: false,
    // 显示历史颜色
    showHistory: false,
    // 显示预设颜色
    showPreset: false,
    // 禁用
    disabled: false,
    // 禁用透明通道
    disabledAlpha: false,
    // 没有触发元素，只显示颜色面板
    hideTrigger: false,
    // 历史颜色的颜色数组
    historyColors: [],
    // 预设颜色的颜色数组
    presetColors: [
        '#00B42A',
        '#3C7EFF',
        '#FF7D00',
        '#F76965',
        '#F7BA1E',
        '#F5319D',
        '#D91AD9',
        '#9FDB1D',
        '#FADC19',
        '#722ED1',
        '#3491FA',
        '#7BE188',
        '#93BEFF',
        '#FFCF8B',
        '#FBB0A7',
        '#FCE996',
        '#FB9DC7',
        '#F08EE6',
        '#DCF190',
        '#FDFA94',
        '#C396ED',
        '#9FD4FD',
    ]
}

export const ColorWidget: WidgetInterface = {
    id: 'c17cf4f97c754ce98887f73814721bf2',
    name: '颜色选择器-✔',
    icon: 'widget-color',
    tag: 'color',
    enabled: {
        element: true,
        antv: false,
        arco: true
    },
    _config: {
        arco: 'TientorConfigArcoColor'
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '颜色选择器'
            }
        },
    },
    _widgetProp: {
        arco: {...ArcoWidgetProps}
    }
}
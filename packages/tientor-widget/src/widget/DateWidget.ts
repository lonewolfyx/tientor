import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

const ArcoWidgetProps = {
    // 默认值
    defaultValue: '',
    // 日期类型,默认 date
    type: 'date',
    // 没有触发元素，只显示选择面板
    hideTrigger: false,
    // 是否禁用
    disabled: false,
    // 日期选择器的尺寸
    size: 'medium',
    // 预设范围在面板上的位置，默认放在下方，侧边一般用于大量预设时间的场景
    shortcutsPosition: 'bottom',
    // 弹出的框的位置
    position: 'bl',
    // 是否在隐藏的时候销毁DOM结构
    unmountOnClose: false,
    // 是否允许清除
    allowClear: true,
    // 是否为只读
    readonly: false,
    // 提示文案
    placeholder: '',
    // 是否显示确认按钮，`showTime = true` 的时候始终显示
    showConfirmBtn: false,
    // 是否禁止键盘输入日期
    disabledInput: false,
    // 缩写模式
    abbreviation: true,
    // 是否增加时间选择
    showTime: false,
    // 开始于周几
    dayStartOfWeek: 0,
    // 范围选择器的类型
    mode: 'date'
}

export const DateWidget: WidgetInterface = {
    id: '18ded3989a544c16a4616860d83302c6',
    name: '日期选择器-✔',
    icon: 'widget-date',
    tag: 'date',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    // 配置面板
    _config: {
        arco: 'TientorConfigArcoDate',
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '日期选择器'
            }
        },
    },
    _widgetProp: {
        arco: {...ArcoWidgetProps}
    }
}
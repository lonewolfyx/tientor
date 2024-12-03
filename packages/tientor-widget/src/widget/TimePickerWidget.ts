import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

const ArcoWidgetProps = {
    // 类型
    type: 'time',
    // 是否允许清空输入框
    allowClear: false,
    // 是否禁用
    disabled: false,
    // 是否为只读状态
    readonly: false,
    // 提示文字
    placeholder: '',
    // 输入框尺寸
    size: 'medium',
    // 12 小时制
    use12Hours: false,
    // 设置 时 / 分 / 秒 的选择间隔
    step: {
        hour: 1,
        minute: 1,
        second: 1
    },
    // 弹出的位置
    position: 'bl',
    // 禁用确认步骤，开启后直接点选时间不需要点击确认按钮
    disableConfirm: false,
    // 是否在关闭后销毁 dom 结构
    unmountOnClose: false
}

export const TimePickerWidget: WidgetInterface = {
    id: 'ef2d958472f74f029b351f0d0f6264d4',
    name: '时间选择器-✔',
    icon: 'widget-time-picker',
    tag: 'timePicker',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    // 配置面板
    _config: {
        arco: 'TientorConfigArcoTimePicker',
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '时间选择器'
            }
        },
    },
    _widgetProp: {
        arco: {...ArcoWidgetProps}
    }
}
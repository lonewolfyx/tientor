import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

const TransferOptions = Array(5).fill(undefined).map((_, index) => ({
    value: `option${index + 1}`,
    label: `Option ${index + 1}`
}));

const ArcoWidgetProps = {
    // 默认值
    defaultValue: [],
    // 穿梭框的数据
    data: TransferOptions,
    // 是否禁用
    disabled: false,
    // 是否开启简单模式（点击选项即移动）
    simple: false,
    // 是否开启单向模式（仅可移动到目标选择框）
    oneWay: false,
    // 是否显示搜索框
    showSearch: false,
    // 是否展示全选勾选框
    showSelectAll: true,
    // 源选择框和目标选择框的标题
    title: ['Source', 'Target'],
    // 源选择框的搜索框配置
    sourceInputSearchProps: {
        placeholder: '请输入你要搜索的内容'
    },
    // 目标选择框的搜索框配置
    targetInputSearchProps: {
        placeholder: '请输入你要搜索的内容'
    }
}

export const TransferWidget: WidgetInterface = {
    id: 'a9dc03a749bc4153bd15d5ba42cdf488',
    name: '穿梭框-✔',
    icon: 'widget-transfer',
    tag: 'transfer',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _config: {
        arco: 'TientorConfigArcoTransfer'
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '穿梭框'
            }
        },
    },
    _widgetProp: {
        arco: {...ArcoWidgetProps}
    }
}
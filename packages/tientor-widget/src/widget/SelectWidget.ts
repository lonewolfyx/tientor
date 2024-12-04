import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

const ArcoWidgetProps = {
    // 默认值
    defaultValue: '',
    // 选项数据
    options: [
        {
            isGroup: true,
            label: '1',
            options: [
                {
                    label: '1-1',
                    value: '1-1'
                },
                {
                    title: '1-2',
                    value: '1-2'
                }
            ]
        },
        {
            isGroup: true,
            label: '1',
            options: [
                {
                    label: '1-1',
                    value: '2-1'
                },
                {
                    label: '1-2-2',
                    value: '2-2'
                }
            ]
        }
    ],
    // 是否开启多选模式
    multiple: false,
    // 选择框的大小
    size: 'medium',
    // 占位符
    placeholder: '',
    // 是否为加载中状态
    loading: false,
    // 是否禁用
    disabled: false,
    // 是否允许清空
    allowClear: false,
    // 是否允许搜索
    allowSearch: false,
    // 是否允许创建
    allowCreate: false,
    // 多选模式下，最多显示的标签数量。0 表示不限制
    maxTagCount: 0,
    // 是否显示输入框的边框
    bordered: true,
    // 是否在无值时默认选择第一个选项
    defaultActiveFirstOption: true,
    // 是否在下拉菜单关闭时销毁元素
    unmountOnClose: false,
    // 是否在下拉菜单中显示额外选项
    showExtraOptions: true,
    // 用于确定选项键值的属性名
    valueKey: 'value',
    // 触发搜索事件的延迟时间
    searchDelay: 500,
    // 多选时最多的选择个数
    limit: 0,
    // 自定义 `SelectOptionData` 中的字段
    fieldNames: {
        // 选项值
        value: 'value',
        // 选项内容
        label: 'label',
        // 是否禁用
        disabled: false
    },
    // 是否开启虚拟滚动条
    scrollbar: true,
    // 传递虚拟列表属性，传入此参数以开启虚拟滚动，[VirtualListProps](#VirtualListProps)
    virtualListProps: {
        // 可视区域高度
        height: NaN,
        // 开启虚拟滚动的元素数量阈值，当数据数量小于阈值时不会开启虚拟滚动。
        threshold: 100,
        // 元素高度是否是固定的
        fixedSize: false,
        // 元素高度不固定时的预估高度
        estimatedSize: 100,
        // 视口边界外提前挂载的元素数量
        buffer: 10
    },
    // 空状态时是否显示header
    showHeaderOnEmpty: false,
    // 空状态时是否显示footer
    showFooterOnEmpty: false,
    // 标签内容不换行
    tagNowrap: false

}
export const SelectWidget: WidgetInterface = {
    id: '0a73a5ca095b4763b531bf71f54bdf18',
    name: '选择器-✔',
    icon: 'widget-select',
    tag: 'select',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _config: {
        arco: 'TientorConfigArcoSelect',
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '选择器'
            }
        },
    },
    _widgetProp: {
        arco: {...ArcoWidgetProps}
    }
}
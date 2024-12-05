import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

const treeData = [
    {
        key: 'node1',
        title: 'Trunk',
        disabled: true,
        children: [
            {
                key: 'node2',
                title: 'Leaf',
            },
        ],
    },
    {
        key: 'node3',
        title: 'Trunk2',
        children: [
            {
                key: 'node4',
                title: 'Leaf',
            },
            {
                key: 'node5',
                title: 'Leaf',
            },
        ],
    },
];


const ArcoWidgetProps = {
    // 默认值
    defaultValue: '',
    // 数据
    data: treeData,
    // 是否禁用
    disabled: false,
    // 是否为加载中状态
    loading: false,
    // 选择框的大小
    size: 'medium',
    // 是否显示边框
    border: true,
    // 是否允许搜索
    allowSearch: false,
    // 是否允许清除
    allowClear: false,
    // 提示文案
    placeholder: '',
    // 是否支持多选
    multiple: false,
    // 最多显示的标签数量，仅在多选模式有效
    maxTagCount: 0,
    // 指定节点数据中的字段名
    fieldNames: {
        // 指定 key 在 TreeNodeData 中的字段名
        key: 'key',
        // 指定 title 在 TreeNodeData 中的字段名
        title: 'title',
        // // 指定 disabled 在 TreeNodeData 中的字段名
        // disabled: '',
        // 指定 children 在 TreeNodeData 中的字段名
        children: 'children',
        // // 指定 isLeaf 在 TreeNodeData 中的字段名
        // isLeaf: '',
        // // 指定 disableCheckbox 在 TreeNodeData 中的字段名
        // disableCheckbox: '',
        // // 指定 checkable 在 TreeNodeData 中的字段名
        // checkable: '',
        // // 指定 icon 在 TreeNodeData 中的字段名
        // icon: ''
    },
    // // 设置value格式。默认是string，设置为true时候，value格式为： { label: string, value: string }
    // labelInValue: false,
    // 是否展示复选框
    treeCheckable: false,
    // 父子节点是否关联
    treeCheckStrictly: false,
    // 定制回显方式 'all' | 'parent' | 'child'
    treeCheckedStrategy: 'all',
    // 是否开启虚拟滚动条
    scrollbar: true,
    // 空状态时是否显示header
    showHeaderOnEmpty: false,
    // 空状态时是否显示footer
    showFooterOnEmpty: false
}

export const TreeSelectWidget: WidgetInterface = {
    id: '126394f0f76945d9a0a8828288088d76',
    name: '树形选择器-✔',
    icon: 'widget-tree-select',
    tag: 'treeSelect',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _config: {
        arco: 'TientorConfigArcoTreeSelect',
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '树形选择'
            }
        },
    },
    _widgetProp: {
        arco: {...ArcoWidgetProps}
    }
}
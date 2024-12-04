import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

const ArcoWidgetProps = {
    // 默认值
    defaultValue: [
        {
            title: 'Trunk 0-0',
            key: '0-0',
            children: [
                {
                    title: 'Leaf',
                    key: '0-0-1',
                },
                {
                    title: 'Branch 0-0-2',
                    key: '0-0-2',
                    disabled: true,
                    children: [
                        {
                            title: 'Leaf',
                            key: '0-0-2-1'
                        },
                        {
                            title: 'Leaf',
                            key: '0-0-2-2',
                            disableCheckbox: true
                        }
                    ]
                },
            ],
        },
        {
            title: 'Trunk 0-1',
            key: '0-1',
            children: [
                {
                    title: 'Branch 0-1-1',
                    key: '0-1-1',
                    children: [
                        {
                            title: 'Leaf ',
                            key: '0-1-1-1',
                        },
                        {
                            title: 'Leaf ',
                            key: '0-1-1-2',
                        },
                    ]
                },
                {
                    title: 'Leaf',
                    key: '0-1-2',
                },
            ],
        },
    ],
    data: [
        {
            title: 'Trunk 0-0',
            key: '0-0',
            children: [
                {
                    title: 'Leaf',
                    key: '0-0-1',
                },
                {
                    title: 'Branch 0-0-2',
                    key: '0-0-2',
                    disabled: true,
                    children: [
                        {
                            title: 'Leaf',
                            key: '0-0-2-1'
                        },
                        {
                            title: 'Leaf',
                            key: '0-0-2-2',
                            disableCheckbox: true
                        }
                    ]
                },
            ],
        },
        {
            title: 'Trunk 0-1',
            key: '0-1',
            children: [
                {
                    title: 'Branch 0-1-1',
                    key: '0-1-1',
                    children: [
                        {
                            title: 'Leaf ',
                            key: '0-1-1-1',
                        },
                        {
                            title: 'Leaf ',
                            key: '0-1-1-2',
                        },
                    ]
                },
                {
                    title: 'Leaf',
                    key: '0-1-2',
                },
            ],
        },
    ],
    // 尺寸
    size: 'medium',
    // 节点是否占据一行
    blockNode: false,
    // 是否默认展开父节点
    defaultExpandAll: false,
    // 是否支持多选
    multiple: false,
    // 是否在节点前添加复选框
    checkable: false,
    // 是否支持选择
    selectable: true,
    // 是否取消父子节点关联
    checkStrictly: false,
    // 定制回填方式
    checkedStrategy: 'all',
    // 指定节点数据中的字段名
    // fieldNames:{},
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
    // 是否展示连接线
    showLine: false,
    // 是否可以拖拽
    draggable: false,
    // 是否开启虚拟列表
    virtual: false,
    // 传递虚拟列表属性，传入此参数以开启虚拟滚动，[VirtualListProps](#VirtualListProps)
    virtualListProps: {
        // 可视区域高度
        height: NaN,
        // 开启虚拟滚动的元素数量阈值，当数据数量小于阈值时不会开启虚拟滚动。
        threshold: 100,
        // 元素高度是否是固定的
        fixedSize: true,
        // 元素高度不固定时的预估高度
        estimatedSize: 100,
        // 视口边界外提前挂载的元素数量
        buffer: 10
    },
    // 是否默认展开已选中节点的父节点
    defaultExpandSelected: false,
    // 是否默认展开已选中复选框节点的父节点
    defaultExpandChecked: false,
    // 是否自动展开已展开节点的父节点
    autoExpandParent: true,
    // 是否开启展开时的过渡动效
    animation: false
}

export const TreeWidget: WidgetInterface = {
    id: 'f90246aaecca478886634d935a337f2b',
    name: '树形控件-✔',
    icon: 'widget-tree',
    tag: 'tree',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _config: {
        arco: 'TientorConfigArcoTree'
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '树形控件'
            }
        },
    },
    _widgetProp: {
        arco: {...ArcoWidgetProps}
    }
}
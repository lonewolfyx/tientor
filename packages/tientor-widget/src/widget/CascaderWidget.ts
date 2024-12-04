import {WidgetInterface} from "../types/widget";
import {ArcoItemProps} from "../item/arco";

const cascaderOptions = [
    {
        value: 'beijing',
        label: 'Beijing',
        children: [
            {
                value: 'chaoyang',
                label: 'ChaoYang',
                children: [
                    {
                        value: 'datunli',
                        label: 'Datunli',
                    },
                ],
            },
            {
                value: 'haidian',
                label: 'Haidian',
            },
            {
                value: 'dongcheng',
                label: 'Dongcheng',
            },
            {
                value: 'xicheng',
                label: 'Xicheng',
                children: [
                    {
                        value: 'jinrongjie',
                        label: 'Jinrongjie',
                    },
                    {
                        value: 'tianqiao',
                        label: 'Tianqiao',
                    },
                ],
            },
        ],
    },
    {
        value: 'shanghai',
        label: 'Shanghai',
        children: [
            {
                value: 'huangpu',
                label: 'Huangpu',
            },
        ],
    },
];

const ArcoWidgetProps = {
    // 默认值
    defaultValue: '',
    // 级联选择器的选项
    options: cascaderOptions,
    // 绑定值是否为路径
    pathMode: false,
    // 是否为多选状态（多选模式默认开启搜索）
    multiple: false,
    // 是否禁用
    disabled: false,
    // 选择框的大小
    size: 'medium',
    // 是否允许搜索
    allowSearch: false,
    // 是否允许清除
    allowClear: false,
    // 展开下一级的触发方式 'click' | 'hover'
    expandTrigger: 'click',
    // 占位符
    placeholder: '',
    // 多选模式下，最多显示的标签数量。0 表示不限制
    maxTagCount: 0,
    // 是否为加载中状态
    loading: false,
    // // 下拉菜单的触发器属性
    // triggerProps: {}, 有点多 后期维护，https://github.com/arco-design/arco-design-vue/blob/main/packages/web-vue/components/cascader/cascader.vue#L326C5-L326C17
    // 是否开启严格选择模式
    checkStrictly: false,
    // // 搜索下拉菜单中的选项是否仅展示标签
    // searchOptionOnlyLabel: false,
    // 触发搜索事件的延迟时间
    searchDelay: 500,
    // // 自定义 `CascaderOption` 中的字段
    // fieldNames:{},有点多 后期维护 https://github.com/arco-design/arco-design-vue/blob/main/packages/web-vue/components/cascader/cascader.vue#L383
    // 用于确定选项键值的属性名
    valueKey: 'value',
    // 是否展开子菜单
    expandChild: false,
    // 标签内容不换行
    tagNowrap: false,
}

export const CascaderWidget: WidgetInterface = {
    id: '42cac5cddce04e9894bb50c576063a94',
    name: '级联选择器-✔',
    icon: 'widget-cascader',
    tag: 'cascader',
    enabled: {
        element: true,
        antv: true,
        arco: true
    },
    _config: {
        arco: 'TientorConfigArcoCascader'
    },
    _itemProps: {
        arco: {
            ...ArcoItemProps, ...{
                label: '级联选择器',
            }
        },
    },
    _widgetProp: {
        arco: {...ArcoWidgetProps}
    }
};
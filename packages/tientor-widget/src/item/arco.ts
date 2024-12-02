export interface ArcoItemPropsInterface {
    field: string;
    label: string;
    tooltip: string;
    showColon: boolean;
    disabled: boolean;
    help: string;
    extra: string;
    required: boolean;
    asteriskPosition: 'start' | 'end';
    hideLabel: boolean;
    hideAsterisk: boolean;
    rules: Record<string, string[]>;
}

export const ArcoItemProps: ArcoItemPropsInterface = {
    // 表单元素的数据值
    field: '',
    // 标签文本
    label: '',
    // 提示内容
    tooltip: '',
    // 是否显示冒号
    showColon: false,
    // 是否禁用
    disabled: false,
    // 帮助文案
    help: '',
    // 额外显示的文案
    extra: '',
    // 是否必须填写
    required: false,
    // 可选择将星号置于 label 前/后
    asteriskPosition: 'start',
    // 是否隐藏标签
    hideLabel: false,
    // 是否隐藏星号
    hideAsterisk: false,
    // 表单项校验规则（优先级高于 form 的 rules）
    rules: {}
}
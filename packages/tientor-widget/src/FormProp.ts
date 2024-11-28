export interface FormPropInterface {
    model: {};
    layout: string;
    size: string;
    labelAlign: string;
    rules: {};
    autoLabelWidth: boolean;
    scrollToFirstError: boolean;
    inline: boolean;
    inlineMessage: string;
}

export const FormProp: FormPropInterface = {
    // 表单数据对象
    model: {},
    // 表单的布局方式
    layout: 'horizontal',
    // 表单控件的尺寸
    size: '',
    // 是否禁用表单
    // disabled: true,
    // 标签的对齐方向
    labelAlign: 'left',
    // 表单项校验规则
    rules: {},
    // 是否开启自动标签宽度，仅在 `layout="horizontal"` 下生效。
    autoLabelWidth: false,
    // 验证失败后滚动到第一个错误字段
    scrollToFirstError: false,

    // 是否单行表单模式
    inline: false,
    // 是否以行内形式展示校验信息
    inlineMessage: ''
}
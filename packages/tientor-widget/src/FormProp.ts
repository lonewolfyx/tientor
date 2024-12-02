import {ArcoFormPropsInterface} from "./types/formProps";

// Arco 表单配置
export const ArcoFormProp: ArcoFormPropsInterface = {
    // 表单数据对象
    model: {},
    // 表单的布局方式
    layout: 'horizontal',
    // 表单控件的尺寸
    size: 'medium',
    // 标签的对齐方向
    labelAlign: 'left',
    // 是否禁用表单
    disabled: false,
    // 表单项校验规则
    rules: {},
    // 是否开启自动标签宽度，仅在 `layout="horizontal"` 下生效。
    autoLabelWidth: false,
    // 验证失败后滚动到第一个错误字段
    scrollToFirstError: false
}

// 默认 Arco 表单配置
export const FormProp: any = {
    ...ArcoFormProp
}


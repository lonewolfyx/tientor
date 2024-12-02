import {FieldRule} from "@arco-design/web-vue";

export interface ArcoFormPropsInterface {
    // 表单数据对象
    model: Object,
    // 表单的布局方式
    layout: 'horizontal' | 'vertical' | 'inline',
    // 表单控件的尺寸
    size: 'mini' | 'small' | 'medium' | 'large',
    // 标签的对齐方向
    labelAlign: 'left' | 'right',
    // 是否禁用表单
    disabled: boolean,
    // 表单项校验规则
    rules: Record<string, FieldRule | FieldRule[]>,
    // 是否开启自动标签宽度，仅在 `layout="horizontal"` 下生效。
    autoLabelWidth: boolean,
    // 验证失败后滚动到第一个错误字段
    scrollToFirstError: boolean
}

export interface FormPropsInter {
    arco: ArcoFormPropsInterface;
    // antv: AntvFormPropsInterface;
    // element: ElementFormPropsInterface;
}
import {BasicComponentInterface} from "./types/BasicComponentInterface";
import {InputWidget} from "./widget/InputWidget";
import {TextareaWidget} from "./widget/TextareaWidget";
import {PasswordWidget} from "./widget/PasswordWidget";
import {NumberWidget} from "./widget/NumberWidget";
import {RadioWidget} from "./widget/RadioWidget";
import {CheckboxWidget} from "./widget/CheckboxWidget";
import {SelectWidget} from "./widget/SelectWidget";
import {SwitchWidget} from "./widget/SwitchWidget";
import {RateWidget} from "./widget/RateWidget";
import {SliderWidget} from "./widget/SliderWidget";
import {DateWidget} from "./widget/DateWidget";
import {DateTimeWidget} from "./widget/DateTimeWidget";
import {TimePickerWidget} from "./widget/TimePickerWidget";
import {TimeSelectWidget} from "./widget/TimeSelectWidget";
import {TreeWidget} from "./widget/TreeWidget";
import {TreeSelectWidget} from "./widget/TreeSelectWidget";
import {CascaderWidget} from "./widget/CascaderWidget";
import {UploadWidget} from "./widget/UploadWidget";
import {ColorWidget} from "./widget/ColorWidget";
import {TransferWidget} from "./widget/TransferWidget";

export const basicComponents: BasicComponentInterface[] = [
    // 输入框
    InputWidget,
    // 多行输入框
    TextareaWidget,
    // 密码输入框
    PasswordWidget,
    // 数字输入框
    NumberWidget,
    // 单选框
    RadioWidget,
    // 多选框
    CheckboxWidget,
    // 选择器
    SelectWidget,
    // 开关
    SwitchWidget,
    // 评分
    RateWidget,
    // 滑块
    SliderWidget,
    // 日期选择器
    DateWidget,
    // 日期时间选择器
    DateTimeWidget,
    // 时间选择器
    TimePickerWidget,
    // 时间选择
    TimeSelectWidget,
    // 树形控件
    TreeWidget,
    // 树形选择
    TreeSelectWidget,
    // 级联选择器
    CascaderWidget,
    // 上传
    UploadWidget,
    // 颜色选择器
    ColorWidget,
    // 穿梭框
    TransferWidget
];
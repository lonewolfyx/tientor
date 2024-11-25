import {withInstall} from "../_utils/index.js";
import TientorFormItem from "./FormItem.vue";

export const FormItem = withInstall(TientorFormItem); // 增强组件，添加 install 方法
export default FormItem;

export * from './FormItem.vue'
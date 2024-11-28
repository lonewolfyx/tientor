import {withInstall} from "element-plus/es/utils/index";
import TientorFormItem from "@/form-item/FormItem.vue";

export const FormItem = withInstall(TientorFormItem); // 增强组件，添加 install 方法
export default TientorFormItem;
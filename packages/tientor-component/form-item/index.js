import TientorFormItem from "./FormItem.vue";
import {withInstall} from "element-plus/es/utils/index";

export const FormItem = withInstall(TientorFormItem); // 增强组件，添加 install 方法
export default TientorFormItem;
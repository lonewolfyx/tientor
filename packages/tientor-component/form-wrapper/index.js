import TientorFormWrapper from "./FormWrapper.vue";
import {withInstall} from "element-plus/es/utils/index";

export const FormWrapper = withInstall(TientorFormWrapper); // 增强组件，添加 install 方法
export default TientorFormWrapper;

// export * from './FormWrapper.vue'
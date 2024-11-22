import TientorInput from "./input.vue";
import {withInstall} from "../_utils/index.js";

export const Input = withInstall(TientorInput); // 增强组件，添加 install 方法
export default Input;

export * from './input.vue'
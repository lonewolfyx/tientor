import {withInstall} from "../_utils/index.js";

const TientorForm = defineComponent({
    name: 'TientorForm',
    setup: () => {
        return () => {
            return h('a', {
                href: 'https://github.com/tientor/tientor-form',
                target: '_blank',
            }, 'sadsd')
        }
    }
})

export const Form = withInstall(TientorForm); // 增强组件，添加 install 方法
export default Form;
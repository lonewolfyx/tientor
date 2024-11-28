import TientorFormWrapper from "@/form-wrapper/index.js";
import TientorFormItem from "@/form-item/index.js";

/**
 * 注册组件
 * @param app - Vue 应用实例
 * @param components - 组件对象
 * @param options - 可选参数，来自于 vue.use 方法
 */
export const registerComponents = (app, components, options) => {
    for (const key in components) {
        const component = components[key];
        if (component.install && typeof component.install === 'function') {
            // 调用每个组件的 install 方法
            component.install(app, options);
        } else {
            console.warn(`Component ${key} does not provide an install method.`);
        }
    }
}
const TientorComponent = {
    install(app) {
        app.component(TientorFormWrapper.name, TientorFormWrapper);
        app.component(TientorFormItem.name, TientorFormItem);
    },

}

export {TientorFormWrapper, TientorFormItem}
export default TientorComponent;

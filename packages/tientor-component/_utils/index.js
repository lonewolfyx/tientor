import {setGlobalConfig} from "./global-config.js";

/**
 * 为组件添加 install 方法
 * @param {Object} component - 需要添加 install 方法的组件
 * @returns {Object} 包含 install 方法的组件
 */
export const withInstall = (component) => {
    component.install = (app, options) => {
        const {name} = component;
        // 设置全局配置信息
        setGlobalConfig(app, options);

        if (!name) {
            console.warn('Component is missing a name property.');
        } else {
            app.component(name, component);
        }
    };

    return component;
};

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
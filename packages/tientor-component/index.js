import Input from "./input/index.js";
import {registerComponents} from "./_utils/index.js";
import Form from "./form/index.js";

import * as ArcoVue from '@arco-design/web-vue';
import * as Antd from 'ant-design-vue';
import * as ElementPlus from 'element-plus';

import {GLOBAL_COMPONENT_NAME} from "./_utils/global-config.js";
import FormItem from "./form-item/index.js";

// 后续更多的脚本在此添加并且曝光
const components = {
    Form,
    Input,
    FormItem,
};


const extractComponents = (library) => {
    // 只保留 Vue 组件（通常是函数或对象）
    return Object.keys(library).reduce((components, key) => {
        if (typeof library[key] === 'object' || typeof library[key] === 'function') {
            components[key] = library[key];
        }
        return components;
    }, {});
};

/**
 * 初始化导出第三方依赖组件库
 * @param app
 * @param options
 */
const initTientorThirdPartyLibraries = (app, options) => {
    // 可选的第三方 UI 库
    const thirdPartyLibraries = {
        arco: ArcoVue,
        antv: Antd,
        element: ElementPlus,
    };

    // 根据 options.ui 加载对应的库
    const selectedLibraryKey = options?.ui?.toLowerCase(); // 获取配置中的 ui 类型
    if (selectedLibraryKey && thirdPartyLibraries[selectedLibraryKey]) {

        // 暴露到 globalProperties
        app.config.globalProperties[GLOBAL_COMPONENT_NAME] = extractComponents(thirdPartyLibraries[selectedLibraryKey]);

    } else {
        console.warn(
            `UI library "${options?.ui}" is not recognized. Please use one of: ${Object.keys(thirdPartyLibraries).join(', ')}.`
        );
    }
}


const TientorVue = {
    install(app, options) {
        // 初始化导入第三方 UI 组件库
        initTientorThirdPartyLibraries(app, options);

        // 使用工具函数动态注册所有组件
        registerComponents(app, components, options);
    }
};

export default TientorVue;

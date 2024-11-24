import {getCurrentInstance} from 'vue';
import widgetMap from "../config/widgetMap.js";

export const GLOBAL_CONFIG_NAME = '$tientor';
export const GLOBAL_COMPONENT_NAME = '$tientorUILibrary'

/**
 * 写入全局配置文件
 * @param app
 * @param options
 */
export const setGlobalConfig = (app, options) => {
    if (options && options.ui) {
        app.config.globalProperties[GLOBAL_CONFIG_NAME] = {
            ui: options.ui
        }
    }
    // app.config.globalProperties.$tientor = config;
    // console.log(app, options)
}

// 获取当前的主题ui框架
export const getUiFramework = () => {
    const instance = getCurrentInstance();

    return instance?.appContext.config.globalProperties[GLOBAL_CONFIG_NAME]?.ui;
}

/**
 * 获取当前的主题 ui 组件列表
 */
export const getUiComponents = (component) => {
    const instance = getCurrentInstance();
    const globalProperties = instance?.appContext.config.globalProperties;
    const {ui} = globalProperties[GLOBAL_CONFIG_NAME];

    console.log(globalProperties[GLOBAL_COMPONENT_NAME])


    console.log('globalProperties', globalProperties, widgetMap[ui][component], component)
    // return instance?.appContext.config.globalProperties[GLOBAL_COMPONENT_NAME]?.[component];
    return globalProperties[GLOBAL_COMPONENT_NAME]?.[widgetMap[ui][component]];
}
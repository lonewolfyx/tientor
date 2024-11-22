import {getCurrentInstance} from 'vue';

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
    console.log(instance?.appContext.config.globalProperties[GLOBAL_COMPONENT_NAME])
    return instance?.appContext.config.globalProperties[GLOBAL_CONFIG_NAME]?.ui;
}

/**
 * 获取当前的主题 ui 组件列表
 */
export const getUiComponents = (component) => {
    const instance = getCurrentInstance();
    console.log(instance?.appContext.config.globalProperties[GLOBAL_COMPONENT_NAME]?.[component])
    return instance?.appContext.config.globalProperties[GLOBAL_COMPONENT_NAME]?.[component];
}
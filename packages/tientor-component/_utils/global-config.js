import {getCurrentInstance} from 'vue';

const GLOBAL_CONFIG_NAME = '$tientor';
export const setGlobalConfig = (app, options) => {
    if (options && options.ui) {
        app.config.globalProperties[GLOBAL_CONFIG_NAME] = {
            ui: options.ui
        }
    }

    // app.config.globalProperties.$tientor = config;
    console.log(app, options)
}

// 获取当前的主题ui框架
export const getUiFramework = () => {
    const instance = getCurrentInstance();

    console.log(instance?.appContext.config.globalProperties[GLOBAL_CONFIG_NAME]?.ui)
}
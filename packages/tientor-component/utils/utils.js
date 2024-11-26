import * as ArcoVue from '@arco-design/web-vue';
import * as Antd from 'ant-design-vue';
import * as ElementPlus from 'element-plus';
import widgetMap from "../config/widgetMap.js";

const currentUi = ref('')
const widget = ref({})

// 当前已加载的 CSS 文件路径
let currentCssPath = null;

// 加载 CSS，并确保只加载一次
const loadCss = (path) => {
    if (currentCssPath === path) {
        return; // 如果已经加载，不重复加载
    }
    // 删除之前加载的 CSS
    if (currentCssPath) {
        const oldLink = document.querySelector(`link[href="${currentCssPath}"]`);
        if (oldLink) {
            oldLink.remove();
        }
    }

    // 加载新的 CSS 文件
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = path;
    document.head.appendChild(link);
    currentCssPath = path; // 更新当前 CSS 路径
}

// 设置所是有的 ui 组件库
export const setUiComponent = (ui) => {
    const uiLibraries = {
        element: ElementPlus,
        antv: Antd,
        arco: ArcoVue
    }

    currentUi.value = ui

    if (ui && uiLibraries[ui]) {
        switch (ui) {
            // 确保加载 Element Plus 的 CSS
            case 'element':
                loadCss('https://unpkg.com/element-plus/dist/index.css');
                break;
            // 确保加载 Arco 的 CSS
            case 'arco':
                loadCss('https://unpkg.com/@arco-design/web-vue/dist/arco.css');
                break;
        }
        widget.value = uiLibraries[ui];
        // console.log(uiLibraries[ui])
    } else {
        console.warn(
            `UI library "${ui}" is not recognized. Please use one of: ${Object.keys(uiLibraries).join(', ')}.`
        );
    }

}


// 获取指定的 ui 组件库
export const getUiComponent = (component = '') => {
    console.log(currentUi.value, widget.value, widgetMap[currentUi.value])
    return widget.value[widgetMap[currentUi.value][component]]
}
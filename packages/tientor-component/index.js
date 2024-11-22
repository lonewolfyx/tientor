import Input from "./input/index.js";
import {registerComponents} from "./_utils/index.js";

// 后续更多的脚本在此添加并且曝光
const components = {
    Input,
};

const TientorVue = {
    install(app, options) {
        // 使用工具函数动态注册所有组件
        registerComponents(app, components, options);
    }
};

export default TientorVue;

import TientorInput from './index.vue';

const Input = {
    install(app, options = {}) {
        console.log('Options:', options);
        app.component(TientorInput.name, TientorInput); // 注册组件
    }
};

export default Input;

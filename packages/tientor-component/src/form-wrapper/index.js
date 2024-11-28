import '@/assets/tailwindcss.css';
import TientorFormWrapper from "@/form-wrapper/FormWrapper.vue";

// export const FormWrapper = withInstall(TientorFormWrapper); // 增强组件，添加 install 方法
// export default TientorFormWrapper;

// export * from './FormWrapper.vue'


TientorFormWrapper.install = (app) => {
    app.component(TientorFormWrapper.name, TientorFormWrapper);
};

export default TientorFormWrapper;
import {uuid} from "@/util/util.js";
import {clone} from "radash";
import InputWidget from "@tientor/tientor-widget/src/widget/InputWidget.js";
import FormProp from "@tientor/tientor-widget/src/FormProp.js";

export const useDesignerStore = defineStore('designer', () => {

    //
    const formConfig = ref({
        formProp: FormProp,
        widgetList: [InputWidget],
        currentWidget: {}
    })

    // 表单配置
    const formProp = computed({
        get() {
            return formConfig.value.formProp;
        },
        set(value) {
            formConfig.value.formProp = value;
        }
    })

    // 组件列表
    const widgetList = computed({
        get() {
            return formConfig.value.widgetList
        },
        set(value) {
            console.log('gengx组件列表')
            formConfig.value.widgetList = value;
        }
    });

    // 当前组件
    const currentWidget = computed({
        get() {
            return formConfig.value.currentWidget;
        },
        set(value) {
            return formConfig.value.currentWidget = value;
        }
    });


    // 添加组件
    const addFormWidget = (widget) => {
        const id = uuid().split('-').join('')
        const newWidget = {
            ...clone(widget),
            id
        }
        formConfig.value.widgetList.push(newWidget)
    }

    // 克隆表单项
    const cloneWidgetItem = (widget) => {
        console.log('zhix')
        console.log(widget)

        const newWidget = clone(widget)
        const id = uuid().split('-').join('')
        return {
            ...newWidget,
            id
        }
    }

    // 清空组件
    const clearWidget = () => {
        formConfig.value.widgetList = []
    }

    return {
        formConfig,
        formProp,
        widgetList,
        currentWidget,
        clearWidget,
        addFormWidget,
        cloneWidgetItem
    }
}, {
    persist: true
})
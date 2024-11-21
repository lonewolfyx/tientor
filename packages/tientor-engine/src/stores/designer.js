import {uuid} from "@/util/util.js";
import {clone} from "radash";

export const useDesignerStore = defineStore('designer', () => {

    //
    const formConfig = ref({
        widgetList: [{
            "id": "077939ac6c94419f9abfbb1621d824ae",
            "name": "输入框",
            "icon": "widget-input",
            "tag": "input",
            "prop": {}
        }],
        currentWidget: {}
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
        widgetList,
        currentWidget,
        clearWidget,
        addFormWidget,
        cloneWidgetItem
    }
})
import {defineStore} from 'pinia';

import {clone} from "radash";
import {uuid} from "@/utils/utils.js";
import {FormProp, InputWidget} from "@tientor/tientor-widget";

export const useDesignerStore = defineStore('designer', () => {

    //
    const formConfig = ref({
        formProp: FormProp,
        widgetList: [InputWidget],
        currentWidget: InputWidget,
        first: InputWidget
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

    // 第一个组件
    const firstWidget = computed({
        get() {
            return formConfig.value.first;
        },
        set(value) {
            return formConfig.value.first = value;
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
        updateCurrentWidget(newWidget)
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

    // 更新当前选中的数据值
    const updateCurrentWidget = (widget) => {
        formConfig.value.currentWidget = widget
        getFirstWidget()
    }

    // 获取第一个组件
    const getFirstWidget = () => {
        formConfig.value.first = formConfig.value.widgetList?.[0]
    }

    return {
        formConfig,
        formProp,
        widgetList,
        currentWidget,
        firstWidget,
        clearWidget,
        addFormWidget,
        cloneWidgetItem,
        updateCurrentWidget
    }
}, {
    persist: true
})
import {defineStore} from 'pinia';

import {clone} from "radash";
import {uuid} from "./utils/utils.js";
import {FormProp} from "@tientor/tientor-widget";

export const useDesignerStore = defineStore('designer', () => {

    // 配置信息
    const formConfig = ref({
        formProp: FormProp,
        // widgetList: [RadioWidget],
        widgetList: [],
        // currentWidget: {...RadioWidget},
        currentWidget: {},
        // first: {...RadioWidget},
        first: {},
        selectIndex: 0
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
            console.log('widgetList', value)
            formConfig.value.widgetList = value;
        }
    });

    // 当前组件
    const currentWidget = computed({
        get() {
            return formConfig.value.currentWidget;
        },
        set(value) {
            console.log('currentWidget', value)
            formConfig.value.currentWidget = value;
        }
    });

    // 当前的选择组件的 index key
    const selectIndex = computed({
        get() {
            return formConfig.value.selectIndex;
        },
        set(value) {
            console.log('selectIndex', value)
            formConfig.value.selectIndex = value;
        }
    });

    // 第一个组件
    const firstWidget = computed({
        get() {
            return formConfig.value.first;
        },
        set(value) {
            console.log('firstWidget', value)
            formConfig.value.first = value;
        }
    });


    // 添加组件
    const addFormWidget = (e) => {
        console.log('新增加的组件', JSON.stringify(e))
        const newWidget = cloneWidgetItem(e)
        formConfig.value.widgetList.push(newWidget)
        updateCurrentWidget(newWidget)
    }

    // 克隆表单项
    const cloneWidgetItem = (widget) => {
        const newWidget = clone(widget)
        console.log(JSON.stringify(widget))
        const id = uuid().split('-').join('')
        return {
            ...newWidget,
            id
        }
    }

    // 清空组件
    const clearWidget = () => {
        formConfig.value.widgetList = [];
        formConfig.value.currentWidget = {};
        formConfig.value.first = {};
    }

    // 删除当前组件
    const deleteWidget = (widget) => {
        const index = formConfig.value.widgetList.findIndex(item => item.id === widget.id)
        if (index !== -1) {
            formConfig.value.widgetList.splice(index, 1)
            updateCurrentWidget(
                formConfig.value.widgetList[index] ||
                formConfig.value.widgetList[index - 1]
            )
        }
    }

    // 更新当前选中的数据值
    const updateCurrentWidget = (widget) => {
        currentWidget.value = widget;
        selectIndex.value = formConfig.value.widgetList.findIndex(item => item.id === widget.id)
        getFirstWidget()
    }

    // 获取第一个组件
    const getFirstWidget = () => {
        formConfig.value.first = formConfig.value.widgetList?.[0]
    }

    // 复制组件
    const copyWidget = (widget) => {
        const newWidget = cloneWidgetItem(widget);
        const index = formConfig.value.widgetList.findIndex(item => item.id === widget.id)
        console.log('index', index)
        formConfig.value.widgetList.splice(index + 1, 0, newWidget);
        // updateCurrentWidget(newWidget)
    }

    return {
        formConfig,
        formProp,
        widgetList,
        currentWidget,
        selectIndex,
        firstWidget,
        clearWidget,
        addFormWidget,
        cloneWidgetItem,
        copyWidget,
        deleteWidget,
        updateCurrentWidget
    }
}, {
    persist: true
})
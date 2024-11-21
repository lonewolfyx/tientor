import {uuid} from "@/util/util.js";
import {clone} from "radash";

export const useDesignerStore = defineStore('designer', () => {

    //
    const formConfig = ref({
        widgetList: [ { "id": "1235374bfd504e22b00a8b2a99c9e7d4", "name": "输入框", "icon": "widget-input", "tag": "input", "prop": {} }, { "name": "多行文本框", "icon": "widget-textarea", "id": "86623e9221104160bb176f5622119189" }, { "name": "密码输入框", "icon": "widget-password", "id": "8a375586b028484487222c0e04fd9d89" }, { "name": "数字输入框", "icon": "widget-number", "id": "2f33af8e56fe4f3e8836cb227684ef0c" }, { "name": "单选框", "icon": "widget-radio", "id": "d7b74dfe699c4f0097addf3bf4db4ce2" }, { "name": "多选框", "icon": "widget-checkbox", "id": "9488f3ebdc75409fb9794f6cb8528f3c" }, { "name": "选择器", "icon": "widget-select", "id": "06d67354c2fa4ed19d6dbf7b796f34ad" }, { "name": "开关", "icon": "widget-switch", "id": "7134f23c06a4413788c9ad73f1f919ec" }, { "name": "评分", "icon": "widget-rate", "id": "53476dedb8054b50ae94b3d3731f7e12" }, { "name": "滑块", "icon": "widget-slider", "id": "3f7b07345fcd48b4bed7de9b6798d940" }, { "name": "日期选择器", "icon": "widget-date", "id": "92985efede114fd88b9957f1a6540737" }, { "name": "日期时间选择器", "icon": "widget-date-time", "id": "1b256e45f9da4d3b84caed5b9052c50f" }, { "name": "时间选择器", "icon": "widget-time-picker", "id": "383b6b5ae209448c9ebf2e3efc5dd619" }, { "name": "时间选择", "icon": "widget-time-select", "id": "ce78c48a883745438821505e64f50b50" }, { "name": "树形控件", "icon": "widget-tree", "id": "bd4db909e01143deb57b73f740a089f0" }, { "name": "树形选择器", "icon": "widget-tree-select", "id": "3f069ce40b7b453c887bac30e1e99ec3" }, { "name": "级联选择器", "icon": "widget-cascader", "id": "14452672be99468d9a0c20d5991ea32f" }, { "name": "上传", "icon": "widget-upload", "id": "a78b6274d17741308aa795890d41bfb9" }, { "name": "颜色选择器", "icon": "widget-color", "id": "50bd2a374bfc4625b70c9387fd2299c4" }, { "name": "穿梭框", "icon": "widget-transfer", "id": "2bb896ff588e4bf2b31b0ccffaa95376" }, { "id": "9f011788c8314537ac433e8be7415fe1", "name": "输入框", "icon": "widget-input", "tag": "input", "prop": {} }, { "name": "多行文本框", "icon": "widget-textarea", "id": "7ea4b0fd56c5408ea3ef297c1261f351" }, { "name": "密码输入框", "icon": "widget-password", "id": "4424bead5171488f8b409aeb4c492798" }, { "name": "数字输入框", "icon": "widget-number", "id": "fb4ce6246a3a4319abd71c4ec31870dd" }, { "name": "单选框", "icon": "widget-radio", "id": "58ce43de04064e48b7e8dd2644f247f1" }, { "name": "多选框", "icon": "widget-checkbox", "id": "5c45355892304f828d6b743406e9dce9" }, { "name": "选择器", "icon": "widget-select", "id": "7528a8d135a946e993ac189b31eb2cf6" }, { "name": "开关", "icon": "widget-switch", "id": "f3c51f25e20a4485a0a97d32be4df690" }, { "name": "评分", "icon": "widget-rate", "id": "cba64728de88454c808734cad56b45b2" }, { "name": "滑块", "icon": "widget-slider", "id": "5e317a21476946508c960723cf431445" }, { "name": "日期选择器", "icon": "widget-date", "id": "930e405827834459957e65c368e863ed" }, { "name": "日期时间选择器", "icon": "widget-date-time", "id": "22c2eac9ba5a42b2982cf9bdb33ce4dc" }, { "name": "时间选择器", "icon": "widget-time-picker", "id": "d47f07e690fc45dda6497cf0f5e3c384" }, { "name": "时间选择", "icon": "widget-time-select", "id": "e7941bbb1e974f1aaa0ff3807e0caa20" }, { "name": "树形控件", "icon": "widget-tree", "id": "f56a2e2a41fe458694bd94397b22e127" }, { "name": "树形选择器", "icon": "widget-tree-select", "id": "144ea51c67d345908667ff3e61efb20d" }, { "name": "级联选择器", "icon": "widget-cascader", "id": "c4981b55f389420f9e1476cf7939b5d7" }, { "name": "上传", "icon": "widget-upload", "id": "bbfa6a20648b4cc5b164bf2ece8108f2" }, { "name": "颜色选择器", "icon": "widget-color", "id": "91b580645e174eb583f71f3fab3ca77c" }, { "name": "穿梭框", "icon": "widget-transfer", "id": "3072f0c0092543d0983103ca2f47de40" } ]
,
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

    return {
        formConfig,
        widgetList,
        currentWidget,
        addFormWidget,
        cloneWidgetItem
    }
})
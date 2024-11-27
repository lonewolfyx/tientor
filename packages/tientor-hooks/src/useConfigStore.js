import {defineStore} from 'pinia';
// import {ref} from 'vue'

export const useConfigStore = defineStore('config', () => {
    const config = ref({
        // ui组件库
        ui: 'element',
        // 设备，desktop - web端，mobile - 移动端
        device: 'desktop',
    })

    // ui 组件名称
    const ui = computed({
        get() {
            return config.value.ui;
        },
        set(value) {
            config.value.ui = value;
        }
    })

    // 设备
    const device = computed({
        get() {
            return config.value.device;
        },
        set(value) {
            console.log('改变了device', value)
            config.value.device = value;
        }
    })

    // 设置 ui 组件库
    const settingUi = (name) => {
        config.value.ui = name;
    }

    // 设置所在设备
    const settingDevice = (name) => {
        console.log(name)
        config.value.device = name;
    }

    return {
        config,
        ui,
        device,
        settingUi,
        settingDevice
    }
}, {
    persist: true
})